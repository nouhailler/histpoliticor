import type { DocumentRecord } from "../types/domain";

export const documents: DocumentRecord[] = [
  {
    id: "document-constitution-1958",
    title: "Constitution du 4 octobre 1958",
    date: "1958-10-04",
    type: "texte_fondateur",
    organization: "République française",
    context: "Texte constitutionnel fondateur de la Ve République.",
    sources: ["source-conseil-constitutionnel-1958"],
    license: "Source institutionnelle publique ; vérifier les conditions de réutilisation avant reproduction intégrale.",
    dataStatus: "verified"
  },
  {
    id: "document-front-populaire-note",
    title: "Dossier documentaire sur le Front populaire",
    type: "article",
    organization: "Vie publique",
    context: "Notice pédagogique utilisée comme source secondaire institutionnelle.",
    sources: ["source-vie-publique-front-populaire"],
    dataStatus: "partially_verified"
  }
];
