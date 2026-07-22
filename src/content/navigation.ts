export const navigationItems = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Schwerpunkte', href: '/leistungen/schwindel-tinnitus', children: [
    { label: 'Schwindel & Tinnitus', href: '/leistungen/schwindel-tinnitus' },
    { label: 'Schnarchen & Schlaf', href: '/leistungen/schnarchen-schlafdiagnostik' },
    { label: 'Nase & Nasenatmung', href: '/leistungen/nase-nasenchirurgie' },
    { label: 'Kinder-HNO', href: '/leistungen/kinder-hno' },
  ] },
  { label: 'Dr. Uyanik', href: '/arzt-team' },
  { label: 'Privatpraxis', href: '/privatpraxis' },
  { label: 'Kosten & FAQ', href: '/kosten-faq' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;
