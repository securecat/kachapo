// ─────────────────────────────────────────────
//  kachapo — content.js
// ─────────────────────────────────────────────

// ── 擬音リスト ────────────────────────────────
const ONOMA = {
  en: {
    click: [
      { text: "Click!",   color: "#7C3AED" },
      { text: "Snap!",    color: "#D97706" },
      { text: "Tap!",     color: "#059669" },
      { text: "Pop!",     color: "#DC2626" },
      { text: "Tick!",    color: "#2563EB" },
      { text: "Clack!",   color: "#DB2777" },
    ],
    drag: [
      { text: "Swoosh~",  color: "#7C3AED" },
      { text: "Slide~",   color: "#2563EB" },
      { text: "Glide…",   color: "#059669" },
      { text: "Whoosh~",  color: "#DC2626" },
      { text: "Swipe~",   color: "#D97706" },
      { text: "Scrape~",  color: "#0891B2" },
      { text: "Zip!",     color: "#DB2777" },
      { text: "Sweep~",   color: "#7C3AED" },
    ],
    wheel: {
      down: [
        { text: "Scroll~",  color: "#7C3AED" },
        { text: "Whirr~",   color: "#2563EB" },
        { text: "Spin~",    color: "#D97706" },
        { text: "Roll~",    color: "#059669" },
        { text: "Zoom~",    color: "#DC2626" },
        { text: "Slither~", color: "#0891B2" },
      ],
      up: [
        { text: "Whoosh~",  color: "#DB2777" },
        { text: "Glide~",   color: "#0891B2" },
        { text: "Swoosh~",  color: "#7C3AED" },
        { text: "Rise~",    color: "#2563EB" },
        { text: "Slither~", color: "#059669" },
      ],
    },
    type: [
      { text: "Clackety!", color: "#7C3AED" },
      { text: "Clickety!", color: "#2563EB" },
      { text: "Tap tap!",  color: "#D97706" },
      { text: "Rattle!",   color: "#059669" },
      { text: "Clatter!",  color: "#DC2626" },
      { text: "Pitter!",   color: "#DB2777" },
      { text: "Patter!",   color: "#7C3AED" },
      { text: "Brrrap!",   color: "#0891B2" },
    ],
  },
  ja: {
    click: [
      { text: "カチッ",   color: "#7C3AED" },
      { text: "ポチッ",   color: "#D97706" },
      { text: "ピッ",     color: "#059669" },
      { text: "タッ",     color: "#DC2626" },
      { text: "クリッ",   color: "#2563EB" },
      { text: "ペチッ",   color: "#DB2777" },
    ],
    drag: [
      { text: "ぞりぞり", color: "#7C3AED" },
      { text: "しゅー",   color: "#2563EB" },
      { text: "すぅ…",    color: "#059669" },
      { text: "ずずず",   color: "#DC2626" },
      { text: "にゅる",   color: "#D97706" },
      { text: "さーっ",   color: "#0891B2" },
      { text: "ぐいっ",   color: "#DB2777" },
      { text: "ひゅっ",   color: "#7C3AED" },
    ],
    wheel: {
      down: [
        { text: "くるくる", color: "#7C3AED" },
        { text: "ごろごろ", color: "#2563EB" },
        { text: "すべすべ", color: "#D97706" },
        { text: "するする", color: "#059669" },
        { text: "くるっ",   color: "#DC2626" },
        { text: "ぬるぬる", color: "#0891B2" },
      ],
      up: [
        { text: "するする", color: "#DB2777" },
        { text: "すーっ",   color: "#0891B2" },
        { text: "ひゅっ",   color: "#059669" },
        { text: "すっ",     color: "#2563EB" },
        { text: "ぬるぬる", color: "#7C3AED" },
      ],
    },
    type: [
      { text: "チャカポコ",   color: "#7C3AED" },
      { text: "カチャカチャ", color: "#2563EB" },
      { text: "タカタカ",     color: "#D97706" },
      { text: "カタカタ",     color: "#059669" },
      { text: "ぱたぱた",     color: "#DC2626" },
      { text: "テケテケ",     color: "#DB2777" },
      { text: "ダダダダ",     color: "#7C3AED" },
      { text: "ポチポチ",     color: "#0891B2" },
    ],
  },
};

// ── 設定 ─────────────────────────────────────
const settings = {
  lang:       'en',
  color:      'light',
  trigClick:  true,
  trigDrag:   true,
  trigWheel:  true,
  trigTyping: true,
};

chrome.storage.local.get(
  ['kp-lang', 'kp-color', 'kp-trig-click', 'kp-trig-drag', 'kp-trig-wheel', 'kp-trig-typing'],
  (result) => {
    if (result['kp-lang'])  settings.lang  = result['kp-lang'];
    if (result['kp-color']) settings.color = result['kp-color'];
    if (result['kp-trig-click']  !== undefined) settings.trigClick  = result['kp-trig-click'];
    if (result['kp-trig-drag']   !== undefined) settings.trigDrag   = result['kp-trig-drag'];
    if (result['kp-trig-wheel']  !== undefined) settings.trigWheel  = result['kp-trig-wheel'];
    if (result['kp-trig-typing'] !== undefined) settings.trigTyping = result['kp-trig-typing'];
  }
);

