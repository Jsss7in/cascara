// Cascarup – the shop's studio shots: the bottle from the opening, in both kinds and both sizes, on a cream
// seamless, with what goes into the syrup lying beside it. Rendered once, not on the page:
//   zsh _build/hero3d/shots.sh      (bundles this file, renders every shot in a browser, saves assets/shop/*.webp)
// They stand in for photographs of the real bottles until those exist.
import {
  WebGLRenderer, Scene, PerspectiveCamera, PMREMGenerator, Group, Mesh, Color, Vector3, CircleGeometry,
  TorusGeometry, CylinderGeometry, PlaneGeometry, SphereGeometry, ExtrudeGeometry, Shape, BufferAttribute,
  MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, DirectionalLight, HemisphereLight, CanvasTexture,
  SRGBColorSpace, NeutralToneMapping, Plane, DoubleSide, TextureLoader,
} from 'three';
import {
  studio, setFruit, skinTexture, skinHalf, skinMaterial, BOTTLE, MOUTH, lathe, radiusAt, capGeometry,
  labelTexture, shadowTexture, KINDS, cinnamon, starAnise,
} from './hero3d.js';

// a 500 ml bottle is the 200 ml one scaled by the cube root of the volumes
const SIZE = { 200: 1, 500: Math.cbrt(2.5) };
const W = 1200, H = 800;

// the backdrop: a cream seamless, lighter where the light falls, a little deeper towards the edges
function backdrop() {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#eee1cb'); g.addColorStop(.62, '#e8d6ba'); g.addColorStop(1, '#ddc6a6');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  const r = x.createRadialGradient(W * .56, H * .4, 0, W * .56, H * .4, W * .62);
  r.addColorStop(0, 'rgba(255,250,240,.5)'); r.addColorStop(1, 'rgba(255,250,240,0)');
  x.fillStyle = r; x.fillRect(0, 0, W, H);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace;
  return t;
}

function softShadow(opacity, sx, sz) {
  const m = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false, opacity }));
  m.rotation.x = -Math.PI / 2; m.scale.set(sx, sz, 1); m.position.y = .003;
  return m;
}

