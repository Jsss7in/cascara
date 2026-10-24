// Cascarup – the opening in 3D: a coffee cherry comes apart layer by layer, the beans leave for the roaster,
// the skin stays, dries into cascara and ends up as syrup in the bottle.
// Built into assets/hero3d.js by _build/hero3d/build.sh (three.js is bundled and trimmed to what is used).
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, Group, Mesh, Color, Vector3, MathUtils,
  SphereGeometry, LatheGeometry, CylinderGeometry, PlaneGeometry, CircleGeometry, TorusGeometry, BufferAttribute,
  MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, DoubleSide, BackSide, DirectionalLight,
  HemisphereLight, CanvasTexture, SRGBColorSpace, NeutralToneMapping, Plane, Vector2, InstancedMesh, Object3D,
  Matrix4, Quaternion, Euler,
} from 'three';
import { RoomEnvironment } from './RoomEnvironment.js';

// ---------------------------------------------------------------------------------------------------------------
// small helpers
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const ease = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
const lerp = (a, b, t) => a + (b - a) * t;

// 3D simplex noise (Gustavson), for the skin's mottling and its wrinkles once dried
const G3 = 1 / 6, F3 = 1 / 3;
const grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
const perm = new Uint8Array(512);
{ let s = 1234567; const p = new Uint8Array(256); for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { s = (s * 16807) % 2147483647; const j = s % (i + 1); [p[i], p[j]] = [p[j], p[i]]; }
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
// the cherry: a little taller than wide, a small flower scar at the bottom, the stalk at the top
const RX = 1, RY = 1.13, RZ = .96;

function skinHalf(side) {
  // half an ellipsoid shell, cut along the plane in which the two beans face each other
  const g = new SphereGeometry(1, 96, 72, side > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI);
  const pos = g.attributes.position, n = pos.count;
  const dry = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const deep = new Color('#6e0710'), red = new Color('#b00d1c'), warm = new Color('#c8331d'), c = new Color();
  for (let i = 0; i < n; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    // flower scar: a shallow dimple at the bottom, the stalk end gently flattened
    const bottom = Math.max(0, -y - .86), top = Math.max(0, y - .9);
    const k = 1 - bottom * .9 - top * .5;
    pos.setXYZ(i, x * RX * k, y * RY, z * RZ * k);
    // colour: deep red with darker blushes, warmer towards the stalk, mottled like a real cherry
    const m = fbm(x * 3.1 + 3, y * 3.1, z * 3.1, 4), fine = noise3(x * 22, y * 22, z * 22);
    c.copy(red).lerp(deep, clamp(.28 - m * .5 + Math.max(0, -y) * .3 + fine * .05)).lerp(warm, clamp((y - .62) * 1.1) * .45);
    col.set([c.r, c.g, c.b], i * 3);
    // dried: wrinkled, shrunk, edges curling outwards – baked as a morph target the GPU blends to
    const ridge = 1 - Math.abs(noise3(x * 6.5, y * 4.2, z * 6.5));          // long creases, like dried leather
    const w = (ridge * ridge - .45) * .055 + fbm(x * 9, y * 9, z * 9, 3) * .018;
    const s = .76 + w;
    const curl = Math.abs(x) < .4 ? (.4 - Math.abs(x)) * .5 : 0;           // the cut edge rolls a little
    dry.set([(x * RX * k) * s + side * curl * .42, y * RY * s * .9, (z * RZ * k) * s * .94], i * 3);
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.morphAttributes.position = [new BufferAttribute(dry, 3)];
  g.computeVertexNormals();
  // normals for the dried shape, so the light falls into the wrinkles
  const dg = g.clone(); dg.setAttribute('position', new BufferAttribute(dry, 3)); dg.computeVertexNormals();
  g.morphAttributes.normal = [dg.attributes.normal.clone()];
  dg.dispose();
  return g;
}

function cutRing(side, inner) {
  // the cut face of the skin: a thin elliptical band between the outer skin and the flesh
  const seg = 160, g = new PlaneGeometry(1, 1, seg, 1);
  const p = g.attributes.position;
  for (let i = 0; i <= seg; i++) {
    const a = -Math.PI / 2 + (i / seg) * Math.PI * 2;
    for (let r = 0; r < 2; r++) {
      const f = r === 0 ? 1 : inner, idx = r * (seg + 1) + i;
      const y = Math.sin(a), z = Math.cos(a);
      const bottom = Math.max(0, -y - .86), top = Math.max(0, y - .9), k = 1 - bottom * .9 - top * .5;
      p.setXYZ(idx, side * .002, y * RY * f, z * RZ * k * f);
    }
  }
  g.computeVertexNormals();
  return g;
}

function beanGeometry(side) {
  // a green coffee bean: domed on the outside, flat towards its twin, with the S-shaped cut down the middle
  const g = new SphereGeometry(1, 64, 48);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const flat = side * x < 0;                       // the face looking at the other bean
    let nx = x * .5, ny = y * .8, nz = z * .62;
    if (flat) {
      nx *= .12;
      const s = .08 * Math.sin(y * 3.4);            // the crease winds down the flat face
      const d = Math.exp(-Math.pow((nz - s) / .06, 2)) * (1 - Math.pow(Math.abs(y), 6));
      nx += side * d * .12;
    }
    nx += noise3(x * 4, y * 4, z * 4) * .006;
    p.setXYZ(i, nx, ny, nz);
  }
  g.computeVertexNormals();
  return g;
}

function flakeGeometry() {
  // a piece of dried cascara: thin, curled, with a ragged outline
  const g = new CircleGeometry(.13, 18);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), a = Math.atan2(y, x), r = Math.hypot(x, y);
    const rag = 1 + noise3(Math.cos(a) * 1.3, Math.sin(a) * 1.3, 7) * .17;         // a broken, rounded outline
    const nx = x * rag * 1.3, ny = y * rag * .9;
    // a piece of husk keeps the curve of the fruit: cupped, with a little twist
    p.setXYZ(i, nx, ny, (nx * nx + ny * ny) * 2.6 + nx * ny * 1.2 + noise3(nx * 16, ny * 16, 2) * .01);
  }
  g.computeVertexNormals();
  return g;
}

