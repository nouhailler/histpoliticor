import { setDefaultResultOrder } from "node:dns";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { persons } from "../src/data/core";

setDefaultResultOrder("ipv4first");

const WIKIPEDIA_API = "https://fr.wikipedia.org/w/api.php";
const WIKIDATA_SPARQL = "https://query.wikidata.org/sparql";
const USER_AGENT = "HistPoliticor/0.1 (educational project; local personality profile import)";
const RETRIEVED_AT = new Date().toISOString().slice(0, 10);

const curatedWikipediaTitles: Record<string, string> = {
  "person-jean-filliol": "Jean Filiol",
  "person-eugene-motte": "Eugène Motte (homme politique, 1860-1932)",
  "person-louis-marin": "Louis Marin (homme politique)",
  "person-jean-royer": "Jean Royer (homme politique)"
};

const dateAuditExceptions = new Set(["person-paul-lafargue:death"]);

interface WikipediaPage {
  pageid?: number;
  missing?: boolean;
  title: string;
  extract?: string;
  fullurl?: string;
  pageprops?: {
    disambiguation?: string;
    wikibase_item?: string;
  };
}

interface WikipediaQueryResult {
  query?: {
    normalized?: Array<{ from: string; to: string }>;
    redirects?: Array<{ from: string; to: string }>;
    pages?: WikipediaPage[];
    rightsinfo?: { text: string; url: string };
  };
}

interface SparqlValue {
  value: string;
}

interface DetailBinding {
  item: SparqlValue;
  kind: SparqlValue;
  valueLabel: SparqlValue;
  start?: SparqlValue;
  end?: SparqlValue;
  birthDate?: SparqlValue;
  deathDate?: SparqlValue;
}

interface ProfilePosition {
  label: string;
  start?: string;
  end?: string;
}

interface PersonProfileRecord {
  wikipediaTitle: string;
  wikipediaUrl: string;
  wikidataId: string;
  extract: string;
  birthPlaces: string[];
  deathPlaces: string[];
  citizenships: string[];
  occupations: string[];
  educatedAt: string[];
  politicalParties: string[];
  positions: ProfilePosition[];
  license: string;
  licenseUrl: string;
  retrievedAt: string;
}

