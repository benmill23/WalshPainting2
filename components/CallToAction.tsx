import Link from "next/link";
import { site } from "@/lib/site";
import { CallButton } from "./CallButton";

export function CallToAction({
  title = "Ready to Start Your Project?",
  body = "Contact us today for a free, no-obligation estimate. We'll help you bring your vision to life.",
}: { title?: string; body?: string } = {}) {
  return (
    <section className="bg-cream py-20 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <p className="mt-3 text-lg text-gray-500">{body}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Request Free Estimate
          </Link>
          <CallButton variant="outline" className="px-7 py-3.5">
            Call {site.phone}
          </CallButton>
        </div>
      </div>
    </section>
  );
}
