# Copy for the Cascara landing page. Every factual sentence is backed by a source listed in
# SOURCES (shown in the Impressum). Plans are written as plans, never as facts.

COMPANY = 'Cascarup'
COMPANY_PLAIN = 'Cascarup'

def facts(rows):
    return '\n          '.join(f'<div><dt>{a}</dt><dd>{b}</dd></div>' for a, b in rows)

def steps(rows):
    return '\n          '.join(
        f'<li data-reveal><div><h3>{t}</h3><p>{p}</p><p class="step__who">{w}</p></div></li>' for t, p, w in rows)

V = {
 'SITE_URL': 'https://cascarup.ch/',
 'IMG_HERO': 'assets/photos/kaffeekirschen.jpg', 'IMG_HERO_ALT': 'Eine Traube reifer, roter Kaffeekirschen mit Regentropfen an einem Zweig',
 'IMG_DRY': 'assets/photos/trocknen.jpg', 'IMG_DRY_ALT': 'Kaffeekirschen trocknen in der Sonne, frische rote zwischen dunklen, schon getrockneten',
 'HERO_LEDE': 'Wir entwickeln einen Sirup aus Cascara, der getrockneten Schale der Kaffeekirsche. '
              'Ein Schülerunternehmen am <span class="nowrap">Collège Saint-Michel</span> in Fribourg.',

 'FRUIT_TEXT': 'Jede Kaffeebohne ist der Samen einer Kirsche. Meist liegen zwei davon in einer Frucht, '
               'umhüllt von Fruchtfleisch und einer roten Haut.',

 'INTRO_P1': 'Für Kaffee zählt nur der Samen. Haut und Fruchtfleisch werden entfernt, und das ist viel: '
             'Rund 30 Prozent der Trockenmasse einer Kaffeekirsche entfallen auf sie. Bei der trockenen '
             'Aufbereitung bleibt pro Kilogramm Kaffeebohnen etwa ein Kilogramm Schalen übrig.',
 'INTRO_P2': 'Ein Teil davon wird zu Dünger oder Tierfutter. Ein grosser Teil landet bis heute in der Umwelt '
             'und belastet Böden und Gewässer. Getrocknet aber trägt die Schale einen eigenen Namen: Cascara. '
             'Im Jemen, in Äthiopien und in Bolivien wird sie seit Langem aufgegossen und getrunken.',

 'SPLIT_TITLE': 'Seit Jahrhunderten<br>getrunken.',
 'SPLIT_P': 'Im Jemen heisst der Aufguss aus Kaffeeschalen Qishr. Er wird mit Gewürzen verfeinert und ist '
            'seit dem 16. Jahrhundert belegt. In Bolivien trinkt man Sultana, in Äthiopien Hashara. '
            'In einer Verkostungsstudie beschrieben die Prüfpersonen Cascara-Aufgüsse als süsslich, fruchtig '
            'und kräuterig, mit Noten von Honig, Dörrpflaume und Schwarztee.',
 'FACTS': facts([
     ('Was', 'Haut und Fruchtfleisch der Kaffeekirsche, getrocknet'),
     ('Name', 'von spanisch <em>cáscara</em>, Schale'),
     ('Geschmack', 'süsslich, fruchtig, Honig, Dörrpflaume, Schwarztee'),
     ('Koffein', 'natürlich enthalten; wie viel, hängt von Rohstoff und Zubereitung ab'),
 ]),

 'PLAN_LEAD': 'Unser Sirup soll den Geschmack von Cascara ins Glas bringen: mit Wasser verdünnt, im Kaffee '
              'oder in Drinks. Wir arbeiten an mehreren Sorten; welche es werden, zeigen wir zur Lancierung.',
 'STEPS': steps([
     ('Reifen und ernten', 'Nach der Blüte brauchen Arabica-Kirschen rund sieben bis neun Monate, bis sie reif und rot sind. Dann werden sie geerntet.', 'Auf der Plantage'),
     ('Trennen und trocknen', 'Die Bohnen werden aus der Frucht gelöst. Haut und Fruchtfleisch werden getrocknet: Das ist Cascara.', 'Bei der Aufbereitung'),
     ('Aufgiessen und einkochen', 'Wir giessen die Cascara mit heissem Wasser auf und kochen den Aufguss zu Sirup ein.', 'In Fribourg'),
     ('Abfüllen', 'Wir füllen in kleinen Chargen ab. Jede Charge bekommt eine Nummer, damit sich jede Flasche zurückverfolgen lässt.', 'In Fribourg'),
 ]),

 'PROJECT_P1': 'Wir sind ein Schülerunternehmen am Collège Saint-Michel. Im Company Programme von Young Enterprise '
               'Switzerland gründen und führen Schülerinnen und Schüler zwischen 16 und 20 Jahren während eines '
               'Schuljahres ein eigenes Miniunternehmen.',
 'PROJECT_P2': 'Unser Beitrag ist ein Produkt aus dem, was bei der Kaffee-Ernte übrig bleibt.',
 'PROJECT_FACTS': facts([
     ('Schule', 'Collège Saint-Michel, Fribourg<br><span class="muted">gegründet 1582</span>'),
     ('Programm', 'YES Company Programme'),
     ('Schuljahr', '2026/27'),
 ]),

 'COMPANY': COMPANY_PLAIN,
}

