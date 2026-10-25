# The portraits come from our summary, where each sits on a light sticker rim. On the page that rim reads as a
# background round the heads, so it is taken away: from the outside in, every pixel of the rim's cream colour
# becomes transparent, up to the person. Originals: ~/ClaudeC/cascara-quellen/team/.
#   …/branch/venv/bin/python -I _build/team_rim.py
import pathlib, subprocess
import cv2, numpy as np

SRC = pathlib.Path.home() / 'ClaudeC' / 'cascara-quellen' / 'team'
OUT = pathlib.Path(__file__).resolve().parent.parent / 'assets' / 'team'
RIM = np.array([152, 188, 222], np.float32)          # BGR, measured on the rims

for f in sorted(SRC.glob('*.webp')):
    a = cv2.imread(str(f), cv2.IMREAD_UNCHANGED)
    h, w = a.shape[:2]
    K = 4                                            # worked on at four times the size, for a smooth new edge
    big = cv2.resize(a, (w * K, h * K), interpolation=cv2.INTER_CUBIC).astype(np.float32)
    col, al = big[..., :3], big[..., 3] / 255
    rimlike = (np.linalg.norm(col - RIM, axis=2) < 30) | (al < .5)
    # grow the outside through rim-coloured pixels only (so a cream cheek inside the face is never touched)
    outside = (al < .5).astype(np.uint8)
    outside[-2:] |= rimlike[-2:].astype(np.uint8)     # the rim runs along the picture's foot too
    for _ in range(5 * K):                           # the rim is about four pixels wide: never deeper than that
        grown = cv2.dilate(outside, np.ones((3, 3), np.uint8)) & rimlike.astype(np.uint8)
        if (grown == outside).all(): break
        outside = grown
    keep = cv2.GaussianBlur((1 - outside).astype(np.float32), (0, 0), .8 * K)
    keep = np.clip((keep - .35) / .3, 0, 1) * al
    # the photo's own edge colour, pulled in from inside, so no cream fringe is left
    core = cv2.erode((keep > .98).astype(np.uint8), np.ones((3, 3), np.uint8))
    fill = cv2.inpaint(np.clip(col, 0, 255).astype(np.uint8), (1 - core).astype(np.uint8), 4, cv2.INPAINT_TELEA).astype(np.float32)
    col = np.where((keep < .98)[..., None], fill, col)
    res = np.dstack([col, keep * 255])
    res = cv2.resize(res, (w, h), interpolation=cv2.INTER_AREA)
    png = OUT / (f.stem + '.png')
    cv2.imwrite(str(png), np.clip(res, 0, 255).astype(np.uint8))
    subprocess.run(['cwebp', '-quiet', '-q', '92', '-alpha_q', '100', str(png), '-o', str(OUT / f.name)], check=True)
    png.unlink()
    print(f.name, 'rim removed')
