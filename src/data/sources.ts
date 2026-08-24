import type { Source } from "../types/domain";

export const sources: Source[] = [
  {
    id: "source-vie-publique-front-populaire",
    title: "Le Front populaire",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/fiches/19522-quest-ce-que-le-front-populaire",
    type: "institution",
    accessDate: "2026-08-24"
  },
  {
    id: "source-assemblee-1936",
    title: "Histoire de l'Assemblée nationale - IIIe Republique",
    publisher: "Assemblée nationale",
    url: "https://www.assemblee-nationale.fr/dyn/histoire",
    type: "institution",
    accessDate: "2026-08-24"
  },
  {
    id: "source-bnf-blum",
    title: "Leon Blum",
    publisher: "Bibliothèque nationale de France - data.bnf.fr",
    url: "https://data.bnf.fr/fr/11951313/leon_blum/",
    type: "bibliotheque",
    accessDate: "2026-08-24"
  },
  {
    id: "source-vie-publique-1958",
    title: "La Constitution du 4 octobre 1958",
    publisher: "Vie publique",
    url: "https://www.vie-publique.fr/fiches/19545-la-constitution-du-4-octobre-1958",
    type: "institution",
    accessDate: "2026-08-24"
  },
  {
    id: "source-conseil-constitutionnel-1958",
    title: "Constitution du 4 octobre 1958",
    publisher: "Conseil constitutionnel",
    url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/constitution-du-4-octobre-1958",
    type: "source_primaire",
    accessDate: "2026-08-24"
  },
  {
    id: "source-pcf-histoire",
    title: "Repères historiques du Parti communiste français",
    publisher: "Parti communiste français",
    url: "https://www.pcf.fr/",
    type: "source_secondaire",
    accessDate: "2026-08-24",
    notes: "Source partisane à confronter avec des sources institutionnelles ou scientifiques."
  },
  {
    id: "source-maitron-tours",
    title: "Congrès de Tours",
    publisher: "Le Maitron",
    url: "https://maitron.fr/",
    type: "source_secondaire",
    accessDate: "2026-08-24"
  }
];
