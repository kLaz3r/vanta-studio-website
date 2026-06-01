const BASE_URL = "https://vantastudio.ro";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VANTA Studio",
  url: BASE_URL,
  email: "contact@vantastudio.ro",
  description:
    "Studio creativ independent specializat în branding, graphic design și comunicare vizuală.",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bacău",
    addressCountry: "RO",
  },
  areaServed: {
    "@type": "Country",
    name: "România",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VANTA Studio",
  url: BASE_URL,
};

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
