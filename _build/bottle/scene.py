# What stands around our bottles in the shop pictures: behind the Original a coffee branch, out of focus, and in
# front a coffee leaf with two cherries on the table; behind Cozy Spice a string of warm lights, out of focus, and in
# front cinnamon and star anise. All of it photographs (Wikimedia Commons, credited in the Impressum), at true size.
import pathlib
import cv2, numpy as np

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
PLANT = pathlib.Path.home() / 'ClaudeC' / 'cascara-quellen' / 'plant'
PX_PER_CM = {500: 1160 / 27, 200: 900 / 16.5}   # the bottles' heights in the picture over their real heights


def rgba(path):
    a = cv2.imread(str(path), cv2.IMREAD_UNCHANGED).astype(np.float32) / 255
    return a[..., :3].copy(), a[..., 3].copy()


def transform(col, al, width, angle=0, squash=1.):
    """Scaled to width, turned by angle (degrees, counter-clockwise), then flattened by squash (lying on the table)."""
    k = width / col.shape[1]
    col = cv2.resize(col, None, fx=k, fy=k, interpolation=cv2.INTER_AREA)
    al = cv2.resize(al, None, fx=k, fy=k, interpolation=cv2.INTER_AREA)
    if angle:
        h, w = al.shape
        R = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1)
        c, s = abs(R[0, 0]), abs(R[0, 1])
        nw, nh = int(h * s + w * c) + 2, int(h * c + w * s) + 2
        R[0, 2] += nw / 2 - w / 2; R[1, 2] += nh / 2 - h / 2
        col = cv2.warpAffine(col, R, (nw, nh), flags=cv2.INTER_LINEAR, borderValue=(0, 0, 0))
        al = cv2.warpAffine(al, R, (nw, nh), flags=cv2.INTER_LINEAR, borderValue=0)
    if squash != 1:
        col = cv2.resize(col, (col.shape[1], max(1, int(col.shape[0] * squash))), interpolation=cv2.INTER_AREA)
        al = cv2.resize(al, (al.shape[1], max(1, int(al.shape[0] * squash))), interpolation=cv2.INTER_AREA)
    return col, al


def layer(shape, col, al, cx, cy):
    """col/al centred at (cx, cy) on a canvas of shape (h, w)."""
    H, W = shape
    C = np.zeros((H, W, 3), np.float32); A = np.zeros((H, W), np.float32)
    h, w = al.shape
    x0, y0 = int(round(cx - w / 2)), int(round(cy - h / 2))
    sx0, sy0 = max(0, -x0), max(0, -y0)
    dx0, dy0 = max(0, x0), max(0, y0)
    dx1, dy1 = min(W, x0 + w), min(H, y0 + h)
    if dx1 <= dx0 or dy1 <= dy0: return C, A
    C[dy0:dy1, dx0:dx1] = col[sy0:sy0 + dy1 - dy0, sx0:sx0 + dx1 - dx0]
    A[dy0:dy1, dx0:dx1] = al[sy0:sy0 + dy1 - dy0, sx0:sx0 + dx1 - dx0]
    return C, A


def lay_down(out, col, al, cx, cy, lift=0.):
    """Put a thing on the table: a soft shadow beneath it (towards the back right, away from the light), then it."""
    C, A = layer(out.shape[:2], col, al, cx, cy)
    sh = cv2.GaussianBlur(np.roll(np.roll(A, int(6 + lift), 0), int(10 + lift), 1), (0, 0), 7 + lift)
    contact = cv2.GaussianBlur(A, (0, 0), 2.2)
    out = out * (1 - (.32 * sh + .22 * contact * (1 - A)))[..., None]
    return out * (1 - A[..., None]) + C * A[..., None]


def out_of_focus(bg, col, al, cx, cy, blur, haze):
    """Something behind the bottle: blurred by the depth of field and veiled a little by the air before it."""
    C, A = layer(bg.shape[:2], col, al, cx, cy)
    A = cv2.GaussianBlur(A, (0, 0), blur)
    C = cv2.GaussianBlur(C * A[..., None], (0, 0), blur) / np.maximum(A, 1e-4)[..., None]
    C = C * (1 - haze) + bg * haze
    return bg * (1 - A[..., None]) + C * A[..., None]


# ---------------------------------------------------------------------------------------------------------------
_plant = None


