import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
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
      </div>
    </section>
  );
}