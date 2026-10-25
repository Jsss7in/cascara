# The shop pictures: our real bottles (phone photos in ~/ClaudeC/cascara-quellen/bottle), cut out of the room,
# with our labels laid onto the glass the way paper sits on it, on a quiet backdrop with their shadows.
#   …/branch/venv/bin/python -I _build/bottle/mockup.py      (after node _build/label/render.mjs)
# → assets/shop/<kind>-<ml>.webp (1400 × 1750) and assets/bottle/<kind>-<ml>.webp (cut-out with alpha, for small uses)
import pathlib, subprocess
import cv2, numpy as np

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SRC = pathlib.Path.home() / 'ClaudeC' / 'cascara-quellen' / 'bottle'
LABELS = HERE.parent / 'label' / 'out'
OUT_W, OUT_H = 1400, 1750
FLOOR = 1460                     # where every bottle stands in the picture, so a change of size grows from the floor
K = 2                            # the photos are worked on at twice their size
LABEL_ASPECT = 1007 / 1312


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


# ---------------------------------------------------------------------------------------------------------------
# the bottles, measured on the photos (source pixels). The tall one is a cylinder seen a little from above, its
# sides narrowing towards the floor with the perspective; the flask is a flat bottle turned slightly to the right.

def tall_outline():
    """Outline of the 500 ml bottle: cap, neck, shoulder (measured row by row) and the body's straight sides."""
    cx = 231.1
    L = lambda y: 119.86 + .0312 * y
    R = lambda y: 342.40 - .0311 * y
    shoulder = [(188, 43.5), (193, 46.5), (197, 51), (202, 57), (208, 69), (214, 77.5), (220, 84), (226, 88.5),
                (232, 92), (238, 95), (244, 97.5), (250, 100), (256, 101.5), (262, 102.6)]
    left, right = [], []
    # the cap: seen a little from above, its top is the far half of an ellipse, its corners round into its sides
    arc = lambda d: 77 + 10 * (d / 48) ** 2
    left += [(231.5 - d, arc(d)) for d in range(0, 47, 3)] + [(184.4, 88.6), (183.7, 90.6), (183.4, 93)]
    right += [(231.5 + d, arc(d)) for d in range(0, 47, 3)] + [(278.7, 88.6), (279.4, 90.6), (279.7, 93)]
    left += [(183.4, 151), (cx - 43.2, 152.5)]; right += [(279.7, 151), (cx + 43.2, 152.5)]
    for y, hw in shoulder:
        left.append((cx - hw, y)); right.append((cx + hw, y))
    for y in range(270, 904, 6):
        left.append((L(y), y)); right.append((R(y), y))
    bottom = [(cx + 83.1 * np.cos(t), 903 + 30 * np.sin(t)) for t in np.linspace(np.pi, 0, 60)]
    return left + bottom + right[::-1]


def flask_outline():
    """Outline of the 200 ml flask: its left side against the wall, its right side (front and a sliver of its flank)."""
    arc = lambda d: 52.5 + 5 * (d / 52) ** 2                                # the cap's top, as on the tall one
    top_l = [(199.5 - d, arc(d)) for d in range(0, 51, 3)] + [(147, 57.6), (146.3, 59.6), (146, 62)]
    top_r = [(199.5 + d, arc(d)) for d in range(0, 51, 3)] + [(252.2, 57.6), (252.8, 59.6), (253, 62)]
    left = top_l + [(146, 126), (150, 128), (148, 180), (144.5, 200), (141, 206),
            (137, 210), (112, 220), (93, 230), (82, 240), (75, 250), (70, 260), (66.5, 270), (63, 285), (62, 300),
            (62.5, 400), (64, 450), (65.5, 520), (66.5, 580), (67.5, 605), (69.5, 615), (73, 622), (80, 627.5), (92, 631)]
    right = top_r + [(252.8, 126), (250, 128), (251, 180), (254, 200), (258, 206),
             (262, 210), (280, 220), (293, 230), (303, 240), (310, 250), (315, 260), (319, 270), (322, 285), (323, 300),
             (321.5, 380), (318, 450), (315.5, 520), (313, 580), (311.5, 600), (309, 611), (305, 619), (298, 625.5), (288, 631)]
    bottom = [(92 + (288 - 92) * t, 631 + 2.2 * np.sin(np.pi * t)) for t in np.linspace(0, 1, 30)]
    return left + bottom + right[::-1]


