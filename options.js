const STORAGE_KEY = 'kp-excluded-urls';
const OPTIONS_DEFAULT_URLS = ['https://payment.dmm.com/receipt/issue/'];

let excludedUrls = [];

function render() {
  const list  = document.getElementById('url-list');
  const empty = document.getElementById('empty-state');
  list.innerHTML = '';

  if (excludedUrls.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  excludedUrls.forEach(url => {
    const li  = document.createElement('li');
    li.className = 'url-item';

    const span = document.createElement('span');
    span.className = 'url-text';
    span.textContent = url;

    const btn = document.createElement('button');
    btn.className = 'remove-btn';
    btn.textContent = 'Remove';
    btn.setAttribute('aria-label', `Remove ${url}`);
    btn.addEventListener('click', () => remove(url));

    li.append(span, btn);
    list.append(li);
  });
}

function save() {
  chrome.storage.local.set({ [STORAGE_KEY]: excludedUrls });
}

function remove(url) {
  excludedUrls = excludedUrls.filter(u => u !== url);
  save();
  render();
}

function showError(msg) {
  document.getElementById('url-error').textContent = msg;
}

function clearError() {
  document.getElementById('url-error').textContent = '';
}

function add(raw) {
  const url = raw.trim();

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    showError('URL must start with https:// or http://');
    return;
  }

  try {
    new URL(url);
  } catch {
    showError('Please enter a valid URL.');
    return;
  }

  if (excludedUrls.includes(url)) {
    showError('This URL is already in the list.');
    return;
  }

  excludedUrls.push(url);
  save();
  render();
  document.getElementById('url-input').value = '';
  clearError();
}

chrome.storage.local.get([STORAGE_KEY], (result) => {
  excludedUrls = result[STORAGE_KEY] ?? OPTIONS_DEFAULT_URLS;
  if (!result[STORAGE_KEY]) save();
  render();
});

document.getElementById('url-form').addEventListener('submit', (e) => {
  e.preventDefault();
  add(document.getElementById('url-input').value);
});
