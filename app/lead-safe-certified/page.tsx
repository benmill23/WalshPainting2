import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, type Faq as FaqType } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CallToAction } from "@/components/CallToAction";
import { CallButton } from "@/components/CallButton";
import { Faq } from "@/components/Faq";
import { breadcrumbSchema, faqPageSchema } from "@/lib/structured-data";
import { CheckCircleIcon } from "@/components/Icons";

const PAGE_PATH = "/lead-safe-certified";
const title = "EPA Lead-Safe Certified Painters in Nashville, TN";
const description =
  "Walsh Painting is an EPA Lead-Safe Certified Firm. We follow RRP-compliant lead-safe work practices when painting homes built before 1978 in the Nashville area.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title,
    description,
    url: `${site.url}${PAGE_PATH}`,
    type: "website",
    images: [site.ogImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
};

const leadSafeFaqs: FaqType[] = [
  {
    q: "What does EPA Lead-Safe Certified mean?",
    a: "It means the EPA has certified our firm to perform renovation, repair, and painting work that disturbs lead-based paint, following the federal RRP (Renovation, Repair and Painting) Rule. Certified firms are trained in containment, safe work practices, and proper cleanup and verification.",
  },
  {
    q: "Which homes does the lead-safe rule apply to?",
    a: "The RRP Rule applies to homes, apartments, and child-occupied facilities built before 1978, the year lead-based paint was banned for residential use. Many older Nashville-area homes — especially in neighborhoods like East Nashville and Belle Meade — can contain lead paint under newer layers.",
  },
  {
    q: "Why does lead-safe certification matter for my family?",
    a: "Disturbing old lead paint by sanding, scraping, or demo can release lead dust and chips, which are especially harmful to young children and pregnant women. Lead-safe work practices contain that dust and keep your home and family protected during the project.",
  },
  {
    q: "What lead-safe practices do you follow on the job?",
    a: "We contain the work area with plastic sheeting, use HEPA-equipped tools, avoid open-flame and high-heat methods on lead paint, mist surfaces to limit dust, and perform a thorough HEPA vacuum and wet cleanup followed by a verification check before we call the area done.",
  },
  {
    q: "Do all painting jobs require lead-safe work?",
    a: "No. Newer homes and projects that don't disturb painted surfaces generally aren't covered. For pre-1978 homes where we'll be disturbing paint, we follow lead-safe practices as a matter of course — and we're happy to explain what that means for your specific project.",
  },
];

export default function LeadSafeCertifiedPage() {
  const practices = [
    "Contained work areas with plastic sheeting to keep dust in",
    "HEPA-filtered vacuums and dust-minimizing tools",
    "Wet methods to limit airborne lead dust during prep",
    "Thorough cleanup and a verification check before we finish",
    "Trained, EPA-certified crew following RRP requirements",
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "EPA Lead-Safe Certified", url: `${site.url}${PAGE_PATH}` },
          ]),
          faqPageSchema(leadSafeFaqs),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url: `${site.url}${PAGE_PATH}`,
            about: {
              "@type": "HomeAndConstructionBusiness",
              name: site.name,
              url: site.url,
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "certification",
                name: "EPA Lead-Safe Certified Firm",
                recognizedBy: {
                  "@type": "GovernmentOrganization",
                  name: "U.S. Environmental Protection Agency",
                },
              },
            },
          },
        ]}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[auto_1fr] md:gap-12">
          <Image
            src="/lead-safe-certified-firm.png"
            alt="EPA Lead-Safe Certified Firm logo — Walsh Painting, Nashville TN"
            width={300}
            height={234}
            className="mx-auto h-auto w-56 md:mx-0"
            priority
          />
          <div>
            <nav className="mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">EPA Lead-Safe Certified</span>
            </nav>
            <h1 className="text-4xl text-gray-900 md:text-5xl">
              EPA Lead-Safe Certified Painters in Nashville
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-500">
              Walsh Painting is an EPA Lead-Safe Certified Firm. When we work on
              homes built before 1978, we follow the federal Renovation, Repair
              and Painting (RRP) Rule to keep lead dust contained and your family
              protected.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-gray-900">What the certification means</h2>
            <p className="mt-4 text-gray-600">
              Lead-based paint was banned for residential use in 1978, but it&apos;s
              still present in millions of older homes — often hidden under newer
              coats of paint. Sanding, scraping, or cutting into that paint can
              release lead dust and chips that are especially dangerous to young
              children and pregnant women.
            </p>
            <p className="mt-4 text-gray-600">
              The EPA&apos;s RRP Rule requires that any firm disturbing lead paint in
              a pre-1978 home be certified and trained in lead-safe work practices.
              Hiring a certified firm isn&apos;t just a formality — it&apos;s how you
              know the crew in your home is trained to keep that dust contained and
              cleaned up properly.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-cream p-7">
            <h3 className="font-sans text-lg font-semibold text-gray-900">
              How we keep your home lead-safe
            </h3>
            <ul className="mt-5 space-y-3">
              {practices.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 fill-cyan" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-cream py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl text-gray-900 md:text-3xl">
            Painting an older Nashville home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Many homes in Belle Meade, East Nashville, and other established
            neighborhoods predate 1978. If yours does, ask us about lead-safe
            prep when we come out for your free estimate — we&apos;ll walk you
            through exactly how we&apos;ll protect your space.
          </p>
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

      <Faq
        faqs={leadSafeFaqs}
        title="Lead-Safe Certification — Common Questions"
        intro="What homeowners ask about lead paint and our EPA certification."
      />

      <CallToAction />
    </>
  );
}
