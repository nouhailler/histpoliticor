import {
  Archive,
  BookOpen,
  CalendarDays,
  GitBranch,
  Home,
  Landmark,
  Search,
  Star,
  Users
} from "lucide-react";
import { useMemo, useState } from "react";
import { dataset } from "./data";
import type { Election, Event, Party, Person } from "./types/domain";
import { byId, formatDate, idFromSlug, relatedEventsFor, relatedRelationsFor, routeFor, sourceLabels } from "./lib/entity";

type Page =
  | { name: "home" }
  | { name: "timeline" }
  | { name: "parties" }
  | { name: "persons" }
  | { name: "elections" }
  | { name: "genealogy"; partyId?: string }
  | { name: "search"; query?: string }
  | { name: "sources" }
  | { name: "docs" }
  | { name: "party"; id: string }
  | { name: "person"; id: string }
  | { name: "event"; id: string }
  | { name: "election"; id: string };

const navItems = [
  { label: "Accueil", icon: Home, page: { name: "home" } as Page },
  { label: "Chronologie", icon: CalendarDays, page: { name: "timeline" } as Page },
  { label: "Partis", icon: Landmark, page: { name: "parties" } as Page },
  { label: "Personnalités", icon: Users, page: { name: "persons" } as Page },
  { label: "Élections", icon: Archive, page: { name: "elections" } as Page },
  { label: "Explorer", icon: GitBranch, page: { name: "genealogy" } as Page },
  { label: "Sources", icon: BookOpen, page: { name: "sources" } as Page }
];

export function App() {
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname));
  const [favorites, setFavorites] = useLocalFavorites();

  function navigate(next: Page) {
    setPage(next);
    window.history.pushState(null, "", pathForPage(next));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const favoriteSet = new Set(favorites);

  function toggleFavorite(id: string) {
    setFavorites(favoriteSet.has(id) ? favorites.filter((item) => item !== id) : [...favorites, id]);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => navigate({ name: "home" })} aria-label="Aller à l'accueil">
          <span className="brand-mark">HP</span>
          <span>
            <strong>HistPoliticor</strong>
            <small>Base historique locale</small>
          </span>
        </button>
        <button className="icon-button" onClick={() => navigate({ name: "search" })} aria-label="Rechercher">
          <Search size={20} />
        </button>
      </header>
      <main>
        {renderPage(page, navigate, favoriteSet, toggleFavorite)}
      </main>
      <nav className="bottom-nav" aria-label="Navigation principale">
        {navItems.slice(0, 6).map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} onClick={() => navigate(item.page)} className={page.name === item.page.name ? "active" : ""}>
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function renderPage(page: Page, navigate: (page: Page) => void, favorites: Set<string>, toggleFavorite: (id: string) => void) {
  switch (page.name) {
    case "timeline":
      return <TimelinePage navigate={navigate} />;
    case "parties":
      return <ListPage title="Partis et mouvements" subtitle="Partis, coalitions et organisations distingués selon leur nature." items={dataset.parties} render={(party) => <PartyCard party={party} navigate={navigate} />} />;
    case "persons":
      return <ListPage title="Personnalités" subtitle="Fiches biographiques reliées aux partis et événements." items={dataset.persons} render={(person) => <PersonCard person={person} navigate={navigate} />} />;
    case "elections":
      return <ListPage title="Élections" subtitle="Scrutins nationaux intégrés avec prudence sur les résultats détaillés." items={dataset.elections} render={(election) => <ElectionCard election={election} navigate={navigate} />} />;
    case "genealogy":
      return <GenealogyPage navigate={navigate} partyId={page.partyId} />;
    case "search":
      return <SearchPage navigate={navigate} initialQuery={page.query} />;
    case "sources":
      return <SourcesPage />;
    case "docs":
      return <DocumentationPage />;
    case "party":
      return <PartyDetail id={page.id} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    case "person":
      return <PersonDetail id={page.id} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    case "event":
      return <EventDetail id={page.id} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    case "election":
      return <ElectionDetail id={page.id} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    default:
      return <HomePage navigate={navigate} favorites={favorites} />;
  }
}

function HomePage({ navigate, favorites }: { navigate: (page: Page) => void; favorites: Set<string> }) {
  const featuredEvent = byId(dataset.events, "event-front-populaire-1936")!;
  const featuredPerson = byId(dataset.persons, "person-leon-blum")!;
  const featuredParty = byId(dataset.parties, "party-sfio")!;
  const featuredElection = byId(dataset.elections, "election-legislatives-1936")!;

  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Encyclopédie documentaire, 1900 à aujourd'hui</p>
          <h1>L'histoire des partis politiques français</h1>
          <p>Comprendre les partis, les hommes, les élections et les transformations politiques de la France depuis 1900.</p>
          <div className="hero-actions">
            <button onClick={() => navigate({ name: "timeline" })}>Explorer la chronologie</button>
            <button onClick={() => navigate({ name: "parties" })}>Explorer les partis</button>
            <button onClick={() => navigate({ name: "elections" })}>Explorer les élections</button>
          </div>
        </div>
        <div className="archive-visual" aria-hidden="true">
          <span>1905</span><span>1920</span><span>1936</span><span>1958</span>
        </div>
      </section>
      <section className="discovery-grid" aria-label="Blocs découverte">
        <Discovery title="Événement du jour" value={featuredEvent.title} detail={formatDate(featuredEvent.date)} onClick={() => navigate({ name: "event", id: featuredEvent.id })} />
        <Discovery title="Personnalité du jour" value={`${featuredPerson.firstName} ${featuredPerson.lastName}`} detail={featuredPerson.summary} onClick={() => navigate({ name: "person", id: featuredPerson.id })} />
        <Discovery title="Parti à découvrir" value={featuredParty.acronym} detail={featuredParty.name} onClick={() => navigate({ name: "party", id: featuredParty.id })} />
        <Discovery title="Élection historique" value={featuredElection.name} detail={formatDate(featuredElection.date)} onClick={() => navigate({ name: "election", id: featuredElection.id })} />
        <Discovery title="Ce jour-là" value="Dataset en construction" detail="Les événements calendaires seront enrichis sans données inventées." />
        <Discovery title="Citation historique" value="NEEDS_SOURCE" detail="Aucune citation n'est affichée sans source vérifiable." />
        <Discovery title="Saviez-vous que ?" value="Front populaire" detail="Cette entrée est modélisée comme coalition, pas comme parti." />
      </section>
      <section className="notice">
        <h2>Clause historique</h2>
        <p>Les informations présentées ont une vocation historique et documentaire. Elles ne constituent ni une recommandation politique, ni une consigne de vote, ni une prise de position en faveur ou contre un parti ou une personnalité.</p>
        <p>{favorites.size} favori(s) enregistré(s) localement.</p>
      </section>
    </>
  );
}

