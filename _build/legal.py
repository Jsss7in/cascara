import json, re, importlib.util, pathlib
S = str(pathlib.Path(__file__).resolve().parent)
C = str(pathlib.Path(__file__).resolve().parent.parent)

def load(name):
    spec = importlib.util.spec_from_file_location(name, f'{S}/{name}.py')
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

content = load('content')
L = json.load(open(f'{S}/logo3.json'))
EMAIL = 'info@cascarup.ch'
MAIL = f'<a href="mailto:{EMAIL}">{EMAIL}</a>'
TODO = lambda t: f'<span class="todo">[{t}]</span>'
tpl = open(f'{S}/legal_tpl.html').read()

try:
    photos = load('photos').PHOTOS
except FileNotFoundError:
    photos = []

credits = '\n    '.join(
    f'<p class="credit"><strong>{p["use"]}:</strong> {p["title"]}. Foto: {p["author"]}, '
    f'<a href="{p["license_url"]}" rel="license noopener" target="_blank">{p["license"]}</a>, '
    f'via <a href="{p["page"]}" target="_blank" rel="noopener">{p.get("source", "Wikimedia Commons")}</a>. {p.get("changes", "Zugeschnitten und farblich angepasst.")}</p>'
    for p in photos) or '<p>Bildnachweise folgen.</p>'

sources = '\n      '.join(f'<li><a href="{u}" target="_blank" rel="noopener">{t}</a></li>' for t, u in content.SOURCES)

impressum = f'''<p class="legal__lead">Angaben zum Betreiber dieser Website.</p>

    <h2>Betreiber</h2>
    <address>
      Cascarup<br>
      Schülerunternehmen im Company Programme von Young Enterprise Switzerland (YES)<br>
      c/o Collège Saint-Michel<br>
      Fribourg, Schweiz
    </address>

    <h3>Kontakt</h3>
    <p>E-Mail: {MAIL}</p>


    <h2>Hinweis zum Schülerunternehmen</h2>
    <p>Cascarup ist ein Miniunternehmen im Company Programme von Young Enterprise Switzerland. Schülerinnen und Schüler führen es während des Schuljahres 2026/27 am Collège Saint-Michel. Die Schule und YES sind nicht Betreiber dieser Website.</p>

    <h2>Haftung</h2>
    <p>Wir prüfen die Inhalte dieser Website sorgfältig. Für Vollständigkeit, Richtigkeit und Aktualität übernehmen wir keine Gewähr. Für die Inhalte verlinkter Websites sind ausschliesslich deren Betreiber verantwortlich.</p>

    <h2>Urheberrecht</h2>
    <p>Texte, Logo und Gestaltung: Cascarup. Die Fotos stammen von Flickr und Wikimedia Commons und stehen unter freien Lizenzen; Urheberinnen und Urheber sind im Bildnachweis genannt.</p>
    <p>Karten bei den Ständen: gezeichnet aus Daten von © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap-Mitwirkenden</a>, verfügbar unter der Open Database License (ODbL).</p>

    <h2 id="bildnachweis">Bildnachweis</h2>
    {credits}

    <h2 id="quellen">Quellen</h2>
    <p>Die Angaben auf dieser Website zu Cascara, zur Kaffeekirsche, zu den Getränkeideen und zum Programm stützen sich auf folgende Quellen:</p>
    <ul>
      {sources}
    </ul>

    <p class="legal__stand">Stand: Oktober 2026</p>'''

