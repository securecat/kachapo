# Accessibility

Last updated: 2026-11-17

## Priorities and Goals

This statement covers two things:

- The extension's own UI (the popup and the options page)
- How Kachapo affects your interactions on the web pages where it runs

For the UI, we target WCAG 2.2 Level AA, and we treat it as a minimum, not a ceiling. Some of our own rules are stricter than AA (see [Contributor Expectations](#contributor-expectations)).

## Supported Environments

- Browser: Google Chrome (desktop)
- Operating systems: tested on Windows and macOS
- Screen readers: we have not yet tested any screen readers, including NVDA on Windows and VoiceOver on macOS (see [Known Limitations](#known-limitations))

## Known Limitations

- **Kachapo is not designed to be used with a screen reader.** Onomatopoeia that pop up as you move and click the mouse are a visual representation of your actions, and having them read aloud would only get in the way of hearing the page. For this reason, we hide onomatopoeia from screen readers so that Kachapo doesn't interfere with what the screen reader reads. As a result, you can't enjoy the onomatopoeia with a screen reader.

## Reporting Accessibility Barriers

Please report barriers through [GitHub Issues](https://github.com/securecat/kachapo/issues). You can write in English or Japanese.

The following details help us, but all of them are optional:

- What you were trying to do
- The screen or feature you were using (for example, the popup, the options page, or onomatopoeia on a web page)
- If the problem happened on a web page, the URL of that page
- What happened, and what you expected
- Your OS, browser version, and Kachapo version
- Any assistive technology you use, such as a screen reader

You don't need to tell us about any disability. Screenshots and recordings are not required.

## Response Process

Kachapo is developed by an individual, so we can't promise a deadline for replies or fixes. We will respond as quickly as we can.

- We will reply on the issue once we've seen your report
- If there is a workaround, we will share it
- Before releasing a fix, we may ask you to confirm that it works for you
- Fixes are recorded in [CHANGELOG.md](https://github.com/securecat/kachapo/blob/main/CHANGELOG.md)

## Contributor Expectations

These expectations apply equally to human contributors and coding agents.

When you change the UI:

- Use native form controls (`<input>`, `<select>`, `<textarea>`). Don't use `<div>` or `<span>` as buttons; use `<button>` for actions on the page and `<a>` for navigation
- Don't use the `disabled` attribute
- Don't remove focus indicators (no `outline: none`)
- Don't remove link underlines
- Keep text contrast at 7:1 or higher for body text and 4.5:1 or higher for secondary text, in both light and dark themes
- Keep non-text elements, such as borders and icons, at 3:1 or higher against adjacent colors
- Don't apply `opacity` to elements that need contrast
- Use a minimum font size of 16px for Japanese and 14px for English
- Use `font-family: sans-serif` (don't use `system-ui`)
- Don't dismiss status messages automatically
- Don't add anything that moves on its own, such as auto-scrolling

After the change, check that everything can be operated with a keyboard alone, and that a screen reader reads the content correctly.

In the popup and the options page, underline the text of buttons and labels on hover. Don't rely on a color change alone.

When you change the code that shows onomatopoeia (`content.js` and `popup/popup.js`):

- Don't cancel or change the page's clicks or key presses (don't call `preventDefault()` or similar)
- Keep onomatopoeia from blocking clicks (keep `pointer-events: none`)
- Keep onomatopoeia hidden from screen readers (keep `aria-hidden="true"`)
- When the user prefers reduced motion (`prefers-reduced-motion: reduce`), don't grow, shrink, or move onomatopoeia

## Ownership and Maintenance

This statement is maintained by the maintainer, securecat. We update it when we add features or when the tested environments change.

## Feedback on This Statement

Suggestions about this statement or our approach to accessibility are also welcome through [GitHub Issues](https://github.com/securecat/kachapo/issues).

---

# アクセシビリティ

最終更新：2026-11-17

## 優先事項と目標

この文書が対象とするのは、次の2つです。

- 拡張機能そのもののUI（ポップアップとオプションページ）
- カチャポが動作するウェブページで、カチャポが操作に与える影響

UIは WCAG 2.2 のレベル AA を目標とし、これを上限ではなく下限と考えています。AAより厳しい独自の基準もあります（[貢献者への期待](#貢献者への期待)を参照）。

## 対応している環境

- ブラウザ：Google Chrome（デスクトップ版）
- OS：Windows、macOS で動作を確認済み
- スクリーンリーダー：Windows の NVDA、macOS の VoiceOver を含め、どのスクリーンリーダーでもまだ試していません（[既知の制限](#既知の制限)を参照）

## 既知の制限

- **カチャポは、スクリーンリーダーでの利用を想定していません。** マウスの動きやクリックに合わせて出る擬音語は、操作を視覚的に表現するものです。読み上げると、かえってページの内容を聞く邪魔になります。そのため、擬音語はスクリーンリーダーから隠し、読み上げの邪魔をしないように作っています。その代わり、スクリーンリーダーで擬音語を楽しむことはできません。

## アクセシビリティの問題を報告する

問題は [GitHub Issues](https://github.com/securecat/kachapo/issues) で報告してください。日本語でも英語でも構いません。

次のことを書いてもらえると助かりますが、どれも任意です。

- 何をしようとしていたか
- 使っていた画面や機能（例：ポップアップ、オプションページ、ウェブページ上の擬音語）
- ウェブページ上で起きた問題なら、そのページのURL
- 何が起きたか、どうなると思っていたか
- OS、ブラウザのバージョン、カチャポのバージョン
- 使っている支援技術（スクリーンリーダーなど）

障害の有無や内容を書く必要はありません。スクリーンショットや録画も必須ではありません。

## 対応の流れ

カチャポは個人で開発しているため、返信や修正の期限はお約束できません。それでも、できるかぎり早く対応します。

- 報告を確認したら、Issue で返信します
- 回避策があれば、お知らせします
- 修正をリリースする前に、問題が解消したかどうかの確認をお願いすることがあります
- 修正の内容は [CHANGELOG.md](https://github.com/securecat/kachapo/blob/main/CHANGELOG.md) に記載します

## 貢献者への期待

ここに挙げることは、人間の貢献者にもコーディングエージェントにも、同じように求めます。

UIを変更するときは、次を守ってください。

- フォームにはネイティブの要素（`<input>`・`<select>`・`<textarea>`）を使う。`<div>` や `<span>` をボタンの代わりにしない。画面内の操作には `<button>`、ページの移動には `<a>` を使う
- `disabled` 属性を使わない
- フォーカスインジケーターを消さない（`outline: none` を使わない）
- リンクの下線を消さない
- テキストのコントラスト比は、本文で 7:1 以上、補足的なテキストで 4.5:1 以上にする。ライトテーマとダークテーマのそれぞれで満たす
- 境界線やアイコンなど、テキスト以外の要素も、隣り合う色に対して 3:1 以上にする
- コントラストが必要な要素に `opacity` を使わない
- 文字サイズは、日本語で 16px 以上、英語で 14px 以上にする
- `font-family` は `sans-serif` にする（`system-ui` は使わない）
- ステータスメッセージを自動で消さない
- 自動スクロールなど、ひとりでに動くものを作らない

変更したあとは、キーボードだけですべて操作できること、スクリーンリーダーで内容が正しく読み上げられることを確認してください。

ポップアップとオプションページでは、ホバーしたときに、ボタンやラベルの文字に下線を付けてください。色の変化だけに頼らないでください。

擬音語を出すコード（`content.js` と `popup/popup.js`）を変更するときは、次を守ってください。

- ページのクリックやキー入力を取り消したり、変えたりしない（`preventDefault()` などを呼ばない）
- 擬音語がクリックを妨げないようにする（`pointer-events: none` を保つ）
- 擬音語をスクリーンリーダーから隠す（`aria-hidden="true"` を保つ）
- 動きを減らす設定（`prefers-reduced-motion: reduce`）のときは、擬音語の大きさや位置を変えない

## 責任者と保守

この文書は、メンテナーの securecat が管理しています。機能を追加したときや、動作を確認した環境が変わったときに更新します。

## この文書へのフィードバック

この文書やアクセシビリティへの取り組み方についての提案も、[GitHub Issues](https://github.com/securecat/kachapo/issues) で受け付けています。
