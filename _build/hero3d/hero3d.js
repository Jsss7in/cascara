// Cascarup – the opening in 3D: a real coffee cherry (a photograph, projected onto the model) opens layer by
// layer, the beans leave for the roaster, the skin dries into cascara; the cascara is steeped in a pot of hot water
// and simmered down to syrup, which fills two bottles: Cascara, and Gifferstee with cinnamon and star anise.
// Built into assets/hero3d.js by _build/hero3d/build.sh (three.js is bundled and trimmed to what is used).
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, Group, Mesh, Color, Vector3,
  SphereGeometry, LatheGeometry, PlaneGeometry, CircleGeometry, TorusGeometry, BoxGeometry, BufferGeometry,
  BufferAttribute, CylinderGeometry, MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, DoubleSide,
  BackSide, DirectionalLight, HemisphereLight, CanvasTexture, SRGBColorSpace, NeutralToneMapping, Plane, Vector2,
  Object3D, RepeatWrapping, TextureLoader, ShaderChunk, ExtrudeGeometry, Shape, Sprite, SpriteMaterial,
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
  const p = g.attributes.position, uv = g.attributes.uv, n = p.count, col = new Float32Array(n * 3);
  const roast = new Color('#6b3b1f'), light = new Color('#8a5430'), crease = new Color('#2a1309'), c = new Color();
  for (let i = 0; i < n; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const flat = side * x < 0;
    let nx = x * .5, ny = y * .8, nz = z * .62, groove = 0;
    if (flat) {
      nx *= .12;
      const s = .08 * Math.sin(y * 3.4);
      groove = Math.exp(-Math.pow((nz - s) / .06, 2)) * (1 - Math.pow(Math.abs(y), 6));
      nx += side * groove * .05;
    }
    nx += noise3(x * 4, y * 4, z * 4) * .006;
    p.setXYZ(i, nx, ny, nz);
    c.copy(roast).lerp(light, smooth(-.2, .8, noise3(x * 3, y * 3, z * 3))).lerp(crease, groove * .9);
    col.set([c.r, c.g, c.b], i * 3);
    // where a photograph of a real bean lies on it: seen square-on from its own side, the bean's outline filling
    // the picture's fitted ellipse (BEAN_PHOTO), the flat side's crease along the middle
    const ph = BEAN_PHOTO[flat ? 'flat' : 'round'];
    uv.setXY(i, ph.cx + (flat ? -side : side) * z * ph.rx, 1 - (ph.cy - y * ph.ry));
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  // two parts, so each side can wear its own photograph: the flat side (group 0) and the dome (group 1)
  const idx = g.index.array, flatTris = [], domeTris = [];
  for (let t = 0; t < idx.length; t += 3) {
    const xs = (p.getX(idx[t]) + p.getX(idx[t + 1]) + p.getX(idx[t + 2])) * side;
    (xs < 0 ? flatTris : domeTris).push(idx[t], idx[t + 1], idx[t + 2]);
  }
  g.setIndex([...flatTris, ...domeTris]);
  g.addGroup(0, flatTris.length, 0); g.addGroup(flatTris.length, domeTris.length, 1);
  g.computeVertexNormals();
  return g;
}
// The photographs of a real roasted bean (assets/bean/): for each, the bean's fitted ellipse in the picture as
// fractions (centre cx, cy; half axes rx across, ry along). Filled in from the cut-outs' measurements.
// (a hair inside the outline, so the edge never samples the backdrop the cut-out was laid on)
const BEAN_PHOTO = {
  flat: { src: 'assets/bean/bohne-flach.webp', cx: .4859, cy: .488, rx: .4932 * .95, ry: .4997 * .96 },
  round: { src: 'assets/bean/bohne-rund.webp', cx: .5061, cy: .5127, rx: .4911 * .95, ry: .4889 * .96 },
};

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

// The infusion: the pot holds hot water; where the cascara sinks through it, the colour billows out of it
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

// the two kinds: their syrup's colour (in depth and on top), cap and label
export const KINDS = {
  cascara: { label: 'CASCARA', syrup: '#8f3612', surface: '#7d2e0f', cap: '#9C4B23', props: 'cascara' },
  gifferstee: { label: 'GIFFERSTEE', syrup: '#6a260c', surface: '#5a200a', cap: '#4a2516', props: 'spice' },
};

