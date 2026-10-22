(function () {
  'use strict';

  const ALL = window.PORTFOLIO;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);

  /* Tạo element an toàn: chỉ dùng textContent, không dùng innerHTML với dữ liệu */
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => c && node.appendChild(c));
    return node;
  }

  /* ---------- Ngôn ngữ: đã chọn trước đó, nếu chưa thì tiếng Anh ---------- */
  function pickLang() {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'vi' || saved === 'en') return saved;
    } catch (_) { /* localStorage bị chặn: dùng mặc định */ }
    return 'en';
  }
  let lang = pickLang();
  let D = ALL[lang];

  $('#lang-switch').addEventListener('click', () => {
    lang = lang === 'vi' ? 'en' : 'vi';
    D = ALL[lang];
    try { localStorage.setItem('lang', lang); } catch (_) { /* không lưu được thì thôi */ }
    render();
  });

  /* ---------- Dark mode: theme ban đầu do script trong <head> đặt ---------- */
  const themeBtn = $('#theme-toggle');
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.setAttribute('aria-pressed', String(t === 'dark'));
    $('meta[name="theme-color"]').setAttribute('content', t === 'dark' ? '#0E141B' : '#F5F7FA');
  }
  setTheme(document.documentElement.dataset.theme);
  themeBtn.addEventListener('click', () => {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(t);
    try { localStorage.setItem('theme', t); } catch (_) { /* không lưu được thì thôi */ }
  });

  /* ---------- Chữ cố định + thông tin cá nhân ---------- */
  function renderStatic() {
    document.documentElement.lang = lang;
    document.title = D.ui.pageTitle;
    $('meta[name="description"]').setAttribute('content', D.ui.pageDesc);
    document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = D.ui[n.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach((n) => n.setAttribute('aria-label', D.ui[n.dataset.i18nAria]));
    document.querySelectorAll('[data-i18n-placeholder]').forEach((n) => { n.placeholder = D.ui[n.dataset.i18nPlaceholder]; });
    document.querySelectorAll('[data-bind]').forEach((node) => {
      const value = D.profile[node.dataset.bind];
      if (value) node.textContent = value;
    });

    $('#contact-links').replaceChildren(...D.links.map((l) => el('a', {
      class: 'btn ' + (l.primary ? 'btn-primary' : 'btn-outline'),
      href: l.href,
      text: l.label,
      ...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})
    })));
  }
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Hành trình (git log) ---------- */
  const filtersBox = $('#filters');
  const commitsBox = $('#commits');
  const openSet = new Set([0]); // mốc đầu tiên mở sẵn
  let filter = 'all';

  const count = (lane) => D.journey.filter((j) => j.lane === lane).length;

  function renderFilters() {
    const filterDefs = [
      { id: 'all', label: `${D.ui.filterAll} (${D.journey.length})` },
      { id: 'work', label: `${D.ui.filterWork} (${count('work')})` },
      { id: 'edu', label: `${D.ui.filterEdu} (${count('edu')})` }
    ];
    filtersBox.replaceChildren(...filterDefs.map((f) => el('button', {
      type: 'button',
      class: 'filter',
      'aria-pressed': String(f.id === filter),
      text: f.label,
      onclick: () => { filter = f.id; renderFilters(); renderCommits(); }
    })));
  }

  function renderCommits() {
    const items = D.journey
      .map((j, i) => ({ ...j, i }))
      .filter((j) => filter === 'all' || j.lane === filter);

    commitsBox.replaceChildren(...items.map((j, n) => {
      const isOpen = openSet.has(j.i);
      const detailId = 'commit-detail-' + j.i;

      const detail = el('div', { class: 'commit-detail', id: detailId }, [
        el('ul', {}, j.details.map((d) => el('li', { text: d }))),
        el('div', { class: 'tags' }, j.tags.map((t) => el('span', { class: 'tag', text: t })))
      ]);
      detail.hidden = !isOpen;

      const toggle = el('button', {
        type: 'button', class: 'toggle',
        'aria-expanded': String(isOpen), 'aria-controls': detailId,
        text: isOpen ? D.ui.showLess : D.ui.showMore,
        onclick: () => {
          const nowOpen = detail.hidden;
          detail.hidden = !nowOpen;
          nowOpen ? openSet.add(j.i) : openSet.delete(j.i);
          toggle.setAttribute('aria-expanded', String(nowOpen));
          toggle.textContent = nowOpen ? D.ui.showLess : D.ui.showMore;
        }
      });

      return el('li', { class: 'commit ' + j.lane + (j.head ? ' is-head' : ''), style: `animation-delay:${n * 70}ms` }, [
        el('span', { class: 'commit-node', 'aria-hidden': 'true' }),
        el('div', { class: 'commit-meta' }, [
          el('span', { class: 'hash', text: j.hash }),
          j.head ? el('span', { class: 'head-tag', text: 'HEAD → work' }) : null,
          el('span', { text: j.date })
        ]),
        el('h3', { text: j.title }),
        j.org ? el('p', { class: 'org', text: j.org }) : null,
        el('p', { class: 'summary', text: j.summary }),
        detail,
        toggle
      ]);
    }));
  }

  /* ---------- Dự án ---------- */
  const renderProjects = () => $('#project-list').replaceChildren(...D.projects.map((p, i) => {
    const no = String(i + 1).padStart(2, '0');
    return el('article', { class: 'project reveal', style: `--d:${i * 90}ms` }, [
      el('div', { class: 'project-bar', 'aria-hidden': 'true' }, [
        el('span', { class: 'win-dots' }, [el('span'), el('span'), el('span')]),
        el('span', { class: 'mono', text: `~/projects/${no}/README.md` })
      ]),
      el('div', { class: 'project-body' }, [
        el('div', { class: 'project-head' }, [
          el('p', { class: 'project-kicker mono' }, [
            el('span', { class: 'project-no', 'aria-hidden': 'true', text: no }),
            el('span', { text: p.meta })
          ]),
          el('h3', { text: p.title })
        ]),
        el('div', { class: 'pso' }, [
          el('div', {}, [el('h4', { text: D.ui.problem }), el('p', { text: p.problem })]),
          el('div', {}, [el('h4', { text: D.ui.solution }), el('p', { text: p.solution })]),
          el('div', { class: 'pso-result' }, [el('h4', { text: D.ui.result }), el('p', { text: p.result })])
        ]),
        el('div', { class: 'project-foot' }, [
          el('ul', { class: 'tags', 'aria-label': D.ui.stack }, p.stack.map((s) => el('li', { class: 'tag', text: s }))),
          ...p.links.map((l) => el('a', {
            href: l.href, text: l.label,
            ...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})
          }))
        ])
      ])
    ]);
  }));

  /* ---------- Kỹ năng ---------- */
  const renderSkills = () => $('#skill-list').replaceChildren(...D.skills.map((s, i) => {
    const items = s.items.split(', ');
    return el('div', { class: 'skill-card reveal', style: `--d:${i * 70}ms` }, [
      el('h3', {}, [
        el('span', { text: s.group }),
        el('span', { class: 'skill-count mono', 'aria-hidden': 'true', text: String(items.length).padStart(2, '0') })
      ]),
      el('ul', { class: 'tags' }, items.map((t) => el('li', { class: 'tag', text: t })))
    ]);
  }));

  /* ---------- Hiện dần khi cuộn ---------- */
  const io = 'IntersectionObserver' in window && !reduceMotion
    ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 })
    : null;
  const observeReveal = () => document.querySelectorAll('.reveal:not(.in)')
    .forEach((n) => (io ? io.observe(n) : n.classList.add('in')));

  /* ---------- Robot nhìn theo chuột ---------- */
  const hero = $('#top');
  const robot = $('#robot');
  const eyes = $('#robot-eyes');
  let raf = 0;

  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rx = (-py * 16).toFixed(1);
        const ry = (px * 30).toFixed(1);
        robot.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
        eyes.style.transform = `translate(${(ry * 0.35).toFixed(1)}px, ${(-rx * 0.45).toFixed(1)}px)`;
      });
    });
    hero.addEventListener('mouseleave', () => {
      robot.style.transform = '';
      eyes.style.transform = '';
    });
  }

  /* ---------- A-bot ---------- */
  const log = $('#chat-log');
  const form = $('#chat-form');
  const input = $('#chat-input');
  const suggestBox = $('#chat-suggest');
  let busy = false;

  const norm = (t) => (t || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  function findAnswer(question) {
    const q = ' ' + norm(question) + ' ';
    const hit = D.bot.faq.find((f) => f.keywords.some((k) => q.includes(' ' + k + ' ')));
    return hit ? hit.answer : D.bot.fallback;
  }

  /* Hỏi AI qua /api/chat (api/chat.js). Lỗi, hết lượt free hoặc quá 8 giây thì quay về FAQ cũ.
     Hàm phải trả về Promise<string>. */
  async function getReply(question) {
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, lang }),
        signal: AbortSignal.timeout(8000)
      });
      if (!r.ok) throw new Error(r.status);
      const { reply } = await r.json();
      if (!reply) throw new Error('empty');
      return reply;
    } catch (_) {
      return findAnswer(question);
    }
  }

  function addMessage(text, from) {
    log.appendChild(el('p', { class: 'msg ' + (from === 'bot' ? 'msg-bot' : 'msg-user'), text }));
    log.scrollTop = log.scrollHeight;
  }

  async function ask(text) {
    const q = (text || '').trim();
    if (!q || busy) return;
    busy = true;
    addMessage(q, 'user');
    input.value = '';

    const typing = el('p', { class: 'msg msg-bot msg-typing' }, [
      el('span', { class: 'sr-only', text: D.ui.typing }), el('span', { 'aria-hidden': 'true' }), el('span', { 'aria-hidden': 'true' }), el('span', { 'aria-hidden': 'true' })
    ]);
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;
    robot.classList.add('thinking');

    const started = Date.now();
    let reply;
    try { reply = await getReply(q); } catch (_) { reply = D.bot.fallback; }
    const wait = Math.max(0, 700 - (Date.now() - started)); // giữ cảm giác "đang nghĩ"
    setTimeout(() => {
      typing.remove();
      robot.classList.remove('thinking');
      addMessage(reply, 'bot');
      robot.classList.remove('hop'); void robot.offsetWidth; robot.classList.add('hop'); // reflow để chạy lại animation
      busy = false;
    }, wait);
  }

  function renderChat() {
    log.replaceChildren();
    addMessage(D.bot.greeting, 'bot');
    suggestBox.replaceChildren(...D.bot.suggestions.map((s) => el('button', {
      type: 'button', class: 'chip-btn', text: s, onclick: () => ask(s)
    })));
  }
  form.addEventListener('submit', (e) => { e.preventDefault(); ask(input.value); });

  /* ---------- Tiêu đề hero: gõ từng chữ ---------- */
  function typeTitle() {
    const h1 = $('.hero-title');
    let i = 0;
    h1.querySelectorAll(':scope > span').forEach((line, n) => {
      const text = line.textContent.normalize('NFC'); // NFC: "ể" là 1 ký tự, không tách dấu
      line.replaceChildren(
        el('span', { class: 'sr-only', text }), // trình đọc màn hình đọc cả câu, không đọc từng chữ
        el('span', { 'aria-hidden': 'true' }, [...text].map((ch) => el('span', { class: 'ch', text: ch, style: `--i:${i++}` })))
      );
      i += 4; // nghỉ một nhịp giữa các dòng
    });
    h1.classList.add('typed');
  }

  /* Dựng lại toàn bộ nội dung theo ngôn ngữ hiện tại (lúc tải trang và khi đổi ngôn ngữ) */
  function render() {
    renderStatic();
    typeTitle();
    renderFilters();
    renderCommits();
    renderProjects();
    renderSkills();
    renderChat();
    observeReveal();
  }
  render();
})();