datenschutz = f'''<p class="legal__lead">Diese Website sammelt so wenige Daten wie möglich. Hier steht, welche es sind, wofür wir sie brauchen und welche Rechte du hast. Grundlage ist das Schweizer Datenschutzgesetz (DSG).</p>

    <h2>Verantwortlich</h2>
    <address>
      Cascarup<br>
      c/o Collège Saint-Michel, Fribourg<br>
      E-Mail: {MAIL}
    </address>

    <h2>Besuch der Website</h2>
    <p>Diese Website liegt bei GitHub Pages, einem Dienst der GitHub, Inc., San Francisco, USA. Beim Aufruf einer Seite speichert GitHub deine IP-Adresse aus Sicherheitsgründen. Die Daten können dabei in den USA bearbeitet werden; GitHub ist nach dem Swiss-U.S. Data Privacy Framework zertifiziert. Wie lange GitHub diese Daten aufbewahrt, regelt die <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">Datenschutzerklärung von GitHub</a>.</p>

    <h2>Bestellungen</h2>
    <p>Wenn du im Shop bestellst, erhalten wir deinen Namen, deine E-Mail-Adresse, falls du sie angibst deine Telefonnummer und deine Bemerkung, dazu die Bestellung und den gewählten Abholort. Wir brauchen diese Angaben nur, um deine Bestellung bereitzustellen, dich bei Fragen zu erreichen und dir die Bestellung zu bestätigen. Zu eigenen Zwecken geben wir sie niemandem weiter und verkaufen sie nicht.</p>
    <p>Die Bestellung läuft über den Dienst FormSubmit (formsubmit.co) von Devro LABS. FormSubmit erhält deine Angaben und deine IP-Adresse, leitet sie per E-Mail an {MAIL} weiter und schickt dir die Bestätigung. Sitz und Speicherort gibt FormSubmit nicht verbindlich an; nach öffentlichen Angaben liegt der Sitz in Sri Lanka. Dort besteht kein dem Schweizer Recht gleichwertiger Datenschutz, und FormSubmit bietet keine vertraglichen Garantien. Wir übermitteln deine Angaben deshalb nur mit deiner ausdrücklichen Einwilligung (Art. 17 Abs. 1 Bst. a DSG), die du mit dem Häkchen im Warenkorb gibst.</p>
    <p>Bei uns liegen die Bestellungen im E-Mail-Postfach {MAIL} bei Microsoft 365 (Microsoft Corporation). Dabei können Daten auch in den USA bearbeitet werden; Microsoft ist nach dem Swiss-U.S. Data Privacy Framework zertifiziert.</p>
    <p>Wir löschen deine Angaben, sobald die Bestellung abgeholt und bezahlt ist, spätestens mit dem Abschluss des Schülerunternehmens am Ende des Schuljahres 2026/27; Belege für unsere Buchhaltung bewahren wir so lange auf, wie das Gesetz es verlangt.</p>
    <p>Dein Warenkorb wird nur in deinem eigenen Browser gespeichert (lokaler Speicher), damit er beim nächsten Besuch noch da ist. Er wird nicht an uns übermittelt, bis du bestellst.</p>

    <h2>Schriften</h2>
    <p>Die Schriften «Newsreader», «Jost» und «DynaPuff» liegen auf dieser Website selbst. Für ihre Anzeige werden keine Daten an Dritte übermittelt.</p>

    <h2>Karten</h2>
    <p>Die Karten bei unseren Ständen liegen als Bilder auf dieser Website selbst; beim Anschauen wird nichts an einen Kartendienst übermittelt. Erst ein Klick auf «Route» oder auf eine Karte öffnet Google Maps, und dort gilt die Datenschutzerklärung von Google.</p>

    <h2>Soziale Medien</h2>
    <p>Wir verlinken auf unsere Profile bei Instagram, TikTok und X. Das sind einfache Links: Solange du keinen davon anklickst, wird nichts an diese Dienste übermittelt. Auf den Plattformen selbst gelten deren eigene Datenschutzerklärungen.</p>

    <h2>Cookies und Analyse</h2>
    <p>Wir setzen keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Social-Media-Plugins ein. Den Warenkorb merkt sich dein Browser im lokalen Speicher, nur für dich.</p>

    <h2>Deine Rechte</h2>
    <p>Du kannst jederzeit Auskunft darüber verlangen, welche Daten wir über dich bearbeiten, und sie berichtigen oder löschen lassen. Schreib uns dafür an {MAIL}. Wenn du findest, dass wir deine Daten nicht richtig bearbeiten, kannst du dich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden: <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener">www.edoeb.admin.ch</a>.</p>

    <h2>Änderungen</h2>
    <p>Ändert sich etwas an dieser Website, passen wir diese Erklärung an. Es gilt die hier veröffentlichte Fassung.</p>

    <p class="legal__stand">Stand: Oktober 2026</p>'''

