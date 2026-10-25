from layout import leaf, fruit, NODE, TIP
import json
N, T = NODE, TIP
layers = [
 dict(leaf('blatt-1', (N[0] + 6, N[1] - 8), -58, 640, z=0), filter='hue-rotate(-10deg) saturate(.9) brightness(.94)'),   # big glossy leaf behind, up to the right
 # (blatt-3 up to the left and blatt-2 under the orange cherry are left out: both showed only in part, as if cut off)
 dict(leaf('blatt-paar-1', (T[0] + 30, T[1] - 4), 204, 380, z=3), filter='brightness(.9) saturate(1.05)'),   # the young pair at the branch tip, reaching left
 fruit('kirsche-extra-1', (-150, 150), 250, -12, z=2),            # a ripe one peeking out behind the hero
 fruit('kirsche-extra-3', (-128, 392), 158, -10, z=4),            # a green one in front of the branch's cut end
]
# the mirrored kirsche.webp in the plate (its matrix in canvas order a, b, c, d, e, f), for the hole under it
HOLE = dict(src='../../assets/cherry/kirsche.webp', matrix=[0.923214043, 0.38428613, -0.38428613, 0.923214043, 655.85, -285.21], centre=[883.11, 481.39], shrink=.985)
# no hole under the hero cherry: the page fades the cherry and its branch in as one picture, so nothing shows through
json.dump({'zweig': {'src': 'src/zweig.png'}, 'hero': '../../assets/cherry/kirsche.webp', 'layers': layers}, open('v4.json', 'w'), indent=1)
