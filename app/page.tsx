import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <div>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft via-background to-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:justify-center md:gap-16 md:py-24">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="font-display text-sm font-bold tracking-[0.3em] text-primary">
              FRUITS ZIPPER
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold tracking-wide text-foreground md:text-7xl">
              櫻井優衣
            </h1>
            <p className="mt-2 font-display text-lg tracking-[0.2em] text-muted">
              YUI SAKURAI
            </p>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted md:mx-0">
              櫻井優衣さんの魅力をぎゅっと詰め込んだ、個人のファンサイトです。
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/hero.jpeg"
              alt="櫻井優衣"
              width={768}
              height={1024}
              priority
              className="w-56 rotate-2 rounded-3xl border-4 border-surface shadow-xl shadow-primary-soft ring-2 ring-primary/40 md:w-72"
            />
          </div>
        </div>
      </section>

      {/* セクション導線 */}
      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navItems
            .filter((item) => item.href !== "/")
            .map((item, i) => (
              <Reveal key={item.href} delay={i * 0.07}>
                <Link
                  href={item.href}
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary-soft"
                >
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                    {item.labelEn.toUpperCase()}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary-strong">
                    {item.label}
                  </p>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>
    </div>
  );
}