# Sources, listed in the Impressum
SOURCES = [
 ('Eckhardt, S. et al. (2022): Coffee By-Products … Molecules 27(23)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9740254/'),
 ('Durchführungsverordnung (EU) 2022/47 – getrocknetes Kaffeekirschen-Fruchtfleisch als traditionelles Lebensmittel', 'http://publications.europa.eu/resource/celex/32022R0047'),
 ('EFSA NDA Panel (2022): Safety of dried coffee husk (cascara)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8875134/'),
 ('DePaula, J. et al. (2022): Sensory profile of cascara infusions, Foods 11(19)', 'https://doi.org/10.3390/foods11193144'),
 ('FAO (2000): Post harvest handling and processing of coffee in African countries', 'https://www.fao.org/4/x6939e/X6939e01.htm'),
 ('Unigarro, C. et al. (2025): Plants 14(21)', 'https://doi.org/10.3390/plants14213396'),
 ('National Coffee Association: Lifecycle of coffee', 'https://www.aboutcoffee.org/origins/lifecycle-of-coffee/'),
 ('Sultana (bebida) – Wikipedia (spanisch)', 'https://es.wikipedia.org/wiki/Sultana_(bebida)'),
 ('Kollegium St. Michael / Collège Saint-Michel', 'https://st-michel.ch/de'),
 ('Young Enterprise Switzerland: Company Programme', 'https://yes.swiss/programme/company-programme'),
]

# ---------------------------------------------------------------------------
# Ideas for the glass. Serving ideas, all alcohol-free; amounts follow with the finished syrup.
ICONS = {
 'kalt': '<path d="M18 14 L46 14"/><path d="M20 14 L23 54 C23.5 57 25.5 58 28 58 L36 58 C38.5 58 40.5 57 41 54 L44 14"/><path d="M21.6 34 L42.4 34"/><path d="M26 39 L33 37 L35 44 L28 46 Z"/><path d="M33 46.5 L40 47.5 L39 54 L32 53 Z"/><path d="M38 5 L33 33"/>',
 'heiss': '<path d="M16 30 L48 30 L46 44 C45 51 39 54 32 54 C25 54 19 51 18 44 Z"/><path d="M47.2 34 C55 34 55 44 45.4 44.5"/><path d="M12 58.5 L52 58.5"/><path d="M26 24 C22 19 30 16 26 10"/><path d="M35 24 C31 19 39 16 35 10"/>',
 'punsch': '<path d="M9 28 L55 28 C55 42 45 50 32 50 C19 50 9 42 9 28 Z"/><path d="M26 50 L24 57 L40 57 L38 50"/><path d="M46 7 L37 33"/><path d="M37 33 C32 34 33 40 38 39 C41 38.5 41 34 37 33"/><path d="M15 33 C17 36 21 36 23 33"/><path d="M25 35 C27 38 31 38 33 35"/>',
}

