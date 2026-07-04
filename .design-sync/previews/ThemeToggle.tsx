import { ThemeToggle } from "sakurai-yui-hp";

// ダークモード切り替えボタン。単体では小さなアイコンなので、
// 実際の使われ方(ヘッダー右端の操作列)に近い構成で見せる。
export const InHeaderBar = () => (
  <div className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-2">
    <span className="font-display text-sm font-bold tracking-wide text-primary-strong">
      YUI SAKURAI
    </span>
    <ThemeToggle />
  </div>
);

export const Standalone = () => (
  <div className="flex items-center gap-3">
    <ThemeToggle />
    <span className="text-sm text-muted">ダークモード切り替え</span>
  </div>
);
