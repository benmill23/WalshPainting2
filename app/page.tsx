import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FeaturedWork } from "@/components/FeaturedWork";
import { WhyUs } from "@/components/WhyUs";
import { LeadSafeBadge } from "@/components/LeadSafeBadge";
import { CallToAction } from "@/components/CallToAction";
import { ServiceAreasGrid } from "@/components/ServiceAreasGrid";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { generalFaqs } from "@/lib/site";
import { faqPageSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(generalFaqs)} />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedWork />
      <WhyUs />
      <LeadSafeBadge />
      <CallToAction />
      <ServiceAreasGrid />
      <Faq faqs={generalFaqs} />
    </>
  );
}
