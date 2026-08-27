# Contexte du projet

## Objet

HistPoliticor est une PWA React/TypeScript/Vite consacrée à l'histoire politique française de 1880 à aujourd'hui. L'application permet d'explorer des partis, personnalités, élections, événements, familles idéologiques et relations historiques.

Le projet est hébergé sur GitHub :

`https://github.com/nouhailler/histpoliticor`

## État du corpus

Le dataset est local. Au 27 août 2026, il contient 109 partis et mouvements, 151 personnalités, 43 élections, 185 événements et 171 sources. Les périodes déjà structurées comprennent notamment :

- 1880-1899 : consolidation républicaine, mouvement ouvrier, boulangisme et affaire Dreyfus ;
- IIIe République : radicalisme, républicains modérés, socialismes, SFIO, ligues et Front populaire ;
- IVe République : PCF, SFIO, MRP, RPF, CNIP, UDSR et recompositions liées à la décolonisation ;
- Ve République : gaullisme, UNR/UNR-UDT/UDR/RPR, UDF, PS, PCF, écologie, souverainisme et extrême droite ;
- années 1990-2000 : Gauche plurielle, MDC/MRC, UMP, MoDem, MPF, RPF souverainiste, MNR et altermondialisme ;
- années 2010-2020 : Hollande, Macron, LREM, LFI, EELV, LR, RN, DLF, UPR, NPA, NUPES, Reconquête et Parti animaliste ;
- crises politiques, partisanes, économiques, sociales, militaires, sanitaires, environnementales et territoriales jusqu'en 2026.

Les coalitions et associations sont modélisées comme telles. Une coalition ne doit pas être présentée comme un parti unifié et une association ne doit pas être transformée en parti par commodité.

## Architecture des données

- `src/data/core.ts` contient les régimes, périodes, familles politiques, partis, personnes, élections, événements et relations ;
- `src/data/crises.ts` contient les crises supplémentaires, leur typologie, leurs conséquences et leurs sources ;
- `src/data/electionResults.ts` contient les résumés publics et les sources institutionnelles des résultats des 43 élections ;
- `src/data/historicalQuotes.ts` contient le corpus de citations historiques affiché en rotation sur l'accueil ;
- `src/data/index.ts` fusionne le corpus principal et le corpus de crises ;
- `src/data/sources.ts` contient les références documentaires ;
- `src/data/documents.ts` contient les documents et textes politiques ;
- `src/data/partyLogos.ts` est le manifeste généré des logos, auteurs et licences ;
- `src/data/personPortraits.ts` est le manifeste généré des portraits, articles Wikipédia, auteurs et licences ;
- `src/data/personProfiles.ts` contient les 151 profils biographiques générés depuis Wikipédia et Wikidata, avec leur attribution ;
- `src/types/domain.ts` définit les contrats TypeScript du domaine ;
- `scripts/validate-data.ts` vérifie la cohérence du corpus ;
- `scripts/fetch-party-logos.ts` recherche, contrôle et télécharge la sélection de logos Wikimedia Commons ;
- `scripts/fetch-person-portraits.ts` rapproche les personnes avec Wikidata et télécharge les portraits libres de Wikimedia Commons ;
- `scripts/fetch-person-profiles.ts` rapproche les personnes avec Wikipédia/Wikidata et génère les biographies et faits structurés ;
- `public/logos/parties` contient les 52 fichiers de logos servis localement ;
- `public/images/persons` contient les 139 portraits servis localement ;
- `public/icons` contient le logo maître, le favicon, l'icône iOS et les variantes PWA standard et maskable ;
- `src/data/data.test.ts` contient les tests de cohérence du corpus et des logos ;
- `src/lib/appUpdate.ts` détecte les nouvelles versions, conserve le réglage automatique et pilote l'activation du service worker ;
- `src/lib/genealogy.ts` normalise les relations de filiation et calcule la disposition du graphe généalogique ;
- `src/lib/genealogy.test.ts` vérifie le sens des relations, la chaîne gaulliste et la progression gauche-droite du graphe ;

