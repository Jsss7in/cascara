# Fetch OpenStreetMap data (Overpass) around each venue: streets, rails, water, buildings, green.
import json, math, sys, time, urllib.request, urllib.parse
# run from the repo root: python3 _build/maps_fetch.py  (writes _build/maps/<name>.json, not committed)
import os, pathlib
os.chdir(pathlib.Path(__file__).parent / 'maps')
VENUES = {
 'gambach':   (46.8069923, 7.1497324),
 'estavayer': (46.8503, 6.8430),   # framed towards the lake
 'stmichel':  (46.8067246, 7.1579802),
 'avenches':  (46.8794048, 7.0396615),
}
W, H = 1000, 667          # metres: one scale for every map
def bbox(lat, lon, pad=1.25):
    dlat = (H / 2 * pad) / 111320
    dlon = (W / 2 * pad) / (111320 * math.cos(math.radians(lat)))
    return lat - dlat, lon - dlon, lat + dlat, lon + dlon
Q = """[out:json][timeout:90];
(
 way["highway"]({b});
 way["railway"~"^(rail|light_rail|tram|narrow_gauge)$"]({b});
 way["natural"="water"]({b}); relation["natural"="water"]({b});
 way["waterway"~"^(river|stream|canal|riverbank)$"]({b});
 way["building"]({b});
 way["leisure"~"^(park|garden|pitch|playground)$"]({b});
 way["landuse"~"^(grass|forest|meadow|recreation_ground|cemetery|orchard|vineyard)$"]({b});
 way["natural"~"^(wood|scrub|grassland)$"]({b});
);
out geom;"""
import os
MIRRORS = ['https://overpass.kumi.systems/api/interpreter', 'https://lz4.overpass-api.de/api/interpreter',
           'https://overpass.private.coffee/api/interpreter', 'https://overpass-api.de/api/interpreter']
def ask(q):
    for attempt in range(8):
        url = MIRRORS[attempt % len(MIRRORS)]
        try:
            req = urllib.request.Request(url, data=urllib.parse.urlencode({'data': q}).encode(),
                                         headers={'User-Agent': 'cascarup.ch map build (info@cascarup.ch)'})
            return json.load(urllib.request.urlopen(req, timeout=150))
        except Exception as ex:
            print('  retry', url.split('/')[2], type(ex).__name__, getattr(ex, 'code', ''), flush=True); time.sleep(4)
    raise SystemExit('Overpass nicht erreichbar')
for name, (lat, lon) in VENUES.items():
    if os.path.exists(f'{name}.json'): print(name, 'schon da'); continue
    s, w, n, e = bbox(lat, lon)
    q = Q.replace('{b}', f'{s:.6f},{w:.6f},{n:.6f},{e:.6f}')
    data = ask(q)
    json.dump(data, open(f'{name}.json', 'w'))
    kinds = {}
    for el in data['elements']:
        t = el.get('tags', {})
        k = 'building' if 'building' in t else 'highway' if 'highway' in t else 'water' if t.get('natural') == 'water' or 'waterway' in t else 'rail' if 'railway' in t else 'green'
        kinds[k] = kinds.get(k, 0) + 1
    print(name, len(data['elements']), kinds)
    time.sleep(2)
