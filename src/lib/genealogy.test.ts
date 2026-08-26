import { describe, expect, it } from "vitest";
import { dataset } from "../data";
import { buildGenealogyGraph, genealogyCategories, genealogyEdge, layoutGenealogyGraph } from "./genealogy";

const allCategories = new Set(genealogyCategories.map((category) => category.id));

describe("généalogie des partis", () => {
  it("oriente les scissions du parti d'origine vers le nouveau parti", () => {
    const relation = dataset.relations.find((item) => item.id === "relation-rpf-1999-founded-from-rpr")!;
    expect(genealogyEdge(relation)).toMatchObject({ from: "party-rpr", to: "party-rpf-1999", category: "split" });
  });

  it("reconstitue la chaîne gaulliste complète", () => {
    const graph = buildGenealogyGraph(dataset.parties, dataset.relations, "family-gaullisme", allCategories);
    const ids = new Set(graph.nodes.map((party) => party.id));
    for (const id of ["party-rpf", "party-republicains-sociaux", "party-unr", "party-unr-udt", "party-udr", "party-rpr", "party-ump", "party-lr"]) {
      expect(ids.has(id)).toBe(true);
    }
    expect(graph.edges.some((edge) => edge.from === "party-udt" && edge.to === "party-unr-udt" && edge.category === "merge")).toBe(true);
  });

  it("dispose chaque succession de gauche à droite", () => {
    const graph = buildGenealogyGraph(dataset.parties, dataset.relations, "family-gaullisme", allCategories);
    const layout = layoutGenealogyGraph(graph.nodes, graph.edges);
    for (const edge of graph.edges) {
      expect(layout.positions[edge.from].x).toBeLessThan(layout.positions[edge.to].x);
    }
  });
});