Les relations sont des objets de données à part entière. Elles utilisent notamment `FOUNDED_FROM`, `SPLIT_FROM`, `MERGED_INTO`, `RENAMED_TO`, `SUCCESSOR_OF`, `ALLIED_WITH` et `FOUNDED_BY`.

## Chronologie et affichage

La chronologie est générée à partir des événements, des élections, des dates de création des partis et des relations datées. Elle propose des filtres idéologiques et des filtres par type.

L'accueil calcule chaque jour une sélection déterministe d'événements, personnalités, partis, élections et transformations disposant de sources. « Ce jour-là » privilégie les entrées dont le mois et le jour correspondent à la date courante, puis une entrée du même mois. Dix citations de Jean Jaurès, Paul Lafargue, Jules Guesde et Aristide Briand sont proposées en rotation quotidienne ; chacune est reliée à la fiche de son auteur et à une transcription primaire du domaine public sur Wikisource. Toutes les cartes, les jalons 1905, 1920, 1936 et 1958, ainsi que la clause historique sont des zones interactives. Les jalons ouvrent une route de chronologie annuelle (`/timeline/:année`) et initialisent le filtre d'année correspondant.

La navigation principale utilise un menu hamburger disponible sur mobile et ordinateur. Ses entrées sont regroupées en trois catégories : exploration historique, acteurs politiques et documentation. Le panneau gère le focus clavier, la touche Échap, l'état actif et la fermeture par clic hors du menu.

La rubrique « Paramètres » affiche la version issue de `package.json` et la date du build. `vite.config.ts` injecte ces informations dans le bundle et génère `version.json`. La vérification automatique se fait au démarrage, au retour en ligne, lorsque l'application redevient visible et toutes les 30 minutes. Une nouvelle version déclenche la mise à jour du service worker puis le rechargement de l'application ; le réglage est conservé dans `localStorage` et peut être désactivé.

Le volet d'une entrée et la fiche événement complète exposent dix ensembles historiques : élections, créations de partis, scissions, fusions, changements de nom, présidents, gouvernements, crises, référendums et guerres. Les associations sont calculées par chevauchement de dates, période et régime. Les champs techniques `importance`, `category` et `dataStatus` restent disponibles dans le modèle, mais ne sont pas affichés comme métadonnées publiques.

Chaque fiche élection affiche désormais un bloc « Résultat du scrutin » distinct des conséquences politiques. Les 43 résumés publics sont reliés à des références institutionnelles de l'Assemblée nationale, du ministère de l'Intérieur, de Vie publique ou du Parlement européen. Les modes de scrutin ne contiennent plus de marqueur technique ; une valeur publique adaptée au type d'élection est utilisée lorsque le corpus ancien ne fournit pas de libellé spécifique.

La page « Généalogie des partis » produit un graphe orienté à partir des relations entre formations. L'utilisateur choisit une famille politique, active ou masque les créations, scissions, fusions, changements de nom et successions, sélectionne un parti ou une transformation et ajuste le zoom. Le moteur inverse les relations dont le modèle est exprimé depuis le successeur (`FOUNDED_FROM`, `SPLIT_FROM`, `SUCCESSOR_OF`) afin que la lecture visuelle reste toujours origine → nouvelle formation. Les partis disparus et actifs ont des états distincts ; les fiches complètes restent accessibles depuis le panneau contextuel.

Le parcours gaulliste de référence est RPF → Républicains sociaux → UNR, puis fusion de l'UNR et de l'UDT dans l'UNR-UDT, changement de nom en UDR, et continuité UDR → RPR → UMP → LR. La bifurcation RPR → RPF souverainiste et l'apport de Démocratie libérale à l'UMP sont également représentés.

## Logos

La page « Partis et mouvements » affiche un logo local lorsqu'un fichier libre et non ambigu a été validé sur Wikimedia Commons. Les autres fiches utilisent un monogramme. Les crédits et licences des 52 logos sont accessibles sous la grille.

