import { existsSync, readFileSync } from 'node:fs';
import { globSync } from 'node:fs';

const requiredAssets = [
  'doctor-hero.jpg','doctor-portrait.jpg','consultation-adult.jpg','consultation-child.jpg','diagnostics.jpg','team.jpg','practice-reception.jpg','practice-treatment-room.jpg','practice-detail.jpg','practice-exterior.jpg','aesthetic-consultation.jpg',
];
const failures = [];
const warnings = [];
const read = (file) => readFileSync(file, 'utf8');
const site = read('src/config/site.ts');
const legal = read('src/content/legal.ts');
const review = read('docs/content-review.md');
const allFiles = globSync('src/**/*.{ts,tsx,css}', { exclude: ['node_modules/**'] });
const allText = allFiles.map((file) => `${file}\n${read(file)}`).join('\n');

if (legal.includes('approved: false') || legal.includes('Rechtliche Pflichtangaben')) failures.push('Rechtstext-Platzhalter sind nicht freigegeben.');
if (site.includes("doctolibUrl: process.env.NEXT_PUBLIC_DOCTOLIB_URL || ''")) failures.push('NEXT_PUBLIC_DOCTOLIB_URL ist nicht final gesetzt.');
if (site.includes("Nach Terminvereinbarung")) failures.push('Öffnungszeiten sind noch nicht bestätigt.');
if (review.includes('Finale Praxisadresse')) failures.push('Finale Praxisadresse ist laut Content Review noch zu bestätigen.');
if (review.includes('Medizinische Freigabe aller Fachtexte')) failures.push('Medizinische Inhalte sind noch nicht freigegeben.');
for (const asset of requiredAssets) {
  if (!existsSync(`public/images/${asset}`)) failures.push(`Finales Foto fehlt: public/images/${asset}`);
}
if (/TODO|FIXME|Lorem|lorem/.test(allText)) failures.push('Sichtbare oder technische TODO-/Lorem-Marker gefunden.');
const localhostMatches = allFiles.filter((file) => read(file).includes('localhost') && file !== 'src/config/site.ts');
if (localhostMatches.length > 0) failures.push(`localhost-Links außerhalb des Doctolib-Guards gefunden: ${localhostMatches.join(', ')}`);
if (site.includes('localhost')) warnings.push('localhost kommt im erlaubten Doctolib-Guard vor.');

for (const warning of warnings) console.warn(`WARN: ${warning}`);
if (failures.length > 0) {
  console.error('Produktionsfreigabe blockiert:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('Content-Verifikation bestanden.');
