import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  serviceAreas,
  getServiceArea,
  services,
  site,
  cityFaqs,
  generalFaqs,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import { CallButton } from "@/components/CallButton";
import { TrustBar } from "@/components/TrustBar";
import {
  serviceAreaSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/structured-data";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};

  const title = `${area.name} Painters | House Painting in ${area.name}, TN`;
  const description = `Professional house painters serving ${area.name}, TN. Interior, exterior, cabinets, and commercial painting. Free estimates — call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-area/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/service-area/${area.slug}`,
      type: "website",
      images: [site.ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);
  const localFaqs = cityFaqs[area.slug] ?? [];
  const allFaqs = [...localFaqs, ...generalFaqs];

  return (
    <>
      <JsonLd
        data={[
          serviceAreaSchema(area),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service Areas", url: `${site.url}/service-area` },
            { name: area.name, url: `${site.url}/service-area/${area.slug}` },
          ]),
          faqPageSchema(allFaqs),
        ]}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <nav className="mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-area" className="hover:text-navy">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{area.name}</span>
          </nav>
          <span className="mb-3 inline-block rounded bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            {area.name} • Tennessee
          </span>
          <h1 className="text-4xl text-gray-900 md:text-5xl">
            House Painters in {area.name}, TN
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-500">{area.blurb}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-light"
            >
              Get a Free {area.name} Estimate
            </Link>
            <CallButton variant="outline" className="px-7 py-3.5">
              Call {site.phone}
            </CallButton>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl text-gray-900 md:text-4xl">
            Painters serving {area.name} homes and businesses
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              {area.name} has its own mix of homes — from older, well-kept properties to newer
              builds — and they all benefit from a painter who plans the job, protects the
              space, and finishes on schedule. That&apos;s what we do.
            </p>
            <p>
              Every project starts with a walkthrough so we understand what you want and what
              the surfaces actually need. We talk you through prep, products, scheduling, and
              cost up front so there are no surprises when the work starts. Then we show up on
              time, work clean, and finish what we said we&apos;d finish.
            </p>
            <p>
              We&apos;re local. We answer the phone. If you have a question two weeks after the
              job wraps, you&apos;re calling the same number you called for the estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-cream py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl text-gray-900 md:text-3xl">
              Painting services we offer in {area.name}
            </h2>
            <p className="mt-3 text-gray-500">
              The same quality and care, whether it&apos;s a single bathroom or a whole exterior.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/service-area/${area.slug}/${s.slug}`}
                className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-sans text-lg font-semibold text-gray-900">
                  {s.name} in {area.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{s.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-navy-light">
                  Learn more <ArrowRightIcon className="h-3 w-3 fill-current" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {area.neighborhoods && area.neighborhoods.length > 0 && (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-2xl text-gray-900">
              Neighborhoods we paint in {area.name}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {area.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="flex items-center gap-2 rounded-md border border-gray-200 bg-cream px-4 py-3 text-sm text-gray-700"
                >
                  <CheckCircleIcon className="h-4 w-4 fill-cyan" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Faq
        faqs={allFaqs}
        title={`${area.name} painting — common questions`}
        intro={`What ${area.name} homeowners typically ask before booking a project.`}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl text-gray-900 md:text-3xl">
            Other areas we serve
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className="rounded-md border border-gray-200 bg-cream px-5 py-2.5 text-sm font-medium text-navy hover:border-navy hover:bg-navy hover:text-white"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={`Ready to start your ${area.name} project?`}
        body={`Tell us about it and we’ll come out, walk through it, and send you a clear quote.`}
      />
    </>
  );
}
