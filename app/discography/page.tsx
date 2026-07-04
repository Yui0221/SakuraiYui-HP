import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import discography from "@/content/discography.json";

export const metadata: Metadata = { title: "ディスコグラフィー" };

export default function DiscographyPage() {
  return (
    <div>
      <PageHeader
        titleEn="Discography"
        title="ディスコグラフィー"
        lead="ソロ作品とFRUITS ZIPPERの主要リリースを紹介します(配信シングルは抜粋)。"
      />
      <div className="mx-auto max-w-5xl px-4 pb-24">
        {discography.sections.map((section) => (
          <section key={section.title} className="mt-12 first:mt-0">
            <h2 className="font-display text-xl font-extrabold text-primary-strong">
              {section.title}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.title + item.date}
                  className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
                >
                  <p className="inline-flex">
                    <span className="rounded-full bg-primary-soft px-3 py-0.5 text-[11px] font-bold text-primary-strong">
                      {item.type}
                    </span>
                  </p>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold tracking-wider text-primary">
                    {item.date}
                  </p>
                  {item.note && (
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {item.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-2xl bg-primary-soft/40 p-5">
          <p className="text-xs font-bold text-muted">出典(2026年7月確認)</p>
          <ul className="mt-2 space-y-1">
            {discography.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary-strong underline underline-offset-2 hover:opacity-80"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
