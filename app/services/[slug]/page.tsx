import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  getService,
  serviceAreas,
  site,
  serviceFaqs,
  photosForService,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CallToAction } from "@/components/CallToAction";
import { CallButton } from "@/components/CallButton";
import { Faq } from "@/components/Faq";
import { PhotoGridFixed } from "@/components/PhotoGrid";
import { serviceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/structured-data";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.name} in Nashville, TN`;
  const description = `${service.blurb} Free estimates from Walsh Painting — call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/services/${service.slug}`,
      type: "website",
      images: [site.ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const faqs = serviceFaqs[service.slug] ?? [];
  const photos = photosForService(service.slug, 6);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services/${service.slug}` },
            { name: service.name, url: `${site.url}/services/${service.slug}` },
          ]),
          ...(faqs.length ? [faqPageSchema(faqs)] : []),
        ]}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <nav className="mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{service.name}</span>
          </nav>
          <h1 className="text-4xl text-gray-900 md:text-5xl">
            {service.name} in Nashville
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-500">{service.description}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-gray-900">What&apos;s included</h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 fill-cyan" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-cream p-7">
            <h3 className="font-sans text-lg font-semibold text-gray-900">
              Get a free {service.shortName.toLowerCase()} estimate
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Tell us about your project and we&apos;ll come out, walk through the work, and send
              you a clear, itemized quote.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light"
              >
                Request Free Estimate
              </Link>
              <CallButton variant="outline" className="px-6 py-3">
                Call {site.phone}
              </CallButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-cream py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl text-gray-900 md:text-3xl">
            Where we work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            We provide {service.name.toLowerCase()} throughout the Greater Nashville area.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-navy hover:bg-navy hover:text-white"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl text-gray-900 md:text-3xl">Other services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-lg border border-gray-200 bg-cream p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="font-sans text-base font-semibold text-gray-900">{s.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{s.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-navy-light">
                  Learn more <ArrowRightIcon className="h-3 w-3 fill-current" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {photos.length > 0 && (
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-2xl text-gray-900 md:text-3xl">
                Recent {service.shortName.toLowerCase()} projects
              </h2>
              <p className="mt-3 text-gray-500">
                A look at recent {service.name.toLowerCase()} work in the Nashville area.
              </p>
            </div>
            <PhotoGridFixed photos={photos} />
            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light"
              >
                See more in the gallery
                <ArrowRightIcon className="h-3.5 w-3.5 fill-current" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <Faq
          faqs={faqs}
          title={`${service.name} — Common Questions`}
          intro={`What people typically ask before booking ${service.name.toLowerCase()} with us.`}
        />
      )}

      <CallToAction />
    </>
  );
}
