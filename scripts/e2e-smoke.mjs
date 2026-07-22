import { readFileSync } from 'node:fs';

const files = {
  nav: 'src/content/navigation.ts',
  site: 'src/config/site.ts',
  footer: 'src/components/layout/site-footer.tsx',
  faq: 'src/components/sections/faq-accordion.tsx',
  notFound: 'src/app/not-found.tsx',
  sitemap: 'src/app/sitemap.ts',
};
const read = (file) => readFileSync(file, 'utf8');
const failures = [];
const definedRoutes = ['/', '/leistungen', '/leistungen/schwindel-tinnitus', '/leistungen/schnarchen-schlafdiagnostik', '/leistungen/nase-nasenchirurgie', '/leistungen/kinder-hno', '/aesthetik/faltenbehandlung', '/arzt-team', '/privatpraxis', '/kosten-faq', '/kontakt', '/kassenpraxis-karriere', '/impressum', '/datenschutz'];
const sitemap = read(files.sitemap);
for (const route of definedRoutes) if (!sitemap.includes(`'${route}'`)) failures.push(`Route fehlt in sitemap: ${route}`);
const nav = read(files.nav);
for (const label of ['Leistungen', 'Schwerpunkte', 'Dr. Uyanik', 'Privatpraxis', 'Kosten & FAQ', 'Kontakt']) if (!nav.includes(label)) failures.push(`Navigationseintrag fehlt: ${label}`);
const site = read(files.site);
if (!site.includes("? siteConfig.doctolibUrl : '/kontakt'") && !site.includes(": '/kontakt'")) failures.push('Doctolib-Fallback auf /kontakt nicht erkennbar.');
if (!site.includes("phoneHref: 'tel:+4922344301999'")) failures.push('Telefonlink fehlt oder ist uneinheitlich.');
if (!site.includes("email: 'info@hno-uyanik.de'")) failures.push('E-Mail-Adresse fehlt oder ist uneinheitlich.');
if (!read(files.faq).includes('setOpen')) failures.push('FAQ-Interaktion nicht erkennbar.');
if (!read(files.footer).includes('/impressum') || !read(files.footer).includes('/datenschutz')) failures.push('Footerlinks fehlen.');
if (!read(files.notFound).includes('Seite nicht gefunden')) failures.push('404-Seite nicht erkennbar.');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('E2E smoke checks passed.');
