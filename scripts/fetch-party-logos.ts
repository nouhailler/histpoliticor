import { parties } from "../src/data/core";
import { setDefaultResultOrder } from "node:dns";
import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

setDefaultResultOrder("ipv4first");

const WIKIDATA_SPARQL = "https://query.wikidata.org/sparql";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const USER_AGENT = "HistPoliticor/0.1 (educational project; local logo import)";

const curatedPartyLogos: Record<string, string> = {
  "party-sfio": "SFIO.svg",
  "party-action-francaise": "Logo RN-CRAF 2019.svg",
  "party-jeunesses-patriotes": "Jeunesses Patriotes.svg",
  "party-pcf": "Logo – Parti communiste français (2018).svg",
  "party-mrp": "Mouvement Républicain Populaire logo.jpg",
  "party-rpf": "Rally of the French People logo.svg",
  "party-mdc": "Logo mouvement des citoyens 2024.jpg",
  "party-rpf-1999": "Logo du Rassemblement pour la France (SVG).svg",
  "party-mnr": "Mnr logo.png",
  "party-modem": "MoDem logo 2019.svg",
  "party-parti-gauche": "Nouveau logotype PG.svg",
  "party-front-gauche": "Left Front logo.svg",
  "party-npa": "Logo du NPA - l'Anticapitaliste.jpg",
  "party-eelv": "Europe Ecologie-Les Verts Logo.svg",
  "party-lfi": "LFI Logo 2024.svg",
  "party-lrem": "Logo En Marche !.svg",
  "party-lr": "Les Républicains - logo (France, 2023).svg",
  "party-dlf": "Debout la France logo (2017).svg",
  "party-upr": "Logo Union Populaire Républicaine.svg",
  "party-rn": "Logo Rassemblement National.svg",
  "party-nupes": "LogoNUPES.svg",
  "party-reconquete": "Logo du parti Reconquête.svg",
  "party-attac": "Logo-attac.gif",
  "party-prl": "Parti Republicain de la Liberte.png",
  "party-psu": "Logo Parti Socialiste Unifié.svg",
  "party-oas": "Emblème de l'OAS.svg",
  "party-cir": "LogoCIR.png",
  "party-fgds": "LogoFGDS.png",
  "party-centre-democratie-progres": "Logo of the Democrats and Progressives.svg",
  "party-fnri": "Independent Republicans France.png",
  "party-udr": "Logo-UDR.png",
  "party-ps-1969": "Le Parti socialiste wordmark.svg",
  "party-amis-terre": "Friends of the Earth logo.svg",
  "party-pno": "Partit de la Nacion Occitana.svg",
  "party-lcr": "Logo LCR rouge.png",
  "party-lutte-ouvriere": "Logo Lutte Ouvrière.svg",
  "party-prg": "Logo - PRG, le centre gauche.svg",
  "party-cds": "CDS France.png",
  "party-parti-republicain-1977": "Parti républicain.svg",
  "party-udf": "Union pour la Démocratie Drançaise - logo (France, 1978-1991).svg",
  "party-fn": "Rassemblement National.svg",
  "party-pfn": "Parti des forces nouvelles.svg",
  "party-parti-travailleurs": "Logo Parti des travailleurs.png",
  "party-mppt": "Logo MPPT.svg",
  "party-parti-occitan-1987": "Partit-occitan-2015.png",
  "party-unr": "Croix de Lorraine.svg",
  "party-pdp": "PDP.png",
  "party-faisceau": "Le Faisceau Logo.jpg",
  "party-croix-de-feu": "Croix de Feu.svg",
  "party-social-francais": "French Social Party emblem.svg",
  "party-ppf": "Logo du Parti populaire francais.svg",
  "party-francisme": "Logo of Mouvement Franciste.svg"
};

interface SparqlBinding {
  item: { value: string };
  matchedName: { value: string };
  itemLabel: { value: string };
  logo: { value: string };
  description?: { value: string };
}

interface CommonsMetadataValue {
  value?: string;
}

interface CommonsImageInfo {
  url: string;
  descriptionurl: string;
  mime: string;
  extmetadata?: Record<string, CommonsMetadataValue>;
}

