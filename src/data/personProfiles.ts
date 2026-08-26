// Fichier généré par scripts/fetch-person-profiles.ts.
// Résumés attribués à Wikipédia et données structurées issues de Wikidata.

export interface PersonProfilePosition {
  label: string;
  start?: string;
  end?: string;
}

export interface PersonProfile {
  wikipediaTitle: string;
  wikipediaUrl: string;
  wikidataId: string;
  extract: string;
  birthPlaces: string[];
  deathPlaces: string[];
  citizenships: string[];
  occupations: string[];
  educatedAt: string[];
  politicalParties: string[];
  positions: PersonProfilePosition[];
  license: string;
  licenseUrl: string;
  retrievedAt: string;
}

export const personProfiles: Record<string, PersonProfile> = {
  "person-jean-jaures": {
    "wikipediaTitle": "Jean Jaurès",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean_Jaur%C3%A8s",
    "wikidataId": "Q12688",
    "extract": "Jean Jaurès ([ʒɑ̃ ʒo.ʁɛs]), né le 3 septembre 1859 à Castres et mort assassiné le 31 juillet 1914 à Paris, est un professeur, journaliste et homme politique français.\nIssu d'une famille de la petite bourgeoisie castraise, il passe son enfance et sa jeunesse à Castres, réalisant de brillantes études. Il intègre ensuite l'École normale supérieure et obtient l'agrégation de philosophie.\nIl commence une carrière politique comme républicain. En 1885, benjamin de la Chambre des députés, il siège au centre gauche en tant que non-inscrit parmi les républicains « opportunistes », favorables à Jules Ferry. Battu lors des législatives de 1889 puis réélu comme socialiste indépendant lors de celles de 1893, il soutient la grande grève des mineurs de Carmaux, s'oppose aux « lois scélérates » et dénonce la collusion d'intérêts économiques avec la politique et la presse. Il prend la défense du capitaine Dreyfus, participe à la fondation du Parti socialiste français en 1902, puis fonde et dirige le quotidien L'Humanité.\nRéélu député en 1902, c'est l'un des parlementaires-clés dans l'adoption de la loi de séparation des Églises et de l'État en 1905.",
    "birthPlaces": [
      "Castres"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "maître ou maîtresse de conférences",
      "personnalité politique",
      "professeur",
      "historien ou historienne",
      "socialiste",
      "journaliste",
      "reporter",
      "parlementaire",
      "pacifiste"
    ],
    "educatedAt": [
      "collège Sainte-Barbe",
      "École normale supérieure",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1902-06-01",
        "end": "1914-07-31"
      },
      {
        "label": "président ou présidente",
        "start": "1902-01-01",
        "end": "1905-01-01"
      },
      {
        "label": "député français",
        "start": "1893-01-08",
        "end": "1898-06-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-leon-blum": {
    "wikipediaTitle": "Léon Blum",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/L%C3%A9on_Blum",
    "wikidataId": "Q18434",
    "extract": "Léon Blum [leɔ̃ ˈblum], né le 9 avril 1872 à Paris 2e et mort le 30 mars 1950 à Jouy-en-Josas, est un homme d'État et conseiller d'État français. Figure du socialisme, il est président du Conseil de juin 1936 à juin 1937 et de mars à avril 1938, puis président du Gouvernement provisoire de la République française de décembre 1946 à janvier 1947.\nJuriste, membre du Conseil d'État ainsi que critique littéraire et écrivain, il devient un dirigeant de la Section française de l'Internationale ouvrière (SFIO) à l’approche des élections législatives de 1919 et refuse l’année suivante de voter l'adhésion à l'Internationale communiste lors du congrès de Tours en décembre 1920.\nAprès la victoire de la coalition du Front populaire aux élections législatives de 1936, il forme un premier gouvernement comprenant plusieurs femmes. Il conduit d'importantes réformes sociales (congés payés, réduction du temps de travail, etc.). Ce gouvernement est renversé au bout d'un an. Il redevient président du Conseil l’année suivante, mais pour seulement un mois.\nLors de l'occupation de la France par la Wehrmacht, il est emprisonné par le régime de Vichy, traduit en justice lors du procès de Riom en 1942, puis déporté à Buchenwald.",
    "birthPlaces": [
      "rue Saint-Denis"
    ],
    "deathPlaces": [
      "Jouy-en-Josas"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "publiciste",
      "critique littéraire",
      "personnalité politique",
      "juriste",
      "diplomate",
      "chef de gouvernement",
      "journaliste"
    ],
    "educatedAt": [
      "université de Paris",
      "lycée Henri-IV",
      "École normale supérieure",
      "lycée Charlemagne"
    ],
    "politicalParties": [
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "président du Conseil",
        "start": "1946-12-16",
        "end": "1947-01-22"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1946-12-16",
        "end": "1947-01-16"
      },
      {
        "label": "président du gouvernement provisoire de la République française",
        "start": "1946-12-16",
        "end": "1947-01-22"
      },
      {
        "label": "président du Conseil",
        "start": "1938-03-13",
        "end": "1938-04-10"
      },
      {
        "label": "président du Conseil",
        "start": "1936-06-04",
        "end": "1937-06-22"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-maurice-thorez": {
    "wikipediaTitle": "Maurice Thorez",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Maurice_Thorez",
    "wikidataId": "Q345408",
    "extract": "Maurice Thorez, né le 28 avril 1900 à Noyelles-Godault (Pas-de-Calais) et mort le 11 juillet 1964 en mer Noire, est un homme politique français.\nOuvrier de profession, il est membre du Parti communiste français, dont il est secrétaire général de 1930 à 1964, étant l’élément-clé de la « stalinisation » du mouvement.\nGracié par le général de Gaulle après sa désertion en URSS au début de la Seconde Guerre mondiale, il est ministre de la Fonction publique de 1945 à 1947 et vice-président du Conseil entre 1946 et 1947. Il bénéficie alors à nouveau d’un culte de la personnalité au sein de son parti.",
    "birthPlaces": [
      "Noyelles-Godault"
    ],
    "deathPlaces": [
      "mer Noire"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "mineur",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Section française de l'Internationale ouvrière",
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1964-07-11"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      },
      {
        "label": "vice-premier ministre"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-charles-de-gaulle": {
    "wikipediaTitle": "Charles de Gaulle",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Charles_de_Gaulle",
    "wikidataId": "Q2042",
    "extract": "Charles de Gaulle (/ʃaʁl də ɡol/ ), couramment appelé le général de Gaulle ou simplement le Général, né le 22 novembre 1890 à Lille (Nord) et mort le 9 novembre 1970 à Colombey-les-Deux-Églises (Haute-Marne), est un militaire, résistant, homme d'État et écrivain français. Pendant la Seconde Guerre mondiale, Charles de Gaulle fonde la France libre ; à la Libération, il préside le gouvernement provisoire à partir de 1944 jusqu'en 1946. Instigateur de la Ve République, il en est le premier président du 8 janvier 1959 au 28 avril 1969.\nÉlevé dans le culte de la grandeur nationale, Charles de Gaulle choisit une carrière d'officier dans l'armée de Terre. Au cours de la Première Guerre mondiale, il est blessé et fait prisonnier. Par la suite, il sert et publie dans l'entourage de Philippe Pétain, prônant auprès de personnalités politiques l'usage des divisions de blindés dans la guerre contemporaine. En mai 1940, alors colonel, il est placé à la tête d'une division blindée, la 4e division cuirassée, et mène plusieurs contre-attaques pendant la bataille de France, notamment le 17 mai à Montcornet et début juin à Abbeville. Il est dans la foulée promu général de brigade à titre temporaire.",
    "birthPlaces": [
      "Lille"
    ],
    "deathPlaces": [
      "Colombey-les-Deux-Églises"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "officier",
      "théoricien ou théoricienne militaire",
      "homme ou femme d'État",
      "auteur",
      "personnalité politique",
      "mémorialiste"
    ],
    "educatedAt": [
      "école spéciale militaire de Saint-Cyr",
      "École supérieure de guerre",
      "collège Stanislas"
    ],
    "politicalParties": [
      "Union des démocrates pour la République",
      "Rassemblement du peuple français"
    ],
    "positions": [
      {
        "label": "co-prince français d'Andorre",
        "start": "1959-01-08",
        "end": "1969-04-28"
      },
      {
        "label": "Premier ministre français",
        "start": "1959-01-08",
        "end": "1959-01-08"
      },
      {
        "label": "président de la République française",
        "start": "1959-01-08",
        "end": "1969-04-28"
      },
      {
        "label": "président du Conseil",
        "start": "1958-06-01",
        "end": "1959-01-08"
      },
      {
        "label": "ministre de la Défense nationale",
        "start": "1958-06-01",
        "end": "1959-01-08"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1944-08-20",
        "end": "1946-01-20"
      },
      {
        "label": "président du gouvernement provisoire de la République française",
        "start": "1944-06-03",
        "end": "1946-01-20"
      },
      {
        "label": "président ou présidente",
        "start": "1940-06-18",
        "end": "1944-07-03"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jules-guesde": {
    "wikipediaTitle": "Jules Guesde",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jules_Guesde",
    "wikidataId": "Q379699",
    "extract": "Jules Guesde (prononcé [gɛd] en principe mais on entend la prononciation [gɛzd] dans le Sud-Ouest de la France), pseudonyme de Jules Bazile, né le 11 novembre 1845 à Paris et mort le 28 juillet 1922 à Saint-Mandé, est un homme politique français, meneur socialiste et fondateur du Parti ouvrier français (POF), premier parti ouvrier organisé de France.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [
      "Saint-Mandé"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "écrivain ou écrivaine",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti ouvrier français",
      "Section française de l'Internationale ouvrière",
      "Parti socialiste de France"
    ],
    "positions": [
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-paul-lafargue": {
    "wikipediaTitle": "Paul Lafargue",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Paul_Lafargue",
    "wikidataId": "Q317152",
    "extract": "Paul Lafargue, né le 15 janvier 1842 à Santiago de Cuba et mort le 25 novembre 1911 à Draveil (France), est un journaliste, économiste, essayiste, écrivain et homme politique socialiste français.\nÉpoux de Laura Marx et ainsi gendre de Karl Marx, il est surtout connu pour son essai Le Droit à la paresse. Il a été militant de l'Association internationale des travailleurs, de la franc-maçonnerie, du Parti ouvrier français, du Parti socialiste de France et de la Section française de l'Internationale ouvrière.",
    "birthPlaces": [
      "Santiago de Cuba"
    ],
    "deathPlaces": [
      "Draveil"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "critique littéraire",
      "personnalité politique",
      "essayiste",
      "économiste",
      "philosophe",
      "journaliste"
    ],
    "educatedAt": [
      "université de Paris"
    ],
    "politicalParties": [
      "Parti socialiste de France",
      "Parti ouvrier français",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "député du Nord",
        "start": "1891-10-25",
        "end": "1893-10-14"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-aristide-briand": {
    "wikipediaTitle": "Aristide Briand",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Aristide_Briand",
    "wikidataId": "Q179888",
    "extract": "Aristide Briand, né le 28 mars 1862 à Nantes (Loire-Inférieure) et mort le 7 mars 1932 à Paris (Seine), est un avocat et homme politique français.\nDéputé de Saint-Étienne jusqu'en 1919 et de Loire-Inférieure jusqu'à sa mort, initiateur et rapporteur de la loi de séparation des Églises et de l'État de 1905 codifiant la laïcité en France, il est onze fois président du Conseil et vingt-six fois ministre sous la Troisième République.\nIl joue un rôle essentiel dans les relations internationales après la Première Guerre mondiale. En 1926, il reçoit le prix Nobel de la paix, conjointement avec Gustav Stresemann, pour son action comme ministre des Affaires étrangères en faveur de la réconciliation entre la France et l'Allemagne (accords de Locarno, 1925). En 1928, poursuivant son rêve de paix par la sécurité collective, dont l'axe serait la Société des Nations, il signe avec l'Américain Frank Billings Kellogg le pacte Briand-Kellogg visant à mettre la guerre hors-la-loi. Cependant, son œuvre diplomatique s'écroule dès le début des années 1930, qui sont marquées par la crise économique de 1929, la montée du nazisme et du nationalisme japonais préfigurant la Seconde Guerre mondiale.",
    "birthPlaces": [
      "Nantes"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "homme ou femme d'État",
      "auteur",
      "personnalité politique",
      "juriste",
      "diplomate",
      "chef de gouvernement",
      "avocat ou avocate",
      "socialiste",
      "journaliste",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti socialiste",
      "Parti républicain-socialiste"
    ],
    "positions": [
      {
        "label": "président du Conseil",
        "start": "1929-07-29",
        "end": "1929-11-02"
      },
      {
        "label": "président du Conseil",
        "start": "1925-11-28",
        "end": "1926-07-17"
      },
      {
        "label": "député français",
        "start": "1924-01-01",
        "end": "1932-01-01"
      },
      {
        "label": "président du Conseil",
        "start": "1921-01-16",
        "end": "1922-01-12"
      },
      {
        "label": "président du Conseil",
        "start": "1915-10-29",
        "end": "1917-03-17"
      },
      {
        "label": "président du Conseil",
        "start": "1913-01-21",
        "end": "1913-03-18"
      },
      {
        "label": "président du Conseil",
        "start": "1909-07-24",
        "end": "1911-02-27"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-joseph-paul-boncour": {
    "wikipediaTitle": "Joseph Paul-Boncour",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Joseph_Paul-Boncour",
    "wikidataId": "Q285865",
    "extract": "Joseph Paul-Boncour, né le 4 août 1873 à Saint-Aignan (Loir-et-Cher) et mort le 28 mars 1972 à Paris, est un avocat et homme politique français considéré comme l'un des plus grands orateurs de son temps.",
    "birthPlaces": [
      "Saint-Aignan"
    ],
    "deathPlaces": [
      "8e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "diplomate",
      "résistant ou résistante (France)"
    ],
    "educatedAt": [
      "université de Paris"
    ],
    "politicalParties": [
      "Union socialiste républicaine",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "représentant permanent de la France aux Nations unies",
        "start": "1945-01-01",
        "end": "1946-01-01"
      },
      {
        "label": "président du Conseil",
        "start": "1932-12-18",
        "end": "1933-01-31"
      },
      {
        "label": "conseiller général"
      },
      {
        "label": "membre du Conseil de la République"
      },
      {
        "label": "sénateur de la Troisième République"
      },
      {
        "label": "député français"
      },
      {
        "label": "ministre de la Guerre"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-rene-viviani": {
    "wikipediaTitle": "René Viviani",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Ren%C3%A9_Viviani",
    "wikidataId": "Q431074",
    "extract": "René Viviani, né le 8 novembre 1863 à Sidi Bel Abbès (Algérie française) et mort le 6 septembre 1925 au Plessis-Robinson, est un homme politique français.\nIl est député de la Seine entre 1893 et 1910, puis de la Creuse de 1910 à 1922, cofondateur du journal L'Humanité avec Jean Jaurès, ministre du Travail et président du Conseil (1914-1915) au moment du déclenchement de la Première Guerre mondiale.",
    "birthPlaces": [
      "Sidi Bel Abbès"
    ],
    "deathPlaces": [
      "Le Plessis-Robinson"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "chef de gouvernement",
      "avocat ou avocate",
      "socialiste",
      "éditeur associé",
      "parlementaire",
      "ministre",
      "personnalité politique",
      "juriste"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Section française de l'Internationale ouvrière",
      "Parti républicain-socialiste"
    ],
    "positions": [
      {
        "label": "président du Conseil",
        "start": "1914-06-13",
        "end": "1915-10-29"
      },
      {
        "label": "sénateur de la Troisième République"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-piou": {
    "wikipediaTitle": "Jacques Piou",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Piou",
    "wikidataId": "Q3159775",
    "extract": "Jacques Gustave Piou, né le 6 août 1838 à Angers (Maine-et-Loire) et mort le 12 mai 1932 à Paris (8e), est un homme politique français.\nAvocat, député de la Haute-Garonne de 1885 à 1893 puis de 1898 à 1902, il est ensuite député de la Lozère de 1906 à 1919. Il fut maire de Sadirac de 1912 à 1925. Il joue un rôle déterminant dans le ralliement des catholiques à la République, étant le fondateur du premier parti politique, au sens moderne du terme, de centre-droit, et, de 1898 à 1918, reste l'un des principaux dirigeants politiques catholiques français.",
    "birthPlaces": [
      "Angers"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "catholique",
      "juriste",
      "avocat ou avocate"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Républicains indépendants",
      "Fédération républicaine",
      "Action libérale"
    ],
    "positions": [
      {
        "label": "député de la Lozère",
        "start": "1906-05-06",
        "end": "1919-12-07"
      },
      {
        "label": "député de la Haute-Garonne",
        "start": "1898-05-08",
        "end": "1902-05-31"
      },
      {
        "label": "député de la Haute-Garonne",
        "start": "1885-10-04",
        "end": "1893-10-14"
      },
      {
        "label": "conseiller général de la Haute-Garonne",
        "start": "1870-01-01",
        "end": "1871-01-01"
      },
      {
        "label": "président ou présidente"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-albert-de-mun": {
    "wikipediaTitle": "Albert de Mun",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Albert_de_Mun",
    "wikidataId": "Q2475967",
    "extract": "Adrien Albert Marie, comte de Mun, né le 28 février 1841 au château de Lumigny (Seine-et-Marne) et mort le 6 octobre 1914 à Bordeaux (Gironde), est un militaire, homme politique et académicien français, initiateur du catholicisme social et théoricien du corporatisme chrétien.\nIl est légitimiste et défend la Restauration monarchique jusqu’à la mort du comte de Chambord en 1883 et l’encyclique Au milieu des sollicitudes (1892) prônant le ralliement des catholiques à la République.\nAdversaire du libéralisme comme du socialisme, il défend nombre de réformes sociales dans un esprit particulier, inspiré du corporatisme d’Ancien Régime : c’est ainsi que sa pensée influença différents mouvements chrétiens, d’abord du catholicisme social, puis de tendances opposées comme la démocratie chrétienne ou la gauche chrétienne protestante, le christianisme social.\nAyant soutenu un temps le général Boulanger puis devenu anti-dreyfusard, il fonde l’Action libérale populaire après la victoire du Bloc des gauches en 1902, s’opposant de façon virulente à la loi de séparation des Églises et de l’État de 1905, puis défend le réarmement de la France.",
    "birthPlaces": [
      "château de Lumigny"
    ],
    "deathPlaces": [
      "Bordeaux"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "officier",
      "personnalité politique"
    ],
    "educatedAt": [
      "école spéciale militaire de Saint-Cyr"
    ],
    "politicalParties": [
      "légitimisme",
      "Action libérale",
      "Union des droites"
    ],
    "positions": [
      {
        "label": "fauteuil 8 de l'Académie française",
        "start": "1897-04-01",
        "end": "1914-10-06"
      },
      {
        "label": "député du Finistère",
        "start": "1894-01-21",
        "end": "1914-05-31"
      },
      {
        "label": "député du Morbihan",
        "start": "1881-10-28",
        "end": "1893-10-14"
      },
      {
        "label": "député du Morbihan",
        "start": "1876-03-08",
        "end": "1878-05-16"
      },
      {
        "label": "conseiller général de Seine-et-Marne"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-eugene-motte": {
    "wikipediaTitle": "Eugène Motte (homme politique, 1860-1932)",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Eug%C3%A8ne_Motte_(homme_politique,_1860-1932)",
    "wikidataId": "Q3060053",
    "extract": "Eugène Motte, né le 15 décembre 1860 à Roubaix (Nord) et mort le 23 octobre 1932 dans la même ville, est un industriel du textile et un homme politique français.",
    "birthPlaces": [
      "Roubaix"
    ],
    "deathPlaces": [
      "Roubaix"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "parlementaire",
      "maire",
      "personnalité politique",
      "entrepreneur ou entrepreneuse",
      "industriel ou industrielle"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Fédération républicaine"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "1903-01-01",
        "end": "1904-01-01"
      },
      {
        "label": "maire de Roubaix",
        "start": "1902-01-26",
        "end": "1912-05-19"
      },
      {
        "label": "député du Nord",
        "start": "1898-05-08",
        "end": "1906-05-31"
      },
      {
        "label": "conseiller général du Nord",
        "start": "1895-01-01",
        "end": "1910-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-henri-vaugeois": {
    "wikipediaTitle": "Henri Vaugeois",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Henri_Vaugeois",
    "wikidataId": "Q1082853",
    "extract": "Henri Vaugeois, né le 25 avril 1864 à L'Aigle (Orne) et mort le 11 avril 1916 à Paris, est un militant nationaliste français et le cofondateur de la Revue d'Action française (1899) avec Maurice Pujo.",
    "birthPlaces": [
      "L'Aigle"
    ],
    "deathPlaces": [
      "11e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "militant ou militante",
      "personnalité politique"
    ],
    "educatedAt": [
      "collège Stanislas"
    ],
    "politicalParties": [
      "Action française"
    ],
    "positions": [
      {
        "label": "président de la Ligue d'Action française",
        "start": "1905-01-01",
        "end": "1916-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-maurice-pujo": {
    "wikipediaTitle": "Maurice Pujo",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Maurice_Pujo",
    "wikidataId": "Q610664",
    "extract": "Maurice Pujo, né le 26 janvier 1872 à Lorrez-le-Bocage-Préaux (Seine-et-Marne) et mort le 6 septembre 1955 à Ferrières-en-Gâtinais (Loiret), est un journaliste et homme politique français d'extrême droite, antisémite et royaliste. Il a fondé les Camelots du roi. Partisan du régime de Vichy, il est arrêté en 1944 du fait de la Libération de la France, puis condamné à cinq ans de prison et à la dégradation nationale.",
    "birthPlaces": [
      "Lorrez-le-Bocage-Préaux"
    ],
    "deathPlaces": [
      "Ferrières-en-Gâtinais"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "personnalité politique",
      "journaliste"
    ],
    "educatedAt": [
      "lycée Pothier d'Orléans",
      "université de Paris"
    ],
    "politicalParties": [],
    "positions": [
      {
        "label": "président des Étudiants d'Action française",
        "start": "1909-01-01",
        "end": "1936-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-charles-maurras": {
    "wikipediaTitle": "Charles Maurras",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Charles_Maurras",
    "wikidataId": "Q3048",
    "extract": "Charles Maurras, né le 20 avril 1868 à Martigues (Bouches-du-Rhône) et mort le 16 novembre 1952 à Saint-Symphorien-lès-Tours (Indre-et-Loire), est un journaliste, essayiste, homme politique d'extrême droite et poète français.\nÉcrivain défenseur de la culture provençale appartenant au Félibrige et agnostique dans sa jeunesse, il se rapproche ensuite des milieux catholiques et antidreyfusards. Il dirige le journal L'Action française, fer de lance du mouvement homonyme, d'inspiration nationaliste, fédéraliste et contre-révolutionnaire qui devient un important mouvement intellectuel et politique d'extrême droite sous la Troisième République.\nIl met en avant une doctrine basée sur le concept d'antisémitisme d'État et une xénophobie virulente, s'oppose à la démocratie et à la république, et prône un changement de régime en faveur d'une monarchie héréditaire.\nBien qu'anti-allemand, il soutient Pétain, le régime de Vichy et l'instauration d'une législation antisémite. Poursuivant la publication de L'Action française sous l'occupation allemande avec l'accord de Vichy puis de l'occupant, il réclame l'exécution de résistants. Arrêté à la Libération, il est condamné à la réclusion criminelle à perpétuité et à la dégradation nationale. Il est gracié pour raisons de santé en mars 1952.",
    "birthPlaces": [
      "Martigues"
    ],
    "deathPlaces": [
      "Saint-Symphorien"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "compositeur ou compositrice",
      "poète ou poétesse",
      "personnalité politique",
      "philosophe",
      "journaliste",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Ligue de la patrie française",
      "Action française"
    ],
    "positions": [
      {
        "label": "majoral du Félibrige",
        "start": "1941-01-01",
        "end": "1945-01-01"
      },
      {
        "label": "fauteuil 16 de l'Académie française",
        "start": "1938-06-09",
        "end": "1945-01-27"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-paul-deroulede": {
    "wikipediaTitle": "Paul Déroulède",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Paul_D%C3%A9roul%C3%A8de",
    "wikidataId": "Q1094964",
    "extract": "Paul Déroulède, né le 2 septembre 1846 à Paris et mort le 31 janvier 1914 à Nice, sur le mont Boron, est un poète, auteur dramatique, romancier et militant politique français.\nSon rôle de fondateur de la Ligue des patriotes et son revanchisme en font un acteur important de la droite nationaliste en France. Il est considéré par de nombreux historiens comme l'un des précurseurs d'un fascisme à la française.\nAlors qu'il s'affirme comme républicain[réf. incomplète], il tente toutefois d'effectuer un coup d'État en 1899 après la défaite cuisante des nationalistes aux élections législatives de 1898. Aidé de Barrès, de Pujo et, espère-t-il, du général Roget, cette tentative se solde par un échec après le refus de ce dernier d'y participer avec ses troupes.\nS'il est un partisan moins extrême que certains de ses compagnons de l'antisémitisme en France, il s'oppose tout de même à la gauche, qu'il accuse de vouloir « judaïser la France peut-être » lorsque des députés de gauche proposent une loi pour instaurer la laïcité. Il appuie aussi son coup d'État sur des partisans, dont la plupart sont des antisémites notoires.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [
      "Nice"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "dramaturge",
      "poète ou poétesse",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Louis-le-Grand",
      "lycée Hoche",
      "lycée Condorcet",
      "faculté de droit de Paris"
    ],
    "politicalParties": [
      "Ligue des patriotes"
    ],
    "positions": [
      {
        "label": "député de la Charente",
        "start": "1898-05-08",
        "end": "1901-03-04"
      },
      {
        "label": "député de la Charente",
        "start": "1889-09-22",
        "end": "1893-06-22"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-taittinger": {
    "wikipediaTitle": "Pierre Taittinger",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Taittinger",
    "wikidataId": "Q3387066",
    "extract": "Pierre Taittinger, né le 4 octobre 1887 à Paris et mort le 22 janvier 1965 dans la même ville, est un homme politique, industriel et journaliste français.\nFigure de la droite nationaliste, il dirige les Jeunesses patriotes dans l'entre-deux-guerres. Entre 1919 et 1940, il est député de Charente-Inférieure puis de la Seine. Il est également conseiller général et maire de Saint-Georges-des-Coteaux (Charente-Inférieure).\nSoutien du régime de Vichy après l'armistice de 1940 (c'est un partisan de Pétain depuis 1938), il exerce sous l'Occupation la fonction de président du conseil municipal de Paris en 1943-1944 - un organe non-exécutif car placé sous l'autorité de la Préfecture. Pierre Taittinger déclare avoir oeuvré à ce poste pour éviter la destruction de la capitale française par l'armée allemande.\nInéligible à la suite de la Libération, car il a voté les pleins pouvoirs à Pétain en 1940, il redevient maire de Saint-Georges-des-Coteaux en 1953 et est réélu jusqu’à sa mort.\nDans le monde des affaires, il administre plusieurs sociétés.",
    "birthPlaces": [
      "18e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "entrepreneur ou entrepreneuse",
      "industriel ou industrielle"
    ],
    "educatedAt": [
      "collège Stanislas"
    ],
    "politicalParties": [
      "Ligue des patriotes",
      "Groupe Action républicaine et sociale",
      "Fédération républicaine",
      "Groupe de l'Union républicaine démocratique"
    ],
    "positions": [
      {
        "label": "président du conseil municipal de Paris",
        "start": "1943-05-01",
        "end": "1944-01-01"
      },
      {
        "label": "conseiller général de la Seine",
        "start": "1936-01-01",
        "end": "1944-01-01"
      },
      {
        "label": "président ou présidente",
        "start": "1924-01-01",
        "end": "1936-01-01"
      },
      {
        "label": "député français",
        "start": "1919-11-16",
        "end": "1942-05-31"
      },
      {
        "label": "conseiller général de la Charente-Maritime",
        "start": "1919-01-01",
        "end": "1922-01-01"
      },
      {
        "label": "maire de Saint-Georges-des-Coteaux",
        "start": "1919-01-01",
        "end": "1965-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-ludovic-oscar-frossard": {
    "wikipediaTitle": "Ludovic-Oscar Frossard",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Ludovic-Oscar_Frossard",
    "wikidataId": "Q1109027",
    "extract": "Louis-Oscar Frossard, souvent désigné sous les noms de L.-O. Frossard ou Ludovic-Oscar Frossard, né le 5 mars 1889 à Foussemagne (Territoire de Belfort) et mort le 11 février 1946 à Paris, est un homme politique français. \nSecrétaire général de la SFIO de 1918 à 1920, puis secrétaire général de la Section française de l'internationale communiste de 1921 à 1923, il est député à partir de 1928 et ministre dans sept gouvernements entre 1935 et 1940. Pendant l'Occupation, il rallie le régime de Vichy et la presse collaborationniste.",
    "birthPlaces": [
      "Foussemagne"
    ],
    "deathPlaces": [
      "Foussemagne",
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "ministre",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Section française de l'Internationale ouvrière",
      "Parti communiste français",
      "Union socialiste républicaine"
    ],
    "positions": [
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marcel-cachin": {
    "wikipediaTitle": "Marcel Cachin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marcel_Cachin",
    "wikidataId": "Q658479",
    "extract": "Marcel Cachin, né le 20 septembre 1869 à Paimpol (Côtes-d'Armor) et mort le 12 février 1958 à Choisy-le-Roi (Seine), est un homme politique français. \nParlementaire socialiste puis communiste de 1914 à 1958 (excepté sous l'Occupation), il est directeur du journal L'Humanité de 1918 à sa mort.",
    "birthPlaces": [
      "Paimpol"
    ],
    "deathPlaces": [
      "Choisy-le-Roi"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "pédagogue",
      "professeur d'université",
      "éditeur ou éditrice",
      "personnalité politique"
    ],
    "educatedAt": [
      "université de Bordeaux"
    ],
    "politicalParties": [
      "Parti ouvrier français",
      "Section française de l'Internationale ouvrière",
      "Parti socialiste de France",
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1956-01-19",
        "end": "1958-12-05"
      },
      {
        "label": "député français",
        "start": "1951-07-05",
        "end": "1955-12-01"
      },
      {
        "label": "député français",
        "start": "1946-11-28",
        "end": "1951-07-04"
      },
      {
        "label": "député français",
        "start": "1946-06-11",
        "end": "1946-11-27"
      },
      {
        "label": "député français",
        "start": "1945-11-06",
        "end": "1946-06-10"
      },
      {
        "label": "sénateur de la Troisième République",
        "start": "1936-01-14",
        "end": "1940-02-29"
      },
      {
        "label": "député français",
        "start": "1928-06-01",
        "end": "1932-05-31"
      },
      {
        "label": "député français",
        "start": "1924-06-01",
        "end": "1928-05-31"
      },
      {
        "label": "député français",
        "start": "1919-12-08",
        "end": "1924-05-31"
      },
      {
        "label": "député français",
        "start": "1914-06-01",
        "end": "1919-12-07"
      },
      {
        "label": "membre"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-edouard-herriot": {
    "wikipediaTitle": "Édouard Herriot",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/%C3%89douard_Herriot",
    "wikidataId": "Q274344",
    "extract": "Édouard Herriot, né le 5 juillet 1872 à Troyes (Aube) et mort le 26 mars 1957 à Saint-Genis-Laval (Rhône), est un académicien et homme d'État français. Membre du Parti radical, il est un personnage éminent de la IIIe République.\nFigure centrale du Cartel des gauches, il est président du Conseil des ministres à trois reprises. Ardent défenseur du parlementarisme, il est notamment président de la Chambre des députés sous la IIIe République, puis président de l'Assemblée nationale sous la IVe République.\nIl est aussi maire de Lyon pendant plus de 46 ans, de 1905 à 1940, puis de 1945 à sa mort.\nEn 1946, il est élu à l'Académie française.",
    "birthPlaces": [
      "Troyes"
    ],
    "deathPlaces": [
      "Saint-Genis-Laval"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "École normale supérieure",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Parti radical",
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1949-08-10",
        "end": "1949-08-11"
      },
      {
        "label": "président ou présidente",
        "start": "1948-01-01",
        "end": "1951-01-01"
      },
      {
        "label": "fauteuil 8 de l'Académie française",
        "start": "1946-12-05",
        "end": "1957-03-26"
      },
      {
        "label": "député français",
        "start": "1945-11-06",
        "end": "1957-03-26"
      },
      {
        "label": "maire de Lyon",
        "start": "1945-05-18",
        "end": "1957-03-26"
      },
      {
        "label": "ministre d'État",
        "start": "1934-02-09",
        "end": "1936-01-22"
      },
      {
        "label": "président du Conseil",
        "start": "1932-06-03",
        "end": "1932-12-14"
      },
      {
        "label": "ministre de l'Instruction publique et des Beaux-arts",
        "start": "1926-07-23",
        "end": "1928-11-11"
      },
      {
        "label": "président du Conseil",
        "start": "1926-07-19",
        "end": "1926-07-21"
      },
      {
        "label": "président du Conseil",
        "start": "1924-06-15",
        "end": "1925-04-17"
      },
      {
        "label": "député français",
        "start": "1919-11-30",
        "end": "1942-05-31"
      },
      {
        "label": "sénateur de la Troisième République",
        "start": "1912-08-11",
        "end": "1919-12-23"
      },
      {
        "label": "maire de Lyon",
        "start": "1905-11-03",
        "end": "1940-09-20"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-raymond-poincare": {
    "wikipediaTitle": "Raymond Poincaré",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Raymond_Poincar%C3%A9",
    "wikidataId": "Q191974",
    "extract": "Raymond Poincaré, né le 20 août 1860 à Bar-le-Duc (Meuse) et mort le 15 octobre 1934 à Paris, est un avocat et homme d'État français. Il est le président de la République française du 18 février 1913 au 18 février 1920.\nMinistre à plusieurs reprises, président du Conseil puis président de la République de 1913 à 1920, Raymond Poincaré fut l'une des plus grandes figures politiques de la IIIe République. Il fut également, en tant que président de la République, l'un des personnages centraux de la Première Guerre mondiale, conflit durant lequel il appela Georges Clemenceau à la présidence du Conseil, en 1917. Après son mandat présidentiel, il est à nouveau président du Conseil de 1922 à 1924 et de 1926 à 1929.",
    "birthPlaces": [
      "Bar-le-Duc"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "juriste",
      "avocat ou avocate",
      "journaliste",
      "ministre"
    ],
    "educatedAt": [
      "faculté de droit de Paris"
    ],
    "politicalParties": [
      "Alliance démocratique"
    ],
    "positions": [
      {
        "label": "bâtonnier",
        "start": "1931-06-01",
        "end": "1931-10-01"
      },
      {
        "label": "Premier ministre français",
        "start": "1926-07-23",
        "end": "1929-07-26"
      },
      {
        "label": "président du Conseil",
        "start": "1926-07-23",
        "end": "1929-07-29"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1926-07-23",
        "end": "1928-11-11"
      },
      {
        "label": "président du Conseil",
        "start": "1922-01-15",
        "end": "1924-06-01"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1920-02-21",
        "end": "1934-10-15"
      },
      {
        "label": "président de la République française",
        "start": "1913-02-18",
        "end": "1920-02-18"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1913-02-18",
        "end": "1920-02-18"
      },
      {
        "label": "président du Conseil",
        "start": "1912-01-14",
        "end": "1913-01-21"
      },
      {
        "label": "fauteuil 34 de l'Académie française",
        "start": "1909-03-18",
        "end": "1934-10-15"
      },
      {
        "label": "ministre de l'Éducation nationale",
        "start": "1895-01-26",
        "end": "1895-11-01"
      },
      {
        "label": "conseiller général"
      },
      {
        "label": "sénateur ou sénatrice"
      },
      {
        "label": "sénateur de la Troisième République"
      },
      {
        "label": "député français"
      },
      {
        "label": "président ou présidente"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alexandre-millerand": {
    "wikipediaTitle": "Alexandre Millerand",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alexandre_Millerand",
    "wikidataId": "Q274540",
    "extract": "Alexandre Millerand, né le 10 février 1859 à Paris et mort le 6 avril 1943 à Versailles, est un homme d'État français. Il est président du Conseil du 20 janvier au 23 septembre 1920, puis président de la République du 23 septembre 1920 au 11 juin 1924.\nAvocat et journaliste au quotidien La Justice de Georges Clemenceau, il s’engage d’abord au sein des radicaux. Il est élu conseiller municipal de Paris en 1884 et député de la Seine en 1885 ; constamment réélu, il siège pendant 35 ans à la Chambre des députés. Durant la crise boulangiste, il s'éloigne des radicaux, maintenant sa volonté de réviser les lois constitutionnelles de 1875 et ses revendications sociales.\nDans les années 1890, devenu la principale figure des socialistes indépendants, il prône un socialisme réformiste. De 1899 à 1902, dans le gouvernement Waldeck-Rousseau, il est ministre du Commerce, de l’Industrie, des Postes et Télégraphes : premier ministre socialiste en France, il réglemente et réduit le temps de travail, garantit un repos hebdomadaire dans les établissements dépendant de l'État et fait voter un projet sur les retraites ouvrières. Mais jugé trop modéré, il est exclu du Parti socialiste français en 1904.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [
      "Versailles"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "juriste",
      "chef de gouvernement",
      "avocat ou avocate",
      "socialiste",
      "ministre"
    ],
    "educatedAt": [
      "faculté de droit de Paris",
      "lycée Louis-le-Grand",
      "lycée Michelet de Vanves"
    ],
    "politicalParties": [
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "co-prince français d'Andorre",
        "start": "1920-09-23",
        "end": "1924-06-11"
      },
      {
        "label": "président de la République française",
        "start": "1920-09-23",
        "end": "1924-06-11"
      },
      {
        "label": "président du Conseil",
        "start": "1920-01-20",
        "end": "1920-09-24"
      },
      {
        "label": "conseiller municipal de Paris",
        "start": "1884-01-01",
        "end": "1885-01-01"
      },
      {
        "label": "grand maître de la Légion d'honneur"
      },
      {
        "label": "sénateur de la Troisième République"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-louis-marin": {
    "wikipediaTitle": "Louis Marin (homme politique)",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Louis_Marin_(homme_politique)",
    "wikidataId": "Q1229977",
    "extract": "Louis Marin, né le 7 février 1871 à Faulx (Meurthe) et mort le 23 mai 1960 à Paris (Seine), est un homme politique français. Membre de la Fédération républicaine, il préside de 1925 aux lendemains de la Seconde Guerre mondiale ce parti de la droite conservatrice française. Député de Meurthe-et-Moselle entre 1905 et 1951, très patriote, il est plusieurs fois ministre sous la Troisième République, dans neuf gouvernements, entre 1924 et 1936.\nIl est membre voire président de multiples associations, parmi lesquelles plusieurs sociétés savantes, et il s'est intéressé notamment à l'ethnographie et à l'anthropologie, donnant des conférences et écrivant de nombreux articles savants.",
    "birthPlaces": [
      "Faulx"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Notre-Dame Saint-Sigisbert"
    ],
    "politicalParties": [
      "Fédération républicaine"
    ],
    "positions": [
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-georges-mandel": {
    "wikipediaTitle": "Georges Mandel",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Georges_Mandel",
    "wikidataId": "Q669893",
    "extract": "Georges Mandel, de son nom de naissance Louis Rothschild, né le 5 juin 1885 à Chatou (Seine-et-Oise) et assassiné le 7 juillet 1944 en forêt de Fontainebleau (Seine-et-Marne), est un journaliste et homme politique de l’entre-deux-guerres, ainsi qu'un résistant français.\nJeune journaliste, collaborateur de Georges Clemenceau à L'Homme libre, il le suit sur les chemins de la politique en devenant un de ses attachés de cabinet en 1908, puis son chef de cabinet à la présidence du Conseil en novembre 1917.\nUne longue carrière politique lui est ouverte dans le camp conservateur après la Grande Guerre. Son assassinat, en juillet 1944 dans la France occupée, a longtemps été interprété comme une action de représailles commise par la Milice française après l'exécution, par la Résistance, du ministre de l'Information Philippe Henriot. Selon l'historien François Delpla, cet assassinat aurait été commandité par Hitler lui-même, qui aurait repéré Mandel dès les années 1930 comme l'un des opposants les plus résolus à l'Allemagne nazie.",
    "birthPlaces": [
      "Chatou"
    ],
    "deathPlaces": [
      "Fontainebleau"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "résistant ou résistante",
      "collectionneur ou collectionneuse d'œuvres d'art",
      "journaliste",
      "ministre"
    ],
    "educatedAt": [],
    "politicalParties": [],
    "positions": [
      {
        "label": "ministre de l'Intérieur",
        "start": "1940-05-18",
        "end": "1940-06-16"
      },
      {
        "label": "député français"
      },
      {
        "label": "président du Conseil général de la Gironde"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marc-sangnier": {
    "wikipediaTitle": "Marc Sangnier",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marc_Sangnier",
    "wikidataId": "Q1248451",
    "extract": "Marc Sangnier, né le 3 avril 1873 à Paris 7e où il est mort le 28 mai 1950, est un journaliste et homme politique français.\nCréateur du mouvement Le Sillon, il est un des promoteurs de la démocratie chrétienne. Il occupe aussi une place importante dans le mouvement de l'éducation populaire à travers les revues et mouvements qu'il a animés. Il est le pionnier du mouvement des auberges de jeunesse en France.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "théologien ou théologienne",
      "philosophe",
      "journaliste",
      "résistant ou résistante (France)"
    ],
    "educatedAt": [
      "École polytechnique",
      "collège Stanislas"
    ],
    "politicalParties": [
      "Mouvement républicain populaire"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1945-10-21",
        "end": "1950-05-28"
      },
      {
        "label": "député français",
        "start": "1919-11-16",
        "end": "1924-05-31"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-georges-valois": {
    "wikipediaTitle": "Georges Valois",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Georges_Valois",
    "wikidataId": "Q545580",
    "extract": "Georges Valois, de son vrai nom Alfred-Georges Gressent, né le 7 octobre 1878 dans le 14e arrondissement de Paris et mort le 18 février 1945 au camp de concentration de Bergen-Belsen, est un résistant et homme politique français. Recherchant une nouvelle forme d'organisation économique et sociale ainsi que la synthèse du national et du social, il a oscillé entre les radicalités de gauche et de droite.",
    "birthPlaces": [
      "Paris",
      "14e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Bergen-Belsen"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "résistant ou résistante (France)",
      "personnalité politique"
    ],
    "educatedAt": [
      "École Boulle"
    ],
    "politicalParties": [
      "Parti républicain syndicaliste",
      "Le Faisceau"
    ],
    "positions": [
      {
        "label": "directeur ou directrice",
        "start": "1928-01-01",
        "end": "1932-01-01"
      },
      {
        "label": "président ou présidente",
        "start": "1928-01-01"
      },
      {
        "label": "directeur ou directrice",
        "start": "1925-01-01",
        "end": "1928-01-01"
      },
      {
        "label": "président ou présidente",
        "start": "1925-01-01",
        "end": "1928-01-01"
      },
      {
        "label": "directeur ou directrice",
        "start": "1923-01-01",
        "end": "1925-01-01"
      },
      {
        "label": "directeur ou directrice",
        "start": "1912-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-eugene-deloncle": {
    "wikipediaTitle": "Eugène Deloncle",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Eug%C3%A8ne_Deloncle",
    "wikidataId": "Q544548",
    "extract": "Antoine Octave Eugène Deloncle est un homme politique français d'extrême droite né à Brest, le 20 juin 1890, et mort à Paris 17e, le 7 janvier 1944, cofondateur en 1935 de la Cagoule, organisation terroriste fasciste. Pendant la Seconde Guerre mondiale, il est partisan du régime de Vichy et de la collaboration avec l'Allemagne nazie.",
    "birthPlaces": [
      "Brest"
    ],
    "deathPlaces": [
      "17e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "École polytechnique"
    ],
    "politicalParties": [
      "Mouvement social révolutionnaire",
      "Action française"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-filliol": {
    "wikipediaTitle": "Jean Filiol",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean_Filiol",
    "wikidataId": "Q3172022",
    "extract": "Jean Filiol (parfois orthographié erronément Filliol malgré la graphie de l'acte d'état civil), né le 12 mai 1909 à Bergerac et mort en 1975 à Milan, est un militant nationaliste français, cofondateur avec Eugène Deloncle de la Cagoule en 1935.",
    "birthPlaces": [
      "Bergerac"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "militant ou militante",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-celor": {
    "wikipediaTitle": "Pierre Celor",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Celor",
    "wikidataId": "Q3384332",
    "extract": "Pierre Celor, né le 19 avril 1902 à Tulle et mort le 6 avril 1957 à Paris (15e), est un homme politique français, dirigeant du Parti communiste français jusqu'à l'affaire du « groupe Barbé-Celor » en 1931.",
    "birthPlaces": [
      "Tulle"
    ],
    "deathPlaces": [
      "15e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Rassemblement national populaire",
      "Parti communiste français"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marcel-deat": {
    "wikipediaTitle": "Marcel Déat",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marcel_D%C3%A9at",
    "wikidataId": "Q686084",
    "extract": "Marcel Déat, né le 7 mars 1894 à Guérigny (Nièvre) et mort le 5 janvier 1955 à Turin (Italie), est un homme politique français, socialiste, puis néo-socialiste et enfin fasciste, figure de la collaboration sous l'Occupation.\nNormalien, agrégé de philosophie, journaliste et intellectuel, il est député SFIO de 1926 à 1928 et de 1932 à 1936. En 1933, il est exclu du parti pour ses doctrines de plus en plus autoritaristes et son soutien au cabinet Daladier. Il participe la même année à la création du Parti socialiste de France, et devient le chef de file des néo-socialistes, de plus en plus séduits par les modèles fascistes. Il est ministre de l'Air début 1936, dans le cabinet Sarraut, et député « Rassemblement anticommuniste » en 1939.\nIl fonde en 1941 le Rassemblement national populaire, parti qui se dit « socialiste et européen », en fait favorable à l'occupant nazi. Il termine sa carrière politique en 1944 comme ministre du Travail et de la Solidarité nationale dans le gouvernement de Vichy, et s'enfuit à Sigmaringen avec le dernier carré des ultra-collaborationnistes, avant de se réfugier en Italie où, converti au catholicisme, il termine sa vie dans la clandestinité.",
    "birthPlaces": [
      "Guérigny"
    ],
    "deathPlaces": [
      "Turin"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "philosophe",
      "collaborateur",
      "personnalité politique"
    ],
    "educatedAt": [
      "École normale supérieure"
    ],
    "politicalParties": [
      "Rassemblement national populaire",
      "Parti socialiste de France-Union Jean Jaurès",
      "Union socialiste républicaine",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-adrien-marquet": {
    "wikipediaTitle": "Adrien Marquet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Adrien_Marquet",
    "wikidataId": "Q2825221",
    "extract": "Adrien Marquet, né le 6 octobre 1884 à Bordeaux et mort le 3 avril 1955 dans sa ville natale, est un homme politique français. Longtemps député et maire socialiste de Bordeaux, puis exclu de la SFIO en 1933, ensuite ministre du Travail du gouvernement Doumergue II, il est ministre d'État, puis ministre de l'Intérieur dans les gouvernements Pétain et Laval V. Adrien Marquet est reconnu comme un grand maire bâtisseur, mais aussi comme un acteur de premier plan de la collaboration avec l’Allemagne nazie, à l’échelle locale comme nationale.",
    "birthPlaces": [
      "Bordeaux"
    ],
    "deathPlaces": [
      "Bordeaux"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Section française de l'Internationale ouvrière",
      "Parti socialiste de France-Union Jean Jaurès"
    ],
    "positions": [
      {
        "label": "maire de Bordeaux",
        "start": "1925-05-01",
        "end": "1944-08-01"
      },
      {
        "label": "député de la Gironde",
        "start": "1924-06-01",
        "end": "1942-05-31"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-paul-ramadier": {
    "wikipediaTitle": "Paul Ramadier",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Paul_Ramadier",
    "wikidataId": "Q328235",
    "extract": "Paul Ramadier, né le 17 mars 1888 à La Rochelle et mort le 14 octobre 1961 à Rodez, est un homme d'État français.",
    "birthPlaces": [
      "La Rochelle"
    ],
    "deathPlaces": [
      "Rodez"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "maire",
      "personnalité politique"
    ],
    "educatedAt": [
      "université de Paris"
    ],
    "politicalParties": [
      "Parti socialiste",
      "Section française de l'Internationale ouvrière",
      "Parti socialiste de France-Union Jean Jaurès",
      "Union socialiste républicaine"
    ],
    "positions": [
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1956-02-14",
        "end": "1957-05-21"
      },
      {
        "label": "président du Conseil",
        "start": "1947-01-22",
        "end": "1947-11-24"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1946-12-16",
        "end": "1947-01-16"
      },
      {
        "label": "président ou présidente de conseil général",
        "start": "1945-01-01",
        "end": "1949-01-01"
      },
      {
        "label": "maire de Decazeville",
        "start": "1919-12-08",
        "end": "1959-03-16"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marceau-pivert": {
    "wikipediaTitle": "Marceau Pivert",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marceau_Pivert",
    "wikidataId": "Q1370034",
    "extract": "Marceau Pivert, né le 2 octobre 1895 à Montmachoux (Seine-et-Marne) et mort le 3 juin 1958 à Paris, est un syndicaliste enseignant et un militant socialiste français.\nIl est durant les années 1930 un des principaux dirigeants de l'aile gauche révolutionnaire de la SFIO, puis le fondateur du Parti socialiste ouvrier et paysan (PSOP) en 1938.",
    "birthPlaces": [
      "Montmachoux"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "syndicaliste",
      "journaliste"
    ],
    "educatedAt": [
      "École normale supérieure de Fontenay-Saint-Cloud"
    ],
    "politicalParties": [
      "Parti socialiste ouvrier et paysan",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-vincent-auriol": {
    "wikipediaTitle": "Vincent Auriol",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Vincent_Auriol",
    "wikidataId": "Q158772",
    "extract": "Vincent Auriol, né le 27 août 1884 à Revel (Haute-Garonne) et mort le 1er janvier 1966 à Paris, est un homme d'État français. Il est président de la République du 16 janvier 1947 au 16 janvier 1954.\nMembre de la Section française de l'Internationale ouvrière (SFIO), il est ministre des Finances de 1936 à 1937, dans le gouvernement du Front populaire dirigé par Léon Blum, puis garde des Sceaux de 1937 à 1938, dans les troisième et quatrième cabinets de Camille Chautemps. Il est aussi brièvement ministre chargé de la Coordination des services à la présidence du Conseil dans le deuxième cabinet Blum, en 1938.\nArrêté en septembre 1940 par le régime de Vichy, il participe ensuite à la Résistance. Président de l'Assemblée constituante puis de l'Assemblée nationale entre 1946 et 1947, il est élu président de la République au début de cette même année, devenant le premier à occuper cette fonction sous la IVe République et le premier chef d’État socialiste en France. Il ne brigue pas un second mandat à l’issue de son septennat.",
    "birthPlaces": [
      "Revel"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "ministre des Finances",
      "personnalité politique",
      "juriste",
      "chef de gouvernement",
      "avocat ou avocate",
      "résistant ou résistante (France)"
    ],
    "educatedAt": [
      "université de Toulouse"
    ],
    "politicalParties": [
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "co-prince français d'Andorre",
        "start": "1947-01-16",
        "end": "1954-01-16"
      },
      {
        "label": "président de la République française",
        "start": "1947-01-16",
        "end": "1954-01-16"
      },
      {
        "label": "président ou présidente",
        "start": "1946-12-03",
        "end": "1947-01-20"
      },
      {
        "label": "député français",
        "start": "1946-11-28",
        "end": "1947-12-31"
      },
      {
        "label": "député français",
        "start": "1946-06-11",
        "end": "1946-11-27"
      },
      {
        "label": "président ou présidente",
        "start": "1946-06-11",
        "end": "1946-11-27"
      },
      {
        "label": "président d'assemblée parlementaire",
        "start": "1946-01-31",
        "end": "1946-06-10"
      },
      {
        "label": "député français",
        "start": "1945-11-06",
        "end": "1946-06-10"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1937-06-29",
        "end": "1938-01-04"
      },
      {
        "label": "ministre des Finances",
        "start": "1936-06-04",
        "end": "1937-06-21"
      },
      {
        "label": "député français",
        "start": "1936-06-01",
        "end": "1942-05-31"
      },
      {
        "label": "député français",
        "start": "1932-06-01",
        "end": "1936-05-31"
      },
      {
        "label": "député français",
        "start": "1928-06-01",
        "end": "1932-05-31"
      },
      {
        "label": "maire de Muret",
        "start": "1925-05-15",
        "end": "1947-01-16"
      },
      {
        "label": "député français",
        "start": "1924-06-01",
        "end": "1928-05-31"
      },
      {
        "label": "député français",
        "start": "1919-12-08",
        "end": "1924-05-31"
      },
      {
        "label": "député français",
        "start": "1914-06-01",
        "end": "1919-12-07"
      },
      {
        "label": "ministre de la Justice"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-zyromski": {
    "wikipediaTitle": "Jean Zyromski",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean_Zyromski",
    "wikidataId": "Q3175146",
    "extract": "Jean Zyromski, né le 20 avril 1890 à Nevers et mort le 20 octobre 1975 à Melun, est un homme politique français, dirigeant de la Section française de l'Internationale ouvrière (SFIO) dans l'entre-deux-guerres, en particulier de son courant Bataille socialiste, puis membre du Parti communiste.",
    "birthPlaces": [
      "Nevers"
    ],
    "deathPlaces": [
      "Melun"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "université de Toulouse"
    ],
    "politicalParties": [
      "Section française de l'Internationale ouvrière",
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "membre du Conseil de la République",
        "start": "1946-12-08",
        "end": "1948-11-07"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-edouard-daladier": {
    "wikipediaTitle": "Édouard Daladier",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/%C3%89douard_Daladier",
    "wikidataId": "Q213526",
    "extract": "Édouard Daladier, né le 18 juin 1884 à Carpentras (Vaucluse) et mort le 10 octobre 1970 à Paris, est un homme d'État français, figure du Parti radical socialiste et de la IIIe République pendant l'entre-deux-guerres.\nDéputé de Vaucluse, il est de nombreuses fois ministre, dont ministre de la Guerre en 1933-1934 puis entre juin 1936 et mai 1940, et trois fois président du Conseil : en 1933, brièvement début 1934 puis entre avril 1938 et mars 1940. À la tête du gouvernement, il signe le 30 septembre 1938 les accords de Munich.\nEmprisonné en France puis en Allemagne pendant l'Occupation, il redevient député après la guerre, siégeant jusqu'en 1958. Durant sa carrière politique, il a aussi été maire de Carpentras (1912-1919) puis d'Avignon (1953-1958).",
    "birthPlaces": [
      "Carpentras"
    ],
    "deathPlaces": [
      "16e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti radical",
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "maire d'Avignon",
        "start": "1953-05-03",
        "end": "1958-12-08"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1951-11-26",
        "end": "1955-10-27"
      },
      {
        "label": "député français",
        "start": "1946-06-02",
        "end": "1958-12-08"
      },
      {
        "label": "président du Conseil",
        "start": "1938-04-10",
        "end": "1940-03-20"
      },
      {
        "label": "président du Conseil",
        "start": "1934-01-30",
        "end": "1934-02-07"
      },
      {
        "label": "président du Conseil",
        "start": "1933-01-31",
        "end": "1933-10-26"
      },
      {
        "label": "député français",
        "start": "1919-11-16",
        "end": "1942-05-31"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-etienne-flandin": {
    "wikipediaTitle": "Pierre-Étienne Flandin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre-%C3%89tienne_Flandin",
    "wikidataId": "Q471296",
    "extract": "Pierre-Étienne Flandin, né le 12 avril 1889 à Paris 16e (Seine) et mort le 13 juin 1958 à Saint-Jean-Cap-Ferrat (Alpes-Maritimes), est un avocat et homme d'État français.\nChef de file de la droite libérale et dirigeant de l'Alliance démocratique dans les années 1930, il est président du Conseil (chef du gouvernement) de novembre 1934 à mai 1935 et organise la conférence de Stresa, en Italie, pour faire front commun contre le réarmement de l'Allemagne. En 1938, il approuve les « accords de Munich » en adressant ses félicitations personnelles aux quatre signataires (Chamberlain, Daladier, Mussolini et Hitler). En décembre 1940, il est vice-président du Conseil en remplacement de Laval et ministre des Affaires étrangères du régime de Vichy pendant 57 jours.\nFrappé d'indignité nationale pour sa participation à Vichy, il effectue 26 mois de prison à la Libération avant d'être relevé de sa condamnation.",
    "birthPlaces": [
      "16e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Saint-Jean-Cap-Ferrat"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "ministre des Affaires étrangères",
      "personnalité politique",
      "juriste",
      "politologue"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Alliance démocratique"
    ],
    "positions": [
      {
        "label": "vice-président du Conseil",
        "start": "1940-12-13",
        "end": "1941-02-09"
      },
      {
        "label": "président du Conseil",
        "start": "1934-11-08",
        "end": "1935-06-01"
      },
      {
        "label": "député français",
        "start": "1914-01-01",
        "end": "1940-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-de-la-rocque": {
    "wikipediaTitle": "François de La Rocque",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_de_La_Rocque",
    "wikidataId": "Q1339879",
    "extract": "François de La Rocque (dit de Séverac), communément appelé colonel de La Rocque, est un militaire, homme politique et résistant français, né le 6 octobre 1885 à Lorient et « mort pour la France » le 28 avril 1946 à Paris. Il est dans les années 1930 une personnalité politique de premier plan en tant que président général des Croix-de-Feu puis du Parti social français (PSF).",
    "birthPlaces": [
      "Lorient"
    ],
    "deathPlaces": [
      "Paris",
      "15e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "résistant ou résistante (France)",
      "militaire"
    ],
    "educatedAt": [
      "école spéciale militaire de Saint-Cyr"
    ],
    "politicalParties": [
      "Parti social français"
    ],
    "positions": [
      {
        "label": "Chef",
        "start": "1942-01-01",
        "end": "1943-01-01"
      },
      {
        "label": "directeur ou directrice",
        "start": "1937-01-01",
        "end": "1943-01-01"
      },
      {
        "label": "président ou présidente",
        "start": "1936-01-01",
        "end": "1940-01-01"
      },
      {
        "label": "président ou présidente",
        "start": "1932-01-01",
        "end": "1936-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-doriot": {
    "wikipediaTitle": "Jacques Doriot",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Doriot",
    "wikidataId": "Q724729",
    "extract": "Jacques Doriot, né le 26 septembre 1898 à Bresles (Oise) et mort le 22 février 1945 à Mengen (Wurtemberg, Allemagne), est un homme politique et journaliste français et, sous l'Occupation, une figure majeure de la collaboration.\nIl est l'un des dirigeants du Parti communiste français jusqu'à son exclusion en 1934. Il fonde ensuite en 1936 et dirige le Parti populaire français (PPF), de droite et anticommuniste, et reprend le journal La Liberté, qui prend position contre le Front populaire.\nDurant la Seconde Guerre mondiale, Doriot est un partisan radical de la collaboration et contribue à la création de la Légion des volontaires français contre le bolchevisme (LVF). Il combat personnellement sous l'uniforme allemand sur le front de l’Est, avec le grade de lieutenant.\nÀ la Libération, en 1944, il se réfugie en Allemagne et tente de mettre en place un « Comité de libération française ». Il meurt lors du mitraillage de sa voiture par deux avions en maraude. Les circonstances de sa mort sont l'objet de controverses.",
    "birthPlaces": [
      "Bresles"
    ],
    "deathPlaces": [
      "Mengen"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "militaire",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti communiste français",
      "Parti populaire français"
    ],
    "positions": [
      {
        "label": "maire de Saint-Denis",
        "start": "1931-02-01",
        "end": "1937-01-01"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-leon-daudet": {
    "wikipediaTitle": "Léon Daudet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/L%C3%A9on_Daudet",
    "wikidataId": "Q92562",
    "extract": "Léon Daudet, né le 16 novembre 1867 dans le 4e arrondissement de Paris et mort le 2 juillet 1942 à Saint-Rémy-de-Provence, est un écrivain, journaliste et homme politique français d'extrême droite.\nRépublicain converti au monarchisme, antidreyfusard et nationaliste clérical, député de Paris de 1919 à 1924, il fut l'une des principales figures politiques de l'Action française et l'un des collaborateurs les plus connus du journal du mouvement. Ses écrits témoignent d'un antisémitisme haineux calqué sur celui d’Édouard Drumont, qu’il considère comme « un historien et critique génial des phénomènes sociaux ».\nLa bibliographie des œuvres de cet écrivain engagé est abondante puisqu’il est l’auteur de 128 ouvrages. Son œuvre de mémorialiste comprend six volumes de Souvenirs de 1880 à 1921, « prodigieux Souvenirs », selon Marcel Proust, qui ajoutait : « Les ressemblances entre Saint-Simon et Léon Daudet sont nombreuses : la plus profonde me semble l'alternance, et l'égale réussite, des portraits magnifiquement atroces et des portraits doux, vénérants, nobles ».",
    "birthPlaces": [
      "4e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Saint-Rémy-de-Provence"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "mémorialiste",
      "journaliste",
      "biographe",
      "écrivain ou écrivaine",
      "romancier ou romancière",
      "publiciste",
      "critique littéraire"
    ],
    "educatedAt": [
      "lycée Charlemagne",
      "lycée Louis-le-Grand",
      "faculté de médecine de Paris"
    ],
    "politicalParties": [],
    "positions": [
      {
        "label": "député de la Seine",
        "start": "1919-11-16",
        "end": "1924-05-31"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marcel-bucard": {
    "wikipediaTitle": "Marcel Bucard",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marcel_Bucard",
    "wikidataId": "Q468019",
    "extract": "Marcel Bucard, né le 7 décembre 1895 à Saint-Clair-sur-Epte (actuel département du Val d'Oise), mort fusillé le 19 mars 1946 au fort de Châtillon à Fontenay-aux-Roses (actuel département des Hauts-de-Seine), est un homme politique français.\nFondateur en 1933 du Mouvement franciste, un parti politique d'extrême droite antisémite inspiré du fascisme italien, il est partisan de la collaboration franco-allemande pendant l'Occupation, ne jouant cependant qu'un rôle d'arrière-plan. Après la Libération, il organise le parachutage de saboteurs issus des rangs du francisme sur le territoire français, en collaboration avec les forces du Troisième Reich. Finalement, il est arrêté en Italie alors qu'il essaye de passer en Espagne franquiste. Extradé, il est condamné à mort et fusillé pour ses actes de collaboration.",
    "birthPlaces": [
      "Saint-Clair-sur-Epte"
    ],
    "deathPlaces": [
      "fort de Châtillon"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "collaborateur",
      "militaire",
      "personnalité politique",
      "journaliste"
    ],
    "educatedAt": [
      "lycée privé Notre-Dame du Grandchamp"
    ],
    "politicalParties": [
      "Action française",
      "Le Faisceau",
      "Parti franciste"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-costantini": {
    "wikipediaTitle": "Pierre Costantini",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Costantini",
    "wikidataId": "Q1879426",
    "extract": "Pierre Dominique Costantini ou commandant Costantini, né le 16 février 1889 à Sartène (Corse) et mort le 30 juin 1986 à Prunelli-di-Fiumorbo, est un militaire, journaliste, écrivain et collaborationniste français.\nDirigeant de la Ligue française, parti collaborationniste sous l'Occupation, il participe à la fondation de la Légion des volontaires français contre le bolchevisme (LVF), force militaire supplétive des armées du IIIe Reich.",
    "birthPlaces": [
      "Sartène"
    ],
    "deathPlaces": [
      "Prunelli-di-Fiumorbo"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "journaliste",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [],
    "politicalParties": [],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-philippe-petain": {
    "wikipediaTitle": "Philippe Pétain",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Philippe_P%C3%A9tain",
    "wikidataId": "Q5721",
    "extract": "Philippe Pétain, couramment appelé le maréchal Pétain, né le 24 avril 1856 à Cauchy-à-la-Tour (Pas-de-Calais) et mort en détention le 23 juillet 1951 à Port-Joinville (Vendée), est un militaire, diplomate et homme d'État français. Élevé à la dignité de maréchal de France en 1918, il est condamné à la peine capitale pour haute trahison, frappé d'indignité nationale et déchu de toutes ses distinctions militaires et civiles en 1945.\nMilitaire de carrière, Pétain se démarque à l'École de guerre par sa remise en cause de la doctrine dominante de l'offensive à outrance. Sur le point de terminer sa carrière comme colonel lorsque la Grande Guerre éclate en 1914, il est rapidement promu général de division. Chef militaire à l'action importante, il est généralement présenté comme le vainqueur de la bataille de Verdun et, avec Georges Clemenceau, comme l'artisan du redressement du moral des troupes après les mutineries de 1917. Remplaçant Nivelle en mai 1917, il reste commandant en chef des forces françaises jusqu'à la fin de la guerre, bien que placé sous les ordres de son rival Ferdinand Foch nommé généralissime des troupes alliées après la rupture du front le 28 mars 1918.\nAuréolé d'un immense prestige au lendemain de la guerre, il est le chef de l'armée d'après-guerre. En 1925, il commande personnellement les forces françaises combattant aux côtés de l'Espagne dans la guerre du Rif, remplaçant le maréchal Lyautey.",
    "birthPlaces": [
      "Cauchy-à-la-Tour"
    ],
    "deathPlaces": [
      "Port-Joinville"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "militaire",
      "personnalité politique",
      "diplomate",
      "officier",
      "maréchal"
    ],
    "educatedAt": [
      "école spéciale militaire de Saint-Cyr"
    ],
    "politicalParties": [],
    "positions": [
      {
        "label": "chef de l'État français",
        "start": "1940-07-11",
        "end": "1944-08-20"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1940-07-11",
        "end": "1944-08-20"
      },
      {
        "label": "président du Conseil",
        "start": "1940-06-16",
        "end": "1942-04-17"
      },
      {
        "label": "vice-président du Conseil",
        "start": "1940-05-18",
        "end": "1940-06-16"
      },
      {
        "label": "ambassadeur de France en Espagne",
        "start": "1939-03-02",
        "end": "1940-05-16"
      },
      {
        "label": "ministre d'État",
        "start": "1935-06-01",
        "end": "1935-06-04"
      },
      {
        "label": "ministre de la Guerre",
        "start": "1934-02-09",
        "end": "1934-11-08"
      },
      {
        "label": "fauteuil 18 de l'Académie française",
        "start": "1929-06-20",
        "end": "1945-08-15"
      },
      {
        "label": "vice-président",
        "start": "1920-01-01",
        "end": "1931-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-paul-reynaud": {
    "wikipediaTitle": "Paul Reynaud",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Paul_Reynaud",
    "wikidataId": "Q161076",
    "extract": "Paul Reynaud, né le 15 octobre 1878 à Barcelonnette (Basses-Alpes) et mort le 21 septembre 1966 à Neuilly-sur-Seine (Seine), est un homme d'État français.\nDéputé des Basses-Alpes (aujourd'hui Alpes-de-Haute-Provence) puis de Paris, il est plusieurs fois ministre sous la Troisième République, notamment ministre des Finances en 1938 dans le gouvernement Daladier.\nIl est président du Conseil du 22 mars au 16 juin 1940, fonction qu'il cumule avec celle de ministre des Affaires étrangères puis de ministre de la Guerre. Au début de la Seconde Guerre mondiale, après la débâcle de juin, Paul Reynaud, alors en désaccord avec les principaux membres du gouvernement et responsables militaires quant à la conduite à tenir (mais disposant de la majorité de son gouvernement), démissionne et se voit remplacé par le maréchal Pétain, qu'il a conseillé au président Lebrun pour lui succéder, lequel signe l’armistice. Durant l'occupation, il est d'abord emprisonné en France par le régime de Vichy, puis, à partir de 1942, en Allemagne par le IIIe Reich.\nAprès la guerre, élu dans le Nord, il retrouve un mandat de député ainsi que plusieurs courtes responsabilités ministérielles entre 1948 et 1954.",
    "birthPlaces": [
      "Barcelonnette"
    ],
    "deathPlaces": [
      "Neuilly-sur-Seine"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "juriste",
      "avocat ou avocate",
      "journaliste",
      "ministre"
    ],
    "educatedAt": [
      "HEC Paris",
      "université de Paris"
    ],
    "politicalParties": [
      "Alliance démocratique"
    ],
    "positions": [
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1949-08-13",
        "end": "1959-04-01"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1948-07-26",
        "end": "1948-08-28"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1940-06-05",
        "end": "1940-06-16"
      },
      {
        "label": "Premier ministre français",
        "start": "1940-03-20",
        "end": "1940-06-16"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1938-04-12",
        "end": "1938-11-01"
      },
      {
        "label": "conseiller général"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-guy-mollet": {
    "wikipediaTitle": "Guy Mollet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Guy_Mollet",
    "wikidataId": "Q314006",
    "extract": "Alcide Guy Mollet, dit Guy Mollet, né officiellement le 31 décembre 1905, la date réelle étant le 2 janvier 1906 à Flers (Orne) et mort le 3 octobre 1975 à Paris, est un homme d'État français.\nSecrétaire général de la Section française de l'Internationale ouvrière (SFIO) de 1946 à 1969, il est plusieurs fois ministre d'État sous la IVe République. Il est président du Conseil des ministres de février 1956 à juin 1957, une période pendant laquelle il est critiqué pour sa gestion de la guerre d'Algérie et de la crise du canal de Suez, qui verra la France subir un revers historique.",
    "birthPlaces": [
      "Flers"
    ],
    "deathPlaces": [
      "7e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti socialiste",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "1969-01-01",
        "end": "1975-01-01"
      },
      {
        "label": "président du Conseil",
        "start": "1956-02-01",
        "end": "1957-06-13"
      },
      {
        "label": "président de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1954-05-20",
        "end": "1956-04-15"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1949-08-13",
        "end": "1956-04-15"
      },
      {
        "label": "secrétaire général ou secrétaire générale",
        "start": "1946-09-04",
        "end": "1969-01-01"
      },
      {
        "label": "conseiller général",
        "start": "1945-01-01",
        "end": "1949-01-01"
      },
      {
        "label": "maire d'Arras",
        "start": "1945-01-01",
        "end": "1975-01-01"
      },
      {
        "label": "député français"
      },
      {
        "label": "sénateur de la Communauté"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-mendes-france": {
    "wikipediaTitle": "Pierre Mendès France",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Mend%C3%A8s_France",
    "wikidataId": "Q314265",
    "extract": "Pierre Mendès France, né le 11 janvier 1907 à Paris et mort le 18 octobre 1982 dans la même ville, est un homme d'État français, président du Conseil des ministres du 18 juin 1954 au 23 février 1955.\nIl s'initie à la vie politique dès 1924 dans les mouvements étudiants d'opposition à l'extrême droite. Il rencontre Édouard Herriot, qui l'encourage à adhérer au Parti républicain, radical et radical-socialiste.\nAux élections législatives de 1932, il est élu de justesse député de l'Eure. En dépit de ses positions plus à gauche que la majorité du Parti radical, s'opposant parfois aux grandes figures du parti, il en reste membre. Après les évènements du 6 février 1934 et la chute du gouvernement Daladier, il s'oppose fermement à l’alliance des radicaux avec la droite, dont la Fédération républicaine de Louis Marin. En 1936, il participe à la coalition du Front populaire, puis devient en 1938 membre du second gouvernement de Léon Blum.\nPendant la Seconde Guerre mondiale, après avoir été incarcéré par le régime de Vichy, il parvient à s'évader et à rejoindre la Résistance et s'engage dans les Forces aériennes françaises libres.",
    "birthPlaces": [
      "3e arrondissement de Paris"
    ],
    "deathPlaces": [
      "16e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "personnalité politique",
      "juriste",
      "diplomate"
    ],
    "educatedAt": [
      "lycée Louis-le-Grand",
      "université de Paris"
    ],
    "politicalParties": [
      "Parti socialiste unifié",
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1954-06-18",
        "end": "1955-01-20"
      },
      {
        "label": "président du Conseil",
        "start": "1954-06-18",
        "end": "1955-02-23"
      },
      {
        "label": "maire de Louviers"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-felix-gaillard": {
    "wikipediaTitle": "Félix Gaillard",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/F%C3%A9lix_Gaillard",
    "wikidataId": "Q365413",
    "extract": "Félix Gaillard, devenu Félix Gaillard d'Aimé par relèvement de nom, est un homme d'État français né le 5 novembre 1919 à Paris et mort le 9 juillet 1970 en mer, au large de Jersey. Membre du Parti radical, il est président du Conseil des ministres du 6 novembre 1957 au 15 avril 1958.",
    "birthPlaces": [
      "8e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Manche"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "personnalité politique"
    ],
    "educatedAt": [
      "École libre des sciences politiques",
      "université de Clermont-Ferrand",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Parti radical",
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1970-07-09"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1967-04-02"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      },
      {
        "label": "président du Conseil",
        "start": "1957-11-06",
        "end": "1958-05-14"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1957-06-12",
        "end": "1957-09-30"
      },
      {
        "label": "suppléant de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1949-08-13",
        "end": "1951-12-11"
      },
      {
        "label": "sénateur de la Communauté"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-georges-bidault": {
    "wikipediaTitle": "Georges Bidault",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Georges_Bidault",
    "wikidataId": "Q312026",
    "extract": "Georges Bidault, né le 5 octobre 1899 à Moulins (Allier) et mort le 27 janvier 1983 à Cambo-les-Bains (Pyrénées-Atlantiques), est un résistant et homme d'État français. Centriste, il est plusieurs fois ministre des affaires étrangères ou président du conseil sous la IVe République.\nAprès avoir combattu lors de la guerre de 1914-1918, il adhère au Parti démocrate populaire (PDP) et devient rédacteur en chef du quotidien catholique L'Aube.\nEngagé volontaire au début de la Seconde Guerre mondiale, il est emprisonné pendant plus d’un an. Compagnon de la Libération, il devient président du Conseil national de la Résistance (CNR) à la suite de la disparition de Jean Moulin en 1943, et descend les Champs-Élysées derrière le général de Gaulle lors de la libération de Paris.\nÀ l'origine de la fondation du Mouvement républicain populaire (MRP), il est plusieurs fois ministre entre 1944 et 1954 (vice-président du Conseil, Affaires étrangères, Défense nationale). Il préside le Gouvernement provisoire de la République française de juin à décembre 1946 et occupe la présidence du Conseil des ministres d’octobre 1949 à juin 1950. Ministre des Affaires étrangères à trois reprises, il est l'un des acteurs clés de la politique étrangère de la France durant la IVe République.",
    "birthPlaces": [
      "Moulins"
    ],
    "deathPlaces": [
      "Cambo-les-Bains"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "diplomate",
      "résistant ou résistante (France)",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Saint-Louis-de-Gonzague",
      "lycée du Parc"
    ],
    "politicalParties": [
      "Mouvement républicain populaire",
      "Rassemblement national"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1954-01-16",
        "end": "1954-06-12"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1953-06-28",
        "end": "1954-01-16"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1953-01-08",
        "end": "1953-05-21"
      },
      {
        "label": "président du Conseil",
        "start": "1949-10-28",
        "end": "1950-06-24"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1949-08-13",
        "end": "1951-11-26"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1947-11-24",
        "end": "1948-07-19"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1947-10-22",
        "end": "1947-11-19"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1947-01-22",
        "end": "1947-10-22"
      },
      {
        "label": "Premier ministre français",
        "start": "1946-10-14",
        "end": "1946-12-16"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1946-06-24",
        "end": "1947-01-01"
      },
      {
        "label": "président de la République française",
        "start": "1946-06-24",
        "end": "1946-10-14"
      },
      {
        "label": "président du gouvernement provisoire de la République française",
        "start": "1946-06-24",
        "end": "1946-12-16"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1946-06-24",
        "end": "1946-11-28"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1946-01-26",
        "end": "1946-06-12"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1945-11-21",
        "end": "1946-01-20"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1944-09-10",
        "end": "1945-11-02"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-robert-schuman": {
    "wikipediaTitle": "Robert Schuman",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Robert_Schuman",
    "wikidataId": "Q15981",
    "extract": "Robert Schuman (/ʁɔbɛʁ ʃuman/), né Jean-Baptiste Nicolas Robert Schuman le 29 juin 1886 à Luxembourg (Luxembourg) et mort le 4 septembre 1963 à Scy-Chazelles (Moselle), est un homme d'État français. Sous-secrétaire d'État pendant la Troisième République puis ministre pendant la Quatrième République, notamment aux Affaires étrangères et président du Conseil des ministres à deux reprises, Schuman a exercé par ailleurs les fonctions de président du Parlement européen.\nIl est considéré comme l'un des pères fondateurs de la construction européenne aux côtés de Jean Monnet, Walter Hallstein, Konrad Adenauer, Johan Willem Beyen, Paul-Henri Spaak, Joseph Bech et Alcide De Gasperi.\nL'Église catholique a entamé le procès canonique en vue de sa béatification. Le 19 juin 2021, il est déclaré vénérable par le pape François.",
    "birthPlaces": [
      "Luxembourg"
    ],
    "deathPlaces": [
      "Scy-Chazelles"
    ],
    "citizenships": [
      "Allemagne",
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "juriste",
      "diplomate",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "Athénée de Luxembourg",
      "lycée Fabert de Metz",
      "université Humboldt de Berlin",
      "université rhénane Frédéric-Guillaume de Bonn",
      "Université Louis-et-Maximilien de Munich",
      "université de Strasbourg"
    ],
    "politicalParties": [
      "Parti démocrate populaire",
      "Union républicaine lorraine",
      "Mouvement républicain populaire"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      },
      {
        "label": "député européen",
        "start": "1958-01-01",
        "end": "1962-01-01"
      },
      {
        "label": "président du Parlement européen",
        "start": "1958-01-01",
        "end": "1960-01-01"
      },
      {
        "label": "député français",
        "start": "1956-01-19",
        "end": "1958-12-05"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1955-02-23",
        "end": "1956-01-24"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1952-03-08",
        "end": "1952-12-23"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1952-01-20",
        "end": "1952-02-28"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1951-08-11",
        "end": "1952-01-07"
      },
      {
        "label": "député français",
        "start": "1951-07-05",
        "end": "1955-12-01"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1951-03-10",
        "end": "1951-07-10"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1950-07-12",
        "end": "1951-02-28"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1950-07-02",
        "end": "1950-07-04"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1950-02-07",
        "end": "1950-06-24"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1949-10-28",
        "end": "1950-02-07"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1948-09-11",
        "end": "1949-10-05"
      },
      {
        "label": "président du Conseil",
        "start": "1948-09-05",
        "end": "1948-09-11"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1948-09-05",
        "end": "1948-09-07"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1948-07-26",
        "end": "1948-08-28"
      },
      {
        "label": "président du Conseil",
        "start": "1947-11-24",
        "end": "1948-07-26"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1947-10-22",
        "end": "1947-11-19"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-pflimlin": {
    "wikipediaTitle": "Pierre Pflimlin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Pflimlin",
    "wikidataId": "Q328504",
    "extract": "Pierre Pflimlin [pjɛʁ flimlɛ̃], né le 5 février 1907 à Roubaix et mort le 27 juin 2000 à Strasbourg, est un avocat et homme d'État français, personnalité de la IVe République.\nIl devient une figure de la démocratie chrétienne après la Seconde Guerre mondiale. Député du Bas-Rhin à partir de 1945, cet Alsacien est nommé plusieurs fois ministre, chargé de portefeuilles aussi importants que l'Agriculture, la France d'outre-mer, les Finances et les Affaires économiques.\nDésigné président du Conseil le 14 mai 1958 dans le contexte de la guerre d'Algérie et de la crise de la IVe République finissante, il préconise une politique libérale vis-à-vis de l'Algérie française et prône une réforme profonde de l'État, mais face à l'intensité de la crise causée par le problème algérien et redoublée par le putsch d'Alger, il cède le pouvoir au général de Gaulle quelques jours seulement après son investiture. Il reste député, jusqu'en 1967, et devient, à partir de 1959, maire de Strasbourg, poste qu'il occupe jusqu'en 1983.\nNommé ministre d'État chargé de la Coopération en avril 1962, il démissionne un mois plus tard pour s'opposer à la politique européenne du général de Gaulle, qu'il juge trop éloignée de ses propres convictions europhiles.\nDéputé européen à partir de 1979, il exerce sa dernière fonction d'envergure en devenant président du Parlement européen, entre 1984 et 1987. Il met un terme à sa carrière politique en 1989.",
    "birthPlaces": [
      "Roubaix"
    ],
    "deathPlaces": [
      "Strasbourg"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "université de Strasbourg",
      "Institut catholique de Paris"
    ],
    "politicalParties": [
      "Mouvement républicain populaire"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1989-07-24"
      },
      {
        "label": "président du Parlement européen",
        "start": "1984-01-01",
        "end": "1987-01-01"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1984-07-23"
      },
      {
        "label": "président de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1963-05-06",
        "end": "1966-05-01"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1959-04-21",
        "end": "1967-09-01"
      },
      {
        "label": "maire de Strasbourg",
        "start": "1959-03-14",
        "end": "1983-03-06"
      },
      {
        "label": "président du Conseil",
        "start": "1958-05-14",
        "end": "1958-06-01"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1957-11-06",
        "end": "1958-05-14"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1955-02-23",
        "end": "1956-01-24"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1951-03-10",
        "end": "1951-07-10"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1950-07-12",
        "end": "1951-02-28"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1950-07-02",
        "end": "1950-07-04"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1949-10-28",
        "end": "1950-02-07"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1948-09-11",
        "end": "1949-10-05"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1948-09-05",
        "end": "1948-09-07"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1948-07-26",
        "end": "1948-08-28"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1947-11-24",
        "end": "1948-07-19"
      },
      {
        "label": "député français"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-rene-pleven": {
    "wikipediaTitle": "René Pleven",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Ren%C3%A9_Pleven",
    "wikidataId": "Q314545",
    "extract": "René Pleven, né le 15 avril 1901 à Rennes (Ille-et-Vilaine) et mort le 13 janvier 1993 à Paris (Île-de-France), est un homme d'État français.\nPersonnalité importante de la France libre pendant la guerre, il a été ensuite élu des Côtes-du-Nord (aujourd'hui Côtes-d'Armor) jusqu'en 1973. Il fut président du Conseil et ministre sous la IVe République puis garde des Sceaux pendant la Ve République, sous la présidence de Georges Pompidou.",
    "birthPlaces": [
      "Rennes"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "diplomate",
      "chef de gouvernement",
      "ministre de la Défense",
      "ministre de la Justice"
    ],
    "educatedAt": [
      "université de Rennes",
      "lycée Ambroise-Paré",
      "École libre des sciences politiques",
      "université de Paris"
    ],
    "politicalParties": [
      "Union démocratique et socialiste de la Résistance"
    ],
    "positions": [
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1972-07-05",
        "end": "1973-03-15"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1969-06-22",
        "end": "1973-03-15"
      },
      {
        "label": "député français",
        "start": "1968-06-23",
        "end": "1969-07-22"
      },
      {
        "label": "député français",
        "start": "1967-03-05",
        "end": "1968-06-23"
      },
      {
        "label": "député français",
        "start": "1962-11-18",
        "end": "1967-03-05"
      },
      {
        "label": "député français",
        "start": "1958-11-23",
        "end": "1962-11-18"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1958-05-14",
        "end": "1958-05-28"
      },
      {
        "label": "député français",
        "start": "1956-01-02",
        "end": "1958-11-23"
      },
      {
        "label": "président du Conseil",
        "start": "1951-08-11",
        "end": "1952-01-07"
      },
      {
        "label": "député français",
        "start": "1951-06-17",
        "end": "1956-01-02"
      },
      {
        "label": "président du Conseil",
        "start": "1950-07-12",
        "end": "1951-02-28"
      },
      {
        "label": "député français",
        "start": "1946-11-10",
        "end": "1951-06-17"
      },
      {
        "label": "député français",
        "start": "1946-06-02",
        "end": "1946-11-10"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1945-11-21",
        "end": "1946-01-29"
      },
      {
        "label": "député français",
        "start": "1945-10-21",
        "end": "1946-06-02"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1944-11-16",
        "end": "1945-11-02"
      },
      {
        "label": "conseiller général"
      },
      {
        "label": "député européen"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-mitterrand": {
    "wikipediaTitle": "François Mitterrand",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Mitterrand",
    "wikidataId": "Q2038",
    "extract": "François Mitterrand ([fʁɑ̃swa mitɛʁɑ̃] ), né le 26 octobre 1916 à Jarnac (Charente) et mort le 8 janvier 1996 dans le 7e arrondissement de Paris, est un homme d'État français. Il est président de la République française du 21 mai 1981 au 17 mai 1995.\nAvocat de formation, évadé de guerre, agent contractuel sous le régime de Vichy et récipiendaire de l'Ordre de la Francisque puis résistant, récipiendaire de la Croix de guerre 1939–1945 et de la Médaille de la Résistance française, il s'engage en politique après la Seconde Guerre mondiale au sein de l'Union démocratique et socialiste de la Résistance. Député de 1946 à 1958, puis sénateur de 1959 à 1962 et à nouveau député de 1962 à 1981, il est onze fois ministre sous la IVe République, notamment ministre des Anciens Combattants et des Victimes de guerre, ministre de la France d'Outre-mer, ministre de l'Intérieur et garde des Sceaux, ministre de la Justice.\nDéfavorable au retour au pouvoir du général de Gaulle en 1958, il passe plus de vingt ans dans l'opposition. L'affaire de l'attentat de l'Observatoire en 1959 menace pour un temps son ascension politique. Après avoir fondé son propre parti, la Convention des institutions républicaines, il est candidat de l'union de la gauche en vue de l'élection présidentielle de 1965, qu'il perd au second tour face au président sortant, Charles de Gaulle. Devenu premier secrétaire du Parti socialiste en 1971, il est à nouveau candidat de l'union de la gauche à la présidentielle de 1974, lors de laquelle il est battu au second tour par Valéry Giscard d'Estaing.",
    "birthPlaces": [
      "maison natale de François Mitterrand"
    ],
    "deathPlaces": [
      "7e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "journaliste",
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "faculté de droit de Paris"
    ],
    "politicalParties": [
      "Union démocratique et socialiste de la Résistance",
      "Parti socialiste",
      "Fédération de la gauche démocrate et socialiste",
      "Convention des institutions républicaines"
    ],
    "positions": [
      {
        "label": "co-prince français d'Andorre",
        "start": "1981-05-21",
        "end": "1995-05-17"
      },
      {
        "label": "président de la République française",
        "start": "1981-05-21",
        "end": "1995-05-17"
      },
      {
        "label": "député de la Nièvre",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député de la Nièvre",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "premier secrétaire du Parti socialiste",
        "start": "1971-06-16",
        "end": "1981-01-24"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1973-04-01"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "président ou présidente de conseil général",
        "start": "1964-01-01",
        "end": "1981-01-01"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1967-04-02"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1959-07-08",
        "end": "1961-03-16"
      },
      {
        "label": "maire de Château-Chinon (Ville)",
        "start": "1959-01-01",
        "end": "1981-01-01"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1956-02-01",
        "end": "1957-06-13"
      },
      {
        "label": "député de la Nièvre",
        "start": "1956-01-19",
        "end": "1958-12-08"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1954-06-19",
        "end": "1955-02-23"
      },
      {
        "label": "ministre des Affaires européennes",
        "start": "1953-06-28",
        "end": "1953-09-04"
      },
      {
        "label": "député de la Nièvre",
        "start": "1951-07-05",
        "end": "1955-12-01"
      },
      {
        "label": "ministre des Outre-mer",
        "start": "1951-03-10",
        "end": "1951-08-11"
      },
      {
        "label": "ministre des Outre-mer",
        "start": "1950-07-12",
        "end": "1951-03-10"
      },
      {
        "label": "ministre ou secrétaire d'État des Anciens Combattants",
        "start": "1947-11-24",
        "end": "1948-07-06"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1947-01-22",
        "end": "1947-10-22"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-soustelle": {
    "wikipediaTitle": "Jacques Soustelle",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Soustelle",
    "wikidataId": "Q699510",
    "extract": "Jacques Soustelle, né le 3 février 1912 à Montpellier (Hérault) et mort le 6 août 1990 à Neuilly-sur-Seine (Hauts-de-Seine), est un ethnologue, homme politique et académicien français.\nD'abord homme de gauche, membre de la France libre pendant la Seconde Guerre mondiale, il est ensuite député gaulliste, secrétaire général du RPF. Il est nommé gouverneur général de l'Algérie au début de la guerre d'Algérie. Il est plusieurs fois ministre (Information, Colonies, etc.) dans les années 1940-1950.\nPartisan de l'Algérie française, il soutient l’OAS, rejoignant alors les opposants à Charles de Gaulle. Poursuivi pour atteinte à la sûreté de l’État, il est expulsé en Suisse et passe six ans en exil, jusqu'à l'amnistie générale de 1968. Il revient ensuite en politique et retrouve un siège de député en 1973. Il est élu à l’Académie française en 1983.\nEn 1989, la chute du dictateur paraguayen Alfredo Stroessner, auquel il était lié, entraîne des révélations concernant son implication dans un scandale financier ; le Paraguay renonce à le poursuivre compte tenu de son état de santé.",
    "birthPlaces": [
      "Montpellier"
    ],
    "deathPlaces": [
      "Neuilly-sur-Seine"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "personnalité politique",
      "anthropologue",
      "ethnologue",
      "professeur d'université",
      "résistant ou résistante (France)"
    ],
    "educatedAt": [
      "lycée du Parc",
      "École normale supérieure",
      "faculté des lettres de Paris"
    ],
    "politicalParties": [
      "Union pour la nouvelle République",
      "Union démocratique et socialiste de la Résistance",
      "Rassemblement du peuple français"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "1985-01-01"
      },
      {
        "label": "fauteuil 36 de l'Académie française",
        "start": "1983-06-02",
        "end": "1990-08-06"
      },
      {
        "label": "suppléant de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1975-04-21",
        "end": "1978-04-24"
      },
      {
        "label": "suppléant de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1973-07-02",
        "end": "1975-01-22"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1959-02-08"
      },
      {
        "label": "directeur ou directrice",
        "start": "1943-11-27",
        "end": "1945-04-19"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-andre-malraux": {
    "wikipediaTitle": "André Malraux",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Andr%C3%A9_Malraux",
    "wikidataId": "Q151164",
    "extract": "André Malraux, né le 3 novembre 1901 à Paris et mort le 23 novembre 1976 à Créteil (Val-de-Marne), est un écrivain, aventurier, résistant, homme politique et intellectuel français.\nEssentiellement autodidacte et tenté par l'aventure, André Malraux gagne l’Indochine à 22 ans avec son épouse Clara Malraux. Il tente de dérober des statues dans un temple avant d’être arrêté et emprisonné en 1923-1924 pour vol et recel d'antiquités sacrées khmères. Suite à cette expérience, il retourne en Indochine pour fonder un journal anticolonialiste. Revenu en France, il transpose cette aventure dans son roman La Voie royale publié en 1930, et gagne la célébrité dans la francophonie avec la parution en 1933 de La Condition humaine, un roman d'aventures et d'engagement qui s'inspire des soubresauts révolutionnaires de la Chine et obtient le prix Goncourt.\nMilitant antifasciste, André Malraux combat en 1936-1937 aux côtés des républicains espagnols. Son engagement le conduit à écrire son roman L'Espoir, publié en décembre 1937, et à en tourner une adaptation filmée Espoir, sierra de Teruel en 1938. Il rejoint la Résistance en mars 1944 et participe aux combats lors de la Libération de la France.",
    "birthPlaces": [
      "18e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Créteil"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "réalisateur ou réalisatrice de cinéma",
      "prosateur ou prosatrice",
      "écrivain ou écrivaine",
      "scénariste",
      "romancier ou romancière",
      "dramaturge",
      "monteur ou monteuse",
      "personnalité politique",
      "archéologue"
    ],
    "educatedAt": [
      "lycée Condorcet",
      "Institut national des langues et civilisations orientales",
      "lycée Turgot"
    ],
    "politicalParties": [
      "Rassemblement du peuple français"
    ],
    "positions": [
      {
        "label": "ministre de la Culture",
        "start": "1968-07-12",
        "end": "1969-06-20"
      },
      {
        "label": "ministre de la Culture",
        "start": "1967-04-07",
        "end": "1968-07-10"
      },
      {
        "label": "ministre de la Culture",
        "start": "1966-01-08",
        "end": "1967-04-01"
      },
      {
        "label": "ministre de la Culture",
        "start": "1962-12-07",
        "end": "1966-01-08"
      },
      {
        "label": "ministre de la Culture",
        "start": "1962-04-15",
        "end": "1962-11-28"
      },
      {
        "label": "ministre de la Culture",
        "start": "1959-07-22",
        "end": "1962-04-14"
      },
      {
        "label": "ministre d'État",
        "start": "1959-01-08",
        "end": "1969-06-20"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-chaban-delmas": {
    "wikipediaTitle": "Jacques Chaban-Delmas",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Chaban-Delmas",
    "wikidataId": "Q12940",
    "extract": "Jacques Chaban-Delmas, souvent surnommé « Chaban », né Jacques Delmas le 7 mars 1915 dans le 13e arrondissement de Paris et mort le 10 novembre 2000 dans le 7e arrondissement de Paris, est un résistant, général de brigade et homme d'État français. Il est Premier ministre du 20 juin 1969 au 5 juillet 1972.\nConsidéré comme l'un des « barons du gaullisme », il est notamment maire de Bordeaux de 1947 à 1995, ministre sous la IVe République et président de l'Assemblée nationale à trois reprises entre 1958 et 1988.\nChef du gouvernement sous la présidence de Georges Pompidou, il préconise une « Nouvelle société », d'inspiration centriste et sociale. Candidat gaulliste à l'élection présidentielle de 1974 à la suite de la mort de Georges Pompidou, il subit la concurrence du libéral Valéry Giscard d'Estaing et est éliminé dès le premier tour ; cet échec est à l’origine du terme « chabanisation », un néologisme désignant la marginalisation rapide du favori d'un scrutin électoral.",
    "birthPlaces": [
      "13e arrondissement de Paris"
    ],
    "deathPlaces": [
      "7e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "joueur ou joueuse de tennis",
      "militaire",
      "joueur ou joueuse de rugby à XV",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Lakanal",
      "Institut d'études politiques de Paris",
      "faculté de droit de Paris"
    ],
    "politicalParties": [
      "Union des démocrates pour la République",
      "Union pour la nouvelle République",
      "Rassemblement pour la République",
      "Parti républicain, radical et radical-socialiste",
      "Rassemblement du peuple français"
    ],
    "positions": [
      {
        "label": "président du conseil régional d'Aquitaine",
        "start": "1986-01-01",
        "end": "1988-01-01"
      },
      {
        "label": "Premier ministre français",
        "start": "1969-06-20",
        "end": "1972-07-06"
      },
      {
        "label": "suppléant de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1956-04-16",
        "end": "1959-04-21"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1951-11-26",
        "end": "1956-04-16"
      },
      {
        "label": "maire de Bordeaux",
        "start": "1947-10-19",
        "end": "1995-06-19"
      },
      {
        "label": "député français"
      },
      {
        "label": "conseiller régional d'Aquitaine"
      },
      {
        "label": "sénateur de la Communauté"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-georges-pompidou": {
    "wikipediaTitle": "Georges Pompidou",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Georges_Pompidou",
    "wikidataId": "Q2185",
    "extract": "Georges Pompidou ([ ʒɔʁʒ pɔ̃pidu] ), né le 5 juillet 1911 à Montboudif (Cantal) et mort le 2 avril 1974 dans le 4e arrondissement de Paris, est un homme d'État français. Il est Premier ministre du 14 avril 1962 au 10 juillet 1968 et président de la République française du 20 juin 1969 jusqu'à sa mort.\nNormalien et agrégé de lettres, il est tout d’abord professeur avant d'entrer en politique en 1944 auprès de Charles de Gaulle, alors président du Gouvernement provisoire de la République française, dont il devient l'homme de confiance. Il est nommé maître des requêtes honoraire au Conseil d'État en 1946 et demeure un collaborateur du général de Gaulle pendant la « traversée du désert » de celui-ci, tout en assurant les fonctions de directeur général de la banque Rothschild. En 1958, il est nommé directeur de cabinet du général, appelé à la présidence du Conseil, et participe à l'élaboration de la Constitution de la Ve République. De 1959 à 1962, il est membre du Conseil constitutionnel.\nEn 1962, Charles de Gaulle, président de la République, le nomme Premier ministre, fonction qu'il exerce durant plus de six ans, soit le plus long passage à Matignon de la Ve République. Souhaitant moderniser le pays et notamment son industrie, il met en place la politique d'aménagement du territoire (création de la DATAR, projet de nouvel aéroport international « Paris Nord », premier plan neige, développement du réseau autoroutier, etc.), et lance des projets comme le plan Calcul et le Concorde.",
    "birthPlaces": [
      "Montboudif"
    ],
    "deathPlaces": [
      "4e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "banquier",
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "École normale supérieure",
      "lycée Louis-le-Grand",
      "lycée Pierre-de-Fermat"
    ],
    "politicalParties": [
      "Rassemblement du peuple français",
      "Union des démocrates pour la République",
      "Union pour la nouvelle République"
    ],
    "positions": [
      {
        "label": "co-prince français d'Andorre",
        "start": "1969-06-20",
        "end": "1974-04-02"
      },
      {
        "label": "président de la République française",
        "start": "1969-06-20",
        "end": "1974-04-02"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1969-06-15"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1967-05-06"
      },
      {
        "label": "Premier ministre français",
        "start": "1962-04-14",
        "end": "1968-07-10"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-roger-duchet": {
    "wikipediaTitle": "Roger Duchet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Roger_Duchet",
    "wikidataId": "Q3438910",
    "extract": "Roger Duchet, né le 4 juillet 1904 à Lyon et mort le 6 septembre 1981 à Paris, est un homme politique français.",
    "birthPlaces": [
      "3e arrondissement de Lyon"
    ],
    "deathPlaces": [
      "7e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "sénateur de la Communauté"
      },
      {
        "label": "membre du Conseil de la République"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      },
      {
        "label": "maire"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-antoine-pinay": {
    "wikipediaTitle": "Antoine Pinay",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Antoine_Pinay",
    "wikidataId": "Q356724",
    "extract": "Antoine Pinay, né le 30 décembre 1891 à Saint-Symphorien-sur-Coise (Rhône) et mort le 13 décembre 1994 à Saint-Chamond (Loire), est un homme d'État français.\nIssu d'un milieu modeste, industriel de profession, il commence sa carrière politique sous la IIIe République, à Saint-Chamond, où il est élu maire puis conseiller général, député en 1936 et enfin sénateur en 1938. D'abord favorable au maréchal Pétain, puisqu’il vote les pleins pouvoir en 1940 comme une très forte majorité des parlementaires, il prend progressivement ses distances avec le pouvoir vichyste. À la Libération, il est d’abord écarté de la mairie de Saint-Chamond comme de nombreux maires ayant eu à assumer leur mandat sous l’occupation allemande. Mais très vite, son attachement aux valeurs de la République est reconnu. Ce qui lui permet d’être élu député de la Loire et de reprendre des responsabilités politiques locales et nationales, en étant l'une des figures de proue du Centre national des indépendants et paysans (CNIP).\nPlusieurs fois ministre sous la IVe République, il est désigné président du Conseil par Vincent Auriol en 1952. Il cumule cette charge avec le ministère des Finances et des Affaires économiques.",
    "birthPlaces": [
      "Saint-Symphorien-sur-Coise"
    ],
    "deathPlaces": [
      "Saint-Chamond"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "ministre des Finances",
      "ministre des Affaires étrangères",
      "personnalité politique",
      "diplomate",
      "chef de gouvernement"
    ],
    "educatedAt": [
      "Institution Sainte Marie-La Grand'Grange"
    ],
    "politicalParties": [
      "Centre national des indépendants et paysans",
      "Alliance démocratique"
    ],
    "positions": [
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1959-01-09",
        "end": "1960-01-13"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1959-02-08"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1958-07-23",
        "end": "1959-07-08"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1958-06-03",
        "end": "1958-06-09"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1958-06-01",
        "end": "1958-07-23"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1955-02-23",
        "end": "1956-02-24"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1952-03-08",
        "end": "1952-12-23"
      },
      {
        "label": "président du Conseil",
        "start": "1952-03-08",
        "end": "1953-01-08"
      },
      {
        "label": "député européen"
      },
      {
        "label": "sénateur de la Troisième République"
      },
      {
        "label": "maire de Saint-Chamond"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-valery-giscard-destaing": {
    "wikipediaTitle": "Valéry Giscard d'Estaing",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Val%C3%A9ry_Giscard_d%27Estaing",
    "wikidataId": "Q2124",
    "extract": "Valéry Giscard d'Estaing ([valeʁi ʒiskaʁ dɛstɛ̃] ), communément appelé « Giscard » et également connu sous ses initiales VGE, né le 2 février 1926 à Coblence (Allemagne) et mort le 2 décembre 2020 à Authon (Loir-et-Cher), est un homme d'État français. Il est président de la République française du 27 mai 1974 au 21 mai 1981.\nPolytechnicien et énarque, il commence sa carrière comme inspecteur des finances, avant de devenir directeur adjoint du cabinet d’Edgar Faure, président du Conseil. En 1956, il est élu député du Puy-de-Dôme. Sous la présidence du général de Gaulle, il exerce les fonctions de secrétaire d'État aux Finances (1959-1962) puis de ministre des Finances et des Affaires économiques (1962-1966). Il prend ensuite ses distances avec le pouvoir gaulliste, en particulier lors du référendum de 1969, contribuant au départ de De Gaulle. Durant la présidence de Georges Pompidou, de 1969 à 1974, il est à nouveau ministre de l'Économie et des Finances. En parallèle, il fonde et préside les Républicains indépendants, deuxième composante de la majorité de droite.",
    "birthPlaces": [
      "Coblence"
    ],
    "deathPlaces": [
      "Authon"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "homme ou femme d'État"
    ],
    "educatedAt": [
      "lycée Louis-le-Grand",
      "lycée Janson-de-Sailly",
      "École nationale d'administration",
      "École polytechnique"
    ],
    "politicalParties": [
      "républicains indépendants",
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "fauteuil 16 de l'Académie française",
        "start": "2003-12-11",
        "end": "2020-12-02"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1993-06-09"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1989-11-04"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "député français",
        "start": "1984-09-24",
        "end": "1986-04-01"
      },
      {
        "label": "conseiller général",
        "start": "1982-01-01",
        "end": "1988-01-01"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1974-05-27",
        "end": "1981-05-21"
      },
      {
        "label": "président de la République française",
        "start": "1974-05-27",
        "end": "1981-05-21"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1974-03-02",
        "end": "1974-05-27"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1973-04-06",
        "end": "1974-03-02"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1973-05-05"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1972-07-07",
        "end": "1973-04-06"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1969-06-23",
        "end": "1972-07-07"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1969-07-22"
      },
      {
        "label": "maire de Chamalières",
        "start": "1967-09-15",
        "end": "1974-05-19"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1962-12-07",
        "end": "1966-01-08"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1963-01-07"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-michel-clemenceau": {
    "wikipediaTitle": "Michel Clemenceau",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Michel_Clemenceau",
    "wikidataId": "Q2189394",
    "extract": "Michel Clemenceau, né le 24 novembre 1873 à La Réorthe (Vendée) et mort le 4 mars 1964 à Moret-sur-Loing (Seine-et-Marne), est un homme politique français.\nFils de Georges Clemenceau, il est notamment député entre 1945 et 1951.",
    "birthPlaces": [
      "La Réorthe"
    ],
    "deathPlaces": [
      "Moret-sur-Loing"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Carnot"
    ],
    "politicalParties": [
      "Parti républicain de la liberté"
    ],
    "positions": [
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-de-gaulle": {
    "wikipediaTitle": "Pierre de Gaulle",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_de_Gaulle",
    "wikidataId": "Q3387553",
    "extract": "Pierre de Gaulle, né le 22 mars 1897 à Paris (7e) et mort le 26 décembre 1959 à Neuilly-sur-Seine, est un résistant et homme politique français. Il est le frère du général de Gaulle.",
    "birthPlaces": [
      "7e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Neuilly-sur-Seine"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "résistant ou résistante",
      "parlementaire",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Rassemblement du peuple français"
    ],
    "positions": [
      {
        "label": "député français"
      },
      {
        "label": "membre du Conseil de la République"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-edouard-depreux": {
    "wikipediaTitle": "Édouard Depreux",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/%C3%89douard_Depreux",
    "wikidataId": "Q3579808",
    "extract": "Édouard Depreux, né le 31 octobre 1898 à Viesly (Nord) et mort le 16 octobre 1981 à Paris, est un avocat, homme politique et résistant français.\nMilitant socialiste (SFIO) à partir de 1918, résistant pendant la Seconde Guerre mondiale, il est député et ministre sous la IVe République. Son opposition à la guerre d'Algérie l'amène à quitter la SFIO en 1958 pour fonder le Parti socialiste autonome (PSA), puis le Parti socialiste unifié (PSU) en 1960.",
    "birthPlaces": [
      "Viesly"
    ],
    "deathPlaces": [
      "15e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "résistant ou résistante (France)",
      "personnalité politique",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "université de Paris"
    ],
    "politicalParties": [
      "Section française de l'Internationale ouvrière",
      "Parti socialiste unifié"
    ],
    "positions": [
      {
        "label": "ministre de l'Intérieur",
        "start": "1947-10-22",
        "end": "1947-11-19"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1947-01-22",
        "end": "1947-10-21"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1946-12-16",
        "end": "1947-01-16"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1946-06-24",
        "end": "1946-11-28"
      },
      {
        "label": "député français"
      },
      {
        "label": "maire"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alain-savary": {
    "wikipediaTitle": "Alain Savary",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alain_Savary",
    "wikidataId": "Q477121",
    "extract": "Alain Savary, né le 25 avril 1918 à Alger et mort le 17 février 1988 à Paris, est un homme politique français, compagnon de la Libération, membre de la Section française de l'Internationale ouvrière (SFIO), du Parti socialiste unifié (PSU), et enfin du Parti socialiste (PS), dont il est premier secrétaire de 1969 à 1971.\nMinistre de l'Éducation entre 1981 et 1984, il est à l'origine des zones d'éducation prioritaires (ZEP) et porte le projet de loi Savary visant à créer un grand service public unifié de l'éducation, finalement retiré, ce qui conduit à sa démission.",
    "birthPlaces": [
      "Alger"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "fonctionnaire"
    ],
    "educatedAt": [
      "collège Stanislas",
      "Institut universitaire de formation des maîtres"
    ],
    "politicalParties": [
      "Parti socialiste unifié",
      "Parti socialiste",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1981-07-23"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1959-05-10"
      },
      {
        "label": "député français",
        "start": "1956-01-02",
        "end": "1958-12-08"
      },
      {
        "label": "député français",
        "start": "1951-06-17",
        "end": "1955-12-01"
      },
      {
        "label": "préfet du Maine-et-Loire",
        "start": "1945-01-01",
        "end": "1946-01-01"
      },
      {
        "label": "député européen"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-frank": {
    "wikipediaTitle": "Pierre Frank",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Frank",
    "wikidataId": "Q2702738",
    "extract": "Pierre Frank (aussi écrit Franck), né le 24 octobre 1905 à Paris et mort le 18 avril 1984 dans la même ville, est un dirigeant trotskiste français. Il fut membre du secrétariat de la Quatrième Internationale de 1948 à 1979.",
    "birthPlaces": [
      "9e arrondissement de Paris"
    ],
    "deathPlaces": [
      "13e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti communiste français",
      "Parti communiste internationaliste",
      "Ligue communiste révolutionnaire",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "secrétaire"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marcel-bleibtreu": {
    "wikipediaTitle": "Marcel Bleibtreu",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marcel_Bleibtreu",
    "wikidataId": "Q3288695",
    "extract": "Marcel Bleibtreu, né le 26 août 1918 à Marseille et mort le 25 décembre 2001, est un syndicaliste français. Il est à partir de 1953 (année de la scission de la IVe Internationale fondée quinze ans plus tôt sous l'égide de Léon Trotski) l'un des principaux dirigeants du mouvement trotskiste international.",
    "birthPlaces": [
      "Marseille"
    ],
    "deathPlaces": [
      "Villejuif"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Condorcet",
      "université de Paris"
    ],
    "politicalParties": [
      "Parti socialiste unifié"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-sidos": {
    "wikipediaTitle": "Pierre Sidos",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Sidos",
    "wikidataId": "Q3386994",
    "extract": "Pierre Sidos né le 6 janvier 1927 à Saint-Pierre-d'Oléron et mort le 4 septembre 2020 à Bayeux, est un homme politique français.\nSuivant les traces de son père François Sidos, Pierre Sidos commence son engagement à l'extrême droite durant la Seconde Guerre mondiale au sein de la Milice française, des faits pour lesquels il est condamné aux travaux forcés en 1946. Il anime dans les années qui suivent le mouvement Jeune Nation, fondé et dissous dans les années 1950, puis s'engage avec l'OAS dans l'opposition à l'indépendance de l'Algérie.\nIl participe en 1964 à la création d'Occident, avant de devenir président à vie de L'Œuvre française, un mouvement qu'il a fondé mêlant néofascisme, pétainisme, antisémitisme et une forme de catholicisme social. Il en tient les rênes jusqu'en 2012, année où Yvan Benedetti lui succède.",
    "birthPlaces": [
      "Saint-Pierre-d'Oléron"
    ],
    "deathPlaces": [
      "Bayeux"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti franciste",
      "Occident"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "1968-01-01",
        "end": "2012-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-jacques-susini": {
    "wikipediaTitle": "Jean-Jacques Susini",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Jacques_Susini",
    "wikidataId": "Q344771",
    "extract": "Jean-Jacques Susini, né le 30 juillet 1933 à Alger (alors en Algérie française) et mort le 3 juillet 2017 à Paris, est un homme politique français.\nIl est le cofondateur de l'Organisation armée secrète (OAS) avec Pierre Lagaillarde.",
    "birthPlaces": [
      "Alger"
    ],
    "deathPlaces": [
      "17e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "université Paris-Panthéon-Assas"
    ],
    "politicalParties": [
      "Front national"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-lagaillarde": {
    "wikipediaTitle": "Pierre Lagaillarde",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Lagaillarde",
    "wikidataId": "Q713316",
    "extract": "Pierre Lagaillarde, né le 15 mai 1931 à Courbevoie (France) et mort le 17 août 2014 à Auch (Gers, France), est un ancien avocat et député (sans étiquette) du département d'Alger, activiste nationaliste et anti-indépendantiste partisan de l'Algérie française pendant la guerre d'Algérie (1954-1962).\nIl est l'instigateur d'insurrections révolutionnaires à Alger que sont d'une part le coup du 13 mai 1958 qui aboutit à la chute de la IVe République et d'autre part la semaine des barricades, avec Guy Forzy, en janvier 1960 qui conduit à son arrestation. Remis en liberté avant son procès, il se réfugie en Espagne. Il est le cofondateur, avec Jean-Jacques Susini, de l'OAS en exil clandestin à Madrid en décembre de la même année.\nCondamné par contumace pour rébellion contre l'État à la suite de l'affaire des barricades, il s'installe à Alicante. À l'époque s'y est établie une importante communauté de Pieds-Noirs exilés, à cause des vagues d'exode des Français d'Algérie après les accords de cessez-le-feu et dans l'imminence de l'indépendance algérienne entre mars et juillet 1962. Lagaillarde bénéficie de la loi d'amnistie générale en 1968 et revient alors en France.",
    "birthPlaces": [
      "Courbevoie"
    ],
    "deathPlaces": [
      "Auch"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "militaire",
      "personnalité politique",
      "avocat ou avocate"
    ],
    "educatedAt": [],
    "politicalParties": [],
    "positions": [
      {
        "label": "député français",
        "start": "1958-01-01",
        "end": "1961-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-raoul-salan": {
    "wikipediaTitle": "Raoul Salan",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Raoul_Salan",
    "wikidataId": "Q241944",
    "extract": "Raoul Salan, né le 10 juin 1899 à Roquecourbe (Tarn) et mort le 3 juillet 1984 à Paris, est un général français, grand-croix de la Légion d'honneur et médaillé militaire, qui a pris part au putsch des généraux à Alger en 1961.\nAppelé le général le plus décoré de l'armée française, son état de service porte de 1917 à 1960, année où il prend sa retraite.\nAu cours de la Première Guerre mondiale, il s'engage en août 1917 et combat dans le 5e régiment d'infanterie coloniale (5e RIC). Après la guerre, il sert dans l'armée du Levant en 1921, où il est gravement blessé en Syrie en octobre, puis presque sans interruption en Indochine de 1924 à 1937. Pendant la Seconde Guerre mondiale, il s'illustre notamment comme colonel à la tête du 6e régiment de tirailleurs sénégalais (6e RTS) lors de la libération de Toulon en août 1944. Promu général de division en 1947, il est nommé commandant supérieur des troupes en Extrême-Orient en 1948. Après la mort du maréchal de Lattre, il lui succède comme commandant en chef des forces françaises en Indochine en janvier 1952, poste qu'il quitte en mai 1953, après avoir été fait grand-croix de la Légion d'honneur en août 1952.\nGénéral d'armée, il est nommé en novembre 1956 commandant supérieur des forces armées en Algérie par le gouvernement Guy Mollet dans un contexte d'escalade de la guerre.",
    "birthPlaces": [
      "Roquecourbe"
    ],
    "deathPlaces": [
      "5e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "militaire"
    ],
    "educatedAt": [
      "école spéciale militaire de Saint-Cyr"
    ],
    "politicalParties": [],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-waldeck-rochet": {
    "wikipediaTitle": "Waldeck Rochet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Waldeck_Rochet",
    "wikidataId": "Q3565308",
    "extract": "Waldeck Rochet, né le 5 avril 1905 à Sainte-Croix (Saône-et-Loire) et mort le 15 février 1983 à Nanterre (Hauts-de-Seine), est un homme politique français. Il est élu député du département de la Seine, lors des élections de 1936, et dès lors il est constamment réélu jusqu'en 1968, soit dans son département d'origine, la Saône-et-Loire, soit en région parisienne, dans la Seine, puis en Seine-Saint-Denis.\nIl fonde en 1937 un organe de presse hebdomadaire à destination du monde agricole, La Terre, auquel son nom a été longtemps attaché comme directeur.\nMembre des instances nationales de direction du Parti communiste français dès le Front populaire, il est le successeur de Maurice Thorez, à la mort de celui-ci, en 1964, au secrétariat général du parti. Il exerce, dans les faits, cette fonction jusqu'en 1969.",
    "birthPlaces": [
      "Sainte-Croix-en-Bresse"
    ],
    "deathPlaces": [
      "Nanterre"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "École internationale Lénine"
    ],
    "politicalParties": [
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1973-04-01"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "secrétaire général ou secrétaire générale",
        "start": "1964-01-01",
        "end": "1972-01-01"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1967-04-02"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      },
      {
        "label": "député français",
        "start": "1956-01-19",
        "end": "1958-12-08"
      },
      {
        "label": "député français",
        "start": "1951-07-05",
        "end": "1955-12-01"
      },
      {
        "label": "député français",
        "start": "1946-11-28",
        "end": "1951-07-04"
      },
      {
        "label": "député français",
        "start": "1946-06-11",
        "end": "1946-11-27"
      },
      {
        "label": "député français",
        "start": "1945-11-06",
        "end": "1946-06-10"
      },
      {
        "label": "député français",
        "start": "1936-06-01",
        "end": "1942-05-31"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-georges-marchais": {
    "wikipediaTitle": "Georges Marchais",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Georges_Marchais",
    "wikidataId": "Q182192",
    "extract": "Georges Marchais, né le 7 juin 1920 à La Hoguette (Calvados) et mort le 16 novembre 1997 à Paris, est un homme politique français. Il est secrétaire général du Parti communiste français (PCF) de 1972 à 1994, député de 1973 à 1997 et député européen de 1979 à 1989. Candidat communiste à l’élection présidentielle de 1981, il arrive en quatrième position du premier tour avec 15,3 % des voix.",
    "birthPlaces": [
      "La Hoguette"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "syndiqué",
      "personnalité politique",
      "politologue",
      "syndicaliste"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1989-07-24"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1984-07-23"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-duclos": {
    "wikipediaTitle": "Jacques Duclos",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Duclos",
    "wikidataId": "Q377790",
    "extract": "Jacques Duclos, né le 2 octobre 1896 à Louey (Hautes-Pyrénées) et mort le 25 avril 1975 à Montreuil (Seine-Saint-Denis), est un homme politique français, dirigeant du Parti communiste français (PCF).\nIl est à plusieurs reprises député entre 1926 et 1958 et sénateur de 1959 à sa mort.\nResté plus de trente-cinq ans dans l'équipe dirigeante du parti aux côtés de Maurice Thorez et Benoît Frachon, il est responsable du PCF « clandestin » pendant l'occupation de la France par l'Allemagne. De 1950 à 1953, il est secrétaire général par intérim du PCF en raison de la maladie de Maurice Thorez ; il demeure par la suite dans les faits l'un des principaux dirigeants du parti.\nIl se présente à l'élection présidentielle de 1969, où il arrive en troisième position du premier tour avec 21,3 % des suffrages exprimés, manquant de peu d'être qualifié au second tour. Il s’agit du meilleur score obtenu par un candidat communiste à une élection présidentielle en France.",
    "birthPlaces": [
      "Louey"
    ],
    "deathPlaces": [
      "Montreuil"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "résistant ou résistante",
      "syndicaliste"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-michel-raptis": {
    "wikipediaTitle": "Michel Pablo",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Michel_Pablo",
    "wikidataId": "Q1362259",
    "extract": "Michel Pablo (en grec moderne : Μισέλ Πάμπλο), de son vrai nom Michalis N. Raptis (en grec moderne : Μιχάλης Ν. Ράπτης), né le 24 août 1911 à Alexandrie (Égypte) et mort le 17 février 1996, est un leader trotskiste d'origine grecque.",
    "birthPlaces": [
      "Alexandrie"
    ],
    "deathPlaces": [
      "Athènes"
    ],
    "citizenships": [
      "Grèce"
    ],
    "occupations": [
      "personnalité politique",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [
      "Université polytechnique nationale d'Athènes",
      "université de Paris"
    ],
    "politicalParties": [],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alain-krivine": {
    "wikipediaTitle": "Alain Krivine",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alain_Krivine",
    "wikidataId": "Q12938",
    "extract": "Alain Krivine, né le 10 juillet 1941 à Paris et mort le 12 mars 2022 dans la même ville, est un homme politique français.\nFigure emblématique du parti d'extrême gauche Ligue communiste révolutionnaire, il est candidat aux élections présidentielles de 1969 et de 1974, où il obtient respectivement 1,06 % et 0,37 % des suffrages exprimés.",
    "birthPlaces": [
      "15e arrondissement de Paris"
    ],
    "deathPlaces": [
      "17e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "enseignant ou enseignante",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Condorcet",
      "université de Paris"
    ],
    "politicalParties": [
      "Ligue communiste révolutionnaire",
      "Front communiste révolutionnaire",
      "Nouveau Parti anticapitaliste",
      "Ligue communiste"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2004-07-19"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-daniel-cohn-bendit": {
    "wikipediaTitle": "Daniel Cohn-Bendit",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Daniel_Cohn-Bendit",
    "wikidataId": "Q76837",
    "extract": "Daniel Cohn-Bendit, né le 4 avril 1945 à Montauban (Tarn-et-Garonne), est un homme politique germano-français actif en politique aussi bien en Allemagne qu'en France.\nNé en France de parents juifs d'Allemagne militants d'extrême gauche puis antinazis, il fait ses études supérieures en France, à l'université Paris-Nanterre. Militant libertaire, il accède à la notoriété durant le mouvement de mai 68, dont il est l'un des porte-paroles et participe au congrès de Carrare, un des principaux congrès anarchistes du XXe siècle. N'ayant pas à l'époque la nationalité française, il est expulsé en Allemagne par le gouvernement français.\nÀ partir des années 1980, Cohn-Bendit mène une carrière politique en Allemagne comme élu du parti écologiste Alliance 90/Les Verts à Francfort-sur-le-Main. Il devient député européen des Verts allemands en 1994 puis est réélu député européen sur une liste des Verts français en 1999, faisant à cette occasion son retour sur la scène politique française. Lors des élections européennes de 2009, il est un des leaders d'Europe Écologie. Les Verts arrivent troisième en France avec 16,2 % des voix, un record pour le parti.",
    "birthPlaces": [
      "Montauban"
    ],
    "deathPlaces": [],
    "citizenships": [
      "Allemagne",
      "France"
    ],
    "occupations": [
      "journaliste",
      "scénariste",
      "acteur ou actrice de cinéma",
      "animateur ou animatrice de télévision",
      "personnalité politique",
      "scénariste de cinéma",
      "réalisateur ou réalisatrice de cinéma",
      "publiciste",
      "acteur ou actrice",
      "réalisateur ou réalisatrice"
    ],
    "educatedAt": [
      "université Paris-Nanterre",
      "lycée Buffon"
    ],
    "politicalParties": [
      "Alliance 90 / Les Verts"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-07-13"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2004-07-19"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1999-07-19"
      },
      {
        "label": "membre du conseil municipal de Francfort",
        "start": "1989-04-01",
        "end": "1989-04-13"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alain-geismar": {
    "wikipediaTitle": "Alain Geismar",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alain_Geismar",
    "wikidataId": "Q2829842",
    "extract": "Alain Geismar, né le 17 juillet 1939 à Paris 16e, est un homme politique et physicien français, inspecteur général honoraire de l'Éducation nationale.",
    "birthPlaces": [
      "16e arrondissement de Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "physicien ou physicienne"
    ],
    "educatedAt": [
      "lycée Janson-de-Sailly",
      "École nationale supérieure des mines de Nancy"
    ],
    "politicalParties": [
      "Parti socialiste",
      "Gauche prolétarienne",
      "Parti socialiste unifié"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-benny-levy": {
    "wikipediaTitle": "Benny Lévy",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Benny_L%C3%A9vy",
    "wikidataId": "Q631466",
    "extract": "Benny Lévy, né le 28 août 1945 au Caire (Égypte) et mort à Jérusalem le 15 octobre 2003, est un philosophe, un homme politique et un écrivain français.\nMilitant maoïste de premier plan sous le pseudonyme de Pierre Victor, il dirige dans la France de l'immédiat « après-Mai » (début des années 1970) la Gauche prolétarienne, groupe politique d'extrême gauche inspiré par la doctrine maoïste. Après avoir renoncé à la violence politique, puis préconisé la dissolution en 1973 de la Gauche prolétarienne, il devient un militant traditionaliste juif et, inspiré par la pensée d'Emmanuel Levinas, il cofonde en 2000 avec Alain Finkielkraut et Bernard Henri Lévy l'Institut d'études lévinassiennes, qu'il dirigera jusqu'à sa mort en 2003.\nIl fut le secrétaire de Jean-Paul Sartre de septembre 1973 jusqu’à la mort du philosophe en 1980. À cette époque, la parution d'entretiens entre les deux hommes dans lesquels Sartre semble témoigner, au contact de Benny Lévy, d'un renoncement à sa première conception de la question juive et d'une forme de conversion au messianisme juif, suscita une vive controverse. Les textes sont publiés sous le titre L'Espoir maintenant.\nL'expression « de Mao à Moïse », symbolique de l'évolution d'un certain nombre d'intellectuels juifs de sa génération, a été inventée pour qualifier sa trajectoire. Éric Aeschimann y reconnaît une période clé de l’histoire de la gauche intellectuelle en France : « de l’agitation gauchiste à l'antimarxisme, de la création de Libération à la défense du judaïsme.",
    "birthPlaces": [
      "Le Caire"
    ],
    "deathPlaces": [
      "Jérusalem"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "philosophe",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [
      "École normale supérieure",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Gauche prolétarienne"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-michel-rocard": {
    "wikipediaTitle": "Michel Rocard",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Michel_Rocard",
    "wikidataId": "Q12946",
    "extract": "Michel Rocard, né le 23 août 1930 à Courbevoie et mort le 2 juillet 2016 à Paris, est un homme d'État français. Il est Premier ministre du 10 mai 1988 au 15 mai 1991.\nHaut fonctionnaire, militant socialiste dès 1949, il prend en 1967 la tête du Parti socialiste unifié (PSU), qu'il représente à l'élection présidentielle de 1969, où il recueille 3,6 % des voix. Élu député des Yvelines, il rejoint en 1974 le Parti socialiste (PS), au sein duquel il incarne une « deuxième gauche », réformiste et anticommuniste : il fait ainsi figure de principal rival du dirigeant du parti, François Mitterrand.\nBien que favori des sondages pour porter la candidature du PS à l'élection présidentielle de 1981, il choisit finalement de ne pas se présenter. Après l'élection de François Mitterrand et la nomination de Pierre Mauroy à Matignon, il devient ministre d'État, ministre du Plan et de l'Aménagement du territoire. Nommé ministre de l'Agriculture, maintenu dans ses fonctions sous Laurent Fabius, il démissionne du gouvernement en 1985 en raison de désaccords avec l'exécutif.\nÀ la suite de la réélection de François Mitterrand en 1988, il est nommé Premier ministre.",
    "birthPlaces": [
      "Courbevoie"
    ],
    "deathPlaces": [
      "hôpital de la Salpêtrière",
      "13e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "fonctionnaire"
    ],
    "educatedAt": [
      "École nationale d'administration",
      "Institut d'études politiques de Paris",
      "faculté des lettres de Paris",
      "École alsacienne",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Parti socialiste unifié",
      "Parti socialiste",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "ambassadeur chargé des pôles et des affaires maritimes",
        "start": "2009-03-18",
        "end": "2016-07-02"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-01-31"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2004-07-19"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1995-01-01",
        "end": "1997-11-18"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1999-07-19"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1988-06-24"
      },
      {
        "label": "Premier ministre français",
        "start": "1988-05-10",
        "end": "1991-05-15"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1984-07-17",
        "end": "1985-04-04"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1983-03-22",
        "end": "1984-07-17"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1981-07-24"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "maire de Conflans-Sainte-Honorine",
        "start": "1977-03-17",
        "end": "1994-09-06"
      },
      {
        "label": "député français",
        "start": "1969-10-26",
        "end": "1973-04-01"
      },
      {
        "label": "personnalité politique"
      },
      {
        "label": "pilote de vol à voile"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-gaston-defferre": {
    "wikipediaTitle": "Gaston Defferre",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Gaston_Defferre",
    "wikidataId": "Q608815",
    "extract": "Gaston Defferre, né le 14 septembre 1910 à Marsillargues (Hérault) et mort le 7 mai 1986 à Marseille, est un homme politique et résistant français.\nMembre de la Section française de l'Internationale ouvrière (SFIO) puis du Parti socialiste, il est maire de Marseille d'août 1944 à novembre 1945, puis de mai 1953 à sa mort.\nParlementaire et ministre à plusieurs reprises sous les IVe et Ve Républiques, « numéro deux du gouvernement » par deux fois, puis candidat à l'élection présidentielle de 1969, il donne son nom à plusieurs lois importantes : la loi-cadre de 1956 ouvrant la décolonisation en Afrique et une série de trois lois entre 1982 et 1983 sur la décentralisation.",
    "birthPlaces": [
      "Marsillargues"
    ],
    "deathPlaces": [
      "Marseille"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "juriste",
      "avocat ou avocate",
      "résistant ou résistante (France)"
    ],
    "educatedAt": [
      "université d'Aix-Marseille",
      "université Paul-Cézanne - Aix-Marseille III"
    ],
    "politicalParties": [
      "Parti socialiste",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "ministre de l'Intérieur",
        "start": "1983-03-22",
        "end": "1984-07-17"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1981-06-22",
        "end": "1983-03-22"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1981-05-21",
        "end": "1981-06-22"
      },
      {
        "label": "député français",
        "start": "1962-01-01",
        "end": "1981-01-01"
      },
      {
        "label": "maire de Marseille",
        "start": "1953-05-09",
        "end": "1986-05-07"
      },
      {
        "label": "sénateur de la Communauté"
      },
      {
        "label": "ministre de l'Intérieur"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-jacques-servan-schreiber": {
    "wikipediaTitle": "Jean-Jacques Servan-Schreiber",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Jacques_Servan-Schreiber",
    "wikidataId": "Q431565",
    "extract": "Jean-Jacques Servan-Schreiber (aussi appelé par ses initiales JJSS), né Jean-Jacques Schreiber le 13 février 1924 à Paris et mort le 7 novembre 2006 à Fécamp, est un journaliste, essayiste et homme politique français.",
    "birthPlaces": [
      "16e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Fécamp"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "journaliste",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [
      "École polytechnique",
      "lycée Janson-de-Sailly"
    ],
    "politicalParties": [
      "Union pour la démocratie française",
      "Parti radical",
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "député français"
      },
      {
        "label": "ministre"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-lecanuet": {
    "wikipediaTitle": "Jean Lecanuet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean_Lecanuet",
    "wikidataId": "Q537864",
    "extract": "Jean Lecanuet, né le 4 mars 1920 à Rouen (Seine-Inférieure) et mort le 22 février 1993 à Neuilly-sur-Seine (Hauts-de-Seine), est un homme politique français.\nAgrégé de philosophie, il s'engage dans la Résistance puis travaille comme fonctionnaire au sein de plusieurs cabinets ministériels après la Libération. Sous la IVe République, il est brièvement secrétaire d'État chargé des Relations avec les États associés entre 1955 et 1956.\nSoutenu par les démocrates-chrétiens, il présente sa candidature à la première élection présidentielle française convoquée au suffrage universel en 1965. À l'issue d'une campagne novatrice qui lui donne une notoriété nationale, il se classe à la troisième place en obtenant plus de 15 % des suffrages au premier tour. Son résultat, bien que modeste par contraste avec ses ambitions initiales, est l'un des principaux facteurs de la mise en ballotage inattendue du général de Gaulle.\nEn 1968, il devient maire de Rouen et le demeure jusqu'à sa mort. Il mène alors une importante politique d'urbanisme et dote notamment la ville d'un nouveau réseau de tramway.",
    "birthPlaces": [
      "Rouen"
    ],
    "deathPlaces": [
      "Neuilly-sur-Seine"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "enseignant ou enseignante",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Pierre-Corneille de Rouen"
    ],
    "politicalParties": [
      "Mouvement républicain populaire",
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1986-09-28"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1988-10-10"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1984-07-23"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1974-05-27",
        "end": "1976-08-25"
      },
      {
        "label": "président du Conseil général de la Seine-Maritime",
        "start": "1974-01-01",
        "end": "1993-01-01"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1974-05-28"
      },
      {
        "label": "maire de Rouen",
        "start": "1968-04-04",
        "end": "1993-02-22"
      },
      {
        "label": "député français",
        "start": "1951-06-17",
        "end": "1955-12-01"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      },
      {
        "label": "sénateur de la Communauté"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alain-poher": {
    "wikipediaTitle": "Alain Poher",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alain_Poher",
    "wikidataId": "Q12950",
    "extract": "Alain Poher, né le 17 avril 1909 à Ablon-sur-Seine (Seine-et-Oise) et mort le 9 décembre 1996 dans le 16e arrondissement de Paris, est un homme d'État français. Président du Sénat de 1968 à 1992, il exerce à ce titre les fonctions de président de la République par intérim en 1969 et 1974.\nAprès avoir été engagé dans la Résistance, il adhère au MRP et devient sénateur en 1946. Il est ensuite secrétaire d'État chargé des Finances dans le deuxième gouvernement Schuman puis du Budget au sein du gouvernement Queuille. Il préside le Parlement européen de 1966 à 1969.\nÉlu président du Sénat en 1968, il assure en cette qualité la fonction de président de la République par intérim une première fois en 1969, à la suite de la démission de Charles de Gaulle. Candidat du Centre démocrate à l'élection présidentielle anticipée, il est battu au second tour par l'ancien Premier ministre gaulliste Georges Pompidou. Il exerce à nouveau l'intérim en 1974, après la mort de Pompidou.",
    "birthPlaces": [
      "Ablon-sur-Seine"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "homme ou femme d'État",
      "personnalité politique"
    ],
    "educatedAt": [
      "École nationale supérieure des mines de Paris",
      "Institut d'études politiques de Paris",
      "lycée Louis-le-Grand",
      "lycée Saint-Louis"
    ],
    "politicalParties": [
      "Mouvement républicain populaire",
      "Centre des démocrates sociaux",
      "Centre démocrate",
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "président de la République française",
        "start": "1974-04-03",
        "end": "1974-05-27"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1974-04-03",
        "end": "1974-05-27"
      },
      {
        "label": "président de la République française",
        "start": "1969-04-28",
        "end": "1969-06-20"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1969-04-28",
        "end": "1969-06-20"
      },
      {
        "label": "président du Sénat",
        "start": "1968-10-02",
        "end": "1992-10-02"
      },
      {
        "label": "président du Parlement européen",
        "start": "1966-03-07",
        "end": "1969-03-11"
      },
      {
        "label": "membre du Conseil de la République",
        "start": "1952-05-18",
        "end": "1995-10-01"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1946-12-08",
        "end": "1948-11-07"
      },
      {
        "label": "député européen"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-roger-frey": {
    "wikipediaTitle": "Roger Frey",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Roger_Frey",
    "wikidataId": "Q926639",
    "extract": "Roger Frey, né le 11 juin 1913 à Nouméa (Nouvelle-Calédonie) et mort le 13 septembre 1997 à Neuilly-sur-Seine (Hauts-de-Seine), est un homme politique français. Il est ministre de l'Intérieur sous Charles de Gaulle entre 1961 et 1967, puis président du Conseil constitutionnel de 1974 à 1983.\nIl fait partie des « barons du gaullisme ».",
    "birthPlaces": [
      "Nouméa"
    ],
    "deathPlaces": [
      "Neuilly-sur-Seine"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "personnalité du monde des affaires"
    ],
    "educatedAt": [
      "collège Stanislas"
    ],
    "politicalParties": [
      "Rassemblement du peuple français",
      "Union des démocrates pour la République",
      "Union pour la nouvelle République"
    ],
    "positions": [
      {
        "label": "membre du Conseil constitutionnel",
        "start": "1974-03-01",
        "end": "1983-03-01"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1968-08-12"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1967-05-07"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1966-01-08",
        "end": "1967-04-01"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1963-01-06"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1962-11-28",
        "end": "1966-01-08"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1962-04-14",
        "end": "1962-11-28"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1961-05-06",
        "end": "1962-04-14"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-michel-debre": {
    "wikipediaTitle": "Michel Debré",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Michel_Debr%C3%A9",
    "wikidataId": "Q296386",
    "extract": "Michel Debré, né le 15 janvier 1912 dans le 7e arrondissement de Paris et mort le 2 août 1996 à Montlouis-sur-Loire (Indre-et-Loire), est un résistant, académicien et homme d'État français. Il est le premier à exercer la fonction de Premier ministre de la Ve République, du 8 janvier 1959 au 14 avril 1962.\nHaut fonctionnaire sous le régime de Vichy, puis résistant et gaulliste, il est sénateur d’Indre-et-Loire de 1948 à 1958. Avec le retour du général de Gaulle au pouvoir en 1958, il devient garde des Sceaux. Il dirige en parallèle le groupe de travail chargé de la rédaction de la Constitution de la Ve République. Nommé Premier ministre à la suite de l’élection du général de Gaulle à la présidence de la République, il démissionne trois ans plus tard après un désaccord avec celui-ci sur son projet d’élection du président de la République au suffrage universel direct.\nIl occupe par la suite les fonctions de ministre de l'Économie et des Finances de 1966 à 1968, puis des Affaires étrangères de 1968 à 1969, et enfin de la Défense nationale de 1969 à 1973. Député de La Réunion jusqu’en 1988, il participe au transfert forcé de plus de 2 000 enfants dans l'affaire des « Enfants de la Creuse » et s'illustre également par sa farouche opposition à la loi Veil.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [
      "Montlouis-sur-Loire"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "chef de gouvernement",
      "avocat ou avocate",
      "fonctionnaire",
      "personnalité politique",
      "diplomate"
    ],
    "educatedAt": [
      "lycée Louis-le-Grand",
      "lycée Montaigne",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Rassemblement du peuple français",
      "Union des démocrates pour la République",
      "Union pour la nouvelle République",
      "Rassemblement pour la République",
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "fauteuil 1 de l'Académie française",
        "start": "1988-03-24",
        "end": "1996-08-02"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1980-09-30"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1968-07-10",
        "end": "1969-06-20"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1968-05-31",
        "end": "1968-07-10"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1967-04-07",
        "end": "1968-05-31"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1966-01-08",
        "end": "1967-04-07"
      },
      {
        "label": "Premier ministre français",
        "start": "1959-01-08",
        "end": "1962-04-14"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1958-06-01",
        "end": "1959-01-08"
      },
      {
        "label": "suppléant de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1953-09-15",
        "end": "1959-04-21"
      },
      {
        "label": "préfet du Maine-et-Loire",
        "start": "1944-01-01",
        "end": "1945-01-01"
      },
      {
        "label": "député français"
      },
      {
        "label": "conseiller régional de La Réunion"
      },
      {
        "label": "membre du Conseil de la République"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-maurice-couve-de-murville": {
    "wikipediaTitle": "Maurice Couve de Murville",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Maurice_Couve_de_Murville",
    "wikidataId": "Q312034",
    "extract": "Maurice Couve de Murville, né le 24 janvier 1907 à Reims et mort le 24 décembre 1999 à Paris, est un haut fonctionnaire, diplomate et homme d'État français. Il est Premier ministre du 10 juillet 1968 au 20 juin 1969.\nCollaborateur puis résistant et gaulliste durant la Seconde Guerre mondiale, il devient ministre des Affaires étrangères en 1958, une fonction qu'il occupe pendant dix ans. Il est ensuite ministre de l’Économie et des Finances pendant un mois.\nAprès la démission de Georges Pompidou, il est nommé chef du gouvernement par le président de la République, Charles de Gaulle. Il reste Premier ministre pendant l'intérim d'Alain Poher. Il détient le record de brièveté pour un chef de gouvernement sous la Ve République pendant 22 ans, Édith Cresson battant ensuite ce record.\nÉlu député de la 6e circonscription de Paris pour la première fois en 1968, il exerce à nouveau ce mandat de 1973 à 1986.",
    "birthPlaces": [
      "Reims"
    ],
    "deathPlaces": [
      "7e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "fonctionnaire",
      "personnalité politique",
      "ambassadeur",
      "diplomate"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "lycée Carnot",
      "faculté de droit de Paris",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Union pour la nouvelle République",
      "Rassemblement pour la République",
      "Union des démocrates pour la République"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1968-08-10"
      },
      {
        "label": "Premier ministre français",
        "start": "1968-07-10",
        "end": "1969-06-20"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1968-05-31",
        "end": "1968-07-19"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1967-04-05",
        "end": "1968-05-30"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1966-01-08",
        "end": "1967-04-01"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1962-11-28",
        "end": "1966-01-08"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1962-04-14",
        "end": "1962-11-28"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1959-01-08",
        "end": "1962-04-14"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1958-06-01",
        "end": "1959-01-08"
      },
      {
        "label": "ambassadeur de France en Allemagne de l'Ouest",
        "start": "1956-01-01",
        "end": "1958-01-01"
      },
      {
        "label": "ambassadeur de France aux États-Unis",
        "start": "1954-01-01",
        "end": "1956-01-01"
      },
      {
        "label": "ambassadeur de France en Égypte",
        "start": "1950-01-01",
        "end": "1954-01-01"
      },
      {
        "label": "président ou présidente"
      },
      {
        "label": "ambassadeur"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-fontan": {
    "wikipediaTitle": "François Fontan",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Fontan",
    "wikidataId": "Q3084638",
    "extract": "François Fontan, né le 7 février 1929 à Paris et mort le 19 décembre 1979 à Coni, est un penseur politique français occitaniste.\nIl est le fondateur du Parti nationaliste occitan.",
    "birthPlaces": [
      "14e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Coni"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Toulouse"
    ],
    "politicalParties": [
      "Parti communiste français",
      "Parti de la nation occitane"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "end": "1979-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-rene-dumont": {
    "wikipediaTitle": "René Dumont",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Ren%C3%A9_Dumont",
    "wikidataId": "Q927879",
    "extract": "René Dumont, né le 13 mars 1904 à Cambrai (Nord) et mort le 18 juin 2001 à Fontenay-sous-Bois (Val-de-Marne), est un ingénieur agronome, sociologue et homme politique français. Il est connu pour son combat pour le développement rural des pays en développement et son engagement écologiste. Il est le premier candidat à s'être présenté sous l'étiquette écologiste à une élection présidentielle française, en 1974.\nRené Dumont participe à populariser le mot « agroécologie » le 20 avril 1975, lorsqu'il réalise le commentaire du film documentaire de Michel Yves Gattepaille : En Afrique, les peuples oubliés du Sahel. C'est également un auteur prolifique avec près de 70 ouvrages, dont L'Afrique noire est mal partie en 1962 et L'Utopie ou la mort ! en 1973.",
    "birthPlaces": [
      "Cambrai"
    ],
    "deathPlaces": [
      "Fontenay-sous-Bois"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "ingénieur ou ingénieure",
      "personnalité politique",
      "sociologue",
      "professeur d'université",
      "agronome",
      "écologiste",
      "professeur des universités ou professeure des universités",
      "pacifiste"
    ],
    "educatedAt": [
      "Institut national agronomique",
      "lycée Henri-IV"
    ],
    "politicalParties": [
      "Les Verts"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-chirac": {
    "wikipediaTitle": "Jacques Chirac",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Chirac",
    "wikidataId": "Q2105",
    "extract": "Jacques Chirac (/ʒak ʃiʁak/ ), né le 29 novembre 1932 dans le 5e arrondissement de Paris et mort le 26 septembre 2019 dans le 6e arrondissement de la même ville, est un homme d'État français. Il est Premier ministre du 27 mai 1974 au 25 août 1976 et du 20 mars 1986 au 10 mai 1988, et président de la République française du 17 mai 1995 au 16 mai 2007.\nDiplômé de Sciences Po et de l'ENA, il rejoint en 1962 le cabinet du Premier ministre, Georges Pompidou. Élu député de la Corrèze, il est plusieurs fois secrétaire d'État et ministre. En 1974, Valéry Giscard d'Estaing le nomme Premier ministre. Deux ans plus tard, dans un contexte de tensions avec l'Élysée, il démissionne et lance le RPR. Toujours élu de Corrèze, il devient maire de Paris et se présente à l'élection présidentielle de 1981, où il arrive troisième et contribue à la défaite de Giscard.\nAprès la victoire de la droite aux élections législatives de 1986, il est désigné par François Mitterrand pour exercer à nouveau la fonction de Premier ministre : il est ainsi le premier chef du gouvernement d'une cohabitation sous la Ve République et, par la même occasion, la seule personnalité politique ayant assumé par deux fois la charge de Premier ministre sous ce même régime. Battu au second tour de l’élection présidentielle de 1988 face au président sortant, il reprend la tête de l’opposition, bien que confronté par la suite à la popularité croissante d'Édouard Balladur, Premier ministre à la suite des élections législatives de 1993.",
    "birthPlaces": [
      "clinique Geoffroy Saint-Hilaire"
    ],
    "deathPlaces": [
      "6e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "fonctionnaire",
      "personnalité politique"
    ],
    "educatedAt": [
      "École nationale d'administration",
      "Harvard Summer School",
      "cours Hattemer",
      "Institut d'études politiques de Paris",
      "lycée Carnot",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Union des démocrates pour la République",
      "Parti communiste français",
      "Les Républicains",
      "Union pour la nouvelle République",
      "Rassemblement pour la République",
      "Union pour un mouvement populaire"
    ],
    "positions": [
      {
        "label": "président de la République française",
        "start": "1995-05-17",
        "end": "2007-05-16"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "1995-05-17",
        "end": "2007-05-16"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1995-05-16"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1986-04-03"
      },
      {
        "label": "Premier ministre français",
        "start": "1986-03-20",
        "end": "1988-05-10"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1980-04-28"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "maire de Paris",
        "start": "1977-03-20",
        "end": "1995-05-16"
      },
      {
        "label": "dirigeant de parti politique",
        "start": "1976-12-05",
        "end": "1994-11-04"
      },
      {
        "label": "député français",
        "start": "1976-11-15",
        "end": "1978-04-02"
      },
      {
        "label": "Premier ministre français",
        "start": "1974-05-27",
        "end": "1976-08-25"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1974-02-27",
        "end": "1974-05-28"
      },
      {
        "label": "ministre de l'Agriculture et du Développement rural",
        "start": "1973-04-05",
        "end": "1974-03-01"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1973-05-06"
      },
      {
        "label": "ministre de l'Agriculture et du Développement rural",
        "start": "1972-07-07",
        "end": "1973-03-28"
      },
      {
        "label": "ministre délégué aux Relations avec le Parlement",
        "start": "1971-01-07",
        "end": "1972-07-05"
      },
      {
        "label": "président ou présidente de conseil général",
        "start": "1970-03-15",
        "end": "1979-03-25"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1968-08-12"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-messmer": {
    "wikipediaTitle": "Pierre Messmer",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Messmer",
    "wikidataId": "Q271822",
    "extract": "Pierre Messmer, né le 20 mars 1916 à Vincennes (Seine) et mort le 29 août 2007 à Paris, est un homme d'État français.\nEngagé dans les Forces françaises libres (FFL), il est après-guerre administrateur colonial. Il est impliqué dans la guerre du Cameroun entre 1956 et 1958, où il pilote la contre-insurrection contre les indépendantistes de l'UPC, faisant des milliers de morts. Ministre des Armées du général de Gaulle de 1960 à 1969, il est nommé ministre d'État chargé des Départements et Territoires d'Outre-Mer en 1971.\nPierre Messmer occupe le poste de Premier ministre du 5 juillet 1972 au 27 mai 1974, sous la présidence de Georges Pompidou et l'intérim d'Alain Poher. Il est également maire de Sarrebourg de 1971 à 1989 et président du conseil régional de Lorraine de 1978 à 1979.\nChancelier de l'ordre de la Libération et chancelier honoraire de l'Institut de France, il est membre de l'Académie française de 1999 à sa mort.",
    "birthPlaces": [
      "Vincennes"
    ],
    "deathPlaces": [
      "5e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "administrateur colonial ou administratrice coloniale",
      "personnalité politique",
      "juriste"
    ],
    "educatedAt": [
      "Institut national des langues et civilisations orientales",
      "lycée Louis-le-Grand",
      "école nationale de la France d'outre-mer",
      "lycée Charlemagne"
    ],
    "politicalParties": [
      "Union des démocrates pour la République",
      "Union pour la nouvelle République",
      "Rassemblement pour la République"
    ],
    "positions": [
      {
        "label": "fauteuil 13 de l'Académie française",
        "start": "1999-03-25",
        "end": "2007-08-29"
      },
      {
        "label": "Chancelier de l'Institut de France",
        "start": "1999-01-01",
        "end": "2006-01-01"
      },
      {
        "label": "secrétaire perpétuel de l'Académie des sciences morales et politiques",
        "start": "1995-01-01",
        "end": "1998-01-01"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1980-06-27"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1973-03-15",
        "end": "1973-03-28"
      },
      {
        "label": "Premier ministre français",
        "start": "1972-07-06",
        "end": "1974-05-27"
      },
      {
        "label": "député français"
      },
      {
        "label": "conseiller régional"
      },
      {
        "label": "gouverneur de Côte d'Ivoire"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-raymond-barre": {
    "wikipediaTitle": "Raymond Barre",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Raymond_Barre",
    "wikidataId": "Q12957",
    "extract": "Raymond Barre, né le 12 avril 1924 à Saint-Denis (La Réunion) et mort le 25 août 2007 à Paris, est un économiste, universitaire et homme d'État français.\nProfesseur d'université, il est directeur de cabinet de Jean-Marcel Jeanneney, ministre de l'Industrie dans le gouvernement Debré. De 1967 à 1973, il est vice-président de la Commission européenne, chargé de l'Économie et des Finances.\nEn janvier 1976, sous la présidence de Valéry Giscard d'Estaing, il est nommé ministre du Commerce extérieur du premier gouvernement Jacques Chirac, puis devient Premier ministre. Il met en œuvre une politique monétaire visant à réduire la pression de la monnaie sur les prix et une politique budgétaire stricte du fait de la hausse de la dette. Il démissionne après la victoire de François Mitterrand à l'élection présidentielle de 1981.\nCandidat de l'UDF à l'élection présidentielle de 1988, pour laquelle il est un temps donné favori dans les sondages. Il arrive finalement en troisième position avec 16,5 % des suffrages exprimés, le plaçant derrière Jacques Chirac et François Mitterrand.",
    "birthPlaces": [
      "Saint-Denis"
    ],
    "deathPlaces": [
      "5e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "économiste",
      "personnalité politique",
      "professeur"
    ],
    "educatedAt": [
      "Lycée Leconte-de-Lisle",
      "université de Paris",
      "Institut d'études politiques de Paris",
      "université de La Réunion"
    ],
    "politicalParties": [
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "maire de Lyon",
        "start": "1995-06-25",
        "end": "2001-03-25"
      },
      {
        "label": "président ou présidente",
        "start": "1995-01-01",
        "end": "2001-01-01"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1978-05-03"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1977-03-29",
        "end": "1978-04-05"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1976-08-27",
        "end": "1977-03-30"
      },
      {
        "label": "Premier ministre français",
        "start": "1976-08-26",
        "end": "1981-05-22"
      },
      {
        "label": "président ou présidente",
        "start": "1976-01-01",
        "end": "1976-01-01"
      },
      {
        "label": "commissaire européen aux affaires économiques et monétaires",
        "start": "1967-02-07",
        "end": "1973-01-05"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-robert-fabre": {
    "wikipediaTitle": "Robert Fabre",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Robert_Fabre",
    "wikidataId": "Q3435073",
    "extract": "Robert Fabre, né le 21 décembre 1915 à Villefranche-de-Rouergue (Aveyron) et mort le 23 décembre 2006 dans la même ville, est un pharmacien et homme politique français. Il est le premier président du Mouvement des radicaux de gauche (MRG), médiateur de la République et membre du Conseil constitutionnel.",
    "birthPlaces": [
      "Villefranche-de-Rouergue"
    ],
    "deathPlaces": [
      "Villefranche-de-Rouergue"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "pharmacien ou pharmacienne",
      "pharmacien expert",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti républicain, radical et radical-socialiste",
      "Parti radical de gauche"
    ],
    "positions": [
      {
        "label": "membre du Conseil constitutionnel",
        "start": "1986-03-01",
        "end": "1995-03-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1980-11-30"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1973-04-01"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1967-04-02"
      },
      {
        "label": "maire de Villefranche-de-Rouergue",
        "start": "1953-01-01",
        "end": "1983-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-michel-crepeau": {
    "wikipediaTitle": "Michel Crépeau",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Michel_Cr%C3%A9peau",
    "wikidataId": "Q348474",
    "extract": "Michel Crépeau, né le 30 octobre 1930 à Fontenay-le-Comte (Vendée) et mort le 30 mars 1999 à Paris dans le 14e arrondissement, est un avocat et homme politique français. Il est maire de La Rochelle de 1971 jusqu'à sa mort, et plusieurs fois ministre de 1981 à 1986. Candidat à l’élection présidentielle de 1981 pour le Parti radical de gauche, il obtient 2,21 % des suffrages exprimés.",
    "birthPlaces": [
      "Fontenay-le-Comte"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "juriste",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "Faculté de droit de Bordeaux"
    ],
    "politicalParties": [
      "Parti républicain, radical et radical-socialiste"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "1999-03-30"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1986-02-19",
        "end": "1986-03-20"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1981-07-23"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "ministre de l'Environnement"
      },
      {
        "label": "ministre du Commerce"
      },
      {
        "label": "conseiller général"
      },
      {
        "label": "maire de La Rochelle"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-lionel-jospin": {
    "wikipediaTitle": "Lionel Jospin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Lionel_Jospin",
    "wikidataId": "Q187099",
    "extract": "Lionel Jospin, né le 12 juillet 1937 à Meudon (Seine-et-Oise) et mort le 22 mars 2026 dans le 15e arrondissement de Paris, est un homme d'État français. Figure du Parti socialiste (PS) jusqu'aux années 2000, il est notamment Premier ministre du 2 juin 1997 au 6 mai 2002.\nAprès avoir étudié à Sciences Po Paris et à l'École nationale d'administration (ENA), il mène une carrière dans la diplomatie.\nMembre de l'Organisation communiste internationaliste (OCI) avant de rejoindre le PS, il est élu député en 1981. Il occupe les fonctions de premier secrétaire du PS jusqu'en 1988, puis celles de ministre d'État, ministre de l'Éducation nationale, dans les gouvernements Rocard I et II et Cresson, entre 1988 et 1992.\nDésigné candidat à l'élection présidentielle de 1995 à l'issue d'une primaire — une première de ce type sous la Cinquième République — et de deux septennats Mitterrand, il est battu par Jacques Chirac, recueillant 47,4 % des voix au second tour. Il redevient dans la foulée premier secrétaire du Parti socialiste.\nLa victoire de la gauche aux élections législatives de 1997 lui permet de devenir Premier ministre pour une troisième cohabitation.",
    "birthPlaces": [
      "Meudon"
    ],
    "deathPlaces": [
      "15e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "témoin filmé",
      "personnalité politique",
      "chargé ou chargée de cours",
      "chef de gouvernement"
    ],
    "educatedAt": [
      "lycée Charlemagne",
      "lycée Janson-de-Sailly",
      "École nationale d'administration",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Parti socialiste"
    ],
    "positions": [
      {
        "label": "membre du Conseil constitutionnel",
        "start": "2014-12-18",
        "end": "2019-02-21"
      },
      {
        "label": "Premier ministre français",
        "start": "1997-06-03",
        "end": "2002-05-06"
      },
      {
        "label": "premier secrétaire du Parti socialiste",
        "start": "1995-10-14",
        "end": "1997-06-02"
      },
      {
        "label": "ministre de l'Éducation nationale",
        "start": "1988-05-12",
        "end": "1992-04-02"
      },
      {
        "label": "ministre de la Jeunesse et des Sports",
        "start": "1988-05-12",
        "end": "1991-05-16"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1988-05-12"
      },
      {
        "label": "premier secrétaire du Parti socialiste",
        "start": "1981-01-24",
        "end": "1988-05-14"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-pierre-soisson": {
    "wikipediaTitle": "Jean-Pierre Soisson",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Pierre_Soisson",
    "wikidataId": "Q603262",
    "extract": "Jean-Pierre Soisson, né le 9 novembre 1934 à Auxerre (Yonne), où il est mort le 27 février 2024, est un homme politique français. Figure de la droite, il est notamment plusieurs fois ministre, député de l'Yonne et maire d'Auxerre.",
    "birthPlaces": [
      "Auxerre"
    ],
    "deathPlaces": [
      "Auxerre"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écrivain ou écrivaine",
      "maire",
      "ministre",
      "personnalité politique"
    ],
    "educatedAt": [
      "École nationale d'administration"
    ],
    "politicalParties": [
      "Démocratie libérale",
      "républicains indépendants",
      "Union pour un mouvement populaire",
      "Union pour la démocratie française",
      "Parti républicain"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-06-19"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "président du conseil régional de Bourgogne-Franche-Comté",
        "start": "1998-01-01",
        "end": "2004-01-01"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "président ou présidente",
        "start": "1996-01-01",
        "end": "1998-01-01"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "ministre de l'Agriculture et du Développement rural",
        "start": "1992-10-02",
        "end": "1993-03-29"
      },
      {
        "label": "président du conseil régional de Bourgogne-Franche-Comté",
        "start": "1992-01-01",
        "end": "1993-01-01"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1988-06-29"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1978-05-05"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1974-07-08"
      },
      {
        "label": "maire d'Auxerre",
        "start": "1971-01-01",
        "end": "1988-01-01"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1973-04-01"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-leotard": {
    "wikipediaTitle": "François Léotard",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_L%C3%A9otard",
    "wikidataId": "Q1394083",
    "extract": "François Léotard, né le 26 mars 1942 à Cannes (Alpes-Maritimes) et mort le 25 avril 2023 à Fréjus, est un homme politique français.\nDéputé du Var et maire de Fréjus pendant près de vingt ans, il est ministre de la Culture et de la Communication de 1986 à 1988 et ministre d'État, ministre de la Défense de 1993 à 1995. Il est président du Parti républicain, puis de l'UDF de 1996 à 1998.\nIl est condamné en 2004 pour avoir détourné, en 1995, un fonds public de Matignon afin de financer sa propre formation politique, le Parti républicain. En 2021, jugé par la Cour de justice de la République pour complicité d’abus de biens sociaux dans le cadre du volet financier de l’affaire Karachi, il est condamné à deux ans d’emprisonnement avec sursis et 100 000 euros d'amende.",
    "birthPlaces": [
      "Cannes"
    ],
    "deathPlaces": [
      "Fréjus"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "avocat ou avocate",
      "écrivain ou écrivaine"
    ],
    "educatedAt": [
      "lycée Charlemagne",
      "École nationale d'administration"
    ],
    "politicalParties": [
      "Union pour la démocratie française",
      "Parti républicain"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2001-12-27"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-02"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1992-07-01"
      },
      {
        "label": "ministre de la Culture",
        "start": "1986-03-20",
        "end": "1988-05-10"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "maire de Fréjus",
        "start": "1977-03-25",
        "end": "1997-08-08"
      },
      {
        "label": "conseiller général"
      },
      {
        "label": "conseiller régional de Provence-Alpes-Côte d'Azur"
      },
      {
        "label": "député européen"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-michel-poniatowski": {
    "wikipediaTitle": "Michel Poniatowski",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Michel_Poniatowski",
    "wikidataId": "Q3310623",
    "extract": "Michel Poniatowski, né le 16 mai 1922 dans le 7e arrondissement de Paris et mort le 15 janvier 2002 au Rouret (Alpes-Maritimes), est un résistant, haut fonctionnaire et homme politique français.\nIl est député du Val-d'Oise et maire de L'Isle-Adam, ministre de la Santé publique et de la Sécurité sociale de 1973 à 1974, ministre d'État, ministre de l'Intérieur de 1974 à 1977. Il est ensuite député européen et sénateur du Val-d'Oise.",
    "birthPlaces": [
      "7e arrondissement de Paris"
    ],
    "deathPlaces": [
      "Le Rouret"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "résistant ou résistante (France)",
      "maire",
      "ministre",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Saint-Louis-de-Gonzague",
      "École nationale d'administration",
      "cours Hattemer"
    ],
    "politicalParties": [
      "républicains indépendants",
      "Union pour la démocratie française",
      "Parti républicain"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1989-07-24"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1984-07-23"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1976-08-25",
        "end": "1977-03-29"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1974-05-27",
        "end": "1976-08-25"
      },
      {
        "label": "député du Val-d'Oise",
        "start": "1967-04-03",
        "end": "1973-05-05"
      },
      {
        "label": "maire de L'Isle-Adam"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jacques-duhamel": {
    "wikipediaTitle": "Jacques Duhamel",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jacques_Duhamel",
    "wikidataId": "Q3158801",
    "extract": "Jacques Duhamel, né le 24 septembre 1924 à Paris où il est mort le 8 juillet 1977, est un résistant et homme politique français.\nMinistre de l'Agriculture dans le gouvernement de Jacques Chaban-Delmas de 1969 à 1971, il devient ensuite ministre des Affaires culturelles, fonction qu'il conserve jusqu'en 1973 au sein du premier gouvernement de Pierre Messmer.",
    "birthPlaces": [
      "6e arrondissement de Paris"
    ],
    "deathPlaces": [
      "5e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "résistant ou résistante (France)"
    ],
    "educatedAt": [
      "École nationale d'administration"
    ],
    "politicalParties": [
      "centre démocratie et progrès"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1977-07-08"
      },
      {
        "label": "ministre de la Culture",
        "start": "1972-07-06",
        "end": "1973-03-28"
      },
      {
        "label": "ministre de la Culture",
        "start": "1971-01-07",
        "end": "1972-07-05"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1969-06-22",
        "end": "1971-01-07"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1969-07-22"
      },
      {
        "label": "maire de Dole",
        "start": "1968-01-01",
        "end": "1976-01-01"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1967-04-02"
      },
      {
        "label": "président-directeur général ou présidente-directrice générale",
        "start": "1961-01-01",
        "end": "1963-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-mehaignerie": {
    "wikipediaTitle": "Pierre Méhaignerie",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_M%C3%A9haignerie",
    "wikidataId": "Q895873",
    "extract": "Pierre Méhaignerie, né le 4 mai 1939 à Balazé (Ille-et-Vilaine), est un homme politique français. Il est notamment ministre d'État, garde des Sceaux, ministre de la Justice de 1993 à 1995, et maire de Vitré de 1977 à 2020.",
    "birthPlaces": [
      "Balazé"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "pensionné",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Union pour la démocratie française",
      "Union pour un mouvement populaire"
    ],
    "positions": [
      {
        "label": "maire de Vitré",
        "start": "2014-03-29",
        "end": "2020-05-24"
      },
      {
        "label": "conseiller municipal de Vitré",
        "start": "2014-03-23",
        "end": "2020-05-17"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-06-19"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "député français",
        "start": "1995-06-18",
        "end": "1997-04-21"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-01"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "1993-03-29",
        "end": "1995-05-17"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1986-04-02"
      },
      {
        "label": "conseiller régional de Bretagne",
        "start": "1986-03-17",
        "end": "1988-06-09"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député européen",
        "start": "1979-07-09",
        "end": "1979-07-12"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1978-04-05",
        "end": "1981-05-21"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1978-05-05"
      },
      {
        "label": "ministre de l'Agriculture",
        "start": "1977-03-30",
        "end": "1978-03-31"
      },
      {
        "label": "maire de Vitré",
        "start": "1977-03-25",
        "end": "2014-03-28"
      },
      {
        "label": "conseiller général",
        "start": "1976-03-17",
        "end": "2001-03-18"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1976-02-12"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-pierre-fourcade": {
    "wikipediaTitle": "Jean-Pierre Fourcade",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Pierre_Fourcade",
    "wikidataId": "Q1685206",
    "extract": "Jean-Pierre Fourcade, né le 18 octobre 1929 à Marmande, est une personnalité politique française membre de l'UMP.",
    "birthPlaces": [
      "Marmande"
    ],
    "deathPlaces": [
      "Boulogne-Billancourt"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "École nationale d'administration",
      "Institut d'études politiques de Bordeaux"
    ],
    "politicalParties": [
      "Union pour un mouvement populaire",
      "républicains indépendants",
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "maire de Boulogne-Billancourt",
        "start": "1995-06-25",
        "end": "2007-03-07"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1977-09-25",
        "end": "2011-09-30"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1974-05-28",
        "end": "1976-08-27"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-marie-le-pen": {
    "wikipediaTitle": "Jean-Marie Le Pen",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Marie_Le_Pen",
    "wikidataId": "Q7177",
    "extract": "Jean-Marie Le Pen ([ ʒɑ̃maʁi ləpɛn] ), né le 20 juin 1928 à La Trinité-sur-Mer (Morbihan) et mort le 7 janvier 2025 à Garches (Hauts-de-Seine), est un homme politique français d'extrême droite de la Quatrième et de la Cinquième République.\nIl sert dans l'armée lors des guerres d'Indochine et d'Algérie, et commence un parcours politique dans les courants poujadistes. Il est député du département de la Seine de 1956 à 1962, puis dirige la campagne de Jean-Louis Tixier-Vignancour pour l'élection présidentielle de 1965. Sollicité par le mouvement nationaliste Ordre nouveau, il participe en 1972 à la fondation du Front national (FN), dont il prend la présidence.\nClassé à l'extrême droite, il fait de la critique de l'immigration son principal axe de campagne et fait émerger le Front national sur le devant de la scène politique dans les années 1980. Élu député à Paris lors des élections législatives de 1986, il préside le groupe FN-RN à l'Assemblée nationale sous la VIIIe législature de la Ve République. Il est député européen à partir de 1984 et plusieurs fois élu local (conseiller municipal du 20e arrondissement de Paris, conseiller régional d'Île-de-France puis de Provence-Alpes-Côte d'Azur).\nÀ cinq reprises, il est candidat à une élection présidentielle.",
    "birthPlaces": [
      "La Trinité-sur-Mer"
    ],
    "deathPlaces": [
      "Garches"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "faculté de droit de Paris",
      "université Paris-Panthéon-Assas"
    ],
    "politicalParties": [
      "Comités Jeanne",
      "Front national",
      "Front national pour l'Algérie française"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "2014-07-01",
        "end": "2019-07-01"
      },
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-07-13"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2003-04-10"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1999-07-19"
      },
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1994-07-18"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1989-07-24"
      },
      {
        "label": "sénateur de la Communauté",
        "start": "1959-07-08",
        "end": "1961-03-16"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pascal-gauchon": {
    "wikipediaTitle": "Pascal Gauchon",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pascal_Gauchon",
    "wikidataId": "Q3367423",
    "extract": "Pascal Gauchon, né le 24 mars 1950 à Paris, est un éditeur et géopolitologue français.\nAncien homme politique d'extrême droite, il est dans sa jeunesse secrétaire général du Parti des forces nouvelles (1974-1978).\nIl devient par la suite directeur de Prépasup, directeur de collection aux Presses universitaires de France et auteur d'une trentaine d'ouvrages de géopolitique.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "directeur ou directrice de collection",
      "géopolitologue",
      "éditeur ou éditrice",
      "personnalité politique",
      "officier de réserve"
    ],
    "educatedAt": [
      "École normale supérieure",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Ordre nouveau",
      "Parti des forces nouvelles"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "2008-01-01",
        "end": "2019-01-01"
      },
      {
        "label": "directeur ou directrice",
        "start": "1985-01-01",
        "end": "2011-01-01"
      },
      {
        "label": "secrétaire général ou secrétaire générale",
        "start": "1974-01-01",
        "end": "1978-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-arlette-laguiller": {
    "wikipediaTitle": "Arlette Laguiller",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Arlette_Laguiller",
    "wikidataId": "Q12942",
    "extract": "Arlette Laguiller, née le 18 mars 1940 à Paris, est une femme politique française d'extrême gauche.\nMilitante syndicale d'inspiration trotskiste, elle intègre la direction de Lutte ouvrière (LO), dont elle devient porte-parole en 1973.\nEn 1974, elle devient la première femme à se présenter à une élection présidentielle sous la Cinquième République. Six fois candidate entre 1974 et 2007 avec des scores allant de 1,3 à 5,7 % des voix, elle détient en 2026 le record du nombre de candidatures présidentielles en France.\nConnue pour son adresse traditionnelle « travailleuses, travailleurs », elle représente son parti à de nombreuses autres élections. Elle est conseillère municipale des Lilas (Seine-Saint-Denis) de 1995 à 2001, conseillère régionale d'Île-de-France de 1998 à 2004 et députée européenne de 1999 à 2004.",
    "birthPlaces": [
      "14e arrondissement de Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "syndicaliste",
      "écrivain ou écrivaine",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti socialiste unifié",
      "Lutte ouvrière"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2004-07-19"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-simone-veil": {
    "wikipediaTitle": "Simone Veil",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Simone_Veil",
    "wikidataId": "Q298180",
    "extract": "Simone Veil (/simɔn vɛj/ ), née Jacob le 13 juillet 1927 à Nice (Alpes-Maritimes) et morte le 30 juin 2017 à Paris 7e, est une magistrate et femme d'État française.\nNée dans une famille juive aux origines lorraines, elle est déportée à Auschwitz à l'âge de 16 ans, durant la Shoah, où elle perd son père, son frère et sa mère. Rescapée avec ses sœurs Madeleine et Denise, elles aussi déportées, Simone Jacob épouse Antoine Veil en 1946. Après des études de droit et de science politique, elle entre dans la magistrature comme haut fonctionnaire.\nEn 1974, elle est nommée ministre de la Santé par le président Valéry Giscard d'Estaing, qui la charge de faire adopter la loi dépénalisant le recours à l'interruption volontaire de grossesse (IVG), loi qui sera ensuite couramment désignée comme la « loi Veil ». Elle apparaît dès lors comme une icône de la lutte contre la discrimination des femmes en France.\nElle est la première présidente du Parlement européen — et la première personne élue à ce poste au suffrage universel —, une fonction qu’elle occupe de 1979 à 1982. De façon générale, elle est considérée comme l'une des promotrices de la réconciliation franco-allemande et de la construction européenne.",
    "birthPlaces": [
      "Nice"
    ],
    "deathPlaces": [
      "Paris"
    ],
    "citizenships": [
      "Belgique",
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "magistrat ou magistrate",
      "juge",
      "auteur",
      "personnalité politique",
      "juriste"
    ],
    "educatedAt": [
      "faculté de droit de Paris",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "fauteuil 13 de l'Académie française",
        "start": "2008-11-20",
        "end": "2017-06-30"
      },
      {
        "label": "membre du Conseil constitutionnel",
        "start": "1998-03-01",
        "end": "2007-03-01"
      },
      {
        "label": "ministère de la Santé et de la Prévention",
        "start": "1993-03-29",
        "end": "1995-05-18"
      },
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1993-03-30"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1989-07-24"
      },
      {
        "label": "président du Parlement européen",
        "start": "1979-07-17",
        "end": "1982-01-19"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1984-07-23"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1993-03-30"
      },
      {
        "label": "ministère de la Santé et de la Prévention",
        "start": "1974-05-27",
        "end": "1979-07-04"
      },
      {
        "label": "secrétaire général ou secrétaire générale",
        "start": "1970-01-01",
        "end": "1974-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-gisele-halimi": {
    "wikipediaTitle": "Gisèle Halimi",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Gis%C3%A8le_Halimi",
    "wikidataId": "Q457705",
    "extract": "Gisèle Halimi /ʒi.zɛl a.li.mi/ (arabe : جيزيل حليمي, jayzil halimi), née Zeiza Taïeb (زايزا الطيب, zāyzā alṭayib) le 27 juillet 1927 à La Goulette en Tunisie et morte le 28 juillet 2020 à Paris 7e, est une avocate, militante féministe et femme politique franco-tunisienne.\nEn tant qu'avocate, elle défend à partir des années 1950 des militants de l'indépendance de l'Algérie, alors française, dont notamment des membres du Front de libération nationale (FLN). À partir de l'année 1960, elle assure la défense de l'activiste et militante Djamila Boupacha, accusée de tentative d'assassinat puis torturée et violée, en détention, par des soldats français. Aux côtés de Simone de Beauvoir, elle médiatise ce procès afin de mettre en lumière les méthodes de torture de l'armée française au moment de la guerre d'Algérie.\nFigure du féminisme en France, elle est la seule avocate signataire du manifeste des 343 de 1971 réunissant des femmes qui déclarent avoir déjà avorté et réclament le libre accès à l'avortement, alors réprimé en France. Dans la foulée, elle fonde le mouvement Choisir la cause des femmes, aux côtés notamment de Simone de Beauvoir et Jean Rostand. En 1972, lors du procès de Bobigny, son action en tant qu'avocate de femmes accusées d'avortement illégal permet l'acquittement de trois des accusées ainsi qu'un sursis pour la quatrième, et contribue à l'évolution vers la loi Veil sur l'interruption volontaire de grossesse, en 1975.\nDe même, sa stratégie de défense médiatisée de deux jeunes femmes victimes en 1974 d'un viol collectif jugé en 1978, Anne Tonglet et Araceli Castellano, contribue à l'adoption d'une nouvelle loi en 1980, définissant clairement l'attentat à la pudeur et le viol, permettant de reconnaître ce dernier comme un crime, alors qu'il était traité jusque-là le plus souvent comme un délit en droit français.",
    "birthPlaces": [
      "La Goulette"
    ],
    "deathPlaces": [
      "7e arrondissement de Paris"
    ],
    "citizenships": [
      "protectorat français de Tunisie",
      "France",
      "Tunisie"
    ],
    "occupations": [
      "personnalité politique",
      "essayiste",
      "juriste",
      "avocat ou avocate",
      "militant des droits civiques"
    ],
    "educatedAt": [
      "lycée de la rue de Russie",
      "Institut d'études politiques de Paris",
      "faculté de droit et des sciences économiques de Paris",
      "lycée Carnot de Tunis"
    ],
    "politicalParties": [
      "groupe socialiste à l'Assemblée nationale"
    ],
    "positions": [
      {
        "label": "délégué permanent de la France auprès de l'UNESCO",
        "start": "1985-04-13",
        "end": "1986-09-01"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1984-09-10"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-simone-de-beauvoir": {
    "wikipediaTitle": "Simone de Beauvoir",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Simone_de_Beauvoir",
    "wikidataId": "Q7197",
    "extract": "Simone de Beauvoir (/simɔn də bovwaʁ/ ), née le 9 janvier 1908 dans le 6e arrondissement de Paris et morte le 14 avril 1986 dans le 14e arrondissement, est une philosophe, romancière, mémorialiste, professeur et essayiste française.\nEn 1954, après plusieurs romans dont L'Invitée (1943) et Le Sang des autres (1945), elle obtient le prix Goncourt pour Les Mandarins. Puis, de 1958 (Mémoires d'une jeune fille rangée) et jusqu'à la fin de sa vie (La Cérémonie des adieux, 1981), Beauvoir rédigea une œuvre monumentale composée de mémoires et de récits autobiographiques comprenant également La Force de l'âge (1960), La Force des choses (1963), Une mort très douce (1964), Tout compte fait (1972), la distinguant alors parmi les plus importantes mémorialistes du XXe siècle. Ses œuvres sont parmi les plus lues dans le monde.\nSouvent considérée comme une théoricienne majeure du féminisme, notamment grâce à son magnum opus Le Deuxième Sexe publié en 1949, ouvrage encyclopédique s'inscrivant dans le courant philosophique de la phénoménologie et en particulier dans son moment existentialiste, Simone de Beauvoir a ardemment participé au Mouvement de libération des femmes dans les années 1970.\nElle a partagé sa vie avec le philosophe Jean-Paul Sartre. Leurs philosophies, bien que très proches, ne sauraient être confondues.\nDans les années 2010, son aura de féministe est écornée par une réévaluation controversée du trio amoureux ambigu formé entre elle-même, ses élèves et Sartre.",
    "birthPlaces": [
      "6e arrondissement de Paris"
    ],
    "deathPlaces": [
      "14e arrondissement de Paris"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "militant ou militante politique",
      "philosophe",
      "journaliste",
      "autobiographe",
      "philosophe politique",
      "diariste",
      "écrivain ou écrivaine",
      "romancier ou romancière",
      "féministe",
      "critique littéraire"
    ],
    "educatedAt": [
      "université de Paris",
      "lycée Fénelon",
      "Institut catholique de Paris",
      "Sorbonne"
    ],
    "politicalParties": [],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-olivier-rolin": {
    "wikipediaTitle": "Olivier Rolin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Olivier_Rolin",
    "wikidataId": "Q1238602",
    "extract": "Olivier Rolin, né le 17 mai 1947 à Boulogne-Billancourt, est un écrivain français, lauréat notamment du prix Femina en 1994 pour Port-Soudan.",
    "birthPlaces": [
      "Boulogne-Billancourt"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "écrivain ou écrivaine",
      "éditeur ou éditrice",
      "chroniqueur de voyage",
      "romancier ou romancière",
      "auteur ou autrice de non-fiction"
    ],
    "educatedAt": [
      "École normale supérieure",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Gauche prolétarienne"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-royer": {
    "wikipediaTitle": "Jean Royer (homme politique)",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean_Royer_(homme_politique)",
    "wikidataId": "Q1685804",
    "extract": "Jean Royer, né le 31 octobre 1920 à Nevers (Nièvre) et mort le 25 mars 2011 à Saint-Avertin (Indre-et-Loire), est un homme politique français.\nConservateur et gaulliste, il est député en Indre-et-Loire de 1958 à 1997, maire de Tours de 1959 à 1995, ministre sous les deux derniers gouvernements Pierre Messmer (1973-1974) et candidat à l'élection présidentielle de 1974.",
    "birthPlaces": [
      "Nevers"
    ],
    "deathPlaces": [
      "Saint-Avertin"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Union pour la nouvelle République",
      "Rassemblement du peuple français"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "député français",
        "start": "1988-06-06",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député français",
        "start": "1976-05-09",
        "end": "1978-04-02"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1973-05-05"
      },
      {
        "label": "député français",
        "start": "1968-07-11",
        "end": "1973-04-01"
      },
      {
        "label": "député français",
        "start": "1967-04-03",
        "end": "1968-05-30"
      },
      {
        "label": "député français",
        "start": "1962-12-06",
        "end": "1967-04-02"
      },
      {
        "label": "maire de Tours",
        "start": "1959-01-01",
        "end": "1995-01-01"
      },
      {
        "label": "député français",
        "start": "1958-12-09",
        "end": "1962-10-09"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-daniel-gluckstein": {
    "wikipediaTitle": "Daniel Gluckstein",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Daniel_Gluckstein",
    "wikidataId": "Q926836",
    "extract": "Daniel Gluckstein, né le 3 mars 1953 à Paris, est un homme politique trotskiste français.\nIl est secrétaire national du Parti des travailleurs (PT) de 1991 à 2008. Candidat du PT à l'élection présidentielle de 2002, il finit en dernière position du premier tour avec 0,47 % des voix.\nAprès avoir été l'un des secrétaires nationaux du Parti ouvrier indépendant (POI) et coordinateur de l'Entente internationale des travailleurs et des peuples, il participe en 2015 à la fondation du Parti ouvrier indépendant démocratique (POID) — renommé Parti des travailleurs (PT) en 2023 — dont il est secrétaire national.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti des travailleurs",
      "Parti ouvrier indépendant"
    ],
    "positions": [
      {
        "label": "secrétaire général ou secrétaire générale",
        "start": "2015-01-01"
      },
      {
        "label": "secrétaire général ou secrétaire générale",
        "end": "2015-11-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-brice-lalonde": {
    "wikipediaTitle": "Brice Lalonde",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Brice_Lalonde",
    "wikidataId": "Q2512092",
    "extract": "Brice Lalonde, né le 10 février 1946 à Neuilly-sur-Seine (Hauts-de-Seine), est un militant écologiste et homme politique français.\nAprès avoir été candidat à l'élection présidentielle de 1981, où il obtient 3,9 % des suffrages exprimés au premier tour, il cofonde le parti centriste Génération écologie. Il est secrétaire d'État puis ministre de l'Environnement de 1988 à 1992 et maire de Saint-Briac-sur-Mer (Ille-et-Vilaine) de 1995 à 2008.\nIl est également, de 2011 à 2012, coordonnateur exécutif de la Conférence des Nations unies sur le développement durable (Rio+20), après des fonctions d'ambassadeur chargé des négociations internationales sur le changement climatique de 2007 à 2010.",
    "birthPlaces": [
      "Neuilly-sur-Seine"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti socialiste unifié",
      "Génération écologie"
    ],
    "positions": [
      {
        "label": "maire de Saint-Briac-sur-Mer",
        "start": "1995-06-18",
        "end": "2008-03-16"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-noel-mamere": {
    "wikipediaTitle": "Noël Mamère",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/No%C3%ABl_Mam%C3%A8re",
    "wikidataId": "Q965109",
    "extract": "Noël Mamère, né le 25 décembre 1948 à Libourne (Gironde), est un ancien journaliste et homme politique français, partisan d'une écologie politique.\nMembre des Verts, puis d'Europe Écologie Les Verts (EELV) jusqu'en 2013, il est maire de Bègles de 1989 à 2017 et député de 1997 à 2017.\nCandidat à l'élection présidentielle française de 2002, il obtient 5,25 % des suffrages, soit le meilleur score réalisé par un candidat des Verts ou d'Europe Écologie Les Verts lors d'un scrutin présidentiel.\nLe 5 juin 2004, il célèbre le premier mariage entre personnes de même sexe de l'histoire de France.",
    "birthPlaces": [
      "Libourne"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "journaliste",
      "maire",
      "personnalité politique",
      "présentateur ou présentatrice de journal"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "Institut d'études politiques de Bordeaux"
    ],
    "politicalParties": [
      "Génération.s",
      "Les Verts",
      "Les Écologistes – Europe Écologie Les Verts",
      "Génération écologie"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2017-06-20"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "2007-10-01",
        "end": "2009-01-26"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-06-19"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1997-08-11"
      },
      {
        "label": "maire",
        "start": "1989-03-20",
        "end": "2017-06-20"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-antoine-waechter": {
    "wikipediaTitle": "Antoine Waechter",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Antoine_Waechter",
    "wikidataId": "Q2856831",
    "extract": "Antoine Waechter, né le 11 février 1949 à Mulhouse (Haut-Rhin), est un homme politique français, membre du Mouvement écologiste indépendant (MEI). Il est le candidat des Verts à l'élection présidentielle de 1988 et député européen de 1989 à 1991.",
    "birthPlaces": [
      "Mulhouse"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écologiste",
      "personnalité politique",
      "ingénieurs et cadres techniques d'entreprise"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Mouvement écologiste indépendant"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1991-12-19"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-pierre-mauroy": {
    "wikipediaTitle": "Pierre Mauroy",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Pierre_Mauroy",
    "wikidataId": "Q156511",
    "extract": "Pierre Mauroy, né le 5 juillet 1928 à Cartignies (Nord) et mort le 7 juin 2013 à Clamart (Hauts-de-Seine), est un homme d'État français. Il est député du Nord entre 1973 et 1992, maire de Lille de 1973 à 2001, Premier ministre de 1981 à 1984 et sénateur de 1992 à 2011.",
    "birthPlaces": [
      "Cartignies"
    ],
    "deathPlaces": [
      "Clamart"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "instituteur"
    ],
    "educatedAt": [
      "École normale nationale d'apprentissage"
    ],
    "politicalParties": [
      "Parti socialiste",
      "Section française de l'Internationale ouvrière"
    ],
    "positions": [
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1992-10-02",
        "end": "2011-09-30"
      },
      {
        "label": "premier secrétaire du Parti socialiste",
        "start": "1988-05-14",
        "end": "1992-01-09"
      },
      {
        "label": "Premier ministre français",
        "start": "1981-05-21",
        "end": "1984-07-17"
      },
      {
        "label": "député européen",
        "start": "1979-07-17",
        "end": "1980-03-06"
      },
      {
        "label": "maire de Lille",
        "start": "1973-01-08",
        "end": "2001-03-25"
      },
      {
        "label": "député français"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-andre-lajoinie": {
    "wikipediaTitle": "André Lajoinie",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Andr%C3%A9_Lajoinie",
    "wikidataId": "Q520481",
    "extract": "André Lajoinie, né le 26 décembre 1929 à Chasteaux (Corrèze) et mort le 26 novembre 2024 à Cusset (Allier), est un homme politique et directeur de presse écrite français.\nMembre du Parti communiste français, il est notamment conseiller régional d’Auvergne, député de l'Allier et président du groupe communiste à l'Assemblée nationale. Soutenu par le PCF, il est candidat à l'élection présidentielle de 1988, où il réunit 6,76 % des suffrages exprimés.",
    "birthPlaces": [
      "Chasteaux"
    ],
    "deathPlaces": [
      "Cusset"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "agriculteur ou agricultrice",
      "syndicaliste",
      "fonctionnaire",
      "syndicat professionnel"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-pierre-chevenement": {
    "wikipediaTitle": "Jean-Pierre Chevènement",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Pierre_Chev%C3%A8nement",
    "wikidataId": "Q736502",
    "extract": "Jean-Pierre Chevènement [ ʒɑ̃pjɛʁ ʃəvɛnmɑ̃], né le 9 mars 1939 à Belfort (Territoire de Belfort), est un haut fonctionnaire et homme politique français.\nDéputé pendant sept législatures, maire de Belfort durant plus de vingt ans et sénateur de 2008 à 2014, il a par ailleurs longtemps été élu régional de Franche-Comté, dont il a brièvement présidé le conseil régional.\nSoutien de François Mitterrand lors de l'élection présidentielle de 1981, il est nommé ministre de l'Enseignement supérieur, de la Recherche et de l'Industrie dans les deux gouvernements dirigés par Pierre Mauroy avant de devenir ministre de l'Éducation nationale dans le gouvernement Fabius.\nAu terme de la première cohabitation, il est nommé ministre de la Défense par Michel Rocard, de 1988 à 1991, puis, sous la troisième cohabitation, ministre de l'Intérieur par Lionel Jospin entre 1997 et l'an 2000.\nLongtemps membre du Parti socialiste, tenant d'une ligne anti-libérale et souverainiste, il fait campagne contre le traité de Maastricht, en faveur du « non » lors du référendum de 2005 et dénonce le traité de Lisbonne ratifié par le Congrès réuni à Versailles par le président Sarkozy en février 2008. À l'origine du Mouvement des citoyens (MDC) et du Mouvement républicain et citoyen (MRC), il se présente à l'élection présidentielle de 2002 sur une ligne qualifiée de souverainiste, recueillant 5,33 % des voix.",
    "birthPlaces": [
      "Belfort"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "École nationale d'administration",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Refondation républicaine",
      "Section française de l'Internationale ouvrière",
      "Parti socialiste"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "2016-01-01"
      },
      {
        "label": "député français",
        "start": "2000-10-22",
        "end": "2002-06-18"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1998-12-30",
        "end": "2000-08-29"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "1997-07-04"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1997-06-04",
        "end": "1998-09-03"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "député français",
        "start": "1991-06-10",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1988-07-29"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "maire de Belfort",
        "start": "1983-03-13",
        "end": "1997-06-04"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1981-07-24"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "député français",
        "start": "1973-04-02",
        "end": "1978-04-02"
      },
      {
        "label": "ministre de la Défense"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      },
      {
        "label": "ministre de l'Éducation nationale"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marie-noelle-lienemann": {
    "wikipediaTitle": "Marie-Noëlle Lienemann",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marie-No%C3%ABlle_Lienemann",
    "wikidataId": "Q461454",
    "extract": "Marie-Noëlle Lienemann, née le 12 juillet 1951 à Belfort, est une femme politique française.\nMembre du Parti socialiste à partir de 1971, elle a occupé plusieurs mandats locaux (adjointe au maire d’Hénin-Beaumont et de Massy, conseillère régionale du Nord-Pas-de-Calais, conseillère générale de l’Essonne, maire d’Athis-Mons) et a également été députée, députée européenne, ministre déléguée au Logement et au Cadre de vie dans le gouvernement de Pierre Bérégovoy, secrétaire d’État au Logement dans le gouvernement de Lionel Jospin.\nElle est sénatrice de 2011 à 2023. En 2018, elle quitte le PS — qu'elle ne trouve plus assez à gauche — pour fonder le parti Gauche républicaine et socialiste (Alternative pour un programme républicain, écologiste et socialiste) et se rapprocher de La France insoumise puis du Parti communiste français.",
    "birthPlaces": [
      "Belfort"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "professeur d'université",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Lakanal",
      "université Paris-Sud",
      "École normale supérieure Paris-Saclay"
    ],
    "politicalParties": [
      "Gauche républicaine et socialiste",
      "Parti socialiste"
    ],
    "positions": [
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2011-09-25",
        "end": "2023-10-01"
      },
      {
        "label": "membre du Conseil économique, social et environnemental",
        "start": "2010-01-01",
        "end": "2011-10-06"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-07-13"
      },
      {
        "label": "conseiller régional du Nord-Pas-de-Calais",
        "start": "2004-03-28",
        "end": "2010-03-14"
      },
      {
        "label": "ministre du Logement",
        "start": "2001-03-27",
        "end": "2002-05-06"
      },
      {
        "label": "vice-président",
        "start": "1999-07-20",
        "end": "2001-03-27"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2001-03-27"
      },
      {
        "label": "député européen",
        "start": "1997-06-06",
        "end": "1999-07-19"
      },
      {
        "label": "maire d'Athis-Mons",
        "start": "1989-03-18",
        "end": "2001-03-11"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1988-06-25"
      },
      {
        "label": "conseiller général",
        "start": "1979-03-25",
        "end": "1988-09-25"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-bayrou": {
    "wikipediaTitle": "François Bayrou",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Bayrou",
    "wikidataId": "Q12963",
    "extract": "François Bayrou ([fʁɑ̃swa bajʁu] ), né le 25 mai 1951 à Bordères (Basses-Pyrénées), est un homme d'État français. Il est Premier ministre du 13 décembre 2024 au 9 septembre 2025.\nProfesseur agrégé de lettres classiques, il s'engage en politique aux côtés de Jean Lecanuet et obtient son premier mandat électif en 1982 en devenant conseiller général. Par la suite, il est élu député des Pyrénées-Atlantiques (1986), président du conseil général (1992), député européen (1999) puis maire de Pau (2014).\nEntre 1993 et 1997, il est ministre de l'Éducation nationale sous les gouvernements Balladur, Juppé I et Juppé II.\nIl préside le Centre des démocrates sociaux (CDS) de 1994 à 1995, Force démocrate (FD) de 1995 à 1998, l'Union pour la démocratie française (UDF) de 1998 à 2007 et le Mouvement démocrate (MoDem) – dont il est le fondateur – depuis 2007. Il s'ancre progressivement au centre alors qu'il était traditionnellement classé au centre droit.\nÀ trois reprises, il se présente à une élection présidentielle. Il arrive en quatrième position en 2002 avec 6,8 % des suffrages exprimés, troisième en 2007 avec 18,6 % et cinquième en 2012 avec 9,1 % des voix.",
    "birthPlaces": [
      "Bordères"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "pensionné",
      "personnalité politique",
      "professeur",
      "maire"
    ],
    "educatedAt": [
      "université Bordeaux-Montaigne"
    ],
    "politicalParties": [
      "Union pour la démocratie française",
      "Mouvement démocrate"
    ],
    "positions": [
      {
        "label": "Premier ministre français",
        "start": "2024-12-13",
        "end": "2025-09-09"
      },
      {
        "label": "Haut-commissariat au plan",
        "start": "2020-09-03"
      },
      {
        "label": "maire de Pau",
        "start": "2020-07-03",
        "end": "2026-01-01"
      },
      {
        "label": "conseiller municipal de Pau",
        "start": "2020-06-28"
      },
      {
        "label": "garde des Sceaux, ministre de la Justice",
        "start": "2017-05-17",
        "end": "2017-06-21"
      },
      {
        "label": "conseiller communautaire de Pau Béarn Pyrénées",
        "start": "2017-01-02"
      },
      {
        "label": "maire de Pau",
        "start": "2014-04-04",
        "end": "2020-07-02"
      },
      {
        "label": "conseiller municipal de Pau",
        "start": "2014-03-30",
        "end": "2020-06-27"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-06-19"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2002-06-16"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "1999-12-21"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-01"
      },
      {
        "label": "ministre de l'Éducation nationale, de l'Enseignement supérieur et de la Recherche",
        "start": "1993-03-29",
        "end": "1997-06-04"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "conseiller général des Pyrénées-Atlantiques",
        "start": "1981-01-01",
        "end": "2002-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alain-madelin": {
    "wikipediaTitle": "Alain Madelin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alain_Madelin",
    "wikidataId": "Q582101",
    "extract": "Alain Madelin, né le 26 mars 1946 dans le 12e arrondissement de Paris, est un homme politique français.\nEngagé à partir de ses seize ans dans des mouvements d'extrême droite, il est l'un des fondateurs du groupe néofasciste et anticommuniste Occident (1964-1968). Après Mai 68, il rejoint les rangs de la FNRI de Valéry Giscard d'Estaing, et fait partie de l'état-major de la campagne de ce dernier pour l'élection présidentielle de 1974. Il prend ensuite la direction du parti, refondé comme Parti républicain en 1977.\nIl devient en 1978 député de la majorité dans la quatrième circonscription d'Ille-et-Vilaine et vice-président du conseil régional de Bretagne. À la faveur de la cohabitation, il accède au poste de ministre de l'Industrie, des Postes et Télécommunications et du Tourisme de 1986 à 1988, puis à celui de ministre des Entreprises et du Développement économique de 1993 à 1995. À l'élection de Jacques Chirac, il devient pendant quelques mois ministre de l'Économie et des Finances.\nEn 1997, il transforme le Parti républicain en Démocratie libérale.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "ministre",
      "personnalité politique"
    ],
    "educatedAt": [
      "université Paris-Panthéon-Assas"
    ],
    "politicalParties": [
      "Parti républicain",
      "Union pour la démocratie française",
      "Union pour un mouvement populaire",
      "républicains indépendants",
      "Occident",
      "Démocratie libérale"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2002-06-16"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "député français",
        "start": "1995-10-09",
        "end": "1997-04-21"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1995-05-17",
        "end": "1995-08-26"
      },
      {
        "label": "maire de Redon",
        "start": "1995-01-01",
        "end": "2001-01-01"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-01"
      },
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1989-11-03"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1986-04-02"
      },
      {
        "label": "député français",
        "start": "1981-07-02",
        "end": "1986-04-01"
      },
      {
        "label": "député français",
        "start": "1978-04-03",
        "end": "1981-05-22"
      },
      {
        "label": "conseiller régional"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-charles-pasqua": {
    "wikipediaTitle": "Charles Pasqua",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Charles_Pasqua",
    "wikidataId": "Q725609",
    "extract": "Charles Pasqua [ ʃaʁl paskwa] est un résistant et un homme politique français, né le 18 avril 1927 à Grasse (Alpes-Maritimes) et mort le 29 juin 2015 à Suresnes (Hauts-de-Seine).\nD'origine corse, il entre dans la Résistance à l'âge de 15 ans. Il débute comme commercial pour la société Ricard, dont il devient le numéro deux en 1967, avant de quitter l’entreprise la même année en raison de son engagement politique croissant.\nFigure montante du gaullisme, il rejoint le controversé Service d'action civique (SAC), acquérant une réputation d’homme de l’ombre. En 1968, il s’implante dans les Hauts-de-Seine, où il devient député, sénateur et président du conseil général : il exerce une autorité telle qu'il est longtemps considéré comme le « parrain » du département.\nEn 1976, il est membre fondateur du Rassemblement pour la République (RPR), dont il incarne l'aile souverainiste et sécuritaire. Il joue un rôle clé dans les campagnes de Jacques Chirac, notamment lors de l'élection présidentielle de 1981, qui voit la défaite de Valéry Giscard d'Estaing. Il est plus en retrait dans les années qui suivent.",
    "birthPlaces": [
      "Grasse"
    ],
    "deathPlaces": [
      "Suresnes"
    ],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Rassemblement du peuple français",
      "Rassemblement pour la France et l'indépendance de l'Europe",
      "Union pour un mouvement populaire",
      "Union des démocrates pour la République",
      "Rassemblement pour la République"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2004-07-19"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1993-03-29",
        "end": "1995-05-11"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "1986-03-20",
        "end": "1988-05-12"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      },
      {
        "label": "député français"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-philippe-de-villiers": {
    "wikipediaTitle": "Philippe de Villiers",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Philippe_de_Villiers",
    "wikidataId": "Q704846",
    "extract": "Philippe Le Jolis de Villiers de Saintignon, dit Philippe de Villiers, né le 25 mars 1949 à Boulogne (Vendée), est un entrepreneur, haut fonctionnaire, homme politique et écrivain français. Il est généralement associé au souverainisme de droite.\nAncien sous-préfet, il crée en Vendée, en 1978, le spectacle nocturne La Cinéscénie, puis un parc à thème, le Puy du Fou. Il quitte l'administration à la suite de l'élection de François Mitterrand à la présidence de la République.\nMembre de l'UDF, Philippe de Villiers exerce la fonction de secrétaire d'État à la Culture de 1986 à 1987, dans le gouvernement Chirac II. Il est ensuite député, président du conseil général de la Vendée et député européen. En 1989, avant la première édition du Vendée Globe, il fait adopter un changement de nom de Globe Challenge à Vendée Globe Challenge. En 2002, il contribue à la survie de la course, lorsque l'organisateur est placé en liquidation judiciaire.\nFondateur en 1994 et président du Mouvement pour la France (MPF), parti politique de droite souverainiste, Philippe de Villiers se présente aux élections présidentielles de 1995 et de 2007, obtenant respectivement 4,74 % et 2,23 % des suffrages exprimés.",
    "birthPlaces": [
      "Boulogne"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "fonctionnaire",
      "essayiste",
      "écrivain ou écrivaine",
      "personnalité politique",
      "théoricien ou théoricienne du complot"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "faculté de droit de Nantes",
      "École nationale d'administration"
    ],
    "politicalParties": [
      "Rassemblement pour la France et l'indépendance de l'Europe",
      "Reconquête",
      "Mouvement pour la France",
      "Parti républicain",
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-07-13"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2004-07-20"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "1999-12-16"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "député européen",
        "start": "1997-01-13",
        "end": "1997-06-15"
      },
      {
        "label": "député européen",
        "start": "1996-11-11",
        "end": "1997-01-12"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1996-11-10"
      },
      {
        "label": "président ou présidente",
        "start": "1994-01-01",
        "end": "2018-01-01"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1994-10-24"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1987-06-02",
        "end": "1988-05-14"
      },
      {
        "label": "conseiller général de la Vendée",
        "start": "1987-01-01",
        "end": "2010-01-01"
      },
      {
        "label": "délégué général",
        "start": "1981-01-01",
        "end": "1984-01-01"
      },
      {
        "label": "sous-préfet de Vendôme",
        "start": "1979-01-01",
        "end": "1981-01-01"
      },
      {
        "label": "directeur de cabinet"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-saint-josse": {
    "wikipediaTitle": "Jean Saint-Josse",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean_Saint-Josse",
    "wikidataId": "Q3174521",
    "extract": "Jean Saint-Josse, né le 22 mars 1944 à Coarraze (Pyrénées-Atlantiques), est un homme politique français.\nAprès avoir été membre du Rassemblement pour la République (RPR), il cofonde le parti Chasse, pêche, nature et traditions (CPNT), qu'il préside de 1998 à 2008.\nSur le plan électif, il est conseiller régional d’Aquitaine de 1992 à 1999 et maire de Coarraze de 1995 à 2020. À la tête de la liste CPNT  aux élections européennes de 1999, il est élu député européen, un mandat qu’il conserve jusqu’en 2004.\nCandidat à l'élection présidentielle de 2002, il obtient 4,23 % des suffrages exprimés.",
    "birthPlaces": [
      "Coarraze"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "pensionné",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Rassemblement pour la République",
      "Le Mouvement de la ruralité"
    ],
    "positions": [
      {
        "label": "maire de Coarraze",
        "start": "2014-03-29",
        "end": "2020-05-27"
      },
      {
        "label": "conseiller communautaire du Pays de Nay",
        "start": "2014-03-23"
      },
      {
        "label": "conseiller municipal de Coarraze",
        "start": "2014-03-23",
        "end": "2020-05-17"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2004-07-19"
      },
      {
        "label": "maire de Coarraze",
        "start": "1995-06-18",
        "end": "2020-05-27"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-bruno-megret": {
    "wikipediaTitle": "Bruno Mégret",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Bruno_M%C3%A9gret",
    "wikidataId": "Q993611",
    "extract": "Bruno Mégret, né le 4 avril 1949 à Paris, est un haut fonctionnaire et homme politique français.\nAprès avoir été membre du Rassemblement pour la République (RPR), puis présidé son propre mouvement, les Comités d'action républicaine (CAR), il rejoint dans les années 1980 le Front national (FN), dont il devient l'un des principaux dirigeants. Après sa rupture avec Jean-Marie Le Pen en 1998, il fonde le Mouvement national républicain (MNR), parti d'extrême droite.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "fonctionnaire",
      "personnalité politique"
    ],
    "educatedAt": [
      "École polytechnique"
    ],
    "politicalParties": [
      "Rassemblement national",
      "Rassemblement pour la République",
      "Mouvement national républicain"
    ],
    "positions": [
      {
        "label": "conseiller municipal de Marseille",
        "start": "2001-01-01",
        "end": "2008-01-01"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1999-07-19"
      },
      {
        "label": "conseiller régional de Provence-Alpes-Côte d'Azur",
        "start": "1992-01-01",
        "end": "2002-01-01"
      },
      {
        "label": "député européen",
        "start": "1989-06-25",
        "end": "1994-07-18"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      },
      {
        "label": "président ou présidente",
        "start": "1982-01-01",
        "end": "1988-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-edouard-balladur": {
    "wikipediaTitle": "Édouard Balladur",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/%C3%89douard_Balladur",
    "wikidataId": "Q12959",
    "extract": "Édouard Balladur , né le 2 mai 1929 à Izmir (Turquie), est un haut fonctionnaire et homme d'État français. Membre des principaux partis gaullistes successifs, il est Premier ministre du 29 mars 1993 au 17 mai 1995.\nConseiller d'État, il intègre en 1964 le cabinet de Georges Pompidou, alors chef du gouvernement, et participe aux accords de Grenelle dans le cadre de Mai 68. Devenu secrétaire général de la présidence de la République en 1973, il est particulièrement influent en raison de la maladie du président Pompidou, qui meurt l’année suivante.\nEn 1986, il est élu député de Paris et nommé dans la foulée ministre d'État, ministre de l'Économie, des Finances et de la Privatisation dans le gouvernement de cohabitation dirigé par Jacques Chirac jusqu’en 1988. Dans un contexte mondial de révolution conservatrice, il conduit une politique libérale, lançant un programme de privatisations après cinq ans de pouvoir socialiste.\nFrançois Mitterrand le nomme Premier ministre à la suite de la large victoire de la coalition de droite aux élections législatives de 1993, inaugurant la deuxième cohabitation. Candidat à l'élection présidentielle de 1995, soutenu par l'Union pour la démocratie française (UDF) et une partie du Rassemblement pour la République (RPR), pour lequel Jacques Chirac se présente également, Édouard Balladur est longtemps favori, avant de finir en troisième position avec 18,58 % des voix, deux points derrière Chirac.",
    "birthPlaces": [
      "Izmir"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "économiste",
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "université Paul-Cézanne - Aix-Marseille III",
      "École nationale d'administration",
      "lycée Thiers"
    ],
    "politicalParties": [
      "Union pour un mouvement populaire",
      "Rassemblement pour la République"
    ],
    "positions": [
      {
        "label": "Premier ministre français",
        "start": "1993-03-29",
        "end": "1995-05-10"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "1986-03-20",
        "end": "1988-05-12"
      },
      {
        "label": "secrétaire général de la présidence de la République",
        "start": "1973-04-05",
        "end": "1974-04-02"
      },
      {
        "label": "député français"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alain-juppe": {
    "wikipediaTitle": "Alain Juppé",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alain_Jupp%C3%A9",
    "wikidataId": "Q215569",
    "extract": "Alain Juppé, né le 15 août 1945 à Mont-de-Marsan (Landes), est un homme d'État français, notamment Premier ministre du 17 mai 1995 au 2 juin 1997 et maire de Bordeaux (successeur de Jacques Chaban-Delmas) entre 1995 et 2019.\nAprès son passage à l'École normale supérieure comme étudiant en lettres classiques, il est admis à l'École nationale d'administration (ENA), dont il sort en rejoignant l'Inspection générale des finances. Collaborateur de Jacques Chirac à partir de 1976, il en est adjoint à la mairie de Paris pendant douze ans. Il se présente ensuite à Bordeaux, dont il est maire à partir de 1995. Député européen et député de Paris entre 1984 et 1993, il est ministre délégué au Budget de 1986 à 1988 et ministre des Affaires étrangères de 1993 à 1995.\nIl est nommé Premier ministre par Jacques Chirac, tout juste élu président, en 1995. Son passage à Matignon est marqué par des grèves d'ampleur contre son plan sur les retraites et la Sécurité sociale, auquel il doit en partie renoncer. Devenu très impopulaire, il quitte la tête du gouvernement après la défaite de la droite aux élections législatives de 1997.",
    "birthPlaces": [
      "Mont-de-Marsan"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "diplomate",
      "chef de gouvernement",
      "ministre",
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "École nationale d'administration",
      "École normale supérieure",
      "lycée Louis-le-Grand"
    ],
    "politicalParties": [
      "Union pour un mouvement populaire",
      "Rassemblement pour la République",
      "Les Républicains"
    ],
    "positions": [
      {
        "label": "membre du Conseil constitutionnel",
        "start": "2019-02-21"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "2011-02-27",
        "end": "2012-05-15"
      },
      {
        "label": "maire de Bordeaux",
        "start": "2006-10-08",
        "end": "2019-01-01"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2004-09-30"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "maire de Bordeaux",
        "start": "1995-06-19",
        "end": "2004-12-13"
      },
      {
        "label": "Premier ministre français",
        "start": "1995-05-17",
        "end": "1997-06-02"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-01"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "1993-03-29",
        "end": "1995-05-17"
      },
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1989-10-15"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1986-04-02"
      },
      {
        "label": "député européen",
        "start": "1984-07-24",
        "end": "1986-03-20"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-robert-hue": {
    "wikipediaTitle": "Robert Hue",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Robert_Hue",
    "wikidataId": "Q937091",
    "extract": "Robert Hue, né le 19 octobre 1946 à Cormeilles-en-Parisis (Seine-et-Oise), est un homme politique français.\nIl est secrétaire national (1994-2001) puis  président (2001-2003) du Parti communiste français (PCF). Il se présente comme candidat communiste aux élections présidentielles de 1995 et de 2002.\nEntre 1997 et 2017, il est parlementaire presque sans discontinuer (député de la 5e circonscription du Val-d'Oise, député européen, sénateur du Val-d'Oise). Il fonde en 2009 le Mouvement unitaire progressiste (MUP), parti associé à la majorité présidentielle de François Hollande.",
    "birthPlaces": [
      "Cormeilles-en-Parisis"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "université de Paris"
    ],
    "politicalParties": [
      "Parti communiste français",
      "Mouvement des progressistes"
    ],
    "positions": [
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2004-10-01",
        "end": "2017-10-01"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "2000-07-31"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "maire de Montigny-lès-Cormeilles",
        "start": "1977-03-21",
        "end": "2009-03-06"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marie-george-buffet": {
    "wikipediaTitle": "Marie-George Buffet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marie-George_Buffet",
    "wikidataId": "Q464029",
    "extract": "Marie-George Buffet, née Kosellek le 7 mai 1949 à Sceaux (Hauts-de-Seine), est une femme politique française.\nElle est ministre de la Jeunesse et des Sports du gouvernement Jospin (1997-2002), secrétaire nationale du Parti communiste français (2001-2010) et candidate à l'élection présidentielle de 2007, où elle obtient 1,93 % des voix. Elle est députée de la Seine-Saint-Denis de 2002 à 2022.",
    "birthPlaces": [
      "Sceaux"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti communiste français"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2022-06-21"
      },
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2017-06-20"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-06-19"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "1997-07-04"
      },
      {
        "label": "ministre de la Jeunesse et des Sports",
        "start": "1997-01-01",
        "end": "2002-01-01"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-dominique-voynet": {
    "wikipediaTitle": "Dominique Voynet",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Dominique_Voynet",
    "wikidataId": "Q268669",
    "extract": "Dominique Voynet [dɔminik vwanɛ], née le 4 novembre 1958 à Montbéliard (Doubs), est une femme politique française, membre des Verts puis des Écologistes.\nElle est candidate des Verts aux élections présidentielles de 1995 (3,3 %) et de 2007 (1,6 %). Après avoir été députée puis ministre de l'Aménagement du territoire et de l'Environnement de 1997 à 2001, elle est sénatrice (2004-2011) et maire de Montreuil (2008-2014).\nMédecin anesthésiste, nommée inspectrice générale des affaires sociales au tour extérieur en 2014, elle est à la tête de l'Agence régionale de santé de Mayotte de 2020 à 2021.\nElle est à nouveau élue députée dans le Doubs lors des élections législatives françaises de 2024.",
    "birthPlaces": [
      "Montbéliard"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "syndicaliste",
      "personnalité politique",
      "cadres de la fonction publique"
    ],
    "educatedAt": [
      "enseignement supérieur",
      "université Marie-et-Louis-Pasteur"
    ],
    "politicalParties": [
      "Les Verts"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2024-07-08"
      },
      {
        "label": "directeur ou directrice",
        "start": "2020-01-01",
        "end": "2021-10-07"
      },
      {
        "label": "inspecteur général des affaires sociales",
        "start": "2014-01-01"
      },
      {
        "label": "maire de Montreuil",
        "start": "2008-03-22",
        "end": "2014-04-04"
      },
      {
        "label": "député français",
        "start": "1997-06-01",
        "end": "1997-07-04"
      },
      {
        "label": "député européen",
        "start": "1991-11-13",
        "end": "1991-12-10"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-olivier-besancenot": {
    "wikipediaTitle": "Olivier Besancenot",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Olivier_Besancenot",
    "wikidataId": "Q12932",
    "extract": "Olivier Besancenot ([ɔlivje bəzɑ̃sno]), né le 18 avril 1974 à Levallois-Perret, est un homme politique français et syndicaliste d'extrême gauche.\nFacteur de profession, il est candidat de la Ligue communiste révolutionnaire (LCR) aux élections présidentielles de 2002 et 2007, où il recueille respectivement 4,25 % et 4,08 % des voix.",
    "birthPlaces": [
      "Levallois-Perret"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "syndicaliste",
      "personnalité politique",
      "facteur ou factrice",
      "auteur",
      "communiste"
    ],
    "educatedAt": [
      "université de Paris",
      "université Paris-Nanterre"
    ],
    "politicalParties": [
      "Nouveau Parti anticapitaliste",
      "Ligue communiste révolutionnaire"
    ],
    "positions": [],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-philippe-poutou": {
    "wikipediaTitle": "Philippe Poutou",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Philippe_Poutou",
    "wikidataId": "Q2631198",
    "extract": "Philippe Poutou ([filip putu] ), né le 14 mars 1967 à Villemomble (alors dans le département de la Seine), est un ouvrier, syndicaliste et homme politique français d'extrême-gauche, devenu par la suite libraire.\nMilitant anticapitaliste, il est successivement engagé dans plusieurs partis d'extrême gauche : Lutte ouvrière (LO), la Ligue communiste révolutionnaire (LCR), le Nouveau Parti anticapitaliste (NPA) et le NPA – L'Anticapitaliste (NPA-A).\nCandidat du NPA à trois reprises à l'élection présidentielle, il recueille 1,15 % des voix en 2012, 1,09 % en 2017, et 0,76 % en 2022.\nOuvrier dans une usine Ford dans la banlieue de Bordeaux, il milite dans les rangs de la CGT contre la fermeture de celle-ci, qui intervient finalement en 2019.\nÀ la tête d'une liste soutenue par le NPA, LFI et des Gilets jaunes lors des élections municipales de 2020 à Bordeaux, il parvient à se qualifier au second tour et est élu au conseil municipal et métropolitain de Bordeaux. Mais candidat du seul NPA-A aux élections municipales de 2026, il ne retrouve pas son mandat de conseiller municipal après l'élimination de sa liste au premier tour.",
    "birthPlaces": [
      "Villemomble"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "travailleur ou travailleuse",
      "ouvriers qualifiés de type industriel",
      "ouvrier ou ouvrière",
      "syndiqué",
      "syndicaliste",
      "personnalité politique"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Nouveau Parti anticapitaliste",
      "Lutte ouvrière",
      "Ligue communiste révolutionnaire"
    ],
    "positions": [
      {
        "label": "conseiller municipal de Bordeaux",
        "start": "2020-06-28"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-luc-melenchon": {
    "wikipediaTitle": "Jean-Luc Mélenchon",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Luc_M%C3%A9lenchon",
    "wikidataId": "Q5829",
    "extract": "Jean-Luc Mélenchon ([ ʒɑ̃ lyk melɑ̃ʃɔ̃] ), né le 19 août 1951 à Tanger (zone internationale de Tanger, auj. au Maroc), est un homme politique français. Il est le fondateur et la figure principale du parti La France insoumise (LFI), souvent considéré comme relevant de la gauche radicale et classé à gauche, voire à l'extrême gauche.\nMembre de l'Organisation communiste internationaliste (OCI) de 1972 à 1976, il entre ensuite au Parti socialiste (PS) et devient successivement conseiller municipal de Massy en 1983, conseiller général de l'Essonne en 1985 et sénateur en 1986. Il est également ministre délégué à l'Enseignement professionnel de 2000 à 2002, dans le gouvernement Jospin. Il fait partie de l'aile gauche du PS jusqu'au congrès de 2008, à l'issue duquel il part fonder le Parti de gauche (PG).\nSous les couleurs du Front de gauche, coalition qui réunit notamment le PG et le Parti communiste français (PCF), il est élu député européen en 2009 et réélu en 2014. Il est le candidat de cette coalition à l'élection présidentielle de 2012, à l'issue de laquelle il arrive en quatrième position, avec 11,1 % des voix.",
    "birthPlaces": [
      "Tanger"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "dessinateur ou dessinatrice de presse",
      "journaliste",
      "enseignant ou enseignante du secondaire",
      "correcteur"
    ],
    "educatedAt": [
      "lycée Pierre-Corneille de Rouen",
      "lycée Regnault",
      "université Marie-et-Louis-Pasteur"
    ],
    "politicalParties": [
      "La France insoumise"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2022-06-21"
      },
      {
        "label": "député européen",
        "start": "2014-07-01",
        "end": "2017-06-18"
      },
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-07-01"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2004-09-26",
        "end": "2010-01-07"
      },
      {
        "label": "ministre délégué",
        "start": "2000-03-27",
        "end": "2002-05-06"
      },
      {
        "label": "conseiller général",
        "start": "1998-03-23",
        "end": "2004-04-02"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1995-09-24",
        "end": "2000-04-27"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "1986-09-28",
        "end": "1995-01-01"
      },
      {
        "label": "conseiller général",
        "start": "1985-03-23",
        "end": "1992-04-02"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-nicolas-sarkozy": {
    "wikipediaTitle": "Nicolas Sarkozy",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Nicolas_Sarkozy",
    "wikidataId": "Q329",
    "extract": "Nicolas Sarközy de Nagy-Bocsa, dit Nicolas Sarkozy (/ni.kɔ.la saʁ.kɔ.zi/  ; en hongrois Sárközy ou Sárközi [ˈʃaːɾkøzi]), né le 28 janvier 1955 à Paris 17e (Seine), est un homme d'État français. Il est président de la République française du 16 mai 2007 au 15 mai 2012.\nIl exerce d'abord les fonctions de maire de Neuilly-sur-Seine, de député, de ministre du Budget et de porte-parole du gouvernement, ainsi que de président par intérim du Rassemblement pour la République (RPR). À partir de 2002, il est ministre de l'Intérieur (à deux reprises), ministre de l'Économie et des Finances et président du conseil général des Hauts-de-Seine. Il devient ensuite l'un des principaux dirigeants de l'Union pour un mouvement populaire (UMP), qu'il préside de 2004 à 2007.\nÉlu président de la République française en 2007 avec 53,1 % des suffrages face à Ségolène Royal, il inaugure une rupture de style et de communication par rapport à ses prédécesseurs. Son quinquennat est marqué par plusieurs réformes majeures, notamment celles des universités en 2007 et celle des retraites en 2010. Son mandat est également marqué par de grands événements internationaux tels que la crise économique mondiale de 2008, la crise de la dette dans la zone euro et l'intervention militaire de 2011 en Libye.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "avocat ou avocate",
      "homme ou femme d'État",
      "juriste"
    ],
    "educatedAt": [
      "La-Salle - Passy-Buzenval",
      "école Jeannine-Manuel",
      "université de Paris",
      "Institut d'études politiques de Paris",
      "lycée Chaptal",
      "université Paris-Nanterre"
    ],
    "politicalParties": [
      "Union des démocrates pour la République",
      "Rassemblement pour la République",
      "Les Républicains",
      "Union pour un mouvement populaire"
    ],
    "positions": [
      {
        "label": "président de la République française",
        "start": "2007-05-16",
        "end": "2012-05-15"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "2007-01-01",
        "end": "2012-01-01"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "2005-06-02",
        "end": "2007-03-26"
      },
      {
        "label": "député français",
        "start": "2005-03-14",
        "end": "2005-07-02"
      },
      {
        "label": "président ou présidente de conseil départemental",
        "start": "2004-04-01",
        "end": "2007-05-14"
      },
      {
        "label": "ministre de l'Économie, des Finances et de la Souveraineté industrielle et numérique",
        "start": "2004-03-31",
        "end": "2004-11-29"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2002-07-18"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "2002-06-17",
        "end": "2004-03-30"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "2002-05-07",
        "end": "2002-06-17"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "1999-09-14"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-07"
      },
      {
        "label": "député français",
        "start": "1995-09-24",
        "end": "1997-04-21"
      },
      {
        "label": "ministre de la Culture",
        "start": "1994-07-19",
        "end": "1995-05-11"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-01"
      },
      {
        "label": "ministre de l’Action et des Comptes publics",
        "start": "1993-03-30",
        "end": "1995-01-19"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "maire de Neuilly-sur-Seine",
        "start": "1983-04-14",
        "end": "2002-05-07"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      },
      {
        "label": "conseiller général"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-segolene-royal": {
    "wikipediaTitle": "Ségolène Royal",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/S%C3%A9gol%C3%A8ne_Royal",
    "wikidataId": "Q81923",
    "extract": "Ségolène Royal (/seɡolɛn ʁwajal/ ), née Marie Ségolène Royal le 22 septembre 1953 à Dakar (Sénégal), est une haute fonctionnaire et femme politique française.\nMembre du Parti socialiste (PS), conseillère du président François Mitterrand dans les années 1980, elle est députée des Deux-Sèvres de 1988 à 2007. Ministre de l'Environnement dans le gouvernement Bérégovoy, elle est ensuite nommée ministre de l'Enseignement scolaire, puis de la Famille, par Lionel Jospin lors de la troisième cohabitation. En 1995, elle perd les élections municipales de Niort. Elle préside le conseil régional de Poitou-Charentes de 2004 à 2014. Elle est de 1978 à 2007 en couple avec François Hollande, avec qui elle a quatre enfants.\nEn 2007, Ségolène Royal est la première femme française à accéder au second tour d'une élection présidentielle, mais elle est battue par Nicolas Sarkozy, récoltant 47 % des suffrages exprimés. En 2008, elle est défaite de justesse par Martine Aubry lors de l'élection à la fonction de premier secrétaire du Parti socialiste.",
    "birthPlaces": [
      "Ouakam"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "École nationale d'administration",
      "université Nancy-II",
      "Université de Lorraine"
    ],
    "politicalParties": [
      "Parti socialiste"
    ],
    "positions": [
      {
        "label": "ambassadeur chargé des pôles et des affaires maritimes",
        "start": "2017-09-01",
        "end": "2020-01-24"
      },
      {
        "label": "président du conseil régional de Poitou-Charentes",
        "start": "2004-04-02",
        "end": "2014-04-21"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "1997-07-04"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1997-04-21"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1992-05-02"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-cecile-duflot": {
    "wikipediaTitle": "Cécile Duflot",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/C%C3%A9cile_Duflot",
    "wikidataId": "Q268634",
    "extract": "Cécile Duflot, née le 1er avril 1975 à Villeneuve-Saint-Georges (Val-de-Marne), est une femme politique française et dirigeante d'Oxfam France, organisation non gouvernementale (ONG) de solidarité internationale depuis 2018.\nSecrétaire nationale des partis écologistes Les Verts (2006-2010) et Europe Écologie Les Verts (2010-2012), elle finit troisième de la primaire en vue de l'élection présidentielle de 2007. En parallèle, elle est conseillère municipale de Villeneuve-Saint-Georges (2004-2014) et conseillère régionale d'Île-de-France (2010-2012).\nÀ la suite de la victoire de François Hollande à l'élection présidentielle de 2012, elle est nommée ministre du Logement et de l'Égalité des territoires. Aux élections législatives qui suivent, elle est élue députée dans la sixième circonscription de Paris, mandat qu'elle laisse à sa suppléante et qu'elle retrouve en 2014, à la suite de sa démission du gouvernement. Coprésidente du groupe écologiste à l'Assemblée nationale à partir de 2015, elle est battue à la primaire présidentielle de l'écologie de 2016.\nÉliminée au premier tour des élections législatives de 2017, elle annonce abandonner la politique en 2018 pour prendre le poste de directrice générale de l'ONG Oxfam France. En 2022, elle est nommée au Comité consultatif national d'éthique pour les sciences de la vie et de la santé.",
    "birthPlaces": [
      "Villeneuve-Saint-Georges"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "université Paris-Cité",
      "université Paris-Diderot",
      "École supérieure des sciences économiques et commerciales"
    ],
    "politicalParties": [
      "Les Écologistes – Europe Écologie Les Verts"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2014-05-03",
        "end": "2017-06-20"
      },
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2012-07-21"
      },
      {
        "label": "ministère de la Cohésion des territoires",
        "start": "2012-05-16",
        "end": "2014-04-02"
      },
      {
        "label": "conseiller régional d'Île-de-France"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-yannick-jadot": {
    "wikipediaTitle": "Yannick Jadot",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Yannick_Jadot",
    "wikidataId": "Q441791",
    "extract": "Yannick Jadot , né le 27 juillet 1967 à Clacy-et-Thierret (Aisne), est un militant écologiste et homme politique français.\nIl est membre des Verts à partir de 1999 et directeur des campagnes de Greenpeace France de 2002 à 2008.\nTête de liste d'Europe Écologie dans la circonscription Ouest aux élections européennes de 2009, il est député européen jusqu'en 2023. La liste qu'il dirige au niveau national lors des élections européennes de 2019 arrive en troisième position avec 13,5 %.\nAu terme d'une primaire, il est désigné candidat d'Europe Écologie Les Verts (EELV) à l'élection présidentielle de 2017, avant de se retirer en faveur de Benoît Hamon (Parti socialiste).\nÀ l'issue de la primaire de l'écologie de 2021, il est le candidat du Pôle écologiste pour l'élection présidentielle de 2022. Il arrive en sixième position avec 4,63 % des suffrages.\nCandidat aux élections sénatoriales de 2023, il est élu sénateur de Paris et démissionne de son mandat de député européen.",
    "birthPlaces": [
      "Clacy-et-Thierret"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "écologiste",
      "personnalité politique"
    ],
    "educatedAt": [
      "université Paris-Dauphine"
    ],
    "politicalParties": [
      "Les Écologistes – Europe Écologie Les Verts",
      "Fédération régions et peuples solidaires",
      "Les Verts"
    ],
    "positions": [
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2023-09-24"
      },
      {
        "label": "député européen",
        "start": "2019-07-02",
        "end": "2023-09-23"
      },
      {
        "label": "député européen",
        "start": "2014-07-01",
        "end": "2019-07-01"
      },
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      },
      {
        "label": "porte-parole",
        "end": "2011-11-22"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-corinne-lepage": {
    "wikipediaTitle": "Corinne Lepage",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Corinne_Lepage",
    "wikidataId": "Q291341",
    "extract": "Corinne Lepage, née le 11 mai 1951 à Boulogne-Billancourt, est une avocate et une femme politique française.\nEngagée dans la protection de l'environnement, elle est notamment ministre de l'Environnement dans les gouvernements d’Alain Juppé (1995-1997) et députée européenne (2009-2014). Présidente de Cap21, elle recueille 1,88 % des suffrages exprimés à l’élection présidentielle de 2002.",
    "birthPlaces": [
      "Boulogne-Billancourt"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "juriste",
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "université Paris-Panthéon-Assas"
    ],
    "politicalParties": [
      "Cap Écologie",
      "Cap21"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "2021-01-01"
      },
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      },
      {
        "label": "président ou présidente",
        "start": "1996-01-01",
        "end": "2021-01-01"
      },
      {
        "label": "ministre de l'Environnement"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-fillon": {
    "wikipediaTitle": "François Fillon",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Fillon",
    "wikidataId": "Q101410",
    "extract": "François Fillon, né le 4 mars 1954 au Mans (Sarthe), est un homme d'État français, notamment Premier ministre de 2007 à 2012.\nMembre du Rassemblement pour la République (RPR), il entre en politique en tant qu'assistant parlementaire du député Joël Le Theule, dont il reprend le fief électoral dans la Sarthe. Entre 1981 et 2007, il exerce les mandats de député, de maire de Sablé-sur-Sarthe, de président du conseil général, de président du conseil régional des Pays de la Loire et de sénateur. Dans les années 1980 et 1990, il se réclame du gaullisme social et se rapproche de Philippe Séguin.\nIl est ministre de l'Enseignement supérieur et de la Recherche dans le gouvernement Balladur (1993-1995), puis ministre des Technologies de l'Information et de La Poste (1995) et ministre délégué chargé de la Poste, des Télécommunications et de l'Espace (1995-1997) dans les deux gouvernements d'Alain Juppé.\nEn 2002, il rejoint l'Union pour un mouvement populaire (UMP) et se voit confier le ministère des Affaires sociales, du Travail et de la Solidarité, où il accomplit des réformes structurelles sur la durée du travail et sur les retraites. En 2004, il devient ministre de l'Éducation nationale. En 2005, après avoir fait voter la loi Fillon pour l'éducation, il quitte le gouvernement.",
    "birthPlaces": [
      "Le Mans"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "chef de gouvernement",
      "juriste",
      "collaborateur parlementaire",
      "personnalité politique"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "château des Perrais",
      "université Paris-Cité",
      "lycée Sainte-Croix",
      "université Paris-Descartes",
      "Université du Mans"
    ],
    "politicalParties": [
      "Les Républicains"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2017-06-20"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2007-07-19"
      },
      {
        "label": "Premier ministre français",
        "start": "2007-05-17",
        "end": "2012-05-16"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2005-09-18",
        "end": "2007-06-17"
      },
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2004-09-26",
        "end": "2004-11-01"
      },
      {
        "label": "ministre de l'Éducation nationale",
        "start": "2004-03-31",
        "end": "2005-06-02"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2002-07-19"
      },
      {
        "label": "ministère du Travail et de l'Emploi",
        "start": "2002-03-07",
        "end": "2004-03-31"
      },
      {
        "label": "président ou présidente",
        "start": "2001-04-19",
        "end": "2012-09-12"
      },
      {
        "label": "conseiller",
        "start": "2001-01-01"
      },
      {
        "label": "conseiller municipal de Solesmes",
        "start": "2001-01-01",
        "end": "2014-01-01"
      },
      {
        "label": "président du conseil régional des Pays de la Loire",
        "start": "1998-03-20",
        "end": "2002-05-16"
      },
      {
        "label": "conseiller régional des Pays de la Loire",
        "start": "1998-01-01",
        "end": "2007-01-01"
      },
      {
        "label": "suppléant de l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1997-06-23",
        "end": "1998-01-26"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-07"
      },
      {
        "label": "député français",
        "start": "1993-04-02",
        "end": "1993-05-01"
      },
      {
        "label": "ministère de l'Enseignement supérieur et de la Recherche",
        "start": "1993-01-01",
        "end": "1995-01-01"
      },
      {
        "label": "représentant à l'Assemblée parlementaire du Conseil de l'Europe",
        "start": "1988-11-17",
        "end": "1991-09-25"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      },
      {
        "label": "député français",
        "start": "1986-04-02",
        "end": "1988-05-14"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-jean-pierre-raffarin": {
    "wikipediaTitle": "Jean-Pierre Raffarin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Jean-Pierre_Raffarin",
    "wikidataId": "Q63263",
    "extract": "Jean-Pierre Raffarin, né le 3 août 1948 à Poitiers (Vienne), est un homme d'État français, Premier ministre de 2002 à 2005.\nMembre des Jeunes giscardiens et de l'UDF, il est président du conseil régional de Poitou-Charentes de 1988 à 2002 et ministre des Petites et moyennes entreprises, du Commerce et de l'Artisanat dans les gouvernements d'Alain Juppé, entre 1995 et 1997.\nDéputé européen puis sénateur, il est nommé Premier ministre par le président Jacques Chirac après l'élection présidentielle de 2002. À Matignon, il favorise notamment la décentralisation et une réforme des retraites est adoptée en 2003. Souffrant d'une importante impopularité, il démissionne après la victoire du « non » au référendum de 2005 sur le traité établissant une constitution pour l'Europe.\nEn 2014, il assure l'intérim à la tête de l'UMP pendant quelques mois. À deux reprises, en 2008 et 2014, il se présente à la primaire de l'UMP pour devenir président du Sénat, mais il est battu par Gérard Larcher. Il démissionne de son mandat de sénateur en 2017, puis devient représentant spécial du gouvernement français en Chine.",
    "birthPlaces": [
      "Poitiers"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "chef de gouvernement",
      "personnalité politique"
    ],
    "educatedAt": [
      "ESCP Business School",
      "université Paris-Panthéon-Assas"
    ],
    "politicalParties": [
      "Les Républicains",
      "Union pour un mouvement populaire",
      "Démocratie libérale",
      "Union pour la démocratie française"
    ],
    "positions": [
      {
        "label": "sénateur ou sénatrice de la Cinquième République",
        "start": "2005-09-18",
        "end": "2017-10-04"
      },
      {
        "label": "Premier ministre français",
        "start": "2002-05-06",
        "end": "2005-05-31"
      },
      {
        "label": "député européen",
        "start": "1994-07-19",
        "end": "1995-05-18"
      },
      {
        "label": "député européen",
        "start": "1989-07-25",
        "end": "1994-07-18"
      },
      {
        "label": "président du conseil régional de Poitou-Charentes",
        "start": "1988-12-19",
        "end": "2002-05-08"
      },
      {
        "label": "conseiller régional"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-dominique-villepin": {
    "wikipediaTitle": "Dominique de Villepin",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Dominique_de_Villepin",
    "wikidataId": "Q131660",
    "extract": "Dominique Galouzeau de Villepin (prononcé : [dɔminik ɡaluzo də vilpɛ̃]), dit Dominique de Villepin , né le 14 novembre 1953 à Rabat (protectorat français au Maroc), est un homme d'État français, Premier ministre du 31 mai 2005 au 17 mai 2007.\nDiplomate de formation, il est proche de Jacques Chirac, notamment comme secrétaire général de l'Élysée de 1995 à 2002. Ministre des Affaires étrangères à partir de 2002, son discours de 2003 aux Nations unies contre l'invasion de l'Irak par les États-Unis suscite l'attention de la communauté internationale. Il devient ministre de l'Intérieur l'année suivante, dans le troisième gouvernement Raffarin.\nNommé Premier ministre en 2005, il met en place l'état d'urgence lors des émeutes dans les banlieues et perd en popularité à la suite du mouvement contre le contrat première embauche (CPE) et de l'affaire Clearstream, qui le défavorisent face à Nicolas Sarkozy, vainqueur de l'élection présidentielle de 2007. Prétendant à l'élection présidentielle de 2012, il n'obtient pas les parrainages d'élus nécessaires pour se présenter.\nDans les années qui suivent, il intervient dans les milieux diplomatiques et d'affaires. Il revient progressivement sur le devant du débat public français en 2024.",
    "birthPlaces": [
      "Rabat"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "collectionneur ou collectionneuse d'œuvres d'art",
      "diplomate",
      "chef de gouvernement",
      "parlementaire",
      "ministre",
      "galeriste",
      "écrivain ou écrivaine",
      "personnalité politique",
      "secrétaire général ou secrétaire générale"
    ],
    "educatedAt": [
      "université de Paris",
      "Institut d'études politiques de Paris",
      "université Paris-Panthéon-Assas",
      "université Paris-Nanterre",
      "École nationale d'administration",
      "lycée Stendhal"
    ],
    "politicalParties": [
      "Rassemblement pour la République",
      "République solidaire",
      "Union pour un mouvement populaire",
      "La France humaniste"
    ],
    "positions": [
      {
        "label": "Premier ministre français",
        "start": "2005-05-31",
        "end": "2007-05-17"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "2004-03-31",
        "end": "2005-05-31"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "2002-06-17",
        "end": "2004-03-31"
      },
      {
        "label": "ministre des Affaires étrangères",
        "start": "2002-05-06",
        "end": "2002-06-17"
      },
      {
        "label": "secrétaire général de la présidence de la République",
        "start": "1995-05-17",
        "end": "2002-05-06"
      },
      {
        "label": "ministre de l'Intérieur"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-manon-aubry": {
    "wikipediaTitle": "Manon Aubry",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Manon_Aubry",
    "wikidataId": "Q59601214",
    "extract": "Manon Aubry, née le 22 décembre 1989 à Fréjus (Var), est une militante associative et femme politique française.\nElle est porte-parole de l'organisation non gouvernementale Oxfam France sur les questions de lutte contre l'évasion fiscale et les inégalités sociales, jusqu'en décembre 2018.\nElle devient députée européenne lors des élections européennes de 2019 en tant que tête de liste de La France insoumise (LFI), parti auquel elle a adhéré l'année précédente. Elle est alors élue coprésidente du groupe de la Gauche au Parlement européen. Durant son mandat, elle siège à la commission des affaires économiques et monétaires, à la commission des affaires juridiques et à la commission du développement du Parlement européen.\nElle est à nouveau tête de liste de La France Insoumise pour les élections européennes de 2024, au cours desquelles son parti obtient neuf sièges au Parlement européen.",
    "birthPlaces": [
      "Fréjus"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "humanitaire",
      "nageur ou nageuse",
      "militant social",
      "personnalité politique",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "Université de Sydney",
      "Université Columbia",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "La France insoumise"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "2024-07-16"
      },
      {
        "label": "président ou présidente",
        "start": "2019-07-18"
      },
      {
        "label": "député européen",
        "start": "2019-07-02",
        "end": "2024-07-15"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-alexis-corbiere": {
    "wikipediaTitle": "Alexis Corbière",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Alexis_Corbi%C3%A8re",
    "wikidataId": "Q2834481",
    "extract": "Alexis Corbière, né le 17 août 1968 à Béziers (Hérault), est un homme politique français.\nMembre de la Ligue communiste révolutionnaire de 1993 à 1997, il est ensuite militant du Parti socialiste jusqu'au congrès de Reims de 2008, après lequel il devient secrétaire national du Parti de gauche. Il est premier adjoint à la maire socialiste du 12e arrondissement de Paris, Michèle Blumenthal, de 2001 à 2014, et conseiller de Paris entre 2008 et 2014.\nPorte-parole de Jean-Luc Mélenchon et de son parti, La France insoumise, pour l'élection présidentielle française de 2017, il est élu député dans la septième circonscription de la Seine-Saint-Denis lors des élections législatives qui suivent, puis est réélu en 2022 dans le cadre de la Nouvelle Union Populaire écologique et sociale.\nIl prend par la suite ses distances avec Jean-Luc Mélenchon et La France insoumise, dont il ne reçoit finalement pas l'investiture lors des élections législatives de 2024 mais obtient le soutien des autres partis du Nouveau Front populaire. Il conserve son siège avant de fonder L'Après avec les autres dissidents du mouvement Insoumis.",
    "birthPlaces": [
      "Béziers"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "professeurs, professions scientifiques",
      "enseignant ou enseignante"
    ],
    "educatedAt": [
      "université Paris-Diderot",
      "université Paris-Est-Créteil-Val-de-Marne",
      "université Paul-Valéry",
      "université de Montpellier"
    ],
    "politicalParties": [
      "Parti de gauche",
      "La France insoumise",
      "Ligue communiste révolutionnaire",
      "Parti socialiste"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2024-07-08"
      },
      {
        "label": "député français",
        "start": "2022-06-22",
        "end": "2024-06-09"
      },
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2022-06-21"
      },
      {
        "label": "conseiller de Paris",
        "start": "2008-03-18",
        "end": "2014-03-30"
      },
      {
        "label": "adjoint au maire",
        "start": "2001-03-18",
        "end": "2014-03-30"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-clementine-autain": {
    "wikipediaTitle": "Clémentine Autain",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Cl%C3%A9mentine_Autain",
    "wikidataId": "Q2980738",
    "extract": "Clémentine Autain, née le 26 mai 1973 à Saint-Cloud (Hauts-de-Seine), est une femme politique française et écrivaine. \nAdhérente à Ensemble ! — au sein du Front de gauche — puis membre et députée de La France insoumise (LFI), elle cofonde en 2024 le parti L'Après. Elle siège dans le groupe parlementaire écologiste et social.",
    "birthPlaces": [
      "Saint-Cloud"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "historien ou historienne",
      "écrivain ou écrivaine",
      "personnalité politique",
      "professions de l'information, des arts et des spectacles",
      "acteur ou actrice",
      "enfant acteur"
    ],
    "educatedAt": [
      "université Paris-VIII"
    ],
    "politicalParties": [
      "L'Après",
      "Parti communiste français",
      "Ensemble !",
      "La France insoumise"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2024-07-01"
      },
      {
        "label": "député français",
        "start": "2022-06-22",
        "end": "2024-06-09"
      },
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2022-06-21"
      },
      {
        "label": "conseiller régional d'Île-de-France",
        "start": "2015-12-13",
        "end": "2017-07-27"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-emmanuel-macron": {
    "wikipediaTitle": "Emmanuel Macron",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Emmanuel_Macron",
    "wikidataId": "Q3052772",
    "extract": "Emmanuel Macron ([ɛmanɥɛl makʁɔ̃] ), né le 21 décembre 1977 à Amiens (Somme), est un homme d'État français. Il est le président de la République française depuis le 14 mai 2017.\nSorti de l'École nationale d'administration (ENA) en 2004, il devient inspecteur des finances. En 2007, il est nommé rapporteur adjoint de la commission pour la libération de la croissance française (« commission Attali »). L'année suivante, il rejoint la banque d'affaires Rothschild & Cie, dont il devient associé-gérant en 2010.\nProche du Mouvement des citoyens puis du Parti socialiste (PS) de 2006 à 2009, il participe à la campagne de François Hollande pour l'élection présidentielle de 2012. Hollande le nomme après sa victoire secrétaire général adjoint de son cabinet. En 2014, alors encore inconnu du grand public, mais réputé pour sa ligne sociale-libérale, Emmanuel Macron est nommé ministre de l'Économie, de l'Industrie et du Numérique ; il autorise la cession d'entreprises industrielles stratégiques et fait adopter en 2015 une « loi pour la croissance, l'activité et l'égalité des chances économiques », dite « loi Macron ».",
    "birthPlaces": [
      "Amiens"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "banquier d'affaires",
      "homme ou femme d'État",
      "philosophe",
      "fonctionnaire",
      "banquier",
      "politologue",
      "personnalité politique"
    ],
    "educatedAt": [
      "lycée Henri-IV",
      "Institut d'études politiques de Paris",
      "lycée La Providence d'Amiens",
      "université Paris-Nanterre",
      "École nationale d'administration"
    ],
    "politicalParties": [
      "Renaissance",
      "Parti socialiste",
      "indépendant"
    ],
    "positions": [
      {
        "label": "président de la République française",
        "start": "2017-05-14"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "2017-05-14"
      },
      {
        "label": "président ou présidente",
        "start": "2016-04-06",
        "end": "2017-05-08"
      },
      {
        "label": "ministre de l'Économie, de l'Industrie et du Numérique",
        "start": "2014-08-26",
        "end": "2016-08-30"
      },
      {
        "label": "secrétaire général adjoint de la présidence de la République française",
        "start": "2012-05-15",
        "end": "2014-07-15"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-edouard-philippe": {
    "wikipediaTitle": "Édouard Philippe",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/%C3%89douard_Philippe",
    "wikidataId": "Q3579995",
    "extract": "Édouard Philippe (/e.dwaʁ fi.lip/ ), né le 28 novembre 1970 à Rouen (Seine-Maritime), est un homme d'État français. Il est Premier ministre du 15 mai 2017 au 3 juillet 2020.\nDiplômé de Sciences Po et de l’ENA, membre du Conseil d'État, il participe en 2002 à la création de l'UMP aux côtés d’Alain Juppé, dont il est brièvement conseiller ministériel en 2007.\nIl est élu conseiller général de la Seine-Maritime en 2008, maire du Havre et président de la communauté de l'agglomération havraise en 2010, puis député en 2012. Porte-parole d'Alain Juppé lors de la primaire de la droite et du centre de 2016, il soutient ensuite François Fillon, mais se met en retrait de sa campagne présidentielle lorsque celui-ci est accusé d'emplois fictifs.\nEn 2017, le président de la République nouvellement élu, Emmanuel Macron, le désigne pour diriger un premier gouvernement, puis un second à la suite des élections législatives. À Matignon, Édouard Philippe est notamment confronté au mouvement des Gilets jaunes, porte un projet contesté et inachevé de réforme des retraites, et gère les débuts de la pandémie de Covid-19.\nAprès les élections municipales de 2020, il quitte la tête du gouvernement et retrouve le mandat de maire du Havre.",
    "birthPlaces": [
      "Rouen"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "professions de l'information, des arts et des spectacles",
      "professions libérales et assimilés",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "Institut d'études politiques de Paris",
      "lycée Janson-de-Sailly",
      "École nationale d'administration",
      "école de Gaulle-Adenauer"
    ],
    "politicalParties": [
      "Les Républicains",
      "Horizons",
      "Parti socialiste",
      "Union pour un mouvement populaire"
    ],
    "positions": [
      {
        "label": "maire du Havre",
        "start": "2026-03-28"
      },
      {
        "label": "conseiller municipal du Havre",
        "start": "2026-03-22"
      },
      {
        "label": "membre du conseil d'administration",
        "start": "2020-10-27"
      },
      {
        "label": "maire du Havre",
        "start": "2020-07-05",
        "end": "2026-03-28"
      },
      {
        "label": "conseiller municipal du Havre",
        "start": "2020-06-28",
        "end": "2026-03-22"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "2017-10-03",
        "end": "2017-10-16"
      },
      {
        "label": "Premier ministre français",
        "start": "2017-05-15",
        "end": "2020-07-03"
      },
      {
        "label": "maire du Havre",
        "start": "2014-03-29",
        "end": "2017-05-21"
      },
      {
        "label": "conseiller communautaire de l'agglomération havraise",
        "start": "2014-03-23"
      },
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2017-06-15"
      },
      {
        "label": "député français",
        "start": "2012-03-23",
        "end": "2012-06-19"
      },
      {
        "label": "maire du Havre",
        "start": "2010-10-24",
        "end": "2014-03-29"
      },
      {
        "label": "président ou présidente",
        "start": "2010-01-01",
        "end": "2017-06-25"
      },
      {
        "label": "conseiller général",
        "start": "2008-03-17",
        "end": "2012-04-22"
      },
      {
        "label": "conseiller régional",
        "start": "2004-03-29",
        "end": "2008-03-18"
      },
      {
        "label": "conseiller municipal du Havre"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-christophe-castaner": {
    "wikipediaTitle": "Christophe Castaner",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Christophe_Castaner",
    "wikidataId": "Q1726930",
    "extract": "Christophe Castaner  (prononcé en français : [kastanɛʁ]), né le 3 janvier 1966 à Ollioules (Var), est un homme politique français.\nD'abord membre du Parti socialiste (PS) à partir de 1986, il intègre les cabinets ministériels de Catherine Trautmann et de Michel Sapin sous le gouvernement Jospin.\nIl devient maire de Forcalquier et président de la communauté de communes Pays de Forcalquier - Montagne de Lure puis du Pays de Haute-Provence, ainsi que conseiller régional de Provence-Alpes-Côte d'Azur. Tête de liste PS lors des élections régionales de 2015, il est devancé au premier tour. Élu député dans la 2e circonscription des Alpes de Haute-Provence en 2012, il rejoint en 2016 le mouvement En marche, conduit par Emmanuel Macron. Il est porte-parole de ce dernier lors de la campagne présidentielle de 2017, puis est réélu député.\nEn mai 2017, il est nommé secrétaire d'État chargé des Relations avec le Parlement et porte-parole du gouvernement d'Édouard Philippe, une fonction qu'il occupe jusqu'en novembre 2017, lorsqu'il devient délégué général de La République en marche (LREM). Il est nommé ministre de l'Intérieur en octobre 2018 et quitte alors la tête de LREM. Il occupe cette fonction notamment durant le mouvement des Gilets jaunes, attirant la controverse, puis le confinement de 2020.",
    "birthPlaces": [
      "Ollioules"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "avocat ou avocate",
      "juriste",
      "personnalité politique",
      "cadres de la fonction publique",
      "chefs d'entreprise de 10 salariés ou plus"
    ],
    "educatedAt": [
      "université d'Aix-Marseille",
      "faculté de droit et de science politique d'Aix-Marseille"
    ],
    "politicalParties": [
      "Parti socialiste",
      "Renaissance"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2020-08-04",
        "end": "2022-06-19"
      },
      {
        "label": "ministre de l'Intérieur",
        "start": "2018-10-16",
        "end": "2020-08-03"
      },
      {
        "label": "porte-parole du gouvernement",
        "start": "2017-06-21",
        "end": "2017-11-24"
      },
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2017-07-21"
      },
      {
        "label": "porte-parole du gouvernement",
        "start": "2017-05-17",
        "end": "2017-06-19"
      },
      {
        "label": "secrétaire d'État chargé des relations avec le Parlement",
        "start": "2017-05-17",
        "end": "2018-10-16"
      },
      {
        "label": "conseiller communautaire du Pays Forcalquier et Montagne de Lure",
        "start": "2014-03-23"
      },
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2017-06-17"
      },
      {
        "label": "conseiller régional de Provence-Alpes-Côte d'Azur",
        "start": "2004-03-28",
        "end": "2012-07-13"
      },
      {
        "label": "président ou présidente",
        "start": "2003-01-01",
        "end": "2014-04-12"
      },
      {
        "label": "maire de Forcalquier",
        "start": "2001-03-23",
        "end": "2017-07-22"
      },
      {
        "label": "ministre de l'Intérieur"
      },
      {
        "label": "conseiller municipal de Forcalquier"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-nicolas-dupont-aignan": {
    "wikipediaTitle": "Nicolas Dupont-Aignan",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Nicolas_Dupont-Aignan",
    "wikidataId": "Q12961",
    "extract": "Nicolas Dupont-Aignan , né le 7 mars 1961 à Paris est un homme politique français.\nÉnarque, il est successivement membre du Rassemblement pour la République (RPR), du Rassemblement pour la France (RPF) et de l'Union pour un mouvement populaire (UMP), avant de fonder en parallèle et de prendre la présidence de Debout la France (DLF) — anciennement Debout la République (DLR) —, courant politique qu’il transforme en un parti se réclamant du gaullisme et du souverainisme.\nIl est maire d'Yerres de 1995 à 2017 et à nouveau depuis 2026 et député de l'Essonne de 1997 à 2024.\nCandidat aux élections présidentielles de 2012 et de 2017, il recueille respectivement 1,79 et 4,70 % des suffrages exprimés. Dans l’entre-deux-tours de l'élection de 2017, il conclut une alliance de gouvernement avec Marine Le Pen, qui tombe après l'élection d'Emmanuel Macron. Tête de liste DLF, il se présente sans succès aux élections européennes de 2019. Candidat une troisième fois à l'élection présidentielle en 2022, il reçoit 2,06 % des suffrages exprimés. Il échoue ensuite à se faire réélire aux élections législatives anticipées de 2024.",
    "birthPlaces": [
      "15e arrondissement de Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "cadres de la fonction publique"
    ],
    "educatedAt": [
      "École nationale d'administration",
      "Établissement La Rochefoucauld",
      "université Paris-Dauphine",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Debout la France"
    ],
    "positions": [
      {
        "label": "maire de Yerres",
        "start": "2026-03-22"
      },
      {
        "label": "conseiller municipal de Yerres",
        "start": "2026-03-15"
      },
      {
        "label": "député français",
        "start": "2022-06-22",
        "end": "2024-06-09"
      },
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2022-06-21"
      },
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2017-06-20"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-06-19"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "député français",
        "start": "1997-06-01",
        "end": "2002-06-18"
      },
      {
        "label": "maire de Yerres",
        "start": "1995-06-25",
        "end": "2017-07-23"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-asselineau": {
    "wikipediaTitle": "François Asselineau",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Asselineau",
    "wikidataId": "Q12972",
    "extract": "François Asselineau ([fʁɑ̃ˈswa asəliˈno]), né le 14 septembre 1957 à Paris, est un haut fonctionnaire et homme politique français.\nÉnarque, il entre à l'Inspection des finances en 1985 puis mène une carrière de haut fonctionnaire qui le conduit à exercer dans différents cabinets ministériels sous les gouvernements de droite des années 1990 et, entre 2004 et 2006, le poste de délégué général à l'intelligence économique au ministère de l'Économie et des Finances. En parallèle, il est cadre du Rassemblement pour la France et l'indépendance de l'Europe (RPF) puis du Rassemblement pour l'indépendance et la souveraineté de la France (RIF) et siège au Conseil de Paris de 2001 à 2008, élu sur la liste de Jean Tiberi.\nEn 2007, il fonde l'Union populaire républicaine (UPR), qui milite pour la sortie de l'Union européenne, de la zone euro et de l'Organisation du traité de l'Atlantique nord (OTAN). Ce parti est décrit par de très nombreux observateurs comme souverainiste, antiaméricain et conspirationniste. La nuance politique attribuée par le ministère de l'Intérieur aux listes et candidats de l'UPR aux élections depuis 2014 est « divers », tandis que le parti se présente comme étant en dehors du clivage droite-gauche. François Asselineau est quant à lui couramment situé à droite, voire à l'extrême droite. Parfois rattaché au gaullisme, il assume cette étiquette et se présente également comme un opposant au Rassemblement national.",
    "birthPlaces": [
      "Paris"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "cadres de la fonction publique",
      "fonctionnaire"
    ],
    "educatedAt": [
      "École nationale d'administration",
      "HEC Paris"
    ],
    "politicalParties": [
      "Union populaire républicaine",
      "Rassemblement pour l'indépendance et la souveraineté de la France",
      "Rassemblement pour la France et l'indépendance de l'Europe"
    ],
    "positions": [
      {
        "label": "dirigeant de parti politique",
        "start": "2007-03-25"
      },
      {
        "label": "conseiller de Paris",
        "start": "2001-03-25",
        "end": "2008-03-24"
      },
      {
        "label": "inspecteur général des finances",
        "start": "2001-01-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-marine-le-pen": {
    "wikipediaTitle": "Marine Le Pen",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Marine_Le_Pen",
    "wikidataId": "Q12927",
    "extract": "Marine Le Pen ([ma.ʁin lə pɛn] ), née le 5 août 1968 à Neuilly-sur-Seine (Hauts-de-Seine), est une femme politique française. Elle est la figure principale du Front national (FN) renommé Rassemblement national (RN), principal parti d'extrême droite en France, qu'elle dirige de 2011 à 2021.\nEn 1986, elle s'engage au sein du FN, dirigé par son père Jean-Marie Le Pen. Elle occupe plusieurs mandats locaux à partir de 1998 en Île-de-France, dans le Nord-Pas-de-Calais puis les Hauts-de-France et siège de 2004 à 2017 au Parlement européen, où elle co-préside le groupe Europe des nations et des libertés (ENL) à partir de 2015.\nElle est élue présidente du FN lors de son congrès de 2011. Elle arrive en troisième position au premier tour à l'élection présidentielle de 2012 et elle perd au second tour à l'élection présidentielle de 2017 face à Emmanuel Macron. Lors des élections législatives qui suivent, elle est élue députée dans le Pas-de-Calais.\nEn 2021, elle quitte la tête du RN (ex-FN).",
    "birthPlaces": [
      "Neuilly-sur-Seine"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "cadres de la fonction publique",
      "professions libérales et assimilés",
      "avocat ou avocate",
      "juriste"
    ],
    "educatedAt": [
      "université Paris-Panthéon-Assas"
    ],
    "politicalParties": [
      "Rassemblement national"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2024-07-01"
      },
      {
        "label": "député français",
        "start": "2022-06-22",
        "end": "2024-06-09"
      },
      {
        "label": "conseiller départemental du Pas-de-Calais",
        "start": "2021-07-01",
        "end": "2025-04-01"
      },
      {
        "label": "député français",
        "start": "2017-06-21",
        "end": "2022-06-21"
      },
      {
        "label": "conseiller régional des Hauts-de-France",
        "start": "2016-01-01",
        "end": "2021-07-02"
      },
      {
        "label": "député européen",
        "start": "2014-07-01",
        "end": "2017-06-18"
      },
      {
        "label": "dirigeant de parti politique",
        "start": "2011-01-16",
        "end": "2021-12-13"
      },
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-07-13"
      },
      {
        "label": "conseiller régional d'Île-de-France",
        "start": "2004-03-28",
        "end": "2010-03-21"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-helene-thouy": {
    "wikipediaTitle": "Hélène Thouy",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/H%C3%A9l%C3%A8ne_Thouy",
    "wikidataId": "Q63646237",
    "extract": "Hélène Thouy [e.lɛn.twi], née le 23 décembre 1983 à Marseille, est une avocate et femme politique française.\nCofondatrice et coprésidente du Parti animaliste depuis 2016, elle conduit aux élections européennes de 2019 une liste qui réunit 2,2 % des suffrages exprimés. Elle est également connue pour être l'une des deux avocates attitrées de l'association antispéciste L214.\nElle tente d'être candidate à l'élection présidentielle de 2022 mais échoue à réunir les parrainages nécessaires.",
    "birthPlaces": [
      "Marseille"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique",
      "avocat ou avocate"
    ],
    "educatedAt": [],
    "politicalParties": [
      "Parti animaliste"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "2016-09-14"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-eric-zemmour": {
    "wikipediaTitle": "Éric Zemmour",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/%C3%89ric_Zemmour",
    "wikidataId": "Q288477",
    "extract": "Éric Zemmour , né le 31 août 1958 à Montreuil (Seine), est un journaliste, écrivain, essayiste, éditorialiste, chroniqueur, polémiste et homme politique français d'extrême droite.\nDiplômé de l'Institut d'études politiques de Paris, il commence une carrière dans la presse écrite en travaillant au Quotidien de Paris de 1986 à 1994. Il rejoint en 1996 le service politique du Figaro, où il reste jusqu'en 2009 et revient en 2013, tout en écrivant des chroniques au Figaro Magazine jusqu'en 2021.\nSa notoriété s'accroît grâce à la radio et la télévision : il intervient dans Ça se dispute sur I-Télé de 2003 à 2014, dans On n'est pas couché sur France 2 de 2006 à 2011, sur RTL de 2010 à 2016, Zemmour et Naulleau sur Paris Première de 2011 à 2022 et sur CNews dans Face à l'info de 2019 à 2021. En outre, ses essais rencontrent d'importants succès de librairie et suscitent des polémiques.\nFréquemment poursuivi en justice pour ses déclarations controversées, il est condamné notamment pour des provocations au racisme, à la haine envers les musulmans, incitation à la haine, injure raciste et diffamation.\nEn novembre 2021, il annonce sa candidature à l'élection présidentielle de 2022 et fonde dans la foulée le parti politique Reconquête afin de créer une union des droites autour de thèmes identitaires et nationalistes. Il arrive en quatrième position lors du premier tour de l'élection avec 7,07 % des suffrages exprimés.",
    "birthPlaces": [
      "Montreuil"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "journaliste",
      "éditorialiste",
      "polémiste",
      "écrivain ou écrivaine",
      "personnalité politique",
      "professions de l'information, des arts et des spectacles",
      "chroniqueur ou chroniqueuse de presse",
      "militant ou militante"
    ],
    "educatedAt": [
      "lycée de l'École Yabné",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Reconquête"
    ],
    "positions": [
      {
        "label": "président ou présidente",
        "start": "2021-12-05"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-francois-hollande": {
    "wikipediaTitle": "François Hollande",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Hollande",
    "wikidataId": "Q157",
    "extract": "François Hollande [fʁɑ̃swa ɔlɑ̃d] , né le 12 août 1954 à Rouen (Seine-Inférieure), est un haut fonctionnaire et homme d'État français. Il est président de la République française du 15 mai 2012 au 14 mai 2017.\nMagistrat à la Cour des comptes, il est élu pour la première fois député en 1988. Il exerce la fonction de premier secrétaire du Parti socialiste (PS) de 1997 à 2008, pendant la troisième cohabitation puis dans l'opposition. Au niveau local, il est maire de Tulle de 2001 à 2008 et président du conseil général de Corrèze de 2008 à 2012.\nUn temps pressenti pour l'élection présidentielle de 2007, il est désigné candidat du PS à l'élection présidentielle de 2012 à l'issue du second tour d'une primaire à gauche face à Martine Aubry. Il est élu président de la République face au président sortant de droite, Nicolas Sarkozy, avec 51,6 % des suffrages exprimés au second tour.\nAlors qu'il avait déclaré « mon véritable adversaire, c'est le monde de la finance », sa politique économique connaît un virage social-libéral en 2014, année du « pacte de responsabilité », suivi par la loi Macron puis la loi Travail, qui provoque une forte contestation sociale.",
    "birthPlaces": [
      "Rouen"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "homme ou femme d'État",
      "fonctionnaire",
      "personnalité politique",
      "anciens cadres",
      "magistrat ou magistrate",
      "avocat ou avocate"
    ],
    "educatedAt": [
      "université Paris-Panthéon-Assas",
      "École nationale d'administration",
      "lycée Pasteur de Neuilly-sur-Seine",
      "pensionnat Jean-Baptiste-de-La-Salle de Rouen",
      "HEC Paris",
      "Institut d'études politiques de Paris"
    ],
    "politicalParties": [
      "Parti socialiste"
    ],
    "positions": [
      {
        "label": "député français",
        "start": "2024-07-08"
      },
      {
        "label": "président de la République française",
        "start": "2012-05-15",
        "end": "2017-05-14"
      },
      {
        "label": "co-prince français d'Andorre",
        "start": "2012-05-15",
        "end": "2017-05-14"
      },
      {
        "label": "conseiller général",
        "start": "2008-03-20",
        "end": "2012-01-01"
      },
      {
        "label": "député français",
        "start": "2007-06-20",
        "end": "2012-05-14"
      },
      {
        "label": "député français",
        "start": "2002-06-19",
        "end": "2007-06-19"
      },
      {
        "label": "maire de Tulle",
        "start": "2001-03-17",
        "end": "2008-03-17"
      },
      {
        "label": "député européen",
        "start": "1999-07-20",
        "end": "1999-12-17"
      },
      {
        "label": "premier secrétaire du Parti socialiste",
        "start": "1997-11-27",
        "end": "2008-11-26"
      },
      {
        "label": "député français",
        "start": "1997-06-12",
        "end": "2002-06-18"
      },
      {
        "label": "député français",
        "start": "1988-06-23",
        "end": "1993-04-01"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-eva-joly": {
    "wikipediaTitle": "Eva Joly",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Eva_Joly",
    "wikidataId": "Q464116",
    "extract": "Eva Joly, née Gro Eva Farseth le 5 décembre 1943 à Oslo en Norvège, est une magistrate franco-norvégienne, devenue femme politique en France. Elle est députée européenne (groupe Verts-ALE) de 2009 à 2019.\nNommée juge d'instruction au pôle financier du palais de justice de Paris en 1990, elle se fait connaître en instruisant des dossiers politico-financiers médiatisés, tels que des affaires concernant Bernard Tapie et l'entreprise Elf.\nEn 2009, elle est élue députée européenne dans la circonscription Île-de-France, sur la liste Europe Écologie. Elle est candidate d'Europe Écologie Les Verts à l'élection présidentielle de 2012 où elle recueille 2,31 % des voix. Elle est ensuite réélue au Parlement européen en 2014.\nDepuis 2015, elle exerce comme avocate au barreau de Paris.",
    "birthPlaces": [
      "Grünerløkka"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France",
      "Norvège"
    ],
    "occupations": [
      "juriste",
      "personnalité politique",
      "avocat ou avocate",
      "juge"
    ],
    "educatedAt": [
      "École nationale de la magistrature"
    ],
    "politicalParties": [
      "Les Écologistes – Europe Écologie Les Verts"
    ],
    "positions": [
      {
        "label": "député européen",
        "start": "2014-07-01",
        "end": "2019-07-01"
      },
      {
        "label": "député européen",
        "start": "2009-07-14",
        "end": "2014-06-30"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  },
  "person-benoit-hamon": {
    "wikipediaTitle": "Benoît Hamon",
    "wikipediaUrl": "https://fr.wikipedia.org/wiki/Beno%C3%AEt_Hamon",
    "wikidataId": "Q818118",
    "extract": "Benoît Hamon, né le 26 juin 1967 à Saint-Renan (Finistère), est un homme politique français.\nPrésident du Mouvement des Jeunes socialistes de 1993 à 1995, il est député européen entre 2004 et 2009 et porte-parole du Parti socialiste (PS) de 2008 à 2012. Élu député en 2012, il devient membre du gouvernement du 16 mai 2012 au 25 août 2014, en tant que ministre délégué à l'Économie sociale et solidaire et à la Consommation puis ministre de l'Éducation nationale, de l'Enseignement supérieur et de la Recherche.\nPortant un programme qu'il revendique résolument orienté à gauche, il remporte la primaire citoyenne de 2017 face à Manuel Valls, devenant ainsi le candidat du PS à l'élection présidentielle. Il arrive en cinquième position avec 6,4 % des voix.\nAprès avoir perdu son siège de député aux élections législatives de 2017, il quitte le PS pour lancer son propre parti, Génération·s. La liste qu'il conduit pour cette formation aux élections européennes de 2019 recueille 3,27 % des suffrages exprimés et n'obtient aucun siège. Il annonce alors se mettre en retrait de la vie politique, tout en conservant son siège de conseiller régional d'Île-de-France.",
    "birthPlaces": [
      "Saint-Renan"
    ],
    "deathPlaces": [],
    "citizenships": [
      "France"
    ],
    "occupations": [
      "personnalité politique"
    ],
    "educatedAt": [
      "université de Bretagne-Occidentale"
    ],
    "politicalParties": [
      "Parti socialiste",
      "Génération.s"
    ],
    "positions": [
      {
        "label": "conseiller régional d'Île-de-France",
        "start": "2015-12-13"
      },
      {
        "label": "député français",
        "start": "2014-09-27",
        "end": "2017-06-20"
      },
      {
        "label": "ministre de l'Éducation nationale, de l'Enseignement supérieur et de la Recherche",
        "start": "2014-04-02",
        "end": "2014-08-25"
      },
      {
        "label": "député français",
        "start": "2012-06-20",
        "end": "2012-07-21"
      },
      {
        "label": "député européen",
        "start": "2004-07-20",
        "end": "2009-07-13"
      }
    ],
    "license": "Creative Commons Attribution-Share Alike 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
    "retrievedAt": "2026-08-26"
  }
};
