import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

export function LeadSafeBadge() {
  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row md:gap-12">
        <Link
          href="/lead-safe-certified"
          aria-label="Learn about our EPA Lead-Safe Certification"
          className="group flex-shrink-0 rounded-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
        >
          <Image
            src="/lead-safe-certified-firm.png"
            alt="EPA Lead-Safe Certified Firm logo — Walsh Painting"
            width={300}
            height={234}
            className="h-auto w-44 md:w-52"
          />
        </Link>

        <div className="text-center md:text-left">
          <p className="font-sans text-sm font-semibold uppercase tracking-wide text-cyan">
            EPA Lead-Safe Certified Firm
          </p>
          <h2 className="mt-2 text-2xl text-gray-900 md:text-3xl">
            Certified to paint pre-1978 homes safely
          </h2>
          <p className="mt-3 max-w-xl text-gray-500">
            Walsh Painting is an EPA Lead-Safe Certified Firm under the federal
            Renovation, Repair and Painting (RRP) Rule. If your Nashville home was
            built before 1978, we follow lead-safe work practices to protect your
            family during the job.
          </p>
          <Link
            href="/lead-safe-certified"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light"
          >
            Why our lead-safe certification matters
            <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
