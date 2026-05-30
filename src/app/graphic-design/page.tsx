import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Servicii de graphic design pentru digital și print. Flyere, afișe, bannere, packaging, reclame digitale și materiale promoționale.",
};

export default function GraphicDesignPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Graphic Design pentru Digital și Print
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
          Realizăm materiale vizuale pentru online și producție tipografică,
          adaptate imaginii și nevoilor fiecărui business. Toate materialele
          sunt livrate în formate optimizate pentru digital și print.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6">
            <h3 className="text-lg font-semibold text-vanta-light">
              Exemple de materiale
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60">
              <li>flyere</li>
              <li>meniuri</li>
              <li>afișe</li>
              <li>bannere</li>
              <li>packaging</li>
              <li>social media visuals</li>
              <li>reclame digitale</li>
              <li>materiale promoționale</li>
            </ul>
          </div>

          <div className="flex items-center justify-center rounded-lg border border-vanta-gray bg-vanta-gray/30">
            <p className="text-sm text-vanta-light/20">
              Print & digital layouts — imagine
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Button asChild>
            <Link href="/contact">
              Solicită o ofertă
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}