// cinnamon: a quill, bark rolled up into a loose scroll, with fine ridges along its length
export function cinnamon(len) {
  const s = new Shape(), t = .018, turns = 1.6, r0 = .085, k = .022, n = 90;
  const pt = (a, r) => [Math.cos(a) * r, Math.sin(a) * r];
  for (let i = 0; i <= n; i++) { const a = (i / n) * turns * Math.PI * 2; const [x, y] = pt(a, r0 - k * a / Math.PI); i ? s.lineTo(x, y) : s.moveTo(x, y); }
  for (let i = n; i >= 0; i--) { const a = (i / n) * turns * Math.PI * 2; const [x, y] = pt(a, r0 - k * a / Math.PI - t); s.lineTo(x, y); }
  const g = new ExtrudeGeometry(s, { depth: len, steps: 48, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, -len / 2);
  const p = g.attributes.position, col = new Float32Array(p.count * 3), a = new Color('#7a3c1c'), b = new Color('#a4592c'), c = new Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), ang = Math.atan2(y, x);
    const ridge = .5 + .5 * Math.sin(ang * 38 + Math.sin(z * 9) * .6), fleck = .5 + .5 * Math.sin(z * 41 + ang * 3) * Math.sin(z * 17);
    c.copy(a).lerp(b, ridge * .45 + fleck * .25);
    col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.computeVertexNormals();
  return new Mesh(g, new MeshStandardMaterial({ vertexColors: true, roughness: .86 }));
}

// star anise: eight boat-shaped pods around a centre, each split open on a glossy seed
export function starAnise() {
  const g = new Group();
  const pod = new MeshStandardMaterial({ color: '#4e2311', roughness: .9 });
  const inner = new MeshStandardMaterial({ color: '#8a4f27', roughness: .75 });
  const seed = new MeshPhysicalMaterial({ color: '#7a4220', roughness: .3, clearcoat: .8, clearcoatRoughness: .25 });
  // a pod: an ellipsoid drawn out to a point at its outer end, a little crinkled
  const podGeo = new SphereGeometry(1, 32, 18), pp = podGeo.attributes.position;
  for (let i = 0; i < pp.count; i++) {
    const x = pp.getX(i), taper = x > 0 ? 1 - x * x * .82 : 1 - x * x * .25, w = 1 + .06 * Math.sin(x * 23 + pp.getZ(i) * 9);
    pp.setXYZ(i, x, pp.getY(i) * taper * w, pp.getZ(i) * taper * w);
  }
  podGeo.computeVertexNormals();
  for (let i = 0; i < 8; i++) {
    const arm = new Group(); arm.rotation.y = (i / 8) * Math.PI * 2 + (i % 2) * .05;
    const body = new Mesh(podGeo, pod);
    body.scale.set(.21, .07, .08); body.position.x = .19; body.rotation.z = -.1;
    const lip = new Mesh(new SphereGeometry(1, 20, 12), inner);
    lip.scale.set(.15, .03, .045); lip.position.set(.2, .068, 0);
    const bean = new Mesh(new SphereGeometry(1, 20, 14), seed);
    bean.scale.set(.06, .035, .04); bean.position.set(.2, .075, 0);
    arm.add(body, lip, bean); g.add(arm);
  }
  const hub = new Mesh(new SphereGeometry(.055, 16, 12), pod); hub.scale.y = .9; g.add(hub);
  return g;
}

// the brewing pot: a wide, low glass saucepan turned on the lathe, its rim rolled, two small glass ears
const POT = [[0, 0], [.95, 0], [1.03, .03], [1.06, .1], [1.06, .9], [1.085, .955], [1.09, 1], [1.045, 1], [1.025, .96],
  [1.025, .1], [.97, .055], [0, .055]];
// steam: thin, soft, wavering wisps (a few blurred curving strokes), not a cloud
function steamTexture(seed) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 256;
  const x = c.getContext('2d'), r = rng(seed);
  x.filter = 'blur(7px)'; x.lineCap = 'round';
  for (let k = 0; k < 3; k++) {
    x.strokeStyle = `rgba(255,255,255,${(.55 + r() * .35).toFixed(2)})`; x.lineWidth = 7 + r() * 9;
    x.beginPath();
    const x0 = 44 + r() * 40, a = 10 + r() * 16, f = 1.6 + r() * 1.6, ph = r() * 6;
    for (let y = 236; y >= 20; y -= 6) {
      const t = (236 - y) / 216, px = x0 + Math.sin(t * f * Math.PI + ph) * a * (.3 + t);
      y === 236 ? x.moveTo(px, y) : x.lineTo(px, y);
    }
    x.stroke();
  }
  // fade at both ends, so a wisp has no edge
  x.filter = 'none'; x.globalCompositeOperation = 'destination-in';
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#000'); g.addColorStop(.8, '#000'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 256);
  return new CanvasTexture(c);
}

