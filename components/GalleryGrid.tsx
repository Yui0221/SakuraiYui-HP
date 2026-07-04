"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type GalleryImage = {
  src: string;
  caption?: string;
  width: number;
  height: number;
};

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<GalleryImage | null>(null);

  const open = (img: GalleryImage) => {
    setCurrent(img);
    dialogRef.current?.showModal();
  };

  const close = () => {
    dialogRef.current?.close();
    setCurrent(null);
  };

  if (images.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-border bg-surface p-10 text-center">
        <p className="font-display text-lg font-bold text-primary-strong">
          まだ画像がありません
        </p>
        <div className="mx-auto mt-4 max-w-md text-left text-sm leading-relaxed text-muted">
          <p>画像の追加手順:</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>
              画像ファイルを{" "}
              <code className="rounded bg-primary-soft px-1.5 py-0.5 text-xs text-primary-strong">
                public/images/
              </code>{" "}
              に保存(gitには含まれません)
            </li>
            <li>
              <code className="rounded bg-primary-soft px-1.5 py-0.5 text-xs text-primary-strong">
                content/gallery.json
              </code>{" "}
              の images 配列にファイル名とサイズを追記
            </li>
          </ol>
          <p className="mt-3 text-xs">
            ※ 公式写真などの権利物は私的利用の範囲にとどめ、再配布しないでください。
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => open(img)}
            className="group overflow-hidden rounded-2xl border border-border bg-surface focus-visible:outline-2 focus-visible:outline-primary"
          >
            <Image
              src={img.src}
              alt={img.caption ?? ""}
              width={img.width}
              height={img.height}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* ライトボックス */}
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onClose={() => setCurrent(null)}
        className="m-auto max-h-[90vh] max-w-[92vw] rounded-2xl bg-surface p-3 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {current && (
          <figure>
            <Image
              src={current.src}
              alt={current.caption ?? ""}
              width={current.width}
              height={current.height}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="flex items-center justify-between gap-4 px-1 pt-3">
              <span className="text-sm text-muted">{current.caption}</span>
              <button
                type="button"
                onClick={close}
                className="shrink-0 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold text-primary-strong hover:opacity-80"
              >
                閉じる
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
