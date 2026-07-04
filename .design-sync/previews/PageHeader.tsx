import { PageHeader } from "sakurai-yui-hp";

// 各ページ冒頭の見出しブロック。英語ラベル+日本語タイトル+リード文。
export const Default = () => (
  <PageHeader
    titleEn="Profile"
    title="プロフィール"
    lead="基本情報と経歴を紹介します。アイドル歴10年以上のキャリアを持つメンバーの魅力をまとめました。"
  />
);

export const WithoutLead = () => (
  <PageHeader titleEn="Gallery" title="ギャラリー" />
);

export const LongLead = () => (
  <PageHeader
    titleEn="History"
    title="ヒストリー"
    lead="アイドルデビューから現在までの活動の歩みを、年表形式でゆっくり振り返ります。グループでの活動はもちろん、ソロでの挑戦もあわせて紹介します。"
  />
);
