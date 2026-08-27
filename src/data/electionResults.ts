export interface ElectionResultSummary {
  summary: string;
  sourceIds: string[];
}

export const electionResults: Record<string, ElectionResultSummary> = {
  "election-legislatives-1919": {
    summary: "Le Bloc national remporte la majorité à la Chambre des députés, qui devient la « Chambre bleu horizon ».",
    sourceIds: ["source-assemblee-histoire-elections"]
  },
  "election-legislatives-1924": {
    summary: "Le Cartel des gauches remporte le scrutin et permet à Édouard Herriot de former un gouvernement.",
    sourceIds: ["source-assemblee-histoire-elections"]
  },
  "election-legislatives-1932": {
    summary: "Les formations de gauche obtiennent la majorité ; le Cartel des gauches revient au pouvoir autour des radicaux et des socialistes.",
    sourceIds: ["source-assemblee-histoire-elections"]
  },
  "election-legislatives-1936": {
    summary: "Le Front populaire remporte la majorité parlementaire ; la SFIO devient le premier groupe de la coalition et le PCF progresse fortement.",
    sourceIds: ["source-assemblee-histoire-elections"]
  },
  "election-referendum-1958": {
    summary: "Le projet de Constitution est approuvé par 85,1 % des suffrages exprimés.",
    sourceIds: ["source-vie-publique-revisions-constitutionnelles"]
  },
  "election-legislatives-1951": {
    summary: "Le scrutin produit une Assemblée divisée en six groupes de force comparable ; le RPF forme le groupe le plus nombreux et la Troisième Force conserve une majorité de coalition.",
    sourceIds: ["source-assemblee-quatrieme-republique-elections"]
  },
  "election-legislatives-1956": {
    summary: "Le PCF arrive en tête en voix, tandis que le Front républicain conduit par Guy Mollet forme le gouvernement.",
    sourceIds: ["source-assemblee-quatrieme-republique-elections"]
  },
  "election-legislatives-1958": {
    summary: "L’UNR arrive en tête et une majorité favorable au général de Gaulle s’installe dans la première Assemblée de la Ve République.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-referendum-1962": {
    summary: "Le « oui » l’emporte avec 62,25 % des suffrages exprimés et approuve l’élection présidentielle au suffrage universel direct.",
    sourceIds: ["source-vie-publique-referendums"]
  },
  "election-legislatives-1962": {
    summary: "L’UNR et ses alliés obtiennent la majorité absolue, consolidant la majorité gaulliste après la dissolution.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-presidentielle-1965": {
    summary: "Charles de Gaulle est réélu au second tour avec 55,20 % des suffrages exprimés, contre 44,80 % à François Mitterrand.",
    sourceIds: ["source-vie-publique-resultats-presidentielles"]
  },
  "election-legislatives-1967": {
    summary: "La majorité gaulliste conserve de justesse le contrôle de l’Assemblée face à une opposition de gauche renforcée.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-legislatives-1968": {
    summary: "L’UDR et ses alliés remportent une très large majorité à l’Assemblée nationale après la dissolution de mai 1968.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-referendum-1969": {
    summary: "Le « non » l’emporte avec 52,41 % des suffrages exprimés, entraînant la démission de Charles de Gaulle.",
    sourceIds: ["source-vie-publique-referendums"]
  },
  "election-presidentielle-1969": {
    summary: "Georges Pompidou est élu au second tour avec 58,21 % des suffrages exprimés, contre 41,79 % à Alain Poher.",
    sourceIds: ["source-vie-publique-resultats-presidentielles"]
  },
  "election-legislatives-1973": {
    summary: "La majorité présidentielle conserve l’Assemblée, malgré la progression de l’union de la gauche.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-presidentielle-1974": {
    summary: "Valéry Giscard d’Estaing est élu avec 50,81 % des suffrages exprimés, contre 49,19 % à François Mitterrand.",
    sourceIds: ["source-vie-publique-resultats-presidentielles"]
  },
  "election-legislatives-1978": {
    summary: "La coalition RPR-UDF conserve la majorité parlementaire face à la gauche, malgré la concurrence entre ses deux composantes.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-europeennes-1979": {
    summary: "La liste UDF conduite par Simone Veil arrive en tête lors de la première élection du Parlement européen au suffrage universel direct.",
    sourceIds: ["source-parlement-europeen-resultats"]
  },
  "election-presidentielle-1981": {
    summary: "François Mitterrand est élu avec 51,76 % des suffrages exprimés, contre 48,24 % à Valéry Giscard d’Estaing.",
    sourceIds: ["source-vie-publique-resultats-presidentielles"]
  },
  "election-legislatives-1981": {
    summary: "Le Parti socialiste et ses alliés obtiennent la majorité parlementaire après l’élection de François Mitterrand.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-legislatives-1986": {
    summary: "La coalition RPR-UDF remporte la majorité et ouvre la première cohabitation de la Ve République.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-presidentielle-1988": {
    summary: "François Mitterrand est réélu avec 54,02 % des suffrages exprimés, contre 45,98 % à Jacques Chirac.",
    sourceIds: ["source-vie-publique-resultats-presidentielles"]
  },
  "election-legislatives-1988": {
    summary: "Le Parti socialiste devient le premier groupe de l’Assemblée sans atteindre seul la majorité absolue.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-europeennes-1989": {
    summary: "La liste d’union UDF-RPR arrive en tête ; les Verts réalisent une percée et s’installent dans le paysage électoral national.",
    sourceIds: ["source-parlement-europeen-resultats"]
  },
  "election-referendum-maastricht-1992": {
    summary: "Le traité de Maastricht est approuvé de justesse : le « oui » recueille 51,04 % des suffrages exprimés.",
    sourceIds: ["source-vie-publique-referendums"]
  },
  "election-legislatives-1993": {
    summary: "Le RPR et l’UDF remportent une très large majorité, ouvrant la deuxième cohabitation.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-presidentielle-1995": {
    summary: "Jacques Chirac est élu avec 52,64 % des suffrages exprimés, contre 47,36 % à Lionel Jospin.",
    sourceIds: ["source-vie-publique-resultats-presidentielles"]
  },
  "election-legislatives-1997": {
    summary: "La gauche plurielle remporte la majorité parlementaire et ouvre la troisième cohabitation.",
    sourceIds: ["source-assemblee-legislatives-resultats"]
  },
  "election-europeennes-1999": {
    summary: "La liste conduite par François Hollande arrive en tête ; la liste souverainiste RPFIE se classe deuxième et les Verts troisième.",
    sourceIds: ["source-parlement-europeen-resultats"]
  },
  "election-presidentielle-2002": {
    summary: "Jacques Chirac est réélu avec 82,21 % des suffrages exprimés, contre 17,79 % à Jean-Marie Le Pen.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-legislatives-2002": {
    summary: "L’UMP obtient la majorité absolue à l’Assemblée nationale et soutient le gouvernement de Jean-Pierre Raffarin.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-referendum-tce-2005": {
    summary: "Le projet de traité constitutionnel européen est rejeté : le « non » recueille 54,67 % des suffrages exprimés.",
    sourceIds: ["source-vie-publique-referendums"]
  },
  "election-presidentielle-2007": {
    summary: "Nicolas Sarkozy est élu avec 53,06 % des suffrages exprimés, contre 46,94 % à Ségolène Royal.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-legislatives-2007": {
    summary: "L’UMP conserve la majorité absolue à l’Assemblée nationale et confirme le gouvernement de François Fillon.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-europeennes-2009": {
    summary: "Les listes de la majorité présidentielle arrivent en tête avec 27,88 % des voix ; le PS recueille 16,48 % et Europe Écologie 16,28 %.",
    sourceIds: ["source-interieur-archives-resultats", "source-parlement-europeen-resultats"]
  },
  "election-regionales-2010": {
    summary: "Les listes de gauche remportent la grande majorité des conseils régionaux, tandis qu’Europe Écologie confirme son implantation.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-presidentielle-2012": {
    summary: "François Hollande est élu avec 51,64 % des suffrages exprimés, contre 48,36 % à Nicolas Sarkozy.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-legislatives-2012": {
    summary: "Le Parti socialiste et ses alliés obtiennent la majorité à l’Assemblée nationale.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-europeennes-2014": {
    summary: "Le Front national arrive en tête avec 24,86 % des suffrages exprimés, devant l’UMP et le Parti socialiste.",
    sourceIds: ["source-interieur-archives-resultats", "source-parlement-europeen-resultats"]
  },
  "election-presidentielle-2017": {
    summary: "Emmanuel Macron est élu avec 66,10 % des suffrages exprimés, contre 33,90 % à Marine Le Pen.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-legislatives-2017": {
    summary: "La République en marche et le MoDem obtiennent une large majorité absolue à l’Assemblée nationale.",
    sourceIds: ["source-interieur-archives-resultats"]
  },
  "election-europeennes-2019": {
    summary: "La liste du Rassemblement national arrive en tête avec 23,34 % des voix, devant Renaissance à 22,42 % et Europe Écologie à 13,48 %.",
    sourceIds: ["source-interieur-archives-resultats", "source-parlement-europeen-resultats"]
  }
};
