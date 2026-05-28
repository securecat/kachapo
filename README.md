# Kachapo

Kachapo is a Chrome extension that visualizes the sounds of your interactions on any webpage.

## Overview

Your clicks, drag-selections, and keystrokes in input fields are all accompanied by onomatopoeia that pops up on screen. Inspired by "Miruoto," an ethical creative project by Hogaku Inc. (founded by Reiko Katayama). That said, unlike Miruoto, Kachapo solves absolutely no social problems — it's just a joke app.

## Features

- Onomatopoeia appears on click
- Onomatopoeia appears on drag-select (text selection)
- Onomatopoeia appears on keystroke in input fields
- Configure language (English / Japanese) and text stroke color (Black / White) from the popup

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

### v1.1.1 — 2026-05-28
- Fix: onomatopoeia now appears on keyboard operation of checkboxes and radio buttons (Space / arrow keys)

### v1.1.0 — 2026-05-28
- Add mouse wheel trigger: onomatopoeia appears on scroll
- Add trigger toggles in popup (Click / Drag / Wheel / Typing)
- Fix popup font sizes to meet WCAG 2.2 AA minimum (16px)
- Fix legend color contrast in popup
- Fix onomatopoeia clipping: avoid showing mostly off-screen when input is near viewport edge
- Fix popup preview: onomatopoeia now appears near the interacted label
- Add onomatopoeia on checkbox toggle in popup

### v1.0.9 — 2026-05-26
- Adjust drag-select onomatopoeia position to appear above or below the selection

### v1.0.8 — 2026-05-21
- Adjust typing onomatopoeia position to appear above or below the input field

### v1.0.7 — 2026-05-19
- Reduce popup width from 300px to 250px

### v1.0.6 — 2026-05-19
- Rename "Kachapo color" section to "Text stroke"
- Update color labels to "Black" and "White"

### v1.0.5 — 2026-05-19
- Fix Kachapo color setting not applying to onomatopoeia stroke color
- Update Kachapo color labels to "黒で縁取り" and "白で縁取り"
- Remove "Device default" color option

### v1.0.4 — 2026-05-19
- Replace auto-hiding "Saved" indicator with kachapo-style onomatopoeia preview
- Rename Color section to "Kachapo color" and remove sub-labels

### v1.0.3 — 2026-05-19
- Fixed radio button contrast in non-selected state
- Various design adjustments

### v1.0.2 — 2026-05-19
- Dark mode support for the popup UI

### v1.0.1 — 2026-05-19
- Improved popup accessibility (WCAG 2.2 AA)
- Improved semantic HTML structure
- Added README.md

### v1.0.0 — 2026-05-19
- Initial release

---

# カチャポ

カチャポは、ウェブページ上での操作音を可視化するChrome拡張です。

## 概要

クリック、テキスト選択（ドラッグ）、入力欄でのキータイプといった操作に合わせて、擬音語が画面上に現れます。株式会社方角（代表：方山れいこ氏）によるエシカルクリエイティブプロジェクト「ミルオト」に触発されて開発しました。ただし、カチャポはミルオトとは異なり、何の社会課題も解決しない単なるジョークソフトです。

## 機能

- クリックで擬音語が出る
- テキスト選択（ドラッグ）で擬音語が出る
- 入力欄でのキータイプで擬音語が出る
- ポップアップから言語（英語・日本語）と縁取り色（黒・白）を設定できる

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

### v1.1.1 — 2026-05-28
- チェックボックス・ラジオボタンのキーボード操作（Space・矢印キー）でも擬音語が出るよう修正

### v1.1.0 — 2026-05-28
- マウスホイールトリガーを追加（スクロール時に擬音語が出る）
- ポップアップにトリガーのON/OFFを追加（クリック・ドラッグ・ホイール・タイピング）
- ポップアップのフォントサイズをWCAG 2.2 AA基準（16px最小）に修正
- ポップアップの凡例テキストのコントラストを修正
- 入力欄がビューポート端に近い時に擬音語が見切れる問題を修正
- ポップアップ内の擬音語プレビューを操作したラベルの近くに表示するよう修正
- ポップアップ内のチェックボックス操作でも擬音語が表示されるよう追加

### v1.0.9 — 2026-05-26
- 選択範囲と被らないようにテキスト選択時の擬音語の位置を調整

### v1.0.8 — 2026-05-21
- 入力の邪魔にならないようにタイピング擬音の位置を調整

### v1.0.7 — 2026-05-19
- ポップアップの横幅を 300px から 250px に縮小

### v1.0.6 — 2026-05-19
- 「Kachapo color」セクションを「Text stroke」に改称
- カラーラベルを「Black」「White」に変更

### v1.0.5 — 2026-05-19
- Kachapo color の設定が縁取り色に反映されないバグを修正
- Kachapo color のラベルを「黒で縁取り」「白で縁取り」に変更
- 「デバイス自動」カラーオプションを削除

### v1.0.4 — 2026-05-19
- 「Saved」自動消え表示を廃止し、擬音プレビューアニメーションに置き換え
- Color セクションを「Kachapo color」に改称し、説明文を削除

### v1.0.3 — 2026-05-19
- ラジオボタン非選択時のコントラスト修正
- その他デザイン調整

### v1.0.2 — 2026-05-19
- ポップアップのダークモード対応

### v1.0.1 — 2026-05-19
- ポップアップのアクセシビリティ改善（WCAG 2.2 AA 対応）
- セマンティックHTMLへの改善
- README.md を追加

### v1.0.0 — 2026-05-19
- 初回リリース
