import type { Party, Relation, RelationType } from "../types/domain";

export type GenealogyCategory = "creation" | "split" | "merge" | "rename" | "succession";

export const genealogyCategories: Array<{ id: GenealogyCategory; label: string; description: string }> = [
  { id: "creation", label: "Création", description: "Fondation depuis un courant ou une organisation" },
  { id: "split", label: "Scission", description: "Départ d'une branche vers un nouveau parti" },
  { id: "merge", label: "Fusion", description: "Fusion ou absorption dans une nouvelle organisation" },
  { id: "rename", label: "Changement de nom", description: "Transformation directe sous une nouvelle appellation" },
  { id: "succession", label: "Succession", description: "Continuité politique entre deux organisations" }
];

const genealogyRelationTypes = new Set<RelationType>([
  "FOUNDED_FROM",
  "SPLIT_FROM",
  "MERGED_INTO",
  "RENAMED_TO",
  "ABSORBED_BY",
  "SUCCESSOR_OF",
  "PREDECESSOR_OF"
]);

const reversedRelations = new Set<RelationType>(["FOUNDED_FROM", "SPLIT_FROM", "SUCCESSOR_OF"]);

export interface GenealogyEdge {
  relation: Relation;
  from: string;
  to: string;
  category: GenealogyCategory;
}

export interface GenealogyGraph {
  nodes: Party[];
  edges: GenealogyEdge[];
  hiddenParties: number;
}

export interface GenealogyPosition {
  id: string;
  x: number;
  y: number;
}

export interface GenealogyLayout {
  width: number;
  height: number;
  nodeWidth: number;
  nodeHeight: number;
  positions: Record<string, GenealogyPosition>;
}

export function relationCategory(type: RelationType): GenealogyCategory | undefined {
  if (type === "FOUNDED_FROM") return "creation";
  if (type === "SPLIT_FROM") return "split";
  if (type === "MERGED_INTO" || type === "ABSORBED_BY") return "merge";
  if (type === "RENAMED_TO") return "rename";
  if (type === "SUCCESSOR_OF" || type === "PREDECESSOR_OF") return "succession";
  return undefined;
}

export function genealogyEdge(relation: Relation): GenealogyEdge | undefined {
  if (
    relation.sourceKind !== "party"
    || relation.targetKind !== "party"
    || relation.source === relation.target
    || !genealogyRelationTypes.has(relation.relation)
  ) return undefined;
  const category = relationCategory(relation.relation);
  if (!category) return undefined;
  return {
    relation,
    from: reversedRelations.has(relation.relation) ? relation.target : relation.source,
    to: reversedRelations.has(relation.relation) ? relation.source : relation.target,
    category
  };
}

export function buildGenealogyGraph(
  parties: Party[],
  relations: Relation[],
  familyId: string,
  activeCategories: Set<GenealogyCategory>
): GenealogyGraph {
  const familyParties = parties.filter((party) => party.families.includes(familyId));
  const familyIds = new Set(familyParties.map((party) => party.id));
  const edges = relations
    .map(genealogyEdge)
    .filter((edge): edge is GenealogyEdge => Boolean(edge))
    .filter((edge) => activeCategories.has(edge.category) && (familyIds.has(edge.from) || familyIds.has(edge.to)));
  const visibleIds = new Set(edges.flatMap((edge) => [edge.from, edge.to]));
  const nodes = parties
    .filter((party) => visibleIds.has(party.id))
    .sort(compareParties);
  return {
    nodes,
    edges,
    hiddenParties: familyParties.filter((party) => !visibleIds.has(party.id)).length
  };
}