stands = ', '.join(f"{st['day']}. {st['month']} ({st['town']})" for st in content.STANDS)
prices = ''.join(f"<li>{p['name']}: " + ', '.join(f"{ml} ml CHF {price:.2f}" for ml, price in p['sizes']) + "</li>" for p in content.PRODUCTS)
bedingungen = f'''<p class="legal__lead">So funktioniert das Bestellen bei Cascarup: Du bestellst online, holst deine Flaschen ab und bezahlst bei der Abholung.</p>

    <h2>Anbieter</h2>
    <p>Cascarup, Schülerunternehmen im Company Programme von Young Enterprise Switzerland, c/o Collège Saint-Michel, Fribourg. E-Mail: {MAIL}</p>

    <h2>Angebot und Preise</h2>
    <p>Wir verkaufen unseren Sirup in Flaschen zu 200 ml und 500 ml, solange Vorrat. Die Preise gelten in Schweizer Franken:</p>
    <ul>{prices}</ul>
    <p>Es fallen keine Versandkosten an, weil wir nicht versenden.</p>

    <h2>Bestellung</h2>
    <p>Du legst die Flaschen in den Warenkorb, wählst einen Abholort und gibst deine Angaben ein. Vor dem Absenden kannst du im Warenkorb alles prüfen und ändern. Mit «Bestellung absenden» bestellst du verbindlich. Du erhältst eine Bestätigung per E-Mail mit deiner Bestellnummer. Der Kauf kommt mit der Übergabe und Bezahlung bei der Abholung zustande.</p>

    <h2>Abholung und Bezahlung</h2>
    <p>Du holst deine Bestellung an dem Stand ab, den du gewählt hast ({stands}), oder nach Absprache am Collège Saint-Michel. Bezahlt wird bei der Abholung, bar oder mit TWINT. Holst du eine Bestellung nicht ab, geben wir die Flaschen nach dem gewählten Termin wieder frei.</p>

    <h2>Änderungen und Stornierung</h2>
    <p>Bis zur Abholung kannst du deine Bestellung kostenlos ändern oder stornieren: Schreib uns an {MAIL} und nenn deine Bestellnummer.</p>

    <h2>Lebensmittel</h2>
    <p>Zutaten, Allergene und Haltbarkeit stehen im Shop unter «Zutaten und Hinweise» und auf dem Etikett. Unser Sirup enthält Koffein aus der Kaffeekirsche. Ist mit einer Flasche etwas nicht in Ordnung, melde dich bei uns; wir ersetzen sie oder erstatten den Preis.</p>

    <h2>Datenschutz</h2>
    <p>Wie wir mit deinen Angaben umgehen, steht in der <a href="datenschutz.html">Datenschutzerklärung</a>.</p>

    <h2>Recht</h2>
    <p>Es gilt Schweizer Recht.</p>

    <p class="legal__stand">Stand: Oktober 2026</p>'''

for fname, title, eyebrow, body in [('impressum.html', 'Impressum', 'Rechtliches', impressum),
                                    ('datenschutz.html', 'Datenschutz&shy;erklärung', 'Rechtliches', datenschutz),
                                    ('bestellbedingungen.html', 'Bestell&shy;bedingungen', 'Rechtliches', bedingungen)]:
    h = tpl
    for k, v in {'TITLE': title, 'EYEBROW': eyebrow, 'BODY': body, 'LOGO_FILL': L['fill'], 'LOGO_VB': L['vb'],
                 'COMPANY': content.COMPANY_PLAIN, 'VER': __import__('time').strftime('%Y%m%d%H%M')}.items():
        h = h.replace('{{' + k + '}}', v)
    h = h.replace('<title>Datenschutz&shy;erklärung', '<title>Datenschutzerklärung').replace('<title>Bestell&shy;bedingungen', '<title>Bestellbedingungen')  # no soft hyphen in the tab title
    open(f'{C}/{fname}', 'w').write(h)
    print('built', fname, len(h))
