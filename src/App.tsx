import {
  Archive,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  GitBranch,
  Home,
  Landmark,
  Menu,
  RefreshCw,
  Search,
  Settings,
  Star,
  Users,
  X,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { dataset } from "./data";
import { partyLogos } from "./data/partyLogos";
import { personPortraits } from "./data/personPortraits";
import { personProfiles, type PersonProfile, type PersonProfilePosition } from "./data/personProfiles";
import type { CrisisType, Election, Event, EventCategory, Party, Person, Relation } from "./types/domain";
import { type AppUpdateController, useAppUpdate } from "./lib/appUpdate";
import { byId, formatDate, idFromSlug, relatedEventsFor, relatedRelationsFor, routeFor, sourceLabels } from "./lib/entity";
import { dailyPick, pickAnniversary, yearOf } from "./lib/home";
import {
  buildGenealogyGraph,
  genealogyCategories,
  layoutGenealogyGraph,
  type GenealogyCategory,
  type GenealogyEdge
} from "./lib/genealogy";

type Page =
  | { name: "home" }
  | { name: "timeline"; year?: number }
  | { name: "parties" }
  | { name: "persons" }
  | { name: "elections" }
  | { name: "genealogy"; partyId?: string }
  | { name: "search"; query?: string }
  | { name: "sources" }
  | { name: "docs" }
  | { name: "settings" }
  | { name: "party"; id: string }
  | { name: "person"; id: string }
  | { name: "event"; id: string }
  | { name: "election"; id: string };

const menuGroups = [
  {
    label: "Explorer l'histoire",
    items: [
      { label: "Accueil", description: "Vue d'ensemble du corpus", icon: Home, page: { name: "home" } as Page },
      { label: "Chronologie", description: "Événements et transformations", icon: CalendarDays, page: { name: "timeline" } as Page },
      { label: "Élections", description: "Scrutins nationaux", icon: Archive, page: { name: "elections" } as Page }
    ]
  },
  {
    label: "Acteurs politiques",
    items: [
      { label: "Partis et mouvements", description: "Organisations et coalitions", icon: Landmark, page: { name: "parties" } as Page },
      { label: "Personnalités", description: "Biographies et mandats", icon: Users, page: { name: "persons" } as Page },
      { label: "Généalogie des partis", description: "Scissions, fusions et filiations", icon: GitBranch, page: { name: "genealogy" } as Page }
    ]
  },
  {
    label: "Documentation",
    items: [
      { label: "Sources", description: "Références du corpus", icon: BookOpen, page: { name: "sources" } as Page },
      { label: "Méthode et données", description: "Principes éditoriaux", icon: BookOpen, page: { name: "docs" } as Page },
      { label: "Paramètres", description: "Version et mises à jour", icon: Settings, page: { name: "settings" } as Page }
    ]
  }
];

export function App() {
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname));
  const [favorites, setFavorites] = useLocalFavorites();
  const [menuOpen, setMenuOpen] = useState(false);
  const appUpdate = useAppUpdate();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuDrawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(menuDrawerRef.current?.querySelectorAll<HTMLElement>("button, a[href]") ?? [])
        .filter((element) => !element.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function navigate(next: Page) {
    setMenuOpen(false);
    setPage(next);
    window.history.pushState(null, "", pathForPage(next));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeMenu() {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  const favoriteSet = new Set(favorites);

  function toggleFavorite(id: string) {
    setFavorites(favoriteSet.has(id) ? favorites.filter((item) => item !== id) : [...favorites, id]);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => navigate({ name: "home" })} aria-label="Aller à l'accueil">
          <span className="brand-mark" aria-hidden="true">
            <img src="/icons/histpoliticor-icon-192.png" alt="" />
          </span>
          <span>
            <strong>HistPoliticor</strong>
            <small>Base historique locale</small>
          </span>
        </button>
        <div className="header-actions">
          <button className="icon-button" onClick={() => navigate({ name: "search" })} aria-label="Rechercher">
            <Search size={20} />
          </button>
          <button
            ref={menuButtonRef}
            className="icon-button menu-trigger"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
          >
            <Menu size={21} />
            <span>Menu</span>
          </button>
        </div>
      </header>
      <main>
        {renderPage(page, navigate, favoriteSet, toggleFavorite, appUpdate)}
      </main>
      {menuOpen ? (
        <div className="menu-overlay" onMouseDown={(event) => event.target === event.currentTarget && closeMenu()}>
          <aside ref={menuDrawerRef} id="main-menu" className="menu-drawer" role="dialog" aria-modal="true" aria-labelledby="menu-title">
            <header className="menu-header">
              <div>
                <span className="menu-eyebrow">Navigation</span>
                <h2 id="menu-title">Explorer HistPoliticor</h2>
              </div>
              <button ref={closeButtonRef} className="icon-button" onClick={closeMenu} aria-label="Fermer le menu">
                <X size={21} />
              </button>
            </header>
            <nav className="menu-navigation" aria-label="Menu principal">
              {menuGroups.map((group) => (
                <section className="menu-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="menu-links">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const active = isMenuPageActive(page, item.page);
                      return (
                        <button key={item.label} className={active ? "active" : ""} onClick={() => navigate(item.page)} aria-current={active ? "page" : undefined}>
                          <span className="menu-link-icon" aria-hidden="true"><Icon size={20} /></span>
                          <span>
                            <strong>{item.label}</strong>
                            <small>{item.description}</small>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

function isMenuPageActive(current: Page, target: Page) {
  if (target.name === "parties") return current.name === "parties" || current.name === "party";
  if (target.name === "persons") return current.name === "persons" || current.name === "person";
  if (target.name === "elections") return current.name === "elections" || current.name === "election";
  if (target.name === "timeline") return current.name === "timeline" || current.name === "event";
  return current.name === target.name;
}

function renderPage(page: Page, navigate: (page: Page) => void, favorites: Set<string>, toggleFavorite: (id: string) => void, appUpdate: AppUpdateController) {
  switch (page.name) {
    case "timeline":
      return <TimelinePage navigate={navigate} initialYear={page.year} />;
    case "parties":
      return <PartyListPage navigate={navigate} />;
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
    case "settings":
      return <SettingsPage update={appUpdate} />;
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

const archiveYears = [1905, 1920, 1936, 1958];
const historicalQuotes = [
  {
    text: "Le courage c’est de chercher la vérité et de la dire.",
    author: "Jean Jaurès",
    context: "Discours à la jeunesse, Albi, juillet 1903",
    personId: "person-jean-jaures",
    sourceId: "source-wikisource-jaures-1903"
  }
];

function HomePage({ navigate, favorites }: { navigate: (page: Page) => void; favorites: Set<string> }) {
  const today = useMemo(() => new Date(), []);
  const timelineEntries = useMemo(() => buildTimelineEntries(), []);
  const sourcedEvents = dataset.events.filter((item) => item.sources.length && item.dataStatus !== "unverified" && item.importance >= 3);
  const sourcedPersons = dataset.persons.filter((item) => item.sources.length && item.dataStatus !== "unverified");
  const sourcedParties = dataset.parties.filter((item) => item.sources.length && item.dataStatus !== "unverified");
  const sourcedElections = dataset.elections.filter((item) => item.sources.length && item.dataStatus !== "unverified");
  const partyRelations = dataset.relations.filter((item) => item.sourceKind === "party" && item.targetKind === "party" && item.sources.length && item.dataStatus !== "unverified");
  const featuredEvent = dailyPick(sourcedEvents, today) ?? dataset.events[0];
  const featuredPerson = dailyPick(sourcedPersons, today, 1) ?? dataset.persons[0];
  const featuredParty = dailyPick(sourcedParties, today, 2) ?? dataset.parties[0];
  const featuredElection = dailyPick(sourcedElections, today, 3) ?? dataset.elections[0];
  const anniversary = pickAnniversary(timelineEntries, today, (entry) => entry.date, 4);
  const featuredQuote = dailyPick(historicalQuotes, today, 5) ?? historicalQuotes[0];
  const featuredQuoteSource = byId(dataset.sources, featuredQuote.sourceId);
  const featuredRelation = dailyPick(partyRelations, today, 6) ?? partyRelations[0];
  const relationFrom = featuredRelation ? byId(dataset.parties, featuredRelation.source) : undefined;
  const relationTo = featuredRelation ? byId(dataset.parties, featuredRelation.target) : undefined;
  const firstTimelineYear = Math.min(...dataset.periods.map((period) => yearOf(period.start) ?? Number.POSITIVE_INFINITY));
  const milestones = archiveYears.map((year) => {
    const event = dataset.events
      .filter((item) => yearOf(item.date) === year && item.sources.length)
      .sort((left, right) => right.importance - left.importance || left.date.localeCompare(right.date))[0];
    return { year, label: event?.title ?? `Explorer l'année ${year}` };
  });

  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Encyclopédie documentaire, {firstTimelineYear} à aujourd'hui</p>
          <h1>L'histoire des partis politiques français</h1>
          <p>Comprendre les partis, les personnalités, les élections et les transformations politiques de la France depuis {firstTimelineYear}.</p>
          <div className="hero-actions">
            <button onClick={() => navigate({ name: "timeline" })}>Explorer la chronologie</button>
            <button onClick={() => navigate({ name: "parties" })}>Explorer les partis</button>
            <button onClick={() => navigate({ name: "elections" })}>Explorer les élections</button>
          </div>
        </div>
        <nav className="archive-visual" aria-label="Accéder à une année de la chronologie">
          {milestones.map((milestone) => (
            <button key={milestone.year} onClick={() => navigate({ name: "timeline", year: milestone.year })} aria-label={`Explorer ${milestone.year} dans la chronologie : ${milestone.label}`}>
              <strong>{milestone.year}</strong>
              <small>{milestone.label}</small>
            </button>
          ))}
        </nav>
      </section>
      <section className="discovery-grid" aria-label="Blocs découverte">
        <Discovery title="Événement du jour" value={featuredEvent.title} detail={formatDate(featuredEvent.date)} onClick={() => navigate({ name: "event", id: featuredEvent.id })} />
        <Discovery title="Personnalité du jour" value={`${featuredPerson.firstName} ${featuredPerson.lastName}`} detail={featuredPerson.summary} onClick={() => navigate({ name: "person", id: featuredPerson.id })} />
        <Discovery title="Parti à découvrir" value={featuredParty.acronym} detail={featuredParty.name} onClick={() => navigate({ name: "party", id: featuredParty.id })} />
        <Discovery title="Élection historique" value={featuredElection.name} detail={formatDate(featuredElection.date)} onClick={() => navigate({ name: "election", id: featuredElection.id })} />
        <Discovery
          title={anniversary.exact ? "Ce jour-là" : "À cette période"}
          value={anniversary.item?.title ?? "Explorer la chronologie"}
          detail={anniversary.item ? formatDate(anniversary.item.date) : "Parcourir les événements documentés"}
          onClick={() => navigate(anniversary.item?.page ?? { name: "timeline" })}
        />
        <Discovery
          title="Citation historique"
          value={`« ${featuredQuote.text} »`}
          detail={`${featuredQuote.author} · ${featuredQuote.context} · Source : ${featuredQuoteSource?.publisher ?? "référence vérifiée"}`}
          onClick={() => navigate({ name: "person", id: featuredQuote.personId })}
        />
        <Discovery
          title="Transformation à découvrir"
          value={relationFrom && relationTo ? `${relationFrom.acronym} → ${relationTo.acronym}` : "Généalogie des partis"}
          detail={featuredRelation?.description ?? "Explorer les filiations politiques documentées."}
          onClick={() => navigate({ name: "genealogy", partyId: relationFrom?.id ?? relationTo?.id })}
        />
      </section>
      <button className="notice home-notice" onClick={() => navigate({ name: "docs" })}>
        <h2>Clause historique</h2>
        <p>Les informations présentées ont une vocation historique et documentaire. Elles ne constituent ni une recommandation politique, ni une consigne de vote, ni une prise de position en faveur ou contre un parti ou une personnalité.</p>
        <p>{favorites.size} favori(s) enregistré(s) localement. Consulter la méthode éditoriale <ArrowRight size={17} aria-hidden="true" /></p>
      </button>
    </>
  );
}

function Discovery({ title, value, detail, onClick }: { title: string; value: string; detail: string; onClick: () => void }) {
  return (
    <button className="discovery-card" onClick={onClick}>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
      <span className="discovery-cta">Ouvrir <ArrowRight size={16} aria-hidden="true" /></span>
    </button>
  );
}

type TimelineIdeologyFilter = "all" | "left" | "far-left" | "center" | "right" | "far-right";
type TimelineTypeFilter = "all" | EventCategory | "president";
type TimelineEntryType = Exclude<TimelineTypeFilter, "all">;

interface TimelineEntry {
  id: string;
  date: string;
  endDate?: string;
  ongoing?: boolean;
  period?: string;
  regime?: string;
  title: string;
  description: string;
  type: TimelineEntryType;
  crisisType?: CrisisType;
  consequences?: string;
  page: Page;
  parties: string[];
  persons: string[];
  elections: string[];
}

interface GovernmentContext {
  start: string;
  end?: string;
  name: string;
  parties: string[];
}

interface TimelineContextItem {
  id: string;
  title: string;
  date?: string;
  endDate?: string;
  ongoing?: boolean;
  page?: Page;
}

interface TimelineContextGroup {
  label: string;
  items: TimelineContextItem[];
}

const timelineIdeologyFilters: { value: TimelineIdeologyFilter; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "left", label: "Gauche" },
  { value: "far-left", label: "Extrême gauche" },
  { value: "center", label: "Centre" },
  { value: "right", label: "Droite" },
  { value: "far-right", label: "Extrême droite" }
];

const timelineTypeFilters: { value: TimelineTypeFilter; label: string }[] = [
  { value: "all", label: "Tous les types" },
  { value: "election", label: "Élections" },
  { value: "creation_de_parti", label: "Créations de partis" },
  { value: "scission", label: "Scissions" },
  { value: "fusion", label: "Fusions" },
  { value: "changement_de_nom", label: "Changements de nom" },
  { value: "president", label: "Présidents" },
  { value: "gouvernement", label: "Gouvernements" },
  { value: "crise", label: "Crises" },
  { value: "referendum", label: "Référendums" },
  { value: "guerre", label: "Guerres" },
  { value: "manifestation", label: "Manifestations" }
];

const familyIdeology: Record<string, TimelineIdeologyFilter[]> = {
  "family-socialisme": ["left"],
  "family-communisme": ["far-left", "left"],
  "family-anarchisme": ["far-left"],
  "family-ecologie-politique": ["left"],
  "family-radicalisme": ["left", "center"],
  "family-liberalisme": ["center", "right"],
  "family-democratie-chretienne": ["center", "right"],
  "family-republicanisme": ["center"],
  "family-gaullisme": ["right"],
  "family-conservatisme": ["right"],
  "family-nationalisme": ["far-right", "right"],
  "family-fascisme": ["far-right"],
  "family-monarchisme": ["far-right", "right"],
  "family-souverainisme": ["right"],
  "family-regionalisme": ["center"]
};

const governmentContexts: GovernmentContext[] = [
  { start: "1880-09-23", end: "1881-11-10", name: "Gouvernement Jules Ferry", parties: ["party-republicains-progressistes"] },
  { start: "1881-11-10", end: "1882-01-26", name: "Gouvernement Léon Gambetta", parties: ["party-republicains-progressistes"] },
  { start: "1882-01-26", end: "1882-08-07", name: "Gouvernement Charles Duclerc", parties: ["party-republicains-progressistes"] },
  { start: "1882-08-07", end: "1883-01-29", name: "Gouvernement Armand Fallières", parties: ["party-republicains-progressistes"] },
  { start: "1883-01-29", end: "1885-04-06", name: "Gouvernement Jules Ferry", parties: ["party-republicains-progressistes"] },
  { start: "1885-04-06", end: "1885-12-07", name: "Gouvernement Henri Brisson", parties: ["party-republicains-progressistes"] },
  { start: "1885-12-07", end: "1886-12-17", name: "Gouvernement Charles de Freycinet", parties: ["party-republicains-progressistes"] },
  { start: "1886-12-17", end: "1887-05-30", name: "Gouvernement René Goblet", parties: ["party-republicains-progressistes"] },
  { start: "1887-05-30", end: "1887-12-12", name: "Gouvernement Maurice Rouvier", parties: ["party-republicains-progressistes"] },
  { start: "1887-12-12", end: "1888-04-03", name: "Gouvernement Pierre Tirard", parties: ["party-republicains-progressistes"] },
  { start: "1888-04-03", end: "1889-02-22", name: "Gouvernement Charles Floquet", parties: ["party-republicains-progressistes"] },
  { start: "1889-02-22", end: "1890-03-17", name: "Gouvernement Pierre Tirard", parties: ["party-republicains-progressistes"] },
  { start: "1890-03-17", end: "1892-02-27", name: "Gouvernement Charles de Freycinet", parties: ["party-republicains-progressistes"] },
  { start: "1892-02-27", end: "1892-12-06", name: "Gouvernement Émile Loubet", parties: ["party-republicains-progressistes"] },
  { start: "1892-12-06", end: "1893-04-04", name: "Gouvernement Alexandre Ribot", parties: ["party-republicains-progressistes"] },
  { start: "1893-04-04", end: "1893-12-03", name: "Gouvernement Charles Dupuy", parties: ["party-republicains-progressistes"] },
  { start: "1893-12-03", end: "1894-05-30", name: "Gouvernement Jean Casimir-Perier", parties: ["party-republicains-progressistes"] },
  { start: "1894-05-30", end: "1895-01-26", name: "Gouvernement Charles Dupuy", parties: ["party-republicains-progressistes"] },
  { start: "1895-01-26", end: "1895-11-01", name: "Gouvernement Alexandre Ribot", parties: ["party-republicains-progressistes"] },
  { start: "1895-11-01", end: "1896-04-29", name: "Gouvernement Léon Bourgeois", parties: ["party-prrrs"] },
  { start: "1896-04-29", end: "1898-06-28", name: "Gouvernement Jules Méline", parties: ["party-republicains-progressistes"] },
  { start: "1898-06-28", end: "1898-11-01", name: "Gouvernement Henri Brisson", parties: ["party-prrrs"] },
  { start: "1898-11-01", end: "1899-06-22", name: "Gouvernement Charles Dupuy", parties: ["party-republicains-progressistes"] },
  { start: "1899-06-22", end: "1902-06-07", name: "Gouvernement Pierre Waldeck-Rousseau", parties: ["party-republicains-progressistes", "party-prrrs"] },
  { start: "1902-06-07", end: "1905-01-24", name: "Gouvernement Émile Combes", parties: ["party-prrrs", "party-psf-1902"] },
  { start: "1905-01-24", end: "1906-03-14", name: "Gouvernement Maurice Rouvier", parties: ["party-prrrs", "party-ard"] },
  { start: "1906-03-14", end: "1906-10-25", name: "Gouvernement Ferdinand Sarrien", parties: ["party-prrrs"] },
  { start: "1906-10-25", end: "1909-07-24", name: "Gouvernement Georges Clemenceau", parties: ["party-prrrs"] },
  { start: "1909-07-24", end: "1911-03-02", name: "Gouvernement Aristide Briand", parties: ["party-prrrs", "party-prs"] },
  { start: "1911-03-02", end: "1911-06-27", name: "Gouvernement Ernest Monis", parties: ["party-prrrs"] },
  { start: "1911-06-27", end: "1912-01-21", name: "Gouvernement Joseph Caillaux", parties: ["party-prrrs"] },
  { start: "1912-01-21", end: "1913-01-21", name: "Gouvernement Raymond Poincaré", parties: ["party-ard", "party-prrrs"] },
  { start: "1913-01-21", end: "1913-03-22", name: "Gouvernement Aristide Briand", parties: ["party-prrrs", "party-prs"] },
  { start: "1913-03-22", end: "1913-12-09", name: "Gouvernement Louis Barthou", parties: ["party-ard", "party-prrrs"] },
  { start: "1913-12-09", end: "1914-06-09", name: "Gouvernement Gaston Doumergue", parties: ["party-prrrs"] },
  { start: "1914-06-09", end: "1914-08-26", name: "Gouvernement Alexandre Ribot", parties: ["party-ard", "party-prrrs"] },
  { start: "1914-08-26", end: "1915-10-29", name: "Gouvernement René Viviani", parties: ["party-prrrs", "party-sfio"] },
  { start: "1915-10-29", end: "1917-03-20", name: "Gouvernement Aristide Briand", parties: ["party-prrrs", "party-sfio", "party-ard"] },
  { start: "1917-03-20", end: "1917-09-12", name: "Gouvernement Alexandre Ribot", parties: ["party-prrrs", "party-sfio", "party-ard"] },
  { start: "1917-09-12", end: "1917-11-16", name: "Gouvernement Paul Painlevé", parties: ["party-prrrs", "party-sfio"] },
  { start: "1917-11-16", end: "1920-01-20", name: "Gouvernement Georges Clemenceau", parties: ["party-prrrs", "party-ard", "party-federation-republicaine"] },
  { start: "1920-01-20", end: "1920-09-24", name: "Gouvernement Alexandre Millerand", parties: ["party-bloc-national", "party-ard", "party-federation-republicaine"] },
  { start: "1920-09-24", end: "1921-01-16", name: "Gouvernement Georges Leygues", parties: ["party-bloc-national", "party-ard", "party-federation-republicaine"] },
  { start: "1921-01-16", end: "1922-01-15", name: "Gouvernement Aristide Briand", parties: ["party-bloc-national", "party-ard"] },
  { start: "1922-01-15", end: "1924-06-08", name: "Gouvernement Raymond Poincaré", parties: ["party-bloc-national", "party-ard", "party-federation-republicaine"] },
  { start: "1924-06-08", end: "1925-04-17", name: "Gouvernement Édouard Herriot", parties: ["party-cartel-des-gauches", "party-prrrs"] },
  { start: "1925-04-17", end: "1925-11-28", name: "Gouvernement Paul Painlevé", parties: ["party-cartel-des-gauches", "party-prrrs"] },
  { start: "1925-11-28", end: "1926-03-09", name: "Gouvernement Aristide Briand", parties: ["party-prrrs", "party-ard"] },
  { start: "1926-03-09", end: "1926-07-23", name: "Gouvernement Édouard Herriot", parties: ["party-cartel-des-gauches", "party-prrrs"] },
  { start: "1926-07-23", end: "1929-07-29", name: "Gouvernement Raymond Poincaré", parties: ["party-ard", "party-federation-republicaine", "party-prrrs"] },
  { start: "1929-07-29", end: "1929-11-03", name: "Gouvernement Aristide Briand", parties: ["party-prrrs", "party-ard"] },
  { start: "1929-11-03", end: "1930-02-21", name: "Gouvernement André Tardieu", parties: ["party-ard", "party-federation-republicaine"] },
  { start: "1930-02-21", end: "1930-03-02", name: "Gouvernement Camille Chautemps", parties: ["party-prrrs"] },
  { start: "1930-03-02", end: "1930-12-13", name: "Gouvernement André Tardieu", parties: ["party-ard", "party-federation-republicaine"] },
  { start: "1930-12-13", end: "1931-01-27", name: "Gouvernement Théodore Steeg", parties: ["party-prrrs"] },
  { start: "1931-01-27", end: "1932-02-20", name: "Gouvernement Pierre Laval", parties: ["party-ard", "party-federation-republicaine"] },
  { start: "1932-02-20", end: "1932-06-03", name: "Gouvernement André Tardieu", parties: ["party-ard", "party-federation-republicaine"] },
  { start: "1932-06-03", end: "1932-12-18", name: "Gouvernement Édouard Herriot", parties: ["party-cartel-des-gauches", "party-prrrs"] },
  { start: "1932-12-18", end: "1933-01-31", name: "Gouvernement Joseph Paul-Boncour", parties: ["party-prrrs", "party-prs"] },
  { start: "1933-01-31", end: "1933-10-26", name: "Gouvernement Édouard Daladier", parties: ["party-prrrs"] },
  { start: "1933-10-26", end: "1933-11-26", name: "Gouvernement Albert Sarraut", parties: ["party-prrrs"] },
  { start: "1933-11-26", end: "1934-01-30", name: "Gouvernement Camille Chautemps", parties: ["party-prrrs"] },
  { start: "1934-01-30", end: "1934-02-09", name: "Gouvernement Édouard Daladier", parties: ["party-prrrs"] },
  { start: "1934-02-09", end: "1934-11-08", name: "Gouvernement Gaston Doumergue", parties: ["party-ard", "party-federation-republicaine", "party-prrrs"] },
  { start: "1934-11-08", end: "1935-06-01", name: "Gouvernement Pierre-Étienne Flandin", parties: ["party-ard", "party-federation-republicaine"] },
  { start: "1935-06-01", end: "1935-06-07", name: "Gouvernement Fernand Bouisson", parties: ["party-ard", "party-prrrs"] },
  { start: "1935-06-07", end: "1936-01-24", name: "Gouvernement Pierre Laval", parties: ["party-ard", "party-federation-republicaine", "party-prrrs"] },
  { start: "1936-01-24", end: "1936-06-04", name: "Gouvernement Albert Sarraut", parties: ["party-prrrs"] },
  { start: "1936-06-04", end: "1937-06-22", name: "Gouvernement Léon Blum", parties: ["party-front-populaire", "party-sfio", "party-prrrs", "party-pcf"] },
  { start: "1937-06-22", end: "1938-03-13", name: "Gouvernement Camille Chautemps", parties: ["party-prrrs", "party-front-populaire"] },
  { start: "1938-03-13", end: "1938-04-10", name: "Gouvernement Léon Blum", parties: ["party-front-populaire", "party-sfio", "party-prrrs"] },
  { start: "1938-04-10", end: "1940-03-21", name: "Gouvernement Édouard Daladier", parties: ["party-prrrs"] },
  { start: "1940-03-21", end: "1940-06-16", name: "Gouvernement Paul Reynaud", parties: ["party-ard", "party-federation-republicaine", "party-prrrs"] },
  { start: "1940-06-16", end: "1940-12-13", name: "Gouvernement Philippe Pétain / Pierre Laval", parties: [] },
  { start: "1940-12-13", end: "1941-02-09", name: "Gouvernement Philippe Pétain / Pierre-Étienne Flandin", parties: [] },
  { start: "1941-02-09", end: "1942-04-18", name: "Gouvernement Philippe Pétain / François Darlan", parties: [] },
  { start: "1942-04-18", end: "1944-08-20", name: "Gouvernement Philippe Pétain / Pierre Laval", parties: [] },
  { start: "1944-08-20", end: "1946-01-26", name: "Gouvernement provisoire Charles de Gaulle", parties: ["party-mrp", "party-pcf", "party-sfio"] },
  { start: "1946-01-26", end: "1946-06-24", name: "Gouvernement provisoire Félix Gouin", parties: ["party-sfio", "party-pcf", "party-mrp"] },
  { start: "1946-06-24", end: "1946-12-16", name: "Gouvernement provisoire Georges Bidault", parties: ["party-mrp", "party-sfio", "party-pcf"] },
  { start: "1946-12-16", end: "1947-01-22", name: "Gouvernement Léon Blum", parties: ["party-sfio", "party-pcf", "party-mrp"] },
  { start: "1947-01-22", end: "1947-11-24", name: "Gouvernement Paul Ramadier", parties: ["party-sfio", "party-mrp", "party-prrrs"] },
  { start: "1947-11-24", end: "1948-07-24", name: "Gouvernement Robert Schuman", parties: ["party-mrp", "party-sfio", "party-prrrs"] },
  { start: "1948-07-24", end: "1948-09-05", name: "Gouvernement André Marie", parties: ["party-prrrs", "party-mrp", "party-sfio"] },
  { start: "1948-09-05", end: "1948-09-11", name: "Gouvernement Robert Schuman", parties: ["party-mrp", "party-sfio", "party-prrrs"] },
  { start: "1948-09-11", end: "1949-10-28", name: "Gouvernement Henri Queuille", parties: ["party-prrrs", "party-mrp", "party-sfio"] },
  { start: "1949-10-28", end: "1950-06-24", name: "Gouvernement Georges Bidault", parties: ["party-mrp", "party-sfio", "party-prrrs"] },
  { start: "1950-06-24", end: "1950-07-10", name: "Gouvernement Henri Queuille", parties: ["party-prrrs", "party-mrp", "party-sfio"] },
  { start: "1950-07-10", end: "1951-03-10", name: "Gouvernement René Pleven", parties: ["party-udsr", "party-mrp", "party-sfio", "party-prrrs"] },
  { start: "1951-03-10", end: "1951-08-11", name: "Gouvernement Henri Queuille", parties: ["party-prrrs", "party-mrp", "party-sfio"] },
  { start: "1951-08-11", end: "1952-01-20", name: "Gouvernement René Pleven", parties: ["party-udsr", "party-mrp", "party-sfio", "party-prrrs"] },
  { start: "1952-01-20", end: "1952-03-08", name: "Gouvernement Edgar Faure", parties: ["party-prrrs", "party-mrp"] },
  { start: "1952-03-08", end: "1953-01-08", name: "Gouvernement Antoine Pinay", parties: ["party-cnip", "party-mrp"] },
  { start: "1953-01-08", end: "1953-06-28", name: "Gouvernement René Mayer", parties: ["party-prrrs", "party-mrp"] },
  { start: "1953-06-28", end: "1954-06-18", name: "Gouvernement Joseph Laniel", parties: ["party-cnip", "party-mrp"] },
  { start: "1954-06-18", end: "1955-02-05", name: "Gouvernement Pierre Mendès France", parties: ["party-prrrs"] },
  { start: "1955-02-05", end: "1956-02-01", name: "Gouvernement Edgar Faure", parties: ["party-prrrs", "party-udsr"] },
  { start: "1956-02-01", end: "1957-06-13", name: "Gouvernement Guy Mollet", parties: ["party-sfio", "party-front-republicain-1956"] },
  { start: "1957-06-13", end: "1957-11-06", name: "Gouvernement Maurice Bourgès-Maunoury", parties: ["party-prrrs", "party-sfio", "party-mrp"] },
  { start: "1957-11-06", end: "1958-04-15", name: "Gouvernement Félix Gaillard", parties: ["party-prrrs", "party-sfio", "party-udsr"] },
  { start: "1958-04-15", end: "1958-06-01", name: "Gouvernement Pierre Pflimlin", parties: ["party-mrp"] },
  { start: "1958-06-01", end: "1959-01-08", name: "Gouvernement Charles de Gaulle", parties: ["party-unr", "party-mrp"] },
  { start: "1959-01-08", end: "1962-04-14", name: "Gouvernement Michel Debré", parties: ["party-unr"] },
  { start: "1962-04-14", end: "1968-07-10", name: "Gouvernement Georges Pompidou", parties: ["party-unr", "party-udr"] },
  { start: "1968-07-10", end: "1969-06-20", name: "Gouvernement Maurice Couve de Murville", parties: ["party-udr"] },
  { start: "1969-06-20", end: "1972-07-05", name: "Gouvernement Jacques Chaban-Delmas", parties: ["party-udr"] },
  { start: "1972-07-05", end: "1974-05-27", name: "Gouvernement Pierre Messmer", parties: ["party-udr"] },
  { start: "1974-05-27", end: "1976-08-25", name: "Gouvernement Jacques Chirac", parties: ["party-udr", "party-fnri"] },
  { start: "1976-08-27", end: "1981-05-21", name: "Gouvernement Raymond Barre", parties: ["party-udf", "party-rpr"] },
  { start: "1981-05-21", end: "1984-07-17", name: "Gouvernement Pierre Mauroy", parties: ["party-ps-1969", "party-pcf", "party-mrg"] },
  { start: "1984-07-17", end: "1986-03-20", name: "Gouvernement Laurent Fabius", parties: ["party-ps-1969"] },
  { start: "1986-03-20", end: "1988-05-10", name: "Gouvernement Jacques Chirac", parties: ["party-rpr", "party-udf"] },
  { start: "1988-05-10", end: "1991-05-15", name: "Gouvernement Michel Rocard", parties: ["party-ps-1969"] },
  { start: "1991-05-15", end: "1992-04-02", name: "Gouvernement Édith Cresson", parties: ["party-ps-1969"] },
  { start: "1992-04-02", end: "1993-03-29", name: "Gouvernement Pierre Bérégovoy", parties: ["party-ps-1969"] },
  { start: "1993-03-29", end: "1995-05-17", name: "Gouvernement Édouard Balladur", parties: ["party-rpr", "party-udf"] },
  { start: "1995-05-17", end: "1997-06-02", name: "Gouvernement Alain Juppé", parties: ["party-rpr", "party-udf"] },
  { start: "1997-06-02", end: "2002-05-06", name: "Gouvernement Lionel Jospin", parties: ["party-gauche-plurielle", "party-ps-1969", "party-pcf", "party-verts", "party-prg", "party-mdc"] },
  { start: "2002-05-06", end: "2005-05-31", name: "Gouvernement Jean-Pierre Raffarin", parties: ["party-ump"] },
  { start: "2005-05-31", end: "2007-05-15", name: "Gouvernement Dominique de Villepin", parties: ["party-ump"] },
  { start: "2007-05-18", end: "2012-05-15", name: "Gouvernement François Fillon", parties: ["party-ump"] },
  { start: "2012-05-16", end: "2014-03-31", name: "Gouvernement Jean-Marc Ayrault", parties: ["party-ps-1969", "party-eelv", "party-prg"] },
  { start: "2014-03-31", end: "2016-12-06", name: "Gouvernement Manuel Valls", parties: ["party-ps-1969", "party-prg"] },
  { start: "2016-12-06", end: "2017-05-15", name: "Gouvernement Bernard Cazeneuve", parties: ["party-ps-1969", "party-prg"] },
  { start: "2017-05-15", end: "2020-07-03", name: "Gouvernement Édouard Philippe", parties: ["party-lrem", "party-modem"] },
  { start: "2020-07-03", end: "2022-05-16", name: "Gouvernement Jean Castex", parties: ["party-lrem", "party-modem"] },
  { start: "2022-05-16", end: "2024-01-09", name: "Gouvernement Élisabeth Borne", parties: ["party-lrem", "party-modem"] },
  { start: "2024-01-09", end: "2024-09-05", name: "Gouvernement Gabriel Attal", parties: ["party-lrem", "party-modem"] },
  { start: "2024-09-05", end: "2024-12-13", name: "Gouvernement Michel Barnier", parties: ["party-lr", "party-lrem", "party-modem"] },
  { start: "2024-12-13", end: "2025-09-09", name: "Gouvernement François Bayrou", parties: ["party-modem", "party-lrem", "party-lr"] },
  { start: "2025-09-09", name: "Gouvernement Sébastien Lecornu", parties: ["party-lrem", "party-modem", "party-lr"] }
];

function TimelinePage({ navigate, initialYear }: { navigate: (page: Page) => void; initialYear?: number }) {
  const [ideology, setIdeology] = useState<TimelineIdeologyFilter>("all");
  const [type, setType] = useState<TimelineTypeFilter>("all");
  const [year, setYear] = useState(initialYear ? String(initialYear) : "all");
  const [openEntryId, setOpenEntryId] = useState<string | null>(null);
  const timelineEntries = useMemo(() => buildTimelineEntries(), []);
  const timelineYears = useMemo(() => [...new Set(timelineEntries.map((entry) => yearOf(entry.date)).filter((item): item is number => item !== undefined))].sort((left, right) => left - right), [timelineEntries]);
  const entries = timelineEntries.filter((entry) => (
    matchesTimelineIdeology(entry, ideology)
    && matchesTimelineType(entry, type)
    && (year === "all" || yearOf(entry.date) === Number(year))
  ));
  return (
    <section className="page">
      <PageTitle title="Chronologie interactive" subtitle="Vue 1880-présent, filtrable par famille politique et par type d'événement." />
      <div className="segmented-filter" role="group" aria-label="Filtrer par orientation politique">
        {timelineIdeologyFilters.map((filter) => (
          <button key={filter.value} className={ideology === filter.value ? "active" : ""} onClick={() => setIdeology(filter.value)} aria-pressed={ideology === filter.value}>
            {filter.label}
          </button>
        ))}
      </div>
      <div className="filter-row">
        <select value={year} onChange={(event) => setYear(event.target.value)} aria-label="Filtrer par année">
          <option value="all">Toutes les années</option>
          {timelineYears.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={type} onChange={(event) => setType(event.target.value as TimelineTypeFilter)} aria-label="Filtrer par type d'événement">
          {timelineTypeFilters.map((filter) => <option key={filter.value} value={filter.value}>{filter.label}</option>)}
        </select>
      </div>
      <ol className="timeline">
        {entries.map((entry) => {
          const isOpen = openEntryId === entry.id;
          const panelId = `timeline-panel-${entry.id}`;
          return (
            <li key={entry.id} className={isOpen ? "open" : ""}>
              <button
                className="timeline-summary"
                onClick={() => setOpenEntryId(isOpen ? null : entry.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="timeline-date-row">
                  <time>{formatDate(entry.date)}{entry.ongoing ? " - en cours" : entry.endDate ? ` - ${formatDate(entry.endDate)}` : ""}</time>
                  <ChevronDown size={20} aria-hidden="true" />
                </span>
                <span className="timeline-meta">{timelineTypeLabel(entry)} · {timelineIdeologyLabel(entry)}</span>
                <strong>{entry.title}</strong>
              </button>
              {isOpen ? (
                <div className="timeline-panel" id={panelId}>
                  <p>{entry.description}</p>
                  <TimelineLinks entry={entry} />
                  <TimelineContext entry={entry} />
                  <button className="timeline-full-link" onClick={() => navigate(entry.page)}>
                    Voir la fiche complète
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
      {!entries.length ? <p className="empty-state">Aucun événement ne correspond à ces filtres.</p> : null}
    </section>
  );
}

function TimelineContext({ entry }: { entry: TimelineEntry }) {
  const groups = timelineContextGroups(entry);
  const rows: [string, string][] = [
    ["Contexte", timelineContextText(entry)],
    ...(entry.crisisType ? [["Type de crise", crisisTypeLabel(entry.crisisType)] as [string, string]] : []),
    ...(entry.consequences ? [["Conséquences", entry.consequences] as [string, string]] : []),
    ...groups.map(({ label, items }) => [label, summarizeTimelineContextItems(items)] as [string, string])
  ];

  return (
    <span className="timeline-context">
      {rows.map(([label, value]) => (
        <span key={label}><b>{label}</b> : {value}</span>
      ))}
    </span>
  );
}

function TimelineContextSection({ entry, navigate }: { entry: TimelineEntry; navigate: (page: Page) => void }) {
  const groups = timelineContextGroups(entry);
  return (
    <section className="linked-section timeline-context-section">
      <h2>Dans la chronologie</h2>
      <dl>
        {groups.map(({ label, items }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>
              {items.length ? (
                <div className="chips">
                  {items.map((item) => item.page ? (
                    <button key={item.id} onClick={() => navigate(item.page!)}>{timelineContextItemLabel(item)}</button>
                  ) : (
                    <span key={item.id} className="context-chip">{timelineContextItemLabel(item)}</span>
                  ))}
                </div>
              ) : <span className="empty-context">Aucun élément renseigné pour cette période.</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function timelineContextGroups(entry: TimelineEntry): TimelineContextGroup[] {
  const timelineEntries = buildTimelineEntries();
  const entriesFor = (predicate: (candidate: TimelineEntry) => boolean) => timelineEntries
    .filter(predicate)
    .filter((candidate) => isTimelineContextualForEntry(entry, candidate))
    .sort((a, b) => {
      if (a.id === entry.id) return -1;
      if (b.id === entry.id) return 1;
      return Math.abs(dateValue(a.date) - dateValue(entry.date)) - Math.abs(dateValue(b.date) - dateValue(entry.date));
    })
    .slice(0, 3)
    .map(timelineContextItemFromEntry);

  return [
    { label: "Élections", items: entriesFor((candidate) => candidate.type === "election") },
    { label: "Créations de partis", items: entriesFor((candidate) => candidate.type === "creation_de_parti") },
    { label: "Scissions", items: entriesFor((candidate) => candidate.type === "scission") },
    { label: "Fusions", items: entriesFor((candidate) => candidate.type === "fusion") },
    { label: "Changements de nom", items: entriesFor((candidate) => candidate.type === "changement_de_nom") },
    { label: "Présidents", items: entriesFor((candidate) => candidate.type === "president") },
    {
      label: "Gouvernements",
      items: governmentsForRange(entry).map((government) => ({
        id: `${government.start}-${government.name}`,
        title: government.name,
        date: government.start,
        endDate: government.end,
        ongoing: !government.end
      }))
    },
    { label: "Crises", items: entriesFor((candidate) => Boolean(candidate.crisisType) || ["crise", "evenement_economique", "evenement_social"].includes(candidate.type)) },
    { label: "Référendums", items: entriesFor((candidate) => candidate.type === "referendum") },
    { label: "Guerres", items: entriesFor((candidate) => candidate.type === "guerre") }
  ];
}

function timelineContextItemFromEntry(entry: TimelineEntry): TimelineContextItem {
  return {
    id: entry.id,
    title: entry.title,
    date: entry.date,
    endDate: entry.endDate,
    ongoing: entry.ongoing,
    page: entry.page
  };
}

function isTimelineContextualForEntry(entry: TimelineEntry, candidate: TimelineEntry) {
  if (entry.id === candidate.id) return true;
  const entryStart = dateValue(entry.date);
  const entryEnd = entry.ongoing ? Date.now() : dateValue(entry.endDate ?? entry.date);
  const candidateStart = dateValue(candidate.date);
  const candidateEnd = candidate.ongoing ? Date.now() : dateValue(candidate.endDate ?? candidate.date);
  if (candidateStart <= entryEnd && candidateEnd >= entryStart) return true;
  if (entry.regime && candidate.regime && entry.regime !== candidate.regime) return false;
  const distance = Math.abs(candidateStart - entryStart);
  if (entry.period && candidate.period === entry.period && distance <= 1000 * 60 * 60 * 24 * 365 * 2) return true;
  return distance <= 1000 * 60 * 60 * 24 * 365;
}

function timelineContextItemLabel(item: TimelineContextItem) {
  if (!item.date) return item.title;
  const range = item.ongoing ? `${formatDate(item.date)} - en cours` : item.endDate ? `${formatDate(item.date)} - ${formatDate(item.endDate)}` : formatDate(item.date);
  return `${item.title} (${range})`;
}

function summarizeTimelineContextItems(items: TimelineContextItem[]) {
  if (!items.length) return "Aucun élément renseigné pour cette période";
  return items.map(timelineContextItemLabel).join(" ; ");
}

function TimelineLinks({ entry }: { entry: TimelineEntry }) {
  const rows = [
    ["Partis", entry.parties.map((id) => labelFor("party", id))],
    ["Personnalités", entry.persons.map((id) => labelFor("person", id))],
    ["Élections", entry.elections.map((id) => labelFor("election", id))]
  ].filter(([, labels]) => labels.length) as [string, string[]][];

  if (!rows.length) return null;
  return (
    <span className="timeline-links">
      {rows.map(([label, labels]) => (
        <span key={label}><b>{label}</b> : {summarizeLabels(labels)}</span>
      ))}
    </span>
  );
}

function buildTimelineEntries(): TimelineEntry[] {
  const entries = [
    ...dataset.events.map(timelineEntryFromEvent),
    ...dataset.elections.filter((election) => !dataset.events.some((event) => event.elections.includes(election.id))).map(timelineEntryFromElection),
    ...dataset.parties.filter((party) => party.foundedAt && !hasEventForParty("creation_de_parti", party.id)).map(timelineEntryFromParty),
    ...dataset.relations.filter(isTimelineRelation).filter((relation) => !hasEventForRelation(relation)).map(timelineEntryFromRelation)
  ];

  return entries.sort((a, b) => dateValue(a.date) - dateValue(b.date) || a.title.localeCompare(b.title, "fr"));
}

function timelineEntryFromEvent(event: Event): TimelineEntry {
  return {
    id: event.id,
    date: event.date,
    endDate: event.endDate,
    ongoing: event.ongoing,
    period: event.period,
    regime: event.regime,
    title: event.title,
    description: event.description,
    type: isPresidentialEntry(event) ? "president" : event.category,
    crisisType: event.crisisType,
    consequences: event.consequences,
    page: { name: "event", id: event.id },
    parties: event.parties,
    persons: event.persons,
    elections: event.elections
  };
}

function timelineEntryFromElection(election: Election): TimelineEntry {
  return {
    id: `timeline-${election.id}`,
    date: election.date,
    regime: election.regime,
    title: election.name,
    description: `${election.context} ${election.consequences}`,
    type: election.type === "presidentielle" ? "president" : election.type === "referendum" ? "referendum" : "election",
    page: { name: "election", id: election.id },
    parties: election.parties,
    persons: election.persons,
    elections: [election.id]
  };
}

function timelineEntryFromParty(party: Party): TimelineEntry {
  return {
    id: `timeline-${party.id}-creation`,
    date: party.foundedAt!,
    ...timelineScopeForDate(party.foundedAt!),
    title: `Création de ${party.acronym}`,
    description: party.description,
    type: "creation_de_parti",
    page: { name: "party", id: party.id },
    parties: [party.id],
    persons: [...party.founders, ...party.leaders],
    elections: []
  };
}

function timelineEntryFromRelation(relation: Relation): TimelineEntry {
  const source = labelFor(relation.sourceKind, relation.source);
  const target = labelFor(relation.targetKind, relation.target);
  return {
    id: `timeline-${relation.id}`,
    date: relation.date!,
    ...timelineScopeForDate(relation.date!),
    title: `${relationTypeLabel(relation)} : ${source} / ${target}`,
    description: relation.description,
    type: timelineTypeFromRelation(relation),
    page: pageForEntity(relation.sourceKind, relation.source),
    parties: [relation.source, relation.target].filter((id, index, ids) => id.startsWith("party-") && ids.indexOf(id) === index),
    persons: [relation.source, relation.target].filter((id, index, ids) => id.startsWith("person-") && ids.indexOf(id) === index),
    elections: []
  };
}

function matchesTimelineIdeology(entry: TimelineEntry, filter: TimelineIdeologyFilter) {
  if (filter === "all") return true;
  return entryIdeologies(entry).includes(filter);
}

function matchesTimelineType(entry: TimelineEntry, filter: TimelineTypeFilter) {
  if (filter === "all") return true;
  if (filter === "crise") return Boolean(entry.crisisType) || isCrisisType(entry.type);
  if (filter === "manifestation") return entry.type === "manifestation" || entry.type === "evenement_social";
  return entry.type === filter;
}

function entryIdeologies(entry: TimelineEntry) {
  const ideologies = new Set<TimelineIdeologyFilter>();
  for (const partyId of entry.parties) {
    const party = byId(dataset.parties, partyId);
    for (const family of party?.families ?? []) {
      for (const ideology of familyIdeology[family] ?? []) {
        ideologies.add(ideology);
      }
    }
  }
  return Array.from(ideologies);
}

function timelineIdeologyLabel(entry: TimelineEntry) {
  const labels = timelineIdeologyFilters
    .filter((filter) => filter.value !== "all" && entryIdeologies(entry).includes(filter.value))
    .map((filter) => filter.label);
  return labels.length ? labels.join(", ") : "Institutionnel";
}

function timelineTypeLabel(entry: TimelineEntry) {
  if (entry.type === "guerre") return "Guerres / crises";
  if (entry.type === "manifestation" || entry.type === "evenement_social") return "Manifestations / crise sociale";
  return timelineTypeFilters.find((filter) => filter.value === entry.type)?.label ?? entry.type.replaceAll("_", " ");
}

function crisisTypeLabel(type: CrisisType) {
  const labels: Record<CrisisType, string> = {
    partisane: "Partisane",
    politique_institutionnelle: "Politique et institutionnelle",
    economique_financiere: "Économique et financière",
    sociale: "Sociale",
    internationale_militaire: "Internationale et militaire",
    sanitaire: "Sanitaire",
    environnementale: "Environnementale",
    territoriale_outre_mer: "Territoriale et outre-mer"
  };
  return labels[type];
}

function isPresidentialEntry(entry: Pick<Event, "category" | "title" | "description" | "elections">) {
  if (entry.category !== "election") return false;
  const text = normalize(`${entry.title} ${entry.description}`);
  return entry.elections.some((id) => byId(dataset.elections, id)?.type === "presidentielle") || text.includes("president");
}

function isTimelineRelation(relation: Relation) {
  return Boolean(relation.date) && ["SPLIT_FROM", "MERGED_INTO", "RENAMED_TO"].includes(relation.relation);
}

function timelineTypeFromRelation(relation: Relation): TimelineEntryType {
  if (relation.relation === "SPLIT_FROM") return "scission";
  if (relation.relation === "MERGED_INTO") return "fusion";
  return "changement_de_nom";
}

function relationTypeLabel(relation: Relation) {
  if (relation.relation === "SPLIT_FROM") return "Scission";
  if (relation.relation === "MERGED_INTO") return "Fusion";
  return "Changement de nom";
}

function hasEventForParty(type: TimelineEntryType, partyId: string) {
  return dataset.events.some((event) => event.category === type && event.parties.includes(partyId));
}

function hasEventForRelation(relation: Relation) {
  const type = timelineTypeFromRelation(relation);
  return dataset.events.some((event) => event.category === type && event.parties.includes(relation.source) && event.parties.includes(relation.target));
}

function summarizeLabels(labels: string[]) {
  const uniqueLabels = Array.from(new Set(labels));
  const visible = uniqueLabels.slice(0, 4).join(", ");
  return uniqueLabels.length > 4 ? `${visible} +${uniqueLabels.length - 4}` : visible;
}

function currentGovernmentFor(entry: TimelineEntry) {
  const date = dateValue(entry.date);
  const contextualGovernment = governmentContexts.find((government) => date >= dateValue(government.start) && (!government.end || date < dateValue(government.end)));
  if (contextualGovernment) return contextualGovernment;

  const governments = dataset.events
    .filter((event) => event.category === "gouvernement" && (!entry.regime || event.regime === entry.regime) && (event.period === entry.period || Math.abs(dateValue(event.date) - date) <= 1000 * 60 * 60 * 24 * 365))
    .sort((a, b) => dateValue(b.date) - dateValue(a.date));
  return governments[0] ? { start: governments[0].date, name: governments[0].title, parties: governments[0].parties } : undefined;
}

function governmentsForRange(entry: Pick<TimelineEntry, "date" | "endDate" | "ongoing">) {
  const start = dateValue(entry.date);
  const end = entry.ongoing ? Number.POSITIVE_INFINITY : dateValue(entry.endDate ?? entry.date);
  return governmentContexts.filter((government) => {
    const governmentStart = dateValue(government.start);
    const governmentEnd = government.end ? dateValue(government.end) : Number.POSITIVE_INFINITY;
    return governmentStart <= end && governmentEnd > start;
  });
}

function summarizeGovernments(governments: GovernmentContext[]) {
  if (!governments.length) return "Non renseigné dans le dataset";
  const names = governments.map((government) => government.name);
  return names.length > 3 ? `${names.slice(0, 3).join(", ")} +${names.length - 3}` : names.join(", ");
}

function governmentNameAt(date?: string) {
  if (!date) return "Non renseigné";
  return currentGovernmentFor({ id: "context", date, title: "", description: "", type: "gouvernement", page: { name: "home" }, parties: [], persons: [], elections: [], ...timelineScopeForDate(date) })?.name ?? "Non renseigné dans le dataset";
}

function timelineContextText(entry: TimelineEntry) {
  const period = entry.period ? byId(dataset.periods, entry.period)?.name : undefined;
  const regime = entry.regime ? byId(dataset.regimes, entry.regime)?.name : undefined;
  return [period, regime].filter(Boolean).join(" · ") || "Contexte institutionnel non renseigné";
}

function isCrisisType(type: TimelineEntryType) {
  return ["crise", "guerre", "evenement_economique", "evenement_social"].includes(type);
}

function timelineScopeForDate(date: string) {
  const period = dataset.periods.find((item) => dateInRange(date, item.start, item.end));
  const regime = dataset.regimes.find((item) => dateInRange(date, item.start, item.end));
  return { period: period?.id, regime: regime?.id };
}

function dateInRange(date: string, start: string, end?: string) {
  const value = dateValue(date);
  return value >= dateValue(start) && (!end || value <= dateValue(end));
}

function dateValue(date: string) {
  const [year, month = "01", day = "01"] = date.split("-");
  return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
}

function ListPage<T>({ title, subtitle, items, render }: { title: string; subtitle: string; items: T[]; render: (item: T) => React.ReactNode }) {
  return (
    <section className="page">
      <PageTitle title={title} subtitle={subtitle} />
      <div className="card-grid">{items.map((item) => render(item))}</div>
    </section>
  );
}

function PartyListPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page">
      <PageTitle title="Partis et mouvements" subtitle="Partis, coalitions et organisations distingués selon leur nature." />
      <div className="card-grid">{dataset.parties.map((party) => <PartyCard key={party.id} party={party} navigate={navigate} />)}</div>
      <PartyLogoCredits />
    </section>
  );
}

function PartyCard({ party, navigate }: { party: Party; navigate: (page: Page) => void }) {
  const logo = partyLogos[party.id];
  return (
    <button className="entity-card party-card" onClick={() => navigate({ name: "party", id: party.id })}>
      <span className="party-logo" aria-hidden="true">
        {logo ? <img src={logo.path} alt="" loading="lazy" decoding="async" /> : <span className="party-monogram">{party.acronym}</span>}
      </span>
      <span className="party-card-copy">
        <span className="party-acronym">{party.acronym}</span>
        <strong>{party.name}</strong>
        <small>{party.status}</small>
      </span>
    </button>
  );
}

function PartyLogoCredits() {
  const credits = dataset.parties.flatMap((party) => {
    const logo = partyLogos[party.id];
    return logo ? [{ party, logo }] : [];
  });
  return (
    <details className="logo-credits">
      <summary>Sources et licences des logos ({credits.length})</summary>
      <p>Fichiers téléchargés depuis Wikimedia Commons. Les droits de marque éventuels restent distincts de la licence du fichier.</p>
      <ul>
        {credits.map(({ party, logo }) => (
          <li key={party.id}>
            <strong>{party.acronym}</strong>{" — "}
            <a href={logo.sourceUrl} target="_blank" rel="noreferrer">{logo.commonsFile}</a>{" — "}
            {logo.author}, {logo.licenseUrl ? <a href={logo.licenseUrl} target="_blank" rel="noreferrer">{logo.license}</a> : logo.license}
          </li>
        ))}
      </ul>
    </details>
  );
}

function PersonCard({ person, navigate }: { person: Person; navigate: (page: Page) => void }) {
  const portrait = personPortraits[person.id];
  return (
    <button className="entity-card person-card" onClick={() => navigate({ name: "person", id: person.id })}>
      <span className="person-portrait-thumb" aria-hidden="true">
        {portrait
          ? <img src={portrait.path} alt="" loading="lazy" decoding="async" />
          : <span className="person-monogram">{person.firstName[0]}{person.lastName[0]}</span>}
      </span>
      <span className="person-card-copy">
        <span className="person-dates">{formatDate(person.bornAt)}</span>
        <strong>{person.firstName} {person.lastName}</strong>
        <small>{person.summary}</small>
      </span>
    </button>
  );
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
  const foundedGovernment = governmentNameAt(party.foundedAt);
  const dissolvedGovernment = governmentNameAt(party.dissolvedAt ?? undefined);
  return (
    <DetailLayout title={party.name} eyebrow={party.acronym} id={party.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{party.description}</p>
      <p className="method-note">{party.historicalNote}</p>
      <FactGrid facts={[["Création", formatDate(party.foundedAt)], ["Gouvernement à la création", foundedGovernment], ["Disparition", formatDate(party.dissolvedAt ?? undefined)], ["Gouvernement à la disparition", dissolvedGovernment], ["Statut", party.status]]} />
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
  const portrait = personPortraits[person.id];
  const profile = personProfiles[person.id];
  const professions = uniqueLabels([...person.professions, ...(profile?.occupations ?? [])]);
  const facts: [string, string][] = [
    ["Naissance", formatDate(person.bornAt)],
    ...(profile?.birthPlaces.length ? [["Lieu de naissance", profile.birthPlaces.join(", ")] as [string, string]] : []),
    ["Décès", formatDate(person.diedAt)],
    ...(profile?.deathPlaces.length ? [["Lieu de décès", profile.deathPlaces.join(", ")] as [string, string]] : []),
    ...(profile?.citizenships.length ? [["Nationalité", profile.citizenships.join(", ")] as [string, string]] : []),
    ["Professions et activités", professions.join(", ")]
  ];
  return (
    <DetailLayout title={`${person.firstName} ${person.lastName}`} eyebrow="Personnalité" id={person.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <div className="person-profile">
        <figure className={`person-portrait${portrait ? "" : " fallback"}`}>
          {portrait
            ? <img src={portrait.path} alt={`Portrait de ${person.firstName} ${person.lastName}`} decoding="async" />
            : <span className="person-monogram" aria-hidden="true">{person.firstName[0]}{person.lastName[0]}</span>}
          {portrait ? (
            <figcaption>
              <a href={portrait.sourceUrl} target="_blank" rel="noreferrer">Image Wikimedia Commons</a>
              <span>{portrait.author} · {portrait.licenseUrl ? <a href={portrait.licenseUrl} target="_blank" rel="noreferrer">{portrait.license}</a> : portrait.license}</span>
              <a href={portrait.wikipediaUrl} target="_blank" rel="noreferrer">Notice Wikipédia</a>
            </figcaption>
          ) : <figcaption>Aucun portrait libre identifié avec certitude.</figcaption>}
        </figure>
        <div className="person-biography">
          <section className="biography-copy">
            <h2>Biographie</h2>
            <p className="person-summary">{person.summary}</p>
            {profile
              ? profile.extract.split(/\n+/).filter(Boolean).map((paragraph, index) => <p key={`${person.id}-bio-${index}`}>{paragraph}</p>)
              : <p className="empty-context">Aucun résumé biographique externe n'est disponible.</p>}
          </section>
          <FactGrid facts={facts} />
          {profile ? <WikipediaAttribution profile={profile} /> : null}
        </div>
      </div>
      <PersonCareerSection person={person} profile={profile} />
      <LinkedSection title="Partis et organisations" ids={person.parties} kind="party" navigate={navigate} />
      <LinkedSection title="Événements liés" ids={relatedEventsFor(person.id).map((event) => event.id)} kind="event" navigate={navigate} />
      <RelationSection id={person.id} navigate={navigate} />
      <SourceSection ids={person.sources} />
    </DetailLayout>
  );
}

function PersonCareerSection({ person, profile }: { person: Person; profile?: PersonProfile }) {
  const positions = profile?.positions ?? [];
  const hasDetails = person.functions.length || positions.length || profile?.educatedAt.length || profile?.politicalParties.length;
  if (!hasDetails) return null;
  return (
    <section className="person-career">
      <h2>Fonctions, mandats et parcours</h2>
      <div className="profile-info-grid">
        <ProfileList title="Fonctions principales dans le corpus" items={person.functions} />
        <ProfileList title="Formation" items={profile?.educatedAt ?? []} />
        <ProfileList title="Affiliations politiques répertoriées" items={profile?.politicalParties ?? []} />
      </div>
      {positions.length ? (
        <section className="mandates-section">
          <h3>Mandats et responsabilités</h3>
          <ol className="mandates-list">
            {positions.map((position, index) => (
              <li key={`${position.label}-${position.start ?? "unknown"}-${index}`}>
                <strong>{position.label}</strong>
                <span>{positionDateLabel(position)}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </section>
  );
}

function ProfileList({ title, items }: { title: string; items: string[] }) {
  const values = uniqueLabels(items);
  if (!values.length) return null;
  return (
    <section className="profile-list">
      <h3>{title}</h3>
      <ul>{values.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}

function WikipediaAttribution({ profile }: { profile: PersonProfile }) {
  return (
    <p className="wikipedia-attribution">
      Résumé issu de <a href={profile.wikipediaUrl} target="_blank" rel="noreferrer">Wikipédia</a>, sous{" "}
      <a href={profile.licenseUrl} target="_blank" rel="noreferrer">{profile.license}</a>. Données structurées :{" "}
      <a href={`https://www.wikidata.org/wiki/${profile.wikidataId}`} target="_blank" rel="noreferrer">Wikidata</a>. Mise à jour du {formatDate(profile.retrievedAt)}.
    </p>
  );
}

function positionDateLabel(position: PersonProfilePosition) {
  if (position.start && position.end) return `${formatDate(position.start)} – ${formatDate(position.end)}`;
  if (position.start) return `Depuis le ${formatDate(position.start)}`;
  if (position.end) return `Jusqu'au ${formatDate(position.end)}`;
  return "Dates non renseignées";
}

function uniqueLabels(values: string[]) {
  const seen = new Set<string>();
  return values.filter((value) => {
    const key = normalize(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function EventDetail({ id, navigate, favorites, toggleFavorite }: DetailProps) {
  const event = byId(dataset.events, id);
  if (!event) return <Missing />;
  const period = byId(dataset.periods, event.period);
  const timelineEntry = timelineEntryFromEvent(event);
  const facts: [string, string][] = [
    ["Période", period?.name ?? event.period],
    ...(event.crisisType ? [["Type de crise", crisisTypeLabel(event.crisisType)] as [string, string]] : [])
  ];
  return (
    <DetailLayout title={event.title} eyebrow={`${formatDate(event.date)}${event.ongoing ? " - en cours" : event.endDate ? ` - ${formatDate(event.endDate)}` : ""}`} id={event.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{event.description}</p>
      {event.consequences ? <section className="event-consequences"><h2>Conséquences</h2><p>{event.consequences}</p></section> : null}
      <FactGrid facts={facts} />
      <TimelineContextSection entry={timelineEntry} navigate={navigate} />
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
  const government = governmentNameAt(election.date);
  return (
    <DetailLayout title={election.name} eyebrow={formatDate(election.date)} id={election.id} favorites={favorites} toggleFavorite={toggleFavorite}>
      <p>{election.context}</p>
      <FactGrid facts={[["Type", election.type], ["Gouvernement en place", government], ["Système électoral", election.electoralSystem ?? "Non renseigné"]]} />
      <p className="method-note">{election.resultsNote}</p>
      <p>{election.consequences}</p>
      <LinkedSection title="Partis liés" ids={election.parties} kind="party" navigate={navigate} />
      <LinkedSection title="Personnalités liées" ids={election.persons} kind="person" navigate={navigate} />
      <SourceSection ids={election.sources} />
    </DetailLayout>
  );
}

function GenealogyPage({ navigate, partyId = "party-rpf" }: { navigate: (page: Page) => void; partyId?: string }) {
  const initialParty = byId(dataset.parties, partyId) ?? byId(dataset.parties, "party-rpf") ?? dataset.parties[0];
  const initialFamily = initialParty.families.includes("family-gaullisme") ? "family-gaullisme" : initialParty.families[0];
  const allCategoryIds = genealogyCategories.map((category) => category.id);
  const [familyId, setFamilyId] = useState(initialFamily);
  const [activeCategories, setActiveCategories] = useState<Set<GenealogyCategory>>(() => new Set(allCategoryIds));
  const [selectedPartyId, setSelectedPartyId] = useState(initialParty.id);
  const [selectedRelationId, setSelectedRelationId] = useState<string>();
  const [zoom, setZoom] = useState(1);
  const graphViewportRef = useRef<HTMLDivElement>(null);

  const availableFamilies = useMemo(() => dataset.families
    .filter((family) => buildGenealogyGraph(dataset.parties, dataset.relations, family.id, new Set(allCategoryIds)).edges.length)
    .sort((left, right) => left.name.localeCompare(right.name, "fr")), []);
  const graph = useMemo(
    () => buildGenealogyGraph(dataset.parties, dataset.relations, familyId, activeCategories),
    [activeCategories, familyId]
  );
  const layout = useMemo(() => layoutGenealogyGraph(graph.nodes, graph.edges), [graph]);
  const selectedParty = graph.nodes.find((party) => party.id === selectedPartyId);
  const selectedEdge = graph.edges.find((edge) => edge.relation.id === selectedRelationId);

  useEffect(() => {
    if (selectedParty || selectedEdge) return;
    setSelectedPartyId(graph.nodes[0]?.id ?? "");
    setSelectedRelationId(undefined);
  }, [graph.nodes, selectedEdge, selectedParty]);

  useEffect(() => {
    const viewport = graphViewportRef.current;
    const position = layout.positions[selectedPartyId];
    if (!viewport || !position) return;
    const left = Math.max(0, (position.x + layout.nodeWidth / 2) * zoom - viewport.clientWidth / 2);
    const top = Math.max(0, (position.y + layout.nodeHeight / 2) * zoom - viewport.clientHeight / 2);
    viewport.scrollTo({ left, top, behavior: "smooth" });
  }, [layout, selectedPartyId, zoom]);

  function selectFamily(nextFamilyId: string) {
    setFamilyId(nextFamilyId);
    setSelectedPartyId("");
    setSelectedRelationId(undefined);
    setZoom(1);
  }

  function toggleCategory(category: GenealogyCategory) {
    setActiveCategories((current) => {
      if (current.has(category) && current.size === 1) return current;
      const next = new Set(current);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
    setSelectedRelationId(undefined);
  }

  function selectParty(id: string) {
    setSelectedPartyId(id);
    setSelectedRelationId(undefined);
  }

  return (
    <section className="page genealogy-page">
      <PageTitle
        title="Généalogie des partis"
        subtitle="Créations, scissions, fusions, changements de nom, successions et disparitions dans une même visualisation interactive."
      />

      <div className="genealogy-controls">
        <label>
          <span>Famille politique</span>
          <select value={familyId} onChange={(event) => selectFamily(event.target.value)}>
            {availableFamilies.map((family) => <option key={family.id} value={family.id}>{family.name}</option>)}
          </select>
        </label>
        <label>
          <span>Mettre un parti en évidence</span>
          <select value={selectedParty?.id ?? ""} onChange={(event) => selectParty(event.target.value)} disabled={!graph.nodes.length}>
            {!selectedParty ? <option value="">Relation sélectionnée</option> : null}
            {graph.nodes.map((party) => <option key={party.id} value={party.id}>{party.acronym} - {party.name}</option>)}
          </select>
        </label>
        <div className="genealogy-zoom" aria-label="Zoom du graphe">
          <button onClick={() => setZoom((value) => Math.max(0.7, Number((value - 0.1).toFixed(1))))} aria-label="Réduire le graphe"><ZoomOut size={19} /></button>
          <span>{Math.round(zoom * 100)} %</span>
          <button onClick={() => setZoom((value) => Math.min(1.4, Number((value + 0.1).toFixed(1))))} aria-label="Agrandir le graphe"><ZoomIn size={19} /></button>
        </div>
      </div>

      <div className="genealogy-relation-filters" aria-label="Types de relations">
        {genealogyCategories.map((category) => (
          <button
            key={category.id}
            className={`relation-${category.id}`}
            aria-pressed={activeCategories.has(category.id)}
            onClick={() => toggleCategory(category.id)}
          >
            <span aria-hidden="true" />
            {category.label}
          </button>
        ))}
      </div>

      <div className="genealogy-summary" aria-live="polite">
        <strong>{graph.nodes.length} formations</strong>
        <span>{graph.edges.length} transformations représentées</span>
        {graph.hiddenParties ? <span>{graph.hiddenParties} formations sans filiation documentée non affichées</span> : null}
      </div>

      {graph.nodes.length ? (
        <div className="genealogy-workspace">
          <div className="genealogy-viewport" ref={graphViewportRef} aria-label="Arbre généalogique des partis">
            <div className="genealogy-scaled-canvas" style={{ width: layout.width * zoom, height: layout.height * zoom }}>
              <div className="genealogy-stage" style={{ width: layout.width, height: layout.height, transform: `scale(${zoom})` }}>
                <svg className="genealogy-lines" width={layout.width} height={layout.height} aria-hidden="true">
                  <defs>
                    {genealogyCategories.map((category) => (
                      <marker key={category.id} id={`genealogy-arrow-${category.id}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L8,4 L0,8 Z" className={`relation-${category.id}`} />
                      </marker>
                    ))}
                  </defs>
                  {graph.edges.map((edge) => {
                    const from = layout.positions[edge.from];
                    const to = layout.positions[edge.to];
                    if (!from || !to) return null;
                    const startX = from.x + layout.nodeWidth;
                    const startY = from.y + layout.nodeHeight / 2;
                    const endX = to.x;
                    const endY = to.y + layout.nodeHeight / 2;
                    const curve = Math.max(42, (endX - startX) * 0.46);
                    return (
                      <path
                        key={edge.relation.id}
                        className={`genealogy-line relation-${edge.category}${selectedRelationId === edge.relation.id ? " selected" : ""}`}
                        d={`M ${startX} ${startY} C ${startX + curve} ${startY}, ${endX - curve} ${endY}, ${endX} ${endY}`}
                        markerEnd={`url(#genealogy-arrow-${edge.category})`}
                      />
                    );
                  })}
                </svg>

                {graph.edges.map((edge) => {
                  const from = layout.positions[edge.from];
                  const to = layout.positions[edge.to];
                  if (!from || !to) return null;
                  const fromParty = byId(dataset.parties, edge.from);
                  const toParty = byId(dataset.parties, edge.to);
                  return (
                    <button
                      key={`${edge.relation.id}-label`}
                      className={`genealogy-edge-label relation-${edge.category}${selectedRelationId === edge.relation.id ? " selected" : ""}`}
                      style={{ left: (from.x + layout.nodeWidth + to.x) / 2 - 43, top: (from.y + to.y) / 2 + layout.nodeHeight / 2 - 13 }}
                      onClick={() => {
                        setSelectedRelationId(edge.relation.id);
                        setSelectedPartyId("");
                      }}
                      aria-label={`${genealogyCategoryLabel(edge.category)} de ${fromParty?.acronym ?? edge.from} vers ${toParty?.acronym ?? edge.to}`}
                    >
                      {genealogyCategoryLabel(edge.category)} · {shortYear(edge.relation.date)}
                    </button>
                  );
                })}

                {graph.nodes.map((party) => {
                  const position = layout.positions[party.id];
                  return (
                    <button
                      key={party.id}
                      className={`genealogy-party-node${selectedPartyId === party.id ? " selected" : ""}${party.dissolvedAt ? " historical" : " active"}`}
                      style={{ left: position.x, top: position.y, width: layout.nodeWidth, height: layout.nodeHeight }}
                      onClick={() => selectParty(party.id)}
                      aria-pressed={selectedPartyId === party.id}
                      aria-label={`${party.acronym}, ${party.name}, ${partyLifeLabel(party)}`}
                    >
                      <span className="genealogy-node-date">{shortYear(party.foundedAt)} → {party.dissolvedAt ? shortYear(party.dissolvedAt) : "aujourd'hui"}</span>
                      <strong>{party.acronym}</strong>
                      <small>{party.name}</small>
                      <span className="genealogy-node-status">{party.dissolvedAt ? "Disparu" : "Actif"}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <GenealogyDetail
            edge={selectedEdge}
            party={selectedParty}
            graphEdges={graph.edges}
            navigate={navigate}
            selectParty={selectParty}
          />
        </div>
      ) : (
        <p className="notice">Aucune relation de ce type n'est documentée pour cette famille politique.</p>
      )}

      <div className="genealogy-legend" aria-label="Légende">
        <span><i className="active-node" /> Parti actif</span>
        <span><i className="historical-node" /> Parti disparu</span>
        <small>Lecture de gauche à droite ; les dates et la nature de chaque transformation restent accessibles sans survol.</small>
      </div>
    </section>
  );
}

function GenealogyDetail({ edge, party, graphEdges, navigate, selectParty }: {
  edge?: GenealogyEdge;
  party?: Party;
  graphEdges: GenealogyEdge[];
  navigate: (page: Page) => void;
  selectParty: (id: string) => void;
}) {
  if (edge) {
    const from = byId(dataset.parties, edge.from);
    const to = byId(dataset.parties, edge.to);
    return (
      <aside className="genealogy-detail" aria-live="polite">
        <span className={`genealogy-detail-type relation-${edge.category}`}>{genealogyCategoryLabel(edge.category)}</span>
        <h2>{from?.acronym ?? edge.from} <ArrowRight size={18} aria-hidden="true" /> {to?.acronym ?? edge.to}</h2>
        <p className="genealogy-detail-date">{formatDate(edge.relation.date)}</p>
        <p>{edge.relation.description}</p>
        <div className="genealogy-detail-actions">
          {from ? <button onClick={() => selectParty(from.id)}>Voir {from.acronym} dans l'arbre</button> : null}
          {to ? <button onClick={() => selectParty(to.id)}>Voir {to.acronym} dans l'arbre</button> : null}
        </div>
      </aside>
    );
  }
  if (!party) return <aside className="genealogy-detail empty-context">Sélectionnez une formation ou une relation.</aside>;
  const connections = graphEdges.filter((edge) => edge.from === party.id || edge.to === party.id);
  return (
    <aside className="genealogy-detail" aria-live="polite">
      <span className="eyebrow">Formation sélectionnée</span>
      <h2>{party.acronym} — {party.name}</h2>
      <dl>
        <div><dt>Création</dt><dd>{formatDate(party.foundedAt)}</dd></div>
        <div><dt>Disparition</dt><dd>{party.dissolvedAt ? formatDate(party.dissolvedAt) : "Formation active"}</dd></div>
        <div><dt>Transformations</dt><dd>{connections.length}</dd></div>
      </dl>
      <p>{party.description}</p>
      <button className="wide-action" onClick={() => navigate({ name: "party", id: party.id })}>Ouvrir la fiche complète</button>
    </aside>
  );
}

function genealogyCategoryLabel(category: GenealogyCategory) {
  return genealogyCategories.find((item) => item.id === category)?.label ?? category;
}

function shortYear(value?: string | null) {
  return value?.slice(0, 4) ?? "?";
}

function partyLifeLabel(party: Party) {
  return party.dissolvedAt
    ? `créé en ${shortYear(party.foundedAt)}, disparu en ${shortYear(party.dissolvedAt)}`
    : `créé en ${shortYear(party.foundedAt)}, toujours actif`;
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

function SettingsPage({ update }: { update: AppUpdateController }) {
  const busy = update.status === "checking" || update.status === "installing";
  const statusLabels = {
    idle: "Prête à vérifier",
    checking: "Vérification en cours…",
    "up-to-date": "L'application est à jour",
    available: update.latest ? `Version ${update.latest.version} disponible` : "Nouvelle version disponible",
    installing: "Installation et redémarrage…",
    error: "Vérification impossible pour le moment"
  } satisfies Record<typeof update.status, string>;

  return (
    <section className="page settings-page">
      <PageTitle title="Paramètres" subtitle="Version installée et gestion des mises à jour de l'application." />
      <div className="settings-grid">
        <article className="settings-card version-card">
          <div className="settings-app-identity">
            <img src="/icons/histpoliticor-icon-192.png" alt="" />
            <div>
              <span className="eyebrow">Application installée</span>
              <h2>HistPoliticor</h2>
            </div>
          </div>
          <dl className="settings-version-list">
            <div><dt>Version actuelle</dt><dd>{update.current.version}</dd></div>
            <div><dt>Date de mise à jour</dt><dd>{formatDate(update.current.updatedAt)}</dd></div>
            {update.latest && update.latest.version !== update.current.version
              ? <div><dt>Version détectée</dt><dd>{update.latest.version}</dd></div>
              : null}
          </dl>
        </article>

        <article className="settings-card update-card">
          <div className="settings-card-heading">
            <div>
              <span className="eyebrow">Maintenance</span>
              <h2>Mises à jour</h2>
            </div>
            <span className={`update-status ${update.status}`} aria-live="polite">{statusLabels[update.status]}</span>
          </div>

          <label className="settings-toggle">
            <span>
              <strong>Mises à jour automatiques</strong>
              <small>Vérifie la version au démarrage, au retour dans l'application et toutes les 30 minutes.</small>
            </span>
            <input
              type="checkbox"
              checked={update.automaticUpdates}
              onChange={(event) => update.setAutomaticUpdates(event.target.checked)}
            />
          </label>

          <p className="settings-update-note">
            Lorsqu'une nouvelle version est disponible, elle est téléchargée puis l'application redémarre automatiquement. Les favoris locaux sont conservés.
          </p>

          <div className="settings-actions">
            <button className="wide-action" disabled={busy} onClick={() => void update.checkForUpdate(false)}>
              <RefreshCw size={18} className={update.status === "checking" ? "spinning" : ""} />
              {update.status === "checking" ? "Vérification…" : "Vérifier maintenant"}
            </button>
            {update.status === "available" ? (
              <button className="wide-action secondary-action" onClick={() => void update.installUpdate()}>
                Installer la version {update.latest?.version}
              </button>
            ) : null}
          </div>

          {update.lastCheckedAt ? (
            <small className="last-update-check">
              Dernière vérification : {update.lastCheckedAt.toLocaleDateString("fr-FR")} à {update.lastCheckedAt.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}.
            </small>
          ) : null}
        </article>
      </div>
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
  if (page.name === "timeline" && page.year) return `/timeline/${page.year}`;
  if (page.name === "settings") return "/parametres";
  return `/${page.name === "home" ? "" : page.name}`;
}

function pageFromPath(path: string): Page {
  const [, section, slug] = path.split("/");
  if (section === "partis" && slug) return { name: "party", id: idFromSlug("party", slug) };
  if (section === "personnalites" && slug) return { name: "person", id: idFromSlug("person", slug) };
  if (section === "evenements" && slug) return { name: "event", id: idFromSlug("event", slug) };
  if (section === "elections" && slug) return { name: "election", id: idFromSlug("election", slug) };
  if (section === "genealogie" && slug) return { name: "genealogy", partyId: idFromSlug("party", slug) };
  if (section === "timeline") {
    const year = Number.parseInt(slug ?? "", 10);
    return { name: "timeline", year: Number.isFinite(year) ? year : undefined };
  }
  if (section === "parties") return { name: "parties" };
  if (section === "persons" || section === "personnalites") return { name: "persons" };
  if (section === "elections") return { name: "elections" };
  if (section === "search") return { name: "search" };
  if (section === "sources") return { name: "sources" };
  if (section === "docs") return { name: "docs" };
  if (section === "settings" || section === "parametres") return { name: "settings" };
  return { name: "home" };
}
