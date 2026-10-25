// Cascarup – participation certificates: choose how many, give your details and what happens at the end (money back
// or keep it), pay through our payment service (checkout.js). The certificate beside the form fills in as you type.
(() => {
  const form = document.querySelector('[data-ps]');
  const C = window.CascarupCheckout;
  if (!form || !C) return;
  const PRICE = +form.dataset.price, MAX = +form.dataset.max;
  const qty = form.elements.anzahl;
  const each = form.querySelector('[data-ps-each]'), sum = form.querySelector('[data-ps-total]');
  const payBtn = form.querySelector('[data-pay]'), status = form.querySelector('.order__status');
  const done = document.querySelector('[data-ps-done]');
  const cert = document.querySelector('[data-cert]');
  const FIELDS = ['anzahl', 'vorname', 'nachname', 'email', 'strasse', 'plz', 'ort', 'telefon', 'ende', 'zahlung'];
  const v = (n) => (form.elements[n].value || '').trim();
  const n = () => Math.min(MAX, Math.max(1, Math.round(+qty.value) || 1));

  // ---- the certificate, as it will read ----------------------------------------------------------------------
  function paint() {
    const k = n();
    each.textContent = `${k} × CHF ${PRICE}.–`;
    sum.textContent = C.fmt(k * PRICE);
    payBtn.textContent = `Jetzt bezahlen · ${C.fmt(k * PRICE)}`;
    if (!cert) return;
    const name = `${v('vorname')} ${v('nachname')}`.trim();
    const el = cert.querySelector('[data-cert-name]');
    el.textContent = name || 'Dein Name';
    cert.classList.toggle('is-named', !!name);
    // a long name gets smaller until it fits on its line
    el.style.fontSize = '';
    for (let k = 1; k > .55 && el.scrollWidth > el.clientWidth + 1; k -= .05) el.style.fontSize = `${4 * k}cqw`;
    cert.querySelector('[data-cert-count]').textContent = k === 1 ? `1 Schein · CHF ${PRICE}.–` : `${k} Scheine · CHF ${k * PRICE}.–`;
    const end = form.querySelector('input[name="ende"]:checked');
    const stamp = cert.querySelector('[data-cert-stamp]');
    stamp.hidden = !end;
    if (end) { stamp.textContent = end.value === 'zurueck' ? 'Geld zurück' : 'Zum Behalten'; stamp.dataset.way = end.value; }
  }
  const clamp = () => { qty.value = String(n()); paint(); };
  form.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => { qty.value = String(+qty.value + +b.dataset.step); clamp(); }));
  qty.addEventListener('change', clamp);
  form.addEventListener('input', paint);
  form.addEventListener('change', paint);

  // ---- checking: a message under each field it is about ----------------------------------------------------
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

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    const end = form.querySelector('input[name="ende"]:checked');
    const checks = [
      ['vorname', !v('vorname') && 'Bitte gib deinen Vornamen an.'],
      ['nachname', !v('nachname') && 'Bitte gib deinen Nachnamen an.'],
      ['email', (!v('email') || !form.elements.email.checkValidity()) && 'Bitte gib eine gültige E-Mail-Adresse an, zum Beispiel name@beispiel.ch.'],
      ['strasse', !v('strasse') && 'Bitte gib Strasse und Hausnummer an.'],
      ['plz', !/^\d{4}$/.test(v('plz')) && 'Vier Ziffern, z. B. 1700.'],
      ['ort', !v('ort') && 'Bitte gib deinen Ort an.'],
      ['ende', !end && 'Bitte wähl, ob du dein Geld am Ende zurück möchtest oder den Schein behältst.'],
      ['zustimmung', !form.elements.zustimmung.checked && 'Bitte bestätige die Bedingungen.'],
    ];
    let first = null;
    for (const [key, msg] of checks) if (!mark(key, msg) && !first) first = form.querySelector(`[name="${key}"]`);
    if (first) { first.focus({ preventScroll: true }); first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    if (form.elements._honey.value) return;
    const k = n(), no = C.number('PS');
    const order = {
      type: 'partizipation', number: no, currency: 'CHF', method: form.elements.zahlung.value,
      items: [{ id: 'partizipationsschein', name: 'Partizipationsschein Cascarup 2026/27', qty: k, price: PRICE }],
      total: k * PRICE, ende: end.value,
      customer: { vorname: v('vorname'), nachname: v('nachname'), email: v('email'), telefon: v('telefon'),
        strasse: v('strasse'), plz: v('plz'), ort: v('ort'), land: 'CH' },
      success: C.back(`bezahlt=${no}`), cancel: C.back('zahlung=abgebrochen', '#zeichnen'),
    };
    C.keep('cascarup.schein', form, FIELDS);
    payBtn.disabled = true; status.textContent = 'Die Bezahlseite wird geöffnet …';
    try {
      const how = await C.pay(form.dataset.checkout, order);
      if (how === 'offline') status.textContent = 'Die Bezahlung wird gerade eingerichtet. Bis dahin erreichst du uns unter info@cascarup.ch oder an unseren Ständen.';
      else if (how === 'preview') finish(no, 'Vorschau: Hier öffnet sich später die Bezahlseite für TWINT oder Karte. Es wurde nichts bezahlt und nichts gesendet.');
    } catch {
      status.textContent = 'Die Bezahlseite liess sich nicht öffnen. Bitte versuch es gleich noch einmal oder schreib uns an info@cascarup.ch.';
    } finally {
      payBtn.disabled = false;
      if (status.textContent === 'Die Bezahlseite wird geöffnet …') status.textContent = '';
    }
  });

  function finish(no, note) {
    C.forget('cascarup.schein');
    done.querySelector('[data-done-number]').textContent = no;
    const el = done.querySelector('[data-done-note]');
    el.textContent = note || ''; el.hidden = !note;
    if (cert) cert.querySelector('[data-cert-no]').textContent = no.slice(-4);
    form.hidden = true; done.hidden = false;
    done.scrollIntoView({ block: 'center' }); done.focus({ preventScroll: true });
  }

  // a link to the conditions opens them (they are folded away)
  document.querySelectorAll('a[href="#bedingungen"]').forEach((a) => a.addEventListener('click', () => {
    const d = document.getElementById('bedingungen'); if (d) d.open = true;
  }));

  // ---- back from the payment page ----------------------------------------------------------------------------
  C.restore('cascarup.schein', form);
  paint();
  const back = C.returned();
  if (back.paid) finish(back.paid);
  else if (back.broken) status.textContent = 'Die Zahlung wurde abgebrochen. Deine Angaben sind noch da.';
})();
