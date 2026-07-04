import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import favorites from "@/content/favorites.json";

export const metadata: Metadata = { title: "好きなところ" };

export default function FavoritesPage() {
  return (
    <div>
      <PageHeader
        titleEn="Favorites"
        title="好きなところ"
        lead="管理人が語る、櫻井優衣さんのここが好き。"
      />
      <div className="mx-auto max-w-3xl px-4 pb-24">
        <div className="space-y-4">
          {favorites.points.map((point) => (
            <article
              key={point.title}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-5"
            >
              <span className="text-2xl" aria-hidden>
                {point.emoji}
              </span>
              <div>
                <h2 className="font-display text-base font-bold">
                  {point.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {point.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