interface ProfileBase {
  personId: string;
  page: WikipediaPage;
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

function fullName(person: (typeof persons)[number]) {
  return `${person.firstName} ${person.lastName}`;
}

function wikipediaTitleFor(person: (typeof persons)[number]) {
  return curatedWikipediaTitles[person.id] ?? fullName(person);
}

function followAliases(title: string, aliases: Map<string, string>) {
  let resolved = title;
  const visited = new Set<string>();
  while (aliases.has(resolved) && !visited.has(resolved)) {
    visited.add(resolved);
    resolved = aliases.get(resolved)!;
  }
  return resolved;
}

async function fetchWikipediaProfiles() {
  const profiles: ProfileBase[] = [];
  for (let index = 0; index < persons.length; index += 20) {
    const batch = persons.slice(index, index + 20);
    const titles = batch.map(wikipediaTitleFor);
    const url = new URL(WIKIPEDIA_API);
    url.search = new URLSearchParams({
      action: "query",
      titles: titles.join("|"),
      prop: "extracts|pageprops|info",
      inprop: "url",
      explaintext: "1",
      exintro: "1",
      exsentences: "8",
      redirects: "1",
      format: "json",
      formatversion: "2",
      origin: "*"
    }).toString();
    const result = await apiJson<WikipediaQueryResult>(url);
    const aliases = new Map<string, string>();
    for (const alias of [...(result.query?.normalized ?? []), ...(result.query?.redirects ?? [])]) {
      aliases.set(alias.from, alias.to);
    }
    const pagesByTitle = new Map((result.query?.pages ?? []).map((page) => [page.title, page]));
    for (const person of batch) {
      const title = followAliases(wikipediaTitleFor(person), aliases);
      const page = pagesByTitle.get(title);
      if (!page || page.missing || page.pageprops?.disambiguation !== undefined || !page.pageprops?.wikibase_item || !page.extract?.trim()) {
        console.warn(`– ${person.id} : notice Wikipédia détaillée non résolue (${title})`);
        continue;
      }
      profiles.push({ personId: person.id, page });
    }
    console.log(`Wikipédia : ${Math.min(index + batch.length, persons.length)}/${persons.length} profils examinés`);
    await wait(500);
  }
  return profiles;
}

async function fetchRightsInfo() {
  const url = new URL(WIKIPEDIA_API);
  url.search = new URLSearchParams({
    action: "query",
    meta: "siteinfo",
    siprop: "rightsinfo",
    format: "json",
    formatversion: "2",
    origin: "*"
  }).toString();
  const result = await apiJson<WikipediaQueryResult>(url);
  return result.query?.rightsinfo ?? {
    text: "Creative Commons Attribution-Share Alike 4.0",
    url: "https://creativecommons.org/licenses/by-sa/4.0/deed.fr"
  };
}

async function fetchStructuredDetails(qids: string[]) {
  const bindings: DetailBinding[] = [];
  for (let index = 0; index < qids.length; index += 35) {
    const values = qids.slice(index, index + 35).map((qid) => `wd:${qid}`).join(" ");
    const query = `
      SELECT DISTINCT ?item ?kind ?valueLabel ?start ?end ?birthDate ?deathDate WHERE {
        VALUES ?item { ${values} }
        OPTIONAL { ?item wdt:P569 ?birthDate. }
        OPTIONAL { ?item wdt:P570 ?deathDate. }
        {
          ?item wdt:P19 ?value.
          BIND("birthPlaces" AS ?kind)
        } UNION {
          ?item wdt:P20 ?value.
          BIND("deathPlaces" AS ?kind)
        } UNION {
          ?item wdt:P27 ?value.
          BIND("citizenships" AS ?kind)
        } UNION {
          ?item wdt:P106 ?value.
          BIND("occupations" AS ?kind)
        } UNION {
          ?item wdt:P69 ?value.
          BIND("educatedAt" AS ?kind)
        } UNION {
          ?item wdt:P102 ?value.
          BIND("politicalParties" AS ?kind)
        } UNION {
          ?item p:P39 ?statement.
          ?statement ps:P39 ?value.
          OPTIONAL { ?statement pq:P580 ?start. }
          OPTIONAL { ?statement pq:P582 ?end. }
          BIND("positions" AS ?kind)
        }
        SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
      }
    `;
    const url = new URL(WIKIDATA_SPARQL);
    url.searchParams.set("format", "json");
    url.searchParams.set("query", query);
    const result = await apiJson<{ results: { bindings: DetailBinding[] } }>(url);
    bindings.push(...result.results.bindings);
    console.log(`Wikidata : ${Math.min(index + 35, qids.length)}/${qids.length} profils structurés`);
    await wait(500);
  }
  return bindings;
}

function wikidataId(binding: DetailBinding) {
  return binding.item.value.split("/").pop() ?? binding.item.value;
}

function datePart(value?: SparqlValue) {
  return value?.value.replace(/^\+/, "").slice(0, 10);
}

function datesFor(qid: string, bindings: DetailBinding[]) {
  const binding = bindings.find((item) => wikidataId(item) === qid);
  return {
    birthDate: datePart(binding?.birthDate),
    deathDate: datePart(binding?.deathDate)
  };
}

function unique(values: string[], maximum: number) {
  return [...new Set(values.filter(Boolean))].slice(0, maximum);
}

function positionsFor(qid: string, bindings: DetailBinding[]) {
  const seen = new Set<string>();
  return bindings
    .filter((binding) => wikidataId(binding) === qid && binding.kind.value === "positions")
    .map((binding) => ({
      label: binding.valueLabel.value,
      ...(datePart(binding.start) ? { start: datePart(binding.start) } : {}),
      ...(datePart(binding.end) ? { end: datePart(binding.end) } : {})
    }))
    .sort((a, b) => (b.start ?? "").localeCompare(a.start ?? ""))
    .filter((position) => {
      const key = `${position.label}|${position.start ?? ""}|${position.end ?? ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 20);
}

function valuesFor(qid: string, kind: string, bindings: DetailBinding[], maximum: number) {
  return unique(
    bindings
      .filter((binding) => wikidataId(binding) === qid && binding.kind.value === kind)
      .map((binding) => binding.valueLabel.value),
    maximum
  );
}

async function downloadProfiles() {
  const [bases, rights] = await Promise.all([fetchWikipediaProfiles(), fetchRightsInfo()]);
  const qids = bases.map(({ page }) => page.pageprops!.wikibase_item!);
  const bindings = await fetchStructuredDetails(qids);
  const records: Record<string, PersonProfileRecord> = {};

  for (const { personId, page } of bases) {
    const qid = page.pageprops!.wikibase_item!;
    const dates = datesFor(qid, bindings);
    const person = persons.find((item) => item.id === personId)!;
    if (person.bornAt && dates.birthDate && !dates.birthDate.startsWith(person.bornAt)) {
      console.warn(`! ${personId} : naissance locale ${person.bornAt}, Wikidata ${dates.birthDate}`);
    }
    if (person.diedAt && dates.deathDate && !dates.deathDate.startsWith(person.diedAt) && !dateAuditExceptions.has(`${personId}:death`)) {
      console.warn(`! ${personId} : décès local ${person.diedAt}, Wikidata ${dates.deathDate}`);
    }
    records[personId] = {
      wikipediaTitle: page.title,
      wikipediaUrl: page.fullurl ?? `https://fr.wikipedia.org/wiki/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`,
      wikidataId: qid,
      extract: page.extract!.trim(),
      birthPlaces: valuesFor(qid, "birthPlaces", bindings, 3),
      deathPlaces: valuesFor(qid, "deathPlaces", bindings, 3),
      citizenships: valuesFor(qid, "citizenships", bindings, 4),
      occupations: valuesFor(qid, "occupations", bindings, 10),
      educatedAt: valuesFor(qid, "educatedAt", bindings, 8),
      politicalParties: valuesFor(qid, "politicalParties", bindings, 12),
      positions: positionsFor(qid, bindings),
      license: rights.text,
      licenseUrl: rights.url,
      retrievedAt: RETRIEVED_AT
    };
  }

  const generatedSource = `// Fichier généré par scripts/fetch-person-profiles.ts.\n// Résumés attribués à Wikipédia et données structurées issues de Wikidata.\n\nexport interface PersonProfilePosition {\n  label: string;\n  start?: string;\n  end?: string;\n}\n\nexport interface PersonProfile {\n  wikipediaTitle: string;\n  wikipediaUrl: string;\n  wikidataId: string;\n  extract: string;\n  birthPlaces: string[];\n  deathPlaces: string[];\n  citizenships: string[];\n  occupations: string[];\n  educatedAt: string[];\n  politicalParties: string[];\n  positions: PersonProfilePosition[];\n  license: string;\n  licenseUrl: string;\n  retrievedAt: string;\n}\n\nexport const personProfiles: Record<string, PersonProfile> = ${JSON.stringify(records, null, 2)};\n`;
  await writeFile(path.resolve("src/data/personProfiles.ts"), generatedSource);
  console.log(`\n${Object.keys(records).length}/${persons.length} profils biographiques enrichis et documentés.`);
}

if (process.argv.includes("--download")) {
  await downloadProfiles();
} else {
  console.log("Usage: npm run fetch:person-profiles -- --download");
}
