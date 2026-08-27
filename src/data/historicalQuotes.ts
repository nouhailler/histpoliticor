export interface HistoricalQuote {
  id: string;
  text: string;
  author: string;
  context: string;
  personId: string;
  sourceId: string;
}

export const historicalQuotes: HistoricalQuote[] = [
  {
    id: "quote-jaures-verite",
    text: "Le courage c’est de chercher la vérité et de la dire.",
    author: "Jean Jaurès",
    context: "Discours à la jeunesse, Albi, juillet 1903",
    personId: "person-jean-jaures",
    sourceId: "source-wikisource-jaures-1903"
  },
  {
    id: "quote-jaures-vie-mort",
    text: "Le courage, c’est d’aimer la vie et de regarder la mort d’un regard tranquille.",
    author: "Jean Jaurès",
    context: "Discours à la jeunesse, Albi, juillet 1903",
    personId: "person-jean-jaures",
    sourceId: "source-wikisource-jaures-1903"
  },
  {
    id: "quote-jaures-humanite",
    text: "L’humanité est maudite, si, pour faire preuve de courage, elle est condamnée à tuer éternellement.",
    author: "Jean Jaurès",
    context: "Discours à la jeunesse, Albi, juillet 1903",
    personId: "person-jean-jaures",
    sourceId: "source-wikisource-jaures-1903"
  },
  {
    id: "quote-lafargue-folie",
    text: "Une étrange folie possède les classes ouvrières des nations où règne la civilisation capitaliste.",
    author: "Paul Lafargue",
    context: "Le Droit à la paresse, 1883",
    personId: "person-paul-lafargue",
    sourceId: "source-wikisource-lafargue-paresse"
  },
  {
    id: "quote-lafargue-travail",
    text: "Dans la société capitaliste, le travail est la cause de toute dégénérescence intellectuelle, de toute déformation organique.",
    author: "Paul Lafargue",
    context: "Le Droit à la paresse, 1883",
    personId: "person-paul-lafargue",
    sourceId: "source-wikisource-lafargue-paresse"
  },
  {
    id: "quote-guesde-revolution",
    text: "La Révolution qui vous incombe n’est possible que dans la mesure où vous resterez vous-mêmes, classe contre classe.",
    author: "Jules Guesde",
    context: "Les Deux Méthodes, Lille, 26 novembre 1900",
    personId: "person-jules-guesde",
    sourceId: "source-wikisource-guesde-deux-methodes"
  },
  {
    id: "quote-guesde-navire",
    text: "C’est le navire à cloisons étanches qui peut faire eau d’un côté et qui n’en continue pas moins à flotter insubmersible.",
    author: "Jules Guesde",
    context: "Les Deux Méthodes, Lille, 26 novembre 1900",
    personId: "person-jules-guesde",
    sourceId: "source-wikisource-guesde-deux-methodes"
  },
  {
    id: "quote-briand-france-paix",
    text: "La France veut autour d’elle une atmosphère de confiance et de paix.",
    author: "Aristide Briand",
    context: "Message au peuple américain, 6 avril 1927",
    personId: "person-aristide-briand",
    sourceId: "source-wikisource-briand-1927"
  },
  {
    id: "quote-briand-desarmement",
    text: "Car le désarmement, après tout, ne peut résulter que de la volonté de paix des nations du monde civilisé.",
    author: "Aristide Briand",
    context: "Message au peuple américain, 6 avril 1927",
    personId: "person-aristide-briand",
    sourceId: "source-wikisource-briand-1927"
  },
  {
    id: "quote-briand-pratique-paix",
    text: "La réalisation la plus immédiate à atteindre n’est pas tant le désarmement que la pratique de la paix.",
    author: "Aristide Briand",
    context: "Message au peuple américain, 6 avril 1927",
    personId: "person-aristide-briand",
    sourceId: "source-wikisource-briand-1927"
  }
];
