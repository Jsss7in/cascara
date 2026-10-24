// Cascarup – the opening in 3D: a coffee cherry comes apart layer by layer, the beans leave for the roaster,
// the skin stays, dries into cascara, breaks, and ends up as syrup in the bottle.
// Built into assets/hero3d.js by _build/hero3d/build.sh (three.js is bundled and trimmed to what is used).
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, Group, Mesh, Color, Vector3,
  SphereGeometry, LatheGeometry, PlaneGeometry, CircleGeometry, TorusGeometry, BoxGeometry, BufferGeometry,
  BufferAttribute, CylinderGeometry, MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, DoubleSide,
  BackSide, DirectionalLight, HemisphereLight, CanvasTexture, SRGBColorSpace, NeutralToneMapping, Plane, Vector2,
  Object3D, RepeatWrapping,
} from 'three';

// ---------------------------------------------------------------------------------------------------------------
// small helpers
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const ease = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
const lerp = (a, b, t) => a + (b - a) * t;
const rng = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// 3D simplex noise (Gustavson), for the skin's blush and the creases once dried
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
// the cherry: a little taller than wide, the blossom crown at the bottom, a short stalk on top
const RX = 1, RY = 1.13, RZ = .96;
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
  const pos = g.attributes.position, nor = g.attributes.normal, n = pos.count;
  const unit = new Float32Array(pos.array);
  const dry = new Float32Array(n * 3), col = new Float32Array(n * 3), colDry = new Float32Array(n * 3);
  const deep = new Color('#5e0610'), red = new Color('#a80b1a'), warm = new Color('#cf3a1c'), c = new Color();
  const crease = new Color('#2c0c06'), leather = new Color('#5a1f10'), ridgeC = new Color('#8f3d1d'), cd = new Color();
  for (let i = 0; i < n; i++) {
    const x = unit[i * 3], y = unit[i * 3 + 1], z = unit[i * 3 + 2];
    // blossom end: a dimple at the bottom; the stalk end gently flattened
    const dimple = smooth(.86, 1, -y), top = Math.max(0, y - .9);
    const k = 1 - dimple * .08 - top * .5;
    const px = x * RX * k, py = y * RY + dimple * .13, pz = z * RZ * k;
    pos.setXYZ(i, px, py, pz);
    // analytic normals of the ellipsoid: no seam where the two halves meet
    const nx = x / RX, ny = y / RY, nz = z / RZ, l = Math.hypot(nx, ny, nz) || 1;
    nor.setXYZ(i, nx / l, ny / l, nz / l);
    // fresh: deep crimson with soft blushes, warmer towards the stalk
    const m = fbm(x * 2.6 + 3, y * 2.6, z * 2.6, 3);
    c.copy(red).lerp(deep, clamp(.3 - m * .55 + Math.max(0, -y) * .35)).lerp(warm, clamp((y - .5) * 1.3) * .7);
    c.multiplyScalar(MAP_GAIN);
    col.set([c.r, c.g, c.b], i * 3);
    // dried: long leathery creases, the shell shrunk and its cut edge curling outwards (a morph target)
    const ridge = 1 - Math.abs(noise3(x * 3.2 + 9, y * 2, z * 3.2));
    const w = (ridge * ridge - .5) * .08 + noise3(x * 7, y * 7, z * 7) * .01;
    const s = .76 + w;
    const curl = Math.abs(x) < .42 ? (.42 - Math.abs(x)) * .5 : 0;
    dry.set([px * s + side * curl * .4, py * s * .9, pz * s * .94], i * 3);
    cd.copy(crease).lerp(leather, smooth(.2, .7, ridge)).lerp(ridgeC, smooth(.78, 1, ridge) * .8);
    cd.multiplyScalar(MAP_GAIN * (.9 + fbm(x * 4, y * 4, z * 4, 2) * .3));
    colDry.set([cd.r, cd.g, cd.b], i * 3);
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.setAttribute('colorDry', new BufferAttribute(colDry, 3));
  g.morphAttributes.position = [new BufferAttribute(dry, 3)];
  const dg = new BufferGeometry(); dg.setIndex(g.index); dg.setAttribute('position', new BufferAttribute(dry, 3)); dg.computeVertexNormals();
  g.morphAttributes.normal = [dg.attributes.normal];
  g.userData.unit = unit;
  return g;
}