export async function setup(canvas) {
  await Promise.all(['700 100px DynaPuff', '400 40px Jost'].map((f) => document.fonts.load(f)));
  setFruit(1, 1.2751, .94);   // the photograph's cherry, as in the opening

  const renderer = new WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(2); renderer.setSize(W, H, false);
  renderer.toneMapping = NeutralToneMapping;
  renderer.localClippingEnabled = true;
  const scene = new Scene();
  scene.background = backdrop();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio(), .03).texture;
  scene.environmentIntensity = .9;
  const key = new DirectionalLight('#fff1df', 1.5); key.position.set(-4, 6, 6); scene.add(key);
  const rim = new DirectionalLight('#ffe9da', 1.3); rim.position.set(5, 3, -6); scene.add(rim);
  scene.add(new HemisphereLight('#fff6ea', '#9a6a48', .25));

  const camera = new PerspectiveCamera(21, W / H, .1, 100);
  camera.position.set(0, 1.8, 11.4); camera.lookAt(-.1, 1.4, 0);

  const speckle = skinTexture();
  const photo = await new Promise((ok) => new TextureLoader().load('/assets/cherry/kirsche-textur.jpg', ok, undefined, () => ok(null)));

  return (id, ml) => {
    const k = KINDS[id], S = SIZE[ml];
    const stage = new Group(); scene.add(stage);

    // the bottle, as in the opening, filled to its shoulder
    const bottle = new Group(); bottle.scale.setScalar(S); bottle.position.set(.42, 0, 0); stage.add(bottle);
    const glass = new Mesh(lathe(BOTTLE), new MeshPhysicalMaterial({
      color: '#ffffff', roughness: .03, transmission: 1, thickness: .3, ior: 1.5, clearcoat: 1, clearcoatRoughness: .02,
      attenuationColor: new Color('#e4ebe2'), attenuationDistance: 2.5, transparent: true, side: DoubleSide, depthWrite: false,
    }));
    const level = 1.8;   // filled into the neck, as in the opening
    const syrup = new Mesh(lathe(BOTTLE.slice(0, 10), .035), new MeshPhysicalMaterial({
      color: '#ffffff', roughness: .05, transmission: 1, thickness: 1.1, ior: 1.45,
      attenuationColor: new Color(k.syrup), attenuationDistance: .95, clearcoat: 1,
      clippingPlanes: [new Plane(new Vector3(0, -1, 0), level * S)],
    }));
    const rr = radiusAt(level, .035);
    const surface = new Mesh(new CircleGeometry(rr, 72), new MeshPhysicalMaterial({ color: k.surface, roughness: .05, clearcoat: 1 }));
    surface.rotation.x = -Math.PI / 2; surface.position.y = level;
    const meniscus = new Mesh(new TorusGeometry(rr, .01, 8, 96), new MeshPhysicalMaterial({ color: '#a85a34', roughness: .15, transparent: true, opacity: .35 }));
    meniscus.rotation.x = Math.PI / 2; meniscus.position.y = level;
    const cap = new Mesh(capGeometry(), new MeshPhysicalMaterial({ color: k.cap, roughness: .55, clearcoat: .2 }));
    cap.position.y = MOUTH - .05;
    const label = new Mesh(new CylinderGeometry(.628, .628, .42, 96, 1, true, -Math.PI * .4, Math.PI * .8),
      new MeshPhysicalMaterial({ map: labelTexture(`${k.label} · ${ml} ML`, 60), color: '#ece6dc', roughness: .65, side: DoubleSide }));
    label.position.y = .6;
    bottle.add(syrup, surface, meniscus, glass, label, cap);
    syrup.renderOrder = surface.renderOrder = meniscus.renderOrder = 1;   // drawn after the glass, or the glass would hide them
    bottle.rotation.y = -.18;
    const bs = softShadow(.8, 2.2 * S, 1.6 * S); bs.position.x = .42; stage.add(bs);
    const cast = softShadow(.32, 3.4 * S, 1.1 * S); cast.position.set(.42 + 1.1 * S, .002, -.55 * S); cast.rotation.z = -.32; stage.add(cast);

    // beside it, what the syrup is made of
    const half = (dry, side) => {
      const m = new Mesh(skinHalf(side), skinMaterial(speckle));
      if (dry) {
        m.morphTargetInfluences = [1]; m.material.userData.dry.value = 1;
        Object.assign(m.material, { roughness: .58, clearcoat: .16, clearcoatRoughness: .4, sheen: .4 });
        m.material.sheenColor.set('#c07a5c');
      } else {
        m.morphTargetInfluences = [0];
        if (photo) { m.material.userData.photo.value = photo; m.material.userData.usePhoto.value = 1; m.material.userData.glow.value = .72; }
      }
      return m;
    };
    if (k.props === 'cascara') {
      // a fresh cherry standing as in the photograph, and two dried halves of its skin: cascara
      const cherry = new Group(); cherry.add(half(false, -1), half(false, 1));
      cherry.scale.setScalar(.36); cherry.position.set(-1.28, .36 * 1.2751 + .02, .62); stage.add(cherry);
      const cs = softShadow(.75, .95, .7); cs.position.set(-1.28, .003, .62); stage.add(cs);
      [[-2.02, .1, -.6, 1], [-.7, .72, 2.5, -1]].forEach(([x, z, ry, side]) => {
        const d = half(true, side); d.scale.setScalar(.3);
        d.position.set(x, .19, z); d.rotation.set(Math.PI / 2 * side * .92, ry, 0); stage.add(d);
        const s = softShadow(.55, .75, .5); s.position.set(x, .003, z); stage.add(s);
      });
    } else {
      // two sticks of cinnamon and a star anise; one dried half of cascara between them
      [[-1.45, .085, .62, 0, -.28], [-1.25, .2, .3, .1, -.62]].forEach(([x, y, z, rz, ry], i) => {
        const c = cinnamon(1.35); c.position.set(x, y, z); c.rotation.set(0, Math.PI / 2 + ry, rz); stage.add(c);
        if (!i) { const s = softShadow(.5, 1.6, .38); s.position.set(x, .003, z + .05); s.rotation.z = -ry; stage.add(s); }
      });
      const anise = starAnise(); anise.position.set(-.55, .085, .95); anise.rotation.set(.05, .4, -.04); stage.add(anise);
      const as = softShadow(.55, .8, .62); as.position.set(-.55, .003, .95); stage.add(as);
      const d = half(true, 1); d.scale.setScalar(.3); d.position.set(-2.1, .19, -.2); d.rotation.set(Math.PI / 2 * -.92, 1.2, 0); stage.add(d);
      const s = softShadow(.5, .75, .5); s.position.set(-2.1, .003, -.2); stage.add(s);
    }

    renderer.render(scene, camera);
    const url = canvas.toDataURL('image/png');
    scene.remove(stage);
    return url;
  };
}

window.shots = setup;
