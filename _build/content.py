# Copy for the Cascara landing page. Every factual sentence is backed by a source listed in
# SOURCES (shown in the Impressum). Plans are written as plans, never as facts.

COMPANY = 'Cascarup'
COMPANY_PLAIN = 'Cascarup'

def facts(rows):
    return '\n          '.join(f'<div><dt>{a}</dt><dd>{b}</dd></div>' for a, b in rows)

V = {
 'SITE_URL': 'https://cascarup.ch/',
 'IMG_DRY': 'assets/photos/trocknen.jpg', 'IMG_DRY_ALT': 'Kaffeekirschen trocknen in der Sonne, frische rote zwischen dunklen, schon getrockneten',
 'HERO_LEDE': 'Wir entwickeln einen Sirup aus Cascara, der getrockneten Schale der Kaffeekirsche. '
              'Ein Schülerunternehmen am <span class="nowrap">Collège Saint-Michel</span> in Freiburg.',

 'FRUIT_TEXT': 'Jede Kaffeebohne ist der Samen einer Kirsche. Meist liegen zwei davon in einer Frucht, '
               'umhüllt von Fruchtfleisch und einer roten Haut.',

 'INTRO_P1': 'Für Kaffee zählt nur der Samen. Haut und Fruchtfleisch werden entfernt, und das ist viel: '
             'Rund 30 Prozent der Trockenmasse einer Kaffeekirsche entfallen auf sie. Bei der trockenen '
             'Aufbereitung bleibt pro Kilogramm Kaffeebohnen etwa ein Kilogramm Schalen übrig.',
 'INTRO_P2': 'Ein Teil davon wird zu Dünger oder Tierfutter. Ein grosser Teil landet bis heute in der Umwelt '
             'und belastet Böden und Gewässer. Getrocknet aber trägt die Schale einen eigenen Namen: Cascara. '
             'Und sie lässt sich trinken.',

 'SPLIT_TITLE': 'Seit Jahrhunderten<br>getrunken.',
 'SPLIT_P': 'Im Jemen heisst der Aufguss aus Kaffeeschalen Qishr. Er wird mit Gewürzen verfeinert und ist '
            'seit dem 16. Jahrhundert belegt. In Bolivien trinkt man Sultana, in Äthiopien Hashara. '
            'In einer Verkostungsstudie beschrieben die Prüfpersonen Cascara-Aufgüsse als süsslich, fruchtig '
            'und kräuterig, mit Noten von Honig, Dörrpflaume und Schwarztee.',

 'SPLIT_SIRUP': 'Ein Sirup, zwei Sorten: Wir giessen die Cascara auf, kochen sie zu Sirup ein und füllen ihn in Freiburg von Hand ab, als Original und als Cozy Spice mit Zimt und Sternanis.',

 'PROJECT_P1': 'Wir sind ein Schülerunternehmen am Collège Saint-Michel. Im Company Programme von Young Enterprise '
               'Switzerland gründen und führen Schülerinnen und Schüler zwischen 16 und 20 Jahren während eines '
               'Schuljahres ein eigenes Miniunternehmen.',
 'PROJECT_P2': 'Unser Beitrag ist ein Produkt aus dem, was bei der Kaffee-Ernte übrig bleibt.',
 'PROJECT_FACTS': facts([
     ('Schule', 'Collège Saint-Michel, Freiburg<br><span class="muted">gegründet 1582</span>'),
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
    <section class="drinks" data-tone="night" data-fade="top bottom" id="ideen" aria-labelledby="ideen-title">
      <!--drips-->
      <header class="drinks__head">
        <p class="eyebrow" data-reveal>Ideen fürs Glas</p>
        <h2 class="display" id="ideen-title" data-reveal style="--d:1">Heiss, kalt<br>oder im <em>Punsch.</em></h2>
        <p class="drinks__intro" data-reveal style="--d:2">Sechs Ideen, wie du den Sirup trinken kannst. Alle alkoholfrei; dosiert wird nach Geschmack.</p>
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
 # Freiburg: the cathedral tower over the old town, the bridge across the Sarine below
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
      place='Aula, Collège de Gambach', town='Freiburg', icon='fribourg', map='gambach', at=(46.8069923, 7.1497324)),
 dict(date='2026-11-21', weekday='Samstag', day='21', month='November', title='Wochenmarkt',
      place='Altstadt', town='Estavayer-le-Lac', icon='estavayer', map='estavayer', at=(46.84918, 6.84732),
      view=(46.8503, 6.8430), cancelled=True),   # cancelled (2026-11-19): grey, «Abgesagt», no route, no calendar entry   # framed towards the lake, so Estavayer-le-Lac shows its lake
 dict(date='2026-12-05', weekday='Samstag', day='5', month='Dezember', title='Saint-Nicolas-Markt',
      place='Collège Saint-Michel', town='Freiburg', icon='fribourg', map='stmichel', at=(46.8067246, 7.1579802)),
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
        off = s.get('cancelled')
        badge = ('<p class="stand__badge" data-stand-badge>Abgesagt</p>' if off else '<p class="stand__badge" data-stand-badge hidden></p>')
        img = (f'<img src="assets/maps/{s["map"]}.svg" alt="Karte: {s["place"]}, {s["town"]}" width="600" height="400" loading="lazy" decoding="async">')
        mapbox = (f'<span class="stand__map">{img}</span>' if off else
                  f'<a class="stand__map" href="{link}" target="_blank" rel="noopener" aria-label="{s["title"]} in {s["town"]}: Karte öffnen">{img}</a>')
        links = '        <p class="stand__links stand__links--none" aria-hidden="true"></p>\n' if off else (f'        <p class="stand__links"><a href="{link}" target="_blank" rel="noopener">Route</a>'
                                f'<a href="assets/staende/{s["date"]}.ics" download>In den Kalender</a></p>\n')
        items.append(
            f'      <li class="stand{" is-cancelled" if off else ""}" data-reveal data-stand="{s["date"]}"{" data-cancelled" if off else ""} style="--d:{n}">\n'
            f'        {badge}\n'
            f'        <svg class="stand__icon" viewBox="0 0 64 64" aria-hidden="true">{icon}</svg>\n'
            f'        <p class="stand__date"><time datetime="{stamp}"><span class="stand__day">{s["day"]}.</span> {s["month"]}</time></p>\n'
            f'        <p class="stand__when">{when}</p>\n'
            f'        <h3 class="stand__title">{s["title"]}</h3>\n'
            f'        <p class="stand__place">{s["place"]}<br>{s["town"]}</p>\n'
            f'        {mapbox}\n'
            f'{links}'
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
# Not live: on 9.10.2026 there was no public Facebook page @cascarup (facebook.com showed only the login wall).
# Once it exists, move it back into SOCIALS above and add Facebook to the «Soziale Medien» paragraph in legal.py.
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

# ---------------------------------------------------------------------------
# The two kinds and their prices. There is no online shop: the bottles are bought at our stands.
import json
NOTIFY_ENDPOINT = 'https://formsubmit.co/ajax/info@cascarup.ch'
# The two kinds we start with (Management Summary and pitch: «Original» and «Cozy Spice», inspired by the
# Gifferstee of our region). Each picture is a photograph of our real bottle in that size with our label on it
# (_build/bottle/mockup.py): 200 ml is the flat flask, 500 ml the tall round bottle.
PRODUCTS = [
 dict(id='original', name='Original', tag='Die pure Cascara',
      text='Die pure Cascara aus der Schale der Kaffeekirsche. Mit Wasser verdünnt, im Kaffee oder in Drinks.',
      notes=['Fruchtig', 'Honig', 'Melisse', 'Rosinen'],
      sizes=[(200, 7.95), (500, 12.95)]),
 dict(id='cozy-spice', name='Cozy Spice', tag='Zimt · Sternanis',
      text='Unsere Cascara, mit Zimt und Sternanis aufgekocht. Inspiriert vom Gifferstee aus unserer Region.',
      notes=['Zimt', 'Sternanis', 'Warm'],
      sizes=[(200, 8.95), (500, 13.95)]),
]
BOTTLE_NAME = {200: 'Taschenflasche', 500: 'Flasche'}
# the bottles cut out for the table in the shop's picture (_build/bottle/mockup.py): width × height in pixels
STAND = {200: (212, 469), 500: (146, 605)}
FIRST = 500           # the size shown first
# What a buyer must be able to read before ordering food online (LIV Art. 44); «folgt» until we have it.
PRODUCT_FACTS = [
 ('Zutaten', None), ('Allergene', None), ('Füllmenge', '200 ml oder 500 ml'),
 ('Haltbarkeit', None), ('Hinweis', 'Enthält Koffein aus der Kaffeekirsche.'),
 ('Hergestellt von', 'Cascarup, c/o Collège Saint-Michel, Freiburg, Schweiz'),
]
chf = lambda x: f'{x:.2f}'

def shop_overlay(size, cls):
    """What moves over the shop's picture (rendered by _build/shopscene, overlay-<w>.json): its clouds drifting and
    the farmer walking along her row, placed in shares of the picture so they sit where they were drawn."""
    import pathlib
    o = json.loads((pathlib.Path(__file__).parent / 'shopscene' / f'overlay-{size}.json').read_text())
    W, H = o['W'], o['H']
    pc = lambda v, of: f'{100 * v / of:.3f}%'
    out = [f'          <div class="shop__over {cls}" aria-hidden="true">']
    for i, c in enumerate(o['clouds']):
        out.append(f'            <span class="shop__cloud" style="left:{pc(c["x"], W)};top:{pc(c["y"], H)};width:{pc(c["w"], W)};'
                   f'--dur:{44 + i * 9}s;--drift:{c["dir"] * (14 + i * 4)}%">{c["svg"]}</span>')
    f = o['farmer']
    out.append(f'            <span class="shop__farmer" style="left:{pc(f["from"], W)};top:{pc(f["y"], H)};width:{pc(f["w"], W)};--walk:{100 * (f["to"] - f["from"]) / f["w"]:.1f}%">'
               f'<svg viewBox="0 0 {f["w"]:.1f} {f["h"]:.1f}"><g class="dio__farmer-body">{f["svg"]}</g></svg></span>')
    # the man on the left stands at the near end of his stretch (where he stays without motion) and walks off to the
    # left from there (his drawing faces left); his loop takes as long as his stretch asks at an easy pace, so the two
    # never step together, and the page meets him on his way back, coming towards the farm
    m = o['man']
    walk, dur = m['from'] - m['to'], 2 * abs(m['from'] - m['to']) / (.075 * m['h'])
    out.append(f'            <span class="shop__farmer shop__farmer--man" style="left:{pc(m["to"], W)};top:{pc(m["y"], H)};width:{pc(m["w"], W)};'
               f'--walk:{100 * walk / m["w"]:.1f}%;--dur:{dur:.1f}s;--delay:{-.9 * dur:.1f}s">'
               f'<svg viewBox="0 0 {m["w"]:.1f} {m["h"]:.1f}"><g class="dio__farmer-body">{m["svg"]}</g></svg></span>')
    out += shop_flocks(o)
    out.append('          </div>')
    return '\n'.join(out), (H - o['base']) / H


def shop_flocks(o):
    """Two small flocks over the shop, now and then: one from beside the title down into the picture's sky towards
    the farm, the other up from beside the cards towards the sun; both grow smaller as they fly off into the picture.
    All in the picture's own pixels (W wide, H high; the title lies above it, the cards over its foot), placed and
    moved in shares of the flock's own box, so they keep their path at every width of the picture."""
    W, H = o['W'], o['H']
    (sx, sy, R), (fx, ftop) = o['sun'], o['farm']
    loose = ((3.4, 1.7), [(.17, .5, 1), (.41, .2, .88), (.62, .74, .94), (.86, .42, .8)])
    if W / H > 1.6:
        flocks = [
            # (start, end, wingspan, size at the end, loop, delay, formation[, start height where the title stands
            # above the words, not beside them: there the words run the full width, so the flock sets off just
            # beneath them]): from right of the title down to the farm
            ((W * .405, -H * .14), (fx + W * .01, ftop - H * .09), W * .022, .3, 30, 2.5, loose, H * .05),
            # from beside the cards up towards the sun; a little larger at first, as they start close by
            ((W * .972, H * .925), (sx + R * .4, sy - R * .42), W * .025, .24, 34, 17, loose),
        ]
    else:
        # on a phone the words run the full width: the first flock comes down the margin beside them, one behind the
        # other, and turns towards the farm only once it is over the picture
        flocks = [
            ((W * .972, -H * .47), (fx + W * .01, ftop - H * .21), W * .06, .3, 30, 2.5, ((1.4, 3), [(.45, .86, 1), (.57, .5, .9), (.43, .14, .85)])),
            ((W * .93, H * .5), (sx + R * .3, sy - R * .15), W * .068, .26, 34, 17, ((1.8, 2), [(.5, .2, 1), (.3, .55, .92), (.7, .78, .86)])),
        ]
    pc = lambda v, of: f'{100 * v / of:.3f}%'
    out = []
    for (x0, y0), (x1, y1), span, s1, dur, delay, ((bw, bh), birds), *stacked in flocks:
        fw, fh = span * bw, span * bh            # the flock's box; each bird is k wingspans wide, half that high
        inner = ''.join(
            f'<span class="shop__bird" style="left:{100 * (bx - k / bw / 2):.2f}%;top:{100 * (by - k / bh / 4):.2f}%;width:{100 * k / bw:.2f}%;'
            f'--fd:{3.3 + j * .37:.2f}s;--fdl:{-j * 1.13:.2f}s"><svg viewBox="0 0 40 20"><path class="shop__glint" d="M1 11Q11 1 20 12.4Q29 1 39 11"/><path d="M1 11Q11 1 20 12.4Q29 1 39 11"/></svg></span>'
            for j, (bx, by, k) in enumerate(birds))
        alt = ''.join(f';--ts:{pc(ys - fh / 2, H)};--ys:{100 * (y1 - ys) / fh:.1f}%' for ys in stacked)
        out.append(f'            <span class="shop__flock" style="left:{pc(x0 - fw / 2, W)};--t0:{pc(y0 - fh / 2, H)};width:{pc(fw, W)};height:{pc(fh, H)};'
                   f'--x:{100 * (x1 - x0) / fw:.1f}%;--y0:{100 * (y1 - y0) / fh:.1f}%{alt};--s:{s1};--dur:{dur}s;--delay:{delay}s"><span>{inner}</span></span>')
    return out


def shop():
    # The shop stands in the plantation: the evening sky runs on over its title, the picture goes from edge to edge –
    # our table on the coffee field, clouds drifting, the farmer and a second worker walking their rows, now and then
    # a few birds – and on the table both kinds side by side, the Original on the left beside a little heap of cascara,
    # Cozy Spice on the right beside cinnamon and star anise, each in the size chosen in its card. The soil runs on
    # beneath the picture, behind the two cards, and fades into the paper.
    cards, stand = [], []
    for n, pr in enumerate(PRODUCTS):
        data = json.dumps({'id': pr['id'], 'name': pr['name'],
                           'sizes': [{'ml': ml, 'price': price} for ml, price in pr['sizes']]}, ensure_ascii=False)
        sizes = ''.join(
            f'<button type="button" class="product__size" data-size="{ml}" aria-pressed="{str(ml == FIRST).lower()}">'
            f'<span class="product__ml">{ml} ml</span><span class="product__each">CHF {chf(price)}</span></button>'
            for ml, price in pr['sizes'])
        for ml, _ in pr['sizes']:
            w, h = STAND[ml]
            shown = ml == FIRST
            stand.append(f'          <span class="stand-bottle stand-bottle--{ml} stand-bottle--{"lr"[n]}{" is-shown" if shown else ""}" data-kind="{pr["id"]}" data-ml="{ml}">'
                         f'<img src="assets/shop/stand/{pr["id"]}-{ml}.webp" width="{w}" height="{h}" alt="{pr["name"]}, {BOTTLE_NAME[ml]} mit {ml} ml"'
                         f'{"" if shown else " loading=" + chr(34) + "lazy" + chr(34)} decoding="async"></span>')
        price0 = dict(pr['sizes'])[FIRST]
        cards.append(
            f'        <article class="product product--{pr["id"]}" data-reveal style="--d:{n}" data-product=\'{data}\'>\n'
            '            <div class="product__top">\n'
            f'              <h3 class="product__name">{pr["name"]}</h3>\n'
            f'              <p class="product__price" data-price>CHF {chf(price0)}</p>\n'
            '            </div>\n'
            f'            <p class="product__tag">{pr["tag"]}</p>\n'
            f'            <p class="product__text">{pr["text"]}</p>\n'
            f'            <div class="product__sizes" role="group" aria-label="Grösse">{sizes}</div>\n'
            +
            '        </article>')
    wide, foot = shop_overlay(1360, 'shop__over--wide')
    narrow, _ = shop_overlay(390, 'shop__over--narrow')
    facts = '\n'.join(
        f'            <div><dt>{k}</dt><dd>{v if v else chr(60) + "span class=" + chr(34) + "muted" + chr(34) + ">folgt</span>"}</dd></div>'
        for k, v in PRODUCT_FACTS)
    return (
        '    <!-- The two kinds, two sizes, with their prices -->\n'
        '    <section class="shop" data-tone="paper" id="shop" aria-labelledby="shop-title">\n'
        '      <div class="shop__inner shop__top">\n'
        '        <header class="shop__head">\n'
        '          <p class="eyebrow" data-reveal>Sorten</p>\n'
        '          <h2 class="display" id="shop-title" data-reveal style="--d:1">Hol dir deine<br><em>Flasche.</em></h2>\n'
        '          <p class="shop__intro" data-reveal style="--d:2">Das Original und Cozy Spice, je als Taschenflasche mit 200 ml '
        'und als grosse Flasche mit 500 ml. ' + 'Du findest sie an unseren Ständen.</p>\n'
        '        </header>\n'
        '      </div>\n'
        f'      <div class="shop__stage" data-shop-stage data-pause-away style="--foot:{100 * foot:.2f}%">\n'
        '        <picture><source media="(max-width: 700px)" srcset="assets/shop/feld-390.webp" width="390" height="394">'
        '<img class="shop__field" src="assets/shop/feld-1360.webp" width="1360" height="650" alt="Ein Holztisch auf der Kaffeeplantage in der Abendsonne" loading="lazy" decoding="async"></picture>\n'
        + wide + '\n' + narrow + '\n' + '\n'.join(stand) + '\n      </div>\n'
        '      <div class="shop__ground">\n'
        '        <div class="shop__grid">\n' + '\n'.join(cards) + '\n        </div>\n'
        '      </div>\n'
        '      <div class="shop__inner">\n'
        '        <details class="shop__facts">\n'
        '          <summary>Zutaten und Hinweise</summary>\n'
        '          <dl class="facts">\n' + facts + '\n          </dl>\n'
        '        </details>\n'
        '        <p class="shop__note">Alle Preise in Schweizer Franken. Die Partizipationsscheine sind ausverkauft: Danke an alle, die uns unterstützt haben!</p>\n'
        '      </div>\n'
        '    </section>')


# ---------------------------------------------------------------------------
# The team (Management Summary, autumn 2026). The portraits come from it, cut out as in the document.
TEAM = [
 ('joel', 'Joël Schaller', 'CEO', (110, 131), 'Führt das Team, setzt die Prioritäten und behält alle Bereiche im Blick.'),
 ('luis', 'Luis Brülhart', 'CMO / stv. CEO', (95, 123), 'Kümmert sich um Marketing, Social Media und unseren Auftritt. Vertritt den CEO.'),
 ('lucile', 'Lucile Bapst', 'CAO', (124, 123), 'Organisiert Termine, Protokolle und Verträge, damit im Hintergrund alles läuft.'),
 ('jaelle', 'Jaëlle Brügger', 'CFO', (124, 118), 'Plant das Budget und führt die Buchhaltung.'),
 ('justin', 'Justin Meissner', 'CTO', (106, 118), 'Baut die Website und alles Digitale rund um Cascarup.'),
 ('niklas', 'Niklas Broch', 'CPO', (110, 117), 'Verantwortet unseren Sirup: vom Rezept über die Herstellung bis in die Flasche.'),
]
V['TEAM_P'] = ('Wir sind sechs Schülerinnen und Schüler des Collège Saint-Michel in Freiburg und haben Cascarup im '
               'Rahmen unserer Maturaarbeit gegründet. Jede und jeder von uns führt einen eigenen Bereich.')


# the programme in one paragraph (the first sentence of PROJECT_P1 would repeat TEAM_P)
V['TEAM_P2'] = ('Im Company Programme von Young Enterprise Switzerland gründen und führen Schülerinnen und Schüler '
                'zwischen 16 und 20 Jahren während eines Schuljahres ein eigenes Miniunternehmen. ' + V['PROJECT_P2'])


def team():
    # a band: the six of us side by side, once (3 × 2 on tablets, 2 × 3 on phones). Each card: the portrait on a
    # disc, the name, the role and what each of us does.
    def member(n, person, copy=False):
        key, name, role, (w, h), what = person
        return (f'          <li class="member" style="--i:{n + (6 if copy else 0)}"{" aria-hidden=" + chr(34) + "true" + chr(34) if copy else ""}>\n'
                f'            <span class="member__disc"><img class="member__pic" src="assets/team/{key}.webp" alt="{"" if copy else name}" width="{w}" height="{h}" loading="lazy" decoding="async"></span>\n'
                f'            <h3 class="member__name">{name}</h3>\n'
                f'            <p class="member__role">{role}</p>\n'
                f'            <p class="member__what">{what}</p>\n'
                '          </li>')
    people = ('        <div class="team__band" data-reveal>\n          <ul class="team__people">\n'
              + '\n'.join(member(n, t) for n, t in enumerate(TEAM)) + '\n          </ul>\n        </div>')
    return (
        '    <!-- The team: six students, one company -->\n'
        '    <section class="team" data-tone="paper" id="team" aria-labelledby="team-title">\n'
        '      <div class="team__inner">\n'
        '        <div class="team__head">\n'
        '          <div class="team__copy">\n'
        '            <p class="eyebrow" data-reveal>Das Team</p>\n'
        '            <h2 class="display" id="team-title" data-reveal style="--d:1">Ein Schuljahr.<br>Ein echtes <em>Unternehmen.</em></h2>\n'
        f'            <p data-reveal style="--d:2">{V["TEAM_P"]}</p>\n'
        f'            <p data-reveal style="--d:3">{V["TEAM_P2"]}</p>\n'
        '          </div>\n'
        f'          <dl class="team__facts" data-reveal style="--d:2">\n            {V["PROJECT_FACTS"]}\n          </dl>\n'
        '        </div>\n'
        '        <span class="ranke" aria-hidden="true"></span>\n'
        + people + '\n'
        f'        <div class="team__social">{V["SOCIALS"]}</div>\n'
        f'        {ig_feed()}\n'
        '      </div>\n'
        '    </section>')


V['IG_FEED'] = ig_feed()

# the branch at the opening: where its cherry sits in the baked picture (_build/plant/bake.mjs writes plant.json)
import pathlib
_pl = json.loads((pathlib.Path(__file__).parent / 'plant' / 'plant.json').read_text())
V.update(PLANT_W=_pl['size'][0], PLANT_H=_pl['size'][1], PLANT_CX=_pl['cx'], PLANT_CY=_pl['cy'], PLANT_RX=_pl['rx'], PLANT_TURN=_pl['turn'],
         PLANT_BOX=','.join(str(v) for v in _pl['box']))
V.update({k: str(v) for k, v in V.items() if k.startswith('PLANT_')})
V['STANDS'] = stands()
V['SHOP'] = shop()
# ---------------------------------------------------------------------------
# Cascara in four facts, poured: a glass pot of our syrup with cinnamon and star anise tips as it comes up the page;
# its syrup runs over the spout and falls in one straight stream past the four words, down into a bottle of Cozy
# Spice, which fills. Drawn and moved by pour.js, flat, in the syrup's colour.
CASCARA_FACTS = [
    ('Was', 'Haut und Fruchtfleisch der Kaffeekirsche, getrocknet'),
    ('Name', 'von spanisch <em>cáscara</em>, Schale'),
    ('Geschmack', 'süsslich, fruchtig, Honig, Dörrpflaume, Schwarztee'),
    ('Koffein', 'natürlich enthalten; wie viel, hängt von Rohstoff und Zubereitung ab'),
]



V['TEAM'] = team()

# ---------------------------------------------------------------------------
# The frame of every page: the bar, the menu sheet, the footer. `base` is '' on the home page and 'index.html' on
# the others, so the chapter links lead back to the home page from there.
_wv = json.loads((pathlib.Path(__file__).parent / 'label' / 'waves.json').read_text())
LOGO_VB = json.loads((pathlib.Path(__file__).parent / 'logo3.json').read_text())['vb']


def drip(ys, lo, hi, step=6):
    """One of our label's waves as a path in a 1007 × (hi − lo) box, filled above the wave: the colour that drips."""
    pts = [(x, ys[x] - lo) for x in range(0, len(ys), step)] + [(len(ys) - 1, ys[-1] - lo)]
    return (f'M0 0H1007V{pts[-1][1]:.1f}' + ''.join(f'L{x} {y:.1f}' for x, y in reversed(pts)) + 'Z'), hi - lo


DRIP_TOP = drip(_wv['original']['top'], 250, 420)      # espresso into the rust, as on the label's head
DRIP_LOW = drip(_wv['original']['bottom'], 820, 1060)  # the rust into the cream, as above «Cascara Sirup»
# the bar menu's edges, as on our label: the paper runs down into the night at its head, the night down into the paper
# at its foot – a short drip, no long fall of colour
# ---------------------------------------------------------------------------
# The bottle return (Rückgabe): bring the empty bottle back, get the deposit back. Drawn like the stands: three steps,
# each a line drawing that draws itself, then the map of Freiburg and the towns around it. As long as RETURN_POINTS is
# empty, the map shows where they will be ("Bald"); each place added here gets its own pin and card:
#   dict(name='…', place='Strasse 1', town='Freiburg', at=(lat, lon), hours='Mo–Fr 9–18 Uhr')
RETURN_POINTS = []
# the map: its centre and how many metres it is wide (python3 _build/maps_region.py draws it)
RETURN_MAP = dict(center=(46.7970, 7.1480), metres=12000,
                  towns=[('Freiburg', 46.8065, 7.1600), ('Marly', 46.7770, 7.1590), ('Villars-sur-Glâne', 46.7905, 7.1225),
                         ('Givisiez', 46.8125, 7.1270), ('Granges-Paccot', 46.8235, 7.1430)])
# where the pins will roughly sit while the places are still to come (shares of the map)
RETURN_GHOSTS = [(46.7965, 7.1565), (46.7945, 7.1290), (46.7810, 7.1680), (46.8150, 7.1450)]
RETURN_ICONS = [
 # rinse: the bottle under a tap, a drop falling
 '<path d="M27 24h10v6l4 6v20a3 3 0 0 1-3 3H26a3 3 0 0 1-3-3V36l4-6z"/><path d="M27 20h10v4H27z"/>'
 '<path d="M23 44h18"/><path d="M44 8h10v6"/><path d="M38 8h6"/><path d="M54 18c0 2-1.5 3.5-3 3.5s-3-1.5-3-3.5 3-6 3-6 3 4 3 6z"/>',
 # drop it off: a place on the map, the bottle in it
 '<path d="M32 58S13 40 13 26a19 19 0 0 1 38 0c0 14-19 32-19 32z"/><path d="M29.5 16h5v4.5l2.5 3.5v9.5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V24l2.5-3.5z"/><path d="M24 29h16"/>',
 # used again: the bottle, clean and ready, with a little shine and the arrow round it once more
 '<path d="M27 22h10v6l4 6v22a3 3 0 0 1-3 3H26a3 3 0 0 1-3-3V34l4-6z"/><path d="M27 18h10v4H27z"/>'
 '<path d="M23 42h18"/><path d="M48 12v8m-4-4h8"/><path d="M52 28v4m-2-2h4"/><path d="M12 30a22 22 0 0 0 6 22"/><path d="M18 52l-6-1m6 1 1-6"/>',
]
RETURN_STEPS = [
 ('1', 'Ausspülen', 'Zu Hause', 'Leer trinken, kurz mit Wasser ausspülen und den Deckel wieder drauf.'),
 ('2', 'Vorbeibringen', 'In Freiburg und Umgebung', 'Bring die Flasche zu einer unserer Rückgabestellen.'),
 ('3', 'Wiederverwenden', 'Bei uns', 'Wir verwenden die Flasche wieder. So braucht es keine neue.'),
]


def return_xy(lat, lon):
    """A place on the return map, in shares of its width and height (as maps_region.py projects it)."""
    import math
    (lat0, lon0), m = RETURN_MAP['center'], RETURN_MAP['metres']
    h = m * 2 / 3
    x = .5 + (lon - lon0) * 111320 * math.cos(math.radians(lat0)) / m
    y = .5 - (lat - lat0) * 111320 / h
    return 100 * x, 100 * y


def rueckgabe():
    steps = []
    for n, ((num, title, when, text), icon) in enumerate(zip(RETURN_STEPS, RETURN_ICONS)):
        steps.append(
            f'      <li class="stand rueck__step" data-reveal style="--d:{n}">\n'
            f'        <svg class="stand__icon" viewBox="0 0 64 64" aria-hidden="true">{icon.replace("<path ", "<path pathLength=" + chr(34) + "1" + chr(34) + " ").replace("<circle ", "<circle pathLength=" + chr(34) + "1" + chr(34) + " ")}</svg>\n'
            f'        <p class="stand__date"><span class="stand__day">{num}.</span> {title}</p>\n'
            f'        <p class="stand__when">{when}</p>\n'
            f'        <p class="stand__place">{text}</p>\n'
            f'      </li>')
    towns = ''.join(
        f'<span class="rueck__town" style="left:{x:.2f}%;top:{y:.2f}%">{name}</span>'
        for name, lat, lon in [(t[0], t[1], t[2]) for t in RETURN_MAP['towns']] for x, y in [return_xy(lat, lon)])
    if RETURN_POINTS:
        pins = ''.join(
            f'<a class="rueck__pin" href="{route(*p["at"])}" target="_blank" rel="noopener" style="left:{x:.2f}%;top:{y:.2f}%;--d:{i}" '
            f'aria-label="{p["name"]}, {p["town"]}: Karte öffnen"><i></i></a>'
            for i, p in enumerate(RETURN_POINTS) for x, y in [return_xy(*p['at'])])
        soon = ''
        where = (f'Hier nehmen wir leere Flaschen zurück: an {len(RETURN_POINTS)} Orten in Freiburg und Umgebung.')
    else:
        pins = ''.join(f'<span class="rueck__pin rueck__pin--soon" style="left:{x:.2f}%;top:{y:.2f}%;--d:{i}"><i></i></span>'
                       for i, at in enumerate(RETURN_GHOSTS) for x, y in [return_xy(*at)])
        soon = ('          <div class="rueck__soon"><p class="rueck__soon-tag">Coming soon</p>'
                '<p class="rueck__soon-text">Unsere Rückgabestellen in Freiburg und Umgebung findest du bald hier.</p></div>\n')
        where = 'Die Rückgabestellen in Freiburg und Umgebung geben wir bald bekannt.'
    cards = ''.join(
        f'\n      <li class="stand rueck__place" data-reveal style="--d:{i}">\n'
        f'        <h3 class="stand__title">{p["name"]}</h3>\n'
        f'        <p class="stand__place">{p["place"]}<br>{p["town"]}</p>\n'
        + (f'        <p class="stand__when">{p["hours"]}</p>\n' if p.get('hours') else '') +
        f'        <p class="stand__links"><a href="{route(*p["at"])}" target="_blank" rel="noopener">Route</a></p>\n'
        f'      </li>' for i, p in enumerate(RETURN_POINTS))
    return (
        '    <!-- The bottle return: three steps, then the map of the places in Freiburg and around it -->\n'
        '    <section class="stands rueck" data-tone="paper" id="rueckgabe" aria-labelledby="rueckgabe-title">\n'
        '      <div class="stands__inner">\n'
        '        <header class="stands__head">\n'
        '          <p class="eyebrow" data-reveal>Rückgabe</p>\n'
        '          <h2 class="display" id="rueckgabe-title" data-reveal style="--d:1">Bring die Flasche<br><em>zurück.</em></h2>\n'
        f'          <p class="stands__intro" data-reveal style="--d:2">Leer getrunken? Bring die Flasche zurück. So können wir die Flaschen wiederverwenden, und es entsteht weniger Verpackungsabfall. {where}</p>\n'
        '        </header>\n'
        '        <ol class="stands__list rueck__steps">\n' + '\n'.join(steps) + '\n        </ol>\n'
        '        <figure class="rueck__map" data-reveal>\n'
        f'          <span class="stand__badge rueck__badge">{"Rückgabestellen" if RETURN_POINTS else "Bald"}</span>\n'
        '          <div class="rueck__sheet">\n'
        '            <img src="assets/maps/rueckgabe-region.svg" alt="Karte: Freiburg und Umgebung" width="900" height="600" loading="lazy" decoding="async">\n'
        # the ring round Freiburg and the towns about it, in the middle of the picture: wide on wide screens, rounder
        # on phones (which show the middle half of the map, top to bottom), there a little higher: the note covers its foot
        '            <svg class="rueck__loop" viewBox="0 0 900 600" aria-hidden="true">'
        '<ellipse class="rueck__loop--wide" pathLength="1" cx="450" cy="300" rx="300" ry="165"/>'
        '<ellipse class="rueck__loop--tall" pathLength="1" cx="450" cy="248" rx="182" ry="182"/></svg>\n'
        f'            <div class="rueck__pins" aria-hidden="{"false" if RETURN_POINTS else "true"}">{towns}{pins}</div>\n'
        '          </div>\n'
        + soon +
        '        </figure>\n'
        + (f'        <ol class="stands__list rueck__places">{cards}\n        </ol>\n' if RETURN_POINTS else '') +
        '        <p class="stands__credit">Karte: © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>-Mitwirkende</p>\n'
        '      </div>\n'
        '    </section>')


V['RUECKGABE'] = rueckgabe()

V['DRINKS'] = V['DRINKS'].replace('<!--drips-->',
    f'<svg class="drinks__drip drinks__drip--top" viewBox="0 0 1007 {DRIP_TOP[1]}" preserveAspectRatio="none" aria-hidden="true"><path d="{DRIP_TOP[0]}"/></svg>\n'
    f'      <svg class="drinks__drip drinks__drip--low" viewBox="0 0 1007 {DRIP_LOW[1]}" preserveAspectRatio="none" aria-hidden="true"><path d="{DRIP_LOW[0]}"/></svg>')

CHAPTERS = [
 ('shop', 'Sorten', 'Zwei Sorten, zwei Grössen'),
 ('cascara', 'Cascara', 'Was die Schale kann'),
 ('ideen', 'Ideen', 'Heiss, kalt oder im Punsch'),
 ('staende', 'Stände', 'Wo du uns findest'),
 ('rueckgabe', 'Rückgabe', 'Flasche zurückbringen'),
 ('team', 'Team', 'Wer hinter Cascarup steht'),
]


def nav(base=''):
    links = ''.join(f'<li><a href="{base}#{k}">{t}</a></li>' for k, t, _ in CHAPTERS[1:])
    here = ' aria-current="page"' if base else ''
    return f'''  <header class="nav" data-nav>
    <nav class="nav__inner" aria-label="Hauptnavigation">
      <ul class="nav__links">
        {links}
      </ul>
      <a class="nav__mark" href="{base}#top" aria-label="Cascarup – zum Seitenanfang">
        <svg class="mark" viewBox="{LOGO_VB}" aria-hidden="true">
          <mask id="nav-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><use href="#lg-fill" fill="#fff"/></mask>
          <use class="mark__ink" href="#lg-line" mask="url(#nav-mask)"/>
        </svg>
      </a>
      <!--LANGS-->
      <div class="nav__end">
        <!--LANGS-END-->
        <a class="nav__cta" href="{base}#shop">Sorten</a>
        <button class="nav__menu" type="button" data-menu-open aria-haspopup="dialog" aria-controls="menu"><span>Menü</span><i aria-hidden="true"></i></button>
      </div>
    </nav>
  </header>'''


def menu(base=''):
    """The menu on phones, dressed like our label: the espresso head, the rust dripping from it over the chapters, the
    cream foot beneath its own drip, and on it our three bottles, which stand up one after the other as it opens."""
    items = [('top', 'Home', 'Zum Anfang'), CHAPTERS[0]] + CHAPTERS[1:]
    lis = ''.join(
        f'<li><a href="{base + "#" + k}" data-menu-link'
        f'{" class=" + chr(34) + "menu__return" + chr(34) if k == "rueckgabe" else ""}><span>{t}</span><small>{sub}</small></a></li>'
        for k, t, sub in items)
    return f'''  <dialog class="menu" id="menu" data-menu aria-label="Menü">
    <div class="menu__inner" tabindex="-1" autofocus>
      <div class="menu__head">
        <a class="menu__home" href="{base}#top" data-menu-link><svg class="menu__logo" viewBox="{LOGO_VB}" aria-hidden="true"><use href="#lg-fill"/></svg><span>Cascarup</span></a>
        <button class="menu__close" type="button" data-menu-close aria-label="Menü schliessen"><i aria-hidden="true"></i></button>
      </div>
      <svg class="menu__drip" viewBox="0 0 1007 {DRIP_TOP[1]}" preserveAspectRatio="none" aria-hidden="true"><path d="{DRIP_TOP[0]}"/></svg>
      <ol class="menu__list">{lis}</ol>
      <svg class="menu__drip menu__drip--low" viewBox="0 0 1007 {DRIP_LOW[1]}" preserveAspectRatio="none" aria-hidden="true"><path d="{DRIP_LOW[0]}"/></svg>
      <div class="menu__foot">
        <div class="menu__shelf" aria-hidden="true">
          <span class="menu__floor"></span>
          <img class="menu__b menu__b--1" src="assets/bottle/original-500.webp" alt="" width="140" height="582" decoding="async">
          <img class="menu__b menu__b--2" src="assets/bottle/cozy-spice-500.webp" alt="" width="140" height="582" decoding="async">
          <img class="menu__b menu__b--3" src="assets/bottle/original-200.webp" alt="" width="204" height="451" decoding="async">
          <img class="menu__b menu__b--4" src="assets/bottle/cozy-spice-200.webp" alt="" width="204" height="451" decoding="async">
        </div>
        <div class="menu__reach">
          <!--LANGS-MENU-->
          {V['SOCIALS']}
          <a class="menu__mail" href="mailto:info@cascarup.ch">info@cascarup.ch</a>
        </div>
      </div>
    </div>
  </dialog>'''


def menu_button():
    # on phones, once the opening is behind you: the way back to the chapters, a small bottle leaning out of it
    return ('  <button class="menu-btn" type="button" data-menu-open aria-haspopup="dialog" aria-controls="menu" hidden>'
            '<img class="menu-btn__bottle" src="assets/bottle/original-500.webp" alt="" width="140" height="582" decoding="async">'
            '<span>Menü</span><i aria-hidden="true"></i></button>')


def footer(base=''):
    links = ''.join(f'<li><a href="{base}#{k}">{t}</a></li>' for k, t, _ in CHAPTERS)
    return f'''  <footer class="footer" data-tone="terra" data-fade="top">
    <div class="footer__top">
      <a class="footer__brand" href="{base}#top" aria-label="Zum Seitenanfang">
        <svg viewBox="{LOGO_VB}" aria-hidden="true"><use href="#lg-fill"/></svg>
      </a>
      <div class="footer__about">
        <p class="footer__claim">Die Kaffeekirsche<br><em>kann mehr.</em></p>
        <div class="footer__social">{V['SOCIALS']}<span>@{HANDLE}</span></div>
      </div>
      <nav class="footer__nav" aria-label="Seite">
        <p class="eyebrow">Seite</p>
        <ul>
          {links}
        </ul>
      </nav>
      <nav class="footer__nav" aria-label="Rechtliches">
        <p class="eyebrow">Rechtliches</p>
        <ul>
          <li><a href="impressum.html">Impressum</a></li>
          <li><a href="datenschutz.html">Datenschutz</a></li>
          <li><a href="impressum.html#bildnachweis">Bildnachweis</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__base">
      <span>© 2026 {COMPANY}</span>
      <span>Ein Schülerunternehmen im <span class="nowrap">YES Company Programme</span> · <span class="nowrap">Collège Saint-Michel</span>, Freiburg</span>
    </div>
  </footer>'''


V['END_TEXT'] = 'Von Hand abgefüllt in Freiburg, in zwei Sorten.'
V['LOADER_WORD'] = ''.join(f'<span style="--i:{i}">{c}</span>' for i, c in enumerate('Cascarup'))
V['NAV'] = nav()
V['MENU'] = menu()
V['MENU_BTN'] = menu_button()
V['FOOTER'] = footer()
