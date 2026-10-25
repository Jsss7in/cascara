// Cascarup – the opening in 3D: a real coffee cherry (a photograph, projected onto the model) opens layer by
// layer, the beans leave for the roaster, the skin dries into cascara, and the cascara is steeped in the hot
// water of the bottle until the water has become the syrup.
// Built into assets/hero3d.js by _build/hero3d/build.sh (three.js is bundled and trimmed to what is used).
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, Group, Mesh, Color, Vector3,
  SphereGeometry, LatheGeometry, PlaneGeometry, CircleGeometry, TorusGeometry, BoxGeometry, BufferGeometry,
  BufferAttribute, CylinderGeometry, MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, DoubleSide,
  BackSide, DirectionalLight, HemisphereLight, CanvasTexture, SRGBColorSpace, NeutralToneMapping, Plane, Vector2,
  Object3D, RepeatWrapping, TextureLoader, ShaderChunk,
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
export function studio(mx = 1) {   // mx = -1: the same studio, mirrored left to right
  const s = new Scene();
  s.add(new Mesh(new BoxGeometry(24, 16, 24), new MeshBasicMaterial({ color: new Color(.5, .43, .35), side: BackSide })));
  const panel = (w, h, rgb, pos) => {
    const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(...rgb), side: DoubleSide }));
    m.position.set(pos[0] * mx, pos[1], pos[2]); m.lookAt(0, 0, 0); s.add(m);
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
// the shop's studio shots (shots.js) build their cherries in the photograph's proportions too
export function setFruit(rx, ry, rz) { RX = rx; RY = ry; RZ = rz; }
const MAP_GAIN = 1 / .745;       // the speckle map's base is .745 (linear); colours are lifted to match

