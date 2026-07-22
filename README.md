# Privatpraxis Uyanik Website

Hochwertige, responsive Website für die Privatpraxis Uyanik in Frechen-Königsdorf. Markenkern: „Präzise HNO-Medizin. Persönlich und mit Zeit.“

## Stack

- Next.js App Router
- TypeScript im Strict Mode
- Tailwind CSS mit CSS Custom Properties als Design-Tokens
- Server Components als Standard, wenige Client Components für Navigation und FAQ
- Next Image und Next Font
- Keine UI-Bibliothek, keine Tracker, keine eingebetteten Karten

## Installation

```bash
npm install
```

Wenn die Registry im lokalen Umfeld blockiert ist, können Build, Lint und Browser-Tests erst nach erfolgreicher Dependency-Installation laufen.

## Entwicklung starten

```bash
npm run dev
```

## Prüfungen

```bash
npm run lint
npm run typecheck
npm run test:a11y
npm run test:e2e
npm run test
npm run build
ALLOW_LEGAL_PLACEHOLDERS=1 npm run check:legal
npm run verify:content
```

`npm run verify:content` ist die Produktionsfreigabeprüfung und soll fehlschlagen, solange Launch-Daten, Rechtstexte, medizinische Freigaben oder finale Fotos fehlen.

## Umgebungsvariablen

Siehe `.env.example`:

- `NEXT_PUBLIC_SITE_URL`: kanonische Website-URL, Standardannahme `https://www.hno-uyanik.de`
- `NEXT_PUBLIC_DOCTOLIB_URL`: externe Terminbuchung. Wenn leer, führt der Termin-CTA auf `/kontakt`.

## Inhaltsstruktur

- `src/config/site.ts`: zentrale Praxisdaten, Kontaktlinks, Kartenlink, Öffnungszeiten, Feature Flags
- `src/content/site-pages.ts`: SEO-Daten, Startseitenmodule, FAQ, Schwerpunktseiten und weitere Leistungen
- `src/content/services.ts`: Leistungsindex
- `src/content/navigation.ts`: Hauptnavigation und Schwerpunkt-Unterlinks
- `src/content/legal.ts`: Rechtstext-Platzhalter und Freigabestatus
- `docs/content-review.md`: offene medizinische, rechtliche und organisatorische Freigaben

## Zentrale Praxisdaten ändern

Praxisname, Arztname, Adresse, Telefon, E-Mail, Website-URL, Doctolib-Fallback, Kartenlink und Öffnungszeiten werden ausschließlich in `src/config/site.ts` gepflegt. Einzelne Seiten sollen diese Daten nicht duplizieren.

## Bilder austauschen

Finale Bilder werden lokal unter `public/images/` abgelegt. Geplante Dateinamen stehen in `docs/asset-manifest.md`. Die Komponente `EditorialImage` zeigt bei fehlenden Dateien einen ruhigen Platzhalter ohne Remote-Hotlinks oder gebrochene Bilder.

## Doctolib konfigurieren

`NEXT_PUBLIC_DOCTOLIB_URL` in der Deployment-Umgebung setzen. Ohne bestätigte URL bleibt der CTA-Fallback `/kontakt` aktiv. `verify:content` blockiert die Produktionsfreigabe, solange keine finale Doctolib-URL gesetzt ist.

## Rechtstexte

Impressum und Datenschutz werden technisch über `src/content/legal.ts` geladen. Es werden keine Rechtstexte erfunden. Vor Produktion müssen die Platzhalter ersetzt und `npm run check:legal` sowie `npm run verify:content` ohne Freigabe-Bypass bestanden werden.

## Deployment-Hinweise

Vor Deployment ausführen:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run verify:content
```

Kein Analytics, kein Meta-Pixel und keine eingebetteten Drittanbieter-Karten sind vorgesehen, solange keine Datenschutz- und Consent-Entscheidung getroffen wurde.
