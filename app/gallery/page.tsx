import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid, type GalleryImage } from "@/components/GalleryGrid";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = { title: "ギャラリー" };

export default function GalleryPage() {
  const images = gallery.images as GalleryImage[];

  return (
    <div>
      <PageHeader
        titleEn="Gallery"
        title="ギャラリー"
        lead="お気に入りの写真たち。画像はローカル保存のみで、再配布はしません。"
      />
      <div className="mx-auto max-w-5xl px-4 pb-24">
        <GalleryGrid images={images} />
      </div>
    </div>
  );
}
