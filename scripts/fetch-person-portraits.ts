import { setDefaultResultOrder } from "node:dns";
import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { persons } from "../src/data/core";

setDefaultResultOrder("ipv4first");

const WIKIDATA_SPARQL = "https://query.wikidata.org/sparql";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const USER_AGENT = "HistPoliticor/0.1 (educational project; local portrait import)";
const RETRIEVED_AT = new Date().toISOString().slice(0, 10);

interface SparqlValue {
  value: string;
}

interface SparqlBinding {
  personId: SparqlValue;
  item: SparqlValue;
  itemLabel: SparqlValue;
  dob?: SparqlValue;
  image: SparqlValue;
  article?: SparqlValue;
}

interface CommonsMetadataValue {
  value?: string;
}

interface CommonsImageInfo {
  descriptionurl: string;
  mime: string;
  thumbmime?: string;
  thumburl?: string;
  url: string;
  extmetadata?: Record<string, CommonsMetadataValue>;
}

interface PortraitRecord {
  path: string;
  wikipediaTitle: string;
  wikipediaUrl: string;
  wikidataId: string;
  commonsFile: string;
  sourceUrl: string;
  author: string;
  license: string;
  licenseUrl?: string;
  retrievedAt: string;
}

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function apiJson<T>(url: URL, attempt = 0): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      signal: AbortSignal.timeout(45_000)
    });
    if ((response.status === 429 || response.status >= 500) && attempt < 6) {
      const retryAfter = Number(response.headers.get("retry-after") ?? 0) * 1000;
      await wait(Math.max(retryAfter, 1_000 * (attempt + 1)));
      return apiJson<T>(url, attempt + 1);
    }
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
    return response.json() as Promise<T>;
  } catch (error) {
    if (attempt >= 6) throw error;
    await wait(1_000 * (attempt + 1));
    return apiJson<T>(url, attempt + 1);
  }
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

