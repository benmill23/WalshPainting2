import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { CallButton } from "./CallButton";

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="mb-4 inline-block rounded bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            Serving Greater Nashville
          </span>
          <h1 className="font-display text-4xl leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-gray-500 md:mx-0">
            Professional residential and commercial painting in Nashville. Honest pricing,
            careful prep, and a finish that holds up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Get Free Estimate
            </Link>
            <CallButton variant="outline" className="px-7 py-3.5">
              Call {site.phone}
            </CallButton>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <Image
            src="/walshlogo-transparent-copy.png"
            alt={`${site.name} — Nashville house painters`}
            width={500}
            height={500}
            priority
            className="h-auto max-h-80 w-auto md:max-h-96"
          />
        </div>
      </div>
    </section>
  );
}
