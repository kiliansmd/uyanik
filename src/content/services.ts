import type { ServicePage } from '@/types/content';

export const servicePages: ServicePage[] = [
  { slug: 'schwindel-tinnitus', title: 'Schwindel & Tinnitus', eyebrow: 'Gleichgewicht und Ohr', summary: 'Sorgfältige Abklärung bei Schwindel, Gleichgewichtsbeschwerden, Ohrgeräuschen und Hörveränderungen.', sections: ['Beschwerden und Verlauf genau beschreiben', 'HNO-Ursachen und weitere Faktoren einordnen', 'Nächste Schritte je nach Befund besprechen'] },
  { slug: 'schnarchen-schlafdiagnostik', title: 'Schnarchen & Schlafdiagnostik', eyebrow: 'Atmung im Schlaf', summary: 'HNO-ärztliche Einschätzung bei Schnarchen, unruhigem Schlaf und möglichen nächtlichen Atemproblemen.', sections: ['Schlafverhalten und Begleitsymptome besprechen', 'Mögliche anatomische Faktoren untersuchen', 'Geeignete Behandlungsmöglichkeiten abhängig vom Befund abwägen'] },
  { slug: 'nase-nasenchirurgie', title: 'Nase, Nasenatmung & Nasenchirurgie', eyebrow: 'Nasenatmung', summary: 'Abklärung eingeschränkter Nasenatmung und Beratung zu konservativen sowie operativen Möglichkeiten.', sections: ['Verlauf, Allergien und bisherige Behandlungen erfassen', 'Funktionelle und anatomische Faktoren einordnen', 'Operative Optionen erst nach Untersuchung beraten'] },
  { slug: 'kinder-hno', title: 'Kinder-HNO & ambulante Eingriffe', eyebrow: 'Für Familien', summary: 'Kindgerechte HNO-Sprechstunde für wiederkehrende Ohr-, Nasen- und Halsbeschwerden.', sections: ['Ruhige Untersuchung für Kinder', 'Eltern verständlich einbeziehen', 'Konservative und operative Möglichkeiten vorsichtig abwägen'] },
];
