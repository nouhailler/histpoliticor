import fs from "node:fs";
import path from "node:path";

type Values = Record<string, number>;

interface TerritoryAccumulator {
  name: string;
  registered: number;
  voters: number;
  expressed: number;
  blankInvalid: number;
  values: Values;
}

interface SeriesDefinition {
  id: string;
  label: string;
  color: string;
}

interface TerritorialResult {
  roundLabel: string;
  roundDate: string;
  coverage: string;
  registered: number;
  voters: number;
  expressed: number;
  blankInvalid: number;
  series: SeriesDefinition[];
  nationalValues: Values;
  departments: Record<string, TerritoryAccumulator>;
  sourceIds: string[];
}

const workRoot = process.env.ELECTION_SOURCE_DIR ?? "/tmp";
const presidentialDirectory = path.join(workRoot, "presidentielles-1965-2012", "PRESIDENTIELLES_1965-2012-csv");
const legislativeDirectory = path.join(workRoot, "legislatives-1958-2012", "LEGISLATIVES_1958-2012-csv");
const presidential2017Path = path.join(workRoot, "presidentielle-2017-t2.txt");
const legislative2017Directory = path.join(workRoot, "legislatives-2017-xlsx", "xl");
const outputPath = path.resolve("src/data/electionTerritorialResults.generated.json");

const results: Record<string, TerritorialResult> = {};

const presidentialDates: Record<number, string> = {
  1965: "1965-12-19",
  1969: "1969-06-15",
  1974: "1974-05-19",
  1981: "1981-05-10",
  1988: "1988-05-08",
  1995: "1995-05-07",
  2002: "2002-05-05",
  2007: "2007-05-06",
  2012: "2012-05-06",
  2017: "2017-05-07"
};

const legislativeDates: Record<number, string> = {
  1958: "1958-11-30",
  1962: "1962-11-25",
  1967: "1967-03-12",
  1968: "1968-06-30",
  1973: "1973-03-11",
  1978: "1978-03-19",
  1981: "1981-06-21",
  1988: "1988-06-12",
  1993: "1993-03-28",
  1997: "1997-06-01",
  2002: "2002-06-16",
  2007: "2007-06-17",
  2012: "2012-06-17",
  2017: "2017-06-18"
};

const blocSeries: SeriesDefinition[] = [
  { id: "left", label: "Gauche", color: "#b84a45" },
  { id: "ecologist", label: "Écologistes", color: "#4c8254" },
  { id: "center", label: "Centre", color: "#c29139" },
  { id: "presidential", label: "Majorité présidentielle", color: "#5577a4" },
  { id: "right", label: "Droite", color: "#264c70" },
  { id: "far-right", label: "Extrême droite", color: "#6d3634" },
  { id: "regional", label: "Régionalistes", color: "#80649a" },
  { id: "other", label: "Autres", color: "#8a8e89" }
];

for (const year of Object.keys(presidentialDates).map(Number).filter((year) => year < 2017)) {
  const filePath = path.join(presidentialDirectory, `cdsp_presi${year}t2_circ.csv`);
  const rows = parseCsv(fs.readFileSync(filePath, "utf8"));
  const candidateLabels = rows[0].slice(7);
  const series = candidateLabels.map((label) => ({
    id: slug(label),
    label: titleCaseCandidate(label),
    color: candidateColor(label)
  }));
  const result = emptyResult(presidentialDates[year], series, ["source-data-gouv-presidentielles-1965-2012"]);

  for (const row of rows.slice(1)) {
    if (!row[0]) continue;
    const code = normalizeDepartmentCode(row[0]);
    const territory = getTerritory(result, code, titleCaseWords(row[1]));
    addBallotTotals(result, territory, number(row[3]), number(row[4]), number(row[5]), number(row[6]));
    series.forEach((item, index) => addValue(result, territory, item.id, number(row[index + 7])));
  }
  duplicateHistoricalCorsica(result);
  results[`election-presidentielle-${year}`] = result;
}

generatePresidential2017();

