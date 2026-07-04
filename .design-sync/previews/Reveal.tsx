import { Reveal } from "sakurai-yui-hp";
import type { ReactNode } from "react";

// スクロール連動の出現アニメーションラッパー。キャプチャ環境は時計固定で
// アニメーションが進まないため、プレビューは完了状態(実際にユーザーが
// スクロール後に見る見た目)を CSS で表示する。
const Settled = ({ children }: { children: ReactNode }) => (
  <div>
    <style>{`div[style*="opacity"]{opacity:1 !important;transform:none !important;}`}</style>
    {children}
  </div>
);

export const Card = () => (
  <Settled>
    <Reveal>
      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">
          PROFILE
        </p>
        <p className="mt-2 font-display text-lg font-bold text-foreground">
          プロフィール
        </p>
      </div>
    </Reveal>
  </Settled>
);

export const Staggered = () => (
  <Settled>
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        ["HISTORY", "ヒストリー"],
        ["DISCOGRAPHY", "ディスコグラフィー"],
        ["GALLERY", "ギャラリー"],
      ].map(([en, ja], i) => (
        <Reveal key={en} delay={i * 0.07}>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">
              {en}
            </p>
            <p className="mt-2 font-display text-lg font-bold text-foreground">
              {ja}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Settled>
);
