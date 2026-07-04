# SakuraiYui-HP

櫻井優衣紹介ホームページレポジトリ

FRUITS ZIPPER 櫻井優衣さんを紹介する、非公式・個人のファンサイトです(商用利用はしません)。GitHub Pages で公開しています。

## 技術スタック

- Next.js 16(App Router / Turbopack)+ React 19 + TypeScript
- Tailwind CSS v4(`@theme` によるデザイントークン、基調色はメンバーカラーのミントグリーン)
- Motion(スクロール連動アニメーション・ページ遷移)
- ダークモード対応(ヘッダーのトグルで切り替え)

## 起動方法

Node.js 24 が必要です(`~/.local/node` にインストール済み。シェルから使うには `~/.zshrc` に以下を追記):

```sh
export PATH="$HOME/.local/node/bin:$PATH"
```

```sh
npm install      # 初回のみ
npm run dev      # 開発サーバー (http://localhost:3000)
npm run build     # 静的エクスポート (out/ に生成。GitHub Pages 用のため `next start` は使えません)
```

## 公開(GitHub Pages)

`main` に push すると `.github/workflows/deploy.yml` が自動でビルド・デプロイします。

- 公開URL: `https://<ユーザー名>.github.io/SakuraiYui-HP/`
- 初回のみ、リポジトリの Settings → Pages → Source を **GitHub Actions** に設定してください
- `next.config.ts` の `basePath`/`assetPrefix` はリポジトリ名 `SakuraiYui-HP` に合わせて設定済みです。リポジトリ名を変える場合はここも変更してください

## コンテンツの編集

ページの中身は `content/` 配下のファイルを編集するだけで更新できます(コード変更不要):

| ファイル | 内容 |
|---|---|
| `content/profile.json` | プロフィール(基本情報・趣味特技) |
| `content/history.json` | 活動年表 |
| `content/discography.json` | ディスコグラフィー |
| `content/gallery.json` | ギャラリーの画像リスト |
| `content/favorites.json` | 「好きなところ」(あなたの言葉で書くページ) |
| `content/site.ts` | サイト名・ナビゲーション |

事実情報(誕生日・経歴・リリース)は 2026年7月4日 に Wikipedia ほか複数ソースで確認したものです。各ページ下部に出典リンクがあります。

## 画像の追加(ギャラリー)

1. 画像を `public/images/` に置く(**gitには含まれない設定**です)
2. `content/gallery.json` の `images` 配列に `{ "src": "/images/ファイル名", "caption": "説明", "width": 幅, "height": 高さ }` を追記

※ 公式写真などの権利物は私的利用の範囲にとどめ、再配布しないでください。
