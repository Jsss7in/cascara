# Our mark, traced from the designer's picture (~/ClaudeC/cascara-quellen/logo/): its outline as a filled path, and
# the line down the middle of its band, along which the mark draws itself (nav, loading screen). The colours on the
# picture are not ours; the site keeps its own (cream #D9BF9C on terracotta #B4592A).
#   …/branch/venv/bin/python -I _build/logo_trace.py   → _build/logo3.json, assets/logo.svg, favicon.svg, apple-touch-icon.png
import json, pathlib
import cv2, numpy as np

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
SRC = pathlib.Path.home() / 'ClaudeC' / 'cascara-quellen' / 'logo' / 'logo-2026-10-25.jpeg'
CREAM, TERRA = '#D9BF9C', '#B4592A'
BAND = 68.9          # the band's width in our units, as before, so the mark keeps its size and its 84-unit pen
UP = 2               # traced at twice the picture's size

img = cv2.imread(str(SRC)).astype(np.float32)
img = cv2.resize(img, None, fx=UP, fy=UP, interpolation=cv2.INTER_CUBIC)
img = cv2.GaussianBlur(img, (0, 0), 1.6)            # the picture is a JPEG: calm its blocks before cutting
bg, fg = np.array([47, 97, 180], np.float32), np.array([161, 195, 218], np.float32)   # BGR, measured
t = ((img - bg) @ (fg - bg)) / float((fg - bg) @ (fg - bg))
mask = (t > .5).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(mask)
mask = (lab == 1 + int(np.argmax(st[1:, 4]))).astype(np.uint8)

# --- the band's width and the scale to our units
dist = cv2.distanceTransform(mask, cv2.DIST_L2, 5)


def thin(m):
    """Zhang–Suen thinning: the band reduced to a line one pixel wide."""
    m = m.copy().astype(np.uint8)
    while True:
        changed = False
        for step in (0, 1):
            P = np.pad(m, 1)
            p2, p3, p4, p5 = P[:-2, 1:-1], P[:-2, 2:], P[1:-1, 2:], P[2:, 2:]
            p6, p7, p8, p9 = P[2:, 1:-1], P[2:, :-2], P[1:-1, :-2], P[:-2, :-2]
            nb = [p2, p3, p4, p5, p6, p7, p8, p9]
            B = sum(x.astype(int) for x in nb)
            A = sum(((nb[i] == 0) & (nb[(i + 1) % 8] == 1)).astype(int) for i in range(8))
            c1 = (p2 * p4 * p6 == 0) if step == 0 else (p2 * p4 * p8 == 0)
            c2 = (p4 * p6 * p8 == 0) if step == 0 else (p2 * p6 * p8 == 0)
            kill = (m == 1) & (B >= 2) & (B <= 6) & (A == 1) & c1 & c2
            if kill.any():
                m[kill] = 0; changed = True
        if not changed:
            return m


small = cv2.resize(mask, None, fx=.25, fy=.25, interpolation=cv2.INTER_AREA)   # thinning at a working size
skel = thin((small > 0).astype(np.uint8))
ys, xs = np.nonzero(skel)
pts = set(zip(xs.tolist(), ys.tolist()))
nbrs = lambda p: [(p[0] + dx, p[1] + dy) for dx in (-1, 0, 1) for dy in (-1, 0, 1) if (dx or dy) and (p[0] + dx, p[1] + dy) in pts]


def farthest(start):
    prev, order, seen = {start: None}, [start], {start}
    for p in order:
        for q in nbrs(p):
            if q not in seen: seen.add(q); prev[q] = p; order.append(q)
    end = order[-1]
    path = [end]
    while prev[path[-1]] is not None: path.append(prev[path[-1]])
    return end, path


# the line is the longest path through the skeleton (little spurs at the band's ends fall away)
a, _ = farthest(next(iter(pts)))
b, path = farthest(a)
line = np.array(path, np.float32) * 4 + 1.5          # back to the traced size (pixel centres)
# smooth it and space its points evenly
k = 9
pad = np.pad(line, ((k, k), (0, 0)), mode='edge')
line = np.stack([np.convolve(pad[:, i], np.ones(2 * k + 1) / (2 * k + 1), 'same')[k:-k] for i in (0, 1)], 1)
seg = np.r_[0, np.cumsum(np.hypot(*np.diff(line, axis=0).T))]
widths = [2 * dist[int(y), int(x)] for x, y in line[::5] if 0 <= int(y) < dist.shape[0] and 0 <= int(x) < dist.shape[1]]
band = float(np.median(widths))
s = BAND / band                                     # traced pixels → our units

