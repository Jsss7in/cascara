// The pot of cascara syrup, with cinnamon and star anise floating in it, tipping to the left until it pours:
// frames rendered from the page's own 3D pot (offline, full quality), and where its lip is in each frame.
// Needs the scene's parts on window.__parts (add for the run, at the end of createHero in hero3d.js:
//   window.__parts = { world, pot, potGlassMat, potMat, potLiquid, potSurface, potFill, ears, spices, scene, camera, renderer };
// then build, serve, `node render.mjs <dir> 36 520`, pack.py, and take the line out again).
import { createRequire } from 'module';
import fs from 'fs';
const require = createRequire('/Users/justinmeissner/ClaudeC/onyx-site/package.json');
const { chromium } = require('playwright');
const [,, out, N = '36', S = '520'] = process.argv;
const b = await chromium.launch({ headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(`http://localhost:5191/?debug&t=${Date.now()}`, { waitUntil: 'load' });
await p.waitForFunction(() => !document.documentElement.classList.contains('is-loading'), null, { timeout: 60000 }).catch(() => {});
await p.waitForTimeout(1500);
const res = await p.evaluate(async ([N, S]) => {
  const H = window.__hero, P = window.__parts, R = P.renderer; H.stop(); H.jump(.7);
  const THREE = { Plane: P.potFill.constructor, Vec: P.potFill.normal.constructor, Group: P.pot.constructor, Mesh: P.potLiquid.constructor };
  P.scene.background.set('#E6D3B7');
  const pivot = new THREE.Group(); P.scene.add(pivot);
  P.world.visible = false;
  pivot.add(P.pot); P.pot.position.set(0, -.5, 0); P.pot.rotation.set(0, 0, 0); P.pot.scale.setScalar(1); P.pot.visible = true;
  for (const c of P.pot.children) c.visible = false;
  P.potLiquid.visible = true; for (const e of P.ears) e.visible = true;
  P.pot.children.forEach((c) => { if (c.material === P.potGlassMat) c.visible = true; });
  P.potGlassMat.side = 0; P.potGlassMat.opacity = 1; P.potGlassMat.needsUpdate = true;
  P.potLiquid.material = P.potMat; P.potMat.opacity = 1; P.potMat.transparent = false;
  P.potMat.thickness = .9; P.potMat.ior = 1.45; P.potMat.attenuationDistance = .48; P.potMat.needsUpdate = true;
  const u = P.potMat.userData.infuse; u.uBloom.value = 1; u.uSrc0.value.set(0, 0, 0); u.uSrc1.value.set(0, 0, 0); u.uTime.value = 3;
  // the syrup's level surface: a horizontal disc in the world, the ellipse where the level cuts the tipped pot
  const rim = new THREE.Plane(new THREE.Vec(0, -1, 0), 0), floor = new THREE.Plane(new THREE.Vec(0, 1, 0), 0);
  const surfMat = P.potSurface.material.clone();
  surfMat.color.set('#3a1206'); surfMat.roughness = .06; surfMat.metalness = 0; surfMat.opacity = 1; surfMat.transparent = false;
  surfMat.depthWrite = true; surfMat.envMapIntensity = 1; surfMat.clippingPlanes = [rim, floor];
  const surf = new THREE.Mesh(P.potSurface.geometry, surfMat); surf.rotation.x = -Math.PI / 2; P.scene.add(surf);
  // floating in it: a stick of cinnamon and a star anise
  const cin = P.spices[0].o, star = P.spices[2].o;
  for (const sp of [P.spices[0], P.spices[2]]) { P.scene.add(sp.o); sp.o.visible = true; sp.mats.forEach((m) => { m.opacity = 1; m.transparent = false; m.needsUpdate = true; }); }
  cin.scale.setScalar(.7); star.scale.setScalar(.95);
  R.transmissionResolutionScale = 1;
  const cam = P.camera.clone(); cam.clearViewOffset(); cam.fov = 26; cam.aspect = 1;
  cam.position.set(0, 2.1, 7.6); cam.lookAt(0, -.05, 0); cam.updateProjectionMatrix();
  R.setPixelRatio(1); R.setSize(S, S, false);
  const H0 = .58 - .5, TMAX = 38 * Math.PI / 180, r = 1.02;
  const frames = [], lips = [];
  const v = new THREE.Vec();
  const orig = R.render.bind(R);
  for (let i = 0; i < N; i++) {
    const th = TMAX * i / (N - 1), c = Math.cos(th), s = Math.sin(th);
    pivot.rotation.set(0, 0, th); pivot.updateMatrixWorld(true);
    const lipIn = -1.02 * s + .5 * c;                       // the inner edge of the left rim, its height
    const level = Math.min(H0 * c, lipIn - .004);
    P.potFill.constant = level;
    const up = new THREE.Vec(-s, c, 0); rim.normal.copy(up).negate(); rim.constant = .5 - .03; floor.normal.copy(up); floor.constant = .5 - .06;
    const t = level / c; surf.position.set(-t * s, level, 0); surf.scale.set(r / c, r, 1);
    // drifting to the low side as it tips
    const k = th / TMAX;
    cin.position.set(-t * s + .18 - .3 * k, level + .028, -.3 + .05 * k); cin.rotation.set(0, .9 - .2 * k, 0);
    star.position.set(-t * s - .3 - .22 * k, level + .02, .28); star.rotation.set(.05, .4 + .5 * k, -.04);
    u.uTop.value = level;
    orig(P.scene, cam);
    frames.push(R.domElement.toDataURL('image/png'));
    // the outer lip of the rim, on screen (0–1 of the frame)
    v.set(-1.09, .5, 0).applyAxisAngle(new THREE.Vec(0, 0, 1), th).project(cam);
    lips.push([+((v.x + 1) / 2).toFixed(4), +((1 - v.y) / 2).toFixed(4), level >= lipIn - .0045 ? 1 : 0]);
  }
  return { frames, lips };
}, [+N, +S]);
res.frames.forEach((d, i) => fs.writeFileSync(`${out}/f${String(i).padStart(3, '0')}.png`, Buffer.from(d.split(',')[1], 'base64')));
fs.writeFileSync(`${out}/lips.json`, JSON.stringify(res.lips));
console.log('frames', res.frames.length, errs.length ? errs : 'no errors', 'pour from frame', res.lips.findIndex((l) => l[2]));
await b.close();
