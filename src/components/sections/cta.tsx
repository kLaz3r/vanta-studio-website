import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <FadeInView direction="up">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-vanta-light text-3xl font-bold tracking-tight sm:text-4xl">
            Hai să construim <span className="gradient-text">ceva modern</span>.
          </h2>
          <div className="flex justify-center">
            <div className="accent-line" />
          </div>
          <p className="text-vanta-light/60 mt-6 text-lg leading-relaxed">
            Completează formularul și primești o ofertă personalizată în maxim
            48h. Sau scrie-ne direct pe email — cum îți e mai ușor.
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
  );
}
