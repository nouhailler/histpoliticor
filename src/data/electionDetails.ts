export type ElectionMapStatus = "territorial-data" | "no-second-round" | "source-not-digitized";

export interface ElectionDetailData {
  roundDates: string[];
  decidingRoundLabel: string;
  turnout?: number;
  abstention?: number;
  assemblySeats?: number;
  seatNote: string;
  secondRoundNote: string;
  economicContext: string;
  reformContext: string;
  mapStatus: ElectionMapStatus;
  mapExplanation: string;
  sourceIds: string[];
}

interface DetailSeed {
  dates: string[];
  turnout?: number;
  seats?: number;
  map?: ElectionMapStatus;
  economicYear: number;
  reform?: string;
  seatNote?: string;
  secondRoundNote?: string;
  mapExplanation?: string;
}

const assemblySource = "source-assemblee-effectifs-elections";

const economicContexts: Record<number, string> = {
  1919: "La France sort de la Première Guerre mondiale avec des destructions considérables, une dette élevée, de fortes tensions inflationnistes et l'enjeu de la reconstruction.",
  1924: "La dette de guerre, l'inflation et la fragilité du franc dominent le débat budgétaire ; la question du redressement financier devient rapidement centrale.",
  1932: "La Grande Dépression atteint la France : recul de la production, déflation, chômage et contraction des échanges fragilisent les gouvernements.",
  1936: "La crise des années 1930 persiste, avec chômage, baisse des revenus et conflictualité sociale ; les attentes de relance et de protection salariale sont fortes.",
  1951: "La reconstruction et la modernisation progressent, mais l'inflation, le pouvoir d'achat et le coût des guerres d'Indochine pèsent sur les finances publiques.",
  1956: "La croissance des Trente Glorieuses est soutenue, tandis que l'inflation, les tensions budgétaires et le coût croissant de la guerre d'Algérie nourrissent les inquiétudes.",
  1958: "La crise financière, l'inflation et les déséquilibres extérieurs accompagnent la crise algérienne ; le plan Pinay-Rueff et le nouveau franc suivent le changement de régime.",
  1962: "La croissance reste forte et l'économie se modernise après la décolonisation, dans le cadre du Marché commun et de la planification.",
  1965: "La France connaît une croissance rapide, une industrialisation soutenue et un chômage faible, même si les tensions salariales et régionales commencent à apparaître.",
  1967: "La croissance demeure solide mais ralentit ; les restructurations industrielles et les inquiétudes sur l'emploi préparent les tensions sociales de 1968.",
  1968: "La crise de Mai 68 intervient après une longue phase de croissance ; les accords de Grenelle augmentent fortement salaires et minimum salarial.",
  1969: "Les hausses de salaires issues de 1968, l'inflation et les tensions monétaires précèdent la dévaluation du franc d'août 1969.",
  1973: "Le scrutin précède de quelques mois le premier choc pétrolier : croissance et emploi restent encore élevés, mais l'inflation progresse déjà.",
  1974: "Le premier choc pétrolier provoque inflation, ralentissement et montée du chômage, mettant fin au cadre économique des Trente Glorieuses.",
  1978: "La France affronte la stagflation, le chômage industriel et les politiques de maîtrise des prix et des dépenses associées au plan Barre.",
  1979: "Le second choc pétrolier renforce l'inflation et les inquiétudes sur l'énergie, l'industrie et l'emploi au moment du premier scrutin européen direct.",
  1981: "Chômage, inflation et ralentissement industriel structurent la campagne ; la relance de 1981 est suivie du tournant de la rigueur en 1983.",
  1986: "Le chômage reste élevé et la désinflation se poursuit ; la nouvelle majorité engage privatisations, déréglementation et baisse de certains prélèvements.",
  1988: "La reprise européenne soutient la croissance, mais le chômage demeure massif et les débats portent sur la compétitivité et la cohésion sociale.",
  1989: "La croissance et la préparation du marché unique européen dominent, avec en arrière-plan la libéralisation financière et la question de l'emploi.",
  1992: "Le ralentissement précède la récession de 1993 ; la crise du Système monétaire européen met le franc et la politique de convergence sous pression.",
  1993: "La France traverse une récession, une forte hausse du chômage et des déficits publics qui limitent les marges de la nouvelle majorité.",
  1995: "Chômage élevé, dette sociale et déficit public placent la protection sociale et la préparation de l'euro au centre des arbitrages.",
  1997: "La reprise reste fragile et le chômage très élevé ; le respect des critères de Maastricht encadre la politique budgétaire.",
  1999: "La croissance repart et l'euro vient d'être lancé comme monnaie scripturale ; l'emploi s'améliore sans effacer les inégalités territoriales.",
  2002: "Le passage à l'euro fiduciaire intervient dans un ralentissement mondial après 2001, avec chômage persistant et débats sur le pouvoir d'achat.",
  2005: "Croissance faible, chômage élevé et inquiétudes liées aux délocalisations nourrissent le débat sur l'intégration économique européenne.",
  2007: "La campagne se déroule avant la crise financière mondiale, dans un contexte de croissance modérée, de chômage en baisse et de fortes attentes sur le pouvoir d'achat.",
  2009: "La Grande Récession consécutive à la crise financière de 2008 provoque recul de l'activité, hausse du chômage et plans de soutien publics.",
  2010: "La sortie de récession reste fragile ; dette, déficits et crise naissante de la zone euro dominent les choix budgétaires.",
  2012: "La crise de la zone euro, le chômage et la consolidation des finances publiques structurent la campagne et les débuts du quinquennat.",
  2014: "La croissance est faible, le chômage élevé et la politique économique française se concentre sur compétitivité, dépenses publiques et règles européennes.",
  2017: "La reprise se raffermit après plusieurs années de croissance faible, mais chômage, dette publique, désindustrialisation et pouvoir d'achat restent centraux.",
  2019: "La croissance ralentit après la crise des Gilets jaunes ; pouvoir d'achat, fiscalité, transition écologique et règles budgétaires européennes dominent le débat."
};

