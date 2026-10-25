# The props beside our bottles in the shop pictures, cut out of photographs (Wikimedia Commons, credited in the
# Impressum): star anise and cinnamon from photos on white. Writes _build/bottle/props/*.png (with alpha).
#   …/branch/venv/bin/python -I _build/bottle/props.py
import pathlib
import cv2, numpy as np

SRC = pathlib.Path.home() / 'ClaudeC' / 'cascara-quellen' / 'spice'
OUT = pathlib.Path(__file__).with_name('props'); OUT.mkdir(exist_ok=True)


def cut(img, box, seed=None, radius=None):
    """The subject inside box, freed from its white ground and the grey of its own shadow there."""
    x0, y0, x1, y1 = box
    a = img[y0:y1, x0:x1].astype(np.float32)
    mx, mn = a.max(axis=2), a.min(axis=2)
    sat = (mx - mn) / np.maximum(mx, 1)
    m = ((sat > .2) | (mx < 110)).astype(np.uint8)
    if radius:   # a neighbour touching it is cut off along a circle round the subject
        yy, xx = np.mgrid[y0:y1, x0:x1]
        m[(xx - seed[0]) ** 2 + (yy - seed[1]) ** 2 > radius ** 2] = 0
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(m)
    if seed is None:
        keep = 1 + int(np.argmax(st[1:, 4]))
    else:
        keep = lab[seed[1] - y0, seed[0] - x0]
    m = (lab == keep).astype(np.uint8)
    # holes inside the subject (gaps between pods, the hollow of a quill) stay closed where they are small
    inv = 1 - m
    n2, lab2, st2, _ = cv2.connectedComponentsWithStats(inv)
    for i in range(1, n2):
        if st2[i, 4] < 900 and st2[i, 0] > 0 and st2[i, 1] > 0:
            m[lab2 == i] = 1
    alpha = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 1.0)
    alpha = np.clip((alpha - .25) / .5, 0, 1)
    # the white ground bleeds into the edge pixels: pull their colour towards the subject's own
    core = cv2.erode(m, np.ones((5, 5), np.uint8))
    fill = cv2.inpaint(a.astype(np.uint8), (1 - core).astype(np.uint8), 5, cv2.INPAINT_TELEA).astype(np.float32)
    edge = (alpha < .999) & (alpha > 0)
    a[edge] = fill[edge]
    ys, xs = np.nonzero(alpha > .02)
    rgba = np.dstack([a, alpha * 255])[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    return np.clip(rgba, 0, 255).astype(np.uint8)


anise = cv2.imread(str(SRC / 'sternanis-sanjay-acharya.jpg'))
cv2.imwrite(str(OUT / 'sternanis-1.png'), cut(anise, (1190, 140, 1600, 480), seed=(1397, 299), radius=168))
cv2.imwrite(str(OUT / 'sternanis-2.png'), cut(anise, (400, 210, 790, 500), seed=(590, 362), radius=160))
cinn = cv2.imread(str(SRC / 'zimt-luc-viatour.jpg'))
cv2.imwrite(str(OUT / 'zimt.png'), cut(cinn, (180, 150, 1740, 830)))
for f in sorted(OUT.glob('*.png')):
    print(f.name, cv2.imread(str(f), cv2.IMREAD_UNCHANGED).shape)
