import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

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
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Definim conceptul creativ și structura vizuală înainte de execuție.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Executăm direcția vizuală, materialele și elementele de identitate.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Livrăm toate fișierele în formatele necesare, pregătite pentru utilizare.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Studio intro */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Despre VANTA Studio
        </h1>
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
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
          Cum lucrăm
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map(({ step, title, description }) => (
            <div
              key={step}
              className="rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6"
            >
              <span className="text-2xl font-bold text-vanta-cyan/60">
                {step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-vanta-light">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vanta-light/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
          Hai să construim ceva modern.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-vanta-light/60">
          Spune-ne ce ai nevoie și revenim cu o direcție clară pentru proiectul
          tău.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/contact">
              Contactează-ne
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}