BOTTLES = {
    500: dict(src='gross-500.webp', outline=tall_outline, top=78, base=933, cx=231.1, height=1160,
              glass=(152, 199), foot=(231.1, 903, 83.1, 30), label=dict(shape='cylinder', cy=600, reach=.93)),
    200: dict(src='klein-200.png', outline=flask_outline, top=52, base=633, cx=199, height=900,
              glass=(127, 217), foot=(190, 626, 113, 7), label=dict(shape='flask', cy=448, cx=183, width=178)),
}


def mask_of(outline, shape):
    """Anti-aliased mask at the working size, drawn at four times that and brought down."""
    S = 4
    big = np.zeros((shape[0] * S, shape[1] * S), np.uint8)
    pts = np.array([[x * K * S, y * K * S] for x, y in outline], np.int32)
    cv2.fillPoly(big, [pts], 255, lineType=cv2.LINE_AA)
    return cv2.resize(big, (shape[1], shape[0]), interpolation=cv2.INTER_AREA).astype(np.float32) / 255


# ---------------------------------------------------------------------------------------------------------------
# the label on the glass

def label_tall(img, lab, b):
    """Wrap the label round the cylinder: across, it follows the angle round the bottle; up and down, its edges bow
    into a smile, because the camera looks down on the bottle a little (more so towards the floor)."""
    h, w = img.shape[:2]
    L = lambda y: (119.86 + .0312 * y / K) * K
    R = lambda y: (342.40 - .0311 * y / K) * K
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
    cx = (L(ys) + R(ys)) / 2
    r = (R(ys) - L(ys)) / 2 - .6 * K          # the label sits just inside the glass's own outline
    sinx = np.clip((xs - cx) / r, -1, 1)
    th = np.arcsin(sinx)
    tm = np.arcsin(b['reach'])
    r0 = ((342.40 - .0311 * b['cy']) - (119.86 + .0312 * b['cy'])) / 2 * K
    hgt = 2 * tm * r0 / LABEL_ASPECT
    yc = b['cy'] * K
    tilt = lambda y: 1.25 * (.146 + (y / K - 150) / (918 - 150) * (.28 - .146))
    y_top = yc - hgt / 2 - r0 * tilt(yc - hgt / 2) * (1 - np.cos(th))
    y_bot = yc + hgt / 2 - r0 * tilt(yc + hgt / 2) * (1 - np.cos(th))
    u = .5 + th / (2 * tm)
    v = (ys - y_top) / (y_bot - y_top)
    shade = (.66 + .34 * np.cos(th + .32)) * (1 - .16 * smoothstep(.5 * tm, tm, np.abs(th)))   # light from the left; the paper turns away at both sides
    sheen = .07 * np.exp(-((th + .45) / .2) ** 2)                # a soft gleam on the paper from the window
    return place(img, lab, u, v, (np.abs(th) < tm), shade, sheen, slope=np.cos(th))


def label_flask(img, lab, b):
    """The flask's face is flat with a gentle bulge; the label lies on it straight, a little darker to the right."""
    h, w = img.shape[:2]
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
    lw, lh = b['width'] * K, b['width'] / LABEL_ASPECT * K
    bulge = 2.4 * lw / 2
    th = np.arcsin(np.clip((xs - b['cx'] * K) / bulge, -1, 1))
    tm = np.arcsin(lw / 2 / bulge)
    u = .5 + th / (2 * tm)
    v = (ys - (b['cy'] * K - lh / 2)) / lh
    shade = .9 + .08 * np.cos(th + .5) - .05 * (xs / w)
    sheen = .05 * np.exp(-((th + .35) / .22) ** 2)
    return place(img, lab, u, v, np.abs(th) < tm, shade, sheen, slope=np.cos(th))