function normalize(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-zA-Z0-9]+/g, " ").trim().toLowerCase();
}

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function apiJson<T>(url: URL, attempt = 0): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  } catch (error) {
    if (attempt >= 6) throw error;
    await wait(750 * (attempt + 1));
    return apiJson<T>(url, attempt + 1);
  }
  if (response.status === 429 && attempt < 6) {
    const retryAfter = Number(response.headers.get("retry-after") ?? 0) * 1000;
    await wait(Math.max(retryAfter, 750 * (attempt + 1)));
    return apiJson<T>(url, attempt + 1);
  }
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json() as Promise<T>;
}

async function discover() {
  const names = Array.from(new Set(parties.flatMap((party) => [party.name, ...party.variants])));
  const bindings: SparqlBinding[] = [];
  for (let index = 0; index < names.length; index += 30) {
    const values = names.slice(index, index + 30).map((name) => `"${name.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"@fr`).join(" ");
    const query = `
      SELECT DISTINCT ?item ?matchedName ?itemLabel ?description ?logo WHERE {
        VALUES ?matchedName { ${values} }
        ?item (rdfs:label|skos:altLabel) ?matchedName;
              wdt:P154 ?logo.
        OPTIONAL { ?item schema:description ?description. FILTER(LANG(?description) = "fr") }
        SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
      }
    `;
    const url = new URL(WIKIDATA_SPARQL);
    url.searchParams.set("query", query);
    url.searchParams.set("format", "json");
    const result = await apiJson<{ results: { bindings: SparqlBinding[] } }>(url);
    bindings.push(...result.results.bindings);
    await wait(250);
  }

  for (const party of parties) {
    const expectedNames = [party.name, ...party.variants].map(normalize);
    const matches = bindings
      .filter((binding) => expectedNames.includes(normalize(binding.matchedName.value)))
      .map((binding) => ({
        id: binding.item.value.split("/").pop(),
        label: binding.itemLabel.value,
        description: binding.description?.value,
        logo: decodeURIComponent(binding.logo.value.split("/").pop() ?? "")
      }));
    const selected = matches.length === 1 ? matches[0] : undefined;
    console.log(JSON.stringify({
      partyId: party.id,
      party: party.name,
      selected,
      candidates: matches.slice(0, 3)
    }));
  }
}

async function commonsImageInfo(filename: string) {
  const url = new URL(COMMONS_API);
  url.search = new URLSearchParams({
    action: "query",
    titles: `File:${filename}`,
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    format: "json",
    origin: "*"
  }).toString();
  const result = await apiJson<{ query: { pages: Record<string, { imageinfo?: CommonsImageInfo[] }> } }>(url);
  return Object.values(result.query.pages)[0]?.imageinfo?.[0];
}

async function commonsImageInfos(filenames: string[]) {
  const infos = new Map<string, CommonsImageInfo>();
  for (let index = 0; index < filenames.length; index += 30) {
    const url = new URL(COMMONS_API);
    url.search = new URLSearchParams({
      action: "query",
      titles: filenames.slice(index, index + 30).map((filename) => `File:${filename}`).join("|"),
      prop: "imageinfo",
      iiprop: "url|mime|extmetadata",
      format: "json",
      origin: "*"
    }).toString();
    const result = await apiJson<{ query: { pages: Record<string, { title: string; imageinfo?: CommonsImageInfo[] }> } }>(url);
    for (const page of Object.values(result.query.pages)) {
      const info = page.imageinfo?.[0];
      if (info) infos.set(page.title.replace(/^File:/, ""), info);
    }
  }
  return infos;
}

function plainText(value = "") {
  return value
    .replace(/<br\s*\/?\s*>/gi, ", ")
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&nbsp;", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isFreeLicense(license: string) {
  return /^(Public domain|CC0|CC BY(?:-|\s)|GFDL|Free Art|Copyrighted free use)/i.test(license);
}

async function downloadThumbnail(filename: string, attempt = 0): Promise<{ bytes: Uint8Array; extension: string }> {
  const url = new URL("https://commons.wikimedia.org/w/thumb.php");
  url.searchParams.set("f", filename);
  url.searchParams.set("w", "480");
  try {
    const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
    const mime = response.headers.get("content-type")?.split(";")[0];
    const extension = ({
      "image/svg+xml": ".svg",
      "image/png": ".png",
      "image/jpeg": ".jpg",
      "image/gif": ".gif",
      "image/webp": ".webp"
    } as Record<string, string>)[mime ?? ""];
    if (!extension) throw new Error(`Format de miniature non pris en charge pour ${filename} : ${mime ?? "absent"}`);
    return { bytes: new Uint8Array(await response.arrayBuffer()), extension };
  } catch (error) {
    if (attempt >= 6) throw error;
    await wait(750 * (attempt + 1));
    return downloadThumbnail(filename, attempt + 1);
  }
}