GROUPS = [
 ('kalt', 'Kalt', [
   ('Cascara Soda', 'Sirup · Mineralwasser · Eis · Zitronenzeste', 'Spritzig und fruchtig. Der einfachste Weg, Cascara zu probieren.'),
   ('Cascara Tonic', 'Sirup · Tonic Water · Eis · Orangenzeste', 'Bitter trifft fruchtig, wie beim Espresso Tonic.'),
 ]),
 ('heiss', 'Heiss', [
   ('Heisse Cascara', 'Sirup · heisses Wasser · Zimtstange · Zitrone', 'Nach dem Vorbild der bolivianischen Sultana, die heiss mit Zimt, Nelke und Zitrone getrunken wird.'),
   ('Cascara Latte', 'Sirup · Espresso · Milch', 'Heiss oder auf Eis. Die Frucht findet zurück zur Bohne.'),
 ]),
 ('punsch', 'Punsch', [
   ('Winterpunsch', 'Sirup · Schwarztee · Apfelsaft · Orange · Zimt · Nelke', 'Heiss aus dem grossen Topf, für kalte Abende.'),
   ('Sommerbowle', 'Sirup · Mineralwasser · Orange · Zitrone · Minze · Eis', 'Kalt aus der Karaffe, zum Teilen.'),
 ]),
]

def drinks():
    groups = []
    for n, (key, title, items) in enumerate(GROUPS):
        lis = '\n'.join(
            f'''            <li><h4>{name}</h4><p class="drinks__mix">{mix.replace(' · ', '&nbsp;· ')}</p><p>{text}</p></li>''' for name, mix, text in items)
        groups.append(f'''        <article class="drinks__group" data-reveal style="--d:{n}">
          <svg class="drinks__icon" viewBox="0 0 64 64" aria-hidden="true">{ICONS[key].replace('<path ', '<path pathLength="1" ')}</svg>
          <h3 class="drinks__title">{title}</h3>
          <ul class="drinks__list">
{lis}
          </ul>
        </article>''')
    return f'''    <!-- Ideas for the glass: a bar menu, alcohol-free -->
    <section class="drinks" data-tone="night" id="ideen" aria-labelledby="ideen-title">
      <header class="drinks__head">
        <p class="eyebrow" data-reveal>Ideen fürs Glas</p>
        <h2 class="display" id="ideen-title" data-reveal style="--d:1">Heiss, kalt<br>oder im <em>Punsch.</em></h2>
        <p class="drinks__intro" data-reveal style="--d:2">Sechs Ideen, wie wir uns den Sirup im Glas vorstellen. Alle alkoholfrei; die Mengen verraten wir mit dem fertigen Sirup.</p>
      </header>
      <div class="drinks__tabs" role="group" aria-label="Kategorien">
{chr(10).join(f'        <button type="button" class="drinks__tab" data-drinks-tab aria-pressed="{str(i == 0).lower()}">{t}</button>' for i, (k, t, items) in enumerate(GROUPS))}
      </div>
      <div class="drinks__menu" data-drinks-menu>
{chr(10).join(groups)}
      </div>
    </section>'''

V['DRINKS'] = drinks()

