import type { FaqItem } from '@/types/content';

export type LinkItem = { label: string; href: string; description?: string; image?: string };
export type DetailPageContent = { slug: string; href: string; eyebrow: string; title: string; description: string; intro: string; image: string; when: string[]; exam: string[]; treatment: string[]; bring: string[]; faqs: FaqItem[] };
export type SeoPage = { title: string; description: string; path: string };

export const seoPages: Record<string, SeoPage> = {
  home: { title: 'HNO-Privatpraxis Frechen-Königsdorf | Dr. Bedros Uyanik', description: 'Persönliche HNO-Diagnostik und individuell abgestimmte Behandlung für Privatversicherte und Selbstzahlende in Frechen-Königsdorf.', path: '/' },
  services: { title: 'HNO-Leistungen für Erwachsene und Kinder', description: 'Orientierung zu HNO-Beschwerden, Schwerpunkten und ausgewählten Behandlungsbereichen der Privatpraxis Uyanik.', path: '/leistungen' },
  dizziness: { title: 'Schwindel und Tinnitus sorgfältig abklären', description: 'HNO-ärztliche Abklärung bei Schwindel, Gleichgewichtsbeschwerden, Ohrgeräuschen und Hörveränderungen in Frechen-Königsdorf.', path: '/leistungen/schwindel-tinnitus' },
  sleep: { title: 'Schnarchdiagnostik und Schnarchtherapie in Frechen-Königsdorf', description: 'Strukturierte HNO-ärztliche Einschätzung bei Schnarchen, unruhigem Schlaf und möglichen nächtlichen Atemproblemen.', path: '/leistungen/schnarchen-schlafdiagnostik' },
  nose: { title: 'Nase und Nasenatmung | Privatpraxis Uyanik', description: 'Sorgfältige Abklärung eingeschränkter Nasenatmung und Beratung zu konservativen sowie operativen Möglichkeiten je nach Befund.', path: '/leistungen/nase-nasenchirurgie' },
  children: { title: 'Kinder-HNO mit Ruhe und verständlicher Begleitung', description: 'Kindgerechte HNO-Sprechstunde für wiederkehrende Ohr-, Nasen- und Halsbeschwerden bei Kindern.', path: '/leistungen/kinder-hno' },
  aesthetic: { title: 'Ästhetische Faltenbehandlung mit ärztlicher Beratung', description: 'Zurückhaltende ästhetische Beratung in der Privatpraxis Uyanik mit realistischer Einordnung von Möglichkeiten, Grenzen und Risiken.', path: '/aesthetik/faltenbehandlung' },
  team: { title: 'Dr. med. Bedros Uyanik und das Praxisteam', description: 'Informationen zur fachärztlichen Leitung, Haltung und Arbeitsweise der Privatpraxis Uyanik.', path: '/arzt-team' },
  practice: { title: 'Eine Privatpraxis für konzentrierte Medizin', description: 'Ruhige Atmosphäre, klare Abläufe und persönliche Betreuung in der Privatpraxis Uyanik in Frechen-Königsdorf.', path: '/privatpraxis' },
  costs: { title: 'Kosten, Abrechnung und häufige Fragen', description: 'Informationen zu Privatversicherung, Selbstzahlung, Terminvorbereitung und häufigen Fragen zur Privatpraxis Uyanik.', path: '/kosten-faq' },
  contact: { title: 'Kontakt und Anfahrt | Privatpraxis Uyanik', description: 'Telefon, E-Mail, Adresse, Termin-CTA und externer Kartenlink der Privatpraxis Uyanik in Frechen-Königsdorf.', path: '/kontakt' },
  career: { title: 'Kassenpraxis und Karriere', description: 'Organisatorische Hinweise und vorbereiteter Bereich für künftige Stellenangebote ohne erfundene Ausschreibungen.', path: '/kassenpraxis-karriere' },
  imprint: { title: 'Impressum | Privatpraxis Uyanik', description: 'Technisch vorbereitete Impressumsseite mit rechtlich noch freizugebenden Pflichtangaben.', path: '/impressum' },
  privacy: { title: 'Datenschutz | Privatpraxis Uyanik', description: 'Technisch vorbereitete Datenschutzseite mit rechtlich noch freizugebenden Angaben.', path: '/datenschutz' },
};