// the bottle: a round syrup bottle, its profile turned on the lathe
const BOTTLE = [[0, 0], [.52, 0], [.6, .03], [.62, .1], [.62, 1.12], [.6, 1.24], [.5, 1.4], [.3, 1.56], [.215, 1.66], [.21, 1.92], [.235, 1.95], [.235, 2.02], [0, 2.02]];
function lathe(points, inset = 0, segs = 96) {
  return new LatheGeometry(points.map(([r, y]) => new Vector2(Math.max(0, r - inset), y)), segs);
}
function radiusAt(y, inset) {
  for (let i = 1; i < BOTTLE.length; i++) {
    const [r0, y0] = BOTTLE[i - 1], [r1, y1] = BOTTLE[i];
    if (y >= y0 && y <= y1 && y1 > y0) return Math.max(0, lerp(r0, r1, (y - y0) / (y1 - y0)) - inset);
  }
  return 0;
}

function labelTexture() {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 640;
  const x = c.getContext('2d');
  x.fillStyle = '#efe2cb'; x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = 'rgba(58,33,22,.08)'; x.fillRect(0, 26, c.width, 3); x.fillRect(0, c.height - 29, c.width, 3);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillStyle = '#b4592a';
  x.font = '700 200px DynaPuff, "Arial Rounded MT Bold", sans-serif';
  x.fillText('Cascarup', c.width / 2, c.height * .45);
  x.fillStyle = '#3a2116';
  x.font = '400 40px Jost, Futura, sans-serif';
  x.letterSpacing = '10px';
  x.fillText('SIRUP AUS DER KAFFEEKIRSCHE', c.width / 2, c.height * .74);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 8;
  return t;
}

function shadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d'), g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(58,33,22,.55)'); g.addColorStop(.45, 'rgba(58,33,22,.22)'); g.addColorStop(1, 'rgba(58,33,22,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  return new CanvasTexture(c);
}

