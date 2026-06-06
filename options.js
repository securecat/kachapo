const STORAGE_KEY = 'kp-excluded-urls';
const OPTIONS_DEFAULT_URLS = [
  { value: 'https://payment.dmm.com/receipt/issue/', isRegex: false },
  { value: 'https://peatix\\.com/user/\\d+/payout_details/', isRegex: true },
];

let excludedUrls = [];

function render() {
  const list  = document.getElementById('url-list');
  const empty = document.getElementById('empty-state');
  list.innerHTML = '';
  list.removeAttribute('aria-busy');

  if (excludedUrls.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  excludedUrls.forEach(entry => {
    const li = document.createElement('li');
    li.className = 'url-item';

    if (entry.isRegex) {
      const badge = document.createElement('span');
      badge.className = 'regex-badge';
      badge.textContent = 'regex';
      badge.setAttribute('aria-label', 'Regular expression');
      li.append(badge);
    }

    const span = document.createElement('span');
    span.className = 'url-text';
    span.textContent = entry.value;

    const btn = document.createElement('button');
    btn.className = 'remove-btn';
    btn.textContent = 'Remove';
    btn.setAttribute('aria-label', `Remove ${entry.value}`);
    btn.addEventListener('click', () => remove(entry));

    li.append(span, btn);
    list.append(li);
  });
}

function save() {
  chrome.storage.local.set({ [STORAGE_KEY]: excludedUrls });
}

function remove(entry) {
  excludedUrls = excludedUrls.filter(e => e.value !== entry.value || e.isRegex !== entry.isRegex);
  save();
  render();
}

function showError(msg) {
  document.getElementById('url-error').textContent = msg;
}

function clearError() {
  document.getElementById('url-error').textContent = '';
}

function add(raw, isRegex) {
  const value = raw.trim();

  if (isRegex) {
    if (!value) { showError('Please enter a regular expression.'); return; }
    try { new RegExp(value); } catch { showError('Invalid regular expression.'); return; }
  } else {
    if (!value.startsWith('http://') && !value.startsWith('https://')) {
      showError('URL must start with https:// or http://');
      return;
    }
    try { new URL(value); } catch { showError('Please enter a valid URL.'); return; }
  }

  if (excludedUrls.some(e => e.value === value && e.isRegex === isRegex)) {
    showError('This entry is already in the list.');
    return;
  }

  excludedUrls.push({ value, isRegex });
  save();
  render();
  document.getElementById('url-input').value = '';
  document.getElementById('regex-toggle').checked = false;
  document.getElementById('url-input').placeholder = 'https://example.com/path/';
  clearError();
}

chrome.storage.local.get([STORAGE_KEY], (result) => {
  const raw = result[STORAGE_KEY];
  if (!raw) {
    excludedUrls = OPTIONS_DEFAULT_URLS;
    save();
  } else {
    const needsMigration = raw.some(e => typeof e === 'string');
    excludedUrls = raw.map(e => typeof e === 'string' ? { value: e, isRegex: false } : e);
    if (needsMigration) save();
  }
  render();
});

document.getElementById('url-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const isRegex = document.getElementById('regex-toggle').checked;
  add(document.getElementById('url-input').value, isRegex);
});

document.getElementById('regex-toggle').addEventListener('change', (e) => {
  document.getElementById('url-input').placeholder = e.target.checked
    ? 'https://example\\.com/user/\\d+/path/'
    : 'https://example.com/path/';
});
