# DATA_MODEL.md

Le modèle distingue les entités historiques afin de ne pas confondre parti, coalition, famille politique, personnalité, événement, élection, document ou source.

Entités principales implémentées :

- `Party`
- `PoliticalFamily`
- `Person`
- `Election`
- `Event`
- `Period`
- `Regime`
- `Document`
- `Source`
- `Relation`

Les relations sont stockées comme données autonomes avec `source`, `target`, `relation`, `date`, `description`, `sources` et `dataStatus`.

Types de relations prévus : `FOUNDED_FROM`, `SPLIT_FROM`, `MERGED_INTO`, `RENAMED_TO`, `ABSORBED_BY`, `SUCCESSOR_OF`, `PREDECESSOR_OF`, `ALLIED_WITH`, `OPPOSED_TO`, `LED_BY`, `FOUNDED_BY`, `MEMBER_OF`.
