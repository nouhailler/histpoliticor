import type { Election, Event, Party, Period, Person, PoliticalFamily, Regime, Relation } from "../types/domain";

export const regimes: Regime[] = [
  { id: "regime-troisieme-republique", name: "IIIe République", start: "1870-09-04", end: "1940-07-10", description: "Régime parlementaire républicain établi après la chute du Second Empire." },
  { id: "regime-vichy", name: "Régime de Vichy", start: "1940-07-10", end: "1944-08-20", description: "Régime autoritaire de l'Etat français pendant l'Occupation." },
  { id: "regime-liberation", name: "Libération", start: "1944-08-20", end: "1946-10-27", description: "Période de rétablissement républicain et de gouvernement provisoire." },
  { id: "regime-quatrieme-republique", name: "IVe République", start: "1946-10-27", end: "1958-10-04", description: "Régime parlementaire instauré par la Constitution de 1946." },
  { id: "regime-cinquieme-republique", name: "Ve République", start: "1958-10-04", description: "Régime constitutionnel fondé en 1958." }
];

export const periods: Period[] = [
  { id: "period-1900-1914", name: "1900-1914", start: "1900", end: "1914", regime: "regime-troisieme-republique", description: "Consolidation républicaine, recompositions radicales et socialistes." },
  { id: "period-1914-1918", name: "1914-1918", start: "1914", end: "1918", regime: "regime-troisieme-republique", description: "Première Guerre mondiale et Union sacrée." },
  { id: "period-1919-1932", name: "1919-1932", start: "1919", end: "1932", regime: "regime-troisieme-republique", description: "Après-guerre, scission socialiste et structuration communiste." },
  { id: "period-1932-1939", name: "1932-1939", start: "1932", end: "1939", regime: "regime-troisieme-republique", description: "Crises des années 1930 et expérience du Front populaire." },
  { id: "period-1939-1945", name: "1939-1945", start: "1939", end: "1945", regime: "regime-vichy", description: "Guerre, Occupation, Vichy, Résistance et Libération." },
  { id: "period-1945-1958", name: "1945-1958", start: "1945", end: "1958", regime: "regime-quatrieme-republique", description: "Reconstruction, partis de masse et crises gouvernementales." },
  { id: "period-1958-1969", name: "1958-1969", start: "1958", end: "1969", regime: "regime-cinquieme-republique", description: "Fondation de la Ve République et domination gaulliste initiale." },
  { id: "period-1969-1981", name: "1969-1981", start: "1969", end: "1981", regime: "regime-cinquieme-republique", description: "Recomposition à gauche et compétition gaullistes, centristes et libéraux." },
  { id: "period-1981-1995", name: "1981-1995", start: "1981", end: "1995", regime: "regime-cinquieme-republique", description: "Alternance, cohabitations et recompositions partisanes." },
  { id: "period-1995-2002", name: "1995-2002", start: "1995", end: "2002", regime: "regime-cinquieme-republique", description: "Pluralisme partisan et gouvernement de cohabitation." },
  { id: "period-2002-2012", name: "2002-2012", start: "2002", end: "2012", regime: "regime-cinquieme-republique", description: "Présidentialisation et transformations de l'UMP." },
  { id: "period-2012-2017", name: "2012-2017", start: "2012", end: "2017", regime: "regime-cinquieme-republique", description: "Crise des partis de gouvernement traditionnels." },
  { id: "period-2017-2022", name: "2017-2022", start: "2017", end: "2022", regime: "regime-cinquieme-republique", description: "Recomposition autour du macronisme, de LFI et du RN." },
  { id: "period-2022-present", name: "2022-présent", start: "2022", regime: "regime-cinquieme-republique", description: "Données contemporaines susceptibles d'évoluer." }
];

export const families: PoliticalFamily[] = [
  { id: "family-socialisme", name: "Socialisme", description: "Famille historique plurielle issue du mouvement ouvrier et de traditions républicaines sociales.", sources: ["source-vie-publique-front-populaire"] },
  { id: "family-communisme", name: "Communisme", description: "Tradition politique structurée en France après la scission socialiste du Congrès de Tours.", sources: ["source-maitron-tours"] },
  { id: "family-radicalisme", name: "Radicalisme", description: "Famille républicaine attachée à la laïcité et aux réformes politiques dans le contexte de la IIIe République.", sources: ["source-assemblee-1936"] },
  { id: "family-gaullisme", name: "Gaullisme", description: "Famille organisée autour de l'héritage politique du général de Gaulle et des institutions de la Ve République.", sources: ["source-vie-publique-1958"] }
];

