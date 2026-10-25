from layout import leaf, fruit, NODE, TIP
import json
N, T = NODE, TIP
layers = [
 leaf('blatt-1', (N[0] + 6, N[1] - 8), -58, 640, z=0),            # big glossy leaf behind, up to the right
 dict(leaf('blatt-3', (N[0] - 4, N[1] - 6), -122, 500, z=0), filter='brightness(.84) saturate(1.08) contrast(1.05)'),   # up to the left, clear of the words
 dict(leaf('blatt-2', (N[0] + 30, N[1] + 6), 22, 400, z=0), filter='brightness(.86) saturate(1.06) contrast(1.05)'),   # down to the right, under the orange cherry
 dict(leaf('blatt-paar-1', (T[0] + 30, T[1] - 4), 204, 380, z=3), filter='brightness(.9) saturate(1.05)'),   # the young pair at the branch tip, reaching left
 fruit('kirsche-extra-1', (-150, 150), 250, -12, z=2),            # a ripe one peeking out behind the hero
 fruit('kirsche-extra-3', (-128, 392), 158, -10, z=4),            # a green one in front of the branch's cut end
]
# the mirrored kirsche.webp in the plate (its matrix in canvas order a, b, c, d, e, f), for the hole under it
HOLE = dict(src='../../assets/cherry/kirsche.webp', matrix=[0.923214043, 0.38428613, -0.38428613, 0.923214043, 655.85, -285.21], centre=[883.11, 481.39], shrink=.985)
json.dump({'zweig': {'src': 'src/zweig.png'}, 'hero': '../../assets/cherry/kirsche.webp', 'hole': HOLE, 'layers': layers}, open('v4.json', 'w'), indent=1)