def plant():
    """Our branch from the opening (assets/plant/zweig.webp) with its cherry put back where it hangs on it."""
    global _plant
    if _plant is None:
        import json
        col, al = rgba(ROOT / 'assets' / 'plant' / 'zweig.webp')
        info = json.loads((HERE.parent / 'plant' / 'plant.json').read_text())
        ccol, cal = rgba(ROOT / 'assets' / 'cherry' / 'kirsche.webp')
        k = info['rx'] / (.4527 * ccol.shape[1])
        ccol, cal = transform(ccol, cal, ccol.shape[1] * k, angle=-info['turn'])
        C, A = layer(al.shape, ccol, cal, info['cx'], info['cy'])
        al = np.maximum(al, A)
        # the picture ends where the branch was cut: let it fade out towards its own edges
        h, w = al.shape
        fx = np.minimum(np.arange(w), w - 1 - np.arange(w)) / 140; fy = np.minimum(np.arange(h), h - 1 - np.arange(h)) / 140
        al = al * np.clip(fy, 0, 1)[:, None] * np.clip(fx, 0, 1)[None, :]
        _plant = (col * (1 - A[..., None]) + C * A[..., None], al)
    return _plant


def garland(bg, y0=150, y1=120, sag=150, n=9):
    """A string of warm lights across the top, far behind the bottle: only their soft discs of light are seen."""
    H, W = bg.shape[:2]
    xs = np.linspace(-60, W + 60, 400)
    t = (xs - xs[0]) / (xs[-1] - xs[0])
    ys = y0 + (y1 - y0) * t + sag * 4 * t * (1 - t)
    wire = np.zeros((H, W), np.float32)
    cv2.polylines(wire, [np.stack([xs, ys], 1).astype(np.int32)], False, 1, 4, cv2.LINE_AA)
    wire = cv2.GaussianBlur(wire, (0, 0), 6)
    out = bg * (1 - .2 * wire[..., None])
    glow = np.zeros((H, W), np.float32)
    rng = np.random.default_rng(5)
    for i in range(n):
        u = (i + .5) / n + rng.uniform(-.02, .02)
        x = xs[0] + u * (xs[-1] - xs[0]); y = y0 + (y1 - y0) * u + sag * 4 * u * (1 - u) + 24
        disc = np.zeros((H, W), np.float32)
        r = int(rng.uniform(30, 42))
        cv2.circle(disc, (int(x), int(y)), r, rng.uniform(.8, 1), -1, cv2.LINE_AA)
        cv2.circle(disc, (int(x), int(y)), r - 3, 1.15, 3, cv2.LINE_AA)       # a bokeh disc is a little brighter at its rim
        glow = np.maximum(glow, cv2.GaussianBlur(disc, (0, 0), 5))
    halo = cv2.GaussianBlur(glow, (0, 0), 34)
    warm = np.array([.32, .70, 1.0], np.float32)          # BGR: the amber light of a warm bulb
    out = 1 - (1 - out) * (1 - np.clip(glow * .62 + halo * .5, 0, 1)[..., None] * warm)   # screen: light only adds
    return out


def back(kind, ml, bg):
    if kind == 'original':
        col, al = plant()
        # the branch reaches into the picture from the right, its cut end beyond the edge
        col, al = transform(col, al, 1250 if ml == 500 else 1150, angle=14)
        return out_of_focus(bg, col, al, 1330, 380 if ml == 500 else 560, blur=10, haze=.46)
    return garland(bg, y0=170, y1=130, sag=150) if ml == 500 else garland(bg, y0=330, y1=290, sag=140)


def front(kind, ml, out, floor):
    cm = PX_PER_CM[ml]
    if kind == 'original':
        col, al = rgba(PLANT / 'blatt-2.png')
        col, al = transform(col, al, 12 * cm * al.shape[1] / al.shape[0], angle=-38, squash=.46)   # 12 cm long
        # lying on the table, the leaf is lit from above: a touch darker towards its far end
        g = np.linspace(.84, 1.0, col.shape[0], dtype=np.float32)[:, None, None]
        out = lay_down(out, col * g, al, 700 - 4.6 * cm, floor + .6 * cm)
        for path, d, x, y in (('kirsche-extra-1.png', 2.3, -5.3, 1.6), ('kirsche-extra-2.png', 2.1, -2.7, 2.3)):
            col, al = rgba(PLANT / path)
            col, al = transform(col, al, d * cm)
            out = lay_down(out, col, al, 700 + x * cm, floor + y * cm - d * cm * .42, lift=2)
        return out
    col, al = rgba(HERE / 'props' / 'zimt.png')
    long = 13 if ml == 500 else 11.5                      # beside the flask the sticks would run out of the picture
    col, al = transform(col, al, long * cm, angle=8, squash=.62)
    out = lay_down(out, col, al, 700 + (6.9 if ml == 500 else 6.1) * cm, floor + .5 * cm)
    for path, d, x, y, a in (('sternanis-1.png', 3.7, 4.2, 2.5, 20), ('sternanis-2.png', 3.4, 9.6 if ml == 500 else 8.6, 2.2, -35)):
        col, al = rgba(HERE / 'props' / path)
        col, al = transform(col, al, d * cm, angle=a, squash=.5)
        out = lay_down(out, col, al, 700 + x * cm, floor + y * cm)
    return out