// the skin's material: its colour turns from fresh to dried with one uniform (the dried colours are baked per vertex)
function skinMaterial(map) {
  const mat = new MeshPhysicalMaterial({
    vertexColors: true, map, roughness: .32, clearcoat: 1, clearcoatRoughness: .12,
    sheen: .25, sheenColor: new Color('#ff9b8a'), sheenRoughness: .5, side: DoubleSide,
  });
  const uDry = { value: 0 };
  mat.userData.dry = uDry;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uDry = uDry;
    sh.vertexShader = 'attribute vec3 colorDry;\nuniform float uDry;\n' +
      sh.vertexShader.replace('#include <color_vertex>', '#include <color_vertex>\n\tvColor = mix( vColor, colorDry, uDry );');
  };
  mat.customProgramCacheKey = () => 'cascarup-skin';
  return mat;
}

// the dried shell, broken into shards: every triangle goes to the nearest of a few seeds on the outer surface
function shardsOf(geo, side, count, seed) {
  const unit = geo.userData.unit, dry = geo.morphAttributes.position[0].array;
  const colDry = geo.attributes.colorDry.array, uv = geo.attributes.uv.array, idx = geo.index.array;
  const r = rng(seed), seeds = [];
  for (let i = 0; i < count; i++) {
    const y = 1 - 2 * ((i + .5 + (r() - .5) * .6) / count), rr = Math.sqrt(Math.max(0, 1 - y * y)), a = i * 2.39996 + r();
    seeds.push([side * Math.abs(rr * Math.cos(a)) + side * .15, y, rr * Math.sin(a)]);
  }
  const buckets = seeds.map(() => []);
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
    const cx = (unit[a] + unit[b] + unit[c]) / 3, cy = (unit[a + 1] + unit[b + 1] + unit[c + 1]) / 3, cz = (unit[a + 2] + unit[b + 2] + unit[c + 2]) / 3;
    // a little noise in the distance makes the cracks wander instead of running straight
    const wob = noise3(cx * 5, cy * 5, cz * 5) * .12;
    let best = 0, bd = Infinity;
    for (let s = 0; s < seeds.length; s++) {
      const d = (cx - seeds[s][0]) ** 2 + (cy - seeds[s][1]) ** 2 + (cz - seeds[s][2]) ** 2 + wob * (s % 2 ? 1 : -1);
      if (d < bd) { bd = d; best = s; }
    }
    buckets[best].push(idx[t], idx[t + 1], idx[t + 2]);
  }
  return buckets.filter((b) => b.length > 30).map((tri) => {
    const n = tri.length, P = new Float32Array(n * 3), C = new Float32Array(n * 3), U = new Float32Array(n * 2);
    const ctr = new Vector3();
    for (let i = 0; i < n; i++) { const v = tri[i]; ctr.x += dry[v * 3]; ctr.y += dry[v * 3 + 1]; ctr.z += dry[v * 3 + 2]; }
    ctr.divideScalar(n);
    for (let i = 0; i < n; i++) {
      const v = tri[i];
      P.set([dry[v * 3] - ctr.x, dry[v * 3 + 1] - ctr.y, dry[v * 3 + 2] - ctr.z], i * 3);
      C.set([colDry[v * 3], colDry[v * 3 + 1], colDry[v * 3 + 2]], i * 3);
      U.set([uv[v * 2], uv[v * 2 + 1]], i * 2);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(P, 3));
    g.setAttribute('color', new BufferAttribute(C, 3));
    g.setAttribute('uv', new BufferAttribute(U, 2));
    g.computeVertexNormals();
    return { geometry: g, centre: ctr };
  });
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
  // a green coffee bean: domed on the outside, flat towards its twin, with the winding crease and its silverskin
  const g = new SphereGeometry(1, 72, 54);
  const p = g.attributes.position, n = p.count, col = new Float32Array(n * 3);
  const jade = new Color('#8e9a80'), silver = new Color('#5d634f'), c = new Color();
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
    c.copy(jade).lerp(silver, groove).multiplyScalar(1 + noise3(x * 9, y * 9, z * 9) * .06);
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
export function createHero(canvas, { onFrame } = {}) {
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
  // the parchment: matte paper
  const parchMat = new MeshPhysicalMaterial({ color: '#efe4cc', roughness: .95, side: DoubleSide, transparent: true });
  const beanMat = new MeshPhysicalMaterial({ vertexColors: true, roughness: .65 });
  const shardMat = new MeshPhysicalMaterial({ vertexColors: true, map: speckle, roughness: .82, sheen: .2, sheenColor: new Color('#b27353'), side: DoubleSide });
  const dropMat = new MeshPhysicalMaterial({ color: '#fff4f0', roughness: 0, clearcoat: 1, transparent: true, opacity: .3, specularIntensity: 1 });

  // per side: the skin half (with its flesh, cut edge, dew and the shards it will break into), pulp, parchment, bean
  const sides = [-1, 1].map((side) => {
    const half = new Group();
    const geo = skinHalf(side);
    const skin = new Mesh(geo, skinMaterial(speckle)); skin.morphTargetInfluences = [0];
    const flesh = new Mesh(geo, fleshMat); flesh.morphTargetInfluences = [0]; flesh.scale.setScalar(.965);
    const cut = new Mesh(cutRing(side, .955), cutMat);
    const drops = new Group();
    for (let i = 0; i < 14; i++) {
      const u = ((i * 47) % 97) / 97, w = ((i * 61) % 89) / 89;
      const th = .5 + u * 1.8, ph = (side > 0 ? -Math.PI / 2 : Math.PI / 2) + (w - .5) * 2.4;
      const dir = new Vector3(Math.sin(th) * Math.sin(ph) * RX, Math.cos(th) * RY, Math.sin(th) * Math.cos(ph) * RZ);
      if (side * dir.x < .05) continue;
      const d = new Mesh(new SphereGeometry(.026 + ((i * 7) % 5) * .01, 14, 10), dropMat);
      d.position.copy(dir).multiplyScalar(1.004); d.scale.set(1, .78, 1); drops.add(d);
    }
    const shardGroup = new Group();
    const shards = shardsOf(geo, side, 9, side > 0 ? 11 : 23).map(({ geometry, centre }, i) => {
      const mesh = new Mesh(geometry, shardMat);
      mesh.position.copy(centre); shardGroup.add(mesh);
      const r = rng(i * 31 + (side > 0 ? 7 : 3));
      return { mesh, centre: centre.clone(), out: centre.clone().normalize(), spin: new Vector3(r() - .5, r() - .5, r() - .5).multiplyScalar(5), delay: r() };
    });
    shardGroup.visible = false;
    half.add(skin, flesh, cut, drops, shardGroup);
    const pulp = new Mesh(new SphereGeometry(1, 72, 54, side > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI), pulpMat);
    pulp.scale.set(RX * .8, RY * .86, RZ * .8);
    const parch = new Mesh(parchmentGeometry(side), parchMat);
    const bean = new Mesh(beanGeometry(side), beanMat);
    cherry.add(half, pulp, parch, bean);
    return { side, half, skin, flesh, cut, drops, shardGroup, shards, pulp, parch, bean };
  });

  // stalk and blossom crown
  const woody = new MeshStandardMaterial({ color: '#5d5230', roughness: .8 });
  const stalk = new Mesh(new CylinderGeometry(.05, .085, .2, 16), woody);
  stalk.position.y = RY + .06; stalk.rotation.z = -.15; cherry.add(stalk);
  const crown = new Mesh(new TorusGeometry(.17, .05, 14, 40), new MeshStandardMaterial({ color: '#3b1d12', roughness: .85 }));
  crown.position.y = -RY + .115; crown.rotation.x = Math.PI / 2; crown.scale.set(1, 1, .7); cherry.add(crown);
  const navel = new Mesh(new CircleGeometry(.12, 24), new MeshStandardMaterial({ color: '#2a120b', roughness: .9, side: DoubleSide }));
  navel.position.y = -RY + .12; navel.rotation.x = Math.PI / 2; cherry.add(navel);

  // the bottle and the syrup rising in it
  const bottle = new Group(); world.add(bottle);
  const glass = new Mesh(lathe(BOTTLE), new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .03, transmission: 1, thickness: .3, ior: 1.5, clearcoat: 1, clearcoatRoughness: .02,
    attenuationColor: new Color('#e4ebe2'), attenuationDistance: 2.5, transparent: true, side: DoubleSide, depthWrite: false,
  }));
  const fill = new Plane(new Vector3(0, -1, 0), 0);
  const syrupMat = new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .05, transmission: 1, thickness: 1.1, ior: 1.45,
    attenuationColor: new Color('#7a2a0e'), attenuationDistance: .55, clearcoat: 1, clippingPlanes: [fill],
  });
  const syrup = new Mesh(lathe(BOTTLE.slice(0, 10), .035), syrupMat);
  const surface = new Mesh(new CircleGeometry(1, 72), new MeshPhysicalMaterial({ color: '#6e2309', roughness: .05, clearcoat: 1 }));
  surface.rotation.x = -Math.PI / 2;
  const meniscus = new Mesh(new TorusGeometry(1, .014, 8, 96), new MeshPhysicalMaterial({ color: '#c9774b', roughness: .15, transparent: true, opacity: .7 }));
  meniscus.rotation.x = Math.PI / 2;
  const cap = new Mesh(capGeometry(), new MeshPhysicalMaterial({ color: '#9C4B23', roughness: .55, clearcoat: .2 }));
  const labelMat = new MeshPhysicalMaterial({ map: labelTexture(), color: '#ece6dc', roughness: .65, side: DoubleSide, transparent: true, opacity: 0 });
  const label = new Mesh(new CylinderGeometry(.628, .628, .42, 96, 1, true, -Math.PI * .4, Math.PI * .8), labelMat);
  label.position.y = .6;
  const bottleShadow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }));
  bottleShadow.rotation.x = -Math.PI / 2; bottleShadow.position.y = .004; bottleShadow.scale.set(2.2, 1.6, 1);
  bottle.add(bottleShadow, syrup, surface, meniscus, glass, label, cap);
  document.fonts?.load('700 100px DynaPuff').then(() => { labelMat.map = labelTexture(); labelMat.needsUpdate = true; });

  // the still life at the end: a fresh cherry rolls in beside the bottle
  const fresh = new Group();
  const freshMat = skinMaterial(speckle);
  for (const s of sides) { const m = new Mesh(s.skin.geometry, freshMat); m.morphTargetInfluences = [0]; fresh.add(m); }
  const fStalk = new Mesh(stalk.geometry, woody); fStalk.position.y = RY + .06; fStalk.rotation.z = -.15; fresh.add(fStalk);
  const fCrown = crown.clone(); fresh.add(fCrown);
  fresh.scale.setScalar(.36); world.add(fresh);
  const freshShadow = new Mesh(new PlaneGeometry(1, 1), bottleShadow.material.clone());
  freshShadow.rotation.x = -Math.PI / 2; world.add(freshShadow);

  // the cherry's own shadow on the table
  const shadow = new Mesh(new PlaneGeometry(1, 1), bottleShadow.material.clone());
  shadow.rotation.x = -Math.PI / 2; world.add(shadow);

  // anchors for the anatomy labels, on the layers of the right-hand half
  const right = sides[1];
  const anchors = { haut: new Object3D(), fleisch: new Object3D(), pergament: new Object3D(), bohne: new Object3D() };
  right.half.add(anchors.haut); anchors.haut.position.set(.62, .7, .34);
  right.pulp.add(anchors.fleisch); anchors.fleisch.position.set(.58, -.5, .4);
  right.parch.add(anchors.pergament); anchors.pergament.position.set(.3, .6, .3);
  right.bean.add(anchors.bohne); anchors.bohne.position.set(.28, -.42, .22);

  // -------------------------------------------------------------------------------------------------------------
  let width = 1, height = 1, wide = true, target = 0, progress = 0, last = performance.now(), running = true, time = 0;
  const v = new Vector3(), w3 = new Vector3();

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

  const FLOOR = -1.45, BOTTLE_S = 1.15;
  const keepers = [[-1.02, .42], [-.66, .78], [-1.32, -.12]];   // three shards stay on the table (x, z)

  function apply(p, dt) {
    time += dt;
    // the timeline – one move at a time
    const intro = 1 - smooth(.06, .14, p);
    const explode = ease(.12, .3, p);                 // the layers come apart
    const open = smooth(.1, .22, p) * (1 - smooth(.38, .44, p));  // the camera frames the exploded view
    const beansGo = ease(.38, .46, p);                // the beans leave for the roaster
    const layersGo = smooth(.39, .45, p);             // pulp and parchment go with them
    const together = ease(.41, .49, p);               // the halves close in behind them
    const dryC = smooth(.5, .57, p);                  // colour and gloss turn
    const dryS = ease(.55, .64, p);                   // then the skin wrinkles and shrinks
    const lift = ease(.6, .7, p);                     // the dried halves rise above the bottle coming in
    const bottleIn = ease(.6, .72, p);
    const crack = smooth(.7, .735, p);                // the shells break
    const fall = smooth(.73, .85, p);                 // the shards fall into the bottle
    const level = smooth(.74, .86, p);
    const capOn = ease(.84, .9, p);
    const labelIn = smooth(.86, .92, p);
    const rollIn = ease(.86, .94, p);
    const fallPhase = smooth(.58, .66, p) * (1 - smooth(.86, .93, p));
    const endPhase = smooth(.86, .94, p);

    // camera
    if (wide) aim(-.2 * (1 - open), 0, 1, lerp(lerp(0, .7, fallPhase), -.2, endPhase));
    else aim(0, lerp(lerp(-.21, -.03, open), -.12, fallPhase), 1 + .3 * open + .1 * fallPhase,
      lerp(lerp(0, .7, fallPhase), -.2, endPhase));

    // the whole fruit floats and turns a little; for the exploded view a three-quarter view (on phones diagonal)
    world.rotation.y = -.35 * explode * (1 - together);
    world.rotation.x = lerp(.05, .13, explode) * (1 - together);
    const tilt = wide ? 0 : .85 * smooth(.1, .2, p) * (1 - smooth(.44, .52, p));
    cherry.rotation.set(0, intro * Math.sin(time * .35) * .55, tilt);
    cherry.position.y = Math.sin(time * 1.1) * .05 * (1 - lift) + lerp(0, 1.9, lift);

    const OFF = { skin: 1.9, pulp: 1.3, parch: .8, bean: .3 };
    for (const s of sides) {
      const k = s.side * explode;
      s.half.position.x = lerp(k * OFF.skin, s.side * .45, together);
      s.half.rotation.y = s.side * explode * .35 * (1 - together);
      s.skin.morphTargetInfluences[0] = s.flesh.morphTargetInfluences[0] = dryS;
      const mat = s.skin.material;
      mat.userData.dry.value = dryC;
      mat.roughness = lerp(.32, .7, dryC);
      mat.clearcoat = lerp(1, .12, dryC);
      mat.sheen = lerp(.25, .1, dryC);
      // the flesh inside goes as the skin dries around it
      const fleshGo = smooth(0, .7, dryC);
      s.flesh.material.opacity = s.cut.material.opacity = 1 - fleshGo;
      s.flesh.visible = s.cut.visible = explode > .002 && fleshGo < .99;
      s.drops.visible = explode < .2;
      // the inner layers stand at their own distances, then leave with the beans
      s.pulp.position.x = k * OFF.pulp * (1 - together);
      s.pulp.material.opacity = 1 - layersGo;
      s.pulp.visible = layersGo < .99;
      s.parch.position.x = k * OFF.parch * (1 - together);
      s.parch.material.opacity = 1 - layersGo;
      s.parch.visible = layersGo < .99;
      s.bean.position.set(k * OFF.bean + beansGo * (3.1 + s.side * .5), beansGo * 3.3, -beansGo * 1.6);
      s.bean.rotation.set(beansGo * 2 * s.side, beansGo * 3, explode * s.side * .2);
      s.bean.visible = beansGo < .995;

      // the shells break: the shards take the skin's place exactly, crack open, and fall
      const broken = p >= .7;
      s.skin.visible = !broken;
      s.shardGroup.visible = broken;
      if (broken) {
        bottle.updateMatrixWorld(); s.half.updateMatrixWorld();
        const mouth = s.half.worldToLocal(w3.set(0, bottle.position.y + MOUTH * BOTTLE_S + .05, 0));
        s.shards.forEach((sh, i) => {
          const keep = s.side < 0 && i < keepers.length ? keepers[i] : null;
          const f = clamp((fall - sh.delay * .5) / .5);
          v.copy(sh.centre).addScaledVector(sh.out, .1 * crack);
          const tgt = keep ? s.half.worldToLocal(new Vector3(keep[0], FLOOR + .06, keep[1])) : mouth;
          const t = ease(0, 1, f);
          sh.mesh.position.copy(v).lerp(tgt, t);
          sh.mesh.position.y += Math.sin(t * Math.PI) * (keep ? .5 : .35) - (keep ? 0 : smooth(.82, 1, f) * .6);
          sh.mesh.rotation.set(sh.spin.x * (crack * .08 + f), sh.spin.y * (crack * .08 + f), sh.spin.z * (crack * .05 + f * .7));
          const sc = keep ? lerp(1, .62, t) : 1 - .9 * smooth(.45, .9, f);
          sh.mesh.scale.setScalar(sc);
          sh.mesh.visible = keep ? true : f < .985;
        });
      }
    }
    stalk.visible = crown.visible = navel.visible = explode < .02;

    // the bottle comes up, fills, gets its cap and its label; at the end it barely sways
    bottle.visible = bottleIn > .001;
    bottle.position.y = lerp(-7.5, FLOOR, bottleIn);
    bottle.scale.setScalar(BOTTLE_S);
    bottle.rotation.y = Math.sin(time * .45) * .1 * smooth(.9, 1, p);
    const y = lerp(.06, 1.5, level);
    fill.constant = bottle.position.y + y * BOTTLE_S;          // clip the syrup at its level (world space)
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

    // a fresh cherry rolls in and stops beside the bottle
    fresh.visible = rollIn > .001;
    const fx = lerp(4.2, 1.2, rollIn), r = .36 * RX;
    fresh.position.set(fx, FLOOR + .36 * RY + .035, .35);
    fresh.rotation.set(0, .4, -(fx - 1.2) / r);
    freshShadow.visible = fresh.visible;
    freshShadow.position.set(fx, FLOOR + .003, .35);
    freshShadow.scale.setScalar(.95);
    freshShadow.material.opacity = .7 * rollIn;

    // the cherry's shadow, until the halves rise
    const cherryFloor = -RY - .55;
    shadow.position.set(0, cherryFloor, 0);
    shadow.scale.set(2.5 * (1 + explode * .6 * (1 - together)), 1.7, 1);
    shadow.material.opacity = .6 * (1 - explode * .35 * (1 - together)) * (1 - smooth(.58, .64, p));
    shadow.visible = p < .64;
  }

  function labels() {
    // screen positions of the anatomy labels, so the page can draw them as crisp HTML
    const out = {};
    for (const [k, o] of Object.entries(anchors)) {
      o.getWorldPosition(v); v.project(camera);
      out[k] = { x: (v.x * .5 + .5) * width, y: (-v.y * .5 + .5) * height };
    }
    return out;
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
      onFrame?.(progress, labels);
    } catch (err) { lastError = String(err && err.stack || err).slice(0, 300); }
    requestAnimationFrame(frame);
  }

  return {
    resize: layout,
    set background(css) { scene.background.set(css); },
    set progress(p) { target = clamp(p); },
    jump(p) { target = progress = clamp(p); apply(progress, 0); renderer.render(scene, camera); onFrame?.(progress, labels); },
    start() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); } },
    stop() { running = false; },
    begin() { last = performance.now(); requestAnimationFrame(frame); },
    labels,
    renderer,
    state: () => ({ frames, running, target: +target.toFixed(3), progress: +progress.toFixed(3), lastError }),
  };
}
