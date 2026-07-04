// GitHub Pages はサブパス配信のため、public/ 配下の画像パスにはこれを前置する
// (next/image の文字列 src には basePath が自動付与されないため)
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

export const siteConfig = {
  name: "櫻井優衣 Fan Site",
  shortName: "YUI SAKURAI",
  description:
    "FRUITS ZIPPER 櫻井優衣さんを紹介する非公式・個人のファンサイトです。",
  disclaimer:
    "当サイトは非公式・個人のファンサイトであり、ご本人および所属事務所とは一切関係ありません。",
} as const;

export const navItems = [
  { href: "/", label: "ホーム", labelEn: "Home" },
  { href: "/profile", label: "プロフィール", labelEn: "Profile" },
  { href: "/history", label: "ヒストリー", labelEn: "History" },
  { href: "/discography", label: "ディスコグラフィー", labelEn: "Discography" },
  { href: "/gallery", label: "ギャラリー", labelEn: "Gallery" },
  { href: "/favorites", label: "好きなところ", labelEn: "Favorites" },
] as const;