// ---------------------------------------------------------------------------------------------------------------
export function createHero(canvas, { onFrame } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.localClippingEnabled = true;

  const scene = new Scene();
  scene.background = new Color('#efe2cb');
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  scene.environmentIntensity = .55;

  const camera = new PerspectiveCamera(26, 1, .1, 100);
  camera.position.set(0, 0, 12.6);

  // light like a product shot: a warm key from the upper left, a cool rim from behind, a soft fill
  const key = new DirectionalLight('#fff0dc', 3.2); key.position.set(-4, 5, 6); scene.add(key);
  const rim = new DirectionalLight('#ffe6d6', 2.4); rim.position.set(5, 2.5, -6); scene.add(rim);
  scene.add(new HemisphereLight('#fff6ea', '#a06a45', .55));

  const world = new Group(); scene.add(world);           // turned for the three-quarter view
  const cherry = new Group(); world.add(cherry);

  // materials
  const skinMat = new MeshPhysicalMaterial({
    vertexColors: true, roughness: .24, clearcoat: 1, clearcoatRoughness: .06,
    sheen: .35, sheenColor: new Color('#ff9b8a'), sheenRoughness: .45,
  });
  const fleshMat = new MeshPhysicalMaterial({ color: '#f1dca8', roughness: .32, clearcoat: .8, clearcoatRoughness: .2, side: BackSide, transparent: true });
  const cutMat = new MeshPhysicalMaterial({ color: '#e7b48c', roughness: .4, side: DoubleSide, transparent: true });
  const pulpMat = new MeshPhysicalMaterial({
    color: '#f2df9f', roughness: .08, clearcoat: 1, clearcoatRoughness: .04, transparent: true, opacity: .38,
    side: DoubleSide, depthWrite: false,
  });
  const parchMat = new MeshPhysicalMaterial({ color: '#e8d9b4', roughness: .9, transparent: true, opacity: .42, side: DoubleSide, depthWrite: false });
  const beanMat = new MeshPhysicalMaterial({ color: '#9ea77a', roughness: .5, sheen: .5, sheenColor: new Color('#eef0d4'), clearcoat: .25 });
  const dryTint = new Color().setRGB(.24, 4.6, .66);    // × the red of the skin ≈ the brown of dried cascara
  // dew: glossy water without refraction, so the first frames need no extra render pass on a phone
  const dropMat = new MeshPhysicalMaterial({ color: '#fff4f0', roughness: 0, clearcoat: 1, clearcoatRoughness: 0, transparent: true, opacity: .32, specularIntensity: 1 });

  // skin halves (each with its flesh inside and the cut edge), pulp, parchment and bean – one set per side
  const sides = [-1, 1].map((side) => {
    const half = new Group();
    const skin = new Mesh(skinHalf(side), skinMat.clone()); skin.morphTargetInfluences = [0];
    const flesh = new Mesh(skinHalf(side), fleshMat); flesh.scale.setScalar(.965);
    const cut = new Mesh(cutRing(side, .955), cutMat);
    half.add(skin, flesh, cut);
    const pulp = new Mesh(new SphereGeometry(1, 64, 48, side > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI), pulpMat);
    pulp.scale.set(RX * .8, RY * .86, RZ * .8);
    const bean = new Group();
    const seed = new Mesh(beanGeometry(side), beanMat);
    const parch = new Mesh(beanGeometry(side), parchMat); parch.scale.setScalar(1.09);
    bean.add(seed, parch); bean.position.x = side * .03;
    const drops = new Group();
    for (let i = 0; i < 16; i++) {
      const u = ((i * 47) % 97) / 97, w = ((i * 61) % 89) / 89;
      const th = .45 + u * 1.9, ph = (side > 0 ? -Math.PI / 2 : Math.PI / 2) + (w - .5) * 2.6;
      const dir = new Vector3(Math.sin(th) * Math.sin(ph) * RX, Math.cos(th) * RY, Math.sin(th) * Math.cos(ph) * RZ);
      if (side * dir.x < .05) continue;
      const r = .028 + ((i * 7) % 5) * .012;
      const d = new Mesh(new SphereGeometry(r, 16, 12), dropMat);
      d.position.copy(dir).multiplyScalar(1.004); d.scale.set(1, .8, 1); drops.add(d);
    }
    half.add(drops);
    cherry.add(half, pulp, bean);
    return { side, half, skin, flesh, cut, pulp, bean, parch, drops };
  });

  // stalk on top
  const stalk = new Mesh(new CylinderGeometry(.045, .07, .42, 16), new MeshStandardMaterial({ color: '#6e6a3a', roughness: .7 }));
  stalk.position.y = RY + .14; stalk.rotation.z = -.18; cherry.add(stalk);
  const calyx = new Mesh(new TorusGeometry(.085, .028, 10, 24), new MeshStandardMaterial({ color: '#4a2316', roughness: .8 }));
  calyx.position.y = -RY + .012; calyx.rotation.x = Math.PI / 2; calyx.scale.set(1, 1, .5); cherry.add(calyx);

  // dried flakes: they take the skin's place, then fall into the bottle
  const FLAKES = 120;
  const flakeMat = new MeshPhysicalMaterial({ color: '#ffffff', roughness: .72, side: DoubleSide, sheen: .3, sheenColor: new Color('#c4825e') });
  const flakes = new InstancedMesh(flakeGeometry(), flakeMat, FLAKES);
  // each piece starts on the surface of one of the two dried halves, so the shells visibly break apart
  const flakeData = [...Array(FLAKES)].map((_, i) => {
    const side = i % 2 ? 1 : -1;
    const u = ((i * 0.618034) % 1), w = ((i * 0.7548777) % 1);
    const th = Math.acos(1 - 2 * u), ph = (w - .5) * Math.PI;          // the outer half of the ellipsoid
    const dir = new Vector3(side * Math.abs(Math.sin(th) * Math.cos(ph)), Math.cos(th), Math.sin(th) * Math.sin(ph));
    return {
      from: new Vector3(dir.x * RX * .74 + side * .4, dir.y * RY * .68, dir.z * RZ * .7),
      spin: new Vector3(((i * 13) % 7) - 3, ((i * 29) % 9) - 4, ((i * 7) % 5) - 2).multiplyScalar(.5),
      delay: ((i * 17) % FLAKES) / FLAKES, scale: .7 + ((i * 11) % 10) / 22,
    };
  });
  { const c = new Color(), dark = new Color('#3e140b'), warm = new Color('#8a3a1c');
    for (let i = 0; i < FLAKES; i++) flakes.setColorAt(i, c.copy(dark).lerp(warm, ((i * 31) % 17) / 17)); }
  flakes.frustumCulled = false; world.add(flakes);

  // the bottle with the syrup rising inside it
  const bottle = new Group(); world.add(bottle);
  const glass = new Mesh(lathe(BOTTLE), new MeshPhysicalMaterial({
    color: '#ffffff', roughness: .03, transmission: 1, thickness: .25, ior: 1.5, clearcoat: 1, clearcoatRoughness: .02,
    transparent: true, opacity: 1, side: DoubleSide, depthWrite: false, specularIntensity: 1,
  }));
  const fill = new Plane(new Vector3(0, -1, 0), 0);
  const syrupMat = new MeshPhysicalMaterial({ color: '#8f2f15', roughness: .12, clearcoat: 1, transmission: .35, thickness: 1.2, attenuationColor: new Color('#6e1d0b'), attenuationDistance: .6, clippingPlanes: [fill] });
  const syrup = new Mesh(lathe(BOTTLE.slice(0, 8), .035), syrupMat);
  const surface = new Mesh(new CircleGeometry(1, 64), new MeshPhysicalMaterial({ color: '#9a3718', roughness: .08, clearcoat: 1 }));
  surface.rotation.x = -Math.PI / 2;
  const cap = new Mesh(new CylinderGeometry(.255, .255, .3, 48), new MeshPhysicalMaterial({ color: '#b4592a', roughness: .42, clearcoat: .3 }));
  cap.position.y = 2.1;
  const label = new Mesh(new CylinderGeometry(.628, .628, .62, 96, 1, true, -Math.PI * .52, Math.PI * 1.04),
    new MeshPhysicalMaterial({ map: labelTexture(), roughness: .6, side: DoubleSide }));
  label.position.y = .58;
  bottle.add(syrup, surface, glass, label, cap);
  bottle.position.y = -1.05;
  document.fonts?.load('700 100px DynaPuff').then(() => { label.material.map = labelTexture(); label.material.needsUpdate = true; });

  // a soft contact shadow on the floor that the eye reads as the table
  const shadow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; world.add(shadow);

  // anchors for the labels on the exploded view (Haut, Fruchtfleisch, Pergamenthaut, Bohne)
  const anchors = {
    haut: new Object3D(), fleisch: new Object3D(), pergament: new Object3D(), bohne: new Object3D(),
  };
  sides[1].half.add(anchors.haut); anchors.haut.position.set(.62, .62, .55);
  sides[1].pulp.add(anchors.fleisch); anchors.fleisch.position.set(.55, -.55, .55);
  sides[0].bean.add(anchors.pergament); anchors.pergament.position.set(-.2, .55, .3);
  sides[0].bean.add(anchors.bohne); anchors.bohne.position.set(-.18, -.45, .25);

  // -------------------------------------------------------------------------------------------------------------
  let width = 1, height = 1, target = 0, progress = 0, last = performance.now(), running = true, time = 0;
  const v = new Vector3(), m = new Matrix4(), q = new Quaternion(), e = new Euler(), sv = new Vector3();

  let wide = true;
  function layout(w, h) {
    width = w; height = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    wide = w / h > 1.05;
    camera.fov = wide ? 24 : 33;
    aim(0);
  }
  // the object sits right of the words on wide screens and below them on narrow ones; for the exploded
  // view it moves to the middle, where the labels have room on both sides
  function aim(centre, back = 0) {
    camera.clearViewOffset();
    if (wide) camera.setViewOffset(width, height, -width * .2 * (1 - centre), 0, width, height);
    else camera.setViewOffset(width, height, 0, -height * .21 * (1 - centre * .75), width, height);
    camera.position.z = 12.6 * (1 + (wide ? 0 : back * .55));
    camera.updateProjectionMatrix();
  }

  function apply(p, dt) {
    time += dt;
    // 0 – 0.10: the whole cherry, turning slowly and floating
    const intro = 1 - smooth(.06, .16, p);
    const turn = time * .25 * (.35 + intro * .65);
    const explode = ease(.12, .34, p);              // layers come apart
    const beansGo = ease(.36, .5, p);               // the beans leave for the roaster
    const pulpGo = smooth(.4, .5, p);               // the pulp dissolves
    const dryIn = ease(.5, .64, p);                 // the skin dries
    const together = ease(.37, .5, p);              // the halves close in again, away from the words
    const crumble = smooth(.66, .75, p);            // the skin breaks into flakes
    const fall = smooth(.7, .86, p);                // the flakes fall into the bottle
    const bottleIn = ease(.66, .82, p);
    const level = smooth(.74, .9, p);

    // three-quarter view while the layers stand apart, front view for the bottle
    world.rotation.y = -.55 * explode * (1 - bottleIn);
    world.rotation.x = lerp(.06, .16, explode) * (1 - bottleIn);
    const open = smooth(.1, .22, p) * (1 - smooth(.35, .44, p));
    aim(open, open);
    cherry.rotation.y = intro * turn;
    cherry.position.y = Math.sin(time * 1.1) * .05 * (1 - bottleIn) + lerp(0, .25, explode) * (1 - together);

    for (const s of sides) {
      const out = s.side * (explode * 1.55) * (1 - together * .74);
      s.half.position.x = out;
      s.half.rotation.y = s.side * explode * .5 * (1 - together);
      s.skin.morphTargetInfluences[0] = dryIn;
      s.skin.material.color.setRGB(1, 1, 1).lerp(dryTint, dryIn);
      s.skin.material.roughness = lerp(.24, .8, dryIn);
      s.skin.material.clearcoat = lerp(1, .05, dryIn);
      // the flesh and the cut edge go as the skin shrinks around them
      const fleshGo = smooth(0, .35, dryIn);
      s.flesh.scale.setScalar(.965 * (1 - fleshGo * .25));
      s.cut.scale.setScalar(1 - fleshGo * .25);
      s.flesh.material.opacity = s.cut.material.opacity = 1 - fleshGo;
      s.flesh.visible = s.cut.visible = explode > .002 && fleshGo < .99;
      s.drops.visible = explode < .25;
      s.half.scale.setScalar(1 - crumble * .9);
      s.half.visible = crumble < .98;
      // pulp, parchment and bean move out less than the skin: the classic exploded view
      s.pulp.position.x = s.side * explode * 1.02;
      s.pulp.material.opacity = .38 * (1 - pulpGo);
      s.pulp.scale.set(RX * .8, RY * .86, RZ * .8).multiplyScalar(1 - pulpGo * .25);
      s.pulp.visible = pulpGo < .99;
      const bx = s.side * (.03 + explode * .5), fly = beansGo;
      s.bean.position.set(bx + fly * (3.4 + s.side * .6), fly * 3.6, fly * -1.5);
      s.bean.rotation.set(fly * 2.2 * s.side, fly * 3.1, explode * s.side * .25);
      s.bean.visible = fly < .995;
      s.parch.material.opacity = .42 * clamp(1 - explode * .3) * (1 - smooth(.34, .4, p));
    }
    stalk.visible = calyx.visible = explode < .02;

    // flakes: born where the dried skin was, they tumble down into the neck of the bottle
    flakes.visible = crumble > .01 && fall < .995;
    const sb = bottle.scale.y, neck = new Vector3(0, bottle.position.y + 1.95 * sb, 0);
    for (let i = 0; i < FLAKES; i++) {
      const d = flakeData[i];
      const f = clamp((fall - d.delay * .45) / .55);
      const start = sv.copy(d.from);
      start.y += cherry.position.y;
      v.copy(start).lerp(neck, ease(0, 1, Math.min(1, f * 1.15)));
      v.y += Math.sin(Math.min(1, f * 1.15) * Math.PI) * .45 - smooth(.8, 1, f) * .9 * sb;   // down through the neck
      e.set(d.spin.x * (crumble + f * 4), d.spin.y * (crumble + f * 4), d.spin.z * (crumble + f * 3));
      q.setFromEuler(e);
      const sc = d.scale * .8 * crumble * (1 - smooth(.62, .9, f));
      m.compose(v, q, sv.set(sc, sc, sc));
      flakes.setMatrixAt(i, m);
    }
    flakes.instanceMatrix.needsUpdate = true;

    // the bottle rises from below, fills, and only then gets its cap; it sways, so the label stays readable
    bottle.visible = bottleIn > .001;
    // it waits low while the flakes fall in from above, then rises into the final picture
    bottle.position.y = lerp(-6.5, -2.55, bottleIn) + 1.3 * ease(.85, .95, p);
    bottle.scale.setScalar(lerp(1.12, wide ? 1.34 : 1.08, smooth(.8, .95, p)));
    bottle.rotation.y = Math.sin(time * .45) * .32 * smooth(.86, 1, p) - .25 * (1 - smooth(.8, .95, p));
    const capOn = ease(.88, .95, p);
    cap.visible = capOn > .001;
    cap.position.y = lerp(3.1, 2.1, capOn);
    cap.rotation.y = (1 - capOn) * 5;
    const y = lerp(.06, 1.16, level);
    fill.constant = bottle.position.y + y * bottle.scale.y;  // clip the syrup at its level (world space)
    surface.visible = level > .01;
    surface.position.y = y;
    surface.scale.setScalar(radiusAt(y, .035));

    // shadow follows whatever stands on the floor
    const floorY = lerp(-RY - .55, -1.25, bottleIn);
    shadow.position.y = floorY;
    const lift = (cherry.position.y + RY) - (floorY + RY);
    shadow.scale.setScalar(lerp(2.6, 1.9, bottleIn) * (1 - explode * .3 * (1 - bottleIn)) + Math.abs(lift) * .2);
    shadow.material.opacity = lerp(.55, .75, bottleIn) * (1 - explode * .45 * (1 - bottleIn));
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

  function frame(now) {
    if (!running) return;
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    progress += (target - progress) * (1 - Math.pow(.0009, dt));   // a soft follow, so the scroll never jerks
    if (Math.abs(target - progress) < 1e-4) progress = target;
    apply(progress, dt);
    renderer.render(scene, camera);
    onFrame?.(progress, labels);
    requestAnimationFrame(frame);
  }

  return {
    resize: layout,
    // the page tells the scene its colour, so canvas and page are one surface
    set background(css) { scene.background.set(css); },
    set progress(p) { target = clamp(p); },
    jump(p) { target = progress = clamp(p); apply(progress, 0); renderer.render(scene, camera); },
    start() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); } },
    stop() { running = false; },
    renderOnce() { apply(progress, 0); renderer.render(scene, camera); },
    begin() { last = performance.now(); requestAnimationFrame(frame); },
    labels,
    renderer,
  };
}
