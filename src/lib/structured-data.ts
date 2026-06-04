const BASE_URL = "https://vantastudio.ro";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VANTA Studio",
  url: BASE_URL,
  email: "contact@vantastudio.ro",
  description:
    "Studio creativ independent din Bacău specializat în branding, graphic design, web design și comunicare vizuală.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bacău",
    addressCountry: "RO",
  },
  sameAs: [
    "https://instagram.com/vantastudio",
    "https://linkedin.com/company/vantastudio",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VANTA Studio",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  telephone: "",
  description:
    "Studio creativ din Bacău specializat în branding, graphic design, web design și comunicare vizuală.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bacău",
    addressCountry: "RO",
  },
  areaServed: {
    "@type": "Country",
    name: "România",
  },
  priceRange: "$$",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VANTA Studio",
  url: BASE_URL,
};

export function serviceSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: "VANTA Studio",
    },
    areaServed: {
      "@type": "Country",
      name: "RO",
    },
  };
}

export function faqPageSchema(
  questions: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name,
      item: `${BASE_URL}${url}`,
    })),
  };
}
