import { readFileSync } from 'node:fs';
const files = ['src/app/impressum/page.tsx', 'src/app/datenschutz/page.tsx'];
const marker = 'LEGAL_PLACEHOLDER';
const remaining = files.filter((file) => readFileSync(file, 'utf8').includes(marker));
if (process.env.ALLOW_LEGAL_PLACEHOLDERS === '1') {
  console.warn(`Legal placeholder check skipped: ${remaining.length} placeholder file(s).`);
  process.exit(0);
}
if (remaining.length > 0) {
  console.error(`Legal placeholders remain: ${remaining.join(', ')}`);
  process.exit(1);
}