export const parties: Party[] = [
  {
    id: "party-sfio",
    name: "Section française de l'Internationale ouvrière",
    acronym: "SFIO",
    variants: ["Parti socialiste SFIO"],
    foundedAt: "1905",
    dissolvedAt: "1969",
    status: "historical",
    description: "Parti socialiste français créé au début du XXe siècle par l'unification de courants socialistes.",
    historicalNote: "Son positionnement doit être lu dans le contexte du socialisme parlementaire français et de ses débats avec le communisme après 1920.",
    families: ["family-socialisme"],
    founders: ["person-jean-jaures"],
    leaders: ["person-leon-blum"],
    sources: ["source-vie-publique-front-populaire", "source-bnf-blum"],
    dataStatus: "partially_verified"
  },
  {
    id: "party-pcf",
    name: "Parti communiste français",
    acronym: "PCF",
    variants: ["Section française de l'Internationale communiste"],
    foundedAt: "1920",
    dissolvedAt: null,
    status: "active",
    description: "Organisation issue de la majorité du Congrès de Tours, d'abord liée à l'Internationale communiste.",
    historicalNote: "Les données contemporaines du parti doivent être vérifiées régulièrement et distinguées de son histoire du XXe siècle.",
    families: ["family-communisme"],
    founders: [],
    leaders: ["person-maurice-thorez"],
    sources: ["source-maitron-tours", "source-pcf-histoire"],
    dataStatus: "partially_verified",
    lastVerifiedAt: "2026-08-24"
  },
  {
    id: "party-front-populaire",
    name: "Front populaire",
    acronym: "FP",
    variants: ["Rassemblement populaire"],
    foundedAt: "1935",
    dissolvedAt: "1938",
    status: "coalition",
    description: "Coalition électorale et parlementaire associant notamment socialistes, radicaux et communistes dans les années 1930.",
    historicalNote: "Cette entrée est une coalition, pas un parti. Elle ne doit pas être confondue avec une organisation partisane unique.",
    families: ["family-socialisme", "family-radicalisme", "family-communisme"],
    founders: [],
    leaders: ["person-leon-blum"],
    sources: ["source-vie-publique-front-populaire", "source-assemblee-1936"],
    dataStatus: "partially_verified"
  },
  {
    id: "party-unr",
    name: "Union pour la nouvelle République",
    acronym: "UNR",
    variants: [],
    foundedAt: "1958",
    dissolvedAt: "1967",
    status: "historical",
    description: "Formation gaulliste créée au moment de l'installation de la Ve République.",
    historicalNote: "Son analyse relève du contexte institutionnel de 1958 et de la structuration partisane du gaullisme.",
    families: ["family-gaullisme"],
    founders: [],
    leaders: ["person-charles-de-gaulle"],
    sources: ["source-vie-publique-1958"],
    dataStatus: "partially_verified"
  }
];

