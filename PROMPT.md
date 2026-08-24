# PROMPT.md — HISTOIRE DES PARTIS POLITIQUES FRANÇAIS

# PROJET — HISTOIRE DES PARTIS POLITIQUES FRANÇAIS

## Nom de travail

Nom : `HistPoliticor`

---

# 1. MISSION

Créer une application web progressive (PWA), mobile-first, consacrée à l'histoire des partis, mouvements, familles politiques, personnalités, élections, coalitions et transformations du paysage politique français de 1900 à aujourd'hui.

L'application doit être conçue comme :

- une encyclopédie historique ;
- une base documentaire ;
- une chronologie interactive ;
- un explorateur de généalogie des partis ;
- un atlas électoral ;
- un outil pédagogique ;
- un moteur de recherche historique ;
- une base de données relationnelle permettant de relier les acteurs, partis et événements.

L'objectif n'est PAS de créer une application d'actualité politique.

L'objectif est de permettre de comprendre :

> Comment le paysage politique français s'est constitué, transformé, fragmenté, recomposé et renouvelé depuis 1900.

---

# 2. CONTRAINTES GÉNÉRALES

L'application doit être :

- mobile-first ;
- responsive ;
- PWA ;
- installable sur Android ;
- compatible navigateurs modernes ;
- déployable sur Netlify ;
- utilisable sur ordinateur ;
- performante sur téléphone ;
- utilisable partiellement hors ligne ;
- accessible ;
- documentée ;
- facilement extensible.

Prévoir une architecture permettant d'ajouter progressivement des centaines ou milliers de fiches.

NE PAS coder une application dépendante d'une API distante pour chaque affichage.

Les données historiques principales doivent être stockées localement dans des fichiers structurés ou une base embarquée adaptée.

---

# 3. PRINCIPES ÉDITORIAUX

L'application doit rester :

- historiquement rigoureuse ;
- politiquement neutre ;
- descriptive ;
- contextualisée ;
- sourcée ;
- transparente sur les incertitudes ;
- non militante ;
- non partisane.

Ne jamais présenter comme un fait historique une interprétation non sourcée.

Distinguer clairement :

1. fait historique ;
2. interprétation historiographique ;
3. position revendiquée par un parti ;
4. jugement politique contemporain ;
5. donnée électorale ;
6. information incertaine ou discutée.

Ne jamais utiliser automatiquement les catégories politiques contemporaines pour décrire les partis de 1900.

Exemple :

Ne pas écrire simplement :

> "Ce parti était de droite."

Préférer :

> "Dans le contexte politique de la période, ce mouvement est généralement rattaché à..."

et fournir le contexte historique.

---

# 4. PÉRIODE COUVERTE

Période principale :

1900 → aujourd'hui.

Prévoir cependant des données antérieures permettant de comprendre les origines des mouvements étudiés.

Par exemple :

- Révolution française ;
- XIXe siècle ;
- naissance du mouvement ouvrier ;
- républicanisme ;
- monarchisme ;
- bonapartisme ;
- radicalisme ;
- socialisme ;
- anarchisme ;
- nationalisme.

La période principale affichée dans la timeline reste :

1900 → présent.

---

# 5. STRUCTURE HISTORIQUE

Organiser l'histoire politique selon plusieurs niveaux.

## Niveau 1 — Régimes

- IIIe République
- Régime de Vichy
- Libération
- IVe République
- Ve République

## Niveau 2 — Périodes historiques

Exemples :

- 1900–1914
- 1914–1918
- 1919–1932
- 1932–1939
- 1939–1945
- 1945–1958
- 1958–1969
- 1969–1981
- 1981–1995
- 1995–2002
- 2002–2012
- 2012–2017
- 2017–2022
- 2022–présent

Ces périodes doivent être configurables.

---

# 6. PAGE D'ACCUEIL

Créer une page d'accueil riche et visuelle.

Sections :

## Hero

Titre :

> L'histoire des partis politiques français

Sous-titre :

> Comprendre les partis, les hommes, les élections et les transformations politiques de la France depuis 1900.

Boutons :

- Explorer la chronologie
- Explorer les partis
- Explorer les élections

---

## Blocs découverte

Afficher :

### Événement du jour

Un événement historique associé à la date actuelle.

### Personnalité du jour

Une personnalité politique historique.

### Parti à découvrir

Une fiche sélectionnée aléatoirement.

### Élection historique

Une élection importante.

### Ce jour-là

Événements historiques associés à la date.

### Citation historique

Citation sourcée.

### Saviez-vous que ?

Information courte et sourcée.

---

# 7. NAVIGATION PRINCIPALE

Navigation mobile :

- Accueil
- Chronologie
- Partis
- Personnalités
- Élections
- Cartes
- Explorer
- Documentation

Prévoir un menu secondaire pour :

- Sources
- À propos
- Paramétrage
- Documentation
---

# 8. CHRONOLOGIE INTERACTIVE

Créer une timeline principale couvrant :

1900 → présent.

Elle doit être interactive.

Chaque événement possède :

