# Launch Checklist

## Dependency Check
- `npm install` erfolgreich abgeschlossen
- Keine unnötigen Abhängigkeiten ergänzt
- Keine Tracker, Animation-Libraries oder UI-Frameworks eingebunden

## Inhalt
- Praxisdaten in `src/config/site.ts` final bestätigt
- Medizinische Fachtexte ärztlich freigegeben
- GOÄ-/Selbstzahlerformulierungen fachlich und rechtlich geprüft
- Keine erfundenen Qualifikationen, Geräte, Bewertungen, Teammitglieder oder Öffnungszeiten
- Keine Lorem-Ipsum- oder TODO-Marker

## Assets
- Alle Dateien aus `docs/asset-manifest.md` lokal unter `public/images/` vorhanden
- Bildrechte und Personenfreigaben dokumentiert
- Keine Remote-Stockfoto-URLs

## SEO
- Individuelle Titel und Meta Descriptions geprüft
- Canonicals verwenden finale Domain
- Sitemap und Robots erreichbar
- Strukturierte Daten ohne Ratings, Öffnungszeiten oder Preise geprüft
- Breadcrumbs auf Unterseiten geprüft

## Datenschutz und Sicherheit
- Rechtstexte final geprüft
- Keine medizinische Datenerfassung über ein allgemeines Formular
- Doctolib nur als externer Link
- Externer Kartenlink statt Embed
- Keine Secrets im Repository
- Externe Links mit `rel="noreferrer"`, wo sie in neuem Tab öffnen

## Accessibility
- Eine H1 pro Seite
- Skip-Link sichtbar bei Fokus
- Tastaturfokus sichtbar
- Mobile Navigation per Tastatur und Escape bedienbar
- FAQ-Akkordeons mit `aria-expanded` und `aria-controls`
- Kontraste und 200-%-Zoom geprüft
- `prefers-reduced-motion` respektiert

## Standort
- Adresse, Telefon, E-Mail und Kartenlink geprüft
- Öffnungszeiten ergänzt
- Parken, ÖPNV und Barrierefreiheit bestätigt

## Deployment
- `npm run lint`
- `npm run typecheck`
- `npm run test:a11y`
- `npm run test:e2e`
- `npm run build`
- `npm run verify:content`
- `npm run check:legal` ohne `ALLOW_LEGAL_PLACEHOLDERS=1`
