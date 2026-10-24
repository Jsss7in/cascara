from layout import leaf, fruit, NODE, TIP
import json
N, T = NODE, TIP
layers = [
 leaf('blatt-1', (N[0] + 6, N[1] - 8), -58, 640, z=0),            # big glossy leaf behind, up to the right
 dict(leaf('blatt-3', (N[0] - 4, N[1] - 6), -122, 500, z=0), filter='brightness(.84) saturate(1.08) contrast(1.05)'),   # up to the left, clear of the words
 dict(leaf('blatt-2', (N[0] + 30, N[1] + 10), 32, 430, z=0), filter='brightness(.86) saturate(1.06) contrast(1.05)'),   # down to the right, under the orange cherry
 dict(leaf('blatt-paar-1', (T[0] + 10, T[1] + 2), 150, 470, z=3), filter='brightness(.9) saturate(1.05)'),   # the young pair at the branch tip
 fruit('kirsche-extra-1', (-150, 150), 250, -12, z=2),            # a ripe one peeking out behind the hero
 fruit('kirsche-extra-3', (-62, 480), 175, 8, z=2),               # a green one hanging under the branch
]
json.dump({'zweig': {'src': 'src/zweig.png'}, 'hero': '../../assets/cherry/kirsche.webp', 'layers': layers}, open('v3.json', 'w'), indent=1)
