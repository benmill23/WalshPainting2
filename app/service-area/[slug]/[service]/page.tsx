import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  serviceAreas,
  services,
  getServiceArea,
  getService,
  site,
  serviceFaqs,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import { CallButton } from "@/components/CallButton";
import { TrustBar } from "@/components/TrustBar";
import {
  serviceInAreaSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/structured-data";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  const out: { slug: string; service: string }[] = [];
  for (const a of serviceAreas) {
    for (const s of services) {
      out.push({ slug: a.slug, service: s.slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const area = getServiceArea(slug);
  const service = getService(serviceSlug);
  if (!area || !service) return {};

  const title = `${service.name} in ${area.name}, TN`;
  const description = `${service.blurb} Local ${service.name.toLowerCase()} in ${area.name} from ${site.name}. Free estimates — call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-area/${area.slug}/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/service-area/${area.slug}/${service.slug}`,
      type: "website",
      images: [site.ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
  };
}

export default async function ServiceInAreaPage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service: serviceSlug } = await params;
  const area = getServiceArea(slug);
  const service = getService(serviceSlug);
  if (!area || !service) notFound();

  const otherServicesInArea = services.filter((s) => s.slug !== service.slug);
  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);
  const faqs = serviceFaqs[service.slug] ?? [];

  return (
    <>
      <JsonLd
        data={[
          serviceInAreaSchema(service, area),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: area.name, url: `${site.url}/service-area/${area.slug}` },
            {
              name: service.name,
              url: `${site.url}/service-area/${area.slug}/${service.slug}`,
            },
          ]),
          ...(faqs.length ? [faqPageSchema(faqs)] : []),
        ]}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <nav className="mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/service-area/${area.slug}`} className="hover:text-navy">
              {area.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{service.name}</span>
          </nav>
          <span className="mb-3 inline-block rounded bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            {service.name} • {area.name}, TN
          </span>
          <h1 className="text-4xl text-gray-900 md:text-5xl">
            {service.name} in {area.name}, TN
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-500">{service.description}</p>
          <p className="mt-4 max-w-2xl text-base text-gray-500">{area.blurb}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-light"
            >
              Get a Free {area.name} {service.shortName} Estimate
            </Link>
            <CallButton variant="outline" className="px-7 py-3.5">
              Call {site.phone}
            </CallButton>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-gray-900 md:text-3xl">
              What our {service.shortName.toLowerCase()} work in {area.name} includes
            </h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 fill-cyan" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {area.neighborhoods && area.neighborhoods.length > 0 && (
            <div>
              <h2 className="text-2xl text-gray-900 md:text-3xl">
                {area.name} neighborhoods we work in
              </h2>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
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
          )}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-cream py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl text-gray-900 md:text-3xl">
            Other painting services in {area.name}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServicesInArea.map((s) => (
              <Link
                key={s.slug}
                href={`/service-area/${area.slug}/${s.slug}`}
                className="group flex flex-col rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="font-sans text-base font-semibold text-gray-900">
                  {s.name} in {area.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{s.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-navy-light">
                  Learn more <ArrowRightIcon className="h-3 w-3 fill-current" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <Faq
          faqs={faqs}
          title={`${service.name} in ${area.name} — Common Questions`}
          intro={`What ${area.name} homeowners typically ask before booking ${service.name.toLowerCase()}.`}
        />
      )}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl text-gray-900 md:text-3xl">
            We also serve nearby areas
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}/${service.slug}`}
                className="rounded-md border border-gray-200 bg-cream px-5 py-2.5 text-sm font-medium text-navy hover:border-navy hover:bg-navy hover:text-white"
              >
                {service.shortName} in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={`Ready for your ${area.name} ${service.shortName.toLowerCase()} project?`}
        body={`We come out, walk through the work, and follow up with a clear quote — no obligation.`}
      />
    </>
  );
}