# --- the outline: contours (with the counters inside), smoothed and drawn as curves
cs, hier = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
ys0, xs0 = np.nonzero(mask)
x0, y0 = xs0.min(), ys0.min()
PADU = 6
W = (xs0.max() - x0) * s + 2 * PADU
H = (ys0.max() - y0) * s + 2 * PADU
to_u = lambda p: ((p[..., 0] - x0) * s + PADU, (p[..., 1] - y0) * s + PADU)


def curve(c):
    c = c[:, 0, :].astype(np.float32)
    if len(c) < 20: return ''
    k = 5   # along the contour: a soft running mean against the last jaggies
    cp = np.concatenate([c[-k:], c, c[:k]])
    c = np.stack([np.convolve(cp[:, i], np.ones(2 * k + 1) / (2 * k + 1), 'same')[k:-k] for i in (0, 1)], 1)
    step = max(1, int(round(14 / (s * 1))))           # a point every ~14 units
    P = c[::step]
    X, Y = to_u(P)
    P = np.stack([X, Y], 1)
    n = len(P)
    d = [f'M{P[0][0]:.1f} {P[0][1]:.1f}']
    for i in range(n):   # Catmull–Rom through the points, as cubic curves
        p0, p1, p2, p3 = P[i - 1], P[i], P[(i + 1) % n], P[(i + 2) % n]
        c1, c2 = p1 + (p2 - p0) / 6, p2 - (p3 - p1) / 6
        d.append(f'C{c1[0]:.1f} {c1[1]:.1f} {c2[0]:.1f} {c2[1]:.1f} {p2[0]:.1f} {p2[1]:.1f}')
    return ''.join(d) + 'Z'


fill = ''.join(curve(c) for c in cs)

# the line in our units, from the end of the u to the tip of the C (build.py turns it round: the nav draws it
# starting at the C); the C's tip is the end further up and to the right
LX, LY = to_u(line)
L = np.stack([LX, LY], 1)
if L[0][0] - L[0][1] > L[-1][0] - L[-1][1]: L = L[::-1]
seg = np.r_[0, np.cumsum(np.hypot(*np.diff(L, axis=0).T))]
keep = [0]
for i in range(1, len(L)):
    if seg[i] - seg[keep[-1]] >= 7: keep.append(i)
if keep[-1] != len(L) - 1: keep.append(len(L) - 1)
L = L[keep]
line_d = 'M' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in L)

vb = f'0 0 {W:.0f} {H:.0f}'
(HERE / 'logo3.json').write_text(json.dumps({'fill': fill, 'line': line_d, 'vb': vb, 'w': BAND}))
(ROOT / 'assets' / 'logo.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}"><path fill="{CREAM}" fill-rule="evenodd" d="{fill}"/></svg>\n')
# the browser tab: the mark in cream on a terracotta tile
k = 44 / max(W, H)
fav = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="{TERRA}"/>'
       f'<g transform="translate({(64 - W * k) / 2:.2f} {(64 - H * k) / 2:.2f}) scale({k:.4f})"><path fill="{CREAM}" fill-rule="evenodd" d="{fill}"/></g></svg>\n')
(ROOT / 'assets' / 'favicon.svg').write_text(fav)
# the home-screen icon (180 × 180, iOS rounds it itself): drawn at eight times its size and brought down
Z = 8
icon = np.zeros((180 * Z, 180 * Z, 3), np.uint8); icon[:] = (42, 89, 180)
k = 112 / max(W, H)
ox, oy = (180 - W * k) / 2, (180 - H * k) / 2
polys = []
for c in cs:
    X, Y = to_u(c[:, 0, :].astype(np.float32))
    polys.append(np.stack([(X * k + ox) * Z, (Y * k + oy) * Z], 1).astype(np.int32))
cv2.fillPoly(icon, polys, (156, 191, 217), lineType=cv2.LINE_AA)
cv2.imwrite(str(ROOT / 'assets' / 'apple-touch-icon.png'), cv2.resize(icon, (180, 180), interpolation=cv2.INTER_AREA))
print('vb', vb, 'band px', round(band, 1), 'line points', len(L), 'contours', len(cs), 'fill chars', len(fill))