- date ;
- période ;
- titre ;
- description ;
- catégorie ;
- importance ;
- partis concernés ;
- personnalités concernées ;
- élections concernées ;
- sources ;
- médias associés.

Catégories :

- création de parti ;
- dissolution ;
- fusion ;
- scission ;
- changement de nom ;
- congrès ;
- élection ;
- référendum ;
- gouvernement ;
- crise ;
- manifestation ;
- guerre ;
- réforme ;
- constitution ;
- alliance ;
- rupture ;
- décès ;
- naissance ;
- discours ;
- programme ;
- événement social ;
- événement économique.

---

# 9. FILTRES DE LA TIMELINE

Filtres :

- période ;
- parti ;
- famille politique ;
- personnalité ;
- régime ;
- type d'événement ;
- importance.

Possibilité d'afficher :

### Vue globale

Tous les événements.

### Vue politique

Uniquement partis et personnalités.

### Vue électorale

Uniquement élections.

### Vue institutionnelle

Institutions, constitutions, gouvernements.

---

# 10. FICHE PARTI

Créer une fiche très complète.

Chaque parti doit pouvoir posséder :

## Identité

- nom complet ;
- sigle ;
- variantes du nom ;
- ancien nom ;
- nom ultérieur ;
- date de création ;
- date de disparition ;
- statut ;
- fondateur(s) ;
- dirigeants ;
- siège ;
- publications ;
- symboles ;
- slogans historiques ;
- logos.

## Historique

- origines ;
- création ;
- contexte ;
- évolution ;
- périodes de croissance ;
- périodes de déclin ;
- crises ;
- scissions ;
- fusions ;
- changements de nom ;
- disparition ;
- héritiers.

## Positionnement

Ne PAS réduire le positionnement à un simple axe gauche/droite.

Créer plusieurs dimensions :

- économique ;
- social ;
- institutionnel ;
- religieux/laïque ;
- national ;
- international ;
- européen ;
- social ;
- culturel.

Ces informations doivent être contextualisées par période.

---

# 11. HISTORIQUE DU PARTI

Chaque parti doit posséder une timeline interne.

Exemple :

```text
1905
Création
  ↓
1914
Première Guerre mondiale
  ↓
1920
Scission
  ↓
1936
Front populaire
  ↓
1945
Reconstruction
  ↓
...
```

Cette timeline doit être générée à partir des relations entre les données.

---

# 12. GÉNÉALOGIE DES PARTIS

FONCTIONNALITÉ PRIORITAIRE.

Créer un graphe permettant de visualiser :

- parti d'origine ;
- descendants ;
- scissions ;
- fusions ;
- changements de nom ;
- absorptions ;
- regroupements ;
- héritiers politiques.

Relations possibles :

```text
FOUNDED_FROM
SPLIT_FROM
MERGED_INTO
RENAMED_TO
ABSORBED_BY
SUCCESSOR_OF
PREDECESSOR_OF
ALLIED_WITH
OPPOSED_TO
```

Exemple conceptuel :

```text
PARTI A
   |
   +------ PARTI B
   |
   +------ PARTI C
             |
             +------ PARTI D
```

Le graphe doit être zoomable et navigable.

Sur mobile, prévoir une version simplifiée avec exploration par niveaux.

---

# 13. EXPLORATEUR DES FAMILLES POLITIQUES

Créer des familles historiques :

- républicanisme ;
- radicalisme ;
- socialisme ;
- communisme ;
- anarchisme ;
- démocratie chrétienne ;
- libéralisme ;
- conservatisme ;
- nationalisme ;
- gaullisme ;
- écologie politique ;
- souverainisme ;
- monarchisme ;
- bonapartisme ;
- mouvements régionalistes ;
- autres familles.

ATTENTION :

Une famille politique n'est pas un parti.

Un même parti peut appartenir à plusieurs traditions ou évoluer dans le temps.

---

# 14. PERSONNALITÉS

Créer une encyclopédie des personnalités.

Fiche :

- nom ;
- prénom ;
- naissance ;
- décès ;
- profession ;
- partis ;
- fonctions ;
- mandats ;
- gouvernements ;
- élections ;
- discours ;
- citations ;
- relations politiques ;
- événements ;
- chronologie ;
- sources ;
- portraits.

Créer des relations :

```text
MEMBER_OF
LEADER_OF
FOUNDER_OF
OPPOSED_TO
ALLIED_WITH
SUCCESSOR_OF
MENTOR_OF
```

---

# 15. ÉLECTIONS

Créer une encyclopédie des élections françaises.

Types :

- législatives ;
- présidentielles ;
- référendums ;
- élections constituantes ;
- autres scrutins nationaux pertinents.

Pour chaque élection :

- date ;
- contexte ;
- régime ;
- système électoral ;
- candidats ;
- partis ;
- résultats ;
- participation ;
- abstention ;
- sièges ;
- second tour ;
- conséquences ;
- gouvernement issu de l'élection ;
- sources.

---

# 16. COMPARATEUR D'ÉLECTIONS

Permettre de comparer deux élections.

Exemple :

1958 vs 1962

ou :

1981 vs 1988

ou :

2002 vs 2007

Afficher :

