"use client";

// プレビュー用: Next.js App Router のコンテキストをスタブで提供する。
// Header(usePathname)や next/link がルーター無しでも描画できるようにする。
import React from "react";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  PathnameContext,
  SearchParamsContext,
} from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const stubRouter = {
  back() {},
  forward() {},
  refresh() {},
  push() {},
  replace() {},
  prefetch() {},
} as never;

export function NextPreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterContext.Provider value={stubRouter}>
      <PathnameContext.Provider value="/">
        <SearchParamsContext.Provider value={new URLSearchParams() as never}>
          {children}
        </SearchParamsContext.Provider>
      </PathnameContext.Provider>
    </AppRouterContext.Provider>
  );
}
