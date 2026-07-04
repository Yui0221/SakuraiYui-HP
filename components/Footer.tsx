import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center">
        <p className="text-xs leading-relaxed text-muted">
          {siteConfig.disclaimer}
        </p>
        <p className="mt-3 font-display text-sm font-bold text-primary-strong">
          {siteConfig.shortName}
        </p>
      </div>
    </footer>
  );
}