- participation ;
- résultats ;
- sièges ;
- partis ;
- candidats ;
- évolution ;
- gains/pertes ;
- contexte.

---

# 17. COMPARATEUR DE PARTIS

Permettre de sélectionner deux ou plusieurs partis.

Comparer :

- date de création ;
- fondateurs ;
- dirigeants ;
- idéologies ;
- famille politique ;
- électorat ;
- implantation ;
- résultats ;
- alliances ;
- programmes ;
- héritage ;
- descendants.

---

# 18. CARTOGRAPHIE ÉLECTORALE

Créer une carte interactive de France.

Lorsque les données le permettent :

- département ;
- circonscription ;
- région ;
- métropole ;
- outre-mer.

Fonctions :

- sélectionner une année ;
- sélectionner une élection ;
- afficher le parti/candidat arrivé en tête ;
- afficher les résultats ;
- comparer deux années ;
- afficher l'évolution.

Prévoir une architecture compatible avec des données géographiques GeoJSON.

---

# 19. ÉVOLUTION DU PAYSAGE POLITIQUE

Créer une visualisation montrant l'évolution des rapports de force.

Exemples :

- nombre de sièges ;
- pourcentage de voix ;
- familles politiques ;
- fragmentation ;
- alliances.

Prévoir des graphiques interactifs.

Ne jamais présenter une reconstruction statistique comme donnée officielle si elle ne l'est pas.

---

# 20. AFFICHES ET ICONOGRAPHIE

L'application doit avoir une forte richesse visuelle.

Prévoir :

- portraits ;
- affiches électorales ;
- logos historiques ;
- symboles ;
- photographies ;
- cartes ;
- documents ;
- unes de journaux ;
- tracts ;
- professions de foi ;
- manuscrits ;
- caricatures lorsque les droits le permettent.

Chaque média doit avoir :

- source ;
- auteur si connu ;
- date ;
- licence ;
- crédit ;
- URL/source ;
- statut des droits.

NE JAMAIS intégrer une image simplement parce qu'elle est trouvée sur Google Images.

---

# 21. DOCUMENTS HISTORIQUES

Créer une bibliothèque documentaire.

Types :

- programmes ;
- professions de foi ;
- discours ;
- déclarations ;
- textes fondateurs ;
- affiches ;
- tracts ;
- archives ;
- articles ;
- documents parlementaires.

Chaque document :

- titre ;
- date ;
- auteur ;
- organisme ;
- contexte ;
- transcription si disponible ;
- source ;
- licence ;
- commentaire historique.

---

# 22. MODE "DOCUMENT ORIGINAL"

Lorsqu'un document historique est disponible :

Afficher :

1. document original ;
2. métadonnées ;
3. transcription ;
4. contexte ;
5. explication ;
6. sources.

---

# 23. RECHERCHE GLOBALE

Créer un moteur de recherche.

Recherche dans :

- partis ;
- personnalités ;
- élections ;
- événements ;
- périodes ;
- documents ;
- sources ;
- familles politiques.

Exemple :

Recherche :

"Blum"

Résultats :

- Léon Blum ;
- SFIO ;
- Front populaire ;
- élections de 1936 ;
- gouvernement Blum ;
- discours ;
- événements associés ;
- documents.

---

# 24. FILTRES AVANCÉS

Filtres :

- période ;
- parti ;
- personnalité ;
- famille ;
- région ;
- élection ;
- régime ;
- type de document ;
- type d'événement.

---

# 25. MODE "COMPRENDRE UNE PÉRIODE"

Créer des dossiers pédagogiques.

Exemples :

## Comprendre 1936

- crise économique ;
- montée des ligues ;
- 6 février 1934 ;
- Front populaire ;
- élections ;
- Léon Blum ;
- réformes ;
- fin du Front populaire.

## Comprendre 1958

- crise de la IVe République ;
- guerre d'Algérie ;
- retour de De Gaulle ;
- Constitution ;
- naissance de la Ve République.

## Comprendre 1981

- alternance ;
- François Mitterrand ;
- PS ;
- programme commun ;
- premières réformes.

---

# 26. MODE "POURQUOI ?"

Créer des articles pédagogiques répondant à des questions historiques.

Exemples :

- Pourquoi le Front populaire s'est-il formé ?
- Pourquoi le Congrès de Tours est-il important ?
- Pourquoi la SFIO disparaît-elle ?
- Pourquoi le PCF devient-il important après 1945 ?
- Pourquoi le gaullisme apparaît-il ?
- Pourquoi la Ve République est-elle créée ?
- Pourquoi le RPR devient-il l'UMP ?
- Pourquoi le FN change-t-il de nom ?
- Pourquoi les écologistes deviennent-ils une force politique ?

Chaque réponse doit être sourcée.

---


---


---

# 29. FAVORIS

Permettre de sauvegarder :

- partis ;
- personnalités ;
- élections ;
- événements ;
- documents ;
- articles.

Stockage local via IndexedDB/localStorage selon architecture.

---


---

# 33. MODÈLE DE DONNÉES

Créer des données structurées.

Entités principales :

