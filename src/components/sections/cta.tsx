import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="orb-cyan left-1/3 top-0 h-64 w-64" />
      <div className="orb-purple right-1/4 -bottom-32 h-72 w-72" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
          Hai să construim <span className="gradient-text">ceva modern</span>.
        </h2>
        <div className="flex justify-center">
          <div className="accent-line" />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-vanta-light/60">
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
      </div>
    </section>
  );
}