const defaultReforms = {
  legislative: "La majorité issue du scrutin détermine la capacité du gouvernement à faire adopter son programme. Les réformes et crises effectivement documentées dans le corpus sont présentées dans la séquence politique située sous la carte.",
  presidential: "L'élection fixe l'orientation de l'exécutif ; sa traduction en réformes dépend ensuite de la majorité parlementaire et du gouvernement formé.",
  other: "Ce scrutin ne confère pas directement une majorité à l'Assemblée nationale ; ses effets passent par les rapports de force politiques et les décisions des institutions concernées."
};

const seeds: Record<string, DetailSeed> = {
  "election-legislatives-1919": { dates: ["1919-11-16"], turnout: 70.22, seats: 626, map: "no-second-round", economicYear: 1919 },
  "election-legislatives-1924": { dates: ["1924-05-11"], turnout: 83.03, seats: 584, map: "no-second-round", economicYear: 1924 },
  "election-legislatives-1932": { dates: ["1932-05-01", "1932-05-08"], turnout: 83.48, seats: 615, map: "source-not-digitized", economicYear: 1932 },
  "election-legislatives-1936": { dates: ["1936-04-26", "1936-05-03"], turnout: 84.3, seats: 618, map: "source-not-digitized", economicYear: 1936, reform: "La victoire du Front populaire ouvre la voie aux accords Matignon, aux congés payés, à la semaine de quarante heures et aux conventions collectives." },
  "election-referendum-1958": { dates: ["1958-09-28"], turnout: 84.94, map: "no-second-round", economicYear: 1958, reform: "L'approbation conduit à la promulgation de la Constitution du 4 octobre 1958 et à l'installation des institutions de la Ve République." },
  "election-legislatives-1951": { dates: ["1951-06-17"], turnout: 80.1, seats: 627, map: "no-second-round", economicYear: 1951 },
  "election-legislatives-1956": { dates: ["1956-01-02"], turnout: 82.81, seats: 597, map: "no-second-round", economicYear: 1956, seatNote: "597 sièges composent l'effectif prévu ; 594 sont pourvus lors du scrutin, les élections d'Algérie ayant été reportées." },
  "election-legislatives-1958": { dates: ["1958-11-23", "1958-11-30"], seats: 552, economicYear: 1958, seatNote: "552 députés sont élus lors du scrutin ; l'effectif institutionnel transitoire de la première législature est plus large." },
  "election-referendum-1962": { dates: ["1962-10-28"], turnout: 77.01, map: "no-second-round", economicYear: 1962, reform: "Le vote instaure l'élection du président de la République au suffrage universel direct, appliquée pour la première fois en 1965." },
  "election-legislatives-1962": { dates: ["1962-11-18", "1962-11-25"], seats: 482, economicYear: 1962 },
  "election-presidentielle-1965": { dates: ["1965-12-05", "1965-12-19"], economicYear: 1965 },
  "election-legislatives-1967": { dates: ["1967-03-05", "1967-03-12"], seats: 487, economicYear: 1967 },
  "election-legislatives-1968": { dates: ["1968-06-23", "1968-06-30"], seats: 487, economicYear: 1968 },
  "election-referendum-1969": { dates: ["1969-04-27"], turnout: 80.13, map: "no-second-round", economicYear: 1969, reform: "Le projet de régionalisation et de réforme du Sénat est rejeté ; il n'entre donc pas en vigueur et Charles de Gaulle démissionne le lendemain." },
  "election-presidentielle-1969": { dates: ["1969-06-01", "1969-06-15"], economicYear: 1969 },
  "election-legislatives-1973": { dates: ["1973-03-04", "1973-03-11"], seats: 490, economicYear: 1973 },
  "election-presidentielle-1974": { dates: ["1974-05-05", "1974-05-19"], economicYear: 1974, reform: "Le début du septennat est marqué par l'abaissement de la majorité à 18 ans, la réforme du divorce et l'extension de la saisine du Conseil constitutionnel." },
  "election-legislatives-1978": { dates: ["1978-03-12", "1978-03-19"], seats: 491, economicYear: 1978 },
  "election-europeennes-1979": { dates: ["1979-06-10"], turnout: 60.71, map: "no-second-round", economicYear: 1979 },
  "election-presidentielle-1981": { dates: ["1981-04-26", "1981-05-10"], economicYear: 1981, reform: "L'alternance ouvre une vaste séquence de réformes : abolition de la peine de mort, nationalisations, décentralisation, cinquième semaine de congés payés et retraite à 60 ans." },
  "election-legislatives-1981": { dates: ["1981-06-14", "1981-06-21"], seats: 491, economicYear: 1981 },
  "election-legislatives-1986": { dates: ["1986-03-16"], turnout: 78.5, seats: 577, map: "no-second-round", economicYear: 1986, reform: "La première cohabitation conduit notamment à des privatisations, à la réforme de l'audiovisuel et à une inflexion de la politique économique." },
  "election-presidentielle-1988": { dates: ["1988-04-24", "1988-05-08"], economicYear: 1988 },
  "election-legislatives-1988": { dates: ["1988-06-05", "1988-06-12"], seats: 577, economicYear: 1988 },
  "election-europeennes-1989": { dates: ["1989-06-18"], turnout: 48.8, map: "no-second-round", economicYear: 1989 },
  "election-referendum-maastricht-1992": { dates: ["1992-09-20"], turnout: 69.7, map: "no-second-round", economicYear: 1992, reform: "La ratification permet l'entrée en vigueur du traité de Maastricht et prépare l'Union économique et monétaire ainsi que la citoyenneté européenne." },
  "election-legislatives-1993": { dates: ["1993-03-21", "1993-03-28"], seats: 577, economicYear: 1993 },
  "election-presidentielle-1995": { dates: ["1995-04-23", "1995-05-07"], economicYear: 1995, reform: "Le plan Juppé sur la Sécurité sociale et les retraites déclenche le mouvement social de 1995 ; la dissolution de 1997 ouvre ensuite une cohabitation." },
  "election-legislatives-1997": { dates: ["1997-05-25", "1997-06-01"], seats: 577, economicYear: 1997, reform: "La gauche plurielle engage notamment les emplois-jeunes, les 35 heures, la couverture maladie universelle et le pacte civil de solidarité." },
  "election-europeennes-1999": { dates: ["1999-06-13"], turnout: 46.76, map: "no-second-round", economicYear: 1999 },
  "election-presidentielle-2002": { dates: ["2002-04-21", "2002-05-05"], economicYear: 2002 },
  "election-legislatives-2002": { dates: ["2002-06-09", "2002-06-16"], seats: 577, economicYear: 2002, reform: "La majorité engage notamment la réforme des retraites de 2003, la décentralisation constitutionnelle et plusieurs réformes de sécurité intérieure." },
  "election-referendum-tce-2005": { dates: ["2005-05-29"], turnout: 69.37, map: "no-second-round", economicYear: 2005, reform: "Le traité constitutionnel n'est pas ratifié. Une partie de ses dispositions est reprise dans le traité de Lisbonne, ratifié par voie parlementaire en 2008." },
  "election-presidentielle-2007": { dates: ["2007-04-22", "2007-05-06"], economicYear: 2007 },
  "election-legislatives-2007": { dates: ["2007-06-10", "2007-06-17"], seats: 577, economicYear: 2007, reform: "La majorité adopte notamment la loi TEPA, la réforme constitutionnelle de 2008 et, après la crise financière, des mesures de soutien à l'économie." },
  "election-europeennes-2009": { dates: ["2009-06-07"], turnout: 40.63, map: "no-second-round", economicYear: 2009 },
  "election-regionales-2010": { dates: ["2010-03-14", "2010-03-21"], turnout: 51.21, map: "source-not-digitized", economicYear: 2010, mapExplanation: "Le second tour existe, mais ses résultats se lisent d'abord à l'échelle des régions et non comme un duel départemental national." },
  "election-presidentielle-2012": { dates: ["2012-04-22", "2012-05-06"], economicYear: 2012 },
  "election-legislatives-2012": { dates: ["2012-06-10", "2012-06-17"], seats: 577, economicYear: 2012, reform: "La majorité adopte notamment le mariage pour tous, une réforme fiscale et plusieurs textes sur le travail, les retraites et l'organisation territoriale." },
  "election-europeennes-2014": { dates: ["2014-05-25"], turnout: 42.43, map: "no-second-round", economicYear: 2014 },
  "election-presidentielle-2017": { dates: ["2017-04-23", "2017-05-07"], economicYear: 2017 },
  "election-legislatives-2017": { dates: ["2017-06-11", "2017-06-18"], seats: 577, economicYear: 2017, reform: "La majorité adopte notamment les ordonnances réformant le droit du travail, la réforme de la SNCF, la loi Pacte et la transformation de la fiscalité du capital." },
  "election-europeennes-2019": { dates: ["2019-05-26"], turnout: 50.12, map: "no-second-round", economicYear: 2019 }
};

