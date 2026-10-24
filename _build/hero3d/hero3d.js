// Cascarup – the opening in 3D: a real coffee cherry (a photograph, projected onto the model) opens layer by
// layer, the beans leave for the roaster, the skin dries into cascara, and the cascara becomes the syrup that
// pours into the bottle.
// Built into assets/hero3d.js by _build/hero3d/build.sh (three.js is bundled and trimmed to what is used).
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, Group, Mesh, Color, Vector3,
  SphereGeometry, LatheGeometry, PlaneGeometry, CircleGeometry, TorusGeometry, BoxGeometry, BufferGeometry,
  BufferAttribute, CylinderGeometry, MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, DoubleSide,
  BackSide, DirectionalLight, HemisphereLight, CanvasTexture, SRGBColorSpace, NeutralToneMapping, Plane, Vector2,
  Object3D, RepeatWrapping, TextureLoader,
} from 'three';

// ---------------------------------------------------------------------------------------------------------------
// small helpers
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const ease = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
const easeT = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a, b, t) => a + (b - a) * t;
const rng = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// 3D simplex noise (Gustavson), for the skin's blush and the soft folds once dried
const G3 = 1 / 6, F3 = 1 / 3;
const grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
const perm = new Uint8Array(512);
{ const r = rng(1234567), p = new Uint8Array(256); for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]; }
function noise3(x, y, z) {
  const s = (x + y + z) * F3, i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
  const t = (i + j + k) * G3, x0 = x - i + t, y0 = y - j + t, z0 = z - k + t;
  let i1, j1, k1, i2, j2, k2;
  if (x0 >= y0) { if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; } else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; } else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; } }
  else { if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; } else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; } else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; } }
  const c = [[x0, y0, z0, 0, 0, 0], [x0 - i1 + G3, y0 - j1 + G3, z0 - k1 + G3, i1, j1, k1],
             [x0 - i2 + 2 * G3, y0 - j2 + 2 * G3, z0 - k2 + 2 * G3, i2, j2, k2], [x0 - 1 + 3 * G3, y0 - 1 + 3 * G3, z0 - 1 + 3 * G3, 1, 1, 1]];
  let n = 0; const ii = i & 255, jj = j & 255, kk = k & 255;
  for (const [cx, cy, cz, di, dj, dk] of c) {
    let tt = .6 - cx * cx - cy * cy - cz * cz;
    if (tt > 0) { const g = grad3[perm[ii + di + perm[jj + dj + perm[kk + dk]]] % 12]; tt *= tt; n += tt * tt * (g[0] * cx + g[1] * cy + g[2] * cz); }
  }
  return 32 * n;
}
const fbm = (x, y, z, o = 4) => { let a = .5, f = 1, n = 0; for (let i = 0; i < o; i++) { n += a * noise3(x * f, y * f, z * f); a *= .5; f *= 2; } return n; };

// ---------------------------------------------------------------------------------------------------------------
// light: a small photo studio, baked into the environment map – warm cream walls, one large softbox above left,
// two tall strips at the sides and dark flags, so the fruit gets one broad sheen and the glass dark edges
function studio() {
  const s = new Scene();
  s.add(new Mesh(new BoxGeometry(24, 16, 24), new MeshBasicMaterial({ color: new Color(.5, .43, .35), side: BackSide })));
  const panel = (w, h, rgb, pos) => {
    const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(...rgb), side: DoubleSide }));
    m.position.set(...pos); m.lookAt(0, 0, 0); s.add(m);
  };
  panel(8, 6, [7, 6.6, 6], [-5, 7, 5]);           // the key: a large softbox, upper left, in front
  panel(1.4, 10, [3.2, 3.1, 3], [-9, 0, -1]);      // strip, left
  panel(1.4, 10, [2.4, 2.3, 2.2], [9, .5, -2]);    // strip, right
  panel(7, 12, [.03, .025, .02], [-8.5, 0, 6.5]);  // dark flags in front at both sides
  panel(7, 12, [.03, .025, .02], [8.5, 0, 6.5]);
  panel(16, 6, [.9, .8, .68], [0, -7.5, 0]);       // the cream table bounces a little warm light up
  return s;
}

// ---------------------------------------------------------------------------------------------------------------
// the cherry: its proportions follow the photograph (set before the model is built)
let RX = 1, RY = 1.13, RZ = .96;
const MAP_GAIN = 1 / .745;       // the speckle map's base is .745 (linear); colours are lifted to match

