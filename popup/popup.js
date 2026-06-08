const RADIO_KEYS     = ['lang', 'color', 'all-trig'];
const DEFAULT_LANG   = chrome.i18n.getUILanguage().startsWith('ja') ? 'ja' : 'en';
const RADIO_DEFAULTS = { lang: DEFAULT_LANG, color: 'light', 'all-trig': 'on' };

const TRIG_KEYS     = ['click', 'drag', 'wheel', 'typing'];
const TRIG_DEFAULTS = { click: true, drag: true, wheel: true, typing: true };

const current = { lang: DEFAULT_LANG, color: 'light', 'all-trig': 'on' };

const ONOMA = {
  en: {
    click: [
      { text: 'Click!',  color: '#7C3AED' },
      { text: 'Snap!',   color: '#D97706' },
      { text: 'Tap!',    color: '#059669' },
      { text: 'Pop!',    color: '#DC2626' },
      { text: 'Tick!',   color: '#2563EB' },
      { text: 'Clack!',  color: '#DB2777' },
    ],
    wheel: [
      { text: 'Scroll~',  color: '#7C3AED' },
      { text: 'Whirr~',   color: '#2563EB' },
      { text: 'Spin~',    color: '#D97706' },
      { text: 'Roll~',    color: '#059669' },
      { text: 'Whoosh~',  color: '#DB2777' },
      { text: 'Swoosh~',  color: '#7C3AED' },
    ],
  },
  ja: {
    click: [
      { text: 'カチッ', color: '#7C3AED' },
      { text: 'ポチッ', color: '#D97706' },
      { text: 'ピッ',   color: '#059669' },
      { text: 'タッ',   color: '#DC2626' },
      { text: 'クリッ', color: '#2563EB' },
      { text: 'ペチッ', color: '#DB2777' },
    ],
    wheel: [
      { text: 'くるくる', color: '#7C3AED' },
      { text: 'ごろごろ', color: '#2563EB' },
      { text: 'するする', color: '#059669' },
      { text: 'すーっ',   color: '#0891B2' },
      { text: 'くるっ',   color: '#DC2626' },
      { text: 'ぬるぬる', color: '#DB2777' },
    ],
  },
};

// ─ ストレージから読み込み ─────────────────────
const allKeys = [
  ...RADIO_KEYS.map(k => 'kp-' + k),
  ...TRIG_KEYS.map(k => 'kp-trig-' + k),
];

chrome.storage.local.get(allKeys, (result) => {
  const toSave = {};

  // ラジオボタン
  RADIO_KEYS.forEach(key => {
    const storageKey = 'kp-' + key;
    const stored = result[storageKey];
    const el = stored && document.querySelector(`input[name=${key}][value="${stored}"]`);
    if (el) {
      el.checked = true;
      current[key] = stored;
    } else {
      current[key] = RADIO_DEFAULTS[key];
      const defaultEl = document.querySelector(`input[name=${key}][value="${RADIO_DEFAULTS[key]}"]`);
      if (defaultEl) defaultEl.checked = true;
      toSave[storageKey] = RADIO_DEFAULTS[key];
    }
  });

  // チェックボックス
  TRIG_KEYS.forEach(key => {
    const storageKey = 'kp-trig-' + key;
    const stored = result[storageKey];
    const val = (stored !== undefined) ? stored : TRIG_DEFAULTS[key];
    const el  = document.querySelector(`input[type=checkbox][value="${key}"]`);
    if (el) el.checked = val;
    if (stored === undefined) toSave[storageKey] = TRIG_DEFAULTS[key];
  });

  if (Object.keys(toSave).length) chrome.storage.local.set(toSave);
});

// ─ ユーティリティ ────────────────────────────
function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function spawnOnoma(lang, targetEl, list, coords) {
  const rect    = targetEl.getBoundingClientRect();
  const x       = coords ? coords.x + (Math.random() * 20 - 10) : rect.left + rect.width / 2 + (Math.random() * 20 - 10);
  const y       = coords ? coords.y : rect.top + rect.height / 2;
  const words   = list || (ONOMA[lang] || ONOMA.en).click;
  const p       = pick(words);
  const rot     = (Math.random() * 16 - 8) + 'deg';
  const stroke  = current.color === 'dark' ? '#fff' : '#000';
  const el      = document.createElement('div');
  el.setAttribute('aria-hidden', 'true');
  el.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y - 10}px;
    color: ${p.color};
    font-family: 'Hiragino Kaku Gothic Pro', 'Meiryo', 'Noto Sans JP', system-ui, sans-serif;
    font-size: 26px;
    font-weight: 700;
    -webkit-text-stroke: 1px ${stroke};
    paint-order: stroke fill;
    pointer-events: none;
    white-space: nowrap;
    letter-spacing: 0.03em;
    --rot: ${rot};
    transform: rotate(${rot});
    animation: kp-popup 1.1s ease-out forwards;
    z-index: 100;
  `;
  el.textContent = p.text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1150);
}

// ─ ラジオボタン変更 ──────────────────────────
document.querySelectorAll('input[type=radio]').forEach(radio => {
  radio.addEventListener('change', e => {
    chrome.storage.local.set({ ['kp-' + e.target.name]: e.target.value });
    current[e.target.name] = e.target.value;
    if (current['all-trig'] !== 'on') return;
    const lang = e.target.name === 'lang' ? e.target.value : current.lang;
    spawnOnoma(lang, e.target.closest('label') || e.target, (ONOMA[lang] || ONOMA.en).click);
  });
});

// ─ チェックボックス変更 ──────────────────────
document.querySelectorAll('input[type=checkbox][name=trig]').forEach(cb => {
  cb.addEventListener('change', e => {
    chrome.storage.local.set({ ['kp-trig-' + e.target.value]: e.target.checked });
    if (current['all-trig'] !== 'on') return;
    spawnOnoma(current.lang, e.target.closest('label') || e.target, (ONOMA[current.lang] || ONOMA.en).click);
  });
});

// ─ ホイールプレビュー ────────────────────────
let wheelThrottle = 0;
document.addEventListener('wheel', (e) => {
  if (current['all-trig'] !== 'on') return;
  const wheelCb = document.querySelector('input[type=checkbox][value="wheel"]');
  if (!wheelCb?.checked) return;
  const now = Date.now();
  if (now - wheelThrottle < 200) return;
  wheelThrottle = now;
  spawnOnoma(current.lang, document.body, (ONOMA[current.lang] || ONOMA.en).wheel, { x: e.clientX, y: e.clientY });
}, { passive: true });

// ─ Options リンク ────────────────────────────
document.getElementById('options-link').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});
