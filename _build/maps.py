# Draws the small maps under the market stands from OpenStreetMap data, in the site's own colours.
# The data comes from Overpass (fetched once, kept in _build/maps/*.json); the result is plain SVG in
# assets/maps/, so the page loads no map service and nothing tracks a visitor.
#   python3 _build/maps.py
import json, math, pathlib

HERE = pathlib.Path(__file__).parent
OUT = HERE.parent / 'assets' / 'maps'

# Every map shows the same 1000 × 667 m, so the four places compare at one scale.
VW, VH, METRES = 600, 400, 1000
K = VW / METRES

PAPER = '#EFE2CB'      # a touch lighter than the page, so the map reads as a sheet
BUILDING = '#DCC6A3'
GREEN = '#D9D3AF'
WATER = '#BFCBC4'
WATER_EDGE = '#A9B8B1'
ROAD = '#FBF5EB'
CASING = '#CDB590'
PATH = '#B89A71'
RAIL = '#9C8466'
TERRA = '#B4592A'
MILK = '#FFF7EE'

# street classes: (casing width, fill width); anything not listed is drawn as a footpath
ROADS = {
    'motorway': (9, 7), 'trunk': (9, 7), 'primary': (8.5, 6.5), 'secondary': (8, 6), 'tertiary': (7, 5),
    'motorway_link': (6, 4.4), 'trunk_link': (6, 4.4), 'primary_link': (6, 4.4), 'secondary_link': (6, 4.4), 'tertiary_link': (5.6, 4),
    'unclassified': (5.6, 4), 'residential': (5.6, 4), 'living_street': (5, 3.6), 'pedestrian': (5, 3.6),
    'service': (3.6, 2.4), 'road': (5, 3.6),
}
FOOT = {'footway', 'path', 'steps', 'cycleway', 'track', 'bridleway', 'corridor'}
SKIP = {'proposed', 'construction', 'platform', 'bus_stop', 'elevator', 'raceway'}


def project(lat0, lon0):
    mx = 111320 * math.cos(math.radians(lat0))
    return lambda lat, lon: (VW / 2 + (lon - lon0) * mx * K, VH / 2 - (lat - lat0) * 111320 * K)


def inside(pts, pad=40):
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    return max(xs) > -pad and min(xs) < VW + pad and max(ys) > -pad and min(ys) < VH + pad


def d_of(pts, close=False):
    # whole units are a fifth of a pixel at the size the maps are shown, and keep the files small
    q = []
    if not pts: return ''
    for x, y in pts:
        p = (round(x), round(y))
        if not q or p != q[-1]: q.append(p)
    s = f'M{q[0][0]} {q[0][1]}L' + ' '.join(f'{x} {y}' for x, y in q[1:])
    return s + ('Z' if close else '')


def clip_rect(poly, pad=6):
    """Sutherland–Hodgman against the view (plus a margin): keeps a lake that is larger than the map."""
    x0, y0, x1, y1 = -pad, -pad, VW + pad, VH + pad
    def cut(pts, inside_fn, cross):
        out = []
        for i, cur in enumerate(pts):
            prev = pts[i - 1]
            if inside_fn(cur):
                if not inside_fn(prev): out.append(cross(prev, cur))
                out.append(cur)
            elif inside_fn(prev):
                out.append(cross(prev, cur))
        return out
    def at_x(x):
        return lambda a, b: (x, a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]))
    def at_y(y):
        return lambda a, b: (a[0] + (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]), y)
    for fn, cr in ((lambda p: p[0] >= x0, at_x(x0)), (lambda p: p[0] <= x1, at_x(x1)),
                   (lambda p: p[1] >= y0, at_y(y0)), (lambda p: p[1] <= y1, at_y(y1))):
        poly = cut(poly, fn, cr)
        if not poly: break
    return poly


def rings(members):
    """Stitch the outer ways of a multipolygon into closed rings."""
    ways = [list(m['geometry']) for m in members if m.get('role') in ('outer', '') and m.get('geometry')]
    out = []
    while ways:
        ring = ways.pop(0)
        changed = True
        while changed and ring[0] != ring[-1]:
            changed = False
            for i, w in enumerate(ways):
                if w[0] == ring[-1]: ring += w[1:]
                elif w[-1] == ring[-1]: ring += w[-2::-1]
                elif w[-1] == ring[0]: ring = w[:-1] + ring
                elif w[0] == ring[0]: ring = w[::-1][:-1] + ring
                else: continue
                ways.pop(i); changed = True; break
        out.append(ring)
    return out