export function layoutGenealogyGraph(nodes: Party[], edges: GenealogyEdge[]): GenealogyLayout {
  const nodeWidth = 190;
  const nodeHeight = 104;
  const columnGap = 88;
  const rowGap = 44;
  const padding = 34;
  const positions: Record<string, GenealogyPosition> = {};
  const partyById = new Map(nodes.map((party) => [party.id, party]));
  const nodeIds = new Set(partyById.keys());
  const graphEdges = edges.filter((edge) => nodeIds.has(edge.from) && nodeIds.has(edge.to));
  const components = weakComponents(nodes, graphEdges)
    .sort((left, right) => componentYear(left, partyById) - componentYear(right, partyById));

  let componentOffset = padding;
  let maximumRank = 0;
  for (const component of components) {
    const componentSet = new Set(component);
    const componentEdges = graphEdges.filter((edge) => componentSet.has(edge.from) && componentSet.has(edge.to));
    const ranks = topologicalRanks(component, componentEdges, partyById);
    const descendantCounts = countDescendants(component, componentEdges);
    const groups = new Map<number, string[]>();
    for (const id of component) {
      const rank = ranks.get(id) ?? 0;
      groups.set(rank, [...(groups.get(rank) ?? []), id]);
      maximumRank = Math.max(maximumRank, rank);
    }
    const componentRows = Math.max(...[...groups.values()].map((group) => group.length), 1);

    for (const [rank, ids] of groups) {
      ids.sort((left, right) => {
        const descendantDifference = (descendantCounts.get(right) ?? 0) - (descendantCounts.get(left) ?? 0);
        if (descendantDifference) return descendantDifference;
        return compareParties(partyById.get(left)!, partyById.get(right)!);
      });
      ids.forEach((id, row) => {
        positions[id] = {
          id,
          x: padding + rank * (nodeWidth + columnGap),
          y: componentOffset + row * (nodeHeight + rowGap)
        };
      });
    }
    componentOffset += componentRows * nodeHeight + Math.max(0, componentRows - 1) * rowGap + 72;
  }

  return {
    width: Math.max(720, padding * 2 + (maximumRank + 1) * nodeWidth + maximumRank * columnGap),
    height: Math.max(250, componentOffset - 38),
    nodeWidth,
    nodeHeight,
    positions
  };
}

function weakComponents(nodes: Party[], edges: GenealogyEdge[]) {
  const adjacent = new Map(nodes.map((node) => [node.id, new Set<string>()]));
  for (const edge of edges) {
    adjacent.get(edge.from)?.add(edge.to);
    adjacent.get(edge.to)?.add(edge.from);
  }
  const visited = new Set<string>();
  const components: string[][] = [];
  for (const node of nodes) {
    if (visited.has(node.id)) continue;
    const component: string[] = [];
    const queue = [node.id];
    visited.add(node.id);
    while (queue.length) {
      const id = queue.shift()!;
      component.push(id);
      for (const neighbor of adjacent.get(id) ?? []) {
        if (visited.has(neighbor)) continue;
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
    components.push(component);
  }
  return components;
}

function topologicalRanks(ids: string[], edges: GenealogyEdge[], partyById: Map<string, Party>) {
  const ranks = new Map(ids.map((id) => [id, 0]));
  const incoming = new Map(ids.map((id) => [id, 0]));
  const outgoing = new Map(ids.map((id) => [id, [] as GenealogyEdge[]]));
  for (const edge of edges) {
    incoming.set(edge.to, (incoming.get(edge.to) ?? 0) + 1);
    outgoing.get(edge.from)?.push(edge);
  }
  const queue = ids.filter((id) => incoming.get(id) === 0).sort((left, right) => compareParties(partyById.get(left)!, partyById.get(right)!));
  const processed = new Set<string>();
  while (queue.length) {
    const id = queue.shift()!;
    processed.add(id);
    for (const edge of outgoing.get(id) ?? []) {
      ranks.set(edge.to, Math.max(ranks.get(edge.to) ?? 0, (ranks.get(id) ?? 0) + 1));
      incoming.set(edge.to, (incoming.get(edge.to) ?? 1) - 1);
      if (incoming.get(edge.to) === 0) queue.push(edge.to);
    }
    queue.sort((left, right) => compareParties(partyById.get(left)!, partyById.get(right)!));
  }

  const remaining = ids.filter((id) => !processed.has(id)).sort((left, right) => compareParties(partyById.get(left)!, partyById.get(right)!));
  remaining.forEach((id, index) => ranks.set(id, Math.max(ranks.get(id) ?? 0, index)));
  return ranks;
}

function countDescendants(ids: string[], edges: GenealogyEdge[]) {
  const outgoing = new Map(ids.map((id) => [id, [] as string[]]));
  for (const edge of edges) outgoing.get(edge.from)?.push(edge.to);
  const counts = new Map<string, number>();
  function visit(id: string, trail: Set<string>): Set<string> {
    if (trail.has(id)) return new Set();
    const nextTrail = new Set(trail).add(id);
    const descendants = new Set<string>();
    for (const child of outgoing.get(id) ?? []) {
      descendants.add(child);
      for (const descendant of visit(child, nextTrail)) descendants.add(descendant);
    }
    return descendants;
  }
  for (const id of ids) counts.set(id, visit(id, new Set()).size);
  return counts;
}

function componentYear(ids: string[], partyById: Map<string, Party>) {
  return Math.min(...ids.map((id) => partyYear(partyById.get(id)!)));
}

function compareParties(left: Party, right: Party) {
  return partyYear(left) - partyYear(right) || left.acronym.localeCompare(right.acronym, "fr");
}

function partyYear(party: Party) {
  return Number.parseInt(party.foundedAt?.slice(0, 4) ?? "9999", 10);
}
