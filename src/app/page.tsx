import type { Metadata } from "next";
import { HeroSection } from "~/components/sections/hero";
import { ServicesSection } from "~/components/sections/services";
import { AboutSection } from "~/components/sections/about";
import { LocalSeoSection } from "~/components/sections/local-seo";
import { CtaSection } from "~/components/sections/cta";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://vantastudio.ro",
  },
  openGraph: {
    title: "VANTA Studio | Branding, Graphic Design & Web Design în Bacău",
    description:
      "VANTA Studio — studio creativ în Bacău specializat în branding, graphic design, web design și comunicare vizuală.",
    url: "https://vantastudio.ro",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LocalSeoSection />
      <CtaSection />
    </>
  );
}