async function pathExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadCuratedLogos() {
  const filenames = Object.values(curatedPartyLogos);
  const infos = await commonsImageInfos(filenames);
  const assetDirectory = path.resolve("public/logos/parties");
  await mkdir(assetDirectory, { recursive: true });
  const records: Record<string, {
    path: string;
    commonsFile: string;
    sourceUrl: string;
    author: string;
    license: string;
    licenseUrl?: string;
    retrievedAt: string;
  }> = {};

  for (const [partyId, filename] of Object.entries(curatedPartyLogos)) {
    const info = infos.get(filename);
    if (!info) throw new Error(`Fichier Commons introuvable : ${filename}`);
    const metadata = info.extmetadata ?? {};
    const license = plainText(metadata.LicenseShortName?.value);
    if (!isFreeLicense(license)) throw new Error(`Licence non reconnue comme libre pour ${filename} : ${license || "absente"}`);
    const originalExtension = path.extname(new URL(info.url).pathname).toLowerCase();
    let assetFilename = `${partyId}${originalExtension}`;
    let assetPath = path.join(assetDirectory, assetFilename);
    if (!(await pathExists(assetPath))) {
      const thumbnail = await downloadThumbnail(filename);
      assetFilename = `${partyId}${thumbnail.extension}`;
      assetPath = path.join(assetDirectory, assetFilename);
      if (!(await pathExists(assetPath))) await writeFile(assetPath, thumbnail.bytes);
    }
    records[partyId] = {
      path: `/logos/parties/${assetFilename}`,
      commonsFile: filename,
      sourceUrl: info.descriptionurl,
      author: plainText(metadata.Artist?.value) || "Auteur indiqué sur Wikimedia Commons",
      license,
      ...(metadata.LicenseUrl?.value ? { licenseUrl: metadata.LicenseUrl.value } : {}),
      retrievedAt: "2026-08-25"
    };
    console.log(`✓ ${partyId} ← ${filename}`);
  }

  const generatedSource = `// Fichier généré par scripts/fetch-party-logos.ts.\n// Les fichiers restent soumis aux licences et éventuels droits de marque indiqués par Wikimedia Commons.\n\nexport interface PartyLogoCredit {\n  path: string;\n  commonsFile: string;\n  sourceUrl: string;\n  author: string;\n  license: string;\n  licenseUrl?: string;\n  retrievedAt: string;\n}\n\nexport const partyLogos: Record<string, PartyLogoCredit> = ${JSON.stringify(records, null, 2)};\n`;
  await writeFile(path.resolve("src/data/partyLogos.ts"), generatedSource);
  console.log(`\n${Object.keys(records).length} logos libres téléchargés et documentés.`);
}

async function searchCommons(query: string) {
  const url = new URL(COMMONS_API);
  url.search = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "10",
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    format: "json",
    origin: "*"
  }).toString();
  const result = await apiJson<{ query?: { pages?: Record<string, { title: string; imageinfo?: CommonsImageInfo[] }> } }>(url);
  return Object.values(result.query?.pages ?? {}).map((page) => ({
    title: page.title,
    description: page.imageinfo?.[0]?.extmetadata?.ImageDescription?.value,
    license: page.imageinfo?.[0]?.extmetadata?.LicenseShortName?.value
  }));
}

if (process.argv.includes("--discover")) {
  await discover();
} else if (process.argv.includes("--download")) {
  await downloadCuratedLogos();
} else if (process.argv.includes("--inspect")) {
  const filename = process.argv[process.argv.indexOf("--inspect") + 1];
  if (!filename) throw new Error("Usage: npm run fetch:party-logos -- --inspect <Commons filename>");
  console.log(JSON.stringify(await commonsImageInfo(filename), null, 2));
} else if (process.argv.includes("--search")) {
  const query = process.argv.slice(process.argv.indexOf("--search") + 1).join(" ");
  if (!query) throw new Error("Usage: npm run fetch:party-logos -- --search <query>");
  console.log(JSON.stringify(await searchCommons(query), null, 2));
} else {
  console.log("Usage: npm run fetch:party-logos -- --download | --discover | --search <query> | --inspect <filename>");
}
