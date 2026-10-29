// Cascarup – the way to pay, shared by the shop and the participation certificates. An order goes as JSON to our
// payment service (the form's data-checkout), which creates the payment (Stripe: TWINT or card) and answers with the
// address of its payment page; from there the buyer comes back with ?bezahlt=<number> (or ?zahlung=abgebrochen).
// While no service is connected nothing is sent; the preview copy of the site (data-preview) only plays it through.
window.CascarupCheckout = (() => {
  const fmt = (x) => `CHF ${x.toFixed(2)}`;
  const number = (prefix) => {
    const d = new Date(), abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const tail = Array.from({ length: 4 }, () => abc[Math.floor(Math.random() * abc.length)]).join('');
    return `${prefix}-${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${tail}`;
  };
  // where the payment page sends the buyer back: this page, with the number or the word that it was broken off
  const back = (query, hash = '') => `${location.origin}${location.pathname}?${query}${hash}`;

  async function pay(endpoint, order) {
    if (!endpoint) return document.documentElement.dataset.preview ? 'preview' : 'offline';
    const res = await fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(order),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.url) throw new Error(data.error || `HTTP ${res.status}`);
    location.assign(data.url);
    return 'redirect';
  }

  // what the payment page reported on the way back; the address bar is cleaned up at once
  function returned() {
    const q = new URLSearchParams(location.search);
    const paid = q.get('bezahlt'), broken = q.get('zahlung') === 'abgebrochen';
    if (paid || broken) history.replaceState(null, '', location.pathname + location.hash);
    return { paid: paid && /^[A-Z]{2}-\d{6}-[A-Z2-9]{4}$/.test(paid) ? paid : null, broken };
  }

  // a form's fields kept for this tab only (sessionStorage), so a broken-off payment finds them filled in again
  const keep = (key, form, names) => {
    try { sessionStorage.setItem(key, JSON.stringify(Object.fromEntries(names.map((n) => [n, form.elements[n]?.value || ''])))); } catch { /* private mode */ }
  };
  const restore = (key, form) => {
    try {
      const v = JSON.parse(sessionStorage.getItem(key) || '{}');
      for (const [n, x] of Object.entries(v)) if (form.elements[n] && x && form.elements[n].type !== 'radio') form.elements[n].value = x;
    } catch { /* nothing kept */ }
  };
  const forget = (key) => { try { sessionStorage.removeItem(key); } catch { /* nothing kept */ } };

  // TWINT (the participation certificates): the buyer pays to our QR code and writes their own code into the
  // payment's message, so we know whose payment it is. The code is short and has no letters that look alike.
  const code = (prefix) => {
    const abc = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    return `${prefix}-${Array.from(crypto.getRandomValues(new Uint32Array(5)), (x) => abc[x % abc.length]).join('')}`;
  };
  // an order as an e-mail to us, through FormSubmit; it answers 200 with success "false" when something is off
  async function send(endpoint, fields) {
    const res = await fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(fields),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) === 'false') throw new Error(data.message || `HTTP ${res.status}`);
  }
  // the way to pay, filled in: the amount and the code wherever they are named, each with a button to copy it
  function twint(panel, amount, payCode) {
    const T = window.cascarupT || ((s) => s);
    panel.querySelectorAll('[data-pay-amount]').forEach((el) => { el.textContent = fmt(amount); });
    panel.querySelectorAll('[data-pay-code]').forEach((el) => { el.textContent = payCode; });
    panel.querySelectorAll('[data-copy]').forEach((b) => {
      b.textContent = T('Kopieren');
      b.onclick = async () => {
        try { await navigator.clipboard.writeText(b.dataset.copy === 'code' ? payCode : amount.toFixed(2)); } catch { return; }
        b.textContent = T('Kopiert');
        setTimeout(() => { b.textContent = T('Kopieren'); }, 1800);
      };
    });
  }

  return { fmt, number, back, pay, returned, keep, restore, forget, code, send, twint };
})();
