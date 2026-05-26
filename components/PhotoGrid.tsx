import Image from "next/image";
import type { GalleryPhoto } from "@/lib/site";

export function PhotoGrid({
  photos,
  className = "",
}: {
  photos: GalleryPhoto[];
  className?: string;
}) {
  return (
    <div
      className={`columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:break-inside-avoid [&>figure]:mb-4 ${className}`}
    >
      {photos.map((p) => {
        const w = p.orientation === "portrait" ? 1365 : 2048;
        const h = p.orientation === "portrait" ? 2048 : 1365;
        return (
          <figure
            key={p.src}
            className="overflow-hidden rounded-lg border border-gray-200 bg-cream"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={w}
              height={h}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="block h-auto w-full"
            />
            <figcaption className="px-4 py-2.5 text-xs text-gray-600">{p.caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export function PhotoGridFixed({
  photos,
  className = "",
}: {
  photos: GalleryPhoto[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {photos.map((p) => (
        <figure
          key={p.src}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-cream"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <figcaption className="px-4 py-2.5 text-xs text-gray-600">{p.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