function skinTexture() {
  // fine pale lenticels and a few darker freckles over a flat base; multiplied with the vertex colours
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const x = c.getContext('2d'), r = rng(77);
  x.fillStyle = 'rgb(224,224,224)'; x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 5200; i++) {
    const px = r() * 512, py = 20 + r() * 472, rad = .35 + r() * .9;
    x.fillStyle = `rgba(255,${238 + r() * 17 | 0},${222 + r() * 30 | 0},${(.3 + r() * .45).toFixed(2)})`;
    x.beginPath(); x.ellipse(px, py, rad, rad * (.8 + r() * .4), 0, 0, 6.283); x.fill();
  }
  for (let i = 0; i < 900; i++) {
    const px = r() * 512, py = r() * 512, rad = .5 + r() * 1.4;
    x.fillStyle = `rgba(150,120,120,${(.12 + r() * .18).toFixed(2)})`;
    x.beginPath(); x.arc(px, py, rad, 0, 6.283); x.fill();
  }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = 8;
  return t;
}

function skinHalf(side) {
  // half an ellipsoid shell, cut along the plane in which the two beans face each other
  const g = new SphereGeometry(1, 160, 120, side > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI);
  const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv, n = pos.count;
  const unit = new Float32Array(pos.array);
  const dry = new Float32Array(n * 3), col = new Float32Array(n * 3), colDry = new Float32Array(n * 3);
  const photoUV = new Float32Array(n * 2);
  const deep = new Color('#5e0610'), red = new Color('#a80b1a'), warm = new Color('#cf3a1c'), c = new Color();
  // dried cascara: a deep, warm mahogany with a satin sheen, a little darker in the folds
  const fold = new Color('#3d100b'), body = new Color('#6a1f14'), crest = new Color('#9c4024'), cd = new Color();
  for (let i = 0; i < n; i++) {
    const x = unit[i * 3], y = unit[i * 3 + 1], z = unit[i * 3 + 2];
    // blossom end: a soft dimple at the bottom; the stalk end gently flattened
    const dimple = smooth(.86, 1, -y), top = Math.max(0, y - .9);
    const k = 1 - dimple * .08 - top * .5;
    const px = x * RX * k, py = y * RY + dimple * .13, pz = z * RZ * k;
    pos.setXYZ(i, px, py, pz);
    // analytic normals of the ellipsoid: no seam where the two halves meet
    const nx = x / RX, ny = y / RY, nz = z / RZ, l = Math.hypot(nx, ny, nz) || 1;
    nor.setXYZ(i, nx / l, ny / l, nz / l);
    // the photograph, projected from the front: its fruit fills the unit square of the texture
    photoUV[i * 2] = .5 + px / (2 * RX) * .965; photoUV[i * 2 + 1] = .5 + py / (2 * RY) * .965;
    // fresh (without the photograph): deep crimson with soft blushes, warmer towards the stalk
    const m = fbm(x * 2.6 + 3, y * 2.6, z * 2.6, 3);
    c.copy(red).lerp(deep, clamp(.3 - m * .55 + Math.max(0, -y) * .35)).lerp(warm, clamp((y - .5) * 1.3) * .7);
    c.multiplyScalar(MAP_GAIN);
    col.set([c.r, c.g, c.b], i * 3);
    // dried: the shell shrinks a little and gathers into a few soft, broad folds; the cut edge curls outwards
    const f1 = noise3(x * 1.8 + 9, y * 1.2, z * 1.8), f2 = noise3(x * 3.6, y * 3, z * 3.6);
    const w = f1 * .05 + f2 * .012;
    const s = .86 + w;
    const curl = Math.abs(x) < .42 ? (.42 - Math.abs(x)) * .55 : 0;
    dry.set([px * s + side * curl * .38, py * s * .94, pz * s * .95], i * 3);
    cd.copy(fold).lerp(body, smooth(-.6, .1, f1)).lerp(crest, smooth(.2, .9, f1) * .75);
    cd.multiplyScalar(MAP_GAIN * (.94 + noise3(x * 6, y * 6, z * 6) * .08));
    colDry.set([cd.r, cd.g, cd.b], i * 3);
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.setAttribute('colorDry', new BufferAttribute(colDry, 3));
  g.setAttribute('photoUV', new BufferAttribute(photoUV, 2));
  g.morphAttributes.position = [new BufferAttribute(dry, 3)];
  const dg = new BufferGeometry(); dg.setIndex(g.index); dg.setAttribute('position', new BufferAttribute(dry, 3)); dg.computeVertexNormals();
  g.morphAttributes.normal = [dg.attributes.normal];
  g.userData.unit = unit;
  return g;
}

// The skin's material: fresh it shows the photograph (or, without one, the painted crimson), dried it turns to
// the baked mahogany – both by one uniform, so the change is one smooth blend.
function skinMaterial(speckle) {
  const mat = new MeshPhysicalMaterial({
    vertexColors: true, map: speckle, roughness: .34, clearcoat: .9, clearcoatRoughness: .14,
    sheen: .25, sheenColor: new Color('#ff9b8a'), sheenRoughness: .5, side: DoubleSide,
  });
  const uDry = { value: 0 }, uPhoto = { value: null }, uUsePhoto = { value: 0 }, uGlow = { value: 0 };
  mat.userData = { dry: uDry, photo: uPhoto, usePhoto: uUsePhoto, glow: uGlow };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { uDry, uPhoto, uUsePhoto, uGlow });
    sh.vertexShader = 'attribute vec3 colorDry;\nattribute vec2 photoUV;\nuniform float uDry;\nvarying vec2 vPhotoUV;\n' +
      sh.vertexShader.replace('#include <color_vertex>', '#include <color_vertex>\n\tvPhotoUV = photoUV;\n\tvColor = mix( vColor, colorDry, uDry );');
    sh.fragmentShader = 'uniform sampler2D uPhoto;\nuniform float uUsePhoto;\nuniform float uDry;\nuniform float uGlow;\nvarying vec2 vPhotoUV;\n' +
      sh.fragmentShader
        .replace('#include <map_fragment>', `#include <map_fragment>
  // the photograph replaces the painted skin while it is fresh; it is in sRGB, the rest of the shader is linear
  vec3 photoLin = pow( texture2D( uPhoto, vPhotoUV ).rgb, vec3( 2.2 ) );
  float usePhoto = uUsePhoto * ( 1.0 - uDry );
  diffuseColor.rgb = mix( diffuseColor.rgb, photoLin * ( 1.0 - uGlow ), usePhoto );`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  totalEmissiveRadiance += photoLin * uGlow * usePhoto;`);
  };
  mat.customProgramCacheKey = () => 'cascarup-skin-2';
  return mat;
}

function cutRing(side, inner) {
  // the cut face of the skin: a thin elliptical band between the outer skin and the flesh
  const seg = 160, g = new PlaneGeometry(1, 1, seg, 1);
  const p = g.attributes.position;
  for (let i = 0; i <= seg; i++) {
    const a = -Math.PI / 2 + (i / seg) * Math.PI * 2;
    for (let rr = 0; rr < 2; rr++) {
      const f = rr === 0 ? 1 : inner, idx = rr * (seg + 1) + i;
      const y = Math.sin(a), z = Math.cos(a);
      const dimple = smooth(.86, 1, -y), top = Math.max(0, y - .9), k = 1 - dimple * .08 - top * .5;
      p.setXYZ(idx, side * .002, (y * RY + dimple * .13) * f, z * RZ * k * f);
    }
  }
  g.computeVertexNormals();
  return g;
}

function beanGeometry(side) {
  // a coffee bean as everyone knows it: roasted brown, domed outside, flat towards its twin, the winding crease
  const g = new SphereGeometry(1, 72, 54);
  const p = g.attributes.position, n = p.count, col = new Float32Array(n * 3);
  const roast = new Color('#6b3b1f'), light = new Color('#8a5430'), crease = new Color('#2a1309'), c = new Color();
  for (let i = 0; i < n; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const flat = side * x < 0;
    let nx = x * .5, ny = y * .8, nz = z * .62, groove = 0;
    if (flat) {
      nx *= .12;
      const s = .08 * Math.sin(y * 3.4);
      groove = Math.exp(-Math.pow((nz - s) / .06, 2)) * (1 - Math.pow(Math.abs(y), 6));
      nx += side * groove * .12;
    }
    nx += noise3(x * 4, y * 4, z * 4) * .006;
    p.setXYZ(i, nx, ny, nz);
    c.copy(roast).lerp(light, smooth(-.2, .8, noise3(x * 3, y * 3, z * 3))).lerp(crease, groove * .9);
    col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}

function parchmentGeometry(side) {
  // the parchment: a thin papery cup around the outer dome of the bean
  const g = new SphereGeometry(1, 48, 36, side > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), wr = 1 + noise3(x * 6, y * 6, z * 6) * .03;
    p.setXYZ(i, x * .58 * wr, y * .9 * wr, z * .7 * wr);
  }
  g.computeVertexNormals();
  return g;
}

// the bottle: a round syrup bottle, its profile turned on the lathe – the mouth is open, the lip rolls inwards
const BOTTLE = [[0, 0], [.52, 0], [.6, .03], [.62, .1], [.62, 1.12], [.6, 1.24], [.5, 1.4], [.3, 1.56], [.215, 1.66],
  [.21, 1.92], [.235, 1.95], [.235, 2.02], [.17, 2.02], [.17, 1.75]];
const MOUTH = 2.02;
function lathe(points, inset = 0, segs = 96) {
  return new LatheGeometry(points.map(([r, y]) => new Vector2(Math.max(0, r - inset), y)), segs);
}
function radiusAt(y, inset) {
  for (let i = 1; i < 10; i++) {
    const [r0, y0] = BOTTLE[i - 1], [r1, y1] = BOTTLE[i];
    if (y >= y0 && y <= y1 && y1 > y0) return Math.max(0, lerp(r0, r1, (y - y0) / (y1 - y0)) - inset);
  }
  return 0;
}
function capGeometry() {
  // a screw cap: a soft bevel on top, knurled sides
  const g = lathe([[0, .29], [.2, .29], [.245, .275], [.262, .245], [.262, .03], [.25, 0], [.22, 0]], 0, 144);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    if (y > .04 && y < .235) {
      const a = Math.atan2(z, x), k = 1 + .018 * Math.max(-.6, Math.min(.6, Math.cos(a * 48) * 2));
      p.setX(i, x * k); p.setZ(i, z * k);
    }
  }
  g.computeVertexNormals();
  return g;
}
function streamGeometry() {
  // a pour of syrup: slightly thicker where it leaves the cascara, thinner as it falls; unit height, top at 0
  const g = new CylinderGeometry(.058, .034, 1, 28, 24, true);
  g.translate(0, -.5, 0);
  return g;
}

function labelTexture() {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 560;
  const x = c.getContext('2d');
  x.fillStyle = '#F7F0E4'; x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = '#9C4B23'; x.fillRect(0, 34, c.width, 6); x.fillRect(0, c.height - 40, c.width, 6);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillStyle = '#9C4B23';
  x.font = '700 190px DynaPuff, "Arial Rounded MT Bold", sans-serif';
  x.fillText('Cascarup', c.width / 2, c.height * .44);
  x.fillStyle = '#3a2116';
  x.font = '400 38px Jost, Futura, sans-serif';
  x.letterSpacing = '12px';
  x.fillText('SIRUP AUS DER KAFFEEKIRSCHE', c.width / 2, c.height * .74);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 8;
  return t;
}

function shadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d'), g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(58,33,22,.6)'); g.addColorStop(.35, 'rgba(58,33,22,.3)'); g.addColorStop(1, 'rgba(58,33,22,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  return new CanvasTexture(c);
}

// ---------------------------------------------------------------------------------------------------------------
// The timeline, in scroll progress 0–1. CHAPTERS are where the page comes to rest (page.js glides between them).
export const CHAPTERS = [0, .28, .45, .61, .8, 1];

export function createHero(canvas, { onFrame, photo } = {}) {
  // the model takes the photograph's proportions, so the photo and the model are one fruit
  if (photo) { RX = 1; RY = photo.aspect || RY; RZ = .94; }
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.localClippingEnabled = true;

  const scene = new Scene();
  scene.background = new Color('#E6D3B7');
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio(), .03).texture;
  scene.environmentIntensity = .9;

  const camera = new PerspectiveCamera(24, 1, .1, 100);
  camera.position.set(0, 0, 12.6);

  const key = new DirectionalLight('#fff1df', 1.5); key.position.set(-4, 6, 6); scene.add(key);
  const rim = new DirectionalLight('#ffe9da', 1.3); rim.position.set(5, 3, -6); scene.add(rim);
  scene.add(new HemisphereLight('#fff6ea', '#9a6a48', .25));

  const world = new Group(); scene.add(world);
  const cherry = new Group(); world.add(cherry);
  const speckle = skinTexture();

  // materials
  const fleshMat = new MeshPhysicalMaterial({ color: '#f0d9a2', roughness: .3, clearcoat: .8, clearcoatRoughness: .2, side: BackSide, transparent: true });
  const cutMat = new MeshPhysicalMaterial({ color: '#e2ab82', roughness: .4, side: DoubleSide, transparent: true });
  // the pulp: wet, translucent, honey-coloured
  const pulpMat = new MeshPhysicalMaterial({
    color: '#f6e2a8', roughness: .14, transmission: .65, thickness: .45, ior: 1.4,
    attenuationColor: new Color('#e3b765'), attenuationDistance: .5, clearcoat: .7, clearcoatRoughness: .1,
    side: DoubleSide, transparent: true,
  });
  const parchMat = new MeshPhysicalMaterial({ color: '#efe4cc', roughness: .95, side: DoubleSide, transparent: true });
  const beanMat = new MeshPhysicalMaterial({ vertexColors: true, roughness: .42, clearcoat: .3, clearcoatRoughness: .35 });

  // per side: the skin half (with its flesh, cut edge and the pieces it will break into), pulp, parchment, bean
  const skinMats = [];
  const sides = [-1, 1].map((side) => {
    const half = new Group();
    const geo = skinHalf(side);
    const mat = skinMaterial(speckle); skinMats.push(mat);
    const skin = new Mesh(geo, mat); skin.morphTargetInfluences = [0];
    const flesh = new Mesh(geo, fleshMat); flesh.morphTargetInfluences = [0]; flesh.scale.setScalar(.965);
    const cut = new Mesh(cutRing(side, .955), cutMat);
    half.add(skin, flesh, cut);
    const pulp = new Mesh(new SphereGeometry(1, 72, 54, side > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI), pulpMat);
    const parch = new Mesh(parchmentGeometry(side), parchMat);
    const bean = new Mesh(beanGeometry(side), beanMat);
    cherry.add(half, pulp, parch, bean);
    return { side, half, skin, flesh, cut, pulp, parch, bean };
  });

  // stalk and blossom crown (without a photograph; the photograph has its own)
  const woody = new MeshStandardMaterial({ color: '#5d5230', roughness: .8 });
  const stalk = new Mesh(new CylinderGeometry(.05, .085, .2, 16), woody);
  stalk.position.y = RY + .06; stalk.rotation.z = -.15; cherry.add(stalk);
  const crown = new Mesh(new TorusGeometry(.17, .05, 14, 40), new MeshStandardMaterial({ color: '#3b1d12', roughness: .85 }));
  crown.position.y = -RY + .115; crown.rotation.x = Math.PI / 2; crown.scale.set(1, 1, .7); cherry.add(crown);
  const navel = new Mesh(new CircleGeometry(.12, 24), new MeshStandardMaterial({ color: '#2a120b', roughness: .9, side: DoubleSide }));
  navel.position.y = -RY + .12; navel.rotation.x = Math.PI / 2; cherry.add(navel);

  // the bottle, the syrup rising in it and the pour that fills it
  const bottle = new Group(); world.add(bottle);
  const glass = new Mesh(lathe(BOTTLE), new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .03, transmission: 1, thickness: .3, ior: 1.5, clearcoat: 1, clearcoatRoughness: .02,
    attenuationColor: new Color('#e4ebe2'), attenuationDistance: 2.5, transparent: true, side: DoubleSide, depthWrite: false,
  }));
  const fill = new Plane(new Vector3(0, -1, 0), 0);
  const syrupMat = new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .05, transmission: 1, thickness: 1.1, ior: 1.45,
    attenuationColor: new Color('#8f3612'), attenuationDistance: .95, clearcoat: 1, clippingPlanes: [fill],
  });
  const syrup = new Mesh(lathe(BOTTLE.slice(0, 10), .035), syrupMat);
  const surface = new Mesh(new CircleGeometry(1, 72), new MeshPhysicalMaterial({ color: '#7d2e0f', roughness: .05, clearcoat: 1 }));
  surface.rotation.x = -Math.PI / 2;
  const meniscus = new Mesh(new TorusGeometry(1, .01, 8, 96), new MeshPhysicalMaterial({ color: '#a85a34', roughness: .15, transparent: true, opacity: .35 }));
  meniscus.rotation.x = Math.PI / 2;
  const cap = new Mesh(capGeometry(), new MeshPhysicalMaterial({ color: '#9C4B23', roughness: .55, clearcoat: .2 }));
  const labelMat = new MeshPhysicalMaterial({ map: labelTexture(), color: '#ece6dc', roughness: .65, side: DoubleSide, transparent: true, opacity: 0 });
  const label = new Mesh(new CylinderGeometry(.628, .628, .42, 96, 1, true, -Math.PI * .4, Math.PI * .8), labelMat);
  label.position.y = .6;
  const bottleShadow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }));
  bottleShadow.rotation.x = -Math.PI / 2; bottleShadow.position.y = .004; bottleShadow.scale.set(2.2, 1.6, 1);
  bottle.add(bottleShadow, syrup, surface, meniscus, glass, label, cap);
  document.fonts?.load('700 100px DynaPuff').then(() => { labelMat.map = labelTexture(); labelMat.needsUpdate = true; });
  // the pour: glossy, dark amber, catching the light
  const stream = new Mesh(streamGeometry(), new MeshPhysicalMaterial({
    color: '#a8481f', roughness: .03, clearcoat: 1, clearcoatRoughness: .02, transmission: .55, thickness: .12, ior: 1.45,
    attenuationColor: new Color('#7a260a'), attenuationDistance: .14, emissive: new Color('#3a1004'),
  }));
  // the pour's own rings, so it can swell and narrow as the syrup runs down it
  const streamPos = stream.geometry.attributes.position, streamBase = new Float32Array(streamPos.array);
  stream.visible = false; world.add(stream);
  const ripple = new Mesh(new TorusGeometry(1, .012, 8, 64), new MeshPhysicalMaterial({ color: '#d08a5c', roughness: .2, transparent: true, opacity: .6 }));
  ripple.rotation.x = Math.PI / 2; ripple.visible = false; world.add(ripple);

  // the still life: two small dried halves – cascara – on the table beside the bottle
  const dried = sides.map((sd, i) => {
    const m = new Mesh(sd.skin.geometry, skinMaterial(speckle));
    m.morphTargetInfluences = [1]; m.material.userData.dry.value = 1;
    m.material.roughness = .58; m.material.clearcoat = .16; m.material.clearcoatRoughness = .4; m.material.sheen = .4; m.material.sheenColor.set('#c07a5c');
    m.scale.setScalar(.3); m.visible = false; world.add(m);
    return { m, x: i ? -1.05 : -1.5, z: i ? .55 : .05, ry: i ? 2.4 : -.6 };
  });
  // the still life at the end: a fresh cherry rolls in beside the bottle
  const fresh = new Group();
  const freshMat = skinMaterial(speckle); skinMats.push(freshMat);
  for (const s of sides) { const m = new Mesh(s.skin.geometry, freshMat); m.morphTargetInfluences = [0]; fresh.add(m); }
  const fStalk = new Mesh(stalk.geometry, woody); fStalk.position.y = RY + .06; fStalk.rotation.z = -.15; fresh.add(fStalk);
  const fCrown = crown.clone(); fresh.add(fCrown);
  fresh.scale.setScalar(.36); world.add(fresh);
  const freshShadow = new Mesh(new PlaneGeometry(1, 1), bottleShadow.material.clone());
  freshShadow.rotation.x = -Math.PI / 2; world.add(freshShadow);

  // the cherry's own shadow on the table
  const shadow = new Mesh(new PlaneGeometry(1, 1), bottleShadow.material.clone());
  shadow.rotation.x = -Math.PI / 2; world.add(shadow);

  // the photograph: projected onto the skin (fresh) – the page shows the same picture over the model at first
  let hasPhoto = false;
  if (photo && photo.texture) {
    new TextureLoader().load(photo.texture, (tex) => {
      tex.anisotropy = 8;
      for (const m of skinMats) { m.userData.photo.value = tex; m.userData.usePhoto.value = 1; m.userData.glow.value = .72; }
      hasPhoto = true;
      fStalk.visible = fCrown.visible = false;
    });
  }

  // anchors for the anatomy labels, on the layers of the right-hand half
  const right = sides[1];
  const anchors = { haut: new Object3D(), fleisch: new Object3D(), pergament: new Object3D(), bohne: new Object3D() };
  right.half.add(anchors.haut); anchors.haut.position.set(.62, .7, .34);
  right.pulp.add(anchors.fleisch); anchors.fleisch.position.set(.58, -.5, .4);
  right.parch.add(anchors.pergament); anchors.pergament.position.set(.3, .6, .3);
  right.bean.add(anchors.bohne); anchors.bohne.position.set(.28, -.42, .22);

  // -------------------------------------------------------------------------------------------------------------
  let width = 1, height = 1, wide = true, target = 0, progress = 0, last = performance.now(), running = true, time = 0;
  const v = new Vector3();

  function layout(w, h) {
    width = w; height = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    wide = w / h > 1.05;
    camera.fov = wide ? 24 : 33;
    camera.updateProjectionMatrix();
    // labels above and below on wide screens; on phones (diagonal, names to the left) spread along the diagonal
    anchors.fleisch.position.set(.58, wide ? -.5 : .55, .4);
    anchors.pergament.position.set(.3, wide ? .6 : .45, .3);
  }
  // where the object sits on screen: right of the words on wide screens, below them on narrow ones
  function aim(ox, oy, zoom, y) {
    camera.clearViewOffset();
    camera.setViewOffset(width, height, width * ox, height * oy, width, height);
    camera.position.set(0, y, 12.6 * zoom);
    camera.updateProjectionMatrix();
  }

  const FLOOR = -1.45, BOTTLE_S = 1.15, MOUTH_Y = FLOOR + MOUTH * BOTTLE_S;
  const FUNNEL = new Vector3(0, MOUTH_Y + 1.05, 0);              // where the cascara becomes the pour
  const OFF = { skin: 1.9, pulp: 1.3, parch: .8, bean: .3 };

  function apply(p, dt) {
    time += dt;
    // the timeline: one move at a time
    const explode = ease(.1, .24, p);                 // the layers come apart
    const open = smooth(.08, .2, p) * (1 - smooth(.33, .41, p));   // the camera frames the exploded view
    const beansGo = smooth(.3, .43, p);               // the beans fly off to the roaster
    const layersGo = smooth(.31, .42, p);             // pulp and parchment melt away
    const together = ease(.34, .45, p);               // the halves close in behind them
    const dryC = smooth(.47, .58, p);                 // the colour turns to cascara…
    const dryS = ease(.48, .6, p);                    // …and the shell gathers into soft folds
    const lift = ease(.61, .7, p);                    // the dried halves rise, the bottle comes in below
    const bottleIn = ease(.61, .71, p);
    const gather = smooth(.68, .8, p);                // the dried halves gather above the bottle…
    const pourIn = smooth(.71, .745, p);              // …and become the pour
    const pourOut = smooth(.835, .865, p);
    const level = smooth(.735, .865, p);
    const capOn = ease(.87, .92, p);
    const labelIn = smooth(.89, .94, p);
    const rollIn = ease(.89, .97, p);
    const pourCam = smooth(.6, .7, p) * (1 - smooth(.87, .95, p));
    const endPhase = smooth(.87, .95, p);

    // camera: right of the words, centred for the exploded view, up a little for the pour, down for the still life
    const camY = lerp(lerp(0, .55, pourCam), -.2, endPhase);
    if (wide) aim(-.2 * (1 - open), 0, 1, camY);
    else aim(0, lerp(lerp(-.21, -.03, open), -.12, pourCam), 1 + .3 * open + .1 * pourCam, camY);

    // the whole fruit floats; for the exploded view a three-quarter view (on phones a diagonal)
    world.rotation.y = -.35 * explode * (1 - together);
    world.rotation.x = lerp(.0, .13, explode) * (1 - together);
    const tilt = wide ? 0 : .85 * smooth(.1, .2, p) * (1 - smooth(.38, .46, p));
    // with the photograph the fruit faces the camera exactly, as the picture does; without it, it turns a little
    const turn = hasPhoto ? 0 : (1 - smooth(.06, .14, p)) * Math.sin(time * .35) * .55;
    cherry.rotation.set(0, turn, tilt);
    cherry.position.y = Math.sin(time * 1.1) * .05 * (1 - lift) + lerp(0, 1.85, lift);

    for (const s of sides) {
      const k = s.side * explode;
      s.half.position.x = lerp(k * OFF.skin, s.side * .42, together);
      s.half.rotation.y = s.side * explode * .35 * (1 - together);
      s.skin.morphTargetInfluences[0] = s.flesh.morphTargetInfluences[0] = dryS;
      const mat = s.skin.material;
      mat.userData.dry.value = dryC;
      mat.roughness = lerp(.34, .58, dryC);
      mat.clearcoat = lerp(.9, .16, dryC);
      mat.clearcoatRoughness = lerp(.14, .4, dryC);
      mat.sheen = lerp(.25, .4, dryC);
      mat.sheenColor.set(dryC > .5 ? '#c07a5c' : '#ff9b8a');
      // the flesh inside goes as the skin dries around it
      const fleshGo = smooth(0, .7, dryC);
      s.flesh.material.opacity = s.cut.material.opacity = 1 - fleshGo;
      s.flesh.visible = s.cut.visible = explode > .002 && fleshGo < .99;
      // pulp and parchment stand at their own distances, then melt away towards the middle
      const melt = 1 - layersGo;
      s.pulp.position.x = k * OFF.pulp * (1 - together) * melt;
      s.pulp.scale.set(RX * .8, RY * .86, RZ * .8).multiplyScalar(lerp(.55, 1, melt));
      s.pulp.material.opacity = melt;
      s.pulp.visible = layersGo < .995 && explode > .002;
      s.parch.position.x = k * OFF.parch * (1 - together) * melt;
      s.parch.scale.setScalar(lerp(.55, 1, melt));
      s.parch.material.opacity = melt;
      s.parch.visible = layersGo < .995 && explode > .002;
      // the beans: an arc up and away to the right, turning as they go, until they have left the picture
      const b = beansGo, bt = b * b;
      s.bean.position.set(k * OFF.bean + bt * (6 + s.side * .5), bt * 4.2 + Math.sin(b * Math.PI) * .5 + (s.side > 0 ? .1 : -.1) * b, -bt * 2.2);
      s.bean.rotation.set(b * 2.6 * s.side, b * 3.4, explode * s.side * .2 + b * 1.5);
      s.bean.visible = explode > .002 && b < .999;

      // the dried halves gather above the bottle and melt into the pour: they turn, close in and shrink into it
      // the dried halves gather above the bottle and pour themselves out: they close in, shrink to a small pair
      // the syrup runs from, and are used up as the pour ends
      if (gather > 0) {
        const t = easeT(gather), g = lerp(1, .34, t) * (1 - smooth(.825, .865, p));
        s.half.position.x = lerp(s.side * .42, s.side * .16, t);
        s.half.position.y = lerp(0, FUNNEL.y - cherry.position.y + .14, t * t);
        s.half.rotation.set(t * .55 * s.side, t * 1.4 * s.side + Math.sin(time * .8) * .12 * t, t * .9 * s.side);
        s.half.scale.setScalar(Math.max(g, .001));
      } else { s.half.position.y = 0; s.half.rotation.x = s.half.rotation.z = 0; s.half.scale.setScalar(1); }
      s.half.visible = p < .865;
    }
    stalk.visible = crown.visible = navel.visible = !hasPhoto && explode < .02;

    // the bottle comes up, fills from the pour, gets its cap and its label; at the end it barely sways
    bottle.visible = bottleIn > .001;
    bottle.position.y = lerp(-7.5, FLOOR, bottleIn);
    bottle.scale.setScalar(BOTTLE_S);
    bottle.rotation.y = Math.sin(time * .45) * .1 * smooth(.9, 1, p);
    const y = lerp(.06, 1.5, level);
    const surfaceY = bottle.position.y + y * BOTTLE_S;
    fill.constant = surfaceY;                                     // clip the syrup at its level (world space)
    surface.visible = meniscus.visible = level > .01;
    surface.position.y = meniscus.position.y = y;
    const rr = radiusAt(y, .035);
    surface.scale.setScalar(rr); meniscus.scale.set(rr, rr, 1);
    cap.visible = capOn > .001;
    cap.position.y = lerp(2.75, MOUTH - .05, capOn);
    cap.rotation.y = (1 - capOn) * 4;
    labelMat.opacity = labelIn;
    label.visible = labelIn > .001;
    bottleShadow.material.opacity = .8 * bottleIn;

    // the pour: its head falls from the funnel to the syrup, its tail follows when the cascara is used up
    const top = lerp(FUNNEL.y, surfaceY, pourOut), bottom = lerp(FUNNEL.y, surfaceY, pourIn);
    const len = top - bottom;
    stream.visible = len > .01;
    if (stream.visible) {
      // gentle beads that travel down the pour: it reads as running syrup, not as a rod
      for (let i = 0; i < streamPos.count; i++) {
        const y = streamBase[i * 3 + 1], k = 1 + .16 * Math.sin(y * len * 26 + time * 13) * (.4 + .6 * -y);
        streamPos.setXYZ(i, streamBase[i * 3] * k, y, streamBase[i * 3 + 2] * k);
      }
      streamPos.needsUpdate = true;
      stream.geometry.computeVertexNormals();
      stream.position.set(Math.sin(time * 2.1) * .006, top, 0);
      stream.scale.set(1, len, 1);
    }
    ripple.visible = stream.visible && pourIn > .98;
    if (ripple.visible) {
      const rp = (time * 1.6) % 1;
      ripple.position.set(0, surfaceY + .004, 0);
      ripple.scale.setScalar(.06 + rp * .14);
      ripple.material.opacity = .55 * (1 - rp);
    }

    // the dried halves settle on the table, cut side down
    const settleIn = ease(.88, .95, p);
    dried.forEach((d, i) => {
      d.m.visible = settleIn > .001;
      d.m.position.set(d.x, FLOOR + .19 + (1 - settleIn) * (1.2 + i * .4), d.z);
      d.m.rotation.set(Math.PI / 2 * (i ? 1 : -1) * .92, d.ry + (1 - settleIn) * 1.4, 0);
    });
    // a fresh cherry rolls in and stops beside the bottle
    fresh.visible = rollIn > .001;
    const fx = lerp(4.2, 1.2, rollIn), r = .36 * RX;
    fresh.position.set(fx, FLOOR + .36 * RY + .035, .35);
    fresh.rotation.set(0, 0, -(fx - 1.2) / r);
    freshShadow.visible = fresh.visible;
    freshShadow.position.set(fx, FLOOR + .003, .35);
    freshShadow.scale.setScalar(.95);
    freshShadow.material.opacity = .7 * rollIn;

    // the cherry's shadow, until the halves rise
    shadow.position.set(0, -RY - .55, 0);
    shadow.scale.set(2.5 * (1 + explode * .6 * (1 - together)), 1.7, 1);
    shadow.material.opacity = .6 * (1 - explode * .35 * (1 - together)) * (1 - smooth(.59, .65, p));
    shadow.visible = p < .65;
  }

  function project(o, x, y, z) {
    v.set(x, y, z); o.localToWorld(v); v.project(camera);
    return { x: (v.x * .5 + .5) * width, y: (-v.y * .5 + .5) * height };
  }
  function labels() {
    // screen positions of the anatomy labels, so the page can draw them as crisp HTML
    const out = {};
    for (const [k, o] of Object.entries(anchors)) out[k] = project(o, 0, 0, 0);
    return out;
  }
  // where the whole fruit is on screen: the page lays the photograph exactly over it
  function fruitBox() {
    cherry.updateMatrixWorld();
    const c = project(cherry, 0, 0, 0), l = project(cherry, -RX, 0, 0), t = project(cherry, 0, RY, 0);
    return { x: c.x, y: c.y, rx: c.x - l.x, ry: c.y - t.y };
  }

  let frames = 0, lastError = '';
  function frame(now) {
    if (!running) return;
    frames++;
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    progress += (target - progress) * (1 - Math.pow(.0009, dt));   // a soft follow, so the scroll never jerks
    if (Math.abs(target - progress) < 1e-4) progress = target;
    try {
      apply(progress, dt);
      renderer.render(scene, camera);
      onFrame?.(progress, labels, fruitBox);
    } catch (err) { lastError = String(err && err.stack || err).slice(0, 300); }
    requestAnimationFrame(frame);
  }

  return {
    resize: layout,
    set background(css) { scene.background.set(css); },
    set progress(p) { target = clamp(p); },
    get progress() { return progress; },
    jump(p) { target = progress = clamp(p); apply(progress, 0); renderer.render(scene, camera); onFrame?.(progress, labels, fruitBox); },
    start() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); } },
    stop() { running = false; },
    begin() { last = performance.now(); requestAnimationFrame(frame); },
    labels, fruitBox,
    get photoReady() { return hasPhoto; },
    renderer,
    state: () => ({ frames, running, target: +target.toFixed(3), progress: +progress.toFixed(3), lastError }),
  };
}
