# The plant's layout, written the way it is seen: positions relative to the hero cherry on screen (its centre is
# (0, 0), its half width HRX_S px, upright), angles on screen (0 = right, 90 = down). Converted here into the plate's
# own pixels (the mirrored branch photo), which compose.html, bake.mjs and the page use.
import json, math, sys
HERO = (883.11, 481.39); HRX = 457.7; TH = -22.59943          # plate → screen turn with the cherry upright
HRX_S = 150.0                                                  # the cherry's half width this layout is drawn at
K = HRX_S / HRX
def to_plate(sx, sy):
    a = math.radians(-TH); x, y = sx / K, sy / K
    return HERO[0] + x * math.cos(a) - y * math.sin(a), HERO[1] + x * math.sin(a) + y * math.cos(a)
def to_screen(px, py):
    a = math.radians(TH); x, y = px - HERO[0], py - HERO[1]
    return (x * math.cos(a) - y * math.sin(a)) * K, (x * math.sin(a) + y * math.cos(a)) * K
# each picture: natural size, its base point (where it is attached) and its base→tip axis, in its own pixels
PICS = {
 'blatt-1':      dict(size=(1958, 3580), base=(980, 0), tip=(1000, 3580)),
 'blatt-2':      dict(size=(712, 1288), base=(110, 1280), tip=(700, 10)),
 'blatt-3':      dict(size=(816, 1062), base=(60, 10), tip=(430, 1060)),
 'blatt-4':      dict(size=(1671, 1259), base=(10, 60), tip=(1600, 1200)),
 'blatt-paar-1': dict(size=(1489, 1455), base=(744, 0), tip=(744, 1455)),
}
def leaf(name, base, angle, length, z=0, flip=False):
    P = PICS[name]; (W, H), (bx, by), (tx, ty) = P['size'], P['base'], P['tip']
    if flip: bx, tx = W - bx, W - tx
    ai = math.degrees(math.atan2(ty - by, tx - bx)); li = math.hypot(tx - bx, ty - by)
    s = length / li; rot = angle - ai                            # screen px per picture px, turn on screen
    ox, oy = (bx - W / 2) * s, (by - H / 2) * s                   # base relative to the picture's centre, scaled
    r = math.radians(rot); cx = base[0] - (ox * math.cos(r) - oy * math.sin(r)); cy = base[1] - (ox * math.sin(r) + oy * math.cos(r))
    px, py = to_plate(cx, cy)
    return dict(src=f'src/{name}.png', x=round(px, 1), y=round(py, 1), w=round(W * s / K, 1), rot=round(rot - TH, 2), z=z, flip=flip)
def fruit(name, centre, width, rot=0, z=2, flip=False):
    W, H = {'kirsche-extra-1': (1123, 1150), 'kirsche-extra-2': (821, 885), 'kirsche-extra-3': (901, 1176)}[name]
    px, py = to_plate(*centre)
    return dict(src=f'src/{name}.png', x=round(px, 1), y=round(py, 1), w=round(width / K, 1), rot=round(rot - TH, 2), z=z, flip=flip)
# landmarks of the branch photo, on screen
NODE = to_screen(4992 - 4420, 1391)        # where the hero's stalk meets the branch
TIP = to_screen(0, 1480)                    # the branch's cut end (mirrored: the left end)
if __name__ == '__main__':
    print('node', [round(v) for v in NODE], 'tip', [round(v) for v in TIP], file=sys.stderr)
