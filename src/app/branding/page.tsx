import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Branding & Identitate Vizuală",
  description:
    "Servicii de branding și identitate vizuală. Logo design, brand guidelines, direcție vizuală și sisteme tipografice pentru business-uri moderne.",
};

export default function BrandingPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Branding &amp; Identitate Vizuală
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
          Construim identități vizuale moderne și sisteme de brand coerente care
          ajută business-urile să comunice clar și memorabil.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6">
            <h3 className="text-lg font-semibold text-vanta-light">
              Servicii incluse
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60">
              <li>logo design</li>
              <li>identitate vizuală</li>
              <li>brand guidelines</li>
              <li>direcție vizuală</li>
              <li>sisteme tipografice</li>
              <li>social media identity</li>
            </ul>
          </div>

          <div className="flex items-center justify-center rounded-lg border border-vanta-gray bg-vanta-gray/30">
            <p className="text-sm text-vanta-light/20">
              Brand guideline spread — imagine
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