for (const year of Object.keys(legislativeDates).map(Number).filter((year) => year < 2017)) {
  const filePath = path.join(legislativeDirectory, `cdsp_legi${year}t2_circ.csv`);
  const rows = parseCsv(fs.readFileSync(filePath, "utf8"));
  const result = emptyResult(legislativeDates[year], blocSeries, ["source-data-gouv-legislatives-1958-2012"]);
  const header = rows[0];

  if (year <= 1978) {
    const codes = rows[1];
    for (const row of rows.slice(2)) {
      if (!row[0]) continue;
      const code = normalizeDepartmentCode(row[0]);
      const territory = getTerritory(result, code, titleCaseWords(row[1]));
      const totals = repairBallotTotals(number(row[4]), number(row[5]), number(row[6]));
      addBallotTotals(result, territory, totals.registered, totals.voters, totals.expressed, totals.blankInvalid);
      for (let index = 8; index < row.length; index += 1) {
        addValue(result, territory, politicalBloc(codes[index] || header[index], year), number(row[index]));
      }
    }
  } else if (year === 1981) {
    for (const row of rows.slice(1)) {
      if (!row[0]) continue;
      const code = normalizeDepartmentCode(row[0]);
      const territory = getTerritory(result, code, titleCaseWords(row[1]));
      addBallotTotals(result, territory, number(row[3]), number(row[4]), number(row[5]), number(row[6]));
      for (let index = 7; index < row.length; index += 1) {
        addValue(result, territory, politicalBloc(header[index], year), number(row[index]));
      }
    }
  } else {
    const registeredIndex = findHeader(header, "inscrits");
    const votersIndex = findHeader(header, "votants");
    const expressedIndex = findHeader(header, "exprimes");
    const blankIndex = header.findIndex((value) => normalize(value).includes("blancs et nuls"));
    const candidateGroups = header
      .map((label, index) => ({ label: normalize(label), index }))
      .filter(({ label }) => /\bnuance\b/.test(label))
      .map(({ index }) => ({ nuanceIndex: index, votesIndex: index + 1 }));

    for (const row of rows.slice(1)) {
      if (!row[0]) continue;
      const code = normalizeDepartmentCode(row[0]);
      const territory = getTerritory(result, code, titleCaseWords(row[1]));
      addBallotTotals(
        result,
        territory,
        number(row[registeredIndex]),
        number(row[votersIndex]),
        number(row[expressedIndex]),
        blankIndex >= 0 ? number(row[blankIndex]) : Math.max(0, number(row[votersIndex]) - number(row[expressedIndex]))
      );
      for (const candidate of candidateGroups) {
        addValue(result, territory, politicalBloc(row[candidate.nuanceIndex], year), number(row[candidate.votesIndex]));
      }
    }
  }
  duplicateHistoricalCorsica(result);
  results[`election-legislatives-${year}`] = result;
}

generateLegislative2017();

fs.writeFileSync(outputPath, `${JSON.stringify(results, null, 2)}\n`);
console.log(`Generated ${Object.keys(results).length} territorial election datasets in ${outputPath}`);

function generatePresidential2017() {
  const content = new TextDecoder("windows-1252").decode(fs.readFileSync(presidential2017Path));
  const rows = content.trim().split(/\r?\n/).map((line) => line.split(";"));
  const series: SeriesDefinition[] = [
    { id: "emmanuel-macron", label: "Emmanuel Macron", color: "#c4912f" },
    { id: "marine-le-pen", label: "Marine Le Pen", color: "#314967" }
  ];
  const result = emptyResult(presidentialDates[2017], series, ["source-data-gouv-presidentielle-2017"]);
  for (const row of rows.slice(1)) {
    if (!row[0]) continue;
    const mappedCodes = map2017TerritoryCode(row[0]);
    const registered = number(row[7]);
    const voters = number(row[10]);
    const expressed = number(row[18]);
    const blankInvalid = number(row[12]) + number(row[15]);
    result.registered += registered;
    result.voters += voters;
    result.expressed += expressed;
    result.blankInvalid += blankInvalid;
    addNationalValue(result, "emmanuel-macron", number(row[25]));
    addNationalValue(result, "marine-le-pen", number(row[32]));

    for (const code of mappedCodes) {
      const territory = getTerritory(result, code, titleCaseWords(row[1]));
      territory.registered += registered;
      territory.voters += voters;
      territory.expressed += expressed;
      territory.blankInvalid += blankInvalid;
      territory.values["emmanuel-macron"] = (territory.values["emmanuel-macron"] ?? 0) + number(row[25]);
      territory.values["marine-le-pen"] = (territory.values["marine-le-pen"] ?? 0) + number(row[32]);
    }
  }
  results["election-presidentielle-2017"] = result;
}

