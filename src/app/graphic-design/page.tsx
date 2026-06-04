import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";
import { JsonLd } from "~/components/layout/json-ld";
import { breadcrumbSchema, serviceSchema } from "~/lib/structured-data";

export const metadata: Metadata = {
  title: "Graphic Design pentru Digital și Print",
  description:
    "Servicii de graphic design în Bacău: flyere, afișe, bannere, meniuri, packaging și reclame digitale. Materiale profesioniste, gata de print sau pentru online.",
  openGraph: {
    title: "Graphic Design pentru Digital și Print | VANTA Studio",
    description:
      "Servicii de graphic design: flyere, afișe, bannere, meniuri, packaging și materiale pentru social media. Livrăm gata de print sau pentru ecran.",
    url: "https://vantastudio.ro/graphic-design",
  },
  alternates: {
    canonical: "https://vantastudio.ro/graphic-design",
  },
};

const COLOR_SWATCHES = [
  { label: "Dark", color: "#0b0b0d" },
  { label: "Purple", color: "#8b5cf6" },
  { label: "Cyan", color: "#22d3ee" },
  { label: "Light", color: "#f5f7fa" },
  {
    label: "Gradient",
    gradient: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
  },
] as const;

const DELIVERABLES = [
  "Layout principal + variante",
  "Materiale optimizate per platformă",
  "Variante multiple de concept",
  "Direcție vizuală coerentă",
  "Fișiere pregătite pentru producție",
] as const;

const STATS = [
  { number: "500+", label: "materiale livrate" },
  { number: "50+", label: "campanii" },
  { number: "3", label: "ani de activitate" },
] as const;

export default function GraphicDesignPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Servicii", url: "/servicii" },
    { name: "Graphic Design", url: "/graphic-design" },
  ]);

  const schema = serviceSchema(
    "Graphic Design",
    "Servicii de graphic design pentru digital și print: flyere, afișe, bannere, packaging, reclame digitale și materiale promoționale.",
    "/graphic-design",
  );

  return (
    <div className="pt-20">
      <JsonLd data={breadcrumb} />
      <JsonLd data={schema} />
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeInView direction="up">
            <div>
              <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
                Design grafic care transformă idei în materiale{" "}
                <span className="gradient-text">de impact</span>
              </h1>
              <div className="accent-line" />
              <p className="text-vanta-light/80 mt-6 max-w-lg text-base leading-relaxed">
                De la un flyer bine făcut până la o campanie întreagă de
                materiale print și digital — realizăm vizualuri care arată bine
                indiferent de format. Toate fișierele sunt livrate gata de
                folosit.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="shadow-[0_0_24px_rgba(139,92,246,0.12)] hover:shadow-[0_0_32px_rgba(139,92,246,0.2)]"
                  asChild
                >
                  <Link href="/contact">
                    Vreau materiale profesioniste
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.15}>
            <div className="group relative mx-auto w-full max-w-md">
              <div className="from-vanta-purple/[0.05] to-vanta-cyan/[0.05] relative rounded-2xl border border-white/[0.08] bg-gradient-to-br p-6 shadow-[0_20px_60px_rgba(139,92,246,0.08)] backdrop-blur-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex gap-4">
                  <div className="from-vanta-purple/[0.08] to-vanta-cyan/[0.08] flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br p-4">
                    <div className="from-vanta-purple/[0.15] to-vanta-cyan/[0.15] flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br p-4">
                      <div className="h-1.5 w-14 rounded-full bg-white/20" />
                      <div className="h-1.5 w-10 rounded-full bg-white/20" />
                      <div className="bg-vanta-purple/20 mt-1 h-16 w-full max-w-[5rem] rounded-lg border border-white/10" />
                      <div className="h-1 rounded-full bg-white/10" />
                      <div className="h-1 w-12 rounded-full bg-white/10" />
                      <div className="h-1 w-14 rounded-full bg-white/10" />
                    </div>
                  </div>
                  <div className="from-vanta-purple/[0.08] to-vanta-cyan/[0.08] flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br p-4">
                    <div className="from-vanta-purple/[0.15] to-vanta-cyan/[0.15] flex aspect-[9/16] flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br p-4">
                      <div className="flex w-full items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-white/20" />
                        <div className="h-1.5 w-12 rounded-full bg-white/20" />
                      </div>
                      <div className="bg-vanta-cyan/20 mt-1 w-full flex-1 rounded-lg border border-white/10" />
                      <div className="flex w-full items-center justify-between">
                        <div className="h-1 w-8 rounded-full bg-white/10" />
                        <div className="h-1 w-8 rounded-full bg-white/10" />
                        <div className="h-1 w-8 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-vanta-light/50 mb-2 text-xs tracking-wider uppercase">
                    Paletă cromatică
                  </div>
                  <div className="flex gap-2">
                    {COLOR_SWATCHES.map((swatch, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border border-white/[0.08] transition-transform duration-200 hover:scale-110"
                        style={{
                          background:
                            "gradient" in swatch
                              ? swatch.gradient
                              : swatch.color,
                        }}
                        title={swatch.label}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-vanta-light/50 mb-2 text-xs tracking-wider uppercase">
                    Aplicații
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
                      <div className="text-vanta-light/40 text-xs">Print</div>
                      <div className="text-vanta-light mt-0.5 text-sm font-semibold">
                        Flyere &amp; Afișe
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
                      <div className="text-vanta-light/40 text-xs">Digital</div>
                      <div className="text-vanta-light mt-0.5 text-sm font-semibold">
                        Social &amp; Ads
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="orb-purple pointer-events-none absolute -top-20 -right-20 h-40 w-40 select-none"
                aria-hidden="true"
              />
              <div
                className="orb-cyan pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 select-none"
                aria-hidden="true"
              />
            </div>
          </FadeInView>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <FadeInView direction="up" delay={0.3}>
            <div className="from-vanta-purple/[0.04] to-vanta-cyan/[0.04] rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6 backdrop-blur-2xl">
              <h3 className="text-vanta-light text-lg font-semibold">
                Ce primești
              </h3>
              <div className="mt-4 space-y-3">
                {DELIVERABLES.map((item) => (
                  <div
                    key={item}
                    className="text-vanta-light/80 flex items-start gap-3 text-sm"
                  >
                    <span className="from-vanta-purple/20 to-vanta-cyan/20 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br">
                      <Check size={11} className="text-vanta-purple" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.45}>
            <div className="from-vanta-purple/[0.04] to-vanta-cyan/[0.04] rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6 backdrop-blur-2xl">
              <h3 className="text-vanta-light text-lg font-semibold">
                Rezultate
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                {STATS.map(({ number, label }) => (
                  <div key={label}>
                    <div className="gradient-text text-2xl font-bold">
                      {number}
                    </div>
                    <div className="text-vanta-light/50 mt-1 text-xs">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
