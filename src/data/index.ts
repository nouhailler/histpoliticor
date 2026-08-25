import { documents } from "./documents";
import { elections, events as coreEvents, families, parties, periods, persons, regimes, relations } from "./core";
import { crisisEvents, crisisMetadata, crisisSources } from "./crises";
import { sources as coreSources } from "./sources";
import type { Dataset } from "../types/domain";

const events = [
  ...coreEvents.map((event) => ({ ...event, ...crisisMetadata[event.id] })),
  ...crisisEvents
];

const sources = [...coreSources, ...crisisSources];

export const dataset: Dataset = {
  sources,
  regimes,
  periods,
  families,
  parties,
  persons,
  events,
  elections,
  documents,
  relations
};

export const entitiesById = new Map<string, { kind: string; value: unknown }>([
  ...parties.map((value) => [value.id, { kind: "party", value }] as const),
  ...persons.map((value) => [value.id, { kind: "person", value }] as const),
  ...events.map((value) => [value.id, { kind: "event", value }] as const),
  ...elections.map((value) => [value.id, { kind: "election", value }] as const),
  ...periods.map((value) => [value.id, { kind: "period", value }] as const),
  ...regimes.map((value) => [value.id, { kind: "regime", value }] as const),
  ...families.map((value) => [value.id, { kind: "family", value }] as const),
  ...documents.map((value) => [value.id, { kind: "document", value }] as const)
]);
