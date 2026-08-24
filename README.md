# HistPoliticor

Application web progressive consacrée à l'histoire des partis politiques français de 1900 à aujourd'hui.

## Installation

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run validate:data
npm run test
npm run build
```

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

Pour ajouter une fiche :

1. Ajouter l'entité dans `src/data/core.ts` ou `src/data/documents.ts`.
2. Ajouter ses sources dans `src/data/sources.ts`.
3. Ajouter les relations utiles dans `relations`.
4. Lancer `npm run validate:data`.

Ne pas intégrer de résultat électoral, citation ou date précise sans source vérifiable. Utiliser `TODO_DATA`, `NEEDS_SOURCE` ou `dataStatus: "unverified"` si une information reste à contrôler.

## Déploiement Netlify

`netlify.toml` configure le build Vite, les routes SPA et les headers de base. La commande de production est `npm run build`, avec publication du dossier `dist`.
