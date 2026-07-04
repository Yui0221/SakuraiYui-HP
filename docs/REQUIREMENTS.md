# 櫻井優衣 紹介ホームページ 要件定義書

## 1. プロジェクト概要

| 項目 | 内容 |
|---|---|
| プロジェクト名 | SakuraiYui-HP |
| 目的 | FRUITS ZIPPER 櫻井優衣さんの魅力を紹介する個人ファンサイト |
| 利用範囲 | **個人の趣味用途のみ**(一般公開・商用利用はしない) |
| 閲覧環境 | ローカル環境(`localhost`)での閲覧を基本とする |

## 2. コンテンツ要件

### 2.1 ページ構成

| ページ | 内容 |
|---|---|
| トップ(`/`) | ヒーローセクション、キャッチコピー、各セクションへの導線 |
| プロフィール(`/profile`) | 基本情報(誕生日、出身地、メンバーカラー等)、経歴 |
| ヒストリー(`/history`) | 活動年表(タイムラインUI)。ピンク・ベイビーズ等の前史〜FRUITS ZIPPER加入〜現在 |
| ディスコグラフィー(`/discography`) | 参加楽曲・リリース一覧(カード形式) |
| ギャラリー(`/gallery`) | 写真ギャラリー(※後述の権利配慮を参照) |
| 好きなところ(`/favorites`) | 管理者(あなた)が語る魅力ポイント集 |

※ プロフィール詳細・年表・楽曲データは実装時にあなたが用意したデータで埋める(JSONまたはMarkdownで管理し、コードと分離する)。

### 2.2 コンテンツ管理

- 紹介文・年表・楽曲リストなどのデータは `content/` 配下の **JSON / MDX** で管理し、コードを触らずに更新できること
- 画像は `public/images/` 配下にローカル保存(外部ホットリンクはしない)

## 3. 技術要件(最新技術スタック)

### 3.1 コア

| 領域 | 採用技術 | 理由 |
|---|---|---|
| フレームワーク | **Next.js 15+(App Router)** | React Server Components、静的生成、最新のReact機能をフル活用 |
| 言語 | **TypeScript(strict)** | 型安全なデータ管理(プロフィール・楽曲データを型で保証) |
| UIライブラリ | **React 19** | Server Components / `use` フックなど最新API |
| スタイリング | **Tailwind CSS v4** | CSS-first設定、`@theme` によるデザイントークン管理 |
| アニメーション | **Motion(旧Framer Motion)** | スクロール連動・ページ遷移アニメーション |
| ビルド | Turbopack(Next.js標準) | 高速な開発体験 |

### 3.2 デザインシステム

- メンバーカラーを基調としたカラーパレットを CSS カスタムプロパティ(`@theme`)で定義
- ダークモード対応(`prefers-color-scheme` + 手動トグル)
- フォント: 日本語 Web フォント(例: Zen Maru Gothic / M PLUS Rounded 1c)を `next/font` でセルフホスト
- レスポンシブ対応(モバイルファースト、スマホ〜デスクトップ)

### 3.3 演出・体験(最新技術の見せ場)

- **View Transitions API** によるページ遷移演出
- **スクロール連動アニメーション**(Intersection Observer / Motion の `whileInView`)
- ヒーローセクションにパララックスまたはグラデーションメッシュ背景
- ギャラリーはライトボックス表示(`<dialog>` 要素ベース)
- 年表はスクロールで進行するタイムラインUI

### 3.4 品質

- ESLint + Prettier(または Biome)によるコード品質管理
- Lighthouse スコア目標: Performance / Accessibility / Best Practices 各 90+
- 画像は `next/image` で最適化(AVIF/WebP 自動変換)

## 4. 非機能要件

| 項目 | 内容 |
|---|---|
| 実行環境 | ローカル(`npm run dev` / `npm run build && npm start`) |
| デプロイ | **しない**(個人利用のため)。静的エクスポート(`output: 'export'`)可能な構成にはしておく |
| SEO / OGP | 不要(非公開のため)。ただし metadata API の基本設定のみ実装 |
| 対応ブラウザ | 最新の Chrome / Safari / Edge |

## 5. 権利・利用上の配慮

- **公式写真・画像・音源は再配布しない**。ギャラリーはローカル保存した私的利用の範囲にとどめ、リポジトリには画像を含めない(`.gitignore` で `public/images/` を除外)
- リポジトリを public にする場合は、画像・歌詞など権利物を一切含めないこと
- サイト内に「非公式・個人のファンサイトであり、所属事務所とは無関係」である旨を記載

## 6. ディレクトリ構成(案)

```
SakuraiYui-HP/
├── app/                  # App Router ページ
│   ├── page.tsx          # トップ
│   ├── profile/
│   ├── history/
│   ├── discography/
│   ├── gallery/
│   └── favorites/
├── components/           # UIコンポーネント
├── content/              # プロフィール・年表・楽曲データ (JSON/MDX)
├── public/images/        # 画像 (gitignore対象)
└── docs/REQUIREMENTS.md  # 本書
```

## 7. マイルストーン

1. **M1 — 基盤構築**: Next.js セットアップ、デザイントークン定義、共通レイアウト
2. **M2 — コアページ**: トップ + プロフィール + ヒストリー
3. **M3 — コレクション**: ディスコグラフィー + ギャラリー + 好きなところ
4. **M4 — 演出強化**: View Transitions、スクロールアニメーション、ダークモード
5. **M5 — 仕上げ**: データ充実、Lighthouse チューニング