```text
Party
PoliticalFamily
Person
Election
ElectionResult
Event
Period
Regime
Coalition
Ideology
Document
Media
Speech
Program
Source
Location
Government
Office
```

---

# 34. PARTY

Exemple de structure :

```json
{
  "id": "party-example",
  "name": "Nom",
  "acronym": "XXX",
  "foundedAt": "YYYY-MM-DD",
  "dissolvedAt": null,
  "status": "historical",
  "description": "",
  "origins": [],
  "families": [],
  "leaders": [],
  "founders": [],
  "predecessors": [],
  "successors": [],
  "relations": [],
  "ideologicalProfile": {},
  "timeline": [],
  "elections": [],
  "sources": [],
  "media": []
}
```

---

# 35. RELATIONS

Les relations doivent être des données de première classe.

Exemple :

```json
{
  "source": "party-a",
  "relation": "SPLIT_FROM",
  "target": "party-b",
  "date": "1920-12-25",
  "description": "",
  "sources": []
}
```

Prévoir :

```text
FOUNDED_FROM
SPLIT_FROM
MERGED_INTO
RENAMED_TO
ABSORBED_BY
SUCCESSOR_OF
PREDECESSOR_OF
ALLIED_WITH
OPPOSED_TO
LED_BY
FOUNDED_BY
MEMBER_OF
```

---

# 36. SOURCES

Chaque information importante doit pouvoir être sourcée.

Créer une entité :

```json
{
  "id": "source-001",
  "title": "",
  "author": "",
  "publisher": "",
  "url": "",
  "publicationDate": "",
  "accessDate": "",
  "type": "",
  "license": "",
  "notes": ""
}
```

Types :

- archive ;
- institution ;
- livre ;
- article scientifique ;
- base de données ;
- musée ;
- bibliothèque ;
- source primaire ;
- source secondaire.

---

# 37. HIÉRARCHIE DES SOURCES

Privilégier :

1. archives nationales ;
2. institutions publiques ;
3. Assemblée nationale ;
4. Sénat ;
5. Vie publique ;
6. INSEE lorsque pertinent ;
7. Conseil constitutionnel ;
8. bibliothèques nationales ;
9. universités ;
10. publications scientifiques ;
11. ouvrages historiques reconnus ;
12. sources secondaires fiables.

Les données électorales doivent privilégier les sources institutionnelles.

---

# 38. SOURCES PRIMAIRES

Identifier clairement les sources primaires.

Exemples :

- programmes ;
- affiches ;
- professions de foi ;
- discours ;
- textes de congrès ;
- archives parlementaires ;
- résultats électoraux ;
- documents gouvernementaux.

---

# 39. RÈGLE ABSOLUE SUR LES DONNÉES

NE PAS inventer de :

- parti ;
- date ;
- résultat ;
- citation ;
- programme ;
- relation ;
- personnalité ;
- chiffre électoral.

Si une donnée n'est pas vérifiée :

```text
status = "unverified"
```

ou ne pas l'intégrer.

---

# 40. CITATIONS

Toute citation doit être vérifiable.

Stocker :

- auteur ;
- texte ;
- date ;
- contexte ;
- source ;
- page si disponible.

Ne pas fabriquer de citation à partir d'un résumé.

---

# 41. NEUTRALITÉ POLITIQUE

L'application ne doit pas :

- soutenir un parti ;
- critiquer un parti ;
- recommander un vote ;
- faire de propagande ;
- utiliser un vocabulaire militant sans contextualisation.

Les termes historiques sensibles doivent être contextualisés.

Pour les partis contemporains, distinguer :

- description officielle ;
- analyse historique ;
- perception publique ;
- classification académique éventuelle.

---

# 42. PARTIS CONTEMPORAINS

Pour les partis actuels :

Ne pas figer définitivement les données.

Ajouter :

```text
lastVerifiedAt
```

et :

```text
dataStatus
```

Valeurs :

- verified ;
- partially_verified ;
- historical ;
- evolving ;
- disputed.

---

# 43. DESIGN

Créer une interface :

- élégante ;
- historique ;
- moderne ;
- lisible ;
- mobile-first.

Éviter :

- interface de réseau social ;
- esthétique de site d'actualité ;
- couleurs agressives ;
- codes visuels militants.

Utiliser une identité visuelle inspirée :

- archives ;
- papier ;
- bibliothèques ;
- cartes historiques ;
- documents ;
- typographie éditoriale.

Mais garder une interface moderne.

---

# 44. COULEURS POLITIQUES

NE PAS attribuer automatiquement :

- rouge = gauche ;
- bleu = droite ;

dans toutes les visualisations.

Les couleurs doivent être configurables par parti ou famille et documentées.

Prévoir un mode accessible daltonisme.

Les couleurs ne doivent jamais être l'unique moyen de distinguer deux partis.

---

# 45. TYPOGRAPHIE

Prévoir une hiérarchie claire :

- titres ;
- dates ;
- noms ;
- citations ;
- sources ;
- corps de texte.

Les dates doivent être immédiatement visibles.

---

# 46. DESIGN MOBILE

Priorité absolue au téléphone.

Les éléments doivent être utilisables avec le doigt.

Minimum :

