// Cascarup – the shop: choose kind, size and number, collect them in the basket, then in three steps (basket,
// delivery, payment) order and pay. The basket stays in this browser (localStorage); the order is paid through
// our payment service (checkout.js) and sent by post. Shipping is reckoned by weight at the Post's prices.
(() => {
  const products = [...document.querySelectorAll('[data-product]')];
  const dialog = document.querySelector('[data-cart]');
  const C = window.CascarupCheckout;
  if (!products.length || !dialog || !C) return;

  const KEY = 'cascarup.cart.v4';   // v4: Original and Cozy Spice
  const fmt = C.fmt;
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* private mode: the basket lives as long as the page */ } };
  const known = new Set(products.map((p) => JSON.parse(p.dataset.product).id));
  let items = load().filter((it) => it && known.has(it.id) && it.ml && it.qty > 0 && it.price > 0);
  try { localStorage.removeItem('cascarup.cart.v3'); } catch { /* nothing to tidy */ }

  const SHIP = JSON.parse(dialog.dataset.shipping);
  const openBtn = document.querySelector('[data-cart-open]');
  const count = document.querySelector('[data-cart-count]');
  const list = dialog.querySelector('[data-cart-items]');
  const empty = dialog.querySelector('[data-cart-empty]');
  const sums = dialog.querySelector('[data-cart-sums]');
  const form = dialog.querySelector('[data-order]');
  const body = dialog.querySelector('[data-cart-body]');
  const done = dialog.querySelector('[data-cart-done]');
  const title = dialog.querySelector('[data-cart-title]');
  const backBtn = dialog.querySelector('[data-cart-back]');
  const stepsBar = [...dialog.querySelectorAll('[data-cart-steps] li')];
  const steps = [...dialog.querySelectorAll('[data-step]')];
  const status = form.querySelector('.order__status');
  const payBtn = form.querySelector('[data-pay]');
  const FIELDS = ['vorname', 'nachname', 'email', 'telefon', 'strasse', 'zusatz', 'plz', 'ort', 'bemerkung', 'zahlung'];

  const subtotal = () => items.reduce((a, it) => a + it.qty * it.price, 0);
  const bottles = () => items.reduce((a, it) => a + it.qty, 0);
  // the parcel's weight: the bottles (glass and syrup) and the box; over 30 kg it goes as several parcels
  const shipping = () => {
    if (!items.length) return 0;
    const kg = SHIP.box + items.reduce((a, it) => a + it.qty * (SHIP.weights[it.ml] || 1), 0);
    const tier = SHIP.tiers.find(([max]) => kg <= max);
    if (tier) return tier[1];
    const [max, price] = SHIP.tiers[SHIP.tiers.length - 1];
    return Math.ceil(kg / max) * price;
  };
  const total = () => subtotal() + shipping();

  // ---- the product cards: kind is the card, size and number are chosen on it ----------------------------------
  for (const card of products) {
    const data = JSON.parse(card.dataset.product);
    const sizes = [...card.querySelectorAll('[data-size]')];
    const shots = [...card.querySelectorAll('[data-shot]')];
    const price = card.querySelector('[data-price]');
    const qty = card.querySelector('[data-qty] input');
    const add = card.querySelector('[data-add]');
    let ml = data.sizes[0].ml;
    const pick = (m) => {
      ml = m;
      sizes.forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.size === m)));
      shots.forEach((s) => s.classList.toggle('is-shown', +s.dataset.shot === m));   // one bottle fades into the other
      price.textContent = fmt(data.sizes.find((s) => s.ml === m).price);
    };
    sizes.forEach((b) => b.addEventListener('click', () => pick(+b.dataset.size)));
    const clampQty = () => { qty.value = String(Math.min(24, Math.max(1, Math.round(+qty.value) || 1))); };
    card.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => {
      qty.value = String(+qty.value + +b.dataset.step); clampQty();
    }));
    qty.addEventListener('change', clampQty);
    add.addEventListener('click', () => {
      clampQty();
      const n = +qty.value, size = data.sizes.find((s) => s.ml === ml);
      const it = items.find((i) => i.id === data.id && i.ml === ml);
      if (it) it.qty = Math.min(24, it.qty + n);
      else items.push({ id: data.id, name: data.name, ml, price: size.price, qty: n });
      save(); render();
      add.classList.add('is-added');
      add.textContent = 'Im Warenkorb';
      clearTimeout(add.t);
      add.t = setTimeout(() => { add.classList.remove('is-added'); add.textContent = 'In den Warenkorb'; }, 1600);
      openBtn.classList.remove('is-bump'); void openBtn.offsetWidth; openBtn.classList.add('is-bump');
      qty.value = '1';
    });
  }

  // ---- the basket ------------------------------------------------------------------------------------------
  const setAll = (sel, text) => dialog.querySelectorAll(sel).forEach((el) => { el.textContent = text; });
  function render() {
    const n = bottles();
    openBtn.hidden = n === 0 && !dialog.open;
    count.textContent = String(n);
    openBtn.setAttribute('aria-label', `Warenkorb öffnen, ${n} ${n === 1 ? 'Flasche' : 'Flaschen'}`);
    empty.hidden = items.length > 0;
    sums.hidden = items.length === 0;
    dialog.querySelector('[data-to-step="2"]').hidden = items.length === 0;
    setAll('[data-sum-items]', fmt(subtotal()));
    setAll('[data-sum-ship]', fmt(shipping()));
    setAll('[data-sum-total]', fmt(total()));
    payBtn.textContent = `Jetzt bezahlen · ${fmt(total())}`;
    // the control that had the focus gets it back once the lines are drawn anew (or its neighbour, if its line went)
    const had = list.contains(document.activeElement) ? document.activeElement : null;
    const was = had && { line: [...list.children].indexOf(had.closest('li')), role: had.dataset.d || 'remove' };
    list.replaceChildren(...items.map((it, i) => {
      const li = document.createElement('li');
      const what = `${it.name} ${it.ml} ml`;
      li.className = 'line';
      li.innerHTML = `<img class="line__pic" alt="" width="1400" height="1750"><div class="line__name"><strong></strong><span class="muted"></span></div>
        <div class="qty qty--small"><button type="button" data-d="-1">−</button><output></output><button type="button" data-d="1">+</button></div>
        <p class="line__price"></p><button type="button" class="line__remove" data-role="remove">Entfernen</button>`;
      li.querySelector('.line__pic').src = `assets/shop/${it.id}-${it.ml}.webp`;
      li.querySelector('strong').textContent = it.name;
      li.querySelector('.muted').textContent = `${it.ml} ml · ${fmt(it.price)}`;
      li.querySelector('output').textContent = String(it.qty);
      li.querySelector('.line__price').textContent = fmt(it.qty * it.price);
      li.querySelector('[data-d="-1"]').setAttribute('aria-label', `${what}: eine Flasche weniger`);
      li.querySelector('[data-d="1"]').setAttribute('aria-label', `${what}: eine Flasche mehr`);
      li.querySelector('.line__remove').setAttribute('aria-label', `${what} entfernen`);
      li.querySelectorAll('[data-d]').forEach((b) => b.addEventListener('click', () => {
        it.qty = Math.min(24, it.qty + +b.dataset.d);
        if (it.qty < 1) items.splice(i, 1);
        save(); render();
      }));
      li.querySelector('.line__remove').addEventListener('click', () => { items.splice(i, 1); save(); render(); });
      return li;
    }));
    if (was && was.line >= 0) {
      const li = list.children[Math.min(was.line, list.children.length - 1)];
      const back = li && (li.querySelector(was.role === 'remove' ? '.line__remove' : `[data-d="${was.role}"]`));
      (back || title).focus({ preventScroll: true });
    }
    if (!items.length && step > 1) go(1);
  }

  // ---- the three steps -------------------------------------------------------------------------------------
  const TITLES = { 1: 'Dein Warenkorb', 2: 'Lieferung', 3: 'Bezahlen' };
  let step = 1;
  function go(n, focus = true) {
    step = n;
    steps.forEach((s) => { s.hidden = +s.dataset.step !== n; });
    stepsBar.forEach((li, i) => {
      li.classList.toggle('is-done', i < n - 1);
      if (i === n - 1) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
    });
    title.textContent = TITLES[n];
    backBtn.hidden = n === 1;
    if (n === 3) review();
    dialog.querySelector('.cart__inner').scrollTop = 0;
    // on a phone the keyboard would jump up at once, so there the heading takes the focus
    if (focus) (n === 2 && !matchMedia('(pointer: coarse)').matches ? form.elements.vorname : title).focus({ preventScroll: true });
  }
  dialog.querySelectorAll('[data-to-step]').forEach((b) => b.addEventListener('click', () => {
    const n = +b.dataset.toStep;
    if (n === 3 && !checkDelivery()) return;
    go(n);
  }));
  backBtn.addEventListener('click', () => go(Math.max(1, step - 1)));

  function review() {
    const ul = dialog.querySelector('[data-review-items]');
    ul.replaceChildren(...items.map((it) => {
      const li = document.createElement('li');
      li.innerHTML = '<span></span><span></span>';
      li.firstChild.textContent = `${it.qty} × ${it.name} ${it.ml} ml`;
      li.lastChild.textContent = fmt(it.qty * it.price);
      return li;
    }));
    const v = (n) => form.elements[n].value.trim();
    const addr = dialog.querySelector('[data-review-address]');
    addr.replaceChildren(...[`${v('vorname')} ${v('nachname')}`, v('strasse'), v('zusatz'), `${v('plz')} ${v('ort')}`, v('email')]
      .filter(Boolean).flatMap((t, i) => (i ? [document.createElement('br'), t] : [t])));
  }

  // A message stands under the field it is about; the first one is brought into view and given the focus.
  const errors = Object.fromEntries([...form.querySelectorAll('[data-error]')].map((el) => [el.dataset.error, el]));
  const mark = (key, msg) => {
    const el = errors[key];
    el.textContent = msg || ''; el.hidden = !msg;
    form.querySelectorAll(`[name="${key}"]`).forEach((i) => i.toggleAttribute('aria-invalid', !!msg));
    return !msg;
  };
  const clearOn = (e) => { const key = e.target.name; if (errors[key] && !errors[key].hidden) mark(key, ''); };
  form.addEventListener('input', clearOn);
  form.addEventListener('change', clearOn);
  const firstBad = (checks) => {
    let first = null;
    for (const [key, msg] of checks) if (!mark(key, msg) && !first) first = form.elements[key];
    if (first) { (first.length ? first[0] : first).focus({ preventScroll: true }); (first.length ? first[0] : first).scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    return !first;
  };
  function checkDelivery(quiet = false) {
    const v = (n) => form.elements[n].value.trim();
    const email = form.elements.email;
    const checks = [
      ['vorname', !v('vorname') && 'Bitte gib deinen Vornamen an.'],
      ['nachname', !v('nachname') && 'Bitte gib deinen Nachnamen an.'],
      ['email', (!v('email') || !email.checkValidity()) && 'Bitte gib eine gültige E-Mail-Adresse an, zum Beispiel name@beispiel.ch.'],
      ['strasse', !v('strasse') && 'Bitte gib Strasse und Hausnummer an.'],
      ['plz', !/^\d{4}$/.test(v('plz')) && 'Vier Ziffern, z. B. 1700.'],
      ['ort', !v('ort') && 'Bitte gib deinen Ort an.'],
    ];
    return quiet ? checks.every(([, msg]) => !msg) : firstBad(checks);
  }

  // ---- paying ----------------------------------------------------------------------------------------------
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    if (step < 3) { if (step === 2 && checkDelivery()) go(3); return; }   // Enter in a field: on to the next step
    if (!checkDelivery(true)) { go(2, false); checkDelivery(); return; }
    if (!firstBad([['zustimmung', !form.elements.zustimmung.checked && 'Bitte bestätige die Bestellbedingungen.']])) return;
    if (form.elements._honey.value) return;                     // a bot filled the hidden field
    const v = (n) => form.elements[n].value.trim();
    const no = C.number('CU');
    const order = {
      type: 'bestellung', number: no, currency: 'CHF', method: form.elements.zahlung.value,
      items: items.map(({ id, name, ml, qty, price }) => ({ id, name, ml, qty, price })),
      shipping: { name: SHIP.name, price: shipping() }, subtotal: subtotal(), total: total(),
      customer: { vorname: v('vorname'), nachname: v('nachname'), email: v('email'), telefon: v('telefon'),
        strasse: v('strasse'), zusatz: v('zusatz'), plz: v('plz'), ort: v('ort'), land: 'CH', bemerkung: v('bemerkung') },
      success: C.back(`bezahlt=${no}`), cancel: C.back('zahlung=abgebrochen', '#shop'),
    };
    C.keep('cascarup.lieferung', form, FIELDS);
    payBtn.disabled = true; status.textContent = 'Die Bezahlseite wird geöffnet …';
    try {
      const how = await C.pay(dialog.dataset.checkout, order);
      if (how === 'offline') {
        status.textContent = 'Die Bezahlung wird gerade eingerichtet. Bis dahin bestellst du am einfachsten per E-Mail an info@cascarup.ch.';
      } else if (how === 'preview') {
        finish(no, 'Vorschau: Hier öffnet sich später die Bezahlseite für TWINT oder Karte. Es wurde nichts bezahlt und nichts gesendet.');
      }
    } catch {
      status.textContent = 'Die Bezahlseite liess sich nicht öffnen. Bitte versuch es gleich noch einmal oder schreib uns an info@cascarup.ch.';
    } finally {
      payBtn.disabled = false;
      if (status.textContent === 'Die Bezahlseite wird geöffnet …') status.textContent = '';
    }
  });

  function finish(no, note) {
    items = []; save();
    step = 1;   // the basket is empty now: render() must not take the sheet back to step 1 (and its title)
    C.forget('cascarup.lieferung');
    done.querySelector('[data-done-number]').textContent = no;
    const n = done.querySelector('[data-done-note]');
    n.textContent = note || ''; n.hidden = !note;
    body.hidden = true; done.hidden = false;
    dialog.querySelector('[data-cart-steps]').hidden = true; backBtn.hidden = true;
    title.textContent = 'Bezahlt';
    if (!dialog.open) open(false);
    done.focus({ preventScroll: true }); dialog.querySelector('.cart__inner').scrollTop = 0;
    form.reset(); render();
  }

  // ---- open and close --------------------------------------------------------------------------------------
  function open(fresh = true) {
    if (fresh) {
      body.hidden = false; done.hidden = true; dialog.querySelector('[data-cart-steps]').hidden = false;
      go(1, false);
    }
    render();
    dialog.showModal();
    document.documentElement.classList.add('has-cart');
  }
  const close = () => dialog.open && dialog.close();
  dialog.addEventListener('close', () => { document.documentElement.classList.remove('has-cart'); render(); });
  openBtn.addEventListener('click', () => open());
  dialog.querySelectorAll('[data-cart-close]').forEach((b) => b.addEventListener('click', close));
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });   // a tap beside the sheet
  document.querySelectorAll('a[href="#warenkorb"]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); open(); }));

  // ---- back from the payment page ----------------------------------------------------------------------------
  C.restore('cascarup.lieferung', form);
  render();
  const back = C.returned();
  if (back.paid) finish(back.paid);
  else if (back.broken && items.length) {
    open(); go(3, false);
    status.textContent = 'Die Zahlung wurde abgebrochen. Dein Warenkorb und deine Angaben sind noch da.';
  }
})();
