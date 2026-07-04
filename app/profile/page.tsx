import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import profile from "@/content/profile.json";

export const metadata: Metadata = { title: "プロフィール" };

export default function ProfilePage() {
  return (
    <div>
      <PageHeader
        titleEn="Profile"
        title="プロフィール"
        lead={profile.intro}
      />
      <div className="mx-auto max-w-3xl px-4 pb-24">
        {/* 名前カード */}
        <div className="rounded-3xl border border-border bg-surface p-8 text-center shadow-sm">
          <p className="font-display text-xs font-bold tracking-[0.3em] text-primary">
            {profile.group}
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {profile.nameKana} / {profile.nameEn}
          </p>
          <p className="mt-3 inline-block rounded-full bg-primary-soft px-4 py-1 text-xs font-bold text-primary-strong">
            {profile.agency}
          </p>
        </div>

        {/* 基本情報 */}
        <section className="mt-10">
          <h3 className="font-display text-lg font-bold text-primary-strong">
            基本情報
          </h3>
          <dl className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {profile.basics.map((item) => (
              <div key={item.label} className="flex gap-4 px-5 py-3.5">
                <dt className="w-32 shrink-0 text-sm font-bold text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm">
                  {item.label === "メンバーカラー" ? (
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden
                        className="inline-block size-3.5 rounded-full bg-primary"
                      />
                      {item.value}
                    </span>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 好きなもの・特技 */}
        <section className="mt-10">
          <h3 className="font-display text-lg font-bold text-primary-strong">
            趣味・特技
          </h3>
          <dl className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {profile.likes.map((item) => (
              <div key={item.label} className="flex gap-4 px-5 py-3.5">
                <dt className="w-32 shrink-0 text-sm font-bold text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 出典 */}
        <section className="mt-10 rounded-2xl bg-primary-soft/40 p-5">
          <p className="text-xs font-bold text-muted">出典(2026年7月確認)</p>
          <ul className="mt-2 space-y-1">
            {profile.sources.map((s) => (
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
