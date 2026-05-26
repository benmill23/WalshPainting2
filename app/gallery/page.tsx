import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { PhotoGrid } from "@/components/PhotoGrid";
import { JsonLd } from "@/components/JsonLd";
import { galleryPhotos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery — Nashville Painting Portfolio",
  description: `Recent residential painting projects in Nashville by ${site.name}. Interior repaints, cabinets, trim, and more.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const portfolioPhotos = galleryPhotos.filter((p) => p.category !== "exterior");

  const imageListSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${site.name} project gallery`,
    description: "Recent residential painting projects in the Nashville area.",
    url: `${site.url}/gallery`,
    image: portfolioPhotos.map((p) => ({
      "@type": "ImageObject",
      contentUrl: `${site.url}${p.src}`,
      url: `${site.url}${p.src}`,
      caption: p.caption,
      description: p.alt,
    })),
  };

  return (
    <>
      <JsonLd data={imageListSchema} />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-3 inline-block rounded bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            Project Portfolio
          </span>
          <h1 className="text-4xl text-gray-900 md:text-5xl">Recent Projects</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            A look at recent residential painting in the Nashville area — interior repaints,
            trim, cabinets, and detail work. We add new projects as each one wraps.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <PhotoGrid photos={portfolioPhotos} />

          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-gray-500">
            Want to see something specific — kitchen cabinets, full exteriors, or color
            matching? Reach out and we&apos;ll send relevant project photos.
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