# ---------------------------------------------------------------------------
# Where our stand is. Dates in 2026; a stand turns «Vorbei» by itself once its day has passed (main.js).
# The maps are drawn from OpenStreetMap by _build/maps.py; «at» is the pin, at the centre of each map.
SKYLINES = {
 # Fribourg: the cathedral tower over the old town, the bridge across the Sarine below
 'fribourg': '<path d="M4 56h56"/><path d="M3 47h20"/><path d="M4 47v9m18-9v9"/><path d="M4 56a4.5 4.5 0 0 1 9 0a4.5 4.5 0 0 1 9 0"/>'
             '<path d="M25 56V24h10v32"/><path d="M24 24h12"/><path d="M26 24v-6h8v6"/><path d="M26 18l1-3 1 3m1 0l1-5 1 5m1 0l1-3 1 3"/>'
             '<path d="M28.5 30v6m3-6v6"/><path d="M35 40l7-6 7 6v16"/><path d="M49 44l5-5 5 5v12"/><path d="M40 47h4m8 2h4"/>',
 # Estavayer-le-Lac: the Château de Chenaux, its keep and round towers, the lake in front
 'estavayer': '<path d="M6 50h52"/><path d="M8 56c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0 5 2 7.5 0 5-2 7.5 0 5 2 7.5 0"/>'
              '<path d="M26 50V20h12v30"/><path d="M26 20v-4h3v4h3v-4h3v4h3v-4"/><path d="M30.5 27v5m3-5v5"/>'
              '<path d="M14 50V31h8v19"/><path d="M13 31l5-10 5 10"/><path d="M42 50V29h8v21"/><path d="M41 29l5-10 5 10"/><path d="M22 40h4m12 0h4"/>',
 # Avenches: the arches of the Roman amphitheatre and the lone column of the Cigognier
 'avenches': '<path d="M4 56h56"/><path d="M6 56V40h28v16"/><path d="M6 46h28"/>'
             '<path d="M10 56v-5a3 3 0 0 1 6 0v5m3 0v-5a3 3 0 0 1 6 0v5m3 0v-5a3 3 0 0 1 6 0v5"/>'
             '<path d="M44 56V24m8 32V24"/><path d="M42 24h12"/><path d="M43 24l1-4h8l1 4"/><path d="M39 20h18v-4H39z"/><path d="M42 56h12"/>',
}
STANDS = [
 dict(date='2026-10-29', weekday='Donnerstag', day='29', month='Oktober', time='19:00', title='Eröffnungsfeier',
      place='Aula, Collège de Gambach', town='Fribourg', icon='fribourg', map='gambach', at=(46.8069923, 7.1497324)),
 dict(date='2026-11-14', weekday='Samstag', day='14', month='November', title='Wochenmarkt',
      place='Altstadt', town='Estavayer-le-Lac', icon='estavayer', map='estavayer', at=(46.84918, 6.84732),
      view=(46.8503, 6.8430)),   # framed towards the lake, so Estavayer-le-Lac shows its lake
 dict(date='2026-12-05', weekday='Samstag', day='5', month='Dezember', title='Saint-Nicolas-Markt',
      place='Collège Saint-Michel', town='Fribourg', icon='fribourg', map='stmichel', at=(46.8067246, 7.1579802)),
 dict(date='2026-12-19', weekday='Samstag', day='19', month='Dezember', title='Weihnachtsmarkt',
      place='Altstadt', town='Avenches', icon='avenches', map='avenches', at=(46.8794048, 7.0396615)),
]

def route(lat, lon):
    return f'https://www.google.com/maps/search/?api=1&query={lat}%2C{lon}'


