import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";
import { JsonLd } from "~/components/layout/json-ld";
import { breadcrumbSchema } from "~/lib/structured-data";

export const metadata: Metadata = {
  title: "Despre VANTA Studio — Studio Creativ în Bacău",
  description:
    "Află povestea VANTA Studio. Studio creativ independent din Bacău, specializat în branding, graphic design, web design și comunicare vizuală de peste 3 ani.",
  openGraph: {
    title: "Despre VANTA Studio — Studio Creativ în Bacău",
    description:
      "Studio creativ independent din Bacău, specializat în branding, graphic design, web design și comunicare vizuală.",
    url: "https://vantastudio.ro/despre",
  },
  alternates: {
    canonical: "https://vantastudio.ro/despre",
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Discutăm obiectivele, publicul țintă și direcția dorită pentru proiect.",
    gradient: "from-vanta-cyan/20 to-vanta-cyan/5",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Definim conceptul creativ și structura vizuală înainte de execuție.",
    gradient: "from-vanta-purple/20 to-vanta-purple/5",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Executăm direcția vizuală, materialele și elementele de identitate.",
    gradient: "from-vanta-cyan/15 to-vanta-cyan/5",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Livrăm toate fișierele în formatele necesare, pregătite pentru utilizare.",
    gradient: "from-vanta-purple/15 to-vanta-purple/5",
  },
];

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Despre", url: "/despre" },
  ]);

  return (
    <div className="pt-20">
      <JsonLd data={breadcrumb} />
      {/* Studio intro */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
              Despre <span className="gradient-text">VANTA Studio</span>
            </h1>
            <div className="accent-line" />
            <div className="text-vanta-light/60 mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                VANTA Studio s-a născut din pasiunea pentru design care chiar
                funcționează — nu doar arată bine, ci și comunică exact ce
                trebuie. Suntem un studio independent din Bacău și colaborăm cu
                business-uri din toată țara.
              </p>
              <p>
                Facem branding, graphic design, web design și conținut video.
                Tot ce ține de imaginea ta vizuală, într-un singur loc, fără să
                tot trimiți brief-uri la zece agenții diferite.
              </p>
              <p>
                Credem în designul simplu, coerent și construit strategic.
                Fiecare alegere — de la forma unui logo până la structura unui
                site — are un motiv să existe.
              </p>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* Process */}
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-24">
        <FadeInView direction="up">
          <div className="relative">
            <h2 className="text-vanta-light text-3xl font-bold tracking-tight sm:text-4xl">
              Cum <span className="gradient-text">lucrăm</span>
            </h2>
            <div className="accent-line" />
          </div>
        </FadeInView>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map(({ step, title, description, gradient }, i) => (
            <FadeInView key={step} direction="up" delay={i * 0.1}>
              <div
                className={`rounded-2xl border border-white/[0.06] bg-gradient-to-br ${gradient} hover:border-vanta-cyan/25 hover:to-vanta-cyan/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:from-white/[0.07] hover:shadow-[0_8px_40px_rgba(34,211,238,0.08)]`}
              >
                <span className="from-vanta-cyan to-vanta-purple bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                  {step}
                </span>
                <h3 className="text-vanta-light mt-2 text-lg font-semibold">
                  {title}
                </h3>
                <p className="text-vanta-light/60 mt-2 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-2xl overflow-hidden px-6 pb-24 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h2 className="text-vanta-light text-3xl font-bold tracking-tight sm:text-4xl">
              Hai să construim{" "}
              <span className="gradient-text">ceva modern</span>.
            </h2>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-vanta-light/60 mt-6 text-lg leading-relaxed">
                Spune-ne la ce te gândești și revenim cu o ofertă clară și
                direcția potrivită pentru proiectul tău.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contactează-ne
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