- boutons suffisamment grands ;
- cartes tactiles ;
- navigation basse ;
- filtres sous forme de bottom sheets ;
- timeline adaptée au mobile ;
- graphes simplifiés sur petit écran.

---

# 47. MODE DESKTOP

Sur grand écran :

- affichage en colonnes ;
- graphiques plus détaillés ;
- timeline large ;
- arbre généalogique complet ;
- cartes interactives.

---

# 48. PWA

Implémenter :

- manifest ;
- service worker ;
- cache ;
- installation ;
- icônes ;
- splash screen ;
- offline fallback ;
- stratégie de mise à jour.

Prévoir :

```text
offline-first pour les données historiques principales.
```

---

# 49. NETLIFY

Le projet doit être facilement déployable sur Netlify.

Prévoir :

- build ;
- configuration ;
- redirects ;
- headers ;
- cache ;
- PWA ;
- routes SPA.

Créer si nécessaire :

```text
netlify.toml
```

---

# 50. ARCHITECTURE TECHNIQUE

Si le projet n'existe pas encore, choisir une stack moderne adaptée à une PWA.

Priorité :

- React ;
- TypeScript ;
- Vite ;
- CSS moderne ou Tailwind ;
- bibliothèque de graphiques ;
- bibliothèque de graphes ;
- IndexedDB.

Ne pas introduire de dépendance inutile.

Architecture modulaire.

---

# 51. STRUCTURE DES DOSSIERS

Proposition :

```text
src/
├── components/
├── pages/
├── layouts/
├── features/
│   ├── parties/
│   ├── persons/
│   ├── elections/
│   ├── timeline/
│   ├── genealogy/
│   ├── maps/
│   ├── documents/
│   └── search/
├── data/
├── lib/
├── hooks/
├── services/
├── styles/
└── types/
```

Données :

```text
data/
├── parties/
├── persons/
├── elections/
├── events/
├── periods/
├── families/
├── coalitions/
├── documents/
├── sources/
└── media/
```

---

# 52. DONNÉES

Ne pas mettre toutes les données directement dans les composants React.

Les données doivent être séparées de l'interface.

Créer des fichiers JSON ou TypeScript structurés.

Exemple :

```text
data/parties/pcf.json
data/parties/sfio.json
data/persons/leon-blum.json
data/elections/1936.json
data/events/front-populaire.json
```

---

# 53. PREMIER DATASET

Ne pas essayer de créer immédiatement plusieurs milliers de fiches.

Créer d'abord un dataset de référence suffisamment riche pour tester toute l'architecture.

Inclure notamment :

## Partis / mouvements

- Parti radical ;
- SFIO ;
- PCF ;
- Fédération républicaine ;
- Alliance démocratique ;
- Action française ;
- Parti social français ;
- RPF ;
- MRP ;
- CNIP ;
- PSU ;
- UNR ;
- UDR ;
- RPR ;
- UDF ;
- PS ;
- Les Verts ;
- FN ;
- UMP ;
- MoDem ;
- EELV ;
- LR ;
- RN ;
- LFI ;
- Renaissance ;
- autres formations importantes.

Cette liste est un point de départ et ne doit pas être considérée comme exhaustive.

---

# 54. PREMIÈRES PERSONNALITÉS

Créer un premier dataset avec des personnalités représentatives des différentes périodes.

Exemples :

- Jean Jaurès ;
- Georges Clemenceau ;
- Aristide Briand ;
- Léon Blum ;
- Maurice Thorez ;
- Édouard Daladier ;
- Charles de Gaulle ;
- Pierre Mendès France ;
- François Mitterrand ;
- Valéry Giscard d'Estaing ;
- Jacques Chirac ;
- Jean-Marie Le Pen ;
- Lionel Jospin ;
- Nicolas Sarkozy ;
- François Hollande ;
- Emmanuel Macron.

Compléter ensuite progressivement.

---

# 55. PREMIERS ÉVÉNEMENTS

Créer notamment des entrées pour :

- 1901 ;
- 1905 ;
- Première Guerre mondiale ;
- Congrès de Tours ;
- Front populaire ;
- 1936 ;
- 1940 ;
- Libération ;
- 1945 ;
- 1946 ;
- 1958 ;
- Constitution de 1958 ;
- 1965 ;
- 1968 ;
- 1971 ;
- 1974 ;
- 1981 ;
- 1986 ;
- 1988 ;
- 1995 ;
- 2002 ;
- 2007 ;
- 2012 ;
- 2017 ;
- 2022 ;
- 2024.

---

# 56. PREMIÈRES ÉLECTIONS

Créer un premier dataset couvrant plusieurs périodes.

Inclure progressivement :

- législatives de 1902 ;
- législatives de 1906 ;
- législatives de 1910 ;
- législatives de 1914 ;
- législatives de 1919 ;
- législatives de 1924 ;
- législatives de 1928 ;
- législatives de 1932 ;
- législatives de 1936 ;
- élections de la Libération ;
- élections de 1946 ;
- élections de 1951 ;
- élections de 1956 ;
- élections de 1958 ;
- puis élections de la Ve République.

Ne pas inventer les résultats.

---

