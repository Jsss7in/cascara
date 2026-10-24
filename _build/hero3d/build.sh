#!/bin/zsh
# Bundles the 3D opening into assets/hero3d.js: three.js (vendored in _build/vendor/three, MIT) trimmed to what is used.
#   zsh _build/hero3d/build.sh        (esbuild from ~/ClaudeC/onyx-site/node_modules)
set -e
cd "${0:A:h}/../.."
ESBUILD=${ESBUILD:-$HOME/ClaudeC/onyx-site/node_modules/.bin/esbuild}
"$ESBUILD" _build/hero3d/page.js --bundle --format=esm --minify --target=es2020,safari15 \
  --alias:three=./_build/vendor/three/three.module.min.js \
  --legal-comments=none --banner:js="/* Cascarup 3D opening. three.js © 2010-2025 three.js authors, MIT licence. */" \
  --outfile=assets/hero3d.js
ls -la assets/hero3d.js | awk '{print "assets/hero3d.js", $5, "B"}'
gzip -c assets/hero3d.js | wc -c | awk '{print "gzip", $1, "B"}'
