# HistPoliticor

HistPoliticor est une application web progressive consacrée à l'histoire des partis, mouvements, coalitions et personnalités politiques françaises, de 1900 à aujourd'hui.

Le projet privilégie un dataset historique local, relationnel et traçable : les partis, personnes, élections, événements, familles politiques et sources sont consultables séparément et reliés entre eux.

## Installation

```bash
npm install
npm run dev
```

L'application est alors disponible sur l'URL affichée par Vite, généralement `http://localhost:5173`.

## Scripts

```bash
npm run validate:data
npm run test
npm run build
npm run preview
```

`npm run preview` sert localement le build de production.

## Structure

```text
src/
  data/       Données historiques locales
  lib/        Fonctions de navigation relationnelle
  styles/     Interface mobile-first
  types/      Modèle éditorial et relationnel
scripts/      Validation du dataset
public/       Manifest, service worker, icône et page hors ligne
```

## Données

Les données principales sont locales et séparées des composants React. Les relations entre entités sont des données de première classe.

Le corpus couvre notamment les recompositions suivantes :

- structuration des partis de la IIIe République et de la SFIO ;
- scission de Tours, Front populaire et recompositions de l'après-guerre ;
- IVe République, gaullisme, Ve République et décolonisation ;
- recompositions des années 1970 à 1990 : PS, PCF, UDF, RPR, FN, écologie et souverainisme ;
- alternances et cohabitations des années 1990 et 2000 ;
- UMP/LR, LREM, LFI, EELV, RN et nouveaux mouvements depuis 2010.

Les associations, ligues et coalitions sont conservées lorsqu'elles jouent un rôle historique important, avec un `status` explicite afin de ne pas les confondre avec des partis.

Pour ajouter une fiche :

1. Ajouter l'entité dans `src/data/core.ts` ou `src/data/documents.ts`.
2. Ajouter ses sources dans `src/data/sources.ts`.
3. Ajouter les relations utiles dans `relations`.
4. Lancer `npm run validate:data`.

Ne pas intégrer de résultat électoral, citation ou date précise sans source vérifiable. Utiliser `TODO_DATA`, `NEEDS_SOURCE` ou `dataStatus: "unverified"` si une information reste à contrôler.

Les listes historiques fournies comme matériau de travail peuvent contenir des anachronismes ou des approximations. Ils doivent être corrigés dans `historicalNote` et ne doivent pas être propagés silencieusement dans les données.

## Qualité et tests

Avant toute contribution :

```bash
npm run validate:data
npm run test
npm run build
```

Le validateur contrôle notamment les identifiants en double, les références cassées, les sources absentes et les dates invalides.

## Contribution éditoriale

Les modifications doivent rester ciblées, documenter les incertitudes et conserver les sources existantes. Une nouvelle relation doit être ajoutée seulement lorsqu'elle apporte une information historique identifiable : fondation, scission, fusion, changement de nom, alliance ou succession.

## Déploiement Netlify

`netlify.toml` configure le build Vite, les routes SPA et les headers de base. La commande de production est `npm run build`, avec publication du dossier `dist`.