# 57. ÉVOLUTION DU DATASET

L'architecture doit permettre de passer progressivement de :

```text
20 partis
50 personnes
20 événements
10 élections
```

à :

```text
500+ partis/mouvements
1000+ personnalités
1000+ événements
100+ scrutins
1000+ sources
```

sans refonte de l'application.

---

# 58. ADMINISTRATION DES DONNÉES

Prévoir une architecture facilitant l'édition des données.

Même si aucun back-office complet n'est nécessaire dans la première version, les données doivent être facilement éditables.

Créer éventuellement des scripts :

```text
npm run validate:data
npm run build:data
npm run check:sources
npm run check:relations
```

---

# 59. VALIDATION DES DONNÉES

Créer un système vérifiant :

- IDs uniques ;
- relations valides ;
- dates cohérentes ;
- partis existants ;
- personnes existantes ;
- sources existantes ;
- événements correctement reliés ;
- absence de références cassées.

---

# 60. GRAPHE DE RELATIONS

Créer un moteur permettant de générer automatiquement :

- ancêtres d'un parti ;
- descendants ;
- partis liés ;
- dirigeants ;
- élections ;
- événements ;
- alliances.

Exemple :

```text
Parti
 ↓
Fondateur
 ↓
Événements
 ↓
Scission
 ↓
Partis descendants
 ↓
Élections
```

---

# 61. SEO

Même si l'application est une PWA, optimiser les pages pour le référencement.

Prévoir :

- titres ;
- meta descriptions ;
- Open Graph ;
- données structurées lorsque pertinentes ;
- URLs propres ;
- pages indexables.

Exemple :

```text
/partis/sfio
/personnalites/leon-blum
/elections/1936
/evenements/congres-de-tours
/periodes/front-populaire
```

---

# 62. ACCESSIBILITÉ

Respecter autant que possible WCAG.

Prévoir :

- navigation clavier ;
- contrastes ;
- textes alternatifs ;
- aria-labels ;
- focus visible ;
- structure sémantique ;
- taille des zones tactiles.

---

# 63. PERFORMANCE

Objectifs :

- chargement initial rapide ;
- lazy loading ;
- images optimisées ;
- WebP/AVIF ;
- code splitting ;
- virtualisation des longues listes ;
- chargement à la demande des gros graphes.

Ne pas charger toute l'encyclopédie au démarrage.

---

# 64. OFFLINE

Le contenu principal doit rester accessible hors ligne après installation.

Mettre en cache :

- interface ;
- données essentielles ;
- fiches principales ;
- images prioritaires.

Ne pas tenter de mettre en cache plusieurs gigaoctets d'archives.

---

# 65. FAVORIS HORS LIGNE

Les favoris doivent fonctionner sans connexion.

Utiliser IndexedDB ou solution équivalente.

---

# 66. DOCUMENTATION INTÉGRÉE

Créer une documentation accessible depuis l'application.

Sections :

- À propos ;
- Comment utiliser l'application ;
- Méthodologie historique ;
- Sources ;
- Politique éditoriale ;
- Politique iconographique ;
- Limites des données ;
- Glossaire ;
- Crédits.

---

# 67. GLOSSAIRE

Créer un glossaire :

- scrutin ;
- suffrage ;
- proportionnelle ;
- scrutin majoritaire ;
- coalition ;
- congrès ;
- scission ;
- fusion ;
- groupe parlementaire ;
- famille politique ;
- programme ;
- motion ;
- investiture ;
- référendum ;
- etc.

Chaque terme doit être expliqué simplement.

---

# 68. PAGE SOURCES

Créer une page dédiée :

> D'où viennent les informations ?

Classer les sources.

Afficher :

- institutions ;
- archives ;
- bibliothèques ;
- ouvrages ;
- articles scientifiques ;
- bases électorales.

Chaque fiche doit pouvoir afficher ses sources.

---

# 69. PAGE MÉTHODOLOGIE

Expliquer :

- comment les partis sont sélectionnés ;
- comment les familles sont déterminées ;
- comment les résultats électoraux sont traités ;
- comment les relations entre partis sont établies ;
- comment les images sont sélectionnées ;
- comment les incertitudes sont indiquées.

---

# 70. CONTENU CONTEMPORAIN

Pour les formations actuelles :

Afficher clairement :

> Données susceptibles d'évoluer.

Afficher :

> Dernière vérification : JJ/MM/AAAA

Ne jamais présenter une donnée contemporaine comme définitivement figée.

---

# 71. TESTS

Créer des tests pour :

## Données

- validation des JSON ;
- relations ;
- dates ;
- sources.

## Interface

- recherche ;
- filtres ;
- navigation ;
- favoris.

## Fonctionnalités

- timeline ;
- arbre généalogique ;
- comparateur ;
- quiz ;
- cartes.

## PWA

- manifest ;
- service worker ;
- offline ;
- installation.

---

# 72. TESTS CRITIQUES

Tester notamment :

### Recherche

"Jaurès"

### Recherche

"SFIO"

### Timeline

1900 → 2026

### Généalogie

Parti → descendants

### Élection

1936

### Comparateur