def stands():
    items = []
    for n, s in enumerate(STANDS):
        icon = SKYLINES[s['icon']].replace('<path ', '<path pathLength="1" ')
        when = s['weekday'] + (f' · {s["time"]}' if s.get('time') else '')
        stamp = s['date'] + (f'T{s["time"]}' if s.get('time') else '')
        link = route(*s['at'])
        items.append(
            f'      <li class="stand" data-reveal data-stand="{s["date"]}" style="--d:{n}">\n'
            f'        <p class="stand__badge" data-stand-badge hidden></p>\n'
            f'        <svg class="stand__icon" viewBox="0 0 64 64" aria-hidden="true">{icon}</svg>\n'
            f'        <p class="stand__date"><time datetime="{stamp}"><span class="stand__day">{s["day"]}.</span> {s["month"]}</time></p>\n'
            f'        <p class="stand__when">{when}</p>\n'
            f'        <h3 class="stand__title">{s["title"]}</h3>\n'
            f'        <p class="stand__place">{s["place"]}<br>{s["town"]}</p>\n'
            f'        <a class="stand__map" href="{link}" target="_blank" rel="noopener" aria-label="{s["title"]} in {s["town"]}: Karte öffnen">'
            f'<img src="assets/maps/{s["map"]}.svg" alt="Karte: {s["place"]}, {s["town"]}" width="600" height="400" loading="lazy" decoding="async"></a>\n'
            f'        <p class="stand__links"><a href="{link}" target="_blank" rel="noopener">Route</a>'
            f'<a href="assets/staende/{s["date"]}.ics" download>In den Kalender</a></p>\n'
            f'      </li>')
    return (
        '    <!-- Where our stand is: four dates, a skyline and a map each -->\n'
        '    <section class="stands" data-tone="paper" id="staende" aria-labelledby="staende-title">\n'
        '      <div class="stands__inner">\n'
        '        <header class="stands__head">\n'
        '          <p class="eyebrow" data-reveal>Unterwegs</p>\n'
        '          <h2 class="display" id="staende-title" data-reveal style="--d:1">Hier findest<br>du <em>uns.</em></h2>\n'
        '          <p class="stands__intro" data-reveal style="--d:2">Vier Daten, vier Orte. An diesen Tagen sind wir mit unserem Stand vor Ort: Komm vorbei und lern uns kennen.</p>\n'
        '        </header>\n'
        '        <ol class="stands__list">\n' + '\n'.join(items) + '\n        </ol>\n'
        '        <p class="stands__credit">Karten: © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>-Mitwirkende</p>\n'
        '      </div>\n'
        '    </section>')


def ics(s):
    """One calendar entry per stand: all day, or from the start time when there is one."""
    d = s['date'].replace('-', '')
    if s.get('time'):
        start = f'DTSTART;TZID=Europe/Zurich:{d}T{s["time"].replace(":", "")}00'
    else:
        start = f'DTSTART;VALUE=DATE:{d}'
    esc = lambda t: t.replace('\\', '\\\\').replace(';', '\\;').replace(',', '\\,')
    zone = ['BEGIN:VTIMEZONE', 'TZID:Europe/Zurich',
            'BEGIN:DAYLIGHT', 'TZOFFSETFROM:+0100', 'TZOFFSETTO:+0200', 'TZNAME:CEST', 'DTSTART:19700329T020000',
            'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU', 'END:DAYLIGHT',
            'BEGIN:STANDARD', 'TZOFFSETFROM:+0200', 'TZOFFSETTO:+0100', 'TZNAME:CET', 'DTSTART:19701025T030000',
            'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU', 'END:STANDARD', 'END:VTIMEZONE'] if s.get('time') else []
    lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Cascarup//Staende//DE', 'CALSCALE:GREGORIAN', *zone, 'BEGIN:VEVENT',
             f'UID:{d}-{s["map"]}@cascarup.ch', 'DTSTAMP:20261009T000000Z', start,
             f'SUMMARY:{esc("Cascarup: " + s["title"])}', f'LOCATION:{esc(s["place"] + ", " + s["town"])}',
             f'GEO:{s["at"][0]};{s["at"][1]}', 'URL:https://cascarup.ch/#staende', 'END:VEVENT', 'END:VCALENDAR']
    return '\r\n'.join(lines) + '\r\n'