export function skinTexture() {
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

export function skinHalf(side) {
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
export function skinMaterial(speckle) {
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

// The infusion: the bottle holds hot water; where the cascara sinks through it, the colour billows out of it
// and spreads until all of it is syrup. The syrup's own attenuation (its colour in depth) is mixed per pixel
// between clear water and syrup, by a density sampled a few steps into the liquid along the view.
const INFUSE_GLSL = `
uniform float uBloom; uniform float uTime; uniform float uTop; uniform vec3 uSrc0; uniform vec3 uSrc1;
vec3 m289(vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 m289(vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 perm4(vec4 x) { return m289(((x * 34.) + 10.) * x); }
float snoise(vec3 v) {
  const vec2 C = vec2(1. / 6., 1. / 3.); const vec4 D = vec4(0., .5, 1., 2.);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1. - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = m289(i);
  vec4 p = perm4(perm4(perm4(i.z + vec4(0., i1.z, i2.z, 1.)) + i.y + vec4(0., i1.y, i2.y, 1.)) + i.x + vec4(0., i1.x, i2.x, 1.));
  vec3 ns = .142857142857 * D.wyz - D.xzx;
  vec4 j = p - 49. * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7. * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1. - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2. + 1.; vec4 s1 = floor(b1) * 2. + 1.; vec4 sh = -step(h, vec4(0.));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 nr = 1.79284291400159 - .85373472095314 * vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3));
  p0 *= nr.x; p1 *= nr.y; p2 *= nr.z; p3 *= nr.w;
  vec4 m = max(.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.); m = m * m;
  return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
// how far a point is from the path a piece of cascara took down through the water
float trail(vec3 p, vec3 s) {
  vec3 a = vec3(s.x, min(uTop, s.y + .001), s.z), ab = s - a;
  float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-4), 0., 1.);
  return length(p - (a + ab * t));
}
float steep(vec3 p) {
  float d = min(trail(p, uSrc0), trail(p, uSrc1));
  // broad, slow billows with a finer curl in them, drifting downwards as the colour sinks
  float n = snoise(p * vec3(1.5, 1.1, 1.5) + vec3(0., uTime * .09, 0.)) * .7 + snoise(p * 4.2 - vec3(0., uTime * .14, 0.)) * .3;
  float reach = mix(.02, 2.6, uBloom);
  // at first faint wisps along the paths the pieces took, then soft clouds, then all of it; never a hard edge
  float cloud = smoothstep(-.15, .95, reach - d * mix(1.8, 1., smoothstep(0., .4, uBloom)) + n * .45 * (1. - uBloom * .5));
  // the thin amber threads each piece draws behind it as it sinks
  float wisp = exp(-d * d / .03) * (.55 + .45 * n) * smoothstep(0., .04, uBloom);
  return max(cloud, wisp);
}`;
function infusing(mat) {
  const u = { uBloom: { value: 0 }, uTime: { value: 0 }, uTop: { value: 0 }, uSrc0: { value: new Vector3(0, 9, 0) },
    uSrc1: { value: new Vector3(0, 9, 0) } };
  mat.userData.infuse = u;
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\n' + INFUSE_GLSL)
      .replace('#include <transmission_fragment>', ShaderChunk.transmission_fragment.replace('material.attenuationColor = attenuationColor;', `
  {
    vec3 rd = normalize( vWorldPosition - cameraPosition );
    float dens = 0.0;
    for ( int i = 0; i < 5; i ++ ) dens += steep( vWorldPosition + rd * ( .07 + float( i ) * .16 ) );
    dens /= 5.0;
    // clear water absorbs nothing; where the cascara has steeped, the same amber absorbs ever more
    material.attenuationColor = attenuationColor;
    material.attenuationDistance = attenuationDistance / max( dens, .002 );   // absorption grows with the density
  }`));
  };
  mat.customProgramCacheKey = () => 'cascarup-infuse-6';
  return mat;
}

// the bottle: a round syrup bottle, its profile turned on the lathe – the mouth is open, the lip rolls inwards
export const BOTTLE = [[0, 0], [.52, 0], [.6, .03], [.62, .1], [.62, 1.12], [.6, 1.24], [.5, 1.4], [.3, 1.56], [.215, 1.66],
  [.21, 1.92], [.235, 1.95], [.235, 2.02], [.17, 2.02], [.17, 1.74], [.2, 1.67]];
export const MOUTH = 2.02;
export function lathe(points, inset = 0, segs = 96) {
  return new LatheGeometry(points.map(([r, y]) => new Vector2(Math.max(0, r - inset), y)), segs);
}
export function radiusAt(y, inset) {
  for (let i = 1; i < 10; i++) {
    const [r0, y0] = BOTTLE[i - 1], [r1, y1] = BOTTLE[i];
    if (y >= y0 && y <= y1 && y1 > y0) return Math.max(0, lerp(r0, r1, (y - y0) / (y1 - y0)) - inset);
  }
  return 0;
}
export function capGeometry() {
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

export function labelTexture(line = 'SIRUP AUS DER KAFFEEKIRSCHE', size = 38) {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 560;
  const x = c.getContext('2d');
  x.fillStyle = '#F7F0E4'; x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = '#9C4B23'; x.fillRect(0, 34, c.width, 6); x.fillRect(0, c.height - 40, c.width, 6);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillStyle = '#9C4B23';
  x.font = '700 190px DynaPuff, "Arial Rounded MT Bold", sans-serif';
  x.fillText('Cascarup', c.width / 2, c.height * .44);
  x.fillStyle = '#3a2116';
  x.font = `400 ${size}px Jost, Futura, sans-serif`;
  x.letterSpacing = '12px';
  x.fillText(line, c.width / 2, c.height * .74);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 8;
  return t;
}

export function shadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d'), g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(58,33,22,.6)'); g.addColorStop(.35, 'rgba(58,33,22,.3)'); g.addColorStop(1, 'rgba(58,33,22,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  return new CanvasTexture(c);
}

// ---------------------------------------------------------------------------------------------------------------
// The timeline, in scroll progress 0–1. CHAPTERS are where the page comes to rest (page.js glides between them).
export const CHAPTERS = [0, .28, .45, .6, .73, .84, 1];

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
  // the photograph is shown mirrored (its branch runs off to the right), so its flash comes from the upper right:
  // the studio is mirrored to match, or the photo's highlight and the model's would sit on opposite sides
  scene.environment = pmrem.fromScene(studio(-1), .03).texture;
  scene.environmentIntensity = .9;

  const camera = new PerspectiveCamera(24, 1, .1, 100);
  camera.position.set(0, 0, 12.6);

  const key = new DirectionalLight('#fff1df', 1.5); key.position.set(4, 6, 6); scene.add(key);
  const rim = new DirectionalLight('#ffe9da', 1.3); rim.position.set(-5, 3, -6); scene.add(rim);
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

  // the bottle: it comes in with hot water, the cascara is steeped in it and the water becomes the syrup
  const bottle = new Group(); world.add(bottle);
  const glass = new Mesh(lathe(BOTTLE), new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .03, transmission: 1, thickness: .3, ior: 1.5, clearcoat: 1, clearcoatRoughness: .02,
    attenuationColor: new Color('#e4ebe2'), attenuationDistance: 2.5, transparent: true, side: DoubleSide, depthWrite: false,
  }));
  const fill = new Plane(new Vector3(0, -1, 0), 0);
  const syrupMat = infusing(new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .05, transmission: 1, thickness: 1.1, ior: 1.45,
    attenuationColor: new Color('#8f3612'), attenuationDistance: .95, clearcoat: 1, clippingPlanes: [fill],
  }));
  const infuse = syrupMat.userData.infuse;
  const syrup = new Mesh(lathe(BOTTLE.slice(0, 10), .035), syrupMat);
  const surface = new Mesh(new CircleGeometry(1, 72), new MeshPhysicalMaterial({ color: '#7d2e0f', roughness: .05, clearcoat: 1, transparent: true }));

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
  syrup.renderOrder = surface.renderOrder = meniscus.renderOrder = 1;   // drawn after the glass, or the glass would hide them
  document.fonts?.load('700 100px DynaPuff').then(() => { labelMat.map = labelTexture(); labelMat.needsUpdate = true; });
  // the rings each piece of cascara leaves on the water as it goes in
  const rippleMat = new MeshPhysicalMaterial({ color: '#ffffff', roughness: .1, clearcoat: 1, transparent: true, opacity: 0, depthWrite: false });
  const ripples = [0, 1].map(() => { const r = new Mesh(new TorusGeometry(1, .009, 8, 72), rippleMat.clone()); r.rotation.x = Math.PI / 2; r.visible = false; world.add(r); return r; });

  // the still life: two small dried halves – cascara – on the table beside the bottle
  const dried = sides.map((sd, i) => {
    const m = new Mesh(sd.skin.geometry, skinMaterial(speckle));
    m.morphTargetInfluences = [1]; m.material.userData.dry.value = 1;
    m.material.roughness = .58; m.material.clearcoat = .16; m.material.clearcoatRoughness = .4; m.material.sheen = .4; m.material.sheenColor.set('#c07a5c');
    m.scale.setScalar(.2); m.visible = false; world.add(m);
    return { m, x: i ? -1.02 : -1.32, z: i ? .5 : .1, ry: i ? 2.4 : -.6 };
  });
  // the still life at the end: a fresh cherry rolls in beside the bottle
  const fresh = new Group();
  const freshMat = skinMaterial(speckle); skinMats.push(freshMat);
  for (const s of sides) { const m = new Mesh(s.skin.geometry, freshMat); m.morphTargetInfluences = [0]; fresh.add(m); }
  const fStalk = new Mesh(stalk.geometry, woody); fStalk.position.y = RY + .06; fStalk.rotation.z = -.15; fresh.add(fStalk);
  const fCrown = crown.clone(); fresh.add(fCrown);
  const FRESH = .25; fresh.scale.setScalar(FRESH); world.add(fresh);
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
    camera.fov = wide ? 24 : lerp(33, 27, smooth(.56, .8, w / h));
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
  const WATER = 1.8, WATER_Y = FLOOR + WATER * BOTTLE_S, BED_Y = FLOOR + .16 * BOTTLE_S;   // the water's level, the bottle's floor
  const DROP = { 1: .668, '-1': .692 };                          // when each piece of cascara is let go (the right one first)
  const wp = new Vector3();
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
    const bottleIn = ease(.575, .665, p);             // the bottle comes up, with hot water in it
    const gather = ease(.6, .66, p);                  // the dried halves close up, small, above its mouth…
    const bloom = smooth(.7, .83, p);                 // …drop in one after the other, and the water takes their colour
    const capOn = ease(.865, .915, p);
    const labelIn = smooth(.89, .94, p);
    const rollIn = ease(.89, .97, p);
    const pourCam = smooth(.6, .7, p) * (1 - smooth(.87, .95, p));
    const endPhase = smooth(.87, .95, p);

    // camera: right of the words, centred for the exploded view, up a little for the pour, down for the still life
    const camY = lerp(lerp(lerp(0, .62, smooth(.6, .67, p)), .14, smooth(.7, .79, p)), -.2, endPhase);
    // At first the camera stands back, so the cherry has room for its branch; as it is picked, the camera comes in.
    const intro = 1 - smooth(.04, .2, p);
    if (wide) aim(-.2 * (1 - open) - .02 * intro, .08 * intro, 1 + .32 * intro, camY);
    // on narrow screens the cherry and its branch stand in the upper part at first, the words below them
    else aim(0, lerp(lerp(-.21, -.03, open), -.06, pourCam) + .47 * intro, 1 + .3 * open - .2 * pourCam + 1.02 * intro, camY);

    // the whole fruit floats; for the exploded view a three-quarter view (on phones a diagonal)
    world.rotation.y = -.35 * explode * (1 - together);
    world.rotation.x = lerp(.0, .13, explode) * (1 - together);
    const tilt = wide ? 0 : .85 * smooth(.1, .2, p) * (1 - smooth(.38, .46, p));
    // with the photograph the fruit faces the camera exactly, as the picture does; without it, it turns a little
    const turn = hasPhoto ? 0 : (1 - smooth(.06, .14, p)) * Math.sin(time * .35) * .55;
    cherry.rotation.set(0, turn, tilt);
    const pluck = .14 * smooth(.006, .05, p) * (1 - smooth(.12, .24, p));
    cherry.position.y = Math.sin(time * 1.1) * .05 * (1 - gather) * smooth(.02, .1, p) + pluck;

    for (const s of sides) {
      const k = s.side * explode;
      s.half.position.x = lerp(k * OFF.skin, s.side * .42, together);
      s.half.rotation.y = s.side * explode * .35 * (1 - together);
      s.skin.morphTargetInfluences[0] = s.flesh.morphTargetInfluences[0] = dryS;
      const mat = s.skin.material;
      mat.userData.dry.value = dryC;
      mat.roughness = lerp(.34, .58, dryC);
      // while it takes over from the photograph its gloss is the photo's own (soft); it shines up once it opens
      mat.clearcoat = lerp(lerp(.35, .9, smooth(.1, .22, p)), .16, dryC);
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
      const fx = bt * (wide ? 6 + s.side * .5 : 7.5 + s.side * .4), fy = bt * (wide ? 4.2 : -.6) + Math.sin(b * Math.PI) * .5 + (s.side > 0 ? .1 : -.1) * b;
      const ct = Math.cos(-tilt), st = Math.sin(-tilt);
      s.bean.position.set(k * OFF.bean + fx * ct - fy * st, fx * st + fy * ct, -bt * 2.2);
      s.bean.rotation.set(b * 2.6 * s.side, b * 3.4, explode * s.side * .2 + b * 1.5);
      s.bean.visible = explode > .002 && b < .999;

      // The dried halves go into the water: they close up and grow small above the bottle's mouth, fall through
      // the neck, hit the water and sink slowly, tumbling, to the bottom, where the syrup swallows them.
      if (gather > 0) {
        const at = DROP[s.side], fall = clamp((p - at) / .026), sink = smooth(at + .026, at + .1, p);
        const sway = Math.sin(sink * Math.PI * 1.6) * .06 * (1 - sink);
        // over the mouth they wait side by side, then each is lined up with the neck as it drops
        let x = lerp(s.side * .42, s.side * .13, gather), y = lerp(cherry.position.y, MOUTH_Y + .55, gather), z = 0;
        if (fall > 0) { x = lerp(x, 0, Math.min(1, fall * 1.6)); y = lerp(y, WATER_Y - .05, fall * fall); }
        if (sink > 0) { x = lerp(x, s.side * .2, sink) + sway; y = lerp(y, BED_Y + .08, sink); z = lerp(0, s.side * .08, sink); }
        s.half.position.set(x, y - cherry.position.y, z);
        s.half.rotation.set(sink * 1.2 * s.side, gather * .35 * s.side + sink * .8, s.side * (gather * .12 + sink * 1.7));
        // at the bottom they give the water all they have, and are gone
        s.half.scale.setScalar(lerp(1, .16, gather) * Math.max(.001, 1 - smooth(.74, .8, p)));
        s.half.getWorldPosition(wp);
        (s.side > 0 ? infuse.uSrc1 : infuse.uSrc0).value.copy(wp);
        // the ring it leaves on the water
        const r = ripples[s.side > 0 ? 1 : 0], rt = clamp((p - at - .026) / .05);
        r.visible = rt > 0 && rt < 1;
        if (r.visible) {
          const rr = radiusAt(WATER, .035) * BOTTLE_S;
          r.position.set(s.side * .03, WATER_Y + .004, 0);
          r.scale.setScalar(lerp(.04, rr * .96, Math.sqrt(rt)));
          r.material.opacity = .7 * (1 - rt);
        }
      } else { s.half.position.y = 0; s.half.rotation.x = s.half.rotation.z = 0; s.half.scale.setScalar(1); }
      s.half.visible = p < .8;
    }
    stalk.visible = crown.visible = navel.visible = !hasPhoto && explode < .02;

    // the bottle comes up with its water, which turns to syrup; it gets its cap and its label, then barely sways
    bottle.visible = bottleIn > .001;
    bottle.position.y = lerp(-7.5, FLOOR, bottleIn);
    bottle.scale.setScalar(BOTTLE_S);
    bottle.rotation.y = Math.sin(time * .45) * .1 * smooth(.9, 1, p);
    const surfaceY = bottle.position.y + WATER * BOTTLE_S;
    fill.constant = surfaceY;                                     // clip the liquid at its level (world space)
    surface.position.y = meniscus.position.y = WATER;
    const rr = radiusAt(WATER, .035);
    surface.scale.setScalar(rr); meniscus.scale.set(rr, rr, 1);
    infuse.uBloom.value = bloom; infuse.uTime.value = time; infuse.uTop.value = surfaceY;
    if (p >= .8) { infuse.uSrc0.value.set(0, BED_Y, 0); infuse.uSrc1.value.set(0, BED_Y, 0); }
    // While it is water the liquid barely bends the light (a thick lens would blow the pieces up); as syrup it is
    // deep. Thickness and absorption distance grow together, so the colour per depth stays the same.
    const deep = smooth(.76, .84, p);
    syrupMat.thickness = lerp(.16, 1.1, deep); syrupMat.ior = lerp(1.33, 1.45, deep);
    syrupMat.attenuationDistance = lerp(.14, .95, deep);
    // the surface shows only as the syrup's own dark top, once there is syrup
    surface.material.opacity = .92 * smooth(.74, .84, p);
    surface.visible = surface.material.opacity > .002;
    meniscus.material.opacity = lerp(.5, .35, deep);
    // the cap comes down from above the picture, turning on
    cap.visible = capOn > .001;
    cap.position.y = lerp(MOUTH + 1.6, MOUTH - .05, capOn);
    cap.rotation.y = (1 - capOn) * 4;
    labelMat.opacity = labelIn;
    label.visible = labelIn > .001;
    bottleShadow.material.opacity = .8 * bottleIn;

    // the dried halves settle on the table, cut side down
    const settleIn = ease(.89, .96, p);
    dried.forEach((d, i) => {
      d.m.visible = settleIn > .001;
      d.m.position.set(d.x, FLOOR + .13, d.z);
      d.m.rotation.set(Math.PI / 2 * (i ? 1 : -1) * .92, d.ry + (1 - settleIn) * .6, 0);
      d.m.scale.setScalar(.2 * Math.max(.001, settleIn));
    });
    // a fresh cherry rolls in and stops beside the bottle
    fresh.visible = rollIn > .001;
    const fx = lerp(4.2, 1.05, rollIn), r = FRESH * RX;
    fresh.position.set(fx, FLOOR + FRESH * RY + .025, .35);
    fresh.rotation.set(0, 0, -(fx - 1.05) / r);
    freshShadow.visible = fresh.visible;
    freshShadow.position.set(fx, FLOOR + .003, .35);
    freshShadow.scale.setScalar(.68);
    freshShadow.material.opacity = .7 * rollIn;

    // the cherry's shadow, until the halves rise
    shadow.position.set(0, -RY - .55, 0);
    shadow.scale.set(2.5 * (1 + explode * .6 * (1 - together)), 1.7, 1);
    shadow.material.opacity = .6 * (1 - explode * .35 * (1 - together)) * (1 - smooth(.59, .65, p)) * smooth(.03, .1, p);
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
