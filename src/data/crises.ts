import type { Event, Source } from "../types/domain";

export const crisisSources: Source[] = [
  {
    id: "source-assemblee-affaire-dreyfus",
    title: "1894-1906 - L'affaire Dreyfus",
    publisher: "Assemblée nationale",
    url: "https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/troisieme-republique/l-affaire-dreyfus",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-diplomatie-crises-marocaines",
    title: "L'Entente cordiale et les crises marocaines",
    publisher: "Ministère de l'Europe et des Affaires étrangères",
    url: "https://www.diplomatie.gouv.fr/fr/IMG/pdf/33_507-538.pdf",
    type: "archive",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-vignerons-1907",
    title: "La crise viticole et la révolte des vignerons de 1907",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/files/rapport/pdf/084000362.pdf",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-sante-grippes-pandemiques",
    title: "Les grippes pandémiques",
    publisher: "Santé publique France",
    url: "https://www.santepubliquefrance.fr/grippe/les-grippes-pandemiques",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-assemblee-crises-entre-deux-guerres",
    title: "1918-1945 : de l'entre-deux-guerres à l'effondrement de la IIIe République",
    publisher: "Assemblée nationale",
    url: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/juniors/histoire/1918-1945-de-l-entre-deux-guerres-a-l-effondrement-de-la-iiie-republique",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-chemins-memoire-indochine",
    title: "La bataille de Dien Bien Phu et la guerre d'Indochine",
    publisher: "Chemins de mémoire - Ministère des Armées",
    url: "https://www.cheminsdememoire.gouv.fr/fr/la-bataille-de-dien-bien-phu",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-diplomatie-crise-suez",
    title: "La crise de Suez dans les archives diplomatiques françaises",
    publisher: "Ministère de l'Europe et des Affaires étrangères",
    type: "archive",
    accessDate: "2026-08-25"
  },
  {
    id: "source-francearchives-petit-clamart",
    title: "Attentat du Petit-Clamart, 22 août 1962",
    publisher: "FranceArchives",
    type: "archive",
    accessDate: "2026-08-25"
  },
  {
    id: "source-ecologie-amoco-cadiz",
    title: "Cent mesures pour l'environnement - retour sur l'Amoco Cadiz",
    publisher: "Ministère de la Transition écologique",
    url: "https://www.ecologie.gouv.fr/sites/default/files/documents/HS%20n%C2%B034%20100%20mesures%20pour%20l%27environnement.pdf",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-insee-chocs-petroliers",
    title: "L'économie française et les chocs pétroliers",
    publisher: "Insee",
    url: "https://www.insee.fr/fr/statistiques/1374366?sommaire=1374377",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-sang-contamine",
    title: "Rapports publics sur l'affaire du sang contaminé",
    publisher: "Vie publique",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-irsn-tchernobyl",
    title: "Conséquences radiologiques de l'accident de Tchernobyl en France",
    publisher: "Institut de radioprotection et de sûreté nucléaire",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-armees-guerre-golfe",
    title: "La France dans la guerre du Golfe, opération Daguet",
    publisher: "Ministère des Armées",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-banque-france-crise-sme",
    title: "Importée ou interne ? La crise du SME de 1992-1993",
    publisher: "Banque de France",
    url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/importee-ou-interne-la-crise-du-sme-de-1992-93",
    type: "article_scientifique",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-catastrophes-france",
    title: "Les événements extrêmes et les catastrophes en France",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/files/rapport/pdf/054000414.pdf",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-chemins-memoire-afghanistan",
    title: "La France et les opérations en Afghanistan",
    publisher: "Chemins de mémoire - Ministère des Armées",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-sante-canicule-2003",
    title: "La vague de chaleur d'août 2003 : que s'est-il passé ?",
    publisher: "Santé publique France",
    url: "https://www.santepubliquefrance.fr/climat/fortes-chaleurs-canicule/article/la-vague-de-chaleur-daout-2003-que-sest-il-passe",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-diplomatie-irak-2003",
    title: "Position de la France sur la guerre en Irak en 2003",
    publisher: "Ministère de l'Europe et des Affaires étrangères",
    type: "source_primaire",
    accessDate: "2026-08-25"
  },
  {
    id: "source-insee-crise-2008",
    title: "La récession de 2008-2009 en France",
    publisher: "Insee",
    url: "https://www.insee.fr/fr/statistiques/1372478?sommaire=1372485",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-financement-economie-2008",
    title: "Loi de finances rectificative pour le financement de l'économie",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/discours/172556-conseil-des-ministres-du-13-octobre-2008-loi-de-finances-rectificative",
    type: "source_primaire",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-dette-europeenne",
    title: "Crise des dettes souveraines dans la zone euro",
    publisher: "Vie publique",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-armees-operations-libye-mali",
    title: "Opérations Harmattan en Libye et Serval au Mali",
    publisher: "Ministère des Armées",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-gouvernement-ouragan-irma",
    title: "Bilan et reconstruction après l'ouragan Irma",
    publisher: "Gouvernement français",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-inflation-2022",
    title: "Le pouvoir d'achat des familles face au choc d'inflation",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/rapport/292512-le-pouvoir-dachat-des-familles-face-au-choc-dinflation",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-retraites-2023",
    title: "Réforme des retraites : recours au 49.3 et motion de censure",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/discours/288733-olivier-veran-21032023-retraite-vote-de-la-motion-de-censure",
    type: "source_primaire",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-nouvelle-caledonie-2024",
    title: "Nouvelle-Calédonie : le dégel du corps électoral en quatre questions",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/questions-reponses/303309-nouvelle-caledonie-le-degel-du-corps-electoral-en-4-questions",
    type: "institution",
    accessDate: "2026-08-25"
  },
  {
    id: "source-interieur-legislatives-2024",
    title: "Élections législatives 2024 : résultats définitifs",
    publisher: "Ministère de l'Intérieur",
    url: "https://www.interieur.gouv.fr/actualites/actualites-du-ministere/elections-legislatives-2024-resultats-definitifs",
    type: "source_primaire",
    accessDate: "2026-08-25"
  },
  {
    id: "source-assemblee-censure-barnier",
    title: "Adoption d'une motion de censure le 4 décembre 2024",
    publisher: "Assemblée nationale",
    url: "https://www.assemblee-nationale.fr/dyn/actualites-accueil-hub/adoption-d-une-motion-de-censure-article-49.3-de-la-constitution-les-travaux-en-seance-publique-sont-ajournes",
    type: "source_primaire",
    accessDate: "2026-08-25"
  },
  {
    id: "source-assemblee-confiance-bayrou",
    title: "Vote de confiance du 8 septembre 2025",
    publisher: "Assemblée nationale",
    url: "https://questions.assemblee-nationale.fr/dyn/actualites-accueil-hub/vote-de-confiance-l-assemblee-nationale-a-desapprouve-la-declaration-de-politique-generale-du-gouvernement",
    type: "source_primaire",
    accessDate: "2026-08-25"
  },
  {
    id: "source-vie-publique-canicule-2026",
    title: "Cellule interministérielle de crise face à la canicule de juin 2026",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/discours/303886-sebastien-lecornu-29062026-cellule-interministerielle-de-crise-canicule",
    type: "source_primaire",
    accessDate: "2026-08-25"
  }
];

