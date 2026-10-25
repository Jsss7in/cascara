# Reads the two wave edges off our label designs (photos in ~/ClaudeC/cascara-quellen/label), so the labels on the
# bottles are redrawn with exactly the drips the designer drew. Writes waves.json (label units: 1007 × 1312).
#   …/branch/venv/bin/python -I _build/label/waves.py
import json, pathlib
import cv2, numpy as np

SRC = pathlib.Path.home() / 'ClaudeC' / 'cascara-quellen' / 'label'
OUT = pathlib.Path(__file__).with_name('waves.json')
W, H = 1007, 1312


def edge(C, a, b, lo, hi, last=False):
    """Per column, the row where class a turns into class b (held for 14 px, so a letter or a bulb is no edge)."""
    ys = []
    for x in range(W):
        col = C[:, min(max(x, 3), W - 4)]
        hit = [y for y in range(lo, hi) if (col[y:y + 14] == b).mean() > .85 and (col[y - 14:y] == a).mean() > .5]
        ys.append((hit[-1] if last else hit[0]) if hit else np.nan)
    ys = np.array(ys, float)
    ok = ~np.isnan(ys)
    return np.interp(np.arange(W), np.flatnonzero(ok), ys[ok])


def smooth(y, k):
    pad = np.pad(y, k, mode='edge')
    return np.convolve(pad, np.ones(2 * k + 1) / (2 * k + 1), 'same')[k:-k]


def median(y, k):
    pad = np.pad(y, k, mode='edge')
    return np.array([np.median(pad[i:i + 2 * k + 1]) for i in range(len(y))])


def classes(img, colours):
    f = img.astype(float)
    return np.argmin(np.stack([np.linalg.norm(f - np.array(c[::-1], float), axis=-1) for c in colours]), 0)


# the original: a clean export, cut out of its black frame
o = cv2.imread(str(SRC / 'original.webp'))[13:13 + H, 20:20 + W]
Co = classes(o, [(45, 32, 25), (161, 85, 47), (211, 192, 155)])
top_o = smooth(edge(Co, 0, 1, 230, 470), 4)
bot_o = smooth(edge(Co, 1, 2, 780, 1100, last=True), 4)

# Cozy Spice: a photo of the screen, straightened first; its lower wave is the original's (the same template), its
# upper one is its own and carries the string of lights, so letters, wire and bulbs are filtered out of it
c = cv2.imread(str(SRC / 'cozy-spice.webp'))
M = cv2.getPerspectiveTransform(np.float32([[38, 25], [943, 54], [887, 1200], [42, 1180]]),
                                np.float32([[0, 0], [W - 1, 0], [W - 1, H - 1], [0, H - 1]]))
c = cv2.warpPerspective(c, M, (W, H), flags=cv2.INTER_CUBIC)
# the wire of the lights runs along that wave; on the photo it is too faint to follow, so it is traced by hand
# (label units, read off the straightened photo on a 25-unit grid) and drawn through those points smoothly
WIRE = [(0, 317), (30, 325), (60, 335), (95, 340), (130, 323), (160, 300), (180, 289), (205, 293), (230, 313),
        (260, 329), (285, 333), (310, 327), (330, 325), (350, 340), (375, 363), (400, 383), (410, 387), (440, 390),
        (470, 383), (493, 370), (500, 365), (530, 343), (560, 325), (575, 319), (600, 325), (630, 350), (660, 367),
        (670, 371), (700, 360), (730, 343), (750, 347), (780, 357), (805, 360), (830, 347), (860, 327), (885, 313),
        (900, 309), (925, 317), (950, 343), (968, 355), (990, 357), (1007, 358)]


def catmull(pts, n):
    px, py = np.array(pts, float).T
    out = np.interp(np.arange(n), px, py)
    for i in range(len(pts) - 1):   # a centripetal-free Catmull-Rom between each pair, sampled per unit of x
        p0, p1, p2, p3 = (pts[max(i - 1, 0)], pts[i], pts[i + 1], pts[min(i + 2, len(pts) - 1)])
        for x in range(int(np.ceil(p1[0])), int(p2[0]) + 1):
            if x >= n: break
            t = (x - p1[0]) / (p2[0] - p1[0])
            m1 = (p2[1] - p0[1]) / 2; m2 = (p3[1] - p1[1]) / 2
            out[x] = ((2*t**3 - 3*t**2 + 1) * p1[1] + (t**3 - 2*t**2 + t) * m1 + (-2*t**3 + 3*t**2) * p2[1] + (t**3 - t**2) * m2)
    return out


top_c = smooth(catmull(WIRE, W), 6)

hsv = cv2.cvtColor(c, cv2.COLOR_BGR2HSV)
glow = ((hsv[..., 2] > 200) & (hsv[..., 1] < 200)).astype(np.uint8)
glow[:250] = 0; glow[560:] = 0
n, lab, st, cen = cv2.connectedComponentsWithStats(glow)
bulbs = sorted(round(float(cen[i][0]), 1) for i in range(1, n) if st[i][4] > 200 and 12 < cen[i][0] < W - 12)

json.dump({'size': [W, H],
           'original': {'top': top_o.round(1).tolist(), 'bottom': bot_o.round(1).tolist()},
           'cozy': {'top': top_c.round(1).tolist(), 'bottom': bot_o.round(1).tolist(), 'bulbs': bulbs}},
          open(OUT, 'w'))
print('waves', OUT, 'bulbs', bulbs)
