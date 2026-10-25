#!/bin/zsh
# The shop's studio shots: bundles shots.js, renders each kind and size in headless Chrome (the preview server
# on :5191 must be running), and saves them, halved for smooth edges, as assets/shop/<kind>-<ml>.webp.
set -e
cd "${0:A:h}/../.."
ESBUILD=${ESBUILD:-$HOME/ClaudeC/onyx-site/node_modules/.bin/esbuild}
"$ESBUILD" _build/hero3d/shots.js --bundle --format=esm --target=es2020 \
  --alias:three=./_build/vendor/three/three.module.min.js --outfile=_build/hero3d/shots.bundle.js --log-level=warning
TMP=$(mktemp -d)
node _build/hero3d/shots.mjs "$TMP"
mkdir -p assets/shop
for f in "$TMP"/*.png; do
  n=${f:t:r}
  ffmpeg -v error -y -i "$f" -vf scale=1000:1250:flags=lanczos "$TMP/$n-s.png"
  cwebp -quiet -q 88 "$TMP/$n-s.png" -o "assets/shop/$n.webp"
  echo "assets/shop/$n.webp $(stat -f %z assets/shop/$n.webp) B"
done
cp "$TMP"/*.png "${SHOTS_KEEP:-$TMP}/" 2>/dev/null || true
