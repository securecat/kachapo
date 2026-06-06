# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.2] - 2026-06-06

### Added
- Popup now shows wheel onomatopoeia when scrolling inside the popup, matching the throttle and cursor position of real-page behavior

## [1.3.1] - 2026-06-05

### Fixed
- Popup preview animation is now suppressed when Triggers is set to Disabled

### Changed
- Triggers section divider changed to dashed style

## [1.3.0] - 2026-06-05

### Added
- Triggers: Enabled / Disabled master toggle — when set to Disabled, all triggers are suppressed regardless of individual settings

## [1.2.0] - 2026-06-05

### Added
- Options page (accessible via chrome://extensions → Details → Extension options) for managing excluded URLs
- Excluded URLs: pages whose URL starts with a listed prefix are silently skipped by kachapo, regardless of other settings
- Pre-seeded excluded URL: `https://payment.dmm.com/receipt/issue/`

## [1.1.1] - 2026-05-28

### Fixed
- Onomatopoeia now appears when operating checkboxes (Space) and radio buttons (Space / arrow keys) via keyboard

## [1.1.0] - 2026-05-28

### Added
- Mouse wheel trigger: onomatopoeia appears on scroll
- Per-trigger toggles in popup (Click / Drag / Wheel / Typing)
- Onomatopoeia on checkbox toggle in popup

### Fixed
- Popup font sizes updated to meet WCAG 2.2 AA minimum (16px)
- Legend color contrast in popup
- Onomatopoeia clipping: no longer shows mostly off-screen when input is near viewport edge
- Popup preview: onomatopoeia now appears near the interacted label

## [1.0.9] - 2026-05-26

### Fixed
- Drag-select onomatopoeia position: now appears above or below the selection to avoid overlap

## [1.0.8] - 2026-05-21

### Fixed
- Typing onomatopoeia position: now appears above or below the input field to avoid blocking input

## [1.0.7] - 2026-05-19

### Changed
- Reduced popup width from 300px to 250px

## [1.0.6] - 2026-05-19

### Changed
- Renamed "Kachapo color" section to "Text stroke"
- Updated color labels to "Black" and "White"

## [1.0.5] - 2026-05-19

### Fixed
- Kachapo color setting not applying to onomatopoeia stroke color

### Changed
- Updated Kachapo color labels to "黒で縁取り" and "白で縁取り"

### Removed
- "Device default" color option

## [1.0.4] - 2026-05-19

### Changed
- Replaced auto-hiding "Saved" indicator with onomatopoeia preview animation
- Renamed Color section to "Kachapo color" and removed sub-labels

## [1.0.3] - 2026-05-19

### Fixed
- Radio button contrast in non-selected state

### Changed
- Various design adjustments in popup

## [1.0.2] - 2026-05-19

### Added
- Dark mode support for the popup UI

## [1.0.1] - 2026-05-19

### Added
- README.md

### Changed
- Improved popup accessibility (WCAG 2.2 AA)
- Improved semantic HTML structure

## [1.0.0] - 2026-05-19

### Added
- Initial release

---

# 更新履歴

このファイルには、プロジェクトのすべての重要な変更が記録されています。

形式は [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) に準拠し、
バージョン管理は [Semantic Versioning](https://semver.org/lang/ja/) に従います。

## [1.3.2] - 2026-06-06

### 追加
- ポップアップ内でスクロールすると、実際のページと同じスロットルとカーソル位置でホイール擬音語が表示されるよう追加

## [1.3.1] - 2026-06-05

### 修正
- Triggers が Disabled の時、ポップアップ内のプレビュー擬音も表示されないよう修正

### 変更
- トリガーセクションの区切り線を破線に変更

## [1.3.0] - 2026-06-05

### 追加
- トリガーの Enabled / Disabled マスタートグルを追加 — Disabled にすると個別設定に関わらずすべてのトリガーが無効になります

## [1.2.0] - 2026-06-05

### 追加
- オプションページを追加（chrome://extensions → 詳細 → 拡張機能のオプション）で除外URLリストを管理できます
- 除外URL機能：登録したURLで始まるページでは、他の設定に関わらず kachapo が動作しません
- デフォルト除外URL：`https://payment.dmm.com/receipt/issue/`

## [1.1.1] - 2026-05-28

### 修正
- チェックボックス（Space キー）・ラジオボタン（Space・矢印キー）のキーボード操作でも擬音語が出るよう修正

## [1.1.0] - 2026-05-28

### 追加
- マウスホイールトリガーを追加（スクロール時に擬音語が出る）
- ポップアップにトリガーのON/OFFを追加（クリック・ドラッグ・ホイール・タイピング）
- ポップアップ内のチェックボックス操作でも擬音語が表示されるよう追加

### 修正
- ポップアップのフォントサイズをWCAG 2.2 AA基準（16px最小）に修正
- ポップアップの凡例テキストのコントラストを修正
- 入力欄がビューポート端に近い時に擬音語が見切れる問題を修正
- ポップアップ内の擬音語プレビューを操作したラベルの近くに表示するよう修正

## [1.0.9] - 2026-05-26

### 修正
- 選択範囲と被らないようにテキスト選択時の擬音語の位置を調整

## [1.0.8] - 2026-05-21

### 修正
- 入力の邪魔にならないようにタイピング擬音の位置を調整

## [1.0.7] - 2026-05-19

### 変更
- ポップアップの横幅を 300px から 250px に縮小

## [1.0.6] - 2026-05-19

### 変更
- 「Kachapo color」セクションを「Text stroke」に改称
- カラーラベルを「Black」「White」に変更

## [1.0.5] - 2026-05-19

### 修正
- Kachapo color の設定が縁取り色に反映されないバグを修正

### 変更
- Kachapo color のラベルを「黒で縁取り」「白で縁取り」に変更

### 削除
- 「デバイス自動」カラーオプションを削除

## [1.0.4] - 2026-05-19

### 変更
- 「Saved」自動消え表示を廃止し、擬音プレビューアニメーションに置き換え
- Color セクションを「Kachapo color」に改称し、説明文を削除

## [1.0.3] - 2026-05-19

### 修正
- ラジオボタン非選択時のコントラスト修正

### 変更
- その他デザイン調整

## [1.0.2] - 2026-05-19

### 追加
- ポップアップのダークモード対応

## [1.0.1] - 2026-05-19

### 追加
- README.md を追加

### 変更
- ポップアップのアクセシビリティ改善（WCAG 2.2 AA 対応）
- セマンティックHTMLへの改善

## [1.0.0] - 2026-05-19

### 追加
- 初回リリース
