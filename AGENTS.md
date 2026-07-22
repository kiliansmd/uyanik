# AGENTS.md

- Projektziel: hochwertige responsive Website für die Privatpraxis Uyanik; Markenkern: „Präzise HNO-Medizin. Persönlich und mit Zeit.“
- Zentrale Verzeichnisse: `src/app` für Routen, `src/components` für UI, `src/config/site.ts` für Praxisdaten, `src/content` für Inhalte, `docs` für Produkt- und Launch-Dokumentation.
- Befehle: `npm run dev`, `npm run lint`, `npm run typecheck`, `npm run check:legal`, `npm run build`.
- TypeScript bleibt im Strict Mode; Benutzeroberfläche deutsch, Codebezeichner englisch.
- Keine erfundenen medizinischen Aussagen, Qualifikationen, Bewertungen, Auszeichnungen, Teammitglieder oder Rechtstexte.
- Keine Remote-Stockfoto-URLs, keine SaaS-/KI-Designmuster, keine unnötigen Abhängigkeiten.
- Kein allgemeines Kontaktformular zur Erfassung medizinischer Freitextdaten.
- Umsetzung muss responsive, semantisch und barrierearm sein.
- Jede Aufgabe endet mit Lint, Typecheck und Build; rechtliche Platzhalter vor Produktionsfreigabe mit `npm run check:legal` prüfen.
- Definition of Done: zentrale Daten gepflegt, Routen fehlerfrei, keine localhost-/ungültigen Links, keine sichtbaren internen TODOs, Prüfungen dokumentiert.
