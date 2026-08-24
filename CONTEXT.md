# Contexte du projet

## Objet

HistPoliticor est une PWA React/TypeScript/Vite consacrée à l'histoire politique française. L'application permet d'explorer des partis, personnalités, élections, événements, familles idéologiques et relations historiques.

Le projet est hébergé sur GitHub :

`https://github.com/nouhailler/histpoliticor`

## État du corpus

Le dataset est local et couvre les principaux acteurs de 1900 à aujourd'hui. Les périodes déjà structurées comprennent notamment :

- IIIe République : radicalisme, républicains modérés, socialismes, SFIO, ligues et Front populaire ;
- IVe République : PCF, SFIO, MRP, RPF, CNIP, UDSR et recompositions liées à la décolonisation ;
- Ve République : gaullisme, UNR/UDR/RPR, UDF, PS, PCF, écologie, souverainisme et extrême droite ;
- années 1990-2000 : Gauche plurielle, MDC/MRC, UMP, MoDem, MPF, RPF souverainiste, MNR et altermondialisme ;
- années 2010 : Hollande, Macron, LREM, LFI, EELV, LR, RN, DLF, UPR, NPA et Parti animaliste.

Les coalitions et associations sont modélisées comme telles. Une coalition ne doit pas être présentée comme un parti unifié et une association ne doit pas être transformée en parti par commodité.

## Architecture des données

- `src/data/core.ts` contient les régimes, périodes, familles politiques, partis, personnes, élections, événements et relations ;
- `src/data/sources.ts` contient les références documentaires ;
- `src/data/documents.ts` contient les documents et textes politiques ;
- `src/types/domain.ts` définit les contrats TypeScript du domaine ;
- `scripts/validate-data.ts` vérifie la cohérence du corpus ;
- `src/data/data.test.ts` contient les tests de cohérence de base.

Les relations sont des objets de données à part entière. Elles utilisent notamment `FOUNDED_FROM`, `SPLIT_FROM`, `MERGED_INTO`, `RENAMED_TO`, `SUCCESSOR_OF`, `ALLIED_WITH` et `FOUNDED_BY`.

## Règles éditoriales

1. Toute date précise, résultat électoral, citation ou filiation doit être relié à une source identifiable.
2. Ne pas inventer de pourcentage ou de nombre de sièges. En cas d'absence de source consolidée, utiliser une note `TODO_DATA` et un `dataStatus` prudent.
3. Distinguer les partis, coalitions, mouvements, ligues, associations et listes électorales avec le champ `status`.
4. Ne pas projeter un nom contemporain sur une période antérieure. Exemple : le Front national reste nommé FN avant 2018 ; le Rassemblement national est une fiche distincte à partir de 2018.
5. Signaler les corrections historiques dans `historicalNote`, notamment lorsqu'une liste utilisateur contient un anachronisme ou une attribution incertaine.
6. Préserver les fiches existantes et leurs sources lors d'une extension. Les relations nouvelles doivent décrire une transformation historique réelle.

## Validation locale

Depuis la racine du dépôt :

```bash
npm install
npm run validate:data
npm run test
npm run build
npm run dev
```

Le serveur de développement est généralement disponible sur `http://localhost:5173`. Pour tester le build compilé :

```bash
npm run preview
```

## Déploiement

Le projet utilise Vite et Netlify. `netlify.toml` configure la compilation, la publication du dossier `dist`, les routes SPA et les en-têtes de base.

## Limites connues

- Certains résultats électoraux détaillés restent volontairement non chiffrés tant qu'une source officielle homogène n'est pas intégrée.
- Plusieurs mouvements historiques disposent de sources de cadrage provisoires ; ils sont marqués `partially_verified` ou `unverified`.
- Le bundle de production peut dépasser le seuil d'avertissement Vite de 500 kB ; cela ne bloque pas la compilation mais pourra justifier un découpage ultérieur.
