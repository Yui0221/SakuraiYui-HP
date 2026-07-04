# SakuraiYui-HP デザインシステム — 利用ガイド

FRUITS ZIPPER 櫻井優衣さんの個人ファンサイト用コンポーネント集。ミントグリーン(メンバーカラー)を基調とした Tailwind CSS v4 デザイン。

## ラッパー / セットアップ

ルート直下に Provider は不要。ただし各ページ最上位を **`<html>` の `.dark` クラス**でテーマ切り替えする前提のため、ダークモードを含む画面では祖先要素に `.dark` を付けて確認する。フォントは `--font-zen-maru`(本文)と `--font-mplus-rounded`(見出し・数字寄りの display 用)の2つの CSS 変数で、`font-sans` / `font-display` ユーティリティ経由で使う(next/font 由来。単体では `<html>` に font-loading クラスが要る点に注意 — バンドルには同梱済み)。

`Header` は `next/navigation` の `usePathname` を使うため、Next.js App Router 環境(または同等のスタブ)でのみ動作する。素の React ツリーに置く場合はルーターコンテキストの提供が必要。

## スタイリング方式 — Tailwind ユーティリティ + CSSカスタムプロパティ

クラス名の直書きではなく、**すべて `--*` トークンに紐づいたユーティリティ**を使う。実在するトークン(`_ds_bundle.css` 内 `:root`):

| 用途 | トークン | 対応ユーティリティ例(実在確認済み) |
|---|---|---|
| 背景(サーフェス) | `--surface` | `bg-surface` |
| 文字色 | `--foreground` / `--muted` | `text-foreground` / `text-muted` |
| ブランド色(ミント) | `--primary` / `--primary-soft` / `--primary-strong` | `bg-primary`, `bg-primary-soft`, `text-primary`, `text-primary-strong` |
| 境界線 | `--border` / `--primary-soft` / `--surface` | `border-border`, `border-primary-soft`, `border-surface` |
| フォント(見出し) | `--font-mplus-rounded` 経由 | `font-display` |

`--background` / `--accent` / `--font-sans`(本文フォント)もトークン自体は `:root`/`.dark` に定義されているが、現行コンポーネントでは対応する Tailwind ユーティリティ(`bg-background` 等)を使っていないためビルド後 CSS には含まれない。新しい画面でこれらを使う場合はユーティリティクラスを実際に書けば Tailwind JIT が生成する(手書きCSSではなくクラス名で参照すること)。

ライト/ダーク両方の値が定義済みなので、色は必ずトークン経由で指定し、生の hex は書かない。角丸は `rounded-2xl`/`rounded-3xl`、余白は Tailwind標準スケールをそのまま使用(独自スペーシングトークンはなし)。

## 参照すべきファイル

- `styles.css`(→ `@import` で `_ds_bundle.css` を読み込む)にトークンの `:root` / `.dark` 定義がある
- 各コンポーネントの `.prompt.md` に使用例と props 一覧

## 実装例

```tsx
<div className="rounded-2xl border border-border bg-surface p-6">
  <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">
    PROFILE
  </p>
  <p className="mt-2 font-display text-lg font-bold text-foreground">
    プロフィール
  </p>
</div>
```

新規レイアウトの外枠には `PageHeader`(セクション見出し)や `Reveal`(スクロール出現アニメーション)を組み合わせるのが自然な使い方。
