"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide text-primary-strong"
          onClick={() => setOpen(false)}
        >
          {siteConfig.shortName}
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-primary-soft font-bold text-primary-strong"
                    : "text-muted hover:bg-primary-soft/50 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <span className="ml-1">
            <ThemeToggle />
          </span>
        </nav>

        {/* モバイル: テーマトグル + メニューボタン */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
        <button
          type="button"
          aria-label="メニューを開閉"
          aria-expanded={open}
          className="rounded-lg p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* モバイルナビ */}
      {open && (
        <nav className="border-t border-border bg-surface px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm ${
                  active
                    ? "bg-primary-soft font-bold text-primary-strong"
                    : "text-muted"
                }`}
              >
                {item.label}
                <span className="ml-2 text-xs opacity-60">{item.labelEn}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
