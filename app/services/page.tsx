import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { CallToAction } from "@/components/CallToAction";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Painting Services in Nashville",
  description: `Interior, exterior, cabinet refinishing, and commercial painting in Nashville. Free estimates from ${site.name}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl text-gray-900 md:text-5xl">Painting Services</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Whatever the project, we bring the same prep, the same care, and the same finish
            standard.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-lg border border-gray-200 bg-cream p-7 transition-shadow hover:shadow-md"
            >
              <h2 className="font-sans text-xl font-semibold text-gray-900">{s.name}</h2>
              <p className="mt-2 text-sm text-gray-500">{s.blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                {s.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-navy-light">
                Learn more <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