# Our profiles: plain links (nothing loads from the platforms), all under the same name.
HANDLE = 'cascarup'
SOCIALS = [
 ('Instagram', f'https://www.instagram.com/{HANDLE}/',
  '<rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5.4"/><circle cx="12" cy="12" r="4.4"/><circle class="socials__dot" cx="17.4" cy="6.6" r="1.05"/>'),
 ('TikTok', f'https://www.tiktok.com/@{HANDLE}',
  '<path d="M14.4 2.8v12.6a4.4 4.4 0 1 1-4.4-4.4"/><path d="M14.4 2.8c.6 3.2 2.9 5.4 6.2 5.6"/>'),
]
# Not live: on 9.10.2026 there was no account @cascarup on X or Facebook (x.com: «Nutzerprofil nicht gefunden»,
# facebook.com: only the login wall). Once the profiles exist, move these back into SOCIALS above (fix the URL if
# the name differs) and add the platform to the «Soziale Medien» paragraph in legal.py.
# ('X', f'https://x.com/{HANDLE}',
#  '<path d="M4.6 4.5h4l10.8 15h-4z"/><path d="M19 4.5l-5.9 6.5M10.9 13.4 5 19.5"/>'),
# ('Facebook', f'https://www.facebook.com/{HANDLE}',
#  '<circle cx="12" cy="12" r="9.2"/><path d="M13.4 21.2V10.6c0-1.6.9-2.5 2.5-2.5h1.2"/><path d="M10.4 13.6h5.6"/>'),

V['HANDLE'] = HANDLE

# Our latest Instagram posts, newest first, updated by hand on request (at most three are shown).
# Each picture is saved at 1080 × 1350 (Instagram's 4:5) into assets/instagram/, so the page loads nothing from Instagram.
# dict(url='https://www.instagram.com/p/…/', img='assets/instagram/….jpg', alt='what the picture shows')
IG_POSTS = [
 dict(url='https://www.instagram.com/p/DeKD0cnCoG1/', img='assets/instagram/2026-10-06-eroeffnungsfeier.jpg',
      alt='Plakat: Eröffnungsfeier von Cascarup und Young Enterprise Switzerland, Donnerstag, 29. Oktober 2026, 19 Uhr, Aula Kollegium Gambach'),
]

def ig_feed():
    posts = IG_POSTS[:3]
    if not posts:
        return ''
    tiles = [f'<li><a class="feed__post" href="{p["url"]}" target="_blank" rel="noopener">'
             f'<img src="{p["img"]}" alt="{p["alt"]}" width="1080" height="1350" loading="lazy" decoding="async"></a></li>'
             for p in posts]
    if len(posts) < 3:   # until there are three, the row ends in a tile that leads to the profile
        icon = SOCIALS[0][2]
        tiles.append(f'<li><a class="feed__more" href="{SOCIALS[0][1]}" target="_blank" rel="noopener">'
                     f'<svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg><span>Mehr auf Instagram<br><strong>@{HANDLE}</strong></span></a></li>')
    return (f'<ul class="feed" style="--n:{len(tiles)}" aria-label="Unsere neuesten Beiträge auf Instagram">'
            + ''.join(tiles) + '</ul>')
V['SOCIALS'] = ('<ul class="socials" aria-label="Cascarup in den sozialen Medien">' + ''.join(
    f'<li><a href="{url}" target="_blank" rel="noopener" aria-label="{COMPANY} auf {name}" title="{name}">'
    f'<svg viewBox="0 0 24 24" aria-hidden="true">{svg}</svg></a></li>' for name, url, svg in SOCIALS) + '</ul>')

# Waitlist: each sign-up arrives by e-mail through FormSubmit (formsubmit.co); the first one asks
# to confirm the address once. Left empty, the form says the list opens soon and stores nothing.
WAITLIST_EMAIL = 'info@cascarup.ch'
V['FORM_ENDPOINT'] = f'https://formsubmit.co/ajax/{WAITLIST_EMAIL}' if WAITLIST_EMAIL else ''

V['IG_FEED'] = ig_feed()
V['STANDS'] = stands()
