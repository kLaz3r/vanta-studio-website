import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "VANTA Studio — studio creativ independent cu bază în Bacău, specializat în branding, graphic design și comunicare vizuală.",
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
  return (
    <div className="pt-20">
      {/* Studio intro */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
        <div className="orb-cyan -left-32 -top-32 h-80 w-80" />
        <div className="orb-purple -bottom-32 -right-32 h-72 w-72" />
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
              Despre <span className="gradient-text">VANTA Studio</span>
            </h1>
            <div className="accent-line" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-vanta-light/60">
              <p>
                VANTA Studio este un studio creativ independent cu bază în Bacău,
                specializat în branding, graphic design și comunicare vizuală.
              </p>
              <p>
                Construim identități moderne și materiale vizuale pregătite atât
                pentru mediul digital, cât și pentru producție tipografică.
              </p>
              <p>
                Focusul nostru este crearea unei imagini clare, coerente și
                profesioniste pentru business-uri moderne.
              </p>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* Process */}
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-24">
        <div className="orb-cyan right-0 top-1/2 h-64 w-64" />
        <FadeInView direction="up">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
              Cum <span className="gradient-text">lucrăm</span>
            </h2>
            <div className="accent-line" />
          </div>
        </FadeInView>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map(({ step, title, description, gradient }, i) => (
            <FadeInView key={step} direction="up" delay={i * 0.1}>
              <div
                className={`rounded-2xl border border-white/[0.06] bg-gradient-to-br ${gradient} p-6 backdrop-blur-2xl transition-all duration-300 hover:border-vanta-cyan/25 hover:from-white/[0.07] hover:to-vanta-cyan/[0.03] hover:shadow-[0_8px_40px_rgba(34,211,238,0.08)]`}
              >
              <span className="bg-gradient-to-r from-vanta-cyan to-vanta-purple bg-clip-text text-2xl font-bold text-transparent">
                {step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-vanta-light">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vanta-light/60">
                {description}
              </p>
            </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-2xl overflow-hidden px-6 pb-24 text-center">
        <div className="orb-cyan left-1/2 h-48 w-48" />
        <FadeInView direction="up">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
              Hai să construim <span className="gradient-text">ceva modern</span>.
            </h2>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-vanta-light/60">
              Spune-ne ce ai nevoie și revenim cu o direcție clară pentru
              proiectul tău.
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