L'import est reproductible avec :

```bash
npm run fetch:party-logos -- --download
```

Le script vérifie une licence libre reconnue, télécharge une miniature locale et régénère `src/data/partyLogos.ts`. Les éventuels droits de marque restent distincts de la licence du fichier.

## Portraits et profils biographiques

Les cartes et les fiches « Personnalités » utilisent l'un des 139 portraits locaux lorsqu'une correspondance Wikidata fiable a été établie avec le nom et, lorsqu'elle est disponible, la date de naissance. La fiche affiche l'auteur, la licence, la page du fichier Commons et la notice Wikipédia. Les cas ambigus ou sans image libre utilisent un monogramme.

L'import est reproductible avec :

```bash
npm run fetch:person-portraits -- --download
```

Les 151 fiches disposent également d'une introduction biographique issue de Wikipédia en français et de données structurées issues de Wikidata : lieux de naissance et de décès, nationalité, activités, formation, appartenances politiques et fonctions ou mandats datés. Le résumé éditorial local est conservé en tête de la biographie. Les sources, la licence Creative Commons et la date de récupération sont visibles sur la fiche.

L'import des profils est reproductible avec :

```bash
npm run fetch:person-profiles -- --download
```

## Règles éditoriales

1. Toute date précise, résultat électoral, citation ou filiation doit être relié à une source identifiable.
2. Ne pas inventer de pourcentage ou de nombre de sièges. En cas d'absence de source consolidée, utiliser une note `TODO_DATA` et un `dataStatus` prudent.
3. Distinguer les partis, coalitions, mouvements, ligues, associations et listes électorales avec le champ `status`.
4. Ne pas projeter un nom contemporain sur une période antérieure. Exemple : le Front national reste nommé FN avant 2018 ; le Rassemblement national est une fiche distincte à partir de 2018.
5. Signaler les corrections historiques dans `historicalNote`, notamment lorsqu'une liste utilisateur contient un anachronisme ou une attribution incertaine.
6. Préserver les fiches existantes et leurs sources lors d'une extension. Les relations nouvelles doivent décrire une transformation historique réelle.
7. Ne jamais associer un logo sur la seule base d'un sigle ou d'un nom ambigu ; conserver sa page Commons, son auteur et sa licence.
8. Pour un portrait, contrôler l'identité avec Wikidata et conserver la notice Wikipédia, le fichier Commons, l'auteur et la licence.
9. Pour une biographie importée, afficher l'attribution Wikipédia/Wikidata, la licence et la date de récupération ; conserver séparément le résumé éditorial local.

## Validation locale

Depuis la racine du dépôt :

```bash
npm install
npm run validate:data
npm run test
npm run build
npm run dev
npm run fetch:party-logos -- --download
npm run fetch:person-portraits -- --download
npm run fetch:person-profiles -- --download
```

Le serveur de développement est généralement disponible sur `http://localhost:5173`. Pour tester le build compilé :

```bash
npm run preview
```

## Déploiement

Le projet utilise Vite et Netlify. `netlify.toml` configure la compilation, la publication du dossier `dist`, les routes SPA et les en-têtes de base.

## Limites connues

- Les fiches électorales privilégient un résultat national consolidé et lisible ; elles ne reproduisent pas encore toutes les tables par circonscription ou par candidat lorsqu'elles dépassent le périmètre encyclopédique de la fiche.
- Plusieurs mouvements historiques disposent de sources de cadrage provisoires ; ils sont marqués `partially_verified` ou `unverified`.
- 55 formations n'ont pas de logo libre suffisamment fiable dans la sélection actuelle et utilisent donc un monogramme.
- 12 personnalités n'ont pas de portrait libre suffisamment fiable dans la sélection actuelle et utilisent donc un monogramme.
- Le bundle de production peut dépasser le seuil d'avertissement Vite de 500 kB ; cela ne bloque pas la compilation mais pourra justifier un découpage ultérieur.