function generateLegislative2017() {
  const sharedStrings = readSharedStrings(path.join(legislative2017Directory, "sharedStrings.xml"));
  const rows = readSpreadsheetRows(path.join(legislative2017Directory, "worksheets", "sheet3.xml"), sharedStrings);
  const result = emptyResult(legislativeDates[2017], blocSeries, ["source-data-gouv-legislatives-2017"]);
  for (const row of rows.slice(2)) {
    if (!row[0] || !row[1]) continue;
    const code = normalizeDepartmentCode(row[0]);
    const territory = getTerritory(result, code, row[1]);
    addBallotTotals(result, territory, number(row[2]), number(row[5]), number(row[13]), number(row[7]) + number(row[10]));
    for (let index = 16; index < row.length; index += 5) {
      addValue(result, territory, politicalBloc(row[index], 2017), number(row[index + 1]));
    }
  }
  results["election-legislatives-2017"] = result;
}

function emptyResult(roundDate: string, series: SeriesDefinition[], sourceIds: string[]): TerritorialResult {
  return {
    roundLabel: "Second tour",
    roundDate,
    coverage: "Résultats agrégés par département pour les territoires appelés à voter au second tour.",
    registered: 0,
    voters: 0,
    expressed: 0,
    blankInvalid: 0,
    series,
    nationalValues: {},
    departments: {},
    sourceIds
  };
}

function getTerritory(result: TerritorialResult, code: string, name: string) {
  result.departments[code] ??= { name, registered: 0, voters: 0, expressed: 0, blankInvalid: 0, values: {} };
  return result.departments[code];
}

function addBallotTotals(result: TerritorialResult, territory: TerritoryAccumulator, registered: number, voters: number, expressed: number, blankInvalid: number) {
  result.registered += registered;
  result.voters += voters;
  result.expressed += expressed;
  result.blankInvalid += blankInvalid;
  territory.registered += registered;
  territory.voters += voters;
  territory.expressed += expressed;
  territory.blankInvalid += blankInvalid;
}

function addValue(result: TerritorialResult, territory: TerritoryAccumulator, id: string, value: number) {
  if (!value) return;
  addNationalValue(result, id, value);
  territory.values[id] = (territory.values[id] ?? 0) + value;
}

function addNationalValue(result: TerritorialResult, id: string, value: number) {
  result.nationalValues[id] = (result.nationalValues[id] ?? 0) + value;
}

function duplicateHistoricalCorsica(result: TerritorialResult) {
  const corsica = result.departments["20"];
  if (!corsica) return;
  result.departments["2A"] = { ...corsica, name: "Corse-du-Sud", values: { ...corsica.values } };
  result.departments["2B"] = { ...corsica, name: "Haute-Corse", values: { ...corsica.values } };
  delete result.departments["20"];
}

function politicalBloc(rawLabel: string, year: number) {
  const label = normalize(rawLabel).replaceAll(" ", "");
  if (!label) return "other";
  if (/ECO|VERT/i.test(label)) return "ecologist";
  if (/FN|EXD|POUJ|MNR/i.test(label)) return "far-right";
  if (/REG|AUTON/i.test(label)) return "regional";
  if (/COM|PCF|PSU|SFIO|FGDS|SOC|PSMRG|MRG|PRG|DVG|FI|RDG|MAJ/i.test(label)) return "left";
  if (/RADSOC|RADCENT|RADUFD|UDSR|MRP|CENTDEM|CENTRE|CDP|REFRAD|DIVREF|MODEM|MDM/i.test(label)) return "center";
  if (year <= 1981 && /UNR|UDR|UD5|GAUL|CRR|VREP|DIVMAJ|UDF|RPR|RI|URP/i.test(label)) return "presidential";
  if (year === 2017 && /REM|MDM/i.test(label)) return "presidential";
  if (/RPR|UDF|UMP|LR|UDI|DVD|CNI|MOD|DROIT|IND/i.test(label)) return "right";
  return "other";
}

function repairBallotTotals(registered: number, voters: number, expressed: number) {
  while (voters < expressed) voters += 100_000;
  while (registered < voters) registered += 100_000;
  return { registered, voters, expressed, blankInvalid: Math.max(0, voters - expressed) };
}

