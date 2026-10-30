# Quelle der Seite

Die HTML-Seiten im Ordner darüber werden hier erzeugt. Texte ändern: `content.py` (Startseite und `partizipation.html`) und `legal.py` (Impressum, Datenschutz, Bestellbedingungen); Platzhalter stehen in `[eckigen Klammern]`.

    python3 _build/build.py && python3 _build/legal.py

Ordner mit `_` am Anfang veröffentlicht GitHub Pages nicht.

## Drei Sprachen

Geschrieben wird nur auf Deutsch. `build.py` und `legal.py` machen daraus mit `i18n.py` die Seiten in `/fr/` und `/en/`: jeder Text und jedes lesbare Attribut wird in `i18n/fr.json` bzw. `i18n/en.json` nachgeschlagen (Deutsch → Übersetzung), die Pfade zu Bildern und Skripten führen einen Ordner hinauf. Die Texte, die die Skripte selbst schreiben (Fehlermeldungen, Knöpfe), stehen in `i18n/js.json` und kommen als `window.cascarupT` in den Kopf der Seite.

Nach einer Textänderung: bauen, dann `python3 _build/i18n.py extract` → `i18n/strings.json` listet alle deutschen Texte; neue oder geänderte fehlen in fr.json/en.json (der Build meldet sie als `UNTRANSLATED` und lässt sie deutsch). Übersetzung ergänzen, neu bauen. Der Umschalter DE · FR · EN steht neben dem Logo (Handy), neben dem Shop (Laptop) und im Menü.

## Der 3D-Anfang, die Flaschen, der Zweig

- `zsh _build/hero3d/build.sh` bündelt `hero3d/hero3d.js` + `page.js` nach `assets/hero3d.js` (Testen: `?debug`, `?debug=ui`, `?debug&at=0.9`). Die 3D-Flasche ist unsere 500-ml-Flasche (Profil `BOTTLE`, vom Foto abgemessen), die Etiketten kommen aus `assets/label/`.
- Etiketten: `label/label.html` zeichnet beide Etiketten aus den Vorlagen nach (Wellen in `label/waves.json`, gelesen von `label/waves.py` aus den Vorlagen in `~/ClaudeC/cascara-quellen/label/`; die Lichterkette ist von Hand nachgezogen). `node _build/label/render.mjs` (Vorschau-Server auf Port 5191) → `label/out/*.png` + `assets/label/*.webp`.
- Shop-Bilder: `bottle/mockup.py` nimmt unsere Flaschenfotos aus `~/ClaudeC/cascara-quellen/bottle/`, stellt sie frei, legt das Etikett aufs Glas und setzt sie mit Schatten auf den Hintergrund → `assets/shop/<sorte>-<ml>.webp` (1400 × 1750) und `assets/bottle/<sorte>-<ml>.webp` (Freisteller, z. B. für das Menü). Braucht Python mit OpenCV und NumPy.
- Partizipationsscheine: `PS_OPEN` in `content.py` (offen seit 29.10.2026). Bezahlt wird mit TWINT: nach dem Bestellen zeigt die Seite unseren QR-Code (`assets/twint/twint-qr.png`, aus dem TWINT-Bild des Teams zugeschnitten), den Betrag und einen Code `PS-XXXXX`, den man in die Mitteilung schreibt. Die Bestellung kommt über FormSubmit als E-Mail an info@cascarup.ch (Betreff mit Code und Betrag); FormSubmit schickt dem Käufer eine Bestätigung mit allem zum Bezahlen. Eingang in TWINT mit dem Code in der Mail abgleichen.
- Shop geschlossen/offen: `SALES_OPEN` in `content.py`. Solange `False`: «Bald erhältlich» im Shop, kein Warenkorb, und bei den Partizipationsscheinen nur Vorname, Name und E-Mail (FormSubmit an info@cascarup.ch), damit wir schreiben können, sobald es losgeht.
- Das Logo: `logo_trace.py` zeichnet es aus der Vorlage in `~/ClaudeC/cascara-quellen/logo/` nach (Umriss + Mittellinie, auf der es sich zeichnet) → `logo3.json`, `assets/logo.svg`, `favicon.svg`, `apple-touch-icon.png`. Danach Etiketten, Flaschenbilder, 3D, Seiten und Teilen-Bilder neu bauen. Die Farben kommen von der Seite (Creme auf Terrakotta), nicht von der Vorlage.
- Teilen-Bilder: `og/ogscene.js` fotografiert das Schlussbild des Anfangs → `og/scene.png`, `og/og.js` setzt den Namen darüber → `assets/og.jpg`; `og/ogps.js` → `assets/og-ps.jpg` (Partizipationsseite).
- Der Anfang seit 30.10.2026: ein Papier-Diorama in der Abenddämmerung um die echte Kirsche (`hero3d/diorama.js`, von `page.js` angeordnet und bewegt; `data-box` am `<div data-hero-dio>` gibt den Platz um die Kirsche für die 3D-Kamera). Alles aus Code gezeichnet (SVG), keine Bilder; nur Transformationen und Deckkraft bewegen sich, jedes bewegte Ding ist ein eigenes kleines Element. Der Scroll-Hinweis ist ein Knopf in Flaschenform (`.cue` in `v3_body.html`).
- Früher (bis 29.10.2026) der Foto-Zweig: Freisteller (Fotos von Wikimedia Commons, CC BY-SA 4.0, Nachweise im Impressum) liegen in voller Grösse in `~/ClaudeC/cascara-quellen/plant/` und als Arbeitskopie in `_build/plant/src/` (nicht im Git). Anordnung in `plant/v4.py` (so, wie man es sieht: relativ zur Kirsche), dann
  `python3 _build/plant/v4.py && node _build/plant/bake.mjs _build/plant/v4.json <ordner>` → `zweig.png` + `plant.json`; als WebP nach `assets/plant/zweig.webp`, die Werte aus `plant.json` an das `<img data-hero-plant>` in `v3_body.html`.

## Bezahlen (Shop und Partizipationsscheine)

Beide Formulare schicken ihre Bestellung an `CHECKOUT_URL` in `content.py` (leer = «Bezahlung wird eingerichtet», es wird nichts gesendet). Dahinter gehört ein kleiner Dienst auf dem neuen Hosting (z. B. eine Netlify-, Vercel- oder Cloudflare-Funktion), der mit Stripe eine Checkout-Session anlegt – Stripe kann TWINT und Karten.

Er bekommt per `POST` ein JSON wie

    { "type": "bestellung" | "partizipation", "number": "CU-261025-AB12", "method": "twint" | "karte",
      "items": [{ "id": "original", "ml": 500, "qty": 2, "price": 12.95 }], "shipping": { "price": 12 },
      "total": 37.9, "customer": { "vorname": "…", "email": "…", "strasse": "…", "plz": "1700", "ort": "…" },
      "ende": "zurueck" | "behalten", "success": "https://…?bezahlt=CU-…", "cancel": "https://…?zahlung=abgebrochen#shop" }

und antwortet mit `{ "url": "<Adresse der Stripe-Bezahlseite>" }`. Wichtig: Preise und Versandkosten **im Dienst neu rechnen** (eigene Preisliste, `SHIPPING` aus `content.py`), nie den Beträgen aus dem Browser trauen; `method` wählt `payment_method_types` (`twint` oder `card`). Nach der Zahlung schickt Stripe zurück an `success`, die Seite zeigt dann die Bestellnummer. Die Bestätigungs-Mail und die Meldung an info@cascarup.ch kommen von Stripe bzw. vom Dienst (Webhook `checkout.session.completed`).