export const persons: Person[] = [
  {
    id: "person-jean-jaures",
    firstName: "Jean",
    lastName: "Jaurès",
    bornAt: "1859-09-03",
    diedAt: "1914-07-31",
    professions: ["homme politique", "journaliste"],
    summary: "Figure socialiste majeure de la IIIe République et acteur de l'unification socialiste.",
    parties: ["party-sfio"],
    functions: ["député"],
    sources: ["source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  },
  {
    id: "person-leon-blum",
    firstName: "Léon",
    lastName: "Blum",
    bornAt: "1872-04-09",
    diedAt: "1950-03-30",
    professions: ["homme politique", "écrivain"],
    summary: "Dirigeant socialiste, président du Conseil lors du Front populaire.",
    parties: ["party-sfio", "party-front-populaire"],
    functions: ["président du Conseil"],
    sources: ["source-bnf-blum", "source-vie-publique-front-populaire"],
    dataStatus: "verified"
  },
  {
    id: "person-maurice-thorez",
    firstName: "Maurice",
    lastName: "Thorez",
    bornAt: "1900-04-28",
    diedAt: "1964-07-11",
    professions: ["homme politique"],
    summary: "Dirigeant communiste français du XXe siècle.",
    parties: ["party-pcf"],
    functions: ["secrétaire général du PCF"],
    sources: ["source-pcf-histoire"],
    dataStatus: "partially_verified"
  },
  {
    id: "person-charles-de-gaulle",
    firstName: "Charles",
    lastName: "de Gaulle",
    bornAt: "1890-11-22",
    diedAt: "1970-11-09",
    professions: ["militaire", "homme d'Etat"],
    summary: "Chef de la France libre puis président de la République, figure centrale de la naissance de la Ve République.",
    parties: ["party-unr"],
    functions: ["président de la République"],
    sources: ["source-vie-publique-1958"],
    dataStatus: "partially_verified"
  }
];

export const elections: Election[] = [
  {
    id: "election-legislatives-1936",
    name: "Élections législatives de 1936",
    date: "1936-04-26",
    type: "legislative",
    regime: "regime-troisieme-republique",
    context: "Scrutin tenu dans le contexte de la crise des années 1930 et de l'alliance du Front populaire.",
    electoralSystem: "TODO_DATA: préciser le système électoral avec source institutionnelle dédiée.",
    resultsNote: "Les chiffres détaillés ne sont pas intégrés dans ce premier dataset afin de ne pas les reconstituer sans table source contrôlée.",
    parties: ["party-sfio", "party-pcf", "party-front-populaire"],
    persons: ["person-leon-blum"],
    consequences: "La victoire parlementaire du Front populaire conduit à la formation du gouvernement Blum.",
    sources: ["source-vie-publique-front-populaire", "source-assemblee-1936"],
    dataStatus: "partially_verified"
  },
  {
    id: "election-referendum-1958",
    name: "Référendum constitutionnel de 1958",
    date: "1958-09-28",
    type: "referendum",
    regime: "regime-quatrieme-republique",
    context: "Consultation sur le projet constitutionnel qui fonde la Ve République.",
    resultsNote: "TODO_DATA: intégrer les résultats officiels à partir d'une source institutionnelle dédiée.",
    parties: ["party-unr"],
    persons: ["person-charles-de-gaulle"],
    consequences: "La Constitution est promulguée le 4 octobre 1958.",
    sources: ["source-vie-publique-1958", "source-conseil-constitutionnel-1958"],
    dataStatus: "partially_verified"
  }
];

export const events: Event[] = [
  {
    id: "event-creation-sfio",
    date: "1905",
    period: "period-1900-1914",
    regime: "regime-troisieme-republique",
    title: "Création de la SFIO",
    description: "Unification de courants socialistes français dans une même organisation.",
    category: "creation_de_parti",
    importance: 4,
    parties: ["party-sfio"],
    persons: ["person-jean-jaures"],
    elections: [],
    sources: ["source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  },
  {
    id: "event-congres-tours",
    date: "1920-12-30",
    period: "period-1919-1932",
    regime: "regime-troisieme-republique",
    title: "Congrès de Tours",
    description: "Le congrès socialiste aboutit à une scission entre la majorité communiste et la minorité demeurant dans la SFIO.",
    category: "scission",
    importance: 5,
    parties: ["party-sfio", "party-pcf"],
    persons: ["person-leon-blum"],
    elections: [],
    sources: ["source-maitron-tours"],
    dataStatus: "partially_verified"
  },
  {
    id: "event-front-populaire-1936",
    date: "1936-05",
    period: "period-1932-1939",
    regime: "regime-troisieme-republique",
    title: "Victoire du Front populaire",
    description: "La coalition du Front populaire obtient une majorité parlementaire, dans un contexte de crise politique et sociale.",
    category: "election",
    importance: 5,
    parties: ["party-front-populaire", "party-sfio", "party-pcf"],
    persons: ["person-leon-blum"],
    elections: ["election-legislatives-1936"],
    sources: ["source-vie-publique-front-populaire", "source-assemblee-1936"],
    dataStatus: "partially_verified"
  },
  {
    id: "event-gouvernement-blum",
    date: "1936-06",
    period: "period-1932-1939",
    regime: "regime-troisieme-republique",
    title: "Gouvernement Blum",
    description: "Léon Blum devient président du Conseil dans la séquence du Front populaire.",
    category: "gouvernement",
    importance: 5,
    parties: ["party-front-populaire", "party-sfio"],
    persons: ["person-leon-blum"],
    elections: ["election-legislatives-1936"],
    sources: ["source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  },
  {
    id: "event-constitution-1958",
    date: "1958-10-04",
    period: "period-1958-1969",
    regime: "regime-cinquieme-republique",
    title: "Promulgation de la Constitution de 1958",
    description: "La Constitution du 4 octobre 1958 fonde la Ve République.",
    category: "constitution",
    importance: 5,
    parties: ["party-unr"],
    persons: ["person-charles-de-gaulle"],
    elections: ["election-referendum-1958"],
    sources: ["source-vie-publique-1958", "source-conseil-constitutionnel-1958"],
    dataStatus: "verified"
  }
];

export const relations: Relation[] = [
  {
    id: "relation-pcf-split-sfio",
    source: "party-pcf",
    sourceKind: "party",
    relation: "SPLIT_FROM",
    target: "party-sfio",
    targetKind: "party",
    date: "1920-12-30",
    description: "Le PCF trouve son origine dans la majorité issue de la scission du Congrès de Tours.",
    sources: ["source-maitron-tours"],
    dataStatus: "partially_verified"
  },
  {
    id: "relation-blum-leader-sfio",
    source: "person-leon-blum",
    sourceKind: "person",
    relation: "LEADER_OF",
    target: "party-sfio",
    targetKind: "party",
    description: "Léon Blum est associé à la direction politique de la SFIO dans l'entre-deux-guerres.",
    sources: ["source-bnf-blum", "source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  },
  {
    id: "relation-front-populaire-alliance",
    source: "party-front-populaire",
    sourceKind: "party",
    relation: "ALLIED_WITH",
    target: "party-sfio",
    targetKind: "party",
    date: "1935",
    description: "Le Front populaire est traité ici comme une coalition liée à la SFIO.",
    sources: ["source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  },
  {
    id: "relation-front-populaire-alliance-pcf",
    source: "party-front-populaire",
    sourceKind: "party",
    relation: "ALLIED_WITH",
    target: "party-pcf",
    targetKind: "party",
    date: "1935",
    description: "Le PCF est associé au Front populaire dans le contexte de l'alliance antifasciste et électorale.",
    sources: ["source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  }
];
