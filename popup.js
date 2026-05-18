const KEYS     = ['lang', 'color'];
const DEFAULTS = { lang: 'en', color: 'light' };

chrome.storage.local.get(KEYS.map(k => 'kp-' + k), (result) => {
  KEYS.forEach(key => {
    const val = result['kp-' + key] || DEFAULTS[key];
    const el  = document.querySelector(`input[name=${key}][value="${val}"]`);
    if (el) el.checked = true;
  });
});

const savedEl = document.getElementById('saved');
let savedTimer;

document.querySelectorAll('input[type=radio]').forEach(radio => {
  radio.addEventListener('change', e => {
    chrome.storage.local.set({ ['kp-' + e.target.name]: e.target.value });
    savedEl.classList.add('show');
    clearTimeout(savedTimer);
    savedTimer = setTimeout(() => savedEl.classList.remove('show'), 1400);
  });
});
