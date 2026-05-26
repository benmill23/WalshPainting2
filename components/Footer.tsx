import Image from "next/image";
import Link from "next/link";
import { services, serviceAreas, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/walshlogo.png"
            alt={site.name}
            width={180}
            height={50}
            className="mb-4 h-12 w-auto brightness-0 invert"
          />
          <p className="max-w-xs text-sm text-white/60">
            Professional residential and commercial painting in {site.address.city}, {site.address.region}.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
            Service Areas
          </h4>
          <ul className="space-y-2 text-sm">
            {serviceAreas.slice(0, 5).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-area/${a.slug}`}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.phoneRaw}`}
                className="text-white/60 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-white/60 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/60 transition-colors hover:text-white"
              >
                Get Free Estimate
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.address.city}, {site.address.regionFull}</p>
        </div>
      </div>
    </footer>
  );
}
