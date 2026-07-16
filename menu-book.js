/* Yuubi Menu Book — reusable CSS-3D flip-book.
   Usage: MenuBook.mount(document.querySelector('#menuBook'), YUUBI_MENU);
   Pure CSS rotateY/preserve-3d, no canvas — text stays selectable & crawlable.
   Navigation: prev/next buttons, tap left/right page, swipe on touch. */
const MenuBook = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function pageFace(page, folio, total) {
    const items = page.items.map(it => `
      <div class="mb-item">
        <span class="name">${esc(it.name)}</span>
        ${it.jp ? `<span class="jp kanji">${esc(it.jp)}</span>` : ''}
        <span class="leader"></span>
        <span class="price">${esc(it.price)}</span>
        ${it.note ? `<span class="note">${esc(it.note)}</span>` : ''}
      </div>`).join('');
    return `
      <div class="mb-page-head">
        <span class="jp kanji">${esc(page.jp)}</span>
        <span class="en">${esc(page.en)}</span>
      </div>
      ${items}
      <div class="mb-folio"><span>Yuubi · 優美</span><span>${folio} / ${total}</span></div>`;
  }

  function coverFace(c) {
    return `
      <span class="mb-kicker">${esc(c.kicker)}</span>
      <span class="mb-kanji">${esc(c.kanji)}</span>
      <span class="mb-name">${esc(c.name)}</span>
      <span class="mb-sub">${esc(c.subtitle)}</span>
      <span class="mb-hanko">${esc(c.kanji)}</span>
      <span class="mb-tagline">${esc(c.tagline)}</span>`;
  }

  function visitFace(b) {
    return `
      <span class="jp kanji">${esc(b.jp)}</span>
      <div class="line">${b.lines.map(esc).join('<br>')}</div>
      <span class="note">${esc(b.note)}</span>`;
  }

  function colophonFace(c) {
    return `
      <span class="kanji">${esc(c.kanji)}</span>
      <span class="line">${esc(c.line)}</span>`;
  }

  function mount(root, data) {
    const total = data.pages.length;
    // 4 sheets = 8 faces: cover | p1..p5 | visit | colophon
    const faces = [
      { html: `<div class="mbook-face front mb-dark mb-cover">${coverFace(data.cover)}</div>`,
        back: `<div class="mbook-face back">${pageFace(data.pages[0], 1, total)}</div>` },
      { html: `<div class="mbook-face front">${pageFace(data.pages[1], 2, total)}</div>`,
        back: `<div class="mbook-face back">${pageFace(data.pages[2], 3, total)}</div>` },
      { html: `<div class="mbook-face front">${pageFace(data.pages[3], 4, total)}</div>`,
        back: `<div class="mbook-face back">${pageFace(data.pages[4], 5, total)}</div>` },
      { html: `<div class="mbook-face front mb-visit">${visitFace(data.back)}</div>`,
        back: `<div class="mbook-face back mb-dark mb-colophon">${colophonFace(data.colophon)}</div>` }
    ];
    const sheets = faces.map(f => `<div class="mbook-sheet">${f.html}${f.back}</div>`).join('');

    root.classList.add('mbook-wrap');
    root.innerHTML = `
      <div class="mbook-stage">
        <div class="mbook" data-spread="0">${sheets}</div>
      </div>
      <div class="mbook-controls">
        <button type="button" class="mb-prev">← 前へ Prev</button>
        <span class="mbook-indicator"></span>
        <button type="button" class="mb-next">次へ Next →</button>
      </div>
      <div class="mbook-hint">Tap a page or swipe to turn · 頁をめくってご覧ください</div>`;

    const book = root.querySelector('.mbook');
    const sheetEls = [...root.querySelectorAll('.mbook-sheet')];
    const prevBtn = root.querySelector('.mb-prev');
    const nextBtn = root.querySelector('.mb-next');
    const indicator = root.querySelector('.mbook-indicator');
    const maxSpread = sheetEls.length; // 4
    const labels = ['表紙 · Cover', '握り・刺身 / 丼もの', '巻き寿司 / 前菜', '麺・定食 / 場所', '裏表紙 · Fin'];
    let spread = 0;

    function render() {
      book.dataset.spread = spread;
      sheetEls.forEach((el, i) => {
        el.classList.toggle('flipped', i < spread);
        el.style.zIndex = i < spread ? i + 1 : maxSpread - i;
      });
      prevBtn.disabled = spread === 0;
      nextBtn.disabled = spread === maxSpread;
      indicator.textContent = labels[spread];
    }
    const go = d => { spread = Math.min(maxSpread, Math.max(0, spread + d)); render(); };

    prevBtn.addEventListener('click', () => go(-1));
    nextBtn.addEventListener('click', () => go(1));
    // tap right half → forward, left half → back
    let swiped = false;
    book.addEventListener('click', e => {
      if (swiped) { swiped = false; return; }
      const r = book.getBoundingClientRect();
      go(e.clientX - r.left > r.width / 2 ? 1 : -1);
    });
    // swipe
    let x0 = null;
    book.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    book.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) { swiped = true; go(dx < 0 ? 1 : -1); }
      x0 = null;
    }, { passive: true });

    render();
    return { go, get spread() { return spread; } };
  }

  return { mount };
})();
