import type { ServicePage } from '@/types/content';

export const servicePages: ServicePage[] = [
  { slug: 'schwindel-tinnitus', title: 'Schwindel & Tinnitus', eyebrow: 'Diagnostik und Beratung', summary: 'Strukturierte Abklärung bei Ohrgeräuschen, Hörveränderungen und Gleichgewichtsbeschwerden.', sections: ['Anamnese mit ausreichend Zeit', 'Einordnung möglicher HNO-Ursachen', 'Besprechung sinnvoller nächster Schritte'] },
  { slug: 'schnarchen-schlafdiagnostik', title: 'Schnarchen & Schlafdiagnostik', eyebrow: 'Atmung im Schlaf', summary: 'HNO-ärztliche Einschätzung bei Schnarchen und Verdacht auf schlafbezogene Atemprobleme.', sections: ['Untersuchung der oberen Atemwege', 'Beratung zu konservativen Optionen', 'Koordination weiterer Diagnostik nach Befund'] },
  { slug: 'nase-nasenchirurgie', title: 'Nase & Nasenchirurgie', eyebrow: 'Nasenatmung', summary: 'Abklärung von Nasenatmungsbehinderung, Entzündungen und funktionellen Beschwerden.', sections: ['Endoskopische Untersuchung nach Indikation', 'Konservative Behandlungsmöglichkeiten', 'Beratung zu operativen Optionen ohne unbelegte Versprechen'] },
  { slug: 'kinder-hno', title: 'Kinder-HNO', eyebrow: 'Für Familien', summary: 'Ruhige HNO-Sprechstunde für Kinder und Eltern mit verständlicher Einordnung der Beschwerden.', sections: ['Kindgerechte Untersuchung', 'Erklärung der Befunde für Eltern', 'Zurückhaltende, medizinisch begründete Empfehlungen'] },
];
