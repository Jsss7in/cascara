# Quelle der Seite

Die HTML-Seiten im Ordner darüber werden hier erzeugt. Texte ändern: `content.py` (Startseite) und `legal.py` (Impressum, Datenschutz); Platzhalter stehen in `[eckigen Klammern]`.

    python3 _build/build.py && python3 _build/legal.py

Ordner mit `_` am Anfang veröffentlicht GitHub Pages nicht.
