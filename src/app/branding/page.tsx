import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Palette } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Branding & Identitate Vizuală",
  description:
    "Servicii de branding și identitate vizuală. Logo design, brand guidelines, direcție vizuală și sisteme tipografice pentru business-uri moderne.",
};

export default function BrandingPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
        <FadeInView direction="up">
          <div className="relative">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-vanta-cyan/20 to-vanta-purple/20 text-vanta-cyan">
              <Palette size={20} />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
              Branding &amp;{" "}
              <span className="gradient-text">Identitate Vizuală</span>
            </h1>
            <div className="accent-line" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
              Construim identități vizuale moderne și sisteme de brand coerente
              care ajută business-urile să comunice clar și memorabil.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <FadeInView direction="up" delay={0.15}>
                <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.04] to-vanta-purple/[0.04] p-6 backdrop-blur-2xl">
                  <h3 className="text-lg font-semibold text-vanta-light">
                    Servicii incluse
                  </h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60 marker:text-vanta-cyan/60">
                    <li>logo design</li>
                    <li>identitate vizuală</li>
                    <li>brand guidelines</li>
                    <li>direcție vizuală</li>
                    <li>sisteme tipografice</li>
                    <li>social media identity</li>
                  </ul>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <div className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.04] to-vanta-purple/[0.04] backdrop-blur-2xl">
                  <div className="orb-cyan-bright h-32 w-32" />
                  <p className="relative text-sm text-vanta-light/20">
                    Brand guideline spread — imagine
                  </p>
                </div>
              </FadeInView>
            </div>

            <FadeInView direction="up" delay={0.45}>
              <div className="mt-12">
                <Button asChild>
                  <Link href="/contact">
                    Solicită o ofertă
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}