chrome.storage.onChanged.addListener((changes) => {
  if (changes['kp-lang'])        settings.lang       = changes['kp-lang'].newValue;
  if (changes['kp-color'])       settings.color      = changes['kp-color'].newValue;
  if (changes['kp-trig-click'])  settings.trigClick  = changes['kp-trig-click'].newValue;
  if (changes['kp-trig-drag'])   settings.trigDrag   = changes['kp-trig-drag'].newValue;
  if (changes['kp-trig-wheel'])  settings.trigWheel  = changes['kp-trig-wheel'].newValue;
  if (changes['kp-trig-typing']) settings.trigTyping = changes['kp-trig-typing'].newValue;
});

// ── @keyframes 注入（初回のみ） ───────────────
(function injectStyles() {
  if (document.getElementById('kachapo-style')) return;
  const s = document.createElement('style');
  s.id = 'kachapo-style';
  s.textContent = `
    @keyframes kp-click {
      0%   { opacity:0; transform:scale(0.4) rotate(var(--rot)); }
      15%  { opacity:1; transform:scale(1.3)  rotate(var(--rot)); }
      55%  { opacity:1; transform:scale(1.0)  rotate(var(--rot)); }
      100% { opacity:0; transform:scale(0.85) translateY(-22px) rotate(var(--rot)); }
    }
    @keyframes kp-drag {
      0%   { opacity:0; transform:scale(0.5) rotate(var(--rot)); }
      20%  { opacity:0.9; transform:scale(1.08) rotate(var(--rot)); }
      65%  { opacity:0.75; transform:scale(1.0) rotate(var(--rot)); }
      100% { opacity:0; transform:scale(0.8) translateY(-12px) rotate(var(--rot)); }
    }
    @keyframes kp-wheel {
      0%   { opacity:0; transform:scale(0.5) rotate(var(--rot)); }
      18%  { opacity:1; transform:scale(1.2) rotate(var(--rot)); }
      60%  { opacity:0.85; transform:scale(1.0) rotate(var(--rot)); }
      100% { opacity:0; transform:scale(0.8) translateY(-16px) rotate(var(--rot)); }
    }
    @keyframes kp-type {
      0%   { opacity:0; transform:scale(0.5) rotate(var(--rot)); }
      18%  { opacity:1; transform:scale(1.15) rotate(var(--rot)); }
      55%  { opacity:0.85; transform:scale(1.0) rotate(var(--rot)); }
      100% { opacity:0; transform:scale(0.8) translateY(-14px) rotate(var(--rot)); }
    }
  `;
  document.head.appendChild(s);
})();

// ── ユーティリティ ────────────────────────────
function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function strokeColor() {
  return settings.color === 'dark' ? '#fff' : '#000';
}

function pickAbove(rectTop, rectBottom) {
  const canGoAbove = rectTop > 40;
  const canGoBelow = rectBottom < window.innerHeight - 40;
  if (canGoAbove && canGoBelow) return Math.random() < 0.5;
  return canGoAbove;
}

// ── 擬音を画面に出す ──────────────────────────
function spawnOnoma(x, y, p, kind) {
  const rot  = (Math.random() * 20 - 10) + 'deg';
  const size = kind === 'click' ? '26px' : kind === 'drag' ? '18px' : kind === 'wheel' ? '24px' : '22px';
  const anim = kind === 'click' ? 'kp-click 1.1s' : kind === 'drag' ? 'kp-drag 0.9s' : kind === 'wheel' ? 'kp-wheel 1.0s' : 'kp-type 1.0s';
  const dur  = kind === 'click' ? 1150 : kind === 'drag' ? 950 : 1050;

  const el = document.createElement('div');
  el.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y - 10}px;
    color: ${p.color};
    font-family: 'Hiragino Kaku Gothic Pro', 'Meiryo', 'Noto Sans JP', sans-serif;
    font-weight: 700;
    font-size: ${size};
    -webkit-text-stroke: 1px ${strokeColor()};
    paint-order: stroke fill;
    pointer-events: none;
    z-index: 2147483647;
    white-space: nowrap;
    letter-spacing: 0.03em;
    transform: rotate(${rot});
    --rot: ${rot};
    animation: ${anim} ease-out forwards;
  `;
  el.textContent = p.text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), dur);
}

// ── キャレット座標を取得（input / textarea） ───
function getCaretCoords(el) {
  const rect   = el.getBoundingClientRect();
  const cs     = window.getComputedStyle(el);
  const mirror = document.createElement('div');

  ['font', 'fontSize', 'fontFamily', 'fontWeight', 'letterSpacing',
   'lineHeight', 'textTransform', 'wordSpacing',
   'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom',
   'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth',
   'boxSizing',
  ].forEach(p => { mirror.style[p] = cs[p]; });

  mirror.style.cssText += `
    position: fixed;
    visibility: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    width: ${rect.width}px;
    left: ${rect.left}px;
    top: ${rect.top}px;
    overflow: hidden;
  `;

  const pos = el.selectionEnd ?? el.selectionStart ?? 0;
  mirror.textContent = (el.value ?? '').slice(0, pos);

  const caret = document.createElement('span');
  caret.textContent = '​';
  mirror.appendChild(caret);
  document.body.appendChild(mirror);

  const cr = caret.getBoundingClientRect();
  document.body.removeChild(mirror);

  return {
    x: Math.min(cr.left + 2, rect.right - 4),
    y: Math.max(cr.top,      rect.top   + 4),
  };
}

// ── 入力可能要素かどうか ──────────────────────
function isTypable(el) {
  if (!el) return false;
  if (el.tagName === 'TEXTAREA') return true;
  if (el.tagName === 'INPUT') {
    const t = (el.type || 'text').toLowerCase();
    return ['text', 'search', 'email', 'url', 'password', 'number', 'tel'].includes(t);
  }
  return false;
}

// ── 状態管理 ──────────────────────────────────
let mouseIsDown   = false;
let hasDragged    = false;
let dragThrottle  = 0;
let selThrottle   = 0;
let typeThrottle  = 0;
let wheelThrottle = 0;
let lastMoveX     = 0;
let lastMoveY     = 0;

const DRAG_INTERVAL  = 280;
const DRAG_MIN_DIST  = 12;
const SEL_INTERVAL   = 320;
const TYPE_INTERVAL  = 220;
const WHEEL_INTERVAL = 200;

// ── mousedown ─────────────────────────────────
document.addEventListener('mousedown', (e) => {
  mouseIsDown = true;
  hasDragged  = false;
  lastMoveX   = e.clientX;
  lastMoveY   = e.clientY;
  if (settings.trigClick) {
    spawnOnoma(e.clientX, e.clientY, pick(ONOMA[settings.lang].click), 'click');
  }
}, true);

// ── mousemove ─────────────────────────────────
document.addEventListener('mousemove', (e) => {
  if (!mouseIsDown || e.buttons === 0) return;
  const dx   = e.clientX - lastMoveX;
  const dy   = e.clientY - lastMoveY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const now  = Date.now();
  if (dist < DRAG_MIN_DIST || now - dragThrottle < DRAG_INTERVAL) return;
  hasDragged   = true;
  dragThrottle = now;
  lastMoveX    = e.clientX;
  lastMoveY    = e.clientY;
  if (settings.trigDrag) {
    spawnOnoma(e.clientX, e.clientY, pick(ONOMA[settings.lang].drag), 'drag');
  }
}, true);

// ── selectionchange ───────────────────────────
document.addEventListener('selectionchange', () => {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return;
  const now = Date.now();
  if (now - selThrottle < SEL_INTERVAL) return;
  selThrottle = now;
  const range = sel.getRangeAt(0);
  const r     = range.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return;
  if (settings.trigDrag) {
    const above = pickAbove(r.top, r.bottom);
    const sy    = above
      ? r.top    - 8 - Math.random() * 16
      : r.bottom + 8 + Math.random() * 16;
    const sx    = r.right + (Math.random() * 20 - 10);
    spawnOnoma(sx, sy, pick(ONOMA[settings.lang].drag), 'drag');
  }
  if (mouseIsDown) hasDragged = true;
}, true);

// ── mouseup ───────────────────────────────────
document.addEventListener('mouseup', (e) => {
  if (hasDragged && settings.trigClick) {
    spawnOnoma(e.clientX, e.clientY, pick(ONOMA[settings.lang].click), 'click');
  }
  mouseIsDown = false;
  hasDragged  = false;
}, true);

// ── wheel ─────────────────────────────────────
document.addEventListener('wheel', (e) => {
  if (!settings.trigWheel) return;
  const now = Date.now();
  if (now - wheelThrottle < WHEEL_INTERVAL) return;
  wheelThrottle = now;
  const dir  = e.deltaY > 0 ? 'down' : 'up';
  const list = ONOMA[settings.lang].wheel[dir];
  const x    = e.clientX + (Math.random() * 60 - 30);
  const y    = e.clientY + (Math.random() * 60 - 30);
  spawnOnoma(x, y, pick(list), 'wheel');
}, { passive: true, capture: true });

// ── keydown ───────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta') return;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  const active = document.activeElement;
  if (!isTypable(active)) return;
  const navKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
                   'Home', 'End', 'PageUp', 'PageDown', 'Tab'];
  if (navKeys.includes(e.key)) return;
  if (!settings.trigTyping) return;
  const now = Date.now();
  if (now - typeThrottle < TYPE_INTERVAL) return;
  typeThrottle = now;
  const coords = getCaretCoords(active);
  const rect   = active.getBoundingClientRect();
  const above  = pickAbove(rect.top, rect.bottom);
  const ty     = above
    ? rect.top    - 8 - Math.random() * 16
    : rect.bottom + 8 + Math.random() * 16;
  const tx     = coords.x + (Math.random() * 40 - 20);
  spawnOnoma(tx, ty, pick(ONOMA[settings.lang].type), 'type');
}, true);
