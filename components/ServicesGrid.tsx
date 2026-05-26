import Link from "next/link";
import { services } from "@/lib/site";
import { ArrowRightIcon } from "./Icons";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl">Our Painting Services</h2>
          <p className="mt-3 text-lg text-gray-500">
            From single rooms to whole commercial buildings, we deliver professional results
            every time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="flex flex-col rounded-lg border border-gray-200 bg-cream p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="font-sans text-xl font-semibold text-gray-900">{s.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{s.blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                {s.bullets.slice(0, 4).map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light"
              >
                Learn more
                <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
