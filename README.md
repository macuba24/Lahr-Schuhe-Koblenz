# Kundenapp LAHR

Kundenkarte für das Handy, aufgebaut wie die Schmahl-App. Name, Kundenkode, Buchung, Foto und Nachricht bleiben auf diesem Gerät. Die Marke ist LAHR, der Laden ist LAHR SCHUHE, Löhrstr. 51, 56068 Koblenz.

## Start

Im Ordner `D:\Einzelhandel App\Lahr Schuhe`:

```
python -m http.server 8771
```

Dann im Browser `http://127.0.0.1:8771/` öffnen. Der Prospekt hängt unter `prospekt.html`.

Die SQLite-Fassung (älterer Stand der Blaupause, Ordner `static/`) startet mit:

```
python server.py
```

Sie lauscht auf `http://127.0.0.1:8765/`. Vorher `pip install -r requirements.txt`, falls `segno` fehlt.

## Auf Render

Static Site, Branch `main`. Build Command leer lassen. Publish Directory ist `.`

Dieselbe Vorgabe steht in `render.yaml` (Name `lahr-schuhe-koblenz`). Die Schmahl-App nutzt auf Render keinen Python-Startbefehl. `python server.py` ist nur die lokale SQLite-Fassung.

## Am Handy

Die Adresse in Chrome öffnen und zum Startbildschirm hinzufügen. Kunde und Kasse liegen auf demselben Handy.

## Kontakt laut Website

LAHR SCHUHE, Löhrstr. 51, 56068 Koblenz, Deutschland. Telefon +49 (0) 261 100061, E-Mail info@schuh-frank.de, Website https://www.schuh-frank.de/

Die Vorteilssätze (1/2/3/5 Prozent) sind die Kartenlogik dieser App und keine Preise von schuh-frank.de. An der Kasse lassen sie sich ändern. Filial-Öffnungszeiten stehen nur im Filialfinder der Website.
