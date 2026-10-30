# The pot's frames (rendered by render.mjs, see there) cut to what they hold, packed six to a row into one sheet,
# and where the pot's lip is in each frame (0–1 of the frame), for the syrup's line on the page.
#   _dev/venv/bin/python _build/pour/pack.py <frames dir>  →  sheet.png there, _build/pour/meta.json
#   cwebp -q 86 -sharp_yuv -m 6 <frames dir>/sheet.png -o assets/pour/pot.webp
import cv2, glob, json, pathlib, sys
import numpy as np

d = sys.argv[1]
fs = sorted(glob.glob(f'{d}/f*.png')); lips = json.load(open(f'{d}/lips.json'))
bg = np.array([183, 211, 230]); S = cv2.imread(fs[0]).shape[0]
x0 = y0 = 10**9; x1 = y1 = 0
for f in fs:
    m = np.abs(cv2.imread(f).astype(int) - bg).sum(2) > 6
    ys, xs = np.where(m); x0, y0, x1, y1 = min(x0, xs.min()), min(y0, ys.min()), max(x1, xs.max()), max(y1, ys.max())
pad = 14; x0, y0, x1, y1 = max(0, x0 - pad), max(0, y0 - pad), min(S, x1 + pad), min(S, y1 + pad)
W = 440; H = round(W * (y1 - y0) / (x1 - x0))      # twice a 220 px pot on screen
frames = [cv2.resize(cv2.imread(f)[y0:y1, x0:x1], (W, H), interpolation=cv2.INTER_AREA) for f in fs]
cols = 6; rows = -(-len(frames) // cols)
sheet = np.full((rows * H, cols * W, 3), (183, 211, 230), np.uint8)
for i, fr in enumerate(frames): sheet[(i // cols) * H:(i // cols + 1) * H, (i % cols) * W:(i % cols + 1) * W] = fr
cv2.imwrite(f'{d}/sheet.png', sheet)
out = [[round(float((lx * S - x0) / (x1 - x0)), 4), round(float((ly * S - y0) / (y1 - y0)), 4), p] for lx, ly, p in lips]
meta = {'n': len(frames), 'cols': cols, 'w': W // 2, 'h': H // 2, 'pour': next(i for i, l in enumerate(lips) if l[2]), 'lips': out}
(pathlib.Path(__file__).parent / 'meta.json').write_text(json.dumps(meta))
print('frame', W, H, 'sheet', sheet.shape, 'pour from', meta['pour'])
