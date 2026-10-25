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
             'Und sie lässt sich trinken.',

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

 'PLAN_LEAD': 'Unser Sirup bringt den Geschmack von Cascara ins Glas: mit Wasser verdünnt, im Kaffee oder in '
              'Drinks. Zum Start gibt es zwei Sorten, das Original und Cozy Spice mit Zimt und Sternanis. Weitere Sorten sind geplant.',
 'STEPS': steps([
     ('Reifen und ernten', 'Nach der Blüte brauchen Arabica-Kirschen rund sieben bis neun Monate, bis sie reif und rot sind. Dann werden sie geerntet.', 'Auf der Plantage'),
     ('Trennen und trocknen', 'Die Bohnen werden aus der Frucht gelöst. Haut und Fruchtfleisch werden getrocknet: Das ist Cascara.', 'Bei der Aufbereitung'),
     ('Aufgiessen und einkochen', 'Wir giessen die Cascara mit heissem Wasser auf und kochen den Aufguss zu Sirup ein. Für Cozy Spice ziehen Zimt und Sternanis mit.', 'In Fribourg'),
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
    <section class="drinks" data-tone="night" data-fade="top bottom" id="ideen" aria-labelledby="ideen-title">
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
 ('X', 'https://x.com/cascarup_ch',   # on X the name is cascarup_ch
  '<path d="M4.6 4.5h4l10.8 15h-4z"/><path d="M19 4.5l-5.9 6.5M10.9 13.4 5 19.5"/>'),
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
# The shop: order online, pay online (TWINT or card, through our payment service, later Stripe), delivered by post.
# The order goes to CHECKOUT_URL, which answers with the address of the payment page (see _build/README.md). While
# it is empty, the shop says that payment is being set up and nothing is sent; the preview copy simulates it.
import json
CHECKOUT_URL = ''
V['CHECKOUT_URL'] = CHECKOUT_URL
# The two kinds we start with (Management Summary and pitch: «Original» and «Cozy Spice», inspired by the
# Gifferstee of our region). Each picture is a photograph of our real bottle in that size with our label on it
# (_build/bottle/mockup.py): 200 ml is the flat flask, 500 ml the tall round bottle.
PRODUCTS = [
 dict(id='original', name='Original', tag='Die pure Cascara',
      text='Die pure Cascara aus der Schale der Kaffeekirsche. Mit Wasser verdünnt, im Kaffee oder in Drinks.',
      notes=['Fruchtig', 'Honig', 'Melisse', 'Rosinen'],
      sizes=[(200, 6.95), (500, 12.95)]),
 dict(id='cozy-spice', name='Cozy Spice', tag='Zimt · Sternanis',
      text='Unsere Cascara, mit Zimt und Sternanis aufgekocht. Inspiriert vom Gifferstee aus unserer Region.',
      notes=['Zimt', 'Sternanis', 'Warm'],
      sizes=[(200, 7.95), (500, 13.95)]),
]
SHOT = (1400, 1750)   # the pictures' size in pixels (4:5, upright)
BOTTLE_NAME = {200: 'Taschenflasche', 500: 'Flasche'}
# What a buyer must be able to read before ordering food online (LIV Art. 44); «folgt» until we have it.
PRODUCT_FACTS = [
 ('Zutaten', None), ('Allergene', None), ('Füllmenge', '200 ml oder 500 ml'),
 ('Haltbarkeit', None), ('Hinweis', 'Enthält Koffein aus der Kaffeekirsche.'),
 ('Hergestellt von', 'Cascarup, c/o Collège Saint-Michel, Fribourg, Schweiz'),
]
chf = lambda x: f'{x:.2f}'

# Shipping: Swiss Post, PostPac Economy, at its list prices from 1 January 2026 (post.ch): up to 2 kg CHF 9.–, up to
# 10 kg 12.–, up to 30 kg 21.–. Weights are our estimates for a filled bottle, glass included, and for the box.
SHIPPING = dict(name='Post, PostPac Economy', tiers=[[2, 9.0], [10, 12.0], [30, 21.0]],
                weights={'200': .55, '500': 1.05}, box=.3)
SHIP_FROM = SHIPPING['tiers'][0][1]

# small line icons for what comes with every order, in the drawn style of the drink icons
PERKS = [
 ('Versand', f'Per Post in die ganze Schweiz, ab CHF {SHIP_FROM:.0f}.–.',
  '<path d="M10 22 32 12l22 10v24L32 56 10 46z"/><path d="M10 22l22 10 22-10"/><path d="M32 32v24"/><path d="M21 17l22 10v8"/>'),
 ('Bezahlen', 'Sicher online, mit TWINT oder mit Karte.',
  '<rect x="8" y="22" width="32" height="22" rx="3.5"/><path d="M8 29h32"/><path d="M14 37h9"/><rect x="38" y="12" width="18" height="36" rx="4"/><path d="M44 43h6"/>'),
 ('Von Hand', 'In kleinen Chargen in Fribourg abgefüllt, jede mit eigener Nummer.',
  '<path d="M28.5 6h7v5h-7z"/><path d="M29 11v6c-4 1.6-6 4.6-6 8.6V55a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V25.6c0-4-2-7-6-8.6v-6"/><path d="M23 31h18v15H23z"/>'),
]


def shop():
    cards = []
    for n, pr in enumerate(PRODUCTS):
        data = json.dumps({'id': pr['id'], 'name': pr['name'],
                           'sizes': [{'ml': ml, 'price': price} for ml, price in pr['sizes']]}, ensure_ascii=False)
        sizes = ''.join(
            f'<button type="button" class="product__size" data-size="{ml}" aria-pressed="{str(i == 0).lower()}">'
            f'<span class="product__ml">{ml} ml</span><span class="product__each">CHF {chf(price)}</span></button>'
            for i, (ml, price) in enumerate(pr['sizes']))
        shots = ''.join(
            f'<img class="product__shot{" is-shown" if i == 0 else ""}" data-shot="{ml}" src="assets/shop/{pr["id"]}-{ml}.webp" '
            f'width="{SHOT[0]}" height="{SHOT[1]}" alt="{pr["name"]}, {BOTTLE_NAME[ml]} mit {ml} ml"{"" if i == 0 else " loading=" + chr(34) + "lazy" + chr(34)} decoding="async">'
            for i, (ml, _) in enumerate(pr['sizes']))
        notes = ''.join(f'<li>{t}</li>' for t in pr['notes'])
        cards.append(
            f'        <article class="product product--{pr["id"]}" data-reveal style="--d:{n}" data-product=\'{data}\'>\n'
            f'          <div class="product__stage"><p class="product__tag">{pr["tag"]}</p>{shots}</div>\n'
            '          <div class="product__body">\n'
            '            <div class="product__top">\n'
            f'              <h3 class="product__name">{pr["name"]}</h3>\n'
            f'              <p class="product__price" data-price>CHF {chf(pr["sizes"][0][1])}</p>\n'
            '            </div>\n'
            f'            <p class="product__text">{pr["text"]}</p>\n'
            f'            <ul class="product__notes" aria-label="Geschmack">{notes}</ul>\n'
            f'            <div class="product__sizes" role="group" aria-label="Grösse">{sizes}</div>\n'
            '            <div class="product__buy">\n'
            '              <div class="qty" data-qty>\n'
            '                <button type="button" data-step="-1" aria-label="Eine Flasche weniger">−</button>\n'
            '                <input type="number" inputmode="numeric" min="1" max="24" value="1" aria-label="Anzahl">\n'
            '                <button type="button" data-step="1" aria-label="Eine Flasche mehr">+</button>\n'
            '              </div>\n'
            '              <button type="button" class="button button--solid product__add" data-add>In den Warenkorb</button>\n'
            '            </div>\n'
            '          </div>\n'
            '        </article>')
    facts = '\n'.join(
        f'            <div><dt>{k}</dt><dd>{v if v else chr(60) + "span class=" + chr(34) + "muted" + chr(34) + ">folgt</span>"}</dd></div>'
        for k, v in PRODUCT_FACTS)
    perks = '\n'.join(
        f'          <li data-reveal style="--d:{i}"><svg viewBox="0 0 64 64" aria-hidden="true">{svg.replace("<path ", "<path pathLength=" + chr(34) + "1" + chr(34) + " ")}</svg>'
        f'<div><h3>{t}</h3><p>{p}</p></div></li>'
        for i, (t, p, svg) in enumerate(PERKS))
    return (
        '    <!-- The shop: two kinds, two sizes; paid online, sent by post -->\n'
        '    <section class="shop" data-tone="paper" id="shop" aria-labelledby="shop-title">\n'
        '      <div class="shop__inner">\n'
        '        <header class="shop__head">\n'
        '          <p class="eyebrow" data-reveal>Shop</p>\n'
        '          <h2 class="display" id="shop-title" data-reveal style="--d:1">Hol dir deine<br><em>Flasche.</em></h2>\n'
        '          <p class="shop__intro" data-reveal style="--d:2">Das Original und Cozy Spice, je als Taschenflasche mit 200 ml '
        'und als grosse Flasche mit 500 ml. Bezahl online mit TWINT oder Karte, wir schicken dir deine Flaschen per Post.</p>\n'
        '        </header>\n'
        '        <div class="shop__grid">\n' + '\n'.join(cards) + '\n        </div>\n'
        '        <ul class="shop__perks">\n' + perks + '\n        </ul>\n'
        '        <details class="shop__facts">\n'
        '          <summary>Zutaten und Hinweise</summary>\n'
        '          <dl class="facts">\n' + facts + '\n          </dl>\n'
        '        </details>\n'
        '        <p class="shop__note">Alle Preise in Schweizer Franken, Versand nach Gewicht dazu. Mit der Bestellung akzeptierst du unsere '
        '<a href="bestellbedingungen.html">Bestellbedingungen</a>.</p>\n'
        '      </div>\n'
        '    </section>')


# ---------------------------------------------------------------------------
# The team (Management Summary, autumn 2026). The portraits come from it, cut out as in the document.
TEAM = [
 ('joel', 'Joël Schaller', 'CEO', (110, 131)),
 ('luis', 'Luis Brülhart', 'CMO / stv. CEO', (95, 123)),
 ('lucile', 'Lucile Bapst', 'CAO', (124, 123)),
 ('jaelle', 'Jaëlle Brügger', 'CFO', (124, 118)),
 ('justin', 'Justin Meissner', 'CTO', (106, 118)),
 ('niklas', 'Niklas Broch', 'CPO', (110, 117)),
]
V['TEAM_P'] = ('Wir sind sechs Schülerinnen und Schüler des Collège Saint-Michel in Fribourg und haben Cascarup im '
               'Rahmen unserer Maturaarbeit gegründet. Jede und jeder von uns führt einen eigenen Bereich.')


# the programme in one paragraph (the first sentence of PROJECT_P1 would repeat TEAM_P)
V['TEAM_P2'] = ('Im Company Programme von Young Enterprise Switzerland gründen und führen Schülerinnen und Schüler '
                'zwischen 16 und 20 Jahren während eines Schuljahres ein eigenes Miniunternehmen. ' + V['PROJECT_P2'])


def team():
    # as in our summary: an organisation chart – the CEO on top, the deputy and administration beside, three below
    def member(i, extra=''):
        key, name, role, (w, h) = TEAM[i]
        return (f'          <li class="member{extra}">\n'
                f'            <img class="member__pic" src="assets/team/{key}.webp" alt="{name}" width="{w}" height="{h}" loading="lazy" decoding="async">\n'
                f'            <p class="member__role">{role}</p>\n'
                f'            <h3 class="member__name">{name}</h3>\n'
                '          </li>')
    people = ('        <ul class="org__lead">\n' + member(0, ' member--lead') + '\n        </ul>\n'
              '        <ul class="org__pair">\n' + member(1, ' member--deputy') + '\n' + member(2) + '\n        </ul>\n'
              '        <ul class="org__team">\n' + member(3) + '\n' + member(4) + '\n' + member(5) + '\n        </ul>')
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
        # the chart comes in as one piece, so no line ever shows without the people it joins
        '        <div class="org" data-reveal aria-label="Organigramm">\n' + people + '\n        </div>\n'
        f'        <div class="team__social">{V["SOCIALS"]}</div>\n'
        f'        {ig_feed()}\n'
        '      </div>\n'
        '    </section>')


def field(name, label, extra='', optional=False, wide=False):
    """One input with its label and, beneath it, the place for its message."""
    opt = ' <span class="muted">(freiwillig)</span>' if optional else ''
    req = '' if optional else ' required'
    err = '' if optional else f'<span class="order__error" id="err-{name}" data-error="{name}" hidden></span>'
    desc = '' if optional else f' aria-describedby="err-{name}"'
    return (f'<label class="field{" field--wide" if wide else ""}"><span>{label}{opt}</span>'
            f'<input name="{name}"{extra}{req}{desc}>{err}</label>')


PAY_METHODS = [
 ('twint', 'TWINT', 'Mit der App auf dem Handy'),
 ('karte', 'Karte', 'Visa, Mastercard und weitere'),
]


def pay_methods(name='zahlung'):
    return ''.join(
        f'<label class="pay"><input type="radio" name="{name}" value="{k}" required{" checked" if i == 0 else ""}>'
        f'<span class="pay__mark pay__mark--{k}" aria-hidden="true">{t}</span><span><strong>{t}</strong>'
        f'<span class="muted">{sub}</span></span></label>'
        for i, (k, t, sub) in enumerate(PAY_METHODS))


def cart():
    ship = json.dumps(SHIPPING)
    return (
        '  <!-- the basket and the way to pay: three steps in one quiet sheet from the side (from below on phones) -->\n'
        '  <button class="basket-btn" type="button" data-cart-open hidden aria-label="Warenkorb öffnen">'
        '<span>Warenkorb</span><span class="basket-btn__count" data-cart-count>0</span></button>\n'
        f'  <dialog class="cart" data-cart aria-labelledby="cart-title" data-checkout="{CHECKOUT_URL}" data-shipping=\'{ship}\'>\n'
        '    <div class="cart__inner">\n'
        '      <header class="cart__head">\n'
        '        <button class="cart__back" type="button" data-cart-back hidden aria-label="Zurück">←</button>\n'
        '        <h2 class="cart__title" id="cart-title" data-cart-title tabindex="-1">Dein Warenkorb</h2>\n'
        '        <button class="cart__close" type="button" data-cart-close aria-label="Schliessen">×</button>\n'
        '      </header>\n'
        '      <ol class="cart__steps" data-cart-steps aria-label="Schritte">'
        '<li aria-current="step"><span>1</span>Warenkorb</li><li><span>2</span>Lieferung</li><li><span>3</span>Bezahlen</li></ol>\n'
        '      <div class="cart__body" data-cart-body>\n'
        # step 1: what is in it
        '        <section class="cart__step" data-step="1">\n'
        '          <ul class="cart__items" data-cart-items></ul>\n'
        '          <p class="cart__empty" data-cart-empty>Noch leer. Such dir im Shop eine Flasche aus.</p>\n'
        '          <div class="sums" data-cart-sums>\n'
        '            <p><span>Zwischensumme</span><span data-sum-items>CHF 0.00</span></p>\n'
        '            <p><span>Versand <span class="muted">(Post, PostPac Economy)</span></span><span data-sum-ship>CHF 0.00</span></p>\n'
        '            <p class="sums__total"><span>Total</span><strong data-sum-total>CHF 0.00</strong></p>\n'
        '          </div>\n'
        '          <button class="button button--solid order__submit" type="button" data-to-step="2">Zur Kasse</button>\n'
        '          <p class="order__pay">Bezahlen mit TWINT oder Karte · Versand in die ganze Schweiz</p>\n'
        '        </section>\n'
        '        <form class="order" data-order novalidate>\n'
        # step 2: who it goes to
        '          <section class="cart__step" data-step="2" hidden>\n'
        '            <fieldset class="order__group">\n'
        '              <legend>Kontakt</legend>\n'
        '              <div class="fields">' + field('vorname', 'Vorname', ' autocomplete="given-name"') + field('nachname', 'Nachname', ' autocomplete="family-name"') + '</div>\n'
        '              ' + field('email', 'E-Mail', ' type="email" autocomplete="email" inputmode="email"', wide=True) + '\n'
        '              ' + field('telefon', 'Telefon', ' type="tel" autocomplete="tel" inputmode="tel"', optional=True, wide=True) + '\n'
        '            </fieldset>\n'
        '            <fieldset class="order__group">\n'
        '              <legend>Lieferadresse</legend>\n'
        '              ' + field('strasse', 'Strasse und Nummer', ' autocomplete="address-line1"', wide=True) + '\n'
        '              ' + field('zusatz', 'Adresszusatz', ' autocomplete="address-line2"', optional=True, wide=True) + '\n'
        '              <div class="fields fields--plz">' + field('plz', 'PLZ', ' autocomplete="postal-code" inputmode="numeric" maxlength="4"') + field('ort', 'Ort', ' autocomplete="address-level2"') + '</div>\n'
        '              <p class="order__country">Wir liefern in die Schweiz.</p>\n'
        '              <label class="field field--wide"><span>Bemerkung <span class="muted">(freiwillig)</span></span><textarea name="bemerkung" rows="2"></textarea></label>\n'
        '            </fieldset>\n'
        '            <button class="button button--solid order__submit" type="button" data-to-step="3">Weiter zur Zahlung</button>\n'
        '          </section>\n'
        # step 3: check and pay
        '          <section class="cart__step" data-step="3" hidden>\n'
        '            <div class="review">\n'
        '              <div class="review__block"><p class="review__label">Bestellung</p><ul class="review__items" data-review-items></ul></div>\n'
        '              <div class="review__block"><p class="review__label">Lieferung an <button type="button" class="review__edit" data-to-step="2">Ändern</button></p><p class="review__address" data-review-address></p></div>\n'
        '            </div>\n'
        '            <div class="sums sums--review">\n'
        '              <p><span>Zwischensumme</span><span data-sum-items>CHF 0.00</span></p>\n'
        '              <p><span>Versand</span><span data-sum-ship>CHF 0.00</span></p>\n'
        '              <p class="sums__total"><span>Total</span><strong data-sum-total>CHF 0.00</strong></p>\n'
        '            </div>\n'
        '            <fieldset class="order__group">\n'
        '              <legend>Bezahlen mit</legend>\n'
        '              <div class="pays">' + pay_methods() + '</div>\n'
        '            </fieldset>\n'
        '            <input type="text" name="_honey" class="sr-only" tabindex="-1" autocomplete="off" aria-hidden="true">\n'
        '            <label class="order__consent"><input type="checkbox" name="zustimmung" required aria-describedby="err-zustimmung">\n'
        '              <span>Ich akzeptiere die <a href="bestellbedingungen.html" target="_blank">Bestellbedingungen</a> und habe die '
        '<a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen.</span></label>\n'
        '            <p class="order__error" id="err-zustimmung" data-error="zustimmung" hidden></p>\n'
        '            <button class="button button--solid order__submit" type="submit" data-pay>Jetzt bezahlen</button>\n'
        '            <p class="order__pay">Du kommst auf die sichere Bezahlseite und danach wieder hierher zurück.</p>\n'
        '            <p class="order__status" role="status" aria-live="polite"></p>\n'
        '          </section>\n'
        '        </form>\n'
        '      </div>\n'
        '      <div class="cart__done" data-cart-done hidden tabindex="-1">\n'
        '        <svg class="cart__tick" viewBox="0 0 64 64" aria-hidden="true"><circle pathLength="1" cx="32" cy="32" r="26"/><path pathLength="1" d="M20 33l8 8 16-17"/></svg>\n'
        '        <p class="eyebrow">Danke!</p>\n'
        '        <p class="cart__done-title" data-done-title>Deine Bestellung ist bezahlt.</p>\n'
        '        <p class="cart__done-text">Bestellnummer <strong data-done-number></strong>. Du bekommst eine Bestätigung per E-Mail, '
        'und wir schicken dir deine Flaschen per Post.</p>\n'
        '        <p class="cart__done-note" data-done-note hidden></p>\n'
        '        <button class="button button--solid" type="button" data-cart-close>Fertig</button>\n'
        '      </div>\n'
        '    </div>\n'
        '  </dialog>')


V['IG_FEED'] = ig_feed()

# the branch at the opening: where its cherry sits in the baked picture (_build/plant/bake.mjs writes plant.json)
import pathlib
_pl = json.loads((pathlib.Path(__file__).parent / 'plant' / 'plant.json').read_text())
V.update(PLANT_W=_pl['size'][0], PLANT_H=_pl['size'][1], PLANT_CX=_pl['cx'], PLANT_CY=_pl['cy'], PLANT_RX=_pl['rx'], PLANT_TURN=_pl['turn'],
         PLANT_BOX=','.join(str(v) for v in _pl['box']))
V.update({k: str(v) for k, v in V.items() if k.startswith('PLANT_')})
V['STANDS'] = stands()
V['SHOP'] = shop()
V['CART'] = cart()
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

CHAPTERS = [
 ('shop', 'Shop', 'Zwei Sorten, zwei Grössen'),
 ('cascara', 'Cascara', 'Was die Schale kann'),
 ('ideen', 'Ideen', 'Heiss, kalt oder im Punsch'),
 ('staende', 'Stände', 'Wo du uns findest'),
 ('team', 'Team', 'Wer hinter Cascarup steht'),
]
JOIN_URL = 'partizipation.html'


def nav(base=''):
    links = ''.join(f'<li><a href="{base}#{k}">{t}</a></li>' for k, t, _ in CHAPTERS[1:])
    here = ' aria-current="page"' if base else ''
    return f'''  <header class="nav" data-nav>
    <nav class="nav__inner" aria-label="Hauptnavigation">
      <ul class="nav__links">
        {links}<li><a class="nav__join" href="{JOIN_URL}"{here}>Werde Teil</a></li>
      </ul>
      <a class="nav__mark" href="{base}#top" aria-label="Cascarup – zum Seitenanfang">
        <svg class="mark" viewBox="{LOGO_VB}" aria-hidden="true">
          <mask id="nav-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><use href="#lg-fill" fill="#fff"/></mask>
          <use class="mark__ink" href="#lg-line" mask="url(#nav-mask)"/>
        </svg>
      </a>
      <div class="nav__end">
        <a class="nav__cta" href="{base}#shop">Shop</a>
        <button class="nav__menu" type="button" data-menu-open aria-haspopup="dialog" aria-controls="menu"><span>Menü</span><i aria-hidden="true"></i></button>
      </div>
    </nav>
  </header>'''


def menu(base=''):
    """The menu on phones, dressed like our label: the espresso head, the rust drips over the chapters, the cream
    foot, and a bottle of the Original leaning in at the bottom left."""
    items = [CHAPTERS[0], ('__join', 'Werde Teil', 'ab CHF 15')] + CHAPTERS[1:]
    lis = ''.join(
        f'<li><a href="{JOIN_URL if k == "__join" else base + "#" + k}" data-menu-link'
        f'{" class=" + chr(34) + "menu__join" + chr(34) if k == "__join" else ""}><span>{t}</span><small>{sub}</small></a></li>'
        for k, t, sub in items)
    return f'''  <dialog class="menu" id="menu" data-menu aria-label="Menü">
    <div class="menu__inner" tabindex="-1" autofocus>
      <div class="menu__head">
        <a class="menu__home" href="{base}#top" data-menu-link><svg class="menu__logo" viewBox="{LOGO_VB}" aria-hidden="true"><use href="#lg-fill"/></svg><span>Cascarup</span></a>
        <button class="menu__close" type="button" data-menu-close aria-label="Menü schliessen">×</button>
      </div>
      <svg class="menu__drip" viewBox="0 0 1007 {DRIP_TOP[1]}" preserveAspectRatio="none" aria-hidden="true"><path d="{DRIP_TOP[0]}"/></svg>
      <ol class="menu__list">{lis}</ol>
      <svg class="menu__drip menu__drip--low" viewBox="0 0 1007 {DRIP_LOW[1]}" preserveAspectRatio="none" aria-hidden="true"><path d="{DRIP_LOW[0]}"/></svg>
      <div class="menu__foot">
        <img class="menu__bottle" src="assets/bottle/original-500.webp" alt="" width="140" height="581" decoding="async">
        <div class="menu__reach">
          {V['SOCIALS']}
          <a class="menu__mail" href="mailto:info@cascarup.ch">info@cascarup.ch</a>
        </div>
      </div>
    </div>
  </dialog>'''


def menu_button():
    # on phones, once the opening is behind you: the way back to the chapters, a little bottle leaning out of it
    return ('  <button class="menu-btn" type="button" data-menu-open aria-haspopup="dialog" aria-controls="menu" hidden>'
            '<img class="menu-btn__bottle" src="assets/bottle/original-500.webp" alt="" width="140" height="581" decoding="async">'
            '<span>Menü</span></button>')


def footer(base=''):
    links = ''.join(f'<li><a href="{base}#{k}">{t}</a></li>' for k, t, _ in CHAPTERS)
    return f'''  <footer class="footer" data-tone="terra" data-fade="top">
    <div class="footer__top">
      <a class="footer__brand" href="{base}#top" aria-label="Zum Seitenanfang">
        <svg viewBox="{LOGO_VB}" aria-hidden="true"><use href="#lg-fill"/></svg>
      </a>
      <div class="footer__about">
        <p class="footer__claim">Kaffee ist<br><em>eine Frucht.</em></p>
        <div class="footer__social">{V['SOCIALS']}<span>@{HANDLE}</span></div>
      </div>
      <nav class="footer__nav" aria-label="Seite">
        <p class="eyebrow">Seite</p>
        <ul>
          {links}<li><a href="{JOIN_URL}">Werde Teil</a></li>
        </ul>
      </nav>
      <nav class="footer__nav" aria-label="Rechtliches">
        <p class="eyebrow">Rechtliches</p>
        <ul>
          <li><a href="impressum.html">Impressum</a></li>
          <li><a href="bestellbedingungen.html">Bestellbedingungen</a></li>
          <li><a href="datenschutz.html">Datenschutz</a></li>
          <li><a href="impressum.html#bildnachweis">Bildnachweis</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__base">
      <span>© 2026 {COMPANY}</span>
      <span>Ein Schülerunternehmen im <span class="nowrap">YES Company Programme</span> · <span class="nowrap">Collège Saint-Michel</span>, Fribourg</span>
    </div>
  </footer>'''


# ---------------------------------------------------------------------------
# Participation certificates («Partizipationsscheine»): how we raise our starting capital, as in our pitch (slides
# 21–23): from CHF 15, the money goes into production, the Christmas markets, market costs and team clothing, and
# whoever wants it gets the money back at the end of the year. Paid the same way as the shop (CHECKOUT_URL).
PS_PRICE = 15
PS_MAX = 20          # online, per order (more in person)


def rosette_svg():
    """The security-print rosette of the certificate, as in the pitch: rings of rotated ellipses."""
    c = 600
    ring = lambda count, rx, ry, o: ''.join(
        f'<ellipse cx="{c}" cy="{c}" rx="{rx}" ry="{ry}" transform="rotate({i * 180 / count:.2f} {c} {c})" stroke-opacity="{o}"/>'
        for i in range(count))
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" fill="none" stroke="#B4592A" stroke-width="1.6">'
            + ring(64, 560, 200, .5) + ring(44, 410, 150, .55) + ring(32, 285, 118, .6)
            + f'<circle cx="{c}" cy="{c}" r="575" stroke-width="4" stroke-opacity=".8"/><circle cx="{c}" cy="{c}" r="590" stroke-width="1.6" stroke-opacity=".6"/></svg>')


