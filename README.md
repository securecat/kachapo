# Kachapo

Kachapo is a Chrome extension that visualizes the sounds of your interactions on any webpage.

## Overview

Your clicks, drag-selections, and keystrokes in input fields are all accompanied by onomatopoeia that pops up on screen. Inspired by "Miruoto," an ethical creative project by Hogaku Inc. (founded by Reiko Katayama). That said, unlike Miruoto, Kachapo solves absolutely no social problems — it's just a joke app.

## Features

- Onomatopoeia appears on click
- Onomatopoeia appears on drag-select (text selection)
- Onomatopoeia appears on keystroke in input fields
- Configure language (English / Japanese) and text stroke color (Black / White) from the popup
- Toggle all triggers on or off at once from the popup — handy for going quiet before a serious screen-sharing session
- Register excluded URLs to completely suppress kachapo on specific pages, regardless of other settings

## Notes

Kachapo may not work on sites with strict CSP (Content Security Policy) or heavy SPA frameworks. Consider it best-effort fun.

## Installation

### Chrome Web Store

https://chromewebstore.google.com/detail/kachapo/pnihiolhgllmpalikhngjidaagmkkpph

> The Chrome Web Store version may lag behind the repository during the review process.

### Developer Mode (Manual Install)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked** and select the repository folder

## Changelog

### v1.4.1 — 2026-06-07
- Change: default language now follows Chrome's UI language setting

See [CHANGELOG.md](CHANGELOG.md) for full history.

---

# カチャポ

カチャポは、ウェブページ上での操作音を可視化するChrome拡張です。

## 概要

クリック、テキスト選択（ドラッグ）、入力欄でのキータイプといった操作に合わせて、擬音語が画面上に現れます。株式会社方角（代表：方山れいこ氏）によるエシカルクリエイティブ「ミルオト」に触発されて開発しました。ただし、カチャポはミルオトとは異なり、何の社会課題も解決しない単なるジョークソフトです。

## 機能

- クリックで擬音語が出る
- テキスト選択（ドラッグ）で擬音語が出る
- 入力欄でのキータイプで擬音語が出る
- ポップアップから言語（英語・日本語）と縁取り色（黒・白）を設定できる
- ポップアップから全トリガーを一括で有効 / 無効にできる — 大事な画面共有の前にさっと切れる
- 除外URLを登録しておくと、そのページでは設定に関わらず擬音語を完全に抑制できる

## 注意事項

CSP（コンテンツセキュリティポリシー）が厳しいサイトや、一部のSPAフレームワークを使ったサイトでは正常に動作しないことがあります。ベストエフォートでお楽しみください。

## インストール

### Chrome ウェブストア

https://chromewebstore.google.com/detail/kachapo/pnihiolhgllmpalikhngjidaagmkkpph

> Chrome ウェブストア版は、審査中のため最新リリースより古い場合があります。

### デベロッパーモード（手動インストール）

1. このリポジトリをダウンロードまたはクローン
2. Chromeで `chrome://extensions/` を開く
3. 右上の **デベロッパーモード** を有効にする
4. **パッケージ化されていない拡張機能を読み込む** をクリックし、リポジトリのフォルダを選択

## 更新履歴

### v1.4.1 — 2026-06-07
- 変更：デフォルト言語を Chrome の UI 言語設定に連動するよう変更

全履歴は [CHANGELOG.md](CHANGELOG.md) を参照。