SFIO vs PCF

### Favoris

Ajouter / supprimer

### Offline

Couper la connexion et naviguer dans les données déjà mises en cache.

---

# 73. RESPONSIVE TESTS

Tester au minimum :

- 360 px ;
- 390 px ;
- 412 px ;
- 768 px ;
- 1024 px ;
- 1440 px.

---

# 74. PWA INSTALLABLE

Vérifier :

- manifest valide ;
- icônes ;
- service worker ;
- HTTPS en production ;
- installation Android ;
- écran de lancement ;
- fonctionnement offline.

---

# 75. QUALITÉ DES DONNÉES

Créer un rapport automatique :

```text
DATA QUALITY REPORT

Partis : 42
Personnalités : 50
Élections : 20
Événements : 80

Sources : 125

Relations cassées : 0
Dates invalides : 0
Citations non sourcées : 0
Images sans crédit : 0
```

---

# 76. SCRIPT DE CONTRÔLE

Créer :

```bash
npm run validate:data
```

Il doit détecter :

- doublons ;
- IDs inconnus ;
- relations invalides ;
- dates incohérentes ;
- sources manquantes ;
- médias sans crédits.

---

# 77. README

Créer un README complet contenant :

- présentation ;
- installation ;
- développement ;
- build ;
- tests ;
- structure ;
- données ;
- ajout d'une fiche ;
- ajout d'une source ;
- ajout d'une relation ;
- déploiement Netlify.

---

# 78. DOCUMENTS DU PROJET

Créer également :

```text
PROMPT.md
DOCUMENTATION_SPEC.md
DATA_MODEL.md
CONTENT_GUIDELINES.md
SOURCES_POLICY.md
ROADMAP.md
README.md
```

Ces fichiers doivent être cohérents entre eux.

---

# 79. ROADMAP

## PHASE 1 — SOCLE

Créer :

- PWA ;
- navigation ;
- design system ;
- accueil ;
- données ;
- recherche ;
- fiche parti ;
- fiche personne ;
- fiche événement.

## PHASE 2 — CHRONOLOGIE

Ajouter :

- timeline ;
- filtres ;
- périodes ;
- événements ;
- liens croisés.

## PHASE 3 — GÉNÉALOGIE

Ajouter :

- graphe ;
- relations ;
- descendants ;
- ancêtres ;
- fusions ;
- scissions.

## PHASE 4 — ÉLECTIONS

Ajouter :

- élections ;
- résultats ;
- graphiques ;
- comparateur.

## PHASE 5 — CARTES

Ajouter :

- GeoJSON ;
- carte France ;
- résultats ;
- comparaison historique.

## PHASE 6 — DOCUMENTS

Ajouter :

- affiches ;
- documents ;
- discours ;
- programmes ;
- iconographie ;
- crédits.

## PHASE 7 — PÉDAGOGIE

Ajouter :

- glossaire ;

## PHASE 8 — OPTIMISATION

Ajouter :

- SEO ;
- offline avancé ;
- performance ;
- accessibilité ;
- tests ;
- qualité des données.

---

# 80. IMPORTANT — COMPORTEMENT ATTENDU DE CODEX

Tu dois réellement implémenter l'application.

NE PAS :

- créer uniquement une maquette ;
- créer uniquement quelques composants ;
- remplacer les données par du lorem ipsum ;
- créer des relations fictives ;
- inventer des résultats électoraux ;
- déclarer une fonctionnalité "terminée" si elle n'est pas fonctionnelle.

À chaque étape :

1. inspecter le projet existant ;
2. comprendre l'architecture ;
3. modifier les fichiers nécessaires ;
4. implémenter ;
5. lancer les tests ;
6. corriger les erreurs ;
7. vérifier le build ;
8. documenter le travail effectué.

---

# 81. RÈGLE SUR LES DONNÉES HISTORIQUES

Si une donnée n'est pas suffisamment vérifiable :

NE PAS LA DEVINER.

Utiliser :

```text
TODO_DATA
```

ou :

```text
NEEDS_SOURCE
```

et documenter ce qui manque.

Il vaut mieux avoir moins de données mais des données fiables.

---

# 82. RÈGLE SUR LES PARTIS

Ne pas confondre :

- parti ;
- mouvement ;
- coalition ;
- groupe parlementaire ;
- courant interne ;
- famille politique ;
- association ;
- syndicat ;
- gouvernement.

Ces concepts doivent être séparés dans le modèle de données.

---

# 83. RÈGLE SUR LES CHANGEMENTS DE NOM

Un changement de nom ne signifie pas nécessairement la création d'un nouveau parti.

Le modèle doit permettre de représenter :

```text
Même organisation
      ↓
Changement de nom
      ↓
Nouvelle appellation
```

mais également :

```text
Organisation A
      ↓
Dissolution
      ↓
Organisation B
```

Ces deux cas doivent être distinguables.

---

# 84. RÈGLE SUR LES FUSIONS

Une fusion peut avoir plusieurs partis sources.

Le modèle doit permettre :

```text
PARTI A ───┐
           ├──> PARTI C
PARTI B ───┘
```

---

