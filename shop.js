// Cascarup – the shop: choose kind, size and number, collect them in the basket, order for collection.
// The basket stays in this browser (localStorage); an order goes by e-mail through FormSubmit to Cascarup, and
// FormSubmit sends the customer a confirmation. Nothing is paid here: payment is on collection.
(() => {
  const products = [...document.querySelectorAll('[data-product]')];
  const dialog = document.querySelector('[data-cart]');
  if (!products.length || !dialog) return;

  const KEY = 'cascarup.cart.v2';   // v2: the second kind is called Cozy Spice
  const fmt = (x) => `CHF ${x.toFixed(2)}`;
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* private mode: the basket lives as long as the page */ } };
  let items = load().filter((it) => it && it.id && it.ml && it.qty > 0 && it.price > 0);

  const openBtn = document.querySelector('[data-cart-open]');
  const count = document.querySelector('[data-cart-count]');
  const list = dialog.querySelector('[data-cart-items]');
  const empty = dialog.querySelector('[data-cart-empty]');
  const form = dialog.querySelector('[data-order]');
  const total = dialog.querySelector('[data-cart-total]');
  const body = dialog.querySelector('[data-cart-body]');
  const done = dialog.querySelector('[data-cart-done]');
  const status = form.querySelector('.order__status');
  const sum = () => items.reduce((a, it) => a + it.qty * it.price, 0);
  const bottles = () => items.reduce((a, it) => a + it.qty, 0);

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
      shots.forEach((s) => s.classList.toggle('is-shown', +s.dataset.shot === m));   // one shot fades into the other
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
  function render() {
    const n = bottles();
    openBtn.hidden = n === 0 && !dialog.open;
    count.textContent = String(n);
    openBtn.setAttribute('aria-label', `Warenkorb öffnen, ${n} ${n === 1 ? 'Flasche' : 'Flaschen'}`);
    empty.hidden = items.length > 0;
    form.hidden = items.length === 0;
    total.textContent = fmt(sum());
    list.replaceChildren(...items.map((it, i) => {
      const li = document.createElement('li');
      li.className = 'line';
      li.innerHTML = `<div class="line__name"><strong></strong><span class="muted"></span></div>
        <div class="qty qty--small"><button type="button" data-d="-1" aria-label="Eine weniger">−</button><output></output><button type="button" data-d="1" aria-label="Eine mehr">+</button></div>
        <p class="line__price"></p><button type="button" class="line__remove" aria-label="Entfernen">Entfernen</button>`;
      li.querySelector('strong').textContent = it.name;
      li.querySelector('.muted').textContent = `${it.ml} ml · ${fmt(it.price)}`;
      li.querySelector('output').textContent = String(it.qty);
      li.querySelector('.line__price').textContent = fmt(it.qty * it.price);
      li.querySelectorAll('[data-d]').forEach((b) => b.addEventListener('click', () => {
        it.qty = Math.min(24, it.qty + +b.dataset.d);
        if (it.qty < 1) items.splice(i, 1);
        save(); render();
      }));
      li.querySelector('.line__remove').addEventListener('click', () => { items.splice(i, 1); save(); render(); });
      return li;
    }));
  }

  // a stand can be chosen until the day before it (the bottles are made ready the evening before)
  const today = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
  form.querySelectorAll('[data-pick-date]').forEach((l) => {
    if (l.dataset.pickDate <= today) { l.hidden = true; l.querySelector('input').disabled = true; }
  });

  const open = () => {
    body.hidden = false; done.hidden = true;
    render();
    dialog.showModal();
    document.documentElement.classList.add('has-cart');
  };
  const close = () => dialog.open && dialog.close();
  dialog.addEventListener('close', () => { document.documentElement.classList.remove('has-cart'); render(); });
  openBtn.addEventListener('click', open);
  dialog.querySelectorAll('[data-cart-close]').forEach((b) => b.addEventListener('click', close));
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });   // a tap beside the sheet
  document.querySelectorAll('a[href="#warenkorb"]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); open(); }));

  // ---- the order -------------------------------------------------------------------------------------------
  const number = () => {
    const d = new Date(), abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const tail = Array.from({ length: 4 }, () => abc[Math.floor(Math.random() * abc.length)]).join('');
    return `CU-${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${tail}`;
  };
  // A message stands under the field it is about; the first one is brought into view and given the focus.
  const errors = Object.fromEntries([...form.querySelectorAll('[data-error]')].map((el) => [el.dataset.error, el]));
  const mark = (key, msg, field) => {
    const el = errors[key];
    el.textContent = msg || ''; el.hidden = !msg;
    (field ? [field] : [...form.querySelectorAll(`input[name="${key}"]`)]).forEach((i) => i.toggleAttribute('aria-invalid', !!msg));
    return !msg;
  };
  form.addEventListener('input', (e) => { const key = e.target.name; if (errors[key] && !errors[key].hidden) mark(key, ''); });
  form.addEventListener('change', (e) => { const key = e.target.name; if (errors[key] && !errors[key].hidden) mark(key, ''); });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const f = new FormData(form);
    const say = (msg) => { status.textContent = msg; };
    const pickup = form.querySelector('input[name="abholung"]:checked');
    const email = form.querySelector('input[name="email"]');
    const name = form.querySelector('input[name="name"]');
    const consent = form.querySelector('input[name="zustimmung"]');
    const checks = [
      ['abholung', !pickup && 'Bitte wähl aus, wo du deine Bestellung abholst.', form.querySelector('input[name="abholung"]:not(:disabled)')],
      ['name', !name.value.trim() && 'Bitte gib deinen Namen an.', name],
      ['email', (!email.value.trim() || !email.checkValidity()) && 'Bitte gib eine gültige E-Mail-Adresse an, zum Beispiel name@beispiel.ch.', email],
      ['zustimmung', !consent.checked && 'Bitte bestätige die Bestellbedingungen und die Übermittlung deiner Angaben.', consent],
    ];
    say('');
    let first = null;
    for (const [key, msg, field] of checks) if (!mark(key, msg, key === 'abholung' ? null : field) && !first) first = field;
    if (first) { first.focus({ preventScroll: true }); first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    if (f.get('_honey')) return;                                       // a bot filled the hidden field
    if (!form.dataset.endpoint) return say('Vorschau: Hier wird keine Bestellung gesendet.');   // the preview copy has no inbox
    const no = number();
    const lines = items.map((it) => `${it.qty} × ${it.name} ${it.ml} ml à ${fmt(it.price)} = ${fmt(it.qty * it.price)}`).join('\n');
    const payload = {
      _subject: `Neue Bestellung ${no}: ${name.value.trim()}`,
      _template: 'table',
      _autoresponse: `Danke für deine Bestellung bei Cascarup!\n\nBestellnummer: ${no}\n${lines}\nTotal: ${fmt(sum())}\nAbholung: ${pickup.value}\n\nBezahlt wird bei der Abholung, bar oder mit TWINT. Bei Fragen erreichst du uns unter info@cascarup.ch.`,
      Bestellnummer: no, Bestellung: lines, Total: fmt(sum()), Abholung: pickup.value,
      Name: name.value.trim(), email: email.value.trim(), Telefon: (f.get('telefon') || '').toString().trim() || '–',
      Bemerkung: (f.get('bemerkung') || '').toString().trim() || '–',
    };
    const button = form.querySelector('.order__submit');
    button.disabled = true; status.textContent = 'Wird gesendet …';
    try {
      const res = await fetch(form.dataset.endpoint, {
        method: 'POST', body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error(data.message || `HTTP ${res.status}`);
      items = []; save();
      done.querySelector('[data-done-number]').textContent = no;
      body.hidden = true; done.hidden = false; done.focus();
      form.reset(); status.textContent = '';
      render();
    } catch {
      say('Die Bestellung ist nicht angekommen. Bitte versuch es gleich noch einmal oder schreib uns an info@cascarup.ch.');
    } finally {
      button.disabled = false;
    }
  });

  render();
})();
