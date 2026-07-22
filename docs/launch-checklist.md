# Launch Checklist

## Inhalt
- Praxisdaten final bestätigt
- Medizinische Texte freigegeben
- Bildrechte dokumentiert

## SEO
- Titel und Beschreibungen geprüft
- Sitemap und Robots erreichbar
- Standortdaten konsistent

## Datenschutz
- Keine zustimmungspflichtigen Dienste ohne Consent
- Doctolib nur verlinkt
- Externer Kartenlink statt Embed
- Rechtstexte final geprüft

## Accessibility
- Eine H1 pro Seite
- Tastaturfokus sichtbar
- Skip-Link vorhanden
- Kontraste geprüft

## Standort
- Adresse, Telefon, E-Mail und Kartenlink geprüft
- Öffnungszeiten ergänzt

## Deployment
- `npm run lint`
- `npm run typecheck`
- `ALLOW_LEGAL_PLACEHOLDERS=1 npm run check:legal` während Entwicklung
- `npm run check:legal` vor Produktion
- `npm run build`
