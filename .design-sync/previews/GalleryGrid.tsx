import { GalleryGrid } from "sakurai-yui-hp";

// 写真ギャラリー。画像は権利配慮でローカル管理のため、見本は空状態
// (追加手順の案内カード)を表示する — これも実際に使われる状態のひとつ。
export const EmptyState = () => <GalleryGrid images={[]} />;
