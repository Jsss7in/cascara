// Cascarup – the two kinds: choosing a size shows its price in the card and puts that bottle on the table in the picture.
(() => {
  const products = [...document.querySelectorAll('[data-product]')];
  if (!products.length) return;
  const fmt = (n) => 'CHF ' + n.toFixed(2);
  const standing = [...document.querySelectorAll('[data-shop-stage] [data-kind]')];
  const stand = (id, m) => standing.forEach((b) => { if (b.dataset.kind === id) b.classList.toggle('is-shown', +b.dataset.ml === m); });
  for (const card of products) {
    const data = JSON.parse(card.dataset.product);
    const sizes = [...card.querySelectorAll('[data-size]')];
    const price = card.querySelector('[data-price]');
    sizes.forEach((b) => b.addEventListener('click', () => {
      const m = +b.dataset.size;
      sizes.forEach((o) => o.setAttribute('aria-pressed', String(+o.dataset.size === m)));
      price.textContent = fmt(data.sizes.find((s) => s.ml === m).price);
      stand(data.id, m);
    }));
  }
})();
