import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import history from "@/content/history.json";

export const metadata: Metadata = { title: "ヒストリー" };

export default function HistoryPage() {
  const eras = [...new Set(history.events.map((e) => e.era))];

  return (
    <div>
      <PageHeader
        titleEn="History"
        title="ヒストリー"
        lead="アイドルデビューからFRUITS ZIPPERでの活躍まで、活動の歩みを年表で振り返ります。"
      />
      <div className="mx-auto max-w-3xl px-4 pb-24">
        {eras.map((era) => (
          <section key={era} className="mt-12 first:mt-0">
            <h2 className="font-display text-xl font-extrabold text-primary-strong">
              {era}
            </h2>
            <ol className="mt-6 space-y-0 border-l-2 border-primary-soft pl-6">
              {history.events
                .filter((e) => e.era === era)
                .map((event) => (
                  <li key={event.date + event.title} className="relative pb-10">
                    <span
                      aria-hidden
                      className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-surface bg-primary"
                    />
                    <p className="font-display text-xs font-bold tracking-wider text-primary">
                      {event.date}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold">
                      {event.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {event.body}
                    </p>
                  </li>
                ))}
            </ol>
          </section>
        ))}

        <section className="rounded-2xl bg-primary-soft/40 p-5">
          <p className="text-xs font-bold text-muted">出典(2026年7月確認)</p>
          <ul className="mt-2 space-y-1">
            {history.sources.map((s) => (
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