export const concernLinks: LinkItem[] = [
  { label: 'Schwindel und Gleichgewicht', href: '/leistungen/schwindel-tinnitus', description: 'Wenn Dreh-, Schwank- oder Unsicherheitsgefühle den Alltag belasten.' },
  { label: 'Schnarchen und Schlaf', href: '/leistungen/schnarchen-schlafdiagnostik', description: 'Bei störendem Schnarchen, beobachteten Atempausen oder Tagesmüdigkeit.' },
  { label: 'Nase und Nasenatmung', href: '/leistungen/nase-nasenchirurgie', description: 'Wenn freies Atmen erschwert ist oder Beschwerden wiederkehren.' },
  { label: 'Ohr, Hören und Tinnitus', href: '/leistungen/schwindel-tinnitus', description: 'Bei Ohrgeräuschen, Druckgefühl oder veränderter Hörwahrnehmung.' },
  { label: 'Kinder-HNO', href: '/leistungen/kinder-hno', description: 'Für wiederkehrende Ohr-, Nasen- und Halsbeschwerden bei Kindern.' },
  { label: 'Hals, Stimme und Schlucken', href: '/leistungen', description: 'Bei Beschwerden im Halsbereich oder Veränderungen der Stimme.' },
  { label: 'Ästhetische Faltenbehandlung', href: '/aesthetik/faltenbehandlung', description: 'Ärztliche Beratung mit zurückhaltender, natürlicher Zielsetzung.' },
];

export const promiseItems = [
  { title: 'Zeit zum Zuhören', text: 'Beschwerden, Vorgeschichte und persönliche Ziele werden in Ruhe besprochen.' },
  { title: 'Sorgfältige Diagnostik', text: 'Untersuchungen werden gezielt ausgewählt und die Ergebnisse verständlich eingeordnet.' },
  { title: 'Klare Empfehlungen', text: 'Befunde, mögliche Behandlungswege und nächste Schritte werden nachvollziehbar erklärt.' },
  { title: 'Persönliche Betreuung', text: 'Diagnostik, Therapie und Nachsorge werden in einem klar abgestimmten Praxisablauf miteinander verbunden.' },
];

export const focusStories: LinkItem[] = [
  { label: 'Ruhiger schlafen', href: '/leistungen/schnarchen-schlafdiagnostik', image: '/images/consultation-adult.jpg', description: 'Schnarchen und mögliche nächtliche Atemprobleme strukturiert untersuchen und geeignete nächste Schritte besprechen.' },
  { label: 'Schwindel verstehen', href: '/leistungen/schwindel-tinnitus', image: '/images/diagnostics.jpg', description: 'Mögliche Ursachen differenziert betrachten und auf Grundlage der Untersuchung einen nachvollziehbaren Behandlungsweg entwickeln.' },
  { label: 'Freier atmen', href: '/leistungen/nase-nasenchirurgie', image: '/images/practice-treatment-room.jpg', description: 'Eine eingeschränkte Nasenatmung untersuchen und konservative sowie operative Möglichkeiten sorgfältig abwägen.' },
];

export const homeFaqs: FaqItem[] = [
  { question: 'Wer kann einen Termin in der Privatpraxis vereinbaren?', answer: 'Die Privatpraxis richtet sich an Privatversicherte und Selbstzahlende. Termine werden nach Vereinbarung vergeben.' },
  { question: 'Kann ich als gesetzlich versicherte Person Leistungen selbst bezahlen?', answer: 'Ja, Selbstzahlung kann je nach Anliegen möglich sein. Der voraussichtliche Rahmen planbarer Leistungen wird vor der Behandlung persönlich besprochen.' },
  { question: 'Welche Unterlagen sollte ich zum Termin mitbringen?', answer: 'Hilfreich sind vorhandene Befunde, Arztbriefe, Medikamentenpläne, Allergieinformationen und, falls vorhanden, relevante Voruntersuchungen.' },
  { question: 'Behandelt Dr. Uyanik auch Kinder?', answer: 'Ja, die Praxis begleitet Erwachsene und Kinder. Entscheidungen werden mit den Eltern verständlich besprochen.' },
  { question: 'Wie werden privatärztliche Leistungen abgerechnet?', answer: 'Die Abrechnung privatärztlicher Leistungen erfolgt grundsätzlich auf Basis der Gebührenordnung für Ärzte. Die Erstattung hängt vom individuellen Tarif ab.' },
  { question: 'Wie erreiche ich die Praxis?', answer: 'Sie erreichen die Praxis telefonisch, per E-Mail oder über die Terminbuchung. Bitte senden Sie keine medizinischen Beschwerden über ungesicherte allgemeine Nachrichten.' },
  { question: 'Wo kann ich parken?', answer: 'Konkrete Parkhinweise werden vor Veröffentlichung bestätigt und ergänzt.' },
  { question: 'An wen wende ich mich außerhalb der Sprechzeiten bei einem medizinischen Notfall?', answer: 'Bei akuten medizinischen Notfällen wenden Sie sich an den Notruf. Für dringende, nicht lebensbedrohliche Beschwerden außerhalb regulärer Zeiten kann der ärztliche Bereitschaftsdienst zuständig sein.' },
];

