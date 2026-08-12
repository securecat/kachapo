const STORAGE_KEY    = 'kp-excluded-urls';
const UI_LANG_KEY    = 'kp-ui-lang';
const DEFAULT_UI_LANG = chrome.i18n.getUILanguage().startsWith('ja') ? 'ja' : 'en';

const OPTIONS_DEFAULT_URLS = [
  { value: 'https://payment.dmm.com/receipt/issue/', isRegex: false },
  { value: 'https://peatix\\.com/user/\\d+/payout_details/', isRegex: true },
  { value: 'https://clientweb.e-tax.nta.go.jp/', isRegex: false },
  { value: 'https://invoice.borndigital.jp/genpdf/', isRegex: false },
];

let uiLang      = DEFAULT_UI_LANG;
let excludedUrls = [];

// ─ I18N ──────────────────────────────────────
const I18N = {
  en: {
    page_title:      'kachapo — Options',
    logo:            'ka<span>cha</span>po',
    subtitle:        'Options',
    ui_lang_title:   'UI Language',
    ui_lang_en:      'English',
    ui_lang_ja:      'Japanese',
    excluded_title:  'Excluded URLs',
    excluded_desc:   'kachapo will not activate on matching pages, regardless of other settings. Add a URL prefix for simple matching, or check "Regex" to use a regular expression. Reload the tab after making changes.',
    url_list_label:  'Excluded URL list',
    empty_state:     'No excluded URLs.',
    url_input_label: 'URL prefix or regular expression to exclude',
    regex_label:     'Regex',
    add_btn:         'Add',
    remove_btn:      'Remove',
    remove_aria:     (v) => `Remove ${v}`,
    footer:          'Found a bug? <a href="https://github.com/securecat/kachapo/issues" target="_blank" rel="noopener">Report it on GitHub Issues</a>.',
    err_empty_regex: 'Please enter a regular expression.',
    err_bad_regex:   'Invalid regular expression.',
    err_url_prefix:  'URL must start with https:// or http://',
    err_bad_url:     'Please enter a valid URL.',
    err_duplicate:   'This entry is already in the list.',
  },
  ja: {
    page_title:      'カチャポ — オプション',
    logo:            'カ<span>チャ</span>ポ',
    subtitle:        'オプション',
    ui_lang_title:   'UI言語',
    ui_lang_en:      '英語',
    ui_lang_ja:      '日本語',
    excluded_title:  '除外URL',
    excluded_desc:   '登録したURLに一致するページでは、他の設定に関わらずカチャポは動作しません。URLプレフィックスで前方一致、または「正規表現」にチェックを入れて正規表現で指定できます。変更後はタブを再読み込みしてください。',
    url_list_label:  '除外URLリスト',
    empty_state:     '除外URLはありません。',
    url_input_label: '除外するURLプレフィックスまたは正規表現',
    regex_label:     '正規表現',
    add_btn:         '追加',
    remove_btn:      '削除',
    remove_aria:     (v) => `${v} を削除`,
    footer:          'バグを見つけたら <a href="https://github.com/securecat/kachapo/issues" target="_blank" rel="noopener">GitHub Issues</a> へ。',
    err_empty_regex: '正規表現を入力してください。',
    err_bad_regex:   '正規表現が不正です。',
    err_url_prefix:  'URLは https:// または http:// で始まる必要があります。',
    err_bad_url:     '有効なURLを入力してください。',
    err_duplicate:   'このエントリはすでにリストに追加されています。',
  },
};

// ─ UI言語の適用 ───────────────────────────────
function applyUiLang(lang) {
  const t = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
  document.title                                              = t.page_title;
  document.getElementById('logo').innerHTML                  = t.logo;
  document.getElementById('subtitle').textContent            = t.subtitle;
  document.getElementById('opt-ui-lang-title').textContent   = t.ui_lang_title;
  document.getElementById('label-ui-lang-en').textContent    = t.ui_lang_en;
  document.getElementById('label-ui-lang-ja').textContent    = t.ui_lang_ja;
  document.getElementById('opt-excluded-title').textContent  = t.excluded_title;
  document.getElementById('opt-excluded-desc').textContent   = t.excluded_desc;
  document.getElementById('url-list').setAttribute('aria-label', t.url_list_label);
  document.getElementById('empty-state').textContent         = t.empty_state;
  document.getElementById('url-input-label').textContent     = t.url_input_label;
  document.getElementById('regex-label-text').textContent    = t.regex_label;
  document.getElementById('add-btn').textContent             = t.add_btn;
  document.getElementById('footer-card').innerHTML           = t.footer;
}

// ─ 除外URLリストの描画 ───────────────────────
function render() {
  const list  = document.getElementById('url-list');
  const empty = document.getElementById('empty-state');
  const t     = I18N[uiLang] || I18N.en;
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
    btn.textContent = t.remove_btn;
    btn.setAttribute('aria-label', t.remove_aria(entry.value));
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
  const t     = I18N[uiLang] || I18N.en;

  if (isRegex) {
    if (!value) { showError(t.err_empty_regex); return; }
    try { new RegExp(value); } catch { showError(t.err_bad_regex); return; }
  } else {
    if (!value.startsWith('http://') && !value.startsWith('https://')) {
      showError(t.err_url_prefix); return;
    }
    try { new URL(value); } catch { showError(t.err_bad_url); return; }
  }

  if (excludedUrls.some(e => e.value === value && e.isRegex === isRegex)) {
    showError(t.err_duplicate); return;
  }

  excludedUrls.push({ value, isRegex });
  save();
  render();
  document.getElementById('url-input').value = '';
  document.getElementById('regex-toggle').checked = false;
  document.getElementById('url-input').placeholder = 'https://example.com/path/';
  clearError();
}

// ─ ストレージから読み込み ─────────────────────
chrome.storage.local.get([STORAGE_KEY, UI_LANG_KEY], (result) => {
  uiLang = result[UI_LANG_KEY] ?? DEFAULT_UI_LANG;
  applyUiLang(uiLang);
  const uiRadio = document.querySelector(`input[name="ui-lang"][value="${uiLang}"]`);
  if (uiRadio) uiRadio.checked = true;

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

// ─ UI言語切り替え ────────────────────────────
document.querySelectorAll('input[name="ui-lang"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    uiLang = e.target.value;
    chrome.storage.local.set({ [UI_LANG_KEY]: uiLang });
    applyUiLang(uiLang);
    render();
  });
});

// ─ URL追加フォーム ───────────────────────────
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

document.getElementById('url-input').addEventListener('focus', clearError);
