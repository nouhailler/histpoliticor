import { dataset, entitiesById } from "../src/data";

type Item = { id: string; sources?: string[] };
const errors: string[] = [];

function checkUnique(collectionName: string, items: Item[]) {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.id)) errors.push(`${collectionName}: duplicate id ${item.id}`);
    seen.add(item.id);
  }
}

function checkDate(label: string, value?: string | null) {
  if (!value) return;
  if (!/^\d{4}(-\d{2})?(-\d{2})?$/.test(value)) {
    errors.push(`${label}: invalid date ${value}`);
  }
}

function checkSources(collectionName: string, items: Item[]) {
  const sourceIds = new Set(dataset.sources.map((source) => source.id));
  for (const item of items) {
    for (const sourceId of item.sources ?? []) {
      if (!sourceIds.has(sourceId)) errors.push(`${collectionName}:${item.id}: unknown source ${sourceId}`);
    }
  }
}

function checkEntityRefs(owner: string, refs: string[]) {
  for (const ref of refs) {
    if (!entitiesById.has(ref)) errors.push(`${owner}: unknown entity ${ref}`);
  }
}

checkUnique("sources", dataset.sources);
checkUnique("regimes", dataset.regimes);
checkUnique("periods", dataset.periods);
checkUnique("families", dataset.families);
checkUnique("parties", dataset.parties);
checkUnique("persons", dataset.persons);
checkUnique("events", dataset.events);
checkUnique("elections", dataset.elections);
checkUnique("documents", dataset.documents);
checkUnique("relations", dataset.relations);

checkSources("families", dataset.families);
checkSources("parties", dataset.parties);
checkSources("persons", dataset.persons);
checkSources("events", dataset.events);
checkSources("elections", dataset.elections);
checkSources("documents", dataset.documents);
checkSources("relations", dataset.relations);

for (const party of dataset.parties) {
  checkDate(`party:${party.id}:foundedAt`, party.foundedAt);
  checkDate(`party:${party.id}:dissolvedAt`, party.dissolvedAt);
  checkDate(`party:${party.id}:lastVerifiedAt`, party.lastVerifiedAt);
  checkEntityRefs(`party:${party.id}:families`, party.families);
  checkEntityRefs(`party:${party.id}:founders`, party.founders);
  checkEntityRefs(`party:${party.id}:leaders`, party.leaders);
}

for (const person of dataset.persons) {
  checkDate(`person:${person.id}:bornAt`, person.bornAt);
  checkDate(`person:${person.id}:diedAt`, person.diedAt);
  checkEntityRefs(`person:${person.id}:parties`, person.parties);
}

for (const event of dataset.events) {
  checkDate(`event:${event.id}:date`, event.date);
  checkDate(`event:${event.id}:endDate`, event.endDate);
  checkEntityRefs(`event:${event.id}:period`, [event.period]);
  checkEntityRefs(`event:${event.id}:regime`, [event.regime]);
  checkEntityRefs(`event:${event.id}:parties`, event.parties);
  checkEntityRefs(`event:${event.id}:persons`, event.persons);
  checkEntityRefs(`event:${event.id}:elections`, event.elections);
}

for (const election of dataset.elections) {
  checkDate(`election:${election.id}:date`, election.date);
  checkEntityRefs(`election:${election.id}:regime`, [election.regime]);
  checkEntityRefs(`election:${election.id}:parties`, election.parties);
  checkEntityRefs(`election:${election.id}:persons`, election.persons);
}

for (const document of dataset.documents) {
  checkDate(`document:${document.id}:date`, document.date);
}

for (const relation of dataset.relations) {
  checkDate(`relation:${relation.id}:date`, relation.date);
  checkEntityRefs(`relation:${relation.id}:source`, [relation.source]);
  checkEntityRefs(`relation:${relation.id}:target`, [relation.target]);
}

const report = [
  "DATA QUALITY REPORT",
  "",
  `Partis : ${dataset.parties.length}`,
  `Personnalités : ${dataset.persons.length}`,
  `Élections : ${dataset.elections.length}`,
  `Événements : ${dataset.events.length}`,
  `Sources : ${dataset.sources.length}`,
  "",
  `Relations cassées : ${errors.filter((error) => error.includes("unknown entity")).length}`,
  `Sources manquantes : ${errors.filter((error) => error.includes("unknown source")).length}`,
  `Dates invalides : ${errors.filter((error) => error.includes("invalid date")).length}`,
  `Erreurs totales : ${errors.length}`
].join("\n");

console.log(report);

if (errors.length) {
  console.error("\nDETAILS");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
