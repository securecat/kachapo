# Kachapo

Kachapo is a Chrome extension that visualizes the sounds of your interactions on any webpage.

## Overview

Your clicks, drag-selections, and keystrokes in input fields are all accompanied by onomatopoeia that pops up on screen. Inspired by "Miruoto," an ethical creative project by Hogaku Inc. (founded by Reiko Katayama). That said, unlike Miruoto, Kachapo solves absolutely no social problems — it's just a joke app.

## Features

- Onomatopoeia appears on click
- Onomatopoeia appears on drag-select (text selection)
- Onomatopoeia appears on keystroke in input fields
- Configure language (English / Japanese) and color theme (Light / Dark / Device default) from the popup

## Notes

Kachapo may not work on sites with strict CSP (Content Security Policy) or heavy SPA frameworks. Consider it best-effort fun.

## Installation

Install from the Chrome Web Store (coming soon)

Or clone this repository and load it as an unpacked extension in Chrome's Developer Mode.

## Changelog

### v1.0.7
- Reduce popup width from 300px to 250px

### v1.0.6
- Rename "Kachapo color" section to "Text stroke"
- Update color labels to "Black" and "White"

### v1.0.5
- Fix Kachapo color setting not applying to onomatopoeia stroke color
- Update Kachapo color labels to "黒で縁取り" and "白で縁取り"
- Remove "Device default" color option

### v1.0.4
- Replace auto-hiding "Saved" indicator with kachapo-style onomatopoeia preview
- Rename Color section to "Kachapo color" and remove sub-labels

### v1.0.3
- Fixed radio button contrast in non-selected state
- Various design adjustments

### v1.0.2
- Dark mode support for the popup UI

### v1.0.1
- Improved popup accessibility (WCAG 2.2 AA)
- Improved semantic HTML structure
- Added README.md

### v1.0.0
- Initial release

---

# カチャポ

カチャポは、ウェブページ上での操作音を可視化するChrome拡張です。

## 概要

クリック、テキスト選択（ドラッグ）、入力欄でのキータイプといった操作に合わせて、擬音語が画面上に現れます。株式会社方角（代表：方山れいこ氏）によるエシカルクリエイティブプロジェクト「ミルオト」に触発されて開発しました。ただし、カチャポはミルオトとは異なり、何の社会課題も解決しない単なるジョークソフトです。

## 機能

- クリックで擬音が出る
- テキスト選択（ドラッグ）で擬音が出る
- 入力欄でのキータイプで擬音が出る
- ポップアップから言語（英語・日本語）とカラーテーマ（ライト・ダーク・デバイス自動）を設定できる

## 注意事項

CSP（コンテンツセキュリティポリシー）が厳しいサイトや、一部のSPAフレームワークを使ったサイトでは正常に動作しないことがあります。ベストエフォートでお楽しみください。

## インストール

Chrome ウェブストアからインストール（準備中）

または、このリポジトリをクローンして、Chromeの「デベロッパーモード」でパックされていない拡張機能として読み込んでください。

## 更新履歴

### v1.0.7
- ポップアップの横幅を 300px から 250px に縮小

### v1.0.6
- 「Kachapo color」セクションを「Text stroke」に改称
- カラーラベルを「Black」「White」に変更

### v1.0.5
- Kachapo color の設定が縁取り色に反映されないバグを修正
- Kachapo color のラベルを「黒で縁取り」「白で縁取り」に変更
- 「デバイス自動」カラーオプションを削除

### v1.0.4
- 「Saved」自動消え表示を廃止し、擬音プレビューアニメーションに置き換え
- Color セクションを「Kachapo color」に改称し、説明文を削除

### v1.0.3
- ラジオボタン非選択時のコントラスト修正
- その他デザイン調整

### v1.0.2
- ポップアップのダークモード対応

### v1.0.1
- ポップアップのアクセシビリティ改善（WCAG 2.2 AA 対応）
- セマンティックHTMLへの改善
- README.md を追加

### v1.0.0
- 初回リリース
