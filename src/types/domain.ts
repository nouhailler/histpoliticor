export type DataStatus = "verified" | "partially_verified" | "historical" | "evolving" | "disputed" | "unverified";

export type SourceType =
  | "archive"
  | "institution"
  | "livre"
  | "article_scientifique"
  | "base_de_donnees"
  | "bibliotheque"
  | "source_primaire"
  | "source_secondaire";

export type EntityKind = "party" | "person" | "election" | "event" | "period" | "regime" | "family" | "document";

export type RelationType =
  | "FOUNDED_FROM"
  | "SPLIT_FROM"
  | "MERGED_INTO"
  | "RENAMED_TO"
  | "ABSORBED_BY"
  | "SUCCESSOR_OF"
  | "PREDECESSOR_OF"
  | "ALLIED_WITH"
  | "OPPOSED_TO"
  | "LEADER_OF"
  | "LED_BY"
  | "FOUNDED_BY"
  | "MEMBER_OF";

export type EventCategory =
  | "creation_de_parti"
  | "dissolution"
  | "fusion"
  | "scission"
  | "changement_de_nom"
  | "congres"
  | "election"
  | "referendum"
  | "gouvernement"
  | "crise"
  | "manifestation"
  | "guerre"
  | "reforme"
  | "constitution"
  | "alliance"
  | "rupture"
  | "deces"
  | "naissance"
  | "discours"
  | "programme"
  | "evenement_social"
  | "evenement_economique";

export interface Source {
  id: string;
  title: string;
  author?: string;
  publisher: string;
  url?: string;
  publicationDate?: string;
  accessDate?: string;
  type: SourceType;
  license?: string;
  notes?: string;
}

export interface HistoricalRef {
  id: string;
  kind: EntityKind;
}

export interface Relation {
  id: string;
  source: string;
  sourceKind: EntityKind;
  relation: RelationType;
  target: string;
  targetKind: EntityKind;
  date?: string;
  description: string;
  sources: string[];
  dataStatus: DataStatus;
}

export interface Regime {
  id: string;
  name: string;
  start: string;
  end?: string;
  description: string;
}

export interface Period {
  id: string;
  name: string;
  start: string;
  end?: string;
  regime: string;
  description: string;
}

export interface PoliticalFamily {
  id: string;
  name: string;
  description: string;
  sources: string[];
}

export interface Party {
  id: string;
  name: string;
  acronym: string;
  variants: string[];
  foundedAt?: string;
  dissolvedAt?: string | null;
  status: "active" | "historical" | "coalition" | "movement" | "association" | "organization";
  description: string;
  historicalNote: string;
  families: string[];
  founders: string[];
  leaders: string[];
  sources: string[];
  dataStatus: DataStatus;
  lastVerifiedAt?: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  bornAt?: string;
  diedAt?: string;
  professions: string[];
  summary: string;
  parties: string[];
  functions: string[];
  sources: string[];
  dataStatus: DataStatus;
}

export interface Event {
  id: string;
  date: string;
  endDate?: string;
  period: string;
  regime: string;
  title: string;
  description: string;
  category: EventCategory;
  importance: 1 | 2 | 3 | 4 | 5;
  parties: string[];
  persons: string[];
  elections: string[];
  sources: string[];
  dataStatus: DataStatus;
}

export interface Election {
  id: string;
  name: string;
  date: string;
  type: "legislative" | "presidentielle" | "referendum" | "constituante" | "autre";
  regime: string;
  context: string;
  electoralSystem?: string;
  resultsNote: string;
  parties: string[];
  persons: string[];
  consequences: string;
  sources: string[];
  dataStatus: DataStatus;
}

export interface DocumentRecord {
  id: string;
  title: string;
  date?: string;
  type: "programme" | "discours" | "texte_fondateur" | "archive" | "article" | "autre";
  author?: string;
  organization?: string;
  context: string;
  transcription?: string;
  sources: string[];
  license?: string;
  dataStatus: DataStatus;
}

export interface Dataset {
  sources: Source[];
  regimes: Regime[];
  periods: Period[];
  families: PoliticalFamily[];
  parties: Party[];
  persons: Person[];
  events: Event[];
  elections: Election[];
  documents: DocumentRecord[];
  relations: Relation[];
}