# 85. RÈGLE SUR LES SCISSIONS

Une scission peut produire plusieurs organisations.

```text
PARTI A
   │
   ├──> PARTI B
   ├──> PARTI C
   └──> PARTI D
```

---

# 86. RÈGLE SUR LES ALLIANCES

Une alliance n'implique pas nécessairement une fusion.

Elle doit être représentée comme une relation distincte.

Exemple :

```text
PARTI A
    \
     ALLIANCE
    /
PARTI B
```

---

# 87. RÈGLE SUR LES GROUPES PARLEMENTAIRES

Ne jamais assimiler automatiquement :

```text
groupe parlementaire = parti politique
```

Ils doivent être deux entités différentes.

---

# 88. RÈGLE SUR LES GOUVERNEMENTS

Créer une entité Government.

Elle doit pouvoir référencer :

- Premier ministre ;
- président ;
- dates ;
- partis participants ;
- ministres ;
- contexte ;
- événements ;
- sources.

---

# 89. INTERCONNEXION DES DONNÉES

Chaque page doit proposer des liens contextuels.

Exemple :

Sur la page de Léon Blum :

```text
Léon Blum
 ↓
SFIO
 ↓
Front populaire
 ↓
1936
 ↓
Élections législatives
 ↓
Gouvernement Blum
```

---

# 90. EXPLORATION LIBRE

L'utilisateur doit pouvoir commencer n'importe où.

Exemple :

```text
Carte
 ↓
1936
 ↓
Front populaire
 ↓
Léon Blum
 ↓
SFIO
 ↓
Congrès de Tours
 ↓
PCF
```

Le système doit encourager cette exploration.

---

# 91. OBJECTIF UX

L'utilisateur doit toujours pouvoir répondre à trois questions :

### Où suis-je ?

Afficher le contexte historique.

### Comment suis-je arrivé ici ?

Afficher le chemin de navigation.

### Que puis-je découvrir ensuite ?

Afficher :

- événements liés ;
- partis liés ;
- personnalités ;
- élections ;
- documents.

---

# 92. PAGE "À PROPOS"

Présenter :

> Cette application est un projet documentaire et pédagogique consacré à l'histoire politique française.

Préciser :

- objectif historique ;
- neutralité ;
- sources ;
- méthodologie ;
- limites.

---

# 93. CLAUSE HISTORIQUE

Ajouter :

> Les informations présentées ont une vocation historique et documentaire. Elles ne constituent ni une recommandation politique, ni une consigne de vote, ni une prise de position en faveur ou contre un parti ou une personnalité.

Adapter la formulation si nécessaire.

---

# 94. PREMIÈRE VERSION ATTENDUE

La première version fonctionnelle doit au minimum proposer :

- accueil ;
- navigation ;
- recherche ;
- chronologie ;
- partis ;
- personnalités ;
- événements ;
- élections ;
- fiche détaillée ;
- relations entre données ;
- arbre généalogique fonctionnel ;
- sources ;
- favoris ;
- PWA ;
- responsive ;
- offline de base.

---

# 95. CRITÈRE DE RÉUSSITE

Le projet est considéré comme réussi lorsque l'utilisateur peut faire ce parcours :

```text
Accueil
 ↓
Chronologie
 ↓
1936
 ↓
Front populaire
 ↓
Léon Blum
 ↓
SFIO
 ↓
Généalogie
 ↓
PCF
 ↓
Congrès de Tours
 ↓
1920
 ↓
Élections
```

sans quitter l'application.

---

# 96. PRIORITÉS

Priorité absolue :

1. qualité des données ;
2. modèle relationnel ;
3. chronologie ;
4. généalogie des partis ;
5. navigation entre entités ;
6. recherche ;
7. fiches ;
8. élections ;
9. iconographie ;
10. pédagogie.

Ne pas sacrifier le modèle de données pour créer rapidement des effets visuels.

---

# 97. CONSIGNE FINALE À CODEX

Commence par inspecter le dépôt.

Si une application existe déjà :

- conserver ce qui est réutilisable ;
- identifier les composants existants ;
- identifier la stack ;
- identifier les conventions ;
- éviter de réécrire inutilement.

Si le projet est vide :

- initialiser la stack ;
- créer l'architecture ;
- installer uniquement les dépendances nécessaires.

Ensuite :

1. créer le socle ;
2. créer le modèle de données ;
3. créer le premier dataset ;
4. créer les pages ;
5. créer les relations ;
6. créer la timeline ;
7. créer la généalogie ;
8. créer les élections ;
9. créer la recherche ;
10. créer les favoris ;
11. créer la PWA ;
12. créer les tests ;
13. lancer le build ;
14. corriger toutes les erreurs ;
15. documenter.

À la fin de chaque phase, fournir un résumé :

```text
PHASE TERMINÉE

Fonctionnalités implémentées :
- ...
- ...

Fichiers créés :
- ...
- ...

Tests :
- ...

Build :
- PASS / FAIL

Données :
- ...

Prochaine phase :
- ...
```

NE PAS déclarer le projet terminé tant que les fonctionnalités annoncées ne sont pas réellement opérationnelles.

Commencer maintenant.
