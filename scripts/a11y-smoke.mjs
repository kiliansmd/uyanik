import { readFileSync } from 'node:fs';

const routes = ['src/app/page.tsx','src/app/leistungen/page.tsx','src/app/leistungen/schwindel-tinnitus/page.tsx','src/app/kontakt/page.tsx'];
const requiredFiles = ['src/app/layout.tsx','src/components/layout/skip-link.tsx','src/components/navigation/mobile-navigation.tsx','src/components/sections/faq-accordion.tsx'];
const failures = [];
const read = (file) => readFileSync(file, 'utf8');
for (const file of routes) {
  const text = read(file);
  if (!/title=\"|<h1|DetailPage/.test(text)) failures.push(`${file}: keine erkennbare H1/PageHero-Struktur.`);
  if (/alt=\"\"/.test(text)) failures.push(`${file}: leeres alt-Attribut gefunden.`);
}
const layout = read('src/app/layout.tsx');
if (!layout.includes('lang="de"')) failures.push('Root Layout setzt nicht lang="de".');
if (!layout.includes('<SkipLink/>')) failures.push('SkipLink ist nicht global eingebunden.');
const nav = read('src/components/navigation/mobile-navigation.tsx');
for (const token of ['aria-expanded','aria-controls','Escape','role="dialog"','aria-modal="true"']) if (!nav.includes(token)) failures.push(`Mobile Navigation fehlt ${token}.`);
const faq = read('src/components/sections/faq-accordion.tsx');
for (const token of ['aria-expanded','aria-controls','role="region"']) if (!faq.includes(token)) failures.push(`FAQ Accordion fehlt ${token}.`);
const css = read('src/styles/globals.css');
if (!css.includes('prefers-reduced-motion')) failures.push('prefers-reduced-motion fehlt.');
if (!css.includes(':focus-visible')) failures.push('Sichtbare Fokuszustände fehlen.');
for (const file of requiredFiles) if (!read(file).trim()) failures.push(`${file}: leer.`);
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('Accessibility smoke checks passed.');
