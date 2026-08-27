import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { dataset } from ".";
import { electionResults } from "./electionResults";
import { electionDetails } from "./electionDetails";
import territorialResults from "./electionTerritorialResults.generated.json";
import { partyLogos } from "./partyLogos";
import { personPortraits } from "./personPortraits";
import { personProfiles } from "./personProfiles";
import { relatedEventsFor, relatedRelationsFor } from "../lib/entity";

describe("dataset navigation requirements", () => {
  it("supports the critical path around 1936, Blum, SFIO, PCF and Tours", () => {
    expect(dataset.events.some((event) => event.id === "event-front-populaire-1936")).toBe(true);
    expect(dataset.persons.some((person) => person.id === "person-leon-blum")).toBe(true);
    expect(dataset.parties.some((party) => party.id === "party-sfio")).toBe(true);
    expect(dataset.parties.some((party) => party.id === "party-pcf")).toBe(true);
    expect(dataset.events.some((event) => event.id === "event-congres-tours")).toBe(true);
    expect(dataset.elections.some((election) => election.id === "election-legislatives-1936")).toBe(true);
  });

  it("publishes a sourced, audience-facing result for every election", () => {
    const electionIds = dataset.elections.map((election) => election.id).sort();
    const resultIds = Object.keys(electionResults).sort();
    const sourceIds = new Set(dataset.sources.map((source) => source.id));

    expect(resultIds).toEqual(electionIds);
    for (const election of dataset.elections) {
      const result = electionResults[election.id];
      expect(result.summary.length).toBeGreaterThan(40);
      expect(result.summary).not.toMatch(/TODO_DATA|NEEDS_SOURCE|à compléter|ne (?:sont|sera) pas intégr/i);
      expect(result.sourceIds.length).toBeGreaterThan(0);
      result.sourceIds.forEach((sourceId) => expect(sourceIds.has(sourceId)).toBe(true));
      expect(election.electoralSystem ?? "").not.toMatch(/TODO_DATA|NEEDS_SOURCE/i);
    }
  });

  it("provides a complete public dossier for every election", () => {
    const electionIds = dataset.elections.map((election) => election.id).sort();
    expect(Object.keys(electionDetails).sort()).toEqual(electionIds);

    for (const election of dataset.elections) {
      const detail = electionDetails[election.id];
      expect(detail.roundDates.length).toBeGreaterThan(0);
      expect(detail.economicContext.length).toBeGreaterThan(80);
      expect(detail.reformContext.length).toBeGreaterThan(70);
      expect(detail.mapExplanation.length).toBeGreaterThan(70);
      expect(`${detail.secondRoundNote} ${detail.seatNote}`).not.toMatch(/TODO_DATA|NEEDS_SOURCE|à compléter/i);
      if (detail.turnout !== undefined) {
        expect(detail.turnout).toBeGreaterThan(0);
        expect(detail.turnout).toBeLessThanOrEqual(100);
        expect((detail.turnout + (detail.abstention ?? 0)).toFixed(2)).toBe("100.00");
      }
      if (election.type !== "legislative") expect(detail.assemblySeats).toBeUndefined();
    }
  });

  it("ships sourced territorial second-round results and the local France map", () => {
    const territorial = territorialResults as Record<string, {
      registered: number;
      voters: number;
      expressed: number;
      sourceIds: string[];
      departments: Record<string, unknown>;
    }>;
    const mappedElectionIds = Object.entries(electionDetails)
      .filter(([, detail]) => detail.mapStatus === "territorial-data")
      .map(([id]) => id)
      .sort();

    expect(Object.keys(territorial).sort()).toEqual(mappedElectionIds);
    expect(existsSync(path.resolve("public/data/elections/departements-1000m.geojson"))).toBe(true);
    for (const result of Object.values(territorial)) {
      expect(result.registered).toBeGreaterThan(0);
      expect(result.voters).toBeGreaterThan(0);
      expect(result.expressed).toBeGreaterThan(0);
      expect(result.voters).toBeLessThanOrEqual(result.registered);
      expect(result.expressed).toBeLessThanOrEqual(result.voters);
      expect(Object.keys(result.departments).length).toBeGreaterThanOrEqual(80);
      expect(result.sourceIds.length).toBeGreaterThan(0);
    }
  });

  it("links SFIO to PCF through a first-class relation", () => {
    expect(relatedRelationsFor("party-sfio").some((relation) => relation.source === "party-pcf" && relation.relation === "SPLIT_FROM")).toBe(true);
  });

  it("finds events attached to Leon Blum", () => {
    expect(relatedEventsFor("person-leon-blum").map((event) => event.id)).toContain("event-front-populaire-1936");
  });

  it("exposes corrected crisis context and consequences", () => {
    const smeCrisis = dataset.events.find((event) => event.id === "event-crise-sme-1992");
    const may1968 = dataset.events.find((event) => event.id === "event-mai-68");

    expect(smeCrisis?.crisisType).toBe("economique_financiere");
    expect(smeCrisis?.consequences).toContain("Il ne s'agit pas d'une dévaluation française en 1993");
    expect(may1968?.crisisType).toBe("sociale");
    expect(may1968?.consequences).toContain("accords de Grenelle");
  });

  it("covers major political, military, sanitary and environmental crises through 2026", () => {
    const ids = new Set(dataset.events.map((event) => event.id));

    expect(ids).toContain("event-affaire-dreyfus");
    expect(ids).toContain("event-guerre-indochine");
    expect(ids).toContain("event-canicule-2003");
    expect(ids).toContain("event-crise-nouvelle-caledonie-2024");
    expect(ids).toContain("event-censure-barnier-2024");
    expect(ids).toContain("event-chute-gouvernement-bayrou-2025");
    expect(ids).toContain("event-canicule-juin-2026");
  });

  it("documents consequences for every typed crisis", () => {
    const incomplete = dataset.events.filter((event) => event.crisisType && !event.consequences?.trim());
    expect(incomplete).toEqual([]);
  });

  it("keeps every imported party logo local, attributed and attached to a known party", () => {
    const partyIds = new Set(dataset.parties.map((party) => party.id));
    const entries = Object.entries(partyLogos);

    expect(entries.length).toBeGreaterThanOrEqual(50);
    for (const [partyId, logo] of entries) {
      expect(partyIds.has(partyId)).toBe(true);
      expect(existsSync(path.resolve("public", logo.path.replace(/^\//, "")))).toBe(true);
      expect(logo.sourceUrl).toContain("commons.wikimedia.org/wiki/File:");
      expect(logo.author.trim()).not.toBe("");
      expect(logo.license.trim()).not.toBe("");
    }
  });

  it("keeps imported person portraits local, attributed and attached to a known person", () => {
    const personIds = new Set(dataset.persons.map((person) => person.id));
    const entries = Object.entries(personPortraits);

    expect(entries.length).toBeGreaterThanOrEqual(130);
    for (const [personId, portrait] of entries) {
      expect(personIds.has(personId)).toBe(true);
      expect(existsSync(path.resolve("public", portrait.path.replace(/^\//, "")))).toBe(true);
      expect(portrait.wikipediaUrl).toContain("fr.wikipedia.org/wiki/");
      expect(portrait.sourceUrl).toContain("commons.wikimedia.org/wiki/File:");
      expect(portrait.author.trim()).not.toBe("");
      expect(portrait.license.trim()).not.toBe("");
    }
  });

  it("provides an attributed enriched biography for every personality", () => {
    const personIds = new Set(dataset.persons.map((person) => person.id));
    const entries = Object.entries(personProfiles);

    expect(entries).toHaveLength(dataset.persons.length);
    for (const [personId, profile] of entries) {
      expect(personIds.has(personId)).toBe(true);
      expect(profile.extract.length).toBeGreaterThan(100);
      expect(profile.wikipediaUrl).toContain("fr.wikipedia.org/wiki/");
      expect(profile.wikidataId).toMatch(/^Q\d+$/);
      expect(profile.license).toContain("Creative Commons");
    }
    expect(personProfiles["person-leon-blum"].positions.length).toBeGreaterThanOrEqual(5);
  });
});