type CrisisEventInput = Omit<Event, "parties" | "persons" | "elections" | "dataStatus"> &
  Partial<Pick<Event, "parties" | "persons" | "elections" | "dataStatus">>;

function defineCrisis(event: CrisisEventInput): Event {
  return {
    parties: [],
    persons: [],
    elections: [],
    dataStatus: "partially_verified",
    ...event
  };
}

export const crisisEvents: Event[] = [
  defineCrisis({
    id: "event-affaire-dreyfus",
    date: "1894-10-15",
    endDate: "1906-07-12",
    period: "period-1880-1899",
    regime: "regime-troisieme-republique",
    title: "Affaire Dreyfus",
    description: "L'erreur judiciaire, les faux versés au dossier et la campagne antisémite divisent durablement la société française entre dreyfusards et antidreyfusards.",
    category: "crise",
    crisisType: "politique_institutionnelle",
    consequences: "La Cour de cassation annule sans renvoi la condamnation le 12 juillet 1906. L'affaire transforme les équilibres politiques, mobilise les défenseurs des droits et nourrit aussi les nationalismes antidreyfusards.",
    importance: 5,
    parties: ["party-prrrs", "party-sfio", "party-action-francaise"],
    sources: ["source-assemblee-affaire-dreyfus"]
  }),
  defineCrisis({
    id: "event-premiere-crise-marocaine",
    date: "1905-03-31",
    endDate: "1906-04-07",
    period: "period-1900-1914",
    regime: "regime-troisieme-republique",
    title: "Première crise marocaine",
    description: "L'opposition franco-allemande sur le Maroc provoque une crise diplomatique européenne qui culmine à la conférence d'Algésiras.",
    category: "crise",
    crisisType: "internationale_militaire",
    consequences: "L'influence française au Maroc est confortée, tandis que le rapprochement avec le Royaume-Uni se consolide et que les tensions avec l'Empire allemand s'aggravent.",
    importance: 4,
    parties: ["party-prrrs", "party-ard"],
    sources: ["source-diplomatie-crises-marocaines"]
  }),
  defineCrisis({
    id: "event-revolte-vignerons-1907",
    date: "1907-03-11",
    endDate: "1907-06-23",
    period: "period-1900-1914",
    regime: "regime-troisieme-republique",
    title: "Révolte des vignerons du Languedoc",
    description: "Une mobilisation de masse contre la fraude et l'effondrement des prix du vin gagne le Midi viticole et confronte le gouvernement Clemenceau à une crise sociale majeure.",
    category: "manifestation",
    crisisType: "sociale",
    consequences: "La répression fait plusieurs morts, une partie du 17e régiment d'infanterie se mutine et de nouvelles mesures contre la fraude viticole sont adoptées.",
    importance: 4,
    parties: ["party-prrrs", "party-sfio"],
    sources: ["source-vie-publique-vignerons-1907"]
  }),
  defineCrisis({
    id: "event-crise-agadir-1911",
    date: "1911-07-01",
    endDate: "1911-11-04",
    period: "period-1900-1914",
    regime: "regime-troisieme-republique",
    title: "Crise d'Agadir",
    description: "L'envoi de la canonnière allemande Panther à Agadir ouvre une seconde crise marocaine et fait craindre un conflit européen.",
    category: "crise",
    crisisType: "internationale_militaire",
    consequences: "Un accord franco-allemand règle provisoirement la crise ; le protectorat français sur le Maroc est établi en 1912, dans un climat européen toujours plus tendu.",
    importance: 4,
    parties: ["party-prrrs", "party-ard"],
    sources: ["source-diplomatie-crises-marocaines"]
  }),
  defineCrisis({
    id: "event-grippe-espagnole-1918",
    date: "1918-03",
    endDate: "1919-04",
    period: "period-1914-1918",
    regime: "regime-troisieme-republique",
    title: "Pandémie de grippe de 1918-1919",
    description: "La pandémie dite grippe espagnole frappe une population déjà éprouvée par la Première Guerre mondiale et surcharge les capacités sanitaires.",
    category: "crise",
    crisisType: "sanitaire",
    consequences: "La mortalité est considérable en France et dans le monde ; la circulation de l'information et les réponses publiques restent limitées par le contexte de guerre.",
    importance: 5,
    sources: ["source-sante-grippes-pandemiques"]
  }),
  defineCrisis({
    id: "event-occupation-ruhr-1923",
    date: "1923-01-11",
    endDate: "1925-08-25",
    period: "period-1919-1932",
    regime: "regime-troisieme-republique",
    title: "Occupation de la Ruhr",
    description: "La France et la Belgique occupent la Ruhr afin d'obtenir le paiement des réparations allemandes, déclenchant une grave crise diplomatique et économique.",
    category: "crise",
    crisisType: "internationale_militaire",
    consequences: "La résistance passive allemande et l'hyperinflation aggravent les tensions. Le plan Dawes puis les accords de Locarno accompagnent la sortie progressive de crise.",
    importance: 4,
    parties: ["party-bloc-national", "party-ard", "party-federation-republicaine"],
    sources: ["source-assemblee-crises-entre-deux-guerres"]
  }),
  defineCrisis({
    id: "event-crise-franc-1926",
    date: "1926-07",
    endDate: "1926-12",
    period: "period-1919-1932",
    regime: "regime-troisieme-republique",
    title: "Crise du franc et stabilisation Poincaré",
    description: "La défiance envers le franc et les difficultés budgétaires provoquent une crise financière et la chute du Cartel des gauches.",
    category: "evenement_economique",
    crisisType: "economique_financiere",
    consequences: "Le gouvernement d'union nationale de Raymond Poincaré rétablit la confiance par des mesures fiscales et monétaires, avant la stabilisation légale du franc en 1928.",
    importance: 4,
    parties: ["party-prrrs", "party-ard", "party-federation-republicaine"],
    sources: ["source-assemblee-crises-entre-deux-guerres"]
  }),
  defineCrisis({
    id: "event-greves-juin-1936",
    date: "1936-05-26",
    endDate: "1936-06-12",
    period: "period-1932-1939",
    regime: "regime-troisieme-republique",
    title: "Grèves avec occupations d'usines de 1936",
    description: "Après la victoire électorale du Front populaire, une vague de grèves et d'occupations d'usines mobilise près de deux millions de salariés.",
    category: "manifestation",
    crisisType: "sociale",
    consequences: "Les accords Matignon conduisent aux conventions collectives, à des hausses de salaires, aux congés payés et à la semaine de quarante heures.",
    importance: 5,
    parties: ["party-front-populaire", "party-sfio", "party-pcf", "party-prrrs"],
    persons: ["person-leon-blum"],
    sources: ["source-assemblee-crises-entre-deux-guerres"]
  }),
  defineCrisis({
    id: "event-guerre-espagne-1936",
    date: "1936-07-17",
    endDate: "1939-04-01",
    period: "period-1932-1939",
    regime: "regime-troisieme-republique",
    title: "Guerre d'Espagne et crise de la non-intervention",
    description: "La guerre civile espagnole divise profondément la gauche et la droite françaises ; le gouvernement Blum s'engage dans une politique de non-intervention.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "Le conflit accentue les fractures du Front populaire, entraîne l'arrivée de réfugiés et constitue un prélude aux affrontements européens de 1939.",
    importance: 4,
    parties: ["party-front-populaire", "party-sfio", "party-pcf", "party-action-francaise", "party-ppf"],
    persons: ["person-leon-blum"],
    sources: ["source-assemblee-crises-entre-deux-guerres"]
  }),
  defineCrisis({
    id: "event-accords-munich-1938",
    date: "1938-09-29",
    endDate: "1938-09-30",
    period: "period-1932-1939",
    regime: "regime-troisieme-republique",
    title: "Accords de Munich",
    description: "La France et le Royaume-Uni acceptent l'annexion des Sudètes par l'Allemagne nazie dans l'espoir d'éviter une guerre immédiate.",
    category: "crise",
    crisisType: "internationale_militaire",
    consequences: "L'accord divise les forces politiques françaises, affaiblit la Tchécoslovaquie et ne prévient pas le déclenchement de la Seconde Guerre mondiale en 1939.",
    importance: 5,
    parties: ["party-prrrs", "party-pcf", "party-sfio", "party-federation-republicaine"],
    persons: ["person-edouard-daladier"],
    sources: ["source-assemblee-crises-entre-deux-guerres"]
  }),
  defineCrisis({
    id: "event-guerre-indochine",
    date: "1946-11-21",
    endDate: "1954-07-21",
    period: "period-1945-1958",
    regime: "regime-quatrieme-republique",
    title: "Guerre d'Indochine",
    description: "Le conflit oppose la France au Viet-Minh dans un contexte de décolonisation puis de guerre froide, sous une succession rapide de gouvernements de la IVe République.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "La défaite de Dien Bien Phu accélère les négociations ; les accords de Genève de juillet 1954 mettent fin au conflit et organisent la partition provisoire du Vietnam.",
    importance: 5,
    parties: ["party-mrp", "party-sfio", "party-pcf", "party-prrrs"],
    sources: ["source-chemins-memoire-indochine"]
  }),
  defineCrisis({
    id: "event-crise-suez-1956",
    date: "1956-10-29",
    endDate: "1956-11-07",
    period: "period-1945-1958",
    regime: "regime-quatrieme-republique",
    title: "Crise de Suez",
    description: "Après la nationalisation du canal par Gamal Abdel Nasser, la France, le Royaume-Uni et Israël lancent une opération militaire contre l'Égypte.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "La pression conjointe des États-Unis et de l'URSS impose le retrait. La crise marque un recul de l'influence franco-britannique et pèse sur la politique française au Proche-Orient.",
    importance: 4,
    parties: ["party-sfio", "party-front-republicain-1956"],
    sources: ["source-diplomatie-crise-suez"]
  }),
  defineCrisis({
    id: "event-attentat-petit-clamart-1962",
    date: "1962-08-22",
    period: "period-1958-1969",
    regime: "regime-cinquieme-republique",
    title: "Attentat du Petit-Clamart",
    description: "Un commando lié à l'OAS tente d'assassiner le général de Gaulle, dans le contexte de l'indépendance algérienne.",
    category: "crise",
    crisisType: "politique_institutionnelle",
    consequences: "L'attentat échoue. Il renforce la centralité présidentielle dans un moment où de Gaulle prépare l'élection du président de la République au suffrage universel direct.",
    importance: 4,
    parties: ["party-oas", "party-unr"],
    persons: ["person-charles-de-gaulle"],
    sources: ["source-francearchives-petit-clamart"]
  }),
  defineCrisis({
    id: "event-amoco-cadiz-1978",
    date: "1978-03-16",
    period: "period-1969-1981",
    regime: "regime-cinquieme-republique",
    title: "Marée noire de l'Amoco Cadiz",
    description: "Le naufrage du pétrolier Amoco Cadiz au large du Finistère provoque une pollution massive du littoral breton.",
    category: "crise",
    crisisType: "environnementale",
    consequences: "La catastrophe accélère la coordination des moyens de lutte contre les pollutions marines et nourrit la mobilisation environnementale ainsi que de longues procédures d'indemnisation.",
    importance: 4,
    parties: ["party-udf", "party-rpr", "party-amis-terre"],
    sources: ["source-ecologie-amoco-cadiz"]
  }),
  defineCrisis({
    id: "event-second-choc-petrolier-1979",
    date: "1979-01",
    endDate: "1981-12",
    period: "period-1969-1981",
    regime: "regime-cinquieme-republique",
    title: "Deuxième choc pétrolier",
    description: "La révolution iranienne puis la guerre Iran-Irak provoquent une nouvelle hausse du prix du pétrole qui frappe une économie française déjà confrontée au chômage.",
    category: "evenement_economique",
    crisisType: "economique_financiere",
    consequences: "Inflation, ralentissement de l'activité et chômage installent durablement la contrainte énergétique et économique au cœur du débat politique.",
    importance: 4,
    parties: ["party-udf", "party-rpr", "party-ps-1969", "party-pcf"],
    sources: ["source-insee-chocs-petroliers"]
  }),
  defineCrisis({
    id: "event-affaire-sang-contamine",
    date: "1985",
    endDate: "1992",
    period: "period-1981-1995",
    regime: "regime-cinquieme-republique",
    title: "Affaire du sang contaminé",
    description: "La distribution de produits sanguins contaminés par le VIH au milieu des années 1980 devient, à partir de 1991, une crise sanitaire, judiciaire et politique majeure.",
    category: "crise",
    crisisType: "sanitaire",
    consequences: "Les procédures judiciaires et parlementaires mettent en cause la chaîne de décision publique et conduisent à une réorganisation profonde de la sécurité transfusionnelle.",
    importance: 5,
    parties: ["party-ps-1969", "party-rpr", "party-udf"],
    sources: ["source-vie-publique-sang-contamine"]
  }),
  defineCrisis({
    id: "event-tchernobyl-1986",
    date: "1986-04-26",
    endDate: "1986-05-10",
    period: "period-1981-1995",
    regime: "regime-cinquieme-republique",
    title: "Catastrophe de Tchernobyl et retombées en France",
    description: "L'accident nucléaire soviétique entraîne des retombées radioactives mesurées sur le territoire français et une controverse durable sur l'information du public.",
    category: "crise",
    crisisType: "environnementale",
    consequences: "La surveillance radiologique et la communication de crise sont durablement questionnées, alimentant le débat français sur la sûreté nucléaire.",
    importance: 4,
    parties: ["party-rpr", "party-udf", "party-verts"],
    sources: ["source-irsn-tchernobyl"]
  }),
  defineCrisis({
    id: "event-guerre-golfe-1990",
    date: "1990-08-02",
    endDate: "1991-02-28",
    period: "period-1981-1995",
    regime: "regime-cinquieme-republique",
    title: "Guerre du Golfe",
    description: "Après l'invasion du Koweït par l'Irak, la France participe à la coalition autorisée par les Nations unies dans le cadre de l'opération Daguet.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "Le Koweït est libéré et l'intervention confirme l'engagement militaire français dans les coalitions multilatérales de l'après-guerre froide.",
    importance: 4,
    parties: ["party-ps-1969", "party-rpr", "party-udf"],
    sources: ["source-armees-guerre-golfe"]
  }),
  defineCrisis({
    id: "event-crise-sme-1992",
    date: "1992-09",
    endDate: "1993-08-02",
    period: "period-1981-1995",
    regime: "regime-cinquieme-republique",
    title: "Crise du Système monétaire européen",
    description: "Des attaques spéculatives frappent plusieurs monnaies européennes et soumettent le franc à une forte pression entre 1992 et 1993.",
    category: "evenement_economique",
    crisisType: "economique_financiere",
    consequences: "La France défend la parité du franc ; en août 1993, les marges de fluctuation du SME sont élargies. Il ne s'agit pas d'une dévaluation française en 1993.",
    importance: 4,
    parties: ["party-ps-1969", "party-rpr", "party-udf"],
    sources: ["source-banque-france-crise-sme"]
  }),
  defineCrisis({
    id: "event-tempetes-1999",
    date: "1999-12-26",
    endDate: "1999-12-28",
    period: "period-1995-2002",
    regime: "regime-cinquieme-republique",
    title: "Tempêtes Lothar et Martin",
    description: "Deux tempêtes d'une violence exceptionnelle traversent la France, causant des dizaines de morts et des dégâts majeurs aux réseaux, aux forêts et aux bâtiments.",
    category: "crise",
    crisisType: "environnementale",
    consequences: "Les opérations de secours et de reconstruction mobilisent l'État et les collectivités ; la gestion des risques climatiques et la résilience des réseaux sont réévaluées.",
    importance: 4,
    parties: ["party-gauche-plurielle", "party-ps-1969", "party-verts", "party-rpr"],
    sources: ["source-vie-publique-catastrophes-france"]
  }),
  defineCrisis({
    id: "event-11-septembre-afghanistan",
    date: "2001-09-11",
    endDate: "2002-06",
    period: "period-1995-2002",
    regime: "regime-cinquieme-republique",
    title: "Attentats du 11 septembre et engagement en Afghanistan",
    description: "Les attentats commis aux États-Unis bouleversent l'environnement stratégique ; la France participe ensuite aux opérations internationales en Afghanistan.",
    category: "crise",
    crisisType: "internationale_militaire",
    consequences: "La coopération antiterroriste et les dispositifs de sécurité sont renforcés, tandis que l'engagement militaire français s'inscrit dans la durée.",
    importance: 5,
    parties: ["party-gauche-plurielle", "party-ps-1969", "party-rpr"],
    sources: ["source-chemins-memoire-afghanistan"]
  }),
  defineCrisis({
    id: "event-canicule-2003",
    date: "2003-08-01",
    endDate: "2003-08-20",
    period: "period-2002-2012",
    regime: "regime-cinquieme-republique",
    title: "Canicule de 2003",
    description: "Une vague de chaleur exceptionnelle provoque une surmortalité massive, touchant particulièrement les personnes âgées et révélant les fragilités de l'alerte sanitaire.",
    category: "crise",
    crisisType: "sanitaire",
    consequences: "Près de 15 000 décès supplémentaires sont estimés en France. Un plan national canicule et de nouveaux dispositifs de veille et d'alerte sont mis en place.",
    importance: 5,
    parties: ["party-ump", "party-ps-1969", "party-verts"],
    sources: ["source-sante-canicule-2003"]
  }),
  defineCrisis({
    id: "event-guerre-irak-2003",
    date: "2003-03-20",
    endDate: "2003-05-01",
    period: "period-2002-2012",
    regime: "regime-cinquieme-republique",
    title: "Guerre d'Irak et opposition française",
    description: "Les États-Unis et leurs alliés envahissent l'Irak sans nouvelle autorisation explicite du Conseil de sécurité ; la France s'oppose à l'intervention.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "La position française provoque une crise diplomatique avec Washington et devient un marqueur majeur de la politique étrangère du second mandat de Jacques Chirac.",
    importance: 4,
    parties: ["party-ump", "party-ps-1969", "party-verts"],
    sources: ["source-diplomatie-irak-2003"]
  }),
  defineCrisis({
    id: "event-crise-financiere-2008",
    date: "2008-09-15",
    endDate: "2009-12",
    period: "period-2002-2012",
    regime: "regime-cinquieme-republique",
    title: "Crise financière mondiale et récession",
    description: "La faillite de Lehman Brothers accélère une crise financière mondiale qui entraîne un resserrement du crédit et une récession en France.",
    category: "evenement_economique",
    crisisType: "economique_financiere",
    consequences: "L'État garantit le financement de l'économie, soutient le secteur bancaire et met en œuvre un plan de relance ; le chômage et les déficits publics augmentent.",
    importance: 5,
    parties: ["party-ump", "party-ps-1969", "party-modem"],
    sources: ["source-insee-crise-2008", "source-vie-publique-financement-economie-2008"]
  }),
  defineCrisis({
    id: "event-pandemie-h1n1-2009",
    date: "2009-04",
    endDate: "2010-08",
    period: "period-2002-2012",
    regime: "regime-cinquieme-republique",
    title: "Pandémie grippale H1N1",
    description: "La pandémie de grippe A(H1N1) conduit la France à organiser une campagne de vaccination de grande ampleur et un dispositif sanitaire exceptionnel.",
    category: "crise",
    crisisType: "sanitaire",
    consequences: "La campagne protège les populations ciblées mais son organisation et l'ampleur des commandes de vaccins suscitent une controverse publique et parlementaire.",
    importance: 3,
    parties: ["party-ump", "party-ps-1969"],
    sources: ["source-sante-grippes-pandemiques"]
  }),
  defineCrisis({
    id: "event-crise-dettes-zone-euro",
    date: "2010-04",
    endDate: "2012-09",
    period: "period-2002-2012",
    regime: "regime-cinquieme-republique",
    title: "Crise des dettes souveraines de la zone euro",
    description: "Les difficultés de financement de plusieurs États de la zone euro provoquent une crise monétaire et politique qui mobilise fortement la présidence française.",
    category: "evenement_economique",
    crisisType: "economique_financiere",
    consequences: "Des mécanismes européens d'assistance et de stabilité sont créés, tandis que les politiques budgétaires se durcissent et que le débat sur la gouvernance de l'euro s'intensifie.",
    importance: 4,
    parties: ["party-ump", "party-ps-1969", "party-modem"],
    sources: ["source-vie-publique-dette-europeenne"]
  }),
  defineCrisis({
    id: "event-intervention-libye-2011",
    date: "2011-03-19",
    endDate: "2011-10-31",
    period: "period-2002-2012",
    regime: "regime-cinquieme-republique",
    title: "Intervention militaire en Libye",
    description: "La France participe à l'intervention internationale autorisée par le Conseil de sécurité pour protéger les populations civiles pendant le soulèvement contre Mouammar Kadhafi.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "Le régime de Kadhafi tombe, mais la désorganisation durable de la Libye alimente ensuite une controverse sur les objectifs et les suites de l'intervention.",
    importance: 4,
    parties: ["party-ump", "party-ps-1969", "party-eelv"],
    sources: ["source-armees-operations-libye-mali"]
  }),
  defineCrisis({
    id: "event-intervention-mali-2013",
    date: "2013-01-11",
    endDate: "2014-07-13",
    period: "period-2012-2017",
    regime: "regime-cinquieme-republique",
    title: "Intervention militaire au Mali - opération Serval",
    description: "À la demande des autorités maliennes, la France intervient contre l'offensive de groupes armés djihadistes vers le sud du pays.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "L'offensive est stoppée et plusieurs villes sont reprises. Serval est relayée par Barkhane en 2014, ouvrant un engagement régional de longue durée.",
    importance: 4,
    parties: ["party-ps-1969", "party-eelv", "party-ump"],
    persons: ["person-francois-hollande"],
    sources: ["source-armees-operations-libye-mali"]
  }),
  defineCrisis({
    id: "event-ouragan-irma-2017",
    date: "2017-09-06",
    endDate: "2017-09-08",
    period: "period-2017-2022",
    regime: "regime-cinquieme-republique",
    title: "Ouragan Irma à Saint-Martin et Saint-Barthélemy",
    description: "L'ouragan Irma dévaste les îles françaises du nord des Antilles, détruisant logements, réseaux et infrastructures publiques.",
    category: "crise",
    crisisType: "territoriale_outre_mer",
    consequences: "Un dispositif exceptionnel de secours puis de reconstruction est engagé ; la préparation des territoires ultramarins aux événements climatiques extrêmes est réexaminée.",
    importance: 4,
    parties: ["party-lrem", "party-modem", "party-lr"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-gouvernement-ouragan-irma"]
  }),
  defineCrisis({
    id: "event-guerre-ukraine-2022",
    date: "2022-02-24",
    ongoing: true,
    period: "period-2017-2022",
    regime: "regime-cinquieme-republique",
    title: "Invasion de l'Ukraine par la Russie",
    description: "L'invasion à grande échelle de l'Ukraine bouleverse la sécurité européenne et place la France au cœur de la réponse diplomatique, économique et militaire de l'Union européenne.",
    category: "guerre",
    crisisType: "internationale_militaire",
    consequences: "La France soutient l'Ukraine, participe aux sanctions contre la Russie et renforce le flanc oriental de l'OTAN ; la guerre contribue au choc énergétique et inflationniste.",
    importance: 5,
    parties: ["party-lrem", "party-lr", "party-ps-1969", "party-lfi", "party-rn", "party-eelv"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-vie-publique-inflation-2022"]
  }),
  defineCrisis({
    id: "event-choc-inflation-2022",
    date: "2022-01",
    endDate: "2024-12",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Choc inflationniste et énergétique",
    description: "La reprise post-pandémie puis la guerre en Ukraine accélèrent fortement les prix de l'énergie et de l'alimentation en France.",
    category: "evenement_economique",
    crisisType: "economique_financiere",
    consequences: "Bouclier tarifaire, remises sur les carburants et aides ciblées amortissent partiellement le choc, au prix d'un coût budgétaire élevé et d'une forte tension sur le pouvoir d'achat.",
    importance: 4,
    parties: ["party-lrem", "party-modem", "party-lr", "party-lfi", "party-rn"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-vie-publique-inflation-2022"]
  }),
  defineCrisis({
    id: "event-majorite-relative-2022",
    date: "2022-06-19",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Perte de la majorité absolue à l'Assemblée nationale",
    description: "Les élections législatives de 2022 ne donnent qu'une majorité relative à la coalition présidentielle, dans une Assemblée fortement fragmentée.",
    category: "crise",
    crisisType: "politique_institutionnelle",
    consequences: "Le gouvernement doit rechercher des accords texte par texte et recourt à plusieurs reprises à l'article 49, alinéa 3, dans un climat de conflictualité parlementaire accrue.",
    importance: 4,
    parties: ["party-lrem", "party-modem", "party-nupes", "party-rn", "party-lr"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-interieur-legislatives-2024"],
    dataStatus: "evolving"
  }),
  defineCrisis({
    id: "event-mobilisation-retraites-2023",
    date: "2023-01-19",
    endDate: "2023-06-06",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Mobilisation contre la réforme des retraites de 2023",
    description: "Une mobilisation intersyndicale nationale conteste le report de l'âge légal de départ à la retraite de 62 à 64 ans.",
    category: "manifestation",
    crisisType: "sociale",
    consequences: "La réforme est adoptée après le recours à l'article 49, alinéa 3. Une motion de censure transpartisane échoue à neuf voix, prolongeant la crise politique et sociale.",
    importance: 5,
    parties: ["party-lrem", "party-modem", "party-lr", "party-nupes", "party-rn"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-vie-publique-retraites-2023"]
  }),
  defineCrisis({
    id: "event-crise-nouvelle-caledonie-2024",
    date: "2024-05-13",
    ongoing: true,
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Crise en Nouvelle-Calédonie",
    description: "La réforme du corps électoral provincial provoque une contestation indépendantiste, des violences meurtrières et de graves perturbations en Nouvelle-Calédonie.",
    category: "crise",
    crisisType: "territoriale_outre_mer",
    consequences: "L'état d'urgence entre en vigueur le 15 mai 2024. La réforme est suspendue après la dissolution et le dialogue institutionnel se poursuit dans un cadre profondément fragilisé.",
    importance: 5,
    parties: ["party-lrem", "party-lr", "party-lfi", "party-rn"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-vie-publique-nouvelle-caledonie-2024"],
    dataStatus: "evolving"
  }),
  defineCrisis({
    id: "event-dissolution-assemblee-2024",
    date: "2024-06-09",
    endDate: "2024-07-18",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Dissolution de 2024 et Assemblée sans majorité",
    description: "Après les élections européennes, Emmanuel Macron dissout l'Assemblée nationale. Les législatives anticipées aboutissent à une chambre divisée en trois grands ensembles sans majorité absolue.",
    category: "crise",
    crisisType: "politique_institutionnelle",
    consequences: "La formation d'un gouvernement est retardée, les compromis parlementaires deviennent indispensables et l'instabilité gouvernementale s'accroît. Le RN n'obtient pas à lui seul 143 sièges : ce chiffre agrège le RN et ses alliés dans la présentation officielle.",
    importance: 5,
    parties: ["party-lrem", "party-nupes", "party-rn", "party-lr"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-interieur-legislatives-2024"],
    dataStatus: "evolving"
  }),
  defineCrisis({
    id: "event-censure-barnier-2024",
    date: "2024-12-04",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Censure du gouvernement Barnier",
    description: "L'Assemblée nationale adopte une motion de censure après le recours au 49.3 sur le projet de loi de financement de la sécurité sociale.",
    category: "crise",
    crisisType: "politique_institutionnelle",
    consequences: "Michel Barnier remet la démission de son gouvernement. C'est la première censure adoptée sous la Ve République depuis 1962.",
    importance: 5,
    parties: ["party-lr", "party-lrem", "party-modem", "party-rn", "party-lfi"],
    persons: ["person-emmanuel-macron"],
    sources: ["source-assemblee-censure-barnier"],
    dataStatus: "verified"
  }),
  defineCrisis({
    id: "event-chute-gouvernement-bayrou-2025",
    date: "2025-09-08",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Rejet de la confiance au gouvernement Bayrou",
    description: "François Bayrou engage la responsabilité de son gouvernement sur une déclaration de politique générale ; l'Assemblée nationale refuse la confiance.",
    category: "crise",
    crisisType: "politique_institutionnelle",
    consequences: "Le gouvernement est contraint à la démission par 364 voix contre la confiance et 194 pour. Il s'agit du premier gouvernement de la Ve République renversé à l'issue d'un vote de confiance sollicité par lui-même.",
    importance: 5,
    parties: ["party-modem", "party-lrem", "party-lr", "party-rn", "party-lfi", "party-ps-1969"],
    persons: ["person-francois-bayrou", "person-emmanuel-macron"],
    sources: ["source-assemblee-confiance-bayrou"],
    dataStatus: "verified"
  }),
  defineCrisis({
    id: "event-canicule-juin-2026",
    date: "2026-06-29",
    period: "period-2022-present",
    regime: "regime-cinquieme-republique",
    title: "Canicule de juin 2026",
    description: "Un épisode de chaleurs extrêmes conduit le gouvernement à réunir une cellule interministérielle de crise afin de coordonner les réponses sanitaires et territoriales.",
    category: "crise",
    crisisType: "environnementale",
    consequences: "Les mesures de prévention sont renforcées pour les populations vulnérables et les services essentiels. Le bilan sanitaire définitif reste évolutif.",
    importance: 3,
    parties: ["party-lrem", "party-modem", "party-lr"],
    sources: ["source-vie-publique-canicule-2026"],
    dataStatus: "evolving"
  })
];

export const crisisMetadata: Record<string, Partial<Pick<Event, "crisisType" | "consequences">>> = {
  "event-premiere-guerre-mondiale": {
    crisisType: "internationale_militaire",
    consequences: "La France compte environ 1,4 million de morts militaires, des régions dévastées et une dette fortement accrue. La victoire de 1918 puis le traité de Versailles recomposent durablement la vie politique."
  },
  "event-condamnation-action-francaise-1926": {
    crisisType: "partisane",
    consequences: "La condamnation pontificale éloigne une partie des catholiques de l'Action française et fragilise durablement l'organisation monarchiste."
  },
  "event-crise-1929": {
    crisisType: "economique_financiere",
    consequences: "La dépression atteint plus tardivement la France mais nourrit chômage, déflation, instabilité ministérielle et radicalisation politique au début des années 1930."
  },
  "event-six-fevrier-1934": {
    crisisType: "politique_institutionnelle",
    consequences: "Le gouvernement Daladier démissionne. La crise favorise un cabinet d'union nationale et accélère le rapprochement antifasciste des gauches."
  },
  "event-seconde-guerre-mondiale": {
    crisisType: "internationale_militaire",
    consequences: "La défaite de 1940 entraîne l'armistice, la fin de la IIIe République et le régime de Vichy ; l'Occupation, la collaboration, la Résistance et la Libération bouleversent entièrement le système politique."
  },
  "event-dien-bien-phu-1954": {
    crisisType: "internationale_militaire",
    consequences: "La défaite précipite les accords de Genève de juillet 1954 et la fin de la présence coloniale française en Indochine."
  },
  "event-debut-guerre-algerie-1954": {
    crisisType: "internationale_militaire",
    consequences: "Le conflit provoque une crise durable de la IVe République, le retour de Charles de Gaulle en 1958 et, après les accords d'Évian, l'indépendance de l'Algérie en 1962."
  },
  "event-crise-mai-1958": {
    crisisType: "politique_institutionnelle",
    consequences: "La crise d'Alger conduit au retour de Charles de Gaulle, à la fin de la IVe République et à l'adoption de la Constitution de 1958."
  },
  "event-semaine-barricades-alger-1960": {
    crisisType: "territoriale_outre_mer",
    consequences: "L'insurrection échoue mais révèle la rupture croissante entre le pouvoir gaulliste et les partisans de l'Algérie française."
  },
  "event-creation-oas": {
    crisisType: "territoriale_outre_mer",
    consequences: "L'OAS mène une campagne d'attentats en Algérie et en métropole afin d'empêcher l'indépendance, aggravant les violences de fin de guerre."
  },
  "event-putsch-generaux-1961": {
    crisisType: "politique_institutionnelle",
    consequences: "L'échec du putsch renforce l'autorité de Charles de Gaulle et accélère la marginalisation politique des défenseurs militaires de l'Algérie française."
  },
  "event-mai-68": {
    crisisType: "sociale",
    consequences: "Les accords de Grenelle accordent d'importantes hausses salariales et de nouveaux droits syndicaux. La dissolution de l'Assemblée conduit à une victoire gaulliste en juin 1968."
  },
  "event-choc-petrolier-1973": {
    crisisType: "economique_financiere",
    consequences: "La hausse des prix de l'énergie met fin à la croissance des Trente Glorieuses, accélère l'inflation et installe durablement le chômage de masse."
  },
  "event-premiere-cohabitation-1986": {
    crisisType: "politique_institutionnelle",
    consequences: "La pratique institutionnelle répartit le pouvoir entre le président François Mitterrand et le gouvernement Jacques Chirac sans provoquer de blocage constitutionnel."
  },
  "event-deuxieme-cohabitation-1993": {
    crisisType: "politique_institutionnelle",
    consequences: "La seconde cohabitation associe François Mitterrand et Édouard Balladur jusqu'à l'élection présidentielle de 1995 ; elle n'est pas une paralysie institutionnelle."
  },
  "event-greves-1995": {
    crisisType: "sociale",
    consequences: "Le volet du plan Juppé concernant les régimes spéciaux de retraite est retiré, tandis que la réforme de l'assurance maladie et de la Sécurité sociale se poursuit."
  },
  "event-choc-21-avril-2002": {
    crisisType: "politique_institutionnelle",
    consequences: "L'élimination de Lionel Jospin provoque une mobilisation contre l'extrême droite et une très large réélection de Jacques Chirac au second tour."
  },
  "event-cpe-2006": {
    crisisType: "sociale",
    consequences: "Après plusieurs semaines de manifestations et de blocages universitaires, le dispositif du CPE est remplacé et le gouvernement de Dominique de Villepin est durablement affaibli."
  },
  "event-attentats-2015": {
    crisisType: "politique_institutionnelle",
    consequences: "L'état d'urgence est instauré, l'opération Sentinelle déployée et l'arsenal juridique antiterroriste renforcé, dans un contexte de deuil national."
  },
  "event-loi-travail-2016": {
    crisisType: "sociale",
    consequences: "La loi est adoptée malgré les manifestations, les grèves et Nuit debout ; la séquence accentue les divisions de la majorité socialiste."
  },
  "event-gilets-jaunes-2018": {
    crisisType: "sociale",
    consequences: "La taxe sur les carburants est abandonnée, des mesures de pouvoir d'achat sont annoncées et un Grand débat national est organisé après des mois de manifestations parfois violentes."
  },
  "event-pandemie-covid-2020": {
    crisisType: "sanitaire",
    consequences: "Confinements, état d'urgence sanitaire, vaccination et soutien massif à l'économie transforment l'action publique ; la dette augmente et le système de santé subit une pression exceptionnelle."
  }
};
