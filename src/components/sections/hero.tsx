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
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-vanta-light sm:text-5xl md:text-6xl">
            Design modern pentru branduri care{" "}
            <span className="gradient-text">vor să se remarce</span>
          </h1>
        </FadeInView>
        <FadeInView direction="up" delay={0.15} duration={0.7}>
          <div className="mx-auto flex justify-center">
            <div className="accent-line" />
          </div>
        </FadeInView>
        <FadeInView direction="up" delay={0.3} duration={0.7}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
            VANTA Studio dezvoltă identități vizuale, materiale publicitare și
            experiențe digitale pentru business-uri care vor o imagine
            profesionistă, atât online cât și offline.
          </p>
        </FadeInView>
        <FadeInView direction="up" delay={0.45} duration={0.7}>
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
        </FadeInView>

        <FadeInView direction="up" delay={0.6} duration={0.7}>
          <p className="mt-12 text-sm text-vanta-light/30">
            Studio creativ independent cu bază în Bacău, disponibil pentru
            colaborări locale și remote.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}