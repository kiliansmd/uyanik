# Asset Manifest

Alle Bilder müssen lokal unter `public/images/` liegen. Keine Remote-Stockfoto-URLs und keine unfrei gegebenen Darstellungen von Dr. Uyanik verwenden.

| Datei | Zweck | Empfohlene Nutzung | Status |
| --- | --- | --- | --- |
| doctor-hero.jpg | Startseiten-Hero | Portrait-/Praxisaufnahme, nicht generisch | Benötigt |
| doctor-portrait.jpg | Arztprofil | Freigegebenes Portrait von Dr. Uyanik | Benötigt |
| consultation-adult.jpg | Beratung Erwachsene | Ruhige Beratungssituation ohne sensible Patientendaten | Benötigt |
| consultation-child.jpg | Kinder-HNO | Freigegebene kindgerechte Beratungsszene | Benötigt |
| diagnostics.jpg | Diagnostik | Geräte nur zeigen, wenn real vorhanden und freigegeben | Benötigt |
| team.jpg | Team | Erst nach bestätigten Teamfreigaben verwenden | Benötigt |
| practice-reception.jpg | Empfang | Neue Praxisräume, Empfang/Wartebereich | Benötigt |
| practice-treatment-room.jpg | Behandlungsraum | Raumaufnahme ohne erfundene Ausstattung | Benötigt |
| practice-detail.jpg | Praxisdetail | Architektonisches Detail, Orientierung oder Eingang | Benötigt |
| practice-exterior.jpg | Außenansicht | Gebäude/Eingang/Anfahrt | Benötigt |
| aesthetic-consultation.jpg | Ästhetische Beratung | Ärztliche Beratung, keine Vorher-Nachher-Motive | Benötigt |

Produktionsfreigabe: `npm run verify:content` schlägt fehl, solange diese Dateien fehlen.
