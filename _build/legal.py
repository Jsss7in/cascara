import json, re, importlib.util, pathlib
S = str(pathlib.Path(__file__).resolve().parent)
C = str(pathlib.Path(__file__).resolve().parent.parent)

def load(name):
    spec = importlib.util.spec_from_file_location(name, f'{S}/{name}.py')
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

content = load('content')
L = json.load(open(f'{S}/logo3.json'))
TODO = lambda t: f'<span class="todo">[{t}]</span>'
tpl = open(f'{S}/legal_tpl.html').read()

try:
    photos = load('photos').PHOTOS
except FileNotFoundError:
    photos = []

credits = '\n    '.join(
    f'<p class="credit"><strong>{p["use"]}:</strong> {p["title"]}. Foto: {p["author"]}, '
    f'<a href="{p["license_url"]}" rel="license noopener" target="_blank">{p["license"]}</a>, '
    f'via <a href="{p["page"]}" target="_blank" rel="noopener">Wikimedia Commons</a>. {p.get("changes", "Zugeschnitten und farblich angepasst.")}</p>'
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
    <p>E-Mail: {TODO("E-Mail-Adresse")}</p>

    <h3>Vertretungsberechtigte Personen</h3>
    <p>{TODO("Vorname Name, Funktion – z. B. Geschäftsführung")}</p>

    <h3>Betreuung</h3>
    <p>{TODO("Name der betreuenden Lehrperson, Collège Saint-Michel")}</p>

    <h2>Hinweis zum Schülerunternehmen</h2>
    <p>Cascarup ist ein Miniunternehmen im Company Programme von Young Enterprise Switzerland. Schülerinnen und Schüler führen es während des Schuljahres 2026/27 am Collège Saint-Michel. Die Schule und YES sind nicht Betreiber dieser Website.</p>

    <h2>Haftung</h2>
    <p>Wir prüfen die Inhalte dieser Website sorgfältig. Für Vollständigkeit, Richtigkeit und Aktualität übernehmen wir keine Gewähr. Für die Inhalte verlinkter Websites sind ausschliesslich deren Betreiber verantwortlich.</p>

    <h2>Urheberrecht</h2>
    <p>Texte, Logo und Gestaltung: Cascarup. Die Fotos stammen von Wikimedia Commons und stehen unter freien Lizenzen; Urheberinnen und Urheber sind im Bildnachweis genannt.</p>

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
      E-Mail: {TODO("E-Mail-Adresse")}
    </address>

    <h2>Besuch der Website</h2>
    <p>Diese Website liegt bei GitHub Pages, einem Dienst der GitHub, Inc., San Francisco, USA. Beim Aufruf einer Seite speichert GitHub deine IP-Adresse aus Sicherheitsgründen. Die Daten können dabei in den USA bearbeitet werden; GitHub ist nach dem Swiss-U.S. Data Privacy Framework zertifiziert. Wie lange GitHub diese Daten aufbewahrt, regelt die <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">Datenschutzerklärung von GitHub</a>.</p>

    <h2>Warteliste</h2>
    <p>Wenn du dich auf die Warteliste einträgst, speichern wir deine E-Mail-Adresse und den Zeitpunkt deiner Einwilligung. Wir verwenden die Adresse nur für einen Zweck: dich einmal zu benachrichtigen, sobald Cascara erhältlich ist. Wir geben sie nicht weiter und verkaufen sie nicht.</p>
    <p>Die Anmeldung läuft über den Dienst FormSubmit (formsubmit.co), der die Angaben aus dem Formular per E-Mail an uns weiterleitet. Dabei können die Daten im Ausland bearbeitet werden. FormSubmit verwendet sie nach eigenen Angaben nur, um den Dienst zu erbringen, und gibt sie nicht weiter. Bei uns liegen die Adressen danach in unserem E-Mail-Postfach.</p>
    <p>Wir löschen deine Adresse nach dem Versand der Benachrichtigung, spätestens aber mit dem Abschluss des Schulunternehmens am Ende des Schuljahres 2026/27. Du kannst deine Einwilligung jederzeit per E-Mail widerrufen.</p>

    <h2>Schriften</h2>
    <p>Die Schriften «Newsreader» und «Jost» liegen auf dieser Website selbst. Für ihre Anzeige werden keine Daten an Dritte übermittelt.</p>

    <h2>Cookies und Analyse</h2>
    <p>Wir setzen keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Social-Media-Plugins ein.</p>

    <h2>Deine Rechte</h2>
    <p>Du kannst jederzeit Auskunft darüber verlangen, welche Daten wir über dich bearbeiten, und sie berichtigen oder löschen lassen. Schreib uns dafür an {TODO("E-Mail-Adresse")}. Wenn du findest, dass wir deine Daten nicht richtig bearbeiten, kannst du dich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden: <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener">www.edoeb.admin.ch</a>.</p>

    <h2>Änderungen</h2>
    <p>Ändert sich etwas an dieser Website, passen wir diese Erklärung an. Es gilt die hier veröffentlichte Fassung.</p>

    <p class="legal__stand">Stand: Oktober 2026</p>'''

for fname, title, eyebrow, body in [('impressum.html', 'Impressum', 'Rechtliches', impressum),
                                    ('datenschutz.html', 'Datenschutz&shy;erklärung', 'Rechtliches', datenschutz)]:
    h = tpl
    for k, v in {'TITLE': title, 'EYEBROW': eyebrow, 'BODY': body, 'LOGO_FILL': L['fill'], 'LOGO_VB': L['vb'],
                 'COMPANY': content.COMPANY_PLAIN, 'VER': __import__('time').strftime('%Y%m%d%H%M')}.items():
        h = h.replace('{{' + k + '}}', v)
    h = h.replace('<title>Datenschutz&shy;erklärung', '<title>Datenschutzerklärung')  # no soft hyphen in the tab title
    open(f'{C}/{fname}', 'w').write(h)
    print('built', fname, len(h))
