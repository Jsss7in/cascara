// Cascarup – participation certificates. Until they can be bought online, the form only takes a name and an e-mail
// (sent through FormSubmit, data-endpoint), so we can write once they can; then it becomes the full form below.
// The certificate beside the form fills in as you type.
(() => {
  const T = window.cascarupT || ((s) => s);   // the page's language (i18n.py puts its words in the head)
  const form = document.querySelector('[data-notify]');
  if (!form) return;
  const status = form.querySelector('.order__status'), button = form.querySelector('[data-pay]');
  const done = document.querySelector('[data-ps-done]'), cert = document.querySelector('[data-cert]');
  const v = (n) => (form.elements[n].value || '').trim();

  function paint() {
    if (!cert) return;
    const name = `${v('vorname')} ${v('nachname')}`.trim(), el = cert.querySelector('[data-cert-name]');
    el.textContent = name || T('Dein Name');
    cert.classList.toggle('is-named', !!name);
    el.style.fontSize = '';   // a long name gets smaller until it fits on its line
    for (let k = 1; k > .55 && el.scrollWidth > el.clientWidth + 1; k -= .05) el.style.fontSize = `${4 * k}cqw`;
  }
  form.addEventListener('input', paint);

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

  const finish = (note) => {
    const el = done.querySelector('[data-done-note]');
    el.textContent = note || ''; el.hidden = !note;
    form.hidden = true; done.hidden = false;
    done.scrollIntoView({ block: 'center' }); done.focus({ preventScroll: true });
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    const checks = [
      ['vorname', !v('vorname') && T('Bitte gib deinen Vornamen an.')],
      ['nachname', !v('nachname') && T('Bitte gib deinen Namen an.')],
      ['email', (!v('email') || !form.elements.email.checkValidity()) && T('Bitte gib eine gültige E-Mail-Adresse an, zum Beispiel name@beispiel.ch.')],
      ['zustimmung', !form.elements.zustimmung.checked && T('Bitte bestätige, dass wir deine Angaben dafür speichern dürfen.')],
    ];
    let first = null;
    for (const [key, msg] of checks) if (!mark(key, msg) && !first) first = form.querySelector(`[name="${key}"]`);
    if (first) { first.focus({ preventScroll: true }); first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    if (form.elements._honey.value) return;                      // a bot filled the hidden field
    if (document.documentElement.dataset.preview) return finish('Vorschau: Hier wird nichts gesendet.');
    if (!form.dataset.endpoint) { status.textContent = T('Die Anmeldung öffnet in Kürze. Schreib uns bis dahin an info@cascarup.ch.'); return; }
    const name = `${v('vorname')} ${v('nachname')}`;
    button.disabled = true; status.textContent = T('Wird gesendet …');
    try {
      const res = await fetch(form.dataset.endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Partizipationsschein: ${name} möchte benachrichtigt werden`, _template: 'table',
          _autoresponse: T('Danke! Sobald du deinen Partizipationsschein bei Cascarup online zeichnen kannst, schreiben wir dir. Fragen? info@cascarup.ch'),
          Vorname: v('vorname'), Name: v('nachname'), email: v('email'),
          Anliegen: T('Benachrichtigen, sobald die Partizipationsscheine online erhältlich sind'),
        }),
      });
      // FormSubmit answers 200 with success "false" when something is off, so read the body too
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error(data.message || `HTTP ${res.status}`);
      status.textContent = '';
      finish();
    } catch {
      status.textContent = T('Die Anmeldung ist nicht angekommen. Bitte versuch es gleich noch einmal oder schreib uns an info@cascarup.ch.');
    } finally {
      button.disabled = false;
    }
  });
  paint();
})();

// Once the certificates are on sale (content.py PS_OPEN): choose how many, give your details and what happens at the
// end (money back or keep it). The order reaches us by e-mail (FormSubmit, data-endpoint), with a code of the buyer's
// own; then the page shows how to pay with TWINT – our QR code, the amount and that code for the payment's message.
(() => {
  const T = window.cascarupT || ((s) => s);   // the page's language (i18n.py puts its words in the head)
  const form = document.querySelector('[data-ps]');
  const C = window.CascarupCheckout;
  if (!form || !C) return;
  const PRICE = +form.dataset.price, MAX = +form.dataset.max;
  const qty = form.elements.anzahl;
  const each = form.querySelector('[data-ps-each]'), sum = form.querySelector('[data-ps-total]');
  const payBtn = form.querySelector('[data-pay]'), status = form.querySelector('.order__status');
  const done = document.querySelector('[data-ps-done]');
  const cert = document.querySelector('[data-cert]');
  const v = (n) => (form.elements[n].value || '').trim();
  const n = () => Math.min(MAX, Math.max(1, Math.round(+qty.value) || 1));
  const OPEN = 'cascarup.schein.offen';      // the order still to be paid, kept for this tab (a reload shows it again)

  // ---- the certificate, as it will read ----------------------------------------------------------------------
  function paint() {
    const k = n();
    each.textContent = `${k} × CHF ${PRICE}.–`;
    sum.textContent = C.fmt(k * PRICE);
    payBtn.textContent = `${T('Verbindlich bestellen')} · ${C.fmt(k * PRICE)}`;
    if (!cert) return;
    const name = `${v('vorname')} ${v('nachname')}`.trim();
    const el = cert.querySelector('[data-cert-name]');
    el.textContent = name || T('Dein Name');
    cert.classList.toggle('is-named', !!name);
    // a long name gets smaller until it fits on its line
    el.style.fontSize = '';
    for (let k = 1; k > .55 && el.scrollWidth > el.clientWidth + 1; k -= .05) el.style.fontSize = `${4 * k}cqw`;
    cert.querySelector('[data-cert-count]').textContent = k === 1 ? `1 ${T('Schein')} · CHF ${PRICE}.–` : `${k} ${T('Scheine')} · CHF ${k * PRICE}.–`;
    const end = form.querySelector('input[name="ende"]:checked');
    const stamp = cert.querySelector('[data-cert-stamp]');
    stamp.hidden = !end;
    if (end) { stamp.textContent = end.value === 'zurueck' ? T('Geld zurück') : T('Zum Behalten'); stamp.dataset.way = end.value; }
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

  // the e-mail the buyer gets from FormSubmit: everything needed to pay, also on a second screen
  const confirmation = (k, total, payCode) => T('Danke, dass du Teil von Cascarup wirst! Deine Bestellung: {n} Partizipationsschein(e) für {betrag}. Dein Code: {code}. So bezahlst du: Öffne die TWINT-App, tippe auf «Scannen» und scanne unseren QR-Code ({qr}). Gib genau {betrag} ein und schreib {code} in die Mitteilung. Sobald deine Zahlung bei uns ist, ist dein Schein gezeichnet. Wegen deines Zertifikats melden wir uns bald bei dir. Fragen? info@cascarup.ch')
    .replaceAll('{n}', k).replaceAll('{betrag}', C.fmt(total)).replaceAll('{code}', payCode)
    .replaceAll('{qr}', new URL(`${document.documentElement.dataset.root || ''}assets/twint/twint-qr.png`, location.href).href);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    const end = form.querySelector('input[name="ende"]:checked');
    const checks = [
      ['vorname', !v('vorname') && T('Bitte gib deinen Vornamen an.')],
      ['nachname', !v('nachname') && T('Bitte gib deinen Nachnamen an.')],
      ['email', (!v('email') || !form.elements.email.checkValidity()) && T('Bitte gib eine gültige E-Mail-Adresse an, zum Beispiel name@beispiel.ch.')],
      ['telefon', !/^\+?[\d\s/().-]{9,}$/.test(v('telefon')) && T('Bitte gib deine Telefonnummer an, zum Beispiel 079 123 45 67.')],
      ['strasse', !v('strasse') && T('Bitte gib Strasse und Hausnummer an.')],
      ['plz', !/^\d{4}$/.test(v('plz')) && T('Vier Ziffern, z. B. 1700.')],
      ['ort', !v('ort') && T('Bitte gib deinen Ort an.')],
      ['ende', !end && T('Bitte wähl, ob du dein Geld am Ende zurück möchtest oder den Schein behältst.')],
      ['zustimmung', !form.elements.zustimmung.checked && T('Bitte bestätige die Bedingungen.')],
    ];
    let first = null;
    for (const [key, msg] of checks) if (!mark(key, msg) && !first) first = form.querySelector(`[name="${key}"]`);
    if (first) { first.focus({ preventScroll: true }); first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    if (form.elements._honey.value) return;
    const k = n(), total = k * PRICE, payCode = C.code('PS');
    if (document.documentElement.dataset.preview) return finish(total, payCode, T('Vorschau: Es wurde nichts gesendet.'));
    payBtn.disabled = true; status.textContent = T('Wird gesendet …');
    try {
      await C.send(form.dataset.endpoint, {
        _subject: `Partizipationsschein ${payCode} · ${C.fmt(total)} · ${v('vorname')} ${v('nachname')}`,
        _template: 'table',
        _autoresponse: confirmation(k, total, payCode),
        Code: payCode, Betrag: C.fmt(total), Anzahl: k, 'Am Ende': end.value === 'zurueck' ? 'Geld zurück' : 'Behalten',
        Zahlung: 'TWINT, noch offen: Code in der Mitteilung prüfen',
        Vorname: v('vorname'), Name: v('nachname'), email: v('email'), Telefon: v('telefon'),
        Strasse: v('strasse'), PLZ: v('plz'), Ort: v('ort'), Sprache: document.documentElement.lang,
      });
      status.textContent = '';
      finish(total, payCode);
    } catch {
      status.textContent = T('Deine Bestellung ist nicht angekommen. Bitte versuch es gleich noch einmal oder schreib uns an info@cascarup.ch.');
    } finally {
      payBtn.disabled = false;
    }
  });

  // ---- after ordering: how to pay -------------------------------------------------------------------------------
  function finish(total, payCode, note, quiet = false) {
    C.twint(done, total, payCode);
    const el = done.querySelector('[data-done-note]');
    el.textContent = note || ''; el.hidden = !note;
    if (cert) cert.querySelector('[data-cert-no]').textContent = payCode.slice(3);
    form.hidden = true; done.hidden = false;
    if (!note) try { sessionStorage.setItem(OPEN, JSON.stringify({ total, code: payCode })); } catch { /* private mode */ }
    if (!quiet) { done.scrollIntoView({ block: 'start', behavior: 'smooth' }); done.focus({ preventScroll: true }); }
  }
  done.querySelector('[data-ps-again]').addEventListener('click', () => {
    try { sessionStorage.removeItem(OPEN); } catch { /* nothing kept */ }
    form.reset(); paint(); form.hidden = false; done.hidden = true;
    if (cert) cert.querySelector('[data-cert-no]').textContent = '—';
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });

  // a link to the conditions opens them (they are folded away)
  document.querySelectorAll('a[href="#bedingungen"]').forEach((a) => a.addEventListener('click', () => {
    const d = document.getElementById('bedingungen'); if (d) d.open = true;
  }));

  paint();
  try {
    const open = JSON.parse(sessionStorage.getItem(OPEN) || 'null');
    if (open && /^PS-[A-Z2-9]{5}$/.test(open.code)) finish(+open.total, open.code, '', true);
  } catch { /* nothing kept */ }
})();
