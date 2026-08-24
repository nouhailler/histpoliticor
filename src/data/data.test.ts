import { describe, expect, it } from "vitest";
import { dataset } from ".";
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

  it("links SFIO to PCF through a first-class relation", () => {
    expect(relatedRelationsFor("party-sfio").some((relation) => relation.source === "party-pcf" && relation.relation === "SPLIT_FROM")).toBe(true);
  });

  it("finds events attached to Leon Blum", () => {
    expect(relatedEventsFor("person-leon-blum").map((event) => event.id)).toContain("event-front-populaire-1936");
  });
});
