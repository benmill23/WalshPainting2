import Link from "next/link";
import { serviceAreas } from "@/lib/site";

export function ServiceAreasGrid() {
  return (
    <section id="areas" className="border-t border-gray-200 bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl">Areas We Serve</h2>
        <p className="mt-3 text-lg text-gray-500">
          Professional painting throughout the Greater Nashville area.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="rounded-md border border-gray-200 bg-cream px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              {a.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
