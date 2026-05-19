const KEYS     = ['lang', 'color'];
const DEFAULTS = { lang: 'en', color: 'light' };
const current  = { lang: 'en', color: 'light' };

const ONOMA = {
  en: [
    { text: 'Click!',  color: '#7C3AED' },
    { text: 'Snap!',   color: '#D97706' },
    { text: 'Tap!',    color: '#059669' },
    { text: 'Pop!',    color: '#DC2626' },
    { text: 'Tick!',   color: '#2563EB' },
    { text: 'Clack!',  color: '#DB2777' },
  ],
  ja: [
    { text: 'カチッ', color: '#7C3AED' },
    { text: 'ポチッ', color: '#D97706' },
    { text: 'ピッ',   color: '#059669' },
    { text: 'タッ',   color: '#DC2626' },
    { text: 'クリッ', color: '#2563EB' },
    { text: 'ペチッ', color: '#DB2777' },
  ],
};

chrome.storage.local.get(KEYS.map(k => 'kp-' + k), (result) => {
  const toSave = {};
  KEYS.forEach(key => {
    const storageKey = 'kp-' + key;
    const stored = result[storageKey];
    const el = stored && document.querySelector(`input[name=${key}][value="${stored}"]`);
    if (el) {
      el.checked = true;
      current[key] = stored;
    } else {
      current[key] = DEFAULTS[key];
      const defaultEl = document.querySelector(`input[name=${key}][value="${DEFAULTS[key]}"]`);
      if (defaultEl) defaultEl.checked = true;
      toSave[storageKey] = DEFAULTS[key];
    }
  });
  if (Object.keys(toSave).length) chrome.storage.local.set(toSave);
});

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function spawnOnoma(lang, radioEl) {
  const rect    = radioEl.closest('fieldset').getBoundingClientRect();
  const centerY = rect.top + rect.height / 2;
  const p       = pick(ONOMA[lang] || ONOMA.en);
  const rot     = (Math.random() * 16 - 8) + 'deg';
  const stroke  = current.color === 'dark' ? '#fff' : '#000';
  const el      = document.createElement('div');
  el.setAttribute('aria-hidden', 'true');
  el.style.cssText = `
    position: fixed;
    right: 20px;
    top: ${centerY}px;
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

document.querySelectorAll('input[type=radio]').forEach(radio => {
  radio.addEventListener('change', e => {
    chrome.storage.local.set({ ['kp-' + e.target.name]: e.target.value });
    current[e.target.name] = e.target.value;
    const lang = e.target.name === 'lang' ? e.target.value : current.lang;
    spawnOnoma(lang, e.target);
  });
});
