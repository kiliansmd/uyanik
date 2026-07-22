export const siteConfig = {
  practiceName: 'Privatpraxis Uyanik',
  specialty: 'Privatpraxis für Hals-Nasen-Ohren-Heilkunde',
  physicianName: 'Dr. med. Bedros Uyanik',
  street: 'Aachener Straße 605',
  postalCode: '50226',
  city: 'Frechen-Königsdorf',
  phone: '02234 430 19 99',
  phoneHref: 'tel:+4922344301999',
  email: 'info@hno-uyanik.de',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hno-uyanik.de',
  doctolibUrl: process.env.NEXT_PUBLIC_DOCTOLIB_URL || '',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Aachener%20Stra%C3%9Fe%20605%2050226%20Frechen-K%C3%B6nigsdorf',
  privatePatientsNote: 'Privatversicherte und Selbstzahlende',
  socialLinks: [] as Array<{ label: string; href: string }>,
  openingHours: [{ label: 'Sprechzeiten', value: 'Nach Terminvereinbarung' }],
  features: { doctolibEnabled: Boolean(process.env.NEXT_PUBLIC_DOCTOLIB_URL), showAestheticPage: true },
} as const;

export function getAppointmentHref(): string {
  return siteConfig.doctolibUrl && !siteConfig.doctolibUrl.includes('localhost') ? siteConfig.doctolibUrl : '/kontakt';
}
