import { HeroSection } from "~/components/sections/hero";
import { ServicesSection } from "~/components/sections/services";
import { AboutSection } from "~/components/sections/about";
import { LocalSeoSection } from "~/components/sections/local-seo";
import { CtaSection } from "~/components/sections/cta";

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
