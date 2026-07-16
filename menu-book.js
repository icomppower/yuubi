/* Yuubi Menu Book — reusable CSS-3D flip-book.
   Usage: MenuBook.mount(el, YUUBI_MENU, {theme:'light'|'dark', big:true, lang:'en'|'jp', startSpread:0})
   Pure CSS rotateY/preserve-3d, no canvas — text stays selectable & crawlable.
   Navigation: prev/next buttons, tap left/right page, swipe on touch. */
const MenuBook = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function itemRow(it, lang) {
    const jpMode = lang === 'jp' && it.jp;
    const primary = jpMode ? it.jp : it.name;
    const secondary = jpMode ? it.name : it.jp;
    const note = (lang === 'jp' && it.noteJp) ? it.noteJp : it.note;
    const price = (lang === 'jp' && it.priceJp) ? it.priceJp : it.price;
    return `
      <div class="mb-item">
        <span class="name${jpMode ? ' kanji' : ''}">${esc(primary)}</span>
        ${secondary ? `<span class="jp${jpMode ? '' : ' kanji'}">${esc(secondary)}</span>` : ''}
        <span class="leader"></span>
        <span class="price">${esc(price)}</span>
        ${note ? `<span class="note${lang === 'jp' ? ' kanji' : ''}">${esc(note)}</span>` : ''}
      </div>`;
  }

  function pageFace(page, folio, total, lang) {
    return `
      <div class="mb-page-head">
        <span class="jp kanji">${esc(page.jp)}</span>
        <span class="en">${esc(page.en)}</span>
      </div>
      ${page.items.map(it => itemRow(it, lang)).join('')}
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

  function visitFace(b, lang) {
    const lines = (lang === 'jp' && b.linesJp) ? b.linesJp : b.lines;
    const note = (lang === 'jp' && b.noteJp) ? b.noteJp : b.note;
    return `
      <span class="jp kanji">${esc(b.jp)}</span>
      <div class="line${lang === 'jp' ? ' kanji' : ''}">${lines.map(esc).join('<br>')}</div>
      <span class="note${lang === 'jp' ? ' kanji' : ''}">${esc(note)}</span>`;
  }

  function colophonFace(c) {
    return `
      <span class="kanji">${esc(c.kanji)}</span>
      <span class="line">${esc(c.line)}</span>`;
  }

  function mount(root, data, opts = {}) {
    const lang = opts.lang === 'jp' ? 'jp' : 'en';
    const total = data.pages.length;
    // 4 sheets = 8 faces: cover | p1..p5 | visit | colophon
    const faces = [
      { html: `<div class="mbook-face front mb-dark mb-cover">${coverFace(data.cover)}</div>`,
        back: `<div class="mbook-face back">${pageFace(data.pages[0], 1, total, lang)}</div>` },
      { html: `<div class="mbook-face front">${pageFace(data.pages[1], 2, total, lang)}</div>`,
        back: `<div class="mbook-face back">${pageFace(data.pages[2], 3, total, lang)}</div>` },
      { html: `<div class="mbook-face front">${pageFace(data.pages[3], 4, total, lang)}</div>`,
        back: `<div class="mbook-face back">${pageFace(data.pages[4], 5, total, lang)}</div>` },
      { html: `<div class="mbook-face front mb-visit">${visitFace(data.back, lang)}</div>`,
        back: `<div class="mbook-face back mb-dark mb-colophon">${colophonFace(data.colophon)}</div>` }
    ];
    const sheets = faces.map(f => `<div class="mbook-sheet">${f.html}${f.back}</div>`).join('');

    root.className = 'mbook-wrap'
      + (opts.theme === 'dark' ? ' mb-theme-dark' : '')
      + (opts.big ? ' mb-big' : '');
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
    let spread = Math.min(maxSpread, Math.max(0, opts.startSpread || 0));

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

    if (spread > 0) {
      // land on startSpread without replaying flip animations
      sheetEls.forEach(el => { el.style.transition = 'none'; });
      book.style.transition = 'none';
      render();
      void book.offsetWidth;
      sheetEls.forEach(el => { el.style.transition = ''; });
      book.style.transition = '';
    } else {
      render();
    }
    return { go, get spread() { return spread; } };
  }

  return { mount };
})();
