// Next.jsのプロダクションビルドからコンパイル済みCSSとセルフホストフォントを
// 安定したパス(.design-sync/build-css/)に集める。design-sync のビルド前処理。
import { mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const chunksDir = ".next/static/chunks";
const mediaDir = ".next/static/media";
const outDir = ".design-sync/build-css";
const outMedia = join(outDir, "media");
mkdirSync(outMedia, { recursive: true });

let appCss = "";
const fontFiles = [];

for (const f of readdirSync(chunksDir)) {
  if (!f.endsWith(".css")) continue;
  const css = readFileSync(join(chunksDir, f), "utf8");
  if (css.includes("@font-face")) {
    // url(../media/xxx.woff2) → url(./media/xxx.woff2) に書き換えて media をコピー
    const rewritten = css.replace(/url\(\.\.\/media\/([^)]+)\)/g, (_, file) => {
      copyFileSync(join(mediaDir, file), join(outMedia, file));
      return `url(./media/${file})`;
    });
    const name = `font-${fontFiles.length + 1}.css`;
    writeFileSync(join(outDir, name), rewritten);
    fontFiles.push(name);
  } else {
    appCss += css + "\n";
  }
}

// next/font がクラス経由で注入するフォント変数を :root で定義(プレビューには
// そのクラスが付かないため。ファミリー名は @font-face の定義と一致)
appCss += `\n:root{--font-zen-maru:"Zen Maru Gothic";--font-mplus-rounded:"M PLUS Rounded 1c";}\n`;

writeFileSync(join(outDir, "app.css"), appCss);
console.log(`collected: app.css (${appCss.length}B), fonts: ${fontFiles.join(", ")}`);
