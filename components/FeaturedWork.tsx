import Image from "next/image";
import Link from "next/link";
import { featuredPhotos } from "@/lib/site";
import { ArrowRightIcon } from "./Icons";

export function FeaturedWork() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            Recent Work
          </span>
          <h2 className="text-3xl text-gray-900 md:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-lg text-gray-500">
            A look at a recent downtown Nashville interior — full repaint of walls, ceilings, and trim.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPhotos.map((p, i) => {
            const w = p.orientation === "portrait" ? 1365 : 2048;
            const h = p.orientation === "portrait" ? 2048 : 1365;
            const featured = i === 0;
            return (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-cream ${
                  featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={w}
                    height={h}
                    sizes={
                      featured
                        ? "(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw"
                        : "(min-width: 1024px) 33vw, 50vw"
                    }
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-700">{p.caption}</figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-light"
          >
            See the full gallery
            <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