def certificate(live=False, small=False):
    """Our certificate, as in the pitch: double frame, rosette with our mark, the value, number, place and year.
    Live, it carries the name and number of certificates as they are typed in (ps.js)."""
    holder = ('<p class="cert__holder" data-cert-holder><span class="cert__line">Ausgestellt auf</span>'
              '<span data-cert-name>Dein Name</span></p>') if live else ''
    count = '<p class="cert__count" data-cert-count>1 Schein</p>' if live else ''
    stamp = '<p class="cert__stamp" data-cert-stamp hidden></p>' if live else ''
    micro = ' · '.join(['CASCARUP', 'DIE KAFFEEKIRSCHE KANN MEHR'] * 4)
    return f'''<div class="cert{' cert--small' if small else ''}"{' data-cert' if live else ''}>
          <img class="cert__rosette" src="assets/ps/rosette.svg" alt="" width="1200" height="1200" decoding="async">
          <span class="cert__seal"><svg viewBox="{LOGO_VB}" aria-hidden="true"><use href="#lg-fill"/></svg></span>
          <p class="cert__eyebrow">Partizipationsschein</p>
          <p class="cert__name">Cascarup</p>
          <p class="cert__chf">CHF</p>
          <p class="cert__value">15.–</p>
          {holder}{count}{stamp}
          <p class="cert__no">Nº <span data-cert-no>{'—' if live else '001'}</span></p>
          <p class="cert__place">Fribourg · 2026/27</p>
          <p class="cert__micro" aria-hidden="true">{micro}</p>
        </div>'''


def join():
    """On the home page, after the team: the way in for those who want to be part of it."""
    return f'''    <!-- Be part of it: participation certificates from CHF 15 (their own page) -->
    <section class="join" data-tone="paper" aria-labelledby="join-title">
      <a class="join__card" href="{JOIN_URL}" data-reveal>
        <div class="join__cert" aria-hidden="true">{certificate(small=True)}</div>
        <div class="join__copy">
          <p class="eyebrow">Partizipationsschein</p>
          <h2 class="display" id="join-title">Werde Teil von <em>Cascarup.</em></h2>
          <p>Schon ab 15 Franken bist du von Anfang an dabei. Am Ende des Unternehmungsjahres bekommst du dein Geld zurück, wenn du möchtest.</p>
          <span class="button button--solid join__cta">Mehr erfahren</span>
        </div>
      </a>
    </section>'''


PS_WHY = [
 ('Eine Idee unterstützen', 'Aus einem Nebenprodukt der Kaffee-Ernte wird ein Sirup.',
  '<path d="M32 58V30"/><path d="M32 34c0-10-7-16-18-16 0 10 7 16 18 16z"/><path d="M32 28c0-9 6-15 17-15 0 9-6 15-17 15z"/>'),
 ('Junge Unternehmer fördern', 'Du hilfst sechs Schülerinnen und Schülern bei ihren ersten Schritten.',
  '<path d="M8 54h12V42h12V30h12V18h12"/><path d="M48 10h8v8"/><path d="M40 26 56 10"/>'),
 ('Von Anfang an dabei', 'Du bist dabei, wenn aus einer Kaffeekirsche ein Produkt wird.',
  '<path d="M18 58V8"/><path d="M18 11h30l-7 9 7 9H18"/>'),
]
PS_MONEY = [
 ('Produktion', 'unsere Sirups',
  '<path d="M12 28h40v18a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10z"/><path d="M6 28h6m40 0h6"/><path d="M24 20c-2.5-3 2.5-5 0-9M32 20c-2.5-3 2.5-5 0-9M40 20c-2.5-3 2.5-5 0-9"/>'),
 ('Weihnachtsmärkte', 'Stand und Degustation',
  '<path d="M10 24h44l-5-12H15z"/><path d="M10 24c0 4 3.7 6 7.3 6s7.4-2 7.4-6c0 4 3.6 6 7.3 6s7.3-2 7.3-6c0 4 3.7 6 7.4 6S54 28 54 24"/><path d="M14 30v26m36-26v26"/><path d="M8 56h48"/><path d="M23 44h18v12H23z"/>'),
 ('Marktkosten', 'was bei jedem Markt anfällt',
  '<path d="M16 6h32v52l-5.3-4-5.4 4-5.3-4-5.3 4-5.4-4L16 58z"/><path d="M23 18h18M23 27h18M23 36h11"/>'),
 ('Teamkleidung', 'einheitlich und professionell',
  '<path d="M23 8 9 16l5 12 7-3v31h22V25l7 3 5-12-14-8c-1.5 5-5.2 8-9 8s-7.5-3-9-8z"/>'),
]
PS_CHOICE = [
 ('zurueck', 'Geld zurück', 'Am Ende des Unternehmungsjahres bekommst du dein Geld zurück.',
  '<circle cx="36" cy="35" r="18"/><circle cx="36" cy="35" r="11.5"/><path d="M11 26a26 26 0 0 1 9-12.5"/><path d="M8.5 16l2.5 10 10-2.5"/>'),
 ('behalten', 'Behalten', 'Dein Schein bleibt dir als Andenken, dein Beitrag bleibt bei Cascarup.',
  '<circle cx="32" cy="26" r="14"/><circle cx="32" cy="26" r="8"/><path d="M24 38l-5 19 13-7 13 7-5-19"/>'),
]
PS_STEPS = [
 ('Schein wählen', 'Wie viele Scheine, deine Angaben und was am Ende mit deinem Geld passiert.'),
 ('Bezahlen', 'Online mit TWINT oder Karte, auf der sicheren Bezahlseite.'),
 ('Bestätigung', 'Du bekommst eine Bestätigung per E-Mail, mit der Nummer deines Scheins.'),
 ('Am Ende des Jahres', 'Geld zurück oder Andenken, so wie du es gewählt hast.'),
]
PS_TERMS = [
 f'Ein Partizipationsschein kostet CHF {PS_PRICE}.–. Online kannst du bis zu {PS_MAX} Scheine auf einmal zeichnen.',
 'Herausgeber ist Cascarup, ein Schülerunternehmen im Company Programme von Young Enterprise Switzerland, c/o Collège Saint-Michel, Fribourg.',
 'Der Schein gilt für unser Unternehmungsjahr 2026/27.',
 'Wählst du «Geld zurück», zahlen wir dir am Ende des Unternehmungsjahres deinen Betrag zurück. Wie und wann genau, schreiben wir dir rechtzeitig per E-Mail.',
 'Wählst du «Behalten», bleibt dein Beitrag bei Cascarup, und der Schein bleibt dir als Andenken.',
 'Deine Angaben brauchen wir, um dir deinen Schein zuzuordnen und dich am Ende zu erreichen. Mehr in der <a href="datenschutz.html">Datenschutzerklärung</a>.',
 'Fragen? Schreib uns an <a href="mailto:info@cascarup.ch">info@cascarup.ch</a>.',
]


