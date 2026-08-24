import { dataset } from "../data";

export function byId<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find((item) => item.id === id);
}

export function routeFor(kind: string, id: string): string {
  const slug = id.replace(/^(party|person|event|election|document)-/, "");
  switch (kind) {
    case "party":
      return `/partis/${slug}`;
    case "person":
      return `/personnalites/${slug}`;
    case "event":
      return `/evenements/${slug}`;
    case "election":
      return `/elections/${slug}`;
    case "document":
      return `/documents/${slug}`;
    default:
      return "/";
  }
}

export function idFromSlug(kind: string, slug: string): string {
  return `${kind}-${slug}`;
}

export function sourceLabels(ids: string[]): string[] {
  return ids.map((id) => byId(dataset.sources, id)?.title ?? `Source inconnue: ${id}`);
}

export function formatDate(date?: string): string {
  if (!date) return "Non renseigné";
  if (/^\d{4}$/.test(date)) return date;
  if (/^\d{4}-\d{2}$/.test(date)) {
    const [year, month] = date.split("-");
    return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(Number(year), Number(month) - 1));
  }
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(date));
}

export function relatedEventsFor(entityId: string) {
  return dataset.events.filter(
    (event) => event.parties.includes(entityId) || event.persons.includes(entityId) || event.elections.includes(entityId)
  );
}

export function relatedRelationsFor(entityId: string) {
  return dataset.relations.filter((relation) => relation.source === entityId || relation.target === entityId);
}
