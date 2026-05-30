import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center px-6 pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-vanta-light sm:text-5xl md:text-6xl">
          Design modern pentru branduri care vor să se remarce
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
          VANTA Studio dezvoltă identități vizuale, materiale publicitare și
          experiențe digitale pentru business-uri care vor o imagine
          profesionistă, atât online cât și offline.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/proiecte">
              Vezi proiectele
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>

        <p className="mt-12 text-sm text-vanta-light/30">
          Studio creativ independent cu bază în Bacău, disponibil pentru
          colaborări locale și remote.
        </p>
      </div>
    </section>
  );
}