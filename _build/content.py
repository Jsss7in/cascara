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
 'IMG_HERO': 'assets/photos/kirschen.jpg', 'IMG_HERO_ALT': 'Reife rote und unreife grüne Kaffeekirschen an einem Zweig',
 'IMG_DRY': 'assets/photos/trocknen.jpg', 'IMG_DRY_ALT': 'Kaffeekirschen trocknen in der Sonne, frische rote zwischen dunklen, schon getrockneten',
 'HERO_LEDE': 'Wir entwickeln einen Sirup aus Cascara, der getrockneten Schale der Kaffeekirsche. '
              'Ein Schülerunternehmen des <span class="nowrap">Collège Saint-Michel</span> in Fribourg.',

 'FRUIT_TEXT': 'Jede Kaffeebohne ist der Samen einer Kirsche. Meist liegen zwei davon in einer Frucht, '
               'umhüllt von Fruchtfleisch und einer roten Haut.',

 'INTRO_P1': 'Für den Kaffee zählt nur der Samen. Haut und Fruchtfleisch werden entfernt, und das ist '
             'keine Kleinigkeit: Rund 30 Prozent der Trockenmasse einer Kaffeekirsche entfallen auf sie. '
             'Bei der trockenen Aufbereitung fällt pro Kilogramm Kaffeebohnen etwa ein Kilogramm Schalen an.',
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

 'PLAN_LEAD': 'Wir entwickeln einen Sirup, der den Geschmack von Cascara ins Glas bringt: mit Wasser verdünnt, '
              'im Kaffee oder in Drinks. Mehrere Sorten sind in Arbeit. Welche es werden, zeigen wir zur Lancierung.',
 'STEPS': steps([
     ('Reifen', 'Nach der Blüte brauchen Arabica-Kirschen rund sieben bis neun Monate, bis sie reif sind.', 'Auf der Plantage'),
     ('Ernten', 'Für hochwertige Arabica-Kaffees werden nur die reifen Kirschen von Hand gepflückt, in mehreren Durchgängen.', 'Auf der Plantage'),
     ('Trennen und trocknen', 'Die Bohnen werden aus der Frucht gelöst. Haut und Fruchtfleisch werden getrocknet und so zu Cascara.', 'Bei der Aufbereitung'),
     ('Aufgiessen und einkochen', 'Wir giessen die Cascara mit heissem Wasser auf und kochen den Aufguss zu Sirup ein.', 'In Fribourg'),
     ('Abfüllen', 'Abgefüllt wird in kleinen Chargen, damit jede Flasche so schmeckt, wie sie soll.', 'In Fribourg'),
 ]),

 'PROJECT_P1': 'Wir sind ein Schülerunternehmen am Collège Saint-Michel. Im Company Programme von Young Enterprise '
               'Switzerland gründen Jugendliche zwischen 16 und 20 Jahren für ein Schuljahr ein echtes Miniunternehmen: '
               'mit Startkapital, eigenem Produkt, Verkauf und Abschluss.',
 'PROJECT_P2': 'Schweizweit sind jedes Jahr über 1500 Schülerinnen und Schüler in rund 200 Miniunternehmen dabei. '
               'Unser Beitrag ist ein Produkt aus dem, was bei der Kaffee-Ernte übrig bleibt.',
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
 'suess': '<path d="M13 31 L51 31 C51 41 43 47 32 47 C21 47 13 41 13 31 Z"/><path d="M32 47 L32 56"/><path d="M24 57.5 L40 57.5"/><path d="M20 31 C20 17 44 17 44 31"/><path d="M27 22 C29 26 30 21 32 25 C34 29 35 23 37 27"/>',
}

GROUPS = [
 ('kalt', 'Kalt', [
   ('Cascara Soda', 'Sirup · Mineralwasser · Eis · Zitronenzeste', 'Spritzig und fruchtig. Der einfachste Weg, Cascara zu probieren.'),
   ('Cascara Tonic', 'Sirup · Tonic Water · Eis · Orangenzeste', 'Herb trifft fruchtig, ähnlich wie beim Espresso Tonic.'),
   ('Iced Latte', 'Sirup · Espresso · kalte Milch · Eis', 'Die Frucht findet zurück zur Bohne.'),
 ]),
 ('heiss', 'Heiss', [
   ('Heisse Cascara', 'Sirup · heisses Wasser · Zimtstange · Zitrone', 'Angelehnt an die bolivianische Sultana, die heiss mit Zimt, Nelke und Zitrone getrunken wird.'),
   ('Cascara Latte', 'Sirup · Espresso · heisse Milch', 'Für alle, die ihren Milchkaffee gern etwas fruchtiger mögen.'),
   ('Im Schwarztee', 'Sirup · Schwarztee · Zitrone', 'Ein Löffel genügt: Cascara erinnert im Aufguss selbst an Schwarztee.'),
 ]),
 ('punsch', 'Punsch', [
   ('Winterpunsch', 'Sirup · Schwarztee · Apfel- und Orangensaft · Zimt · Nelke · Sternanis', 'Heiss serviert, für kalte Abende und volle Tische.'),
   ('Sommerbowle', 'Sirup · Mineralwasser · Orange · Zitrone · Minze · Eis', 'Kalt aus der grossen Karaffe, zum Teilen.'),
 ]),
 ('suess', 'Süss', [
   ('Über Glace', 'Sirup · Vanilleglace', 'Direkt aus der Flasche darüber.'),
   ('Im Birchermüesli', 'Sirup · Joghurt · Haferflocken · Apfel', 'Ein Schuss zum Süssen, statt Honig.'),
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
        <p class="drinks__intro" data-reveal style="--d:2">So stellen wir uns Cascara vor: als Sirup, der in viele Gläser passt. Alle Ideen sind alkoholfrei; die genauen Mengen verraten wir mit dem fertigen Sirup.</p>
      </header>
      <div class="drinks__tabs" aria-label="Kategorien">
{chr(10).join(f'        <button type="button" class="drinks__tab" data-drinks-tab aria-pressed="{str(i == 0).lower()}">{t}</button>' for i, (k, t, items) in enumerate(GROUPS))}
      </div>
      <div class="drinks__menu" data-drinks-menu>
{chr(10).join(groups)}
      </div>
    </section>'''

V['DRINKS'] = drinks()

# Waitlist: each sign-up arrives by e-mail through FormSubmit (formsubmit.co); the first one asks
# to confirm the address once. Left empty, the form says the list opens soon and stores nothing.
WAITLIST_EMAIL = ''
V['FORM_ENDPOINT'] = f'https://formsubmit.co/ajax/{WAITLIST_EMAIL}' if WAITLIST_EMAIL else ''
