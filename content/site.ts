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
