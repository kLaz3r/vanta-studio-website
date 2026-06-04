import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeInView direction="up" duration={0.8}>
          <h1 className="text-vanta-light text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
            Design modern pentru branduri care vor să se{" "}
            <span className="gradient-text">remarce</span>
          </h1>
        </FadeInView>
        <FadeInView direction="up" delay={0.15} duration={0.7}>
          <div className="mx-auto flex justify-center">
            <div className="accent-line" />
          </div>
        </FadeInView>
        <FadeInView direction="up" delay={0.3} duration={0.7}>
          <p className="text-vanta-light/60 mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            VANTA Studio creează identități vizuale, site-uri moderne și
            materiale grafice pentru business-uri care vor să iasă din mulțime.
            Totul gata de folosit, atât online cât și la print.
          </p>
        </FadeInView>
        <FadeInView direction="up" delay={0.45} duration={0.7}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/servicii">
                Vezi serviciile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
          </div>
        </FadeInView>

        <FadeInView direction="up" delay={0.6} duration={0.7}>
          <p className="text-vanta-light/30 mt-12 text-sm">
            Studio independent din Bacău. Colaborăm cu business-uri din toată
            țara, remote sau la fața locului.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