def place(img, lab, u, v, inside, shade, sheen, slope):
    lh, lw = lab.shape[:2]
    corner = .012                                              # the label's corners are cut round, a little
    du = np.minimum(u, 1 - u); dv = np.minimum(v, 1 - v) * (lh / lw)
    round_out = (du < corner) & (dv < corner) & (np.hypot(corner - du, corner - dv) > corner)
    keep = inside & (v >= 0) & (v <= 1) & (u >= 0) & (u <= 1) & ~round_out
    mx = (u * (lw - 1)).astype(np.float32); my = (v * (lh - 1)).astype(np.float32)
    sample = cv2.remap(lab, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
    paper = sample.astype(np.float32) / 255
    warm = np.array([.93, .97, 1.0], np.float32)               # BGR: the warm light of the room on the paper
    paper = paper * warm * shade[..., None] + sheen[..., None]
    # a hair of shadow along the label's edges, where the paper ends on the glass
    edge = np.minimum(np.minimum(u, 1 - u) * slope * 60, np.minimum(v, 1 - v) * 260)
    paper *= (.8 + .2 * np.clip(edge, 0, 1))[..., None]
    paper = cv2.GaussianBlur(paper, (0, 0), 1.1)                 # as soft as the photograph around it …
    paper += np.random.default_rng(7).normal(0, .012, paper.shape[:2]).astype(np.float32)[..., None]   # … and as grainy
    a = cv2.GaussianBlur(keep.astype(np.float32), (0, 0), .9)
    out = img * (1 - a[..., None]) + np.clip(paper, 0, 1) * a[..., None]
    return out


# ---------------------------------------------------------------------------------------------------------------

def glass_layer(img, m, b):
    """Above the syrup the glass is clear: keep its gleams and dark edges (what changes quickly), drop the room
    seen through it (what changes slowly) – the backdrop shows through there instead."""
    h, w = img.shape[:2]
    y0, y1 = b['glass'][0] * K, b['glass'][1] * K
    region = np.zeros((h, w), np.float32); region[y0:y1] = 1
    region = cv2.GaussianBlur(region, (0, 0), 1.5) * m
    region[:int(y0 - 3 * K)] = 0
    wts = cv2.GaussianBlur(m * (region > 0), (0, 0), 7 * K) + 1e-4
    slow = cv2.GaussianBlur(img * (m * (region > 0))[..., None], (0, 0), 7 * K) / wts[..., None]
    detail = (img - slow).mean(axis=2)
    return region, detail


def backdrop(tones):
    top, mid, floor = [np.array(list(bytes.fromhex(t[1:])), np.float32)[::-1] / 255 for t in tones]
    y = np.linspace(0, 1, OUT_H, dtype=np.float32)[:, None, None]
    horizon = FLOOR / OUT_H - .08
    bg = top + (mid - top) * smoothstep(0, horizon, y) + (floor - mid) * smoothstep(horizon - .06, 1, y)
    bg = np.repeat(bg, OUT_W, axis=1)
    xs = np.linspace(-1, 1, OUT_W, dtype=np.float32)[None, :, None]
    return bg * (1 - .05 * xs ** 2)                             # a soft vignette left and right


def compose(ml, kind, tones):
    b = BOTTLES[ml]
    src = cv2.imread(str(SRC / b['src']))
    src = cv2.fastNlMeansDenoisingColored(src, None, 3, 3, 7, 21)
    img = cv2.resize(src, None, fx=K, fy=K, interpolation=cv2.INTER_LANCZOS4).astype(np.float32) / 255
    blur = cv2.GaussianBlur(img, (0, 0), 1.2)
    img = np.clip(img + .45 * (img - blur), 0, 1)               # a little crispness back after enlarging
    m = mask_of(b['outline'](), img.shape[:2])
    region, detail = glass_layer(img, m, b)

    lab = cv2.imread(str(LABELS / f'{kind}.png'))
    img = (label_tall if b['label']['shape'] == 'cylinder' else label_flask)(img, lab, b['label'])

    # to the picture's scale: the bottle's height, standing on the floor line, centred
    s = b['height'] / ((b['base'] - b['top']) * K)
    img = cv2.resize(img, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    m = cv2.resize(m, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    region = cv2.resize(region, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    detail = cv2.resize(detail, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    ox = int(round(OUT_W / 2 - b['cx'] * K * s)); oy = int(round(FLOOR - b['base'] * K * s))

    def put(a):
        canvas = np.zeros((OUT_H, OUT_W) + a.shape[2:], np.float32)
        h, w = a.shape[:2]
        canvas[oy:oy + h, ox:ox + w] = a[:OUT_H - oy, :OUT_W - ox]
        return canvas
    I, M, G, D = put(img), put(m), put(region), put(detail)

    bg = backdrop(tones)
    # shadows: a tight dark line where the glass touches, a soft pool round it leaning away from the light (which
    # comes from the front left), warmed on that side where the light has passed through the syrup
    # the footprint: the base's own ellipse on the floor (a cylinder touches all round, not only at its front)
    fx, fy, fa, fb = [v * K * s for v in b['foot']]
    fx += ox; fy += oy; bx, bw = fx, 2 * fa
    contact = np.zeros((OUT_H, OUT_W), np.float32)
    cv2.ellipse(contact, (int(fx), int(fy)), (int(fa * 1.02), int(fb * 1.12 + 3)), 0, 0, 360, 1, -1)
    contact = cv2.GaussianBlur(contact, (0, 0), 3)
    pool = np.zeros_like(contact); cv2.ellipse(pool, (int(fx + fa * .25), int(fy + 4)), (int(fa * 1.6), int(fb * 1.3 + 22)), 0, 0, 360, 1, -1)
    pool = cv2.GaussianBlur(pool, (0, 0), 24)
    lean = np.zeros_like(contact); cv2.ellipse(lean, (int(fx + fa * 1.3), int(fy - 4)), (int(fa * 1.5), int(fb + 12)), -4, 0, 360, 1, -1)
    lean = cv2.GaussianBlur(lean, (0, 0), 30)
    bg = bg * (1 - (.5 * contact + .3 * pool + .16 * lean))[..., None]
    glow = cv2.GaussianBlur(contact * (np.arange(OUT_W)[None, :] > bx), (0, 0), 16)
    bg = bg + glow[..., None] * np.array([.02, .06, .14], np.float32) * .6     # BGR: the syrup's warm light

    # the clear glass: the backdrop seen through it, a touch darker towards its edges, with its own gleams
    rows = np.where(G.max(axis=1) > 0)[0]
    edge = np.zeros_like(G)
    for y in rows:
        xs_ = np.where(M[y] > .5)[0]
        if len(xs_) < 2: continue
        c, hw = (xs_.max() + xs_.min()) / 2, (xs_.max() - xs_.min()) / 2
        edge[y] = np.clip(np.abs(np.arange(OUT_W) - c) / max(hw, 1), 0, 1)
    T = .9 - .38 * edge ** 5
    seen = bg * T[..., None] + np.clip(D, 0, None)[..., None] * 1.05 + np.clip(D, None, 0)[..., None] * .7
    seen = seen * np.array([.99, .995, .985], np.float32)                     # glass is never quite neutral
    bottle = I * (1 - G[..., None]) + seen * G[..., None]
    out = bg * (1 - M[..., None]) + bottle * M[..., None]

    shop = ROOT / 'assets' / 'shop'; shop.mkdir(parents=True, exist_ok=True)
    name = f'{FILES[kind]}-{ml}'
    png = HERE / 'out' / f'{name}.png'; png.parent.mkdir(exist_ok=True)
    cv2.imwrite(str(png), np.clip(out * 255 + .5, 0, 255).astype(np.uint8))
    subprocess.run(['cwebp', '-quiet', '-q', '86', '-sharp_yuv', str(png), '-o', str(shop / f'{name}.webp')], check=True)

    # the cut-out alone, for small places (the menu button): tight round the bottle, glass half clear
    alpha = M * (1 - G * .55)
    # colour where it is clear set to black (premultiplied), or Safari shows the room's colour round it under a filter
    rgba = np.dstack([(I * (1 - G[..., None]) + (.92 + D[..., None]) * G[..., None]) * (alpha[..., None] > .004), alpha])
    ys_, xs_ = np.nonzero(M > .02)
    crop = rgba[ys_.min():ys_.max() + 1, xs_.min():xs_.max() + 1]
    crop = cv2.resize(crop, None, fx=.5, fy=.5, interpolation=cv2.INTER_AREA)
    cut = HERE / 'out' / f'{name}-cut.png'
    cv2.imwrite(str(cut), np.clip(crop * 255 + .5, 0, 255).astype(np.uint8))
    (ROOT / 'assets' / 'bottle').mkdir(exist_ok=True)
    subprocess.run(['cwebp', '-quiet', '-q', '88', '-alpha_q', '100', str(cut), '-o',
                    str(ROOT / 'assets' / 'bottle' / f'{name}.webp')], check=True)
    print(kind, ml, 'scale', round(s, 3))


FILES = {'original': 'original', 'cozy': 'cozy-spice'}   # label → product id (the pictures are named after it)

# the backdrop of each kind: warm paper, a little deeper towards the floor
TONES = {
    'original': ['#F3E2CB', '#EBD2B3', '#DDBC97'],
    'cozy': ['#EEE5D1', '#E3D6BB', '#D2C19F'],
}
if __name__ == '__main__':
    for kind in TONES:
        for ml in (200, 500):
            compose(ml, kind, TONES[kind])