def draw(name, at, view=None):
    data = json.load(open(HERE / 'maps' / f'{name}.json'))
    P = project(*(view or at))
    pt = lambda g: [P(n['lat'], n['lon']) for n in g]
    green, water, water_lines, buildings, rails, foot = [], [], [], [], [], []
    roads = {}
    for el in data['elements']:
        t = el.get('tags', {})
        if el['type'] == 'relation':
            if t.get('natural') == 'water':
                for r in rings(el.get('members', [])):
                    poly = clip_rect(pt(r))
                    if len(poly) > 2: water.append(d_of(poly, True))
            continue
        g = el.get('geometry')
        if not g or len(g) < 2: continue
        pts = pt(g)
        if not inside(pts): continue
        closed = g[0] == g[-1]
        if 'building' in t and closed:
            buildings.append(d_of(pts, True))
        elif t.get('natural') == 'water' or t.get('waterway') == 'riverbank':
            poly = clip_rect(pts) if closed else []
            if len(poly) > 2: water.append(d_of(poly, True))
        elif t.get('waterway') in ('river', 'canal', 'stream'):
            water_lines.append((d_of(pts), 9 if t['waterway'] == 'river' else 3))
        elif 'railway' in t:
            rails.append(d_of(pts))
        elif 'highway' in t:
            hw = t['highway']
            if hw in SKIP: continue
            if hw in FOOT or hw not in ROADS:
                foot.append(d_of(pts))
            else:
                roads.setdefault(hw, []).append(d_of(pts))
        elif closed:
            green.append(d_of(pts, True))

    order = sorted(roads, key=lambda h: ROADS[h][1])          # small streets first, main roads on top
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VW} {VH}" width="{VW}" height="{VH}">',
             f'<rect width="{VW}" height="{VH}" fill="{PAPER}"/>']
    if green: parts.append(f'<path fill="{GREEN}" d="{"".join(green)}"/>')
    if water: parts.append(f'<path fill="{WATER}" stroke="{WATER_EDGE}" stroke-width="1" d="{"".join(water)}"/>')
    for d, w in water_lines:
        parts.append(f'<path fill="none" stroke="{WATER}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round" d="{d}"/>')
    if buildings: parts.append(f'<path fill="{BUILDING}" d="{"".join(buildings)}"/>')
    if foot: parts.append(f'<path fill="none" stroke="{PATH}" stroke-opacity=".5" stroke-width="1" stroke-dasharray="2.4 2.4" stroke-linecap="round" d="{"".join(foot)}"/>')
    g_attr = 'fill="none" stroke-linecap="round" stroke-linejoin="round"'
    for h in order:
        parts.append(f'<path {g_attr} stroke="{CASING}" stroke-width="{ROADS[h][0]}" d="{"".join(roads[h])}"/>')
    for h in order:
        parts.append(f'<path {g_attr} stroke="{ROAD}" stroke-width="{ROADS[h][1]}" d="{"".join(roads[h])}"/>')
    if rails:
        parts.append(f'<path fill="none" stroke="{RAIL}" stroke-width="2.4" d="{"".join(rails)}"/>')
        parts.append(f'<path fill="none" stroke="{PAPER}" stroke-width="1.2" stroke-dasharray="5 5" d="{"".join(rails)}"/>')
    # the stand: a terracotta pin with a soft halo (at the centre, unless the map is framed otherwise)
    cx, cy = P(*at)
    cx, cy = round(cx, 1), round(cy, 1)
    parts.append(f'<circle cx="{cx}" cy="{cy}" r="36" fill="{TERRA}" fill-opacity=".14"/>'
                 f'<circle cx="{cx}" cy="{cy}" r="22" fill="{TERRA}" fill-opacity=".14"/>'
                 f'<circle cx="{cx}" cy="{cy + 2}" r="15" fill="#3A2116" fill-opacity=".18"/>'
                 f'<circle cx="{cx}" cy="{cy}" r="15" fill="{TERRA}" stroke="{MILK}" stroke-width="4"/>'
                 f'<circle cx="{cx}" cy="{cy}" r="5" fill="{MILK}"/>')
    parts.append('</svg>')
    OUT.mkdir(parents=True, exist_ok=True)
    svg = ''.join(parts)
    (OUT / f'{name}.svg').write_text(svg)
    return len(svg)


if __name__ == '__main__':
    import sys
    sys.path.insert(0, str(HERE))
    from content import STANDS
    for s in STANDS:
        print(s['map'], draw(s['map'], s['at'], s.get('view')), 'bytes')
