# Content Review

Noch zu bestätigen:

- Finale Praxisadresse
- Eröffnungstermin der neuen Räume
- Öffnungszeiten
- Doctolib-URL
- Idana-Prozess und ob digitale Vorbereitung aktiv kommuniziert werden darf
- Vollständige Qualifikationen
- Teamnamen und Rollen
- Konkrete diagnostische Geräte
- Genaue Operationsangebote
- Konkrete ästhetische Behandlungen
- Rechtstexte
- Bildfreigaben
- Parken, ÖPNV und Barrierefreiheit am Standort
- Medizinische und rechtliche Prüfung der GOÄ- und Selbstzahlerformulierungen
- Medizinische Freigabe aller Fachtexte, insbesondere Schwindel/Tinnitus, Schnarchen/Schlaf, Nase/Nasenchirurgie, Kinder-HNO, operative HNO, Akupunktur, Tauchmedizin und ästhetische Faltenbehandlung

## Produktionsfreigabe

Die folgenden Punkte blockieren bewusst `npm run verify:content`, bis externe finale Informationen vorliegen:

- Rechtstexte in `src/content/legal.ts` freigeben
- `NEXT_PUBLIC_DOCTOLIB_URL` setzen
- finale Öffnungszeiten in `src/config/site.ts` eintragen
- finale Praxisadresse bestätigen oder Dokumentationspunkt entfernen
- medizinische Freigabe aller Fachtexte dokumentieren
- finale Fotos unter `public/images/` ergänzen
- Parken, ÖPNV und Barrierefreiheit am Standort bestätigen