// ---------------------------------------------------------------------------------------------------------------
// The timeline, in scroll progress 0–1. CHAPTERS are where the page comes to rest (page.js glides between them).
export const CHAPTERS = [0, .28, .45, .6, .765, .862, 1];

export function createHero(canvas, { onFrame, photo, plantBox } = {}) {
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
  // the beans: painted roast until the photographs of a real bean have loaded, then those (flat side, dome)
  const beanMats = ['flat', 'round'].map((k) => {
    const m = new MeshPhysicalMaterial({ vertexColors: true, roughness: .42, clearcoat: .3, clearcoatRoughness: .35 });
    new TextureLoader().load(BEAN_PHOTO[k].src, (tex) => {
      tex.colorSpace = SRGBColorSpace; tex.anisotropy = 8;
      Object.assign(m, { map: tex, vertexColors: false, roughness: .5, clearcoat: .22, clearcoatRoughness: .4, emissiveMap: tex, emissiveIntensity: .3 });
      m.color.set('#ffffff'); m.emissive.set('#ffffff'); m.needsUpdate = true;
    });
    return m;
  });

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
    const bean = new Mesh(beanGeometry(side), beanMats);
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

  const FLOOR = -1.45, BOTTLE_S = 1.05;
  // ---- the ending: the dried halves are steeped in a pot of hot water, simmered down to syrup, and the syrup is
  // poured into two bottles – one as it is, Cascara, one with cinnamon and star anise, Gifferstee
  const shadowTex = shadowTexture();
  const shadowMat = new MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false });
  const softShadow = (sx, sz) => { const m = new Mesh(new PlaneGeometry(1, 1), shadowMat.clone()); m.rotation.x = -Math.PI / 2; m.scale.set(sx, sz, 1); return m; };
  const glassMat = new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .03, transmission: 1, thickness: .3, ior: 1.5, clearcoat: 1, clearcoatRoughness: .02,
    attenuationColor: new Color('#e4ebe2'), attenuationDistance: 2.5, transparent: true, side: DoubleSide, depthWrite: false,
  });

  // the pot, its water (which takes the colour where the cascara steeps), the steam over it
  const pot = new Group(); world.add(pot);
  const potGlassMat = glassMat.clone();
  const potGlass = new Mesh(lathe(POT, 0, 128), potGlassMat);
  const ear = new TorusGeometry(.14, .034, 12, 32, Math.PI);
  const ears = [-1, 1].map((sd) => { const m = new Mesh(ear, potGlassMat); m.position.set(sd * 1.07, .8, 0); m.rotation.z = -sd * Math.PI / 2; return m; });
  const potFill = new Plane(new Vector3(0, -1, 0), 0);
  const potMat = infusing(new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .05, transmission: 1, thickness: .16, ior: 1.33,
    attenuationColor: new Color('#8f3612'), attenuationDistance: .14, clearcoat: 1, clippingPlanes: [potFill],
  }));
  const infuse = potMat.userData.infuse;
  const potLiquid = new Mesh(lathe([[0, .055], [.97, .055], [1.02, .1], [1.02, 1]], .01, 128), potMat);
  const potSurface = new Mesh(new CircleGeometry(1.012, 96), new MeshPhysicalMaterial({ color: '#dfe6e4', roughness: .05, clearcoat: 1, transparent: true, opacity: 0, depthWrite: false }));
  const WATER_TOP = new Color('#dfe6e4'), SYRUP_TOP = new Color('#4e1806');
  potSurface.rotation.x = -Math.PI / 2;
  // where the water stood before it simmered down: a faint amber line on the glass
  const potMark = new Mesh(new TorusGeometry(1.016, .007, 8, 128), new MeshPhysicalMaterial({ color: '#9a5a34', roughness: .4, transparent: true, opacity: 0, depthWrite: false }));
  potMark.rotation.x = Math.PI / 2;
  const potShadow = softShadow(3, 2.1); potShadow.position.y = .004;
  pot.add(potShadow, potLiquid, potSurface, potMark, potGlass, ...ears);
  potLiquid.renderOrder = potSurface.renderOrder = potMark.renderOrder = 1;   // drawn after the glass, or it would hide them
  const steamTex = [11, 23, 37, 41].map(steamTexture), rnd = rng(31);
  const steam = Array.from({ length: 12 }, (_, i) => {
    const sp = new Sprite(new SpriteMaterial({ map: steamTex[i % 4], color: '#ffffff', transparent: true, depthWrite: false, opacity: 0 }));
    sp.userData = { seed: i / 12 + rnd() * .05, x: (rnd() - .5) * 1.3, z: (rnd() - .5) * .7, drift: (rnd() - .5) * .4 };
    pot.add(sp); return sp;
  });
  // the waterline: a thin bright ring where the water meets the glass, so the pot reads as full, not empty
  const potLine = new Mesh(new TorusGeometry(1.012, .008, 8, 128), new MeshPhysicalMaterial({ color: '#ffffff', roughness: .1, clearcoat: 1, transparent: true, opacity: .55, depthWrite: false }));
  potLine.rotation.x = Math.PI / 2; pot.add(potLine); potLine.renderOrder = 1;
  // the syrup's top: dark and only softly glossy, so it never reads as a pale lid
  potSurface.material.envMapIntensity = .22; potSurface.material.roughness = .18;
  // the rings each piece of cascara leaves on the water as it goes in
  const rippleMat = new MeshPhysicalMaterial({ color: '#ffffff', roughness: .1, clearcoat: 1, transparent: true, opacity: 0, depthWrite: false });
  const ripples = [0, 1].map(() => { const r = new Mesh(new TorusGeometry(1, .009, 8, 72), rippleMat.clone()); r.rotation.x = Math.PI / 2; r.visible = false; world.add(r); return r; });

  // the two bottles: empty when they come up, filled from the pot, capped and labelled
  const bottleGeo = lathe(BOTTLE), syrupGeo = lathe(BOTTLE.slice(0, 10), .035), capGeo = capGeometry();
  const labelGeo = new CylinderGeometry(.628, .628, .42, 96, 1, true, -Math.PI * .4, Math.PI * .8);
  const bottles = ['cascara', 'gifferstee'].map((id, i) => {
    const k = KINDS[id], g = new Group(); world.add(g);
    const fill = new Plane(new Vector3(0, -1, 0), 0);
    const mat = new MeshPhysicalMaterial({
      color: '#ffffff', roughness: .05, transmission: 1, thickness: 1.1, ior: 1.45,
      attenuationColor: new Color(k.syrup), attenuationDistance: .95, clearcoat: 1, clippingPlanes: [fill],
    });
    const syrup = new Mesh(syrupGeo, mat);
    const surface = new Mesh(new CircleGeometry(1, 72), new MeshPhysicalMaterial({ color: k.surface, roughness: .05, clearcoat: 1 }));
    surface.rotation.x = -Math.PI / 2;
    const meniscus = new Mesh(new TorusGeometry(1, .01, 8, 96), new MeshPhysicalMaterial({ color: '#a85a34', roughness: .15, transparent: true, opacity: .35 }));
    meniscus.rotation.x = Math.PI / 2;
    const cap = new Mesh(capGeo, new MeshPhysicalMaterial({ color: k.cap, roughness: .55, clearcoat: .2, transparent: true }));
    const labelMat = new MeshPhysicalMaterial({ map: labelTexture(k.label, 80), color: '#ece6dc', roughness: .65, side: DoubleSide, transparent: true, opacity: 0 });
    const label = new Mesh(labelGeo, labelMat); label.position.y = .6;
    const shade = softShadow(2.2, 1.6); shade.position.y = .004;
    g.add(shade, syrup, surface, meniscus, new Mesh(bottleGeo, glassMat), label, cap);
    syrup.renderOrder = surface.renderOrder = meniscus.renderOrder = 1;
    g.scale.setScalar(BOTTLE_S);
    return { id, k, g, fill, syrup, surface, meniscus, cap, label, labelMat, shade, x: i ? .86 : -.86 };
  });
  document.fonts?.load('700 100px DynaPuff').then(() => { for (const b of bottles) { b.labelMat.map = labelTexture(b.k.label, 80); b.labelMat.needsUpdate = true; } });
  // the pours: one clean, glossy thread of syrup into each bottle, from the pot above the picture
  const streamGeo = new CylinderGeometry(.04, .03, 1, 28, 1, true); streamGeo.translate(0, -.5, 0);
  const streamMat = new MeshPhysicalMaterial({
    color: '#a8481f', roughness: .03, clearcoat: 1, clearcoatRoughness: .02, transmission: .5, thickness: .1, ior: 1.45,
    attenuationColor: new Color('#7a260a'), attenuationDistance: .14, emissive: new Color('#3a1004'),
  });
  // on narrow screens the words stand right above the bottles: there the thread fades in just above the mouth
  const uFadeTop = { value: 99 };
  streamMat.transparent = true;
  streamMat.onBeforeCompile = (sh) => {
    sh.uniforms.uFadeTop = uFadeTop;
    sh.fragmentShader = 'uniform float uFadeTop;\n' + sh.fragmentShader.replace('#include <alphamap_fragment>',
      '#include <alphamap_fragment>\n\tdiffuseColor.a *= smoothstep( uFadeTop, uFadeTop - 0.6, vWorldPosition.y );');
  };
  streamMat.customProgramCacheKey = () => 'cascarup-stream-1';
  const streams = bottles.map(() => { const m = new Mesh(streamGeo, streamMat); m.visible = false; world.add(m); return m; });
  // what makes the second one Gifferstee: a stick of cinnamon and a star anise, dropped into it before it is filled
  const dropStick = cinnamon(.9); dropStick.scale.setScalar(.42); world.add(dropStick);
  const dropStar = starAnise(); dropStar.scale.setScalar(.4); world.add(dropStar);

  // the still life: beside Cascara a fresh cherry and two pieces of cascara, beside Gifferstee its spices
  const dried = sides.map((sd, i) => {
    const m = new Mesh(sd.skin.geometry, skinMaterial(speckle));
    m.morphTargetInfluences = [1]; m.material.userData.dry.value = 1;
    m.material.roughness = .58; m.material.clearcoat = .16; m.material.clearcoatRoughness = .4; m.material.sheen = .4; m.material.sheenColor.set('#c07a5c');
    m.scale.setScalar(.2); m.visible = false; world.add(m);
    m.material.transparent = true;
    return { m, x: i ? -1.55 : -2.22, z: i ? .78 : .2, ry: i ? 2.4 : -.6 };
  });
  const spices = [
    { o: cinnamon(1.2), x: 1.86, y: .05, z: .3, r: [0, Math.PI / 2 - .35, 0], s: .62 },
    { o: cinnamon(1.2), x: 1.96, y: .13, z: .02, r: [0, Math.PI / 2 - .62, .05], s: .62 },
    { o: starAnise(), x: 1.5, y: .055, z: .82, r: [.05, .4, -.04], s: .72 },
  ];
  // what fades in: every material of it, made see-through once
  const fadeable = (o) => { const ms = []; o.traverse((m) => { if (m.material) { m.material.transparent = true; ms.push(m.material); } }); return ms; };
  for (const sp of spices) { sp.o.visible = false; world.add(sp.o); sp.mats = fadeable(sp.o); }
  const spiceShadow = softShadow(1.5, .9); world.add(spiceShadow);
  // a fresh cherry rolls in and stops beside the first bottle
  const fresh = new Group();
  const freshMat = skinMaterial(speckle); skinMats.push(freshMat);
  for (const s of sides) { const m = new Mesh(s.skin.geometry, freshMat); m.morphTargetInfluences = [0]; fresh.add(m); }
  const fStalk = new Mesh(stalk.geometry, woody); fStalk.position.y = RY + .06; fStalk.rotation.z = -.15; fresh.add(fStalk);
  const fCrown = crown.clone(); fresh.add(fCrown);
  const FRESH = .25; fresh.scale.setScalar(FRESH); world.add(fresh);
  const freshShadow = softShadow(.68, .68); world.add(freshShadow);

  // the cherry's own shadow on the table
  const shadow = softShadow(1, 1); world.add(shadow);

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
  let frame0 = null, fit = null;   // the room for the first picture (page.js), and where the cherry must be for it
  const v = new Vector3();

  // The first picture (the cherry with its branch, reaching plantBox around it in cherry half widths) is fitted
  // into the frame: as large as it can be, centred in it. From that follow the camera's offset and distance.
  function fitFirst() {
    fit = null;
    if (!frame0 || !plantBox) return;
    const [L, T, R, B] = plantBox, f = frame0;
    const rx = Math.max(10, Math.min((f.r - f.l) / (R - L), (f.b - f.t) / (B - T), Math.min(width, height) * .2));
    const cx = (f.l + f.r) / 2 - (L + R) / 2 * rx, cy = (f.t + f.b) / 2 - (T + B) / 2 * rx;
    const zoom = (height / 2) / (Math.tan(camera.fov * Math.PI / 360) * 12.6 * rx);
    fit = { ox: (width / 2 - cx) / width, oy: (height / 2 - cy) / height, zoom };
  }
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
    fitFirst();
  }
  // where the object sits on screen: right of the words on wide screens, below them on narrow ones
  function aim(ox, oy, zoom, y, pitch = 0) {
    camera.clearViewOffset();
    camera.setViewOffset(width, height, width * ox, height * oy, width, height);
    // looking down by pitch, the camera stands that much higher, so y stays at the centre of the picture
    camera.position.set(0, y + 12.6 * zoom * Math.tan(pitch), 12.6 * zoom);
    camera.rotation.set(-pitch, 0, 0);
    camera.updateProjectionMatrix();
  }

  const MOUTH_Y = FLOOR + MOUTH * BOTTLE_S, STREAM_TOP = 4.6;
  const POT_W0 = .8, POT_W1 = .58, POT_BED = .1;                 // the pot's water before and after simmering, its floor
  const DROP = { 1: .655, '-1': .675 };                          // when each piece of cascara is let go (the right one first)
  // each bottle: when it comes up, its pour (in, out) and its level rising, its cap
  const TIMES = [
    { up: [.774, .804], pour: [.803, .812, .836, .846], fill: [.805, .843], cap: [.865, .9] },
    { up: [.776, .806], pour: [.82, .829, .852, .862], fill: [.822, .86], cap: [.872, .905] },
  ];
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
    const toPot = smooth(.575, .65, p);               // the camera goes down to the pot…
    const potIn = ease(.575, .655, p);                // …which comes up with hot water in it
    const gather = ease(.6, .65, p);                  // the dried halves close up above it…
    const bloom = smooth(.68, .76, p);                // …drop in one after the other, and the water takes their colour
    const reduce = smooth(.715, .775, p);             // it simmers down to syrup
    const potOut = ease(.77, .79, p);                 // the pot rises a little and fades, to pour…
    const toBottles = smooth(.772, .82, p);           // …into two bottles
    const labelIn = smooth(.885, .925, p);
    const settleIn = ease(.885, .95, p);
    const rollIn = ease(.89, .955, p);
    const endPhase = smooth(.875, .95, p);
    const later = toPot * (1 - endPhase);

    // camera: right of the words, centred for the exploded view; down to the pot and looking into it a little,
    // level again for the bottles, a step back for the still life
    const camY = lerp(lerp(lerp(0, -.84, toPot), -.3, toBottles), -.34, endPhase);
    const pitch = .2 * toPot * (1 - toBottles);
    // At first the camera stands back, so the cherry has room for its branch; as it is picked, the camera comes in.
    const intro = 1 - smooth(.04, .2, p);
    // at first the cherry stands where its branch fits beside (wide) or above (narrow) the words
    let ox, oy, zoom;
    if (wide) { ox = -.2 * (1 - open) - .03 * endPhase; oy = 0; zoom = 1 + .08 * endPhase; }
    else {
      ox = 0; oy = lerp(lerp(-.21, -.03, open), -.07, later) - .08 * toBottles * (1 - endPhase);
      zoom = 1 + .3 * open - .04 * toPot * (1 - toBottles) + .02 * toBottles + .45 * endPhase;
    }
    const first = fit || (wide ? { ox: -.22, oy: .08, zoom: 1.32 } : { ox: 0, oy: .26, zoom: 2.02 });
    aim(lerp(ox, first.ox, intro), lerp(oy, first.oy, intro), lerp(zoom, first.zoom, intro), camY, pitch);
    uFadeTop.value = wide ? 99 : MOUTH_Y + .55;

    // the whole fruit floats; for the exploded view a three-quarter view (on phones a diagonal)
    world.rotation.y = -.35 * explode * (1 - together);
    world.rotation.x = lerp(.0, .13, explode) * (1 - together);
    const tilt = wide ? 0 : .85 * smooth(.1, .2, p) * (1 - smooth(.38, .46, p));
    // with the photograph the fruit faces the camera exactly, as the picture does; without it, it turns a little
    const turn = hasPhoto ? 0 : (1 - smooth(.06, .14, p)) * Math.sin(time * .35) * .55;
    cherry.rotation.set(0, turn, tilt);
    const pluck = .14 * smooth(.006, .05, p) * (1 - smooth(.12, .24, p));
    cherry.position.y = Math.sin(time * 1.1) * .05 * (1 - gather) * smooth(.02, .1, p) + pluck;

    // the pot comes up with its water, which takes the colour and simmers down; then it is lifted away, tipping
    pot.visible = potIn > .001 && potOut < .999;
    pot.position.set(0, lerp(lerp(-7.5, FLOOR, potIn), FLOOR + 1.4, potOut), 0);
    pot.rotation.z = .12 * potOut;
    // the liquid becomes see-through only while it fades (it renders differently as a transparent material)
    const potFade = 1 - smooth(.77, .788, p), fading = potFade < .999;
    if (potMat.transparent !== fading) { potMat.transparent = fading; potMat.needsUpdate = true; }
    potGlassMat.opacity = potFade; potMat.opacity = potFade;
    const level = lerp(POT_W0, POT_W1, reduce), potTop = pot.position.y + level;
    potFill.constant = potTop;                                    // clip the liquid at its level (world space)
    potSurface.position.y = potLine.position.y = level;
    potMark.position.y = POT_W0;
    potMark.material.opacity = .5 * reduce;
    infuse.uBloom.value = bloom; infuse.uTime.value = time; infuse.uTop.value = potTop;
    // As water the liquid barely bends the light (a thick lens would blow the pieces up); as syrup it is deep and,
    // simmered down, deeper in colour. Thickness and absorption grow together, so the colour per depth holds.
    const deep = smooth(.7, .76, p);
    potMat.thickness = lerp(.16, .9, deep); potMat.ior = lerp(1.33, 1.45, deep);
    potMat.attenuationDistance = lerp(.14, lerp(.75, .48, reduce), deep);
    // the top: a faint cool sheen while it is water, the syrup's own dark top once it has steeped
    const syrupTop = smooth(.7, .77, p);
    potSurface.material.color.copy(WATER_TOP).lerp(SYRUP_TOP, syrupTop);
    potSurface.material.clearcoat = lerp(1, .12, syrupTop);
    potSurface.material.opacity = lerp(.14, .96, syrupTop) * potFade;
    potLine.material.opacity = lerp(.55, .2, syrupTop) * potFade;
    potMark.material.opacity *= potFade;
    // steam rises while it is hot, thickest while it simmers down
    const steamAmt = smooth(.63, .69, p) * (1 - smooth(.772, .79, p)) * (.5 + .5 * reduce);
    for (const sp of steam) {
      const u = sp.userData, life = (time * .16 + u.seed) % 1;
      sp.visible = steamAmt > .002;
      sp.position.set(u.x * (1 - life * .3) + Math.sin(life * 3 + u.seed * 12) * .1 + u.drift * life, level + .5 + life * 1.3, u.z);
      sp.scale.set(.42 + life * .3, .9 + life * .6, 1);
      sp.material.opacity = steamAmt * .5 * Math.sin(Math.PI * life);
    }

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

      // The dried halves go into the pot: they close up above it, drop into the hot water one after the other,
      // sink slowly, tumbling, to the bottom, and give the water all they have until they are gone.
      if (gather > 0) {
        const at = DROP[s.side], fall = clamp((p - at) / .022), sink = smooth(at + .022, at + .09, p);
        const sway = Math.sin(sink * Math.PI * 1.6) * .08 * (1 - sink);
        let x = lerp(s.side * .42, s.side * .3, gather), y = lerp(0, FLOOR + 1.62, gather), z = 0;
        if (fall > 0) y = lerp(y, FLOOR + POT_W0 - .04, fall * fall);
        if (sink > 0) { x = lerp(x, s.side * .48, sink) + sway; y = lerp(y, FLOOR + POT_BED + .12, sink); z = lerp(0, s.side * .16, sink); }
        s.half.position.set(x, y - cherry.position.y, z);
        s.half.rotation.set(sink * 1.2 * s.side, gather * .35 * s.side + sink * .8, s.side * (gather * .3 + sink * 1.7));
        s.half.scale.setScalar(lerp(1, .32, gather) * Math.max(.001, 1 - smooth(.72, .755, p)));
        s.half.getWorldPosition(wp);
        (s.side > 0 ? infuse.uSrc1 : infuse.uSrc0).value.copy(wp);
        // the ring it leaves on the water
        const r = ripples[s.side > 0 ? 1 : 0], rt = clamp((p - at - .022) / .05);
        r.visible = rt > 0 && rt < 1;
        if (r.visible) {
          r.position.set(x, potTop + .004, 0);
          r.scale.setScalar(lerp(.06, .95, Math.sqrt(rt)));
          r.material.opacity = .7 * (1 - rt);
        }
      } else { s.half.position.y = 0; s.half.rotation.x = s.half.rotation.z = 0; s.half.scale.setScalar(1); }
      s.half.visible = p < .755;
    }
    stalk.visible = crown.visible = navel.visible = !hasPhoto && explode < .02;

    // The two bottles come up empty and are filled from the pot above the picture: a thread of syrup into each,
    // the level rising. Into the second, first a stick of cinnamon and a star anise. Caps, labels, a slight sway.
    bottles.forEach((b, i) => {
      const T = TIMES[i], up = ease(T.up[0], T.up[1], p);
      b.g.visible = up > .001;
      b.g.position.set(b.x, lerp(-7.5, FLOOR, up), 0);
      b.g.rotation.y = Math.sin(time * .45 + i * 1.7) * .08 * smooth(.9, 1, p);
      const f = smooth(T.fill[0], T.fill[1], p), lvl = lerp(.03, 1.8, f), sy = b.g.position.y + lvl * BOTTLE_S;
      b.fill.constant = sy;
      b.syrup.visible = f > .002;
      b.surface.visible = b.meniscus.visible = f > .01;
      b.surface.position.y = b.meniscus.position.y = lvl;
      const rr = radiusAt(lvl, .035);
      b.surface.scale.setScalar(rr); b.meniscus.scale.set(rr, rr, 1);
      const [i0, i1, o0, o1] = T.pour, head = smooth(i0, i1, p), tail = smooth(o0, o1, p);
      const top = lerp(STREAM_TOP, sy, tail), bottom = lerp(STREAM_TOP, sy, head), st = streams[i];
      st.visible = top - bottom > .01;
      if (st.visible) { st.position.set(b.x + Math.sin(time * 2.1 + i) * .004, top, 0); st.scale.set(1, top - bottom, 1); }
      const c = ease(T.cap[0], T.cap[1], p);
      b.cap.visible = c > .001;
      b.cap.position.y = lerp(MOUTH + (wide ? 1.6 : .45), MOUTH - .05, c);
      b.cap.rotation.y = (1 - c) * 4;
      b.cap.material.opacity = smooth(0, .35, c);
      b.labelMat.opacity = labelIn; b.label.visible = labelIn > .001;
      b.shade.material.opacity = .8 * up;
    });
    // the spices fall into the second bottle and come to rest on its floor
    const B = bottles[1], fallS = smooth(.804, .82, p), fallA = smooth(.809, .825, p), bed = B.g.position.y + .1 * BOTTLE_S;
    dropStick.visible = fallS > .001; dropStar.visible = fallA > .001;
    dropStick.position.set(B.x + .06, lerp(STREAM_TOP, bed + .2, fallS * fallS), -.05);
    dropStick.rotation.set(Math.PI / 2 - .9 * smooth(.815, .821, p), .3, .2 * fallS);
    dropStar.position.set(B.x - .14, lerp(STREAM_TOP + .4, bed + .04, fallA * fallA), .12);
    dropStar.rotation.set(.12 + (1 - fallA) * 2.4, fallA * 2, .1);

    // the still life: the dried pieces and the spices appear where they lie (no falling through the air)
    dried.forEach((d, i) => {
      d.m.visible = settleIn > .001;
      d.m.position.set(d.x, FLOOR + .13, d.z);
      d.m.rotation.set(Math.PI / 2 * (i ? 1 : -1) * .92, d.ry, 0);
      d.m.material.opacity = settleIn;
    });
    for (const sp of spices) {
      sp.o.visible = settleIn > .001;
      sp.o.position.set(sp.x, FLOOR + sp.y, sp.z);
      sp.o.rotation.set(sp.r[0], sp.r[1], sp.r[2]);
      sp.o.scale.setScalar(sp.s);
      for (const m of sp.mats) m.opacity = settleIn;
    }
    spiceShadow.visible = settleIn > .001;
    spiceShadow.position.set(1.72, FLOOR + .003, .45); spiceShadow.material.opacity = .55 * settleIn;
    // a fresh cherry beside the first bottle, appearing where it lies like the rest
    fresh.visible = rollIn > .001;
    fresh.position.set(-1.85, FLOOR + FRESH * RY + .025, .4);
    fresh.rotation.set(0, 0, -.08);
    freshMat.transparent = true; freshMat.opacity = rollIn;
    freshShadow.visible = fresh.visible;
    freshShadow.position.set(-1.85, FLOOR + .003, .4);
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
    set frame(f) { frame0 = f; fitFirst(); if (!running) { apply(progress, 0); renderer.render(scene, camera); } },
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