def icon_svg(svg):
    return '<svg viewBox="0 0 64 64" aria-hidden="true">' + svg.replace('<path ', '<path pathLength="1" ').replace('<circle ', '<circle pathLength="1" ') + '</svg>'


def ps_main():
    why = '\n'.join(f'          <li>{icon_svg(svg)}<div><h3>{t}</h3><p>{p}</p></div></li>' for t, p, svg in PS_WHY)
    money = '\n'.join(f'        <li class="ps-tile" data-reveal style="--d:{i}">{icon_svg(svg)}<h3>{t}</h3><p>{p}</p></li>'
                      for i, (t, p, svg) in enumerate(PS_MONEY))
    choice = '\n'.join(f'        <div class="ps-way" data-reveal style="--d:{i}">{icon_svg(svg)}<h3>{t}</h3><p>{p}</p></div>'
                       for i, (k, t, p, svg) in enumerate(PS_CHOICE))
    steps_ = '\n'.join(f'        <li data-reveal style="--d:{i}"><span class="ps-steps__no">{i + 1}</span><h3>{t}</h3><p>{p}</p></li>'
                       for i, (t, p) in enumerate(PS_STEPS))
    pick = ''.join(
        f'<label class="pick pick--way"><input type="radio" name="ende" value="{k}" required>{icon_svg(svg)}'
        f'<span><strong>{t}</strong><span class="muted">{p}</span></span></label>'
        for k, t, p, svg in PS_CHOICE)
    terms = '\n'.join(f'            <li>{t}</li>' for t in PS_TERMS)
    return f'''  <main id="main" class="ps">
    <!-- the way in: what a certificate is, beside the certificate itself -->
    <section class="ps-hero" data-tone="paper" id="top" aria-labelledby="ps-title">
      <div class="ps-hero__copy">
        <p class="eyebrow" data-reveal>Partizipationsschein · 2026/27</p>
        <h1 class="display ps-hero__title" id="ps-title" data-reveal style="--d:1">Werde Teil von <em>Cascarup.</em></h1>
        <p class="ps-hero__lede" data-reveal style="--d:2">Schon ab 15 Franken bist du von Anfang an dabei. Mit deinem Partizipationsschein gibst du uns das Startkapital für unser erstes Unternehmungsjahr.</p>
        <ul class="ps-why" data-reveal style="--d:3">
{why}
        </ul>
        <div class="hero__actions" data-reveal style="--d:4">
          <a class="button button--solid" href="#zeichnen">Schein sichern</a>
          <a class="hero__more" href="#so-gehts">So funktioniert es</a>
        </div>
      </div>
      <div class="ps-hero__cert" data-reveal style="--d:2">
        {certificate()}
      </div>
    </section>

    <!-- where the money goes (pitch, slide 22) -->
    <section class="ps-money" data-tone="paper" aria-labelledby="ps-money-title">
      <p class="eyebrow" data-reveal>Dein Beitrag</p>
      <h2 class="display" id="ps-money-title" data-reveal style="--d:1">Dahin fliesst<br>dein <em>Geld.</em></h2>
      <ul class="ps-tiles">
{money}
      </ul>
    </section>

    <!-- no needless risk: what happens at the end is chosen now -->
    <section class="ps-choice" data-tone="paper" aria-labelledby="ps-choice-title">
      <div class="ps-choice__head">
        <p class="eyebrow" data-reveal>Kein unnötiges Risiko</p>
        <h2 class="display" id="ps-choice-title" data-reveal style="--d:1">Am Ende des Jahres<br>entscheidest <em>du.</em></h2>
        <p data-reveal style="--d:2">Schon beim Zeichnen wählst du, was am Ende unseres Unternehmungsjahres mit deinem Geld passiert.</p>
      </div>
      <div class="ps-ways">
{choice}
      </div>
    </section>

    <section class="ps-steps" data-tone="paper" id="so-gehts" aria-labelledby="ps-steps-title">
      <p class="eyebrow" data-reveal>So steigst du ein</p>
      <h2 class="display" id="ps-steps-title" data-reveal style="--d:1">Einsteigen ist<br>ganz <em>einfach.</em></h2>
      <ol class="ps-steps__list">
{steps_}
      </ol>
      <p class="ps-steps__cash" data-reveal>Lieber bar? Sprich uns an einem unserer <a href="index.html#staende">Stände</a> an oder frag ein Teammitglied.</p>
    </section>

    <!-- the form, with the certificate beside it, filling in as you type -->
    <section class="ps-form" data-tone="paper" id="zeichnen" aria-labelledby="ps-form-title">
      <div class="ps-form__grid">
        <div class="ps-form__main">
          <p class="eyebrow">Dein Schein</p>
          <h2 class="display" id="ps-form-title">Jetzt <em>zeichnen.</em></h2>
          <form class="order ps-order" data-ps data-checkout="{CHECKOUT_URL}" data-price="{PS_PRICE}" data-max="{PS_MAX}" novalidate>
            <fieldset class="order__group">
              <legend>Anzahl</legend>
              <div class="ps-count">
                <div class="qty" data-qty>
                  <button type="button" data-step="-1" aria-label="Ein Schein weniger">−</button>
                  <input type="number" name="anzahl" inputmode="numeric" min="1" max="{PS_MAX}" value="1" aria-label="Anzahl Scheine">
                  <button type="button" data-step="1" aria-label="Ein Schein mehr">+</button>
                </div>
                <p class="ps-count__sum"><span data-ps-each>1 × CHF {PS_PRICE}.–</span><strong data-ps-total>CHF {PS_PRICE:.2f}</strong></p>
              </div>
            </fieldset>
            <fieldset class="order__group">
              <legend>Deine Angaben</legend>
              <div class="fields">{field('vorname', 'Vorname', ' autocomplete="given-name"')}{field('nachname', 'Nachname', ' autocomplete="family-name"')}</div>
              {field('email', 'E-Mail', ' type="email" autocomplete="email" inputmode="email"', wide=True)}
              {field('strasse', 'Strasse und Nummer', ' autocomplete="address-line1"', wide=True)}
              <div class="fields fields--plz">{field('plz', 'PLZ', ' autocomplete="postal-code" inputmode="numeric" maxlength="4"')}{field('ort', 'Ort', ' autocomplete="address-level2"')}</div>
              {field('telefon', 'Telefon', ' type="tel" autocomplete="tel" inputmode="tel"', optional=True, wide=True)}
            </fieldset>
            <fieldset class="order__group">
              <legend>Am Ende des Jahres</legend>
              <p class="order__error" id="err-ende" data-error="ende" hidden></p>
              <div class="order__picks">{pick}</div>
            </fieldset>
            <fieldset class="order__group">
              <legend>Bezahlen mit</legend>
              <div class="pays">{pay_methods()}</div>
            </fieldset>
            <input type="text" name="_honey" class="sr-only" tabindex="-1" autocomplete="off" aria-hidden="true">
            <label class="order__consent"><input type="checkbox" name="zustimmung" required aria-describedby="err-zustimmung">
              <span>Ich habe die <a href="#bedingungen">Bedingungen</a> gelesen und bin einverstanden. Wie wir mit meinen Angaben umgehen, steht in der <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a>.</span></label>
            <p class="order__error" id="err-zustimmung" data-error="zustimmung" hidden></p>
            <button class="button button--solid order__submit" type="submit" data-pay>Jetzt bezahlen · CHF {PS_PRICE:.2f}</button>
            <p class="order__pay">Du kommst auf die sichere Bezahlseite und danach wieder hierher zurück.</p>
            <p class="order__status" role="status" aria-live="polite"></p>
          </form>
          <div class="ps-done" data-ps-done hidden tabindex="-1">
            <svg class="cart__tick" viewBox="0 0 64 64" aria-hidden="true"><circle pathLength="1" cx="32" cy="32" r="26"/><path pathLength="1" d="M20 33l8 8 16-17"/></svg>
            <p class="eyebrow">Danke!</p>
            <p class="cart__done-title">Du bist jetzt Teil von Cascarup.</p>
            <p class="cart__done-text">Nummer <strong data-done-number></strong>. Du bekommst eine Bestätigung per E-Mail.</p>
            <p class="cart__done-note" data-done-note hidden></p>
            <a class="button button--solid" href="index.html#shop">Zum Shop</a>
          </div>
        </div>
        <div class="ps-form__aside" aria-hidden="true">
          {certificate(live=True)}
        </div>
      </div>
      <details class="ps-terms" id="bedingungen">
        <summary>Die Bedingungen</summary>
        <ul>
{terms}
        </ul>
      </details>
    </section>
  </main>'''


V['NAV'] = nav()
V['MENU'] = menu()
V['MENU_BTN'] = menu_button()
V['FOOTER'] = footer()
V['JOIN'] = join()