export const electionDetails: Record<string, ElectionDetailData> = Object.fromEntries(
  Object.entries(seeds).map(([id, seed]) => {
    const isLegislative = id.includes("legislatives");
    const isPresidential = id.includes("presidentielle");
    const mapStatus = seed.map ?? "territorial-data";
    const hasSecondRound = seed.dates.length > 1;
    const turnout = seed.turnout;
    return [id, {
      roundDates: seed.dates,
      decidingRoundLabel: hasSecondRound ? "Second tour" : "Tour unique",
      ...(turnout === undefined ? {} : { turnout, abstention: Number((100 - turnout).toFixed(2)) }),
      ...(seed.seats === undefined ? {} : { assemblySeats: seed.seats }),
      seatNote: seed.seatNote ?? (isLegislative
        ? "Nombre total de sièges à pourvoir dans l'assemblée issue du scrutin."
        : "Ce scrutin ne renouvelle pas l'Assemblée nationale."),
      secondRoundNote: seed.secondRoundNote ?? (hasSecondRound
        ? isLegislative
          ? "Les voix du second tour sont agrégées dans les circonscriptions où un vote a effectivement lieu ; les sièges restent l'unité décisive."
          : "Le nombre de voix correspond aux suffrages exprimés au second tour."
        : "Ce scrutin se déroule en un tour : il n'existe donc aucun total de voix de second tour."),
      economicContext: economicContexts[seed.economicYear],
      reformContext: seed.reform ?? (isLegislative ? defaultReforms.legislative : isPresidential ? defaultReforms.presidential : defaultReforms.other),
      mapStatus,
      mapExplanation: seed.mapExplanation ?? (mapStatus === "territorial-data"
        ? isLegislative
          ? "Chaque département est coloré selon le bloc politique qui recueille le plus de voix, en agrégeant les circonscriptions ayant voté au second tour."
          : "Chaque département est coloré selon le candidat arrivé en tête au second tour."
        : mapStatus === "no-second-round"
          ? "Ce scrutin ne comporte pas de second tour : le fond de carte est conservé pour situer le périmètre national, sans résultat artificiel."
          : "Un second tour a lieu, mais la source territoriale libre retenue n'est pas disponible sous une forme départementale suffisamment homogène pour produire une carte fiable."),
      sourceIds: isLegislative ? [assemblySource] : []
    } satisfies ElectionDetailData];
  })
);
