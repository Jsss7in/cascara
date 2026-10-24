# Quelle der Seite

Die HTML-Seiten im Ordner darüber werden hier erzeugt. Texte ändern: `content.py` (Startseite) und `legal.py` (Impressum, Datenschutz); Platzhalter stehen in `[eckigen Klammern]`.

    python3 _build/build.py && python3 _build/legal.py

Ordner mit `_` am Anfang veröffentlicht GitHub Pages nicht.

## Der 3D-Anfang, die Flaschenbilder, der Zweig

- `zsh _build/hero3d/build.sh` bündelt `hero3d/hero3d.js` + `page.js` nach `assets/hero3d.js` (Testen: `?debug`, `?debug=ui`).
- `zsh _build/hero3d/shots.sh` rendert die Shop-Bilder (`assets/shop/*.webp`) aus derselben 3D-Flasche; der Vorschau-Server auf Port 5191 muss laufen.
- Der Zweig am Anfang: Freisteller (Fotos von Wikimedia Commons, CC BY-SA 4.0, Nachweise im Impressum) liegen in voller Grösse in `~/ClaudeC/cascara-quellen/plant/` und als Arbeitskopie in `_build/plant/src/` (nicht im Git). Anordnung in `plant/v3.py` (so, wie man es sieht: relativ zur Kirsche), dann
  `python3 _build/plant/v3.py && node _build/plant/bake.mjs _build/plant/v3.json <ordner>` → `zweig.png` + `plant.json`; als WebP nach `assets/plant/zweig.webp`, die Werte aus `plant.json` an das `<img data-hero-plant>` in `v3_body.html`.