const commonFaqs: FaqItem[] = [
  { question: 'Ist eine Untersuchung immer gleich mit einer Behandlung verbunden?', answer: 'Nein. Zunächst werden Beschwerden und Befunde eingeordnet. Geeignete Behandlungsmöglichkeiten werden anschließend im persönlichen Gespräch besprochen.' },
  { question: 'Kann eine abschließende Diagnose immer sofort gestellt werden?', answer: 'Nicht in jedem Fall. Je nach Befund können Verlaufskontrollen oder weitere fachärztliche Abklärungen sinnvoll sein.' },
];

export const detailPages: DetailPageContent[] = [
  { slug: 'schwindel-tinnitus', href: '/leistungen/schwindel-tinnitus', eyebrow: 'Schwerpunkt', title: 'Schwindel und Tinnitus sorgfältig abklären', description: seoPages.dizziness.description, intro: 'Schwindel und Ohrgeräusche können unterschiedliche Ursachen haben. Eine genaue Beschreibung der Beschwerden, der zeitliche Verlauf und mögliche Begleitsymptome helfen, die nächsten diagnostischen Schritte sinnvoll zu planen.', image: '/images/diagnostics.jpg', when: ['Schwindel wiederholt auftritt oder länger anhält.', 'Ohrgeräusche neu auftreten oder sich verändern.', 'Hören, Druckgefühl im Ohr oder Gleichgewicht betroffen sind.'], exam: ['Ausführliche Anamnese zu Beginn, Dauer und Auslösern.', 'HNO-ärztliche Untersuchung je nach Beschwerdebild.', 'Einordnung, ob weitere Abklärung außerhalb der HNO sinnvoll sein kann.'], treatment: ['Beratung zu geeigneten Maßnahmen je nach Befund.', 'Kontroll- oder Verlaufstermine, wenn dies medizinisch sinnvoll ist.', 'Koordination weiterer Schritte ohne pauschale Heilungszusage.'], bring: ['Vorhandene Hörtests oder Arztbriefe.', 'Medikamentenliste und relevante Vorerkrankungen.', 'Notizen zu Auslösern, Dauer und Begleitsymptomen.'], faqs: commonFaqs },
  { slug: 'schnarchen-schlafdiagnostik', href: '/leistungen/schnarchen-schlafdiagnostik', eyebrow: 'Schwerpunkt', title: 'Schnarchdiagnostik und Schnarchtherapie in Frechen-Königsdorf', description: seoPages.sleep.description, intro: 'Schnarchen kann Schlaf und Alltag beeinträchtigen. Bei beobachteten Atemaussetzern oder ausgeprägter Tagesmüdigkeit ist eine ärztliche Abklärung sinnvoll.', image: '/images/consultation-adult.jpg', when: ['Schnarchen regelmäßig auftritt und stört.', 'Atempausen beobachtet werden.', 'Tagesmüdigkeit oder unruhiger Schlaf dazukommen.'], exam: ['Besprechung von Schlaf, Begleitsymptomen und Risikofaktoren.', 'Untersuchung möglicher anatomischer und funktioneller Faktoren.', 'Planung weiterer Diagnostik abhängig vom Befund.'], treatment: ['Konservative Maßnahmen können je nach Befund besprochen werden.', 'Operative Optionen werden nur nach sorgfältiger Untersuchung abgewogen.', 'Bei Verdacht auf relevante Schlafatmungsstörungen kann weitere Abklärung sinnvoll sein.'], bring: ['Informationen von Partnerinnen oder Partnern zum Schlafverhalten.', 'Vorbefunde, falls bereits Untersuchungen erfolgt sind.', 'Liste relevanter Medikamente und Vorerkrankungen.'], faqs: commonFaqs },
  { slug: 'nase-nasenchirurgie', href: '/leistungen/nase-nasenchirurgie', eyebrow: 'Schwerpunkt', title: 'Freier atmen: Nase und Nasenatmung', description: seoPages.nose.description, intro: 'Eine eingeschränkte Nasenatmung kann funktionelle oder anatomische Ursachen haben. Die Empfehlung zu konservativen oder operativen Möglichkeiten entsteht erst nach Untersuchung und Beratung.', image: '/images/practice-treatment-room.jpg', when: ['Die Nasenatmung dauerhaft eingeschränkt ist.', 'Beschwerden wiederkehren oder einseitig betont sind.', 'Konservative Maßnahmen bisher nicht ausreichend geholfen haben.'], exam: ['Anamnese zu Verlauf, Allergien und bisherigen Behandlungen.', 'HNO-ärztliche Untersuchung der Nase je nach Befund.', 'Abwägung möglicher funktioneller und anatomischer Faktoren.'], treatment: ['Konservative Behandlungsmöglichkeiten je nach Ursache.', 'Operative Möglichkeiten nach sorgfältiger Indikationsstellung.', 'Persönliche Beratung zu Nutzen, Grenzen und Alternativen.'], bring: ['Vorbefunde und frühere Operationsberichte, falls vorhanden.', 'Informationen zu Allergien und bisherigen Nasenmedikamenten.', 'Notizen zu Situationen, in denen die Atmung besonders eingeschränkt ist.'], faqs: commonFaqs },
  { slug: 'kinder-hno', href: '/leistungen/kinder-hno', eyebrow: 'Schwerpunkt', title: 'Kinder-HNO mit Ruhe und verständlicher Begleitung', description: seoPages.children.description, intro: 'Kinder brauchen eine ruhige Untersuchung und verständliche Begleitung. Wiederkehrende Ohr-, Nasen- und Halsbeschwerden werden gemeinsam mit den Eltern eingeordnet.', image: '/images/consultation-child.jpg', when: ['Ohrbeschwerden, Paukenergüsse oder Hörfragen wiederkehren.', 'Mandeln oder Rachenmandeln Beschwerden verursachen können.', 'Nasenatmung, Infekte oder Schnarchen auffallen.'], exam: ['Kindgerechte Untersuchung mit ruhiger Erklärung.', 'Einordnung der Beschwerden im Gespräch mit den Eltern.', 'Zurückhaltende Empfehlungen abhängig vom Befund.'], treatment: ['Konservative Möglichkeiten, wenn sie geeignet sind.', 'Besprechung operativer Optionen nur nach Untersuchung und Beratung.', 'Einbezug der Eltern in die nächsten Schritte.'], bring: ['Kinderärztliche Vorbefunde, falls vorhanden.', 'Impfpass oder relevante medizinische Unterlagen bei Bedarf.', 'Notizen zu Häufigkeit, Dauer und Auslösern der Beschwerden.'], faqs: commonFaqs },
];

export const additionalServices = [
  { title: 'Ohr und Hören', text: 'Hörveränderungen, Druckgefühl oder Ohrbeschwerden können HNO-ärztlich eingeordnet werden.' },
  { title: 'Hals, Stimme und Schlucken', text: 'Beschwerden im Halsbereich oder Stimmveränderungen werden je nach Befund untersucht.' },
  { title: 'Allergologische Beschwerden', text: 'Bei Verdacht auf allergische Auslöser kann eine gezielte Einordnung sinnvoll sein.' },
  { title: 'HNO-Vorsorge', text: 'Vorsorgliche Untersuchungen können im persönlichen Gespräch nach Anlass und Bedarf geplant werden.' },
  { title: 'Operative HNO', text: 'Operative Möglichkeiten werden nur nach sorgfältiger Untersuchung, Indikation und Beratung besprochen.' },
  { title: 'Akupunktur', text: 'Ob Akupunktur im individuellen Fall geeignet ist, wird nach Beschwerdebild und Zielsetzung eingeordnet.' },
  { title: 'Tauchmedizin', text: 'Tauchmedizinische Fragen werden vorsichtig und abhängig von Vorgeschichte und Befund beurteilt.' },
];
