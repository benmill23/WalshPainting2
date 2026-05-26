import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas, site } from "@/lib/site";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Service Areas — Nashville Painters",
  description: `${site.name} provides professional painting throughout Greater Nashville, including Belle Meade, Franklin, Brentwood, and more.`,
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreasIndex() {
  return (
    <>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl text-gray-900 md:text-5xl">Service Areas</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Local crews serving Greater Nashville and Williamson County.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="group rounded-lg border border-gray-200 bg-cream p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="font-sans text-lg font-semibold text-gray-900 group-hover:text-navy">
                {a.name}, TN
              </h2>
              <p className="mt-2 text-sm text-gray-500">{a.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
