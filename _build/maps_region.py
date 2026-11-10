# The map of the bottle return (Rückgabe): Freiburg and the towns around it, from OpenStreetMap, in the site's own
# colours, as plain SVG in assets/maps/ (no map service, nothing tracks a visitor). Larger than the stands' maps, so
# no single buildings: the built-up land, the main roads, the railway, the Sarine and its lakes, the woods.
#   python3 _build/maps_region.py fetch   (once: _build/maps/region-freiburg.json, not committed)
#   python3 _build/maps_region.py         (draws assets/maps/rueckgabe-region.svg)
import json, math, pathlib, sys, time, urllib.parse, urllib.request
HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE))
from content import RETURN_MAP as R
from maps import rings


def d_of(pts, close=False):
    """A path in whole pixels; a way that shrinks to a single point at this scale is left out (an empty
    segment would end the whole path for the browser, and every street after it with it)."""
    q = []
    for x, y in pts:
        p = (round(x), round(y))
        if not q or p != q[-1]: q.append(p)
    if len(q) < (3 if close else 2): return ''
    f = lambda v: f'{v:g}'
    return f'M{f(q[0][0])} {f(q[0][1])}L' + ' '.join(f'{f(x)} {f(y)}' for x, y in q[1:]) + ('Z' if close else '')

VW, VH = 900, 600
DATA = HERE / 'maps' / 'region-freiburg.json'
PAPER, BUILT, GREEN, WATER, WATER_EDGE = '#F3E7D3', '#E6D4B8', '#DDD7B6', '#BFCBC4', '#A9B8B1'
ROAD, CASING, RAIL, INK = '#FFFBF4', '#D3BC98', '#9C8466', '#6B5342'
ROADS = {'motorway': (6.4, 4.6), 'trunk': (6, 4.2), 'primary': (5, 3.4), 'secondary': (4.2, 2.8), 'tertiary': (3.2, 2),
         'motorway_link': (3.4, 2.2), 'trunk_link': (3.4, 2.2), 'primary_link': (3, 2), 'secondary_link': (2.8, 1.8)}


def project():
    lat0, lon0 = R['center']
    k = VW / R['metres']
    mx = 111320 * math.cos(math.radians(lat0))
    return lambda lat, lon: (VW / 2 + (lon - lon0) * mx * k, VH / 2 - (lat - lat0) * 111320 * k)


def fetch():
    lat, lon = R['center']
    w, h = R['metres'] * .6, R['metres'] * VH / VW * .6
    dlat, dlon = h / 111320, w / (111320 * math.cos(math.radians(lat)))
    b = f'{lat - dlat:.5f},{lon - dlon:.5f},{lat + dlat:.5f},{lon + dlon:.5f}'
    q = f"""[out:json][timeout:180];
(
 way["highway"~"^(motorway|trunk|primary|secondary|tertiary)(_link)?$"]({b});
 way["railway"="rail"]({b});
 way["natural"="water"]({b}); relation["natural"="water"]({b});
 way["waterway"~"^(river|canal)$"]({b});
 way["landuse"~"^(residential|commercial|industrial|retail)$"]({b});
 way["landuse"="forest"]({b}); way["natural"="wood"]({b});
);
out geom;"""
    for url in ['https://overpass.kumi.systems/api/interpreter', 'https://overpass-api.de/api/interpreter',
                'https://overpass.private.coffee/api/interpreter', 'https://lz4.overpass-api.de/api/interpreter'] * 2:
        try:
            req = urllib.request.Request(url, data=urllib.parse.urlencode({'data': q}).encode(),
                                         headers={'User-Agent': 'cascarup.ch map build'})
            data = json.load(urllib.request.urlopen(req, timeout=200))
            DATA.parent.mkdir(exist_ok=True)
            DATA.write_text(json.dumps(data))
            print('elements', len(data['elements']))
            return
        except Exception as ex:
            print('retry', url.split('/')[2], type(ex).__name__, flush=True); time.sleep(5)
    raise SystemExit('Overpass nicht erreichbar')


def scaled(pts):
    # clip_rect/d_of work in the stands' 600 × 400 frame: scale into it and back is not needed, the region is drawn
    # in its own frame, so clip here against VW × VH
    x0, y0, x1, y1 = -8, -8, VW + 8, VH + 8
    return [(min(max(x, x0), x1), min(max(y, y0), y1)) for x, y in pts]


def draw():
    data = json.loads(DATA.read_text())
    P = project()
    pt = lambda g: [P(n['lat'], n['lon']) for n in g]
    vis = lambda ps: max(p[0] for p in ps) > -20 and min(p[0] for p in ps) < VW + 20 and max(p[1] for p in ps) > -20 and min(p[1] for p in ps) < VH + 20
    built, green, water, rivers, rails, roads = [], [], [], [], [], {}
    for el in data['elements']:
        t = el.get('tags', {})
        if el['type'] == 'relation':
            for r in rings(el.get('members', [])):
                ps = pt(r)
                if vis(ps): water.append(d_of(scaled(ps), True))
            continue
        g = el.get('geometry')
        if not g or len(g) < 2: continue
        ps = pt(g)
        if not vis(ps): continue
        closed = g[0] == g[-1]
        if t.get('natural') == 'water' and closed: water.append(d_of(scaled(ps), True))
        elif t.get('waterway'): rivers.append(d_of(ps))
        elif t.get('railway'): rails.append(d_of(ps))
        elif t.get('highway') in ROADS: roads.setdefault(t['highway'], []).append(d_of(ps))
        elif t.get('landuse') in ('forest',) or t.get('natural') == 'wood':
            if closed: green.append(d_of(scaled(ps), True))
        elif closed: built.append(d_of(scaled(ps), True))
    order = sorted(roads, key=lambda h: ROADS[h][1])
    a = 'fill="none" stroke-linecap="round" stroke-linejoin="round"'
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VW} {VH}" width="{VW}" height="{VH}">',
           f'<rect width="{VW}" height="{VH}" fill="{PAPER}"/>',
           f'<path fill="{GREEN}" d="{"".join(green)}"/>', f'<path fill="{BUILT}" d="{"".join(built)}"/>',
           f'<path fill="{WATER}" stroke="{WATER_EDGE}" stroke-width=".8" d="{"".join(water)}"/>',
           f'<path {a} stroke="{WATER}" stroke-width="5" d="{"".join(rivers)}"/>']
    out += [f'<path {a} stroke="{CASING}" stroke-width="{ROADS[h][0]}" d="{"".join(roads[h])}"/>' for h in order]
    out += [f'<path {a} stroke="{ROAD}" stroke-width="{ROADS[h][1]}" d="{"".join(roads[h])}"/>' for h in order]
    out.append(f'<path fill="none" stroke="{RAIL}" stroke-width="1.8" d="{"".join(rails)}"/>'
               f'<path fill="none" stroke="{PAPER}" stroke-width=".9" stroke-dasharray="4 4" d="{"".join(rails)}"/>')
    # the towns are named over the map by the page (so the French page says Fribourg)
    out.append('</svg>')
    path = HERE.parent / 'assets' / 'maps' / 'rueckgabe-region.svg'
    path.write_text(''.join(out))
    print(path.name, len(''.join(out)), 'bytes')


if __name__ == '__main__':
    fetch() if sys.argv[1:] == ['fetch'] else draw()