function Discovery({ title, value, detail, onClick }: { title: string; value: string; detail: string; onClick?: () => void }) {
  const Tag = onClick ? "button" : "article";
  return (
    <Tag className="discovery-card" onClick={onClick as never}>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </Tag>
  );
}

function TimelinePage({ navigate }: { navigate: (page: Page) => void }) {
  const [category, setCategory] = useState("all");
  const events = dataset.events.filter((event) => category === "all" || event.category === category);
  const categories = Array.from(new Set(dataset.events.map((event) => event.category)));
  return (
    <section className="page">
      <PageTitle title="Chronologie interactive" subtitle="Vue 1900-présent, filtrable par type d'événement." />
      <div className="filter-row">
        <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filtrer par type d'événement">
          <option value="all">Tous les événements</option>
          {categories.map((item) => <option key={item} value={item}>{item.replaceAll("_", " ")}</option>)}
        </select>
      </div>
      <ol className="timeline">
        {events.map((event) => (
          <li key={event.id}>
            <button onClick={() => navigate({ name: "event", id: event.id })}>
              <time>{formatDate(event.date)}</time>
              <strong>{event.title}</strong>
              <span>{event.description}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ListPage<T>({ title, subtitle, items, render }: { title: string; subtitle: string; items: T[]; render: (item: T) => React.ReactNode }) {
  return (
    <section className="page">
      <PageTitle title={title} subtitle={subtitle} />
      <div className="card-grid">{items.map((item) => render(item))}</div>
    </section>
  );
}

function PartyCard({ party, navigate }: { party: Party; navigate: (page: Page) => void }) {
  return <button className="entity-card" onClick={() => navigate({ name: "party", id: party.id })}><span>{party.acronym}</span><strong>{party.name}</strong><small>{party.status} · {party.dataStatus}</small></button>;
}

function PersonCard({ person, navigate }: { person: Person; navigate: (page: Page) => void }) {
  return <button className="entity-card" onClick={() => navigate({ name: "person", id: person.id })}><span>{formatDate(person.bornAt)}</span><strong>{person.firstName} {person.lastName}</strong><small>{person.summary}</small></button>;
}

function ElectionCard({ election, navigate }: { election: Election; navigate: (page: Page) => void }) {
  return <button className="entity-card" onClick={() => navigate({ name: "election", id: election.id })}><span>{formatDate(election.date)}</span><strong>{election.name}</strong><small>{election.context}</small></button>;
}

function SearchPage({ navigate, initialQuery = "" }: { navigate: (page: Page) => void; initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return [
      ...dataset.parties.map((item) => ({ kind: "party", id: item.id, title: `${item.acronym} - ${item.name}`, text: item.description })),
      ...dataset.persons.map((item) => ({ kind: "person", id: item.id, title: `${item.firstName} ${item.lastName}`, text: item.summary })),
      ...dataset.events.map((item) => ({ kind: "event", id: item.id, title: item.title, text: item.description })),
      ...dataset.elections.map((item) => ({ kind: "election", id: item.id, title: item.name, text: item.context }))
    ].filter((item) => normalize(`${item.title} ${item.text}`).includes(q));
  }, [query]);
  return (
    <section className="page">
      <PageTitle title="Recherche globale" subtitle="Recherche locale dans partis, personnalités, élections et événements." />
      <input className="search-input" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Jaurès, SFIO, 1936..." aria-label="Recherche" />
      <div className="card-grid">
        {results.map((result) => (
          <button key={`${result.kind}-${result.id}`} className="entity-card" onClick={() => navigate(pageForEntity(result.kind, result.id))}>
            <span>{result.kind}</span>
            <strong>{result.title}</strong>
            <small>{result.text}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function PartyDetail({ id, navigate, favorites, toggleFavorite }: DetailProps) {
  const party = byId(dataset.parties, id);
  if (!party) return <Missing />;
  return (
    <DetailLayout title={party.name} eyebrow={party.acronym} id={party.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{party.description}</p>
      <p className="method-note">{party.historicalNote}</p>
      {party.dataStatus === "evolving" || party.lastVerifiedAt ? <p className="status">Données susceptibles d'évoluer. Dernière vérification : {formatDate(party.lastVerifiedAt)}</p> : null}
      <FactGrid facts={[["Création", formatDate(party.foundedAt)], ["Disparition", formatDate(party.dissolvedAt ?? undefined)], ["Statut", party.status], ["État des données", party.dataStatus]]} />
      <LinkedSection title="Personnalités" ids={[...party.founders, ...party.leaders]} kind="person" navigate={navigate} />
      <LinkedSection title="Événements liés" ids={relatedEventsFor(party.id).map((event) => event.id)} kind="event" navigate={navigate} />
      <RelationSection id={party.id} navigate={navigate} />
      <button className="wide-action" onClick={() => navigate({ name: "genealogy", partyId: party.id })}>Voir la généalogie</button>
      <SourceSection ids={party.sources} />
    </DetailLayout>
  );
}

function PersonDetail({ id, navigate, favorites, toggleFavorite }: DetailProps) {
  const person = byId(dataset.persons, id);
  if (!person) return <Missing />;
  return (
    <DetailLayout title={`${person.firstName} ${person.lastName}`} eyebrow="Personnalité" id={person.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{person.summary}</p>
      <FactGrid facts={[["Naissance", formatDate(person.bornAt)], ["Décès", formatDate(person.diedAt)], ["Professions", person.professions.join(", ")], ["Données", person.dataStatus]]} />
      <LinkedSection title="Partis et organisations" ids={person.parties} kind="party" navigate={navigate} />
      <LinkedSection title="Événements liés" ids={relatedEventsFor(person.id).map((event) => event.id)} kind="event" navigate={navigate} />
      <RelationSection id={person.id} navigate={navigate} />
      <SourceSection ids={person.sources} />
    </DetailLayout>
  );
}

function EventDetail({ id, navigate, favorites, toggleFavorite }: DetailProps) {
  const event = byId(dataset.events, id);
  if (!event) return <Missing />;
  const period = byId(dataset.periods, event.period);
  return (
    <DetailLayout title={event.title} eyebrow={formatDate(event.date)} id={event.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{event.description}</p>
      <FactGrid facts={[["Période", period?.name ?? event.period], ["Catégorie", event.category.replaceAll("_", " ")], ["Importance", `${event.importance}/5`], ["Données", event.dataStatus]]} />
      <LinkedSection title="Partis liés" ids={event.parties} kind="party" navigate={navigate} />
      <LinkedSection title="Personnalités liées" ids={event.persons} kind="person" navigate={navigate} />
      <LinkedSection title="Élections liées" ids={event.elections} kind="election" navigate={navigate} />
      <SourceSection ids={event.sources} />
    </DetailLayout>
  );
}

function ElectionDetail({ id, navigate, favorites, toggleFavorite }: DetailProps) {
  const election = byId(dataset.elections, id);
  if (!election) return <Missing />;
  return (
    <DetailLayout title={election.name} eyebrow={formatDate(election.date)} id={election.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{election.context}</p>
      <FactGrid facts={[["Type", election.type], ["Système électoral", election.electoralSystem ?? "Non renseigné"], ["Données", election.dataStatus]]} />
      <p className="method-note">{election.resultsNote}</p>
      <p>{election.consequences}</p>
      <LinkedSection title="Partis liés" ids={election.parties} kind="party" navigate={navigate} />
      <LinkedSection title="Personnalités liées" ids={election.persons} kind="person" navigate={navigate} />
      <SourceSection ids={election.sources} />
    </DetailLayout>
  );
}

function GenealogyPage({ navigate, partyId = "party-sfio" }: { navigate: (page: Page) => void; partyId?: string }) {
  const party = byId(dataset.parties, partyId) ?? dataset.parties[0];
  const relations = relatedRelationsFor(party.id).filter((relation) => relation.sourceKind === "party" || relation.targetKind === "party");
  return (
    <section className="page">
      <PageTitle title="Généalogie des partis" subtitle="Relations de scission, alliance ou succession représentées comme données." />
      <div className="filter-row">
        <select value={party.id} onChange={(event) => navigate({ name: "genealogy", partyId: event.target.value })} aria-label="Choisir un parti">
          {dataset.parties.map((item) => <option key={item.id} value={item.id}>{item.acronym} - {item.name}</option>)}
        </select>
      </div>
      <div className="genealogy">
        <button className="node selected" onClick={() => navigate({ name: "party", id: party.id })}>{party.acronym}</button>
        <div className="edges">
          {relations.map((relation) => {
            const otherId = relation.source === party.id ? relation.target : relation.source;
            const other = byId(dataset.parties, otherId);
            return (
              <button key={relation.id} className="edge-card" onClick={() => other && navigate({ name: "party", id: other.id })}>
                <span>{relation.relation}</span>
                <strong>{other?.acronym ?? otherId}</strong>
                <small>{relation.description}</small>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SourcesPage() {
  return (
    <section className="page">
      <PageTitle title="Sources" subtitle="Origine des informations, classée par entité de source." />
      <div className="card-grid">
        {dataset.sources.map((source) => (
          <article key={source.id} className="source-card">
            <span>{source.type}</span>
            <h2>{source.title}</h2>
            <p>{source.publisher}</p>
            {source.url ? <a href={source.url} target="_blank" rel="noreferrer">Consulter la source</a> : null}
            {source.notes ? <small>{source.notes}</small> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function DocumentationPage() {
  return (
    <section className="page prose">
      <PageTitle title="Documentation" subtitle="Méthodologie historique et limites de la première version." />
      <h2>Politique éditoriale</h2>
      <p>L'application distingue les faits, les interprétations, les positions revendiquées et les données incertaines. Les catégories politiques sont contextualisées par période.</p>
      <h2>Limites</h2>
      <p>Les résultats électoraux détaillés et les citations ne sont pas intégrés tant qu'une source contrôlée n'a pas été ajoutée au dataset.</p>
      <h2>Glossaire initial</h2>
      <p><strong>Scission</strong> : séparation d'une organisation en plusieurs ensembles. <strong>Coalition</strong> : alliance politique qui n'est pas nécessairement un parti.</p>
    </section>
  );
}

interface DetailProps {
  id: string;
  navigate: (page: Page) => void;
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
}

function DetailLayout({ title, eyebrow, id, favorites, toggleFavorite, children }: React.PropsWithChildren<{ title: string; eyebrow: string; id: string; favorites: Set<string>; toggleFavorite: (id: string) => void }>) {
  return (
    <article className="detail">
      <div className="detail-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <button className="favorite-button" onClick={() => toggleFavorite(id)} aria-pressed={favorites.has(id)}>
          <Star size={18} fill={favorites.has(id) ? "currentColor" : "none"} />
          Favori
        </button>
      </div>
      {children}
    </article>
  );
}

function FactGrid({ facts }: { facts: [string, string][] }) {
  return <dl className="fact-grid">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

function LinkedSection({ title, ids, kind, navigate }: { title: string; ids: string[]; kind: "party" | "person" | "event" | "election"; navigate: (page: Page) => void }) {
  const uniqueIds = Array.from(new Set(ids));
  if (!uniqueIds.length) return null;
  return (
    <section className="linked-section">
      <h2>{title}</h2>
      <div className="chips">
        {uniqueIds.map((id) => <button key={id} onClick={() => navigate(pageForEntity(kind, id))}>{labelFor(kind, id)}</button>)}
      </div>
    </section>
  );
}

function RelationSection({ id, navigate }: { id: string; navigate: (page: Page) => void }) {
  const relations = relatedRelationsFor(id);
  if (!relations.length) return null;
  return (
    <section className="linked-section">
      <h2>Relations</h2>
      {relations.map((relation) => {
        const other = relation.source === id ? relation.target : relation.source;
        const kind = relation.source === id ? relation.targetKind : relation.sourceKind;
        return (
          <button key={relation.id} className="relation-row" onClick={() => navigate(pageForEntity(kind, other))}>
            <span>{relation.relation}</span>
            <strong>{labelFor(kind, other)}</strong>
            <small>{relation.description}</small>
          </button>
        );
      })}
    </section>
  );
}

function SourceSection({ ids }: { ids: string[] }) {
  return (
    <section className="linked-section">
      <h2>Sources</h2>
      <ul className="source-list">{sourceLabels(ids).map((label) => <li key={label}>{label}</li>)}</ul>
    </section>
  );
}

function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return <header className="page-title"><h1>{title}</h1><p>{subtitle}</p></header>;
}

function Missing() {
  return <section className="page"><PageTitle title="Fiche introuvable" subtitle="L'identifiant demandé n'existe pas dans le dataset local." /></section>;
}

function useLocalFavorites(): [string[], (ids: string[]) => void] {
  const [items, setItems] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("histpoliticor:favorites") ?? "[]") as string[];
    } catch {
      return [];
    }
  });
  return [items, (ids) => {
    setItems(ids);
    localStorage.setItem("histpoliticor:favorites", JSON.stringify(ids));
  }];
}

function normalize(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function labelFor(kind: string, id: string) {
  if (kind === "party") {
    const item = byId(dataset.parties, id);
    return item ? `${item.acronym} - ${item.name}` : id;
  }
  if (kind === "person") {
    const item = byId(dataset.persons, id);
    return item ? `${item.firstName} ${item.lastName}` : id;
  }
  if (kind === "event") return byId(dataset.events, id)?.title ?? id;
  if (kind === "election") return byId(dataset.elections, id)?.name ?? id;
  return id;
}

function pageForEntity(kind: string, id: string): Page {
  if (kind === "party") return { name: "party", id };
  if (kind === "person") return { name: "person", id };
  if (kind === "event") return { name: "event", id };
  if (kind === "election") return { name: "election", id };
  return { name: "home" };
}

function pathForPage(page: Page) {
  if (page.name === "party") return routeFor("party", page.id);
  if (page.name === "person") return routeFor("person", page.id);
  if (page.name === "event") return routeFor("event", page.id);
  if (page.name === "election") return routeFor("election", page.id);
  if (page.name === "genealogy" && page.partyId) return `/genealogie/${page.partyId.replace("party-", "")}`;
  return `/${page.name === "home" ? "" : page.name}`;
}

function pageFromPath(path: string): Page {
  const [, section, slug] = path.split("/");
  if (section === "partis" && slug) return { name: "party", id: idFromSlug("party", slug) };
  if (section === "personnalites" && slug) return { name: "person", id: idFromSlug("person", slug) };
  if (section === "evenements" && slug) return { name: "event", id: idFromSlug("event", slug) };
  if (section === "elections" && slug) return { name: "election", id: idFromSlug("election", slug) };
  if (section === "genealogie" && slug) return { name: "genealogy", partyId: idFromSlug("party", slug) };
  if (section === "timeline") return { name: "timeline" };
  if (section === "parties") return { name: "parties" };
  if (section === "persons" || section === "personnalites") return { name: "persons" };
  if (section === "elections") return { name: "elections" };
  if (section === "search") return { name: "search" };
  if (section === "sources") return { name: "sources" };
  if (section === "docs") return { name: "docs" };
  return { name: "home" };
}