function candidateColor(label: string) {
  const value = normalize(label);
  if (/mitterrand|jospin|royal|hollande/.test(value)) return "#b84a45";
  if (/le pen/.test(value)) return "#314967";
  if (/poher/.test(value)) return "#c29139";
  if (/macron/.test(value)) return "#c4912f";
  return "#365f8b";
}

function map2017TerritoryCode(code: string) {
  const mapping: Record<string, string[]> = {
    ZA: ["971"], ZB: ["972"], ZC: ["973"], ZD: ["974"], ZM: ["976"],
    ZN: ["988"], ZP: ["987"], ZS: ["975"], ZW: ["986"], ZX: ["977", "978"]
  };
  if (mapping[code]) return mapping[code];
  if (/^\d+$/.test(code)) return [normalizeDepartmentCode(code)];
  return [];
}

function normalizeDepartmentCode(value: string) {
  const trimmed = value.trim().toUpperCase();
  if (/^2[AB]$/.test(trimmed)) return trimmed;
  if (/^\d{1,2}$/.test(trimmed)) return trimmed.padStart(2, "0");
  return trimmed;
}

function findHeader(header: string[], value: string) {
  const index = header.findIndex((label) => normalize(label) === value);
  if (index < 0) throw new Error(`Missing column ${value}`);
  return index;
}

function number(value: string | undefined) {
  if (!value) return 0;
  const parsed = Number(value.replaceAll(" ", "").replace("%", "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function slug(value: string) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function titleCaseCandidate(value: string) {
  const candidate = normalize(value.replace(/\s*\([^)]*\)\s*$/, ""));
  const fullNames: Record<string, string> = {
    "mitterrand": "François Mitterrand",
    "de gaulle": "Charles de Gaulle",
    "pompidou": "Georges Pompidou",
    "poher": "Alain Poher",
    "giscard d'estaing": "Valéry Giscard d'Estaing",
    "chirac": "Jacques Chirac",
    "jospin": "Lionel Jospin",
    "le pen": "Jean-Marie Le Pen",
    "royal": "Ségolène Royal",
    "sarkozy": "Nicolas Sarkozy"
  };
  return fullNames[candidate] ?? titleCaseWords(value.replace(/\s*\([^)]*\)\s*$/, ""));
}

function titleCaseWords(value: string) {
  return value.toLocaleLowerCase("fr").replace(/(^|[\s'-])\p{L}/gu, (letter) => letter.toLocaleUpperCase("fr"));
}

function parseCsv(content: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < content.length; index += 1) {
    const character = content[index];
    if (character === '"') {
      if (quoted && content[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && content[index + 1] === "\n") index += 1;
      row.push(value);
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
    } else {
      value += character;
    }
  }
  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }
  return rows;
}

function readSharedStrings(filePath: string) {
  const xml = fs.readFileSync(filePath, "utf8");
  return Array.from(xml.matchAll(/<si>([\s\S]*?)<\/si>/g), (match) =>
    Array.from(match[1].matchAll(/<t(?: [^>]*)?>([\s\S]*?)<\/t>/g), (text) => decodeXml(text[1])).join("")
  );
}

function readSpreadsheetRows(filePath: string, sharedStrings: string[]) {
  const xml = fs.readFileSync(filePath, "utf8");
  return Array.from(xml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g), (rowMatch) => {
    const row: string[] = [];
    for (const cell of rowMatch[1].matchAll(/<c([^>]*)>([\s\S]*?)<\/c>/g)) {
      const reference = cell[1].match(/r="([^"]+)"/)?.[1];
      if (!reference) continue;
      const type = cell[1].match(/t="([^"]+)"/)?.[1];
      const value = cell[2].match(/<v>([\s\S]*?)<\/v>/)?.[1] ?? "";
      row[columnIndex(reference)] = type === "s" ? sharedStrings[Number(value)] : value;
    }
    return row;
  });
}

function columnIndex(reference: string) {
  let index = 0;
  for (const character of reference.match(/[A-Z]+/)?.[0] ?? "") index = index * 26 + character.charCodeAt(0) - 64;
  return index - 1;
}

function decodeXml(value: string) {
  return value.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#39;", "'");
}