function plainText(value = "") {
  return value
    .replace(/<br\s*\/?\s*>/gi, ", ")
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#039;", "'")
    .replaceAll("&nbsp;", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fullName(person: (typeof persons)[number]) {
  return `${person.firstName} ${person.lastName}`;
}

function expectedWikipediaUrl(person: (typeof persons)[number]) {
  return `https://fr.wikipedia.org/wiki/${encodeURIComponent(fullName(person).replaceAll(" ", "_"))}`;
}

function sparqlString(value: string) {
  return `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

function commonsFilename(binding: SparqlBinding) {
  return decodeURIComponent(binding.image.value.split("/").pop() ?? "").replaceAll("_", " ");
}

function wikipediaTitle(binding: SparqlBinding, fallback: string) {
  if (!binding.article) return fallback;
  return decodeURIComponent(binding.article.value.split("/wiki/").pop() ?? fallback).replaceAll("_", " ");
}

function commonsThumbnailUrl(filename: string) {
  const url = new URL("https://commons.wikimedia.org/w/thumb.php");
  url.searchParams.set("f", filename);
  url.searchParams.set("w", "480");
  return url.toString();
}

function wikidataId(binding: SparqlBinding) {
  return binding.item.value.split("/").pop() ?? binding.item.value;
}

function selectBinding(person: (typeof persons)[number], bindings: SparqlBinding[]) {
  const name = normalize(fullName(person));
  const ranked = bindings
    .map((binding) => {
      let score = normalize(binding.itemLabel.value) === name ? 30 : 0;
      const title = wikipediaTitle(binding, "").replace(/\s*\([^)]*\)\s*$/, "");
      if (normalize(title) === name) score += 30;
      if (binding.article) score += 10;
      if (person.bornAt && binding.dob?.value.slice(0, 10) === person.bornAt) score += 100;
      return { binding, score };
    })
    .sort((a, b) => b.score - a.score);
  if (!ranked[0]) return undefined;
  if (ranked[1] && ranked[0].score === ranked[1].score && ranked[0].binding.item.value !== ranked[1].binding.item.value) return undefined;
  return ranked[0].binding;
}

async function discoverPortraits() {
  const bindings: SparqlBinding[] = [];
  for (let index = 0; index < persons.length; index += 40) {
    const batch = persons.slice(index, index + 40);
    const values = batch
      .map((person) => `(${sparqlString(person.id)} ${sparqlString(fullName(person))}@fr ${Number(person.bornAt?.slice(0, 4) ?? 0)})`)
      .join("\n");
    const query = `
      SELECT DISTINCT ?personId ?item ?itemLabel ?dob ?image ?article WHERE {
        VALUES (?personId ?name ?birthYear) { ${values} }
        ?item (rdfs:label|skos:altLabel) ?name;
              wdt:P31 wd:Q5;
              wdt:P18 ?image.
        OPTIONAL { ?item wdt:P569 ?dob. }
        OPTIONAL {
          ?article schema:about ?item;
                   schema:isPartOf <https://fr.wikipedia.org/>.
        }
        FILTER(?birthYear = 0 || YEAR(?dob) = ?birthYear)
        SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
      }
    `;
    const url = new URL(WIKIDATA_SPARQL);
    url.searchParams.set("format", "json");
    url.searchParams.set("query", query);
    const result = await apiJson<{ results: { bindings: SparqlBinding[] } }>(url);
    bindings.push(...result.results.bindings);
    console.log(`Wikidata : ${Math.min(index + batch.length, persons.length)}/${persons.length} fiches examinées`);
    await wait(500);
  }

  for (let index = 0; index < persons.length; index += 40) {
    const batch = persons.slice(index, index + 40);
    const values = batch
      .map((person) => `(${sparqlString(person.id)} <${expectedWikipediaUrl(person)}> ${Number(person.bornAt?.slice(0, 4) ?? 0)})`)
      .join("\n");
    const query = `
      SELECT DISTINCT ?personId ?item ?itemLabel ?dob ?image ?article WHERE {
        VALUES (?personId ?article ?birthYear) { ${values} }
        ?article schema:about ?item.
        ?item wdt:P31 wd:Q5;
              wdt:P18 ?image.
        OPTIONAL { ?item wdt:P569 ?dob. }
        FILTER(?birthYear = 0 || YEAR(?dob) = ?birthYear)
        SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
      }
    `;
    const url = new URL(WIKIDATA_SPARQL);
    url.searchParams.set("format", "json");
    url.searchParams.set("query", query);
    const result = await apiJson<{ results: { bindings: SparqlBinding[] } }>(url);
    bindings.push(...result.results.bindings);
    console.log(`Wikipédia : ${Math.min(index + batch.length, persons.length)}/${persons.length} notices examinées`);
    await wait(500);
  }

  const selected = new Map<string, SparqlBinding>();
  for (const person of persons) {
    const candidate = selectBinding(person, bindings.filter((binding) => binding.personId.value === person.id));
    if (candidate) selected.set(person.id, candidate);
  }
  return selected;
}

async function commonsImageInfos(filenames: string[]) {
  const infos = new Map<string, CommonsImageInfo>();
  for (let index = 0; index < filenames.length; index += 50) {
    const url = new URL(COMMONS_API);
    url.search = new URLSearchParams({
      action: "query",
      titles: filenames.slice(index, index + 50).map((filename) => `File:${filename}`).join("|"),
      prop: "imageinfo",
      iiprop: "url|mime|extmetadata",
      iiurlwidth: "480",
      maxlag: "5",
      format: "json",
      origin: "*"
    }).toString();
    const result = await apiJson<{ query: { pages: Record<string, { title: string; imageinfo?: CommonsImageInfo[] }> } }>(url);
    for (const page of Object.values(result.query.pages)) {
      const info = page.imageinfo?.[0];
      if (info) infos.set(page.title.replace(/^File:/, "").replaceAll("_", " "), info);
    }
    console.log(`Commons : ${Math.min(index + 50, filenames.length)}/${filenames.length} fichiers documentés`);
    await wait(500);
  }
  return infos;
}

function isFreeLicense(license: string) {
  return /^(Public domain|No restrictions|Attribution|Licence Ouverte|CC0|CC BY(?:-|\s)|GFDL|Free Art|Copyrighted free use|PDM)/i.test(license);
}

function extensionForMime(mime?: string) {
  return ({
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "image/svg+xml": ".svg"
  } as Record<string, string>)[mime ?? ""];
}

async function pathExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadBytes(url: string, attempt = 0): Promise<{ bytes: Uint8Array; mime?: string }> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(20_000)
    });
    if ((response.status === 429 || response.status >= 500) && attempt < 6) {
      const retryAfter = Number(response.headers.get("retry-after") ?? 0) * 1000;
      await wait(Math.max(retryAfter, 1_000 * (attempt + 1)));
      return downloadBytes(url, attempt + 1);
    }
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
    return {
      bytes: new Uint8Array(await response.arrayBuffer()),
      mime: response.headers.get("content-type")?.split(";")[0]
    };
  } catch (error) {
    if (attempt >= 2) throw error;
    await wait(1_000 * (attempt + 1));
    return downloadBytes(url, attempt + 1);
  }
}

async function downloadPortraits() {
  const selected = await discoverPortraits();
  const filenames = [...new Set([...selected.values()].map(commonsFilename).filter(Boolean))];
  const infos = await commonsImageInfos(filenames);
  const assetDirectory = path.resolve("public/images/persons");
  await mkdir(assetDirectory, { recursive: true });
  const records: Record<string, PortraitRecord> = {};

  let nextIndex = 0;
  async function worker() {
    while (nextIndex < persons.length) {
      const index = nextIndex++;
      const person = persons[index];
      try {
        const candidate = selected.get(person.id);
        if (!candidate) {
          console.warn(`– ${person.id} : aucune correspondance fiable avec portrait`);
          continue;
        }
        const commonsFile = commonsFilename(candidate);
        const info = infos.get(commonsFile);
        if (!info) {
          console.warn(`– ${person.id} : fichier Commons introuvable (${commonsFile})`);
          continue;
        }
        const metadata = info.extmetadata ?? {};
        const license = plainText(metadata.LicenseShortName?.value);
        if (!isFreeLicense(license)) {
          console.warn(`– ${person.id} : licence ignorée (${license || "absente"})`);
          continue;
        }
        let extension = extensionForMime(info.thumbmime ?? info.mime);
        if (!extension) {
          console.warn(`– ${person.id} : format ignoré (${info.thumbmime ?? info.mime})`);
          continue;
        }
        let assetFilename = `${person.id}${extension}`;
        let assetPath = path.join(assetDirectory, assetFilename);
        if (!(await pathExists(assetPath))) {
          const download = await downloadBytes(commonsThumbnailUrl(commonsFile));
          extension = extensionForMime(download.mime ?? info.thumbmime ?? info.mime);
          if (!extension) {
            console.warn(`– ${person.id} : format ignoré (${download.mime ?? info.mime})`);
            continue;
          }
          assetFilename = `${person.id}${extension}`;
          assetPath = path.join(assetDirectory, assetFilename);
          await writeFile(assetPath, download.bytes);
          await wait(300);
        }
        const articleTitle = wikipediaTitle(candidate, fullName(person));
        records[person.id] = {
          path: `/images/persons/${assetFilename}`,
          wikipediaTitle: articleTitle,
          wikipediaUrl: `https://fr.wikipedia.org/wiki/${encodeURIComponent(articleTitle.replaceAll(" ", "_"))}`,
          wikidataId: wikidataId(candidate),
          commonsFile,
          sourceUrl: info.descriptionurl,
          author: plainText(metadata.Artist?.value) || "Auteur indiqué sur Wikimedia Commons",
          license,
          ...(metadata.LicenseUrl?.value ? { licenseUrl: metadata.LicenseUrl.value } : {}),
          retrievedAt: RETRIEVED_AT
        };
        console.log(`✓ ${person.id} ← ${commonsFile}`);
      } catch (error) {
        console.warn(`– ${person.id} : téléchargement impossible (${error instanceof Error ? error.message : String(error)})`);
      }
      if (index % 20 === 19) await wait(250);
    }
  }
  await Promise.all(Array.from({ length: 3 }, () => worker()));

  const generatedSource = `// Fichier généré par scripts/fetch-person-portraits.ts.\n// Portraits issus de Wikipédia/Wikimedia Commons et soumis aux licences indiquées.\n\nexport interface PersonPortraitCredit {\n  path: string;\n  wikipediaTitle: string;\n  wikipediaUrl: string;\n  wikidataId: string;\n  commonsFile: string;\n  sourceUrl: string;\n  author: string;\n  license: string;\n  licenseUrl?: string;\n  retrievedAt: string;\n}\n\nexport const personPortraits: Record<string, PersonPortraitCredit> = ${JSON.stringify(records, null, 2)};\n`;
  await writeFile(path.resolve("src/data/personPortraits.ts"), generatedSource);
  console.log(`\n${Object.keys(records).length}/${persons.length} portraits libres téléchargés et documentés.`);
}

if (process.argv.includes("--download")) {
  await downloadPortraits();
} else {
  console.log("Usage: npm run fetch:person-portraits -- --download");
}
