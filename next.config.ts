import type { NextConfig } from "next";

const repoName = "SakuraiYui-HP";

const nextConfig: NextConfig = {
  // GitHub Pages は静的ファイルのみ配信できるため静的エクスポートする
  output: "export",
  // プロジェクトページ (https://<user>.github.io/SakuraiYui-HP/) 用のパス設定
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    // GitHub Pages には Next.js の画像最適化サーバーがないため無効化
    unoptimized: true,
  },
  /* View Transitions API は React 安定版が対応したら experimental.viewTransition で有効化する */
};

export default nextConfig;
