import { site, services, serviceAreas, type ServiceArea, type Service, type Faq } from "./site";

const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Painter"],
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}${site.ogImage}`,
    priceRange: "$$",
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.blurb,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": businessId },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": businessId },
    serviceType: service.name,
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a.name })),
  };
}

export function serviceAreaSchema(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `House Painting in ${area.name}, TN`,
    description: area.blurb,
    url: `${site.url}/service-area/${area.slug}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: area.name, containedInPlace: { "@type": "State", name: "Tennessee" } },
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceInAreaSchema(service: Service, area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${area.name}, TN`,
    description: `${service.blurb} Serving ${area.name} and surrounding ${site.address.regionFull}.`,
    url: `${site.url}/service-area/${area.slug}/${service.slug}`,
    serviceType: service.name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: "Tennessee" },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
