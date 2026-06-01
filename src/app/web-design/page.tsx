import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Website-uri moderne, rapide și optimizate. Web design responsive pentru business-uri care vor o imagine profesionistă online.",
};

const COLOR_SWATCHES = [
  { label: "Dark", color: "#0b0b0d" },
  { label: "Cyan", color: "#22d3ee" },
  { label: "Purple", color: "#8b5cf6" },
  { label: "Light", color: "#f5f7fa" },
  {
    label: "Gradient",
    gradient: "linear-gradient(135deg, #22d3ee, #8b5cf6)",
  },
] as const;

const DELIVERABLES = [
  "Design personalizat + layout",
  "Optimizare performanță",
  "Responsive experience",
  "Structură clară și navigație",
  "Integrare și configurare",
] as const;

const STATS = [
  { number: "20+", label: "website-uri livrate" },
  { number: "100%", label: "responsive" },
  { number: "3", label: "ani de activitate" },
] as const;

export default function WebDesignPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeInView direction="up">
            <div>
              <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
                Website-uri moderne, rapide și{" "}
                <span className="gradient-text">orientate spre conversie</span>
              </h1>
              <div className="accent-line" />
              <p className="text-vanta-light/80 mt-6 max-w-lg text-base leading-relaxed">
                Creăm website-uri care arată excelent, se încarcă rapid și sunt
                optimizate pentru a transforma vizitatorii în clienți.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:shadow-[0_0_32px_rgba(34,211,238,0.2)]"
                  asChild
                >
                  <Link href="/contact">
                    Hai să construim website-ul tău
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.15}>
            <div className="group relative mx-auto w-full max-w-md">
              <div className="from-vanta-cyan/[0.05] to-vanta-purple/[0.05] relative rounded-2xl border border-white/[0.08] bg-gradient-to-br p-6 shadow-[0_20px_60px_rgba(34,211,238,0.08)] backdrop-blur-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    <div className="ml-4 h-3 flex-1 rounded-md bg-white/[0.06]" />
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="flex gap-3">
                      <div className="h-2 w-10 rounded-full bg-white/10" />
                      <div className="h-2 w-10 rounded-full bg-white/10" />
                      <div className="h-2 w-10 rounded-full bg-white/10" />
                    </div>
                    <div className="from-vanta-cyan/20 to-vanta-purple/20 h-24 rounded-lg bg-gradient-to-br" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-md bg-white/[0.04]" />
                      <div className="h-12 rounded-md bg-white/[0.04]" />
                      <div className="h-12 rounded-md bg-white/[0.04]" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-2 flex-1 rounded-full bg-white/10" />
                      <div className="h-2 w-16 rounded-full bg-white/10" />
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
                    Tehnologii
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
                      <div className="text-vanta-light/40 text-xs">
                        Frontend
                      </div>
                      <div className="text-vanta-light mt-0.5 text-sm font-semibold">
                        Next.js &amp; Tailwind
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
                      <div className="text-vanta-light/40 text-xs">
                        Optimizare
                      </div>
                      <div className="text-vanta-light mt-0.5 text-sm font-semibold">
                        SEO &amp; Performance
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="orb-cyan pointer-events-none absolute -top-20 -right-20 h-40 w-40 select-none"
                aria-hidden="true"
              />
              <div
                className="orb-purple pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 select-none"
                aria-hidden="true"
              />
            </div>
          </FadeInView>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <FadeInView direction="up" delay={0.3}>
            <div className="from-vanta-cyan/[0.04] to-vanta-purple/[0.04] rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6 backdrop-blur-2xl">
              <h3 className="text-vanta-light text-lg font-semibold">
                Ce primești
              </h3>
              <div className="mt-4 space-y-3">
                {DELIVERABLES.map((item) => (
                  <div
                    key={item}
                    className="text-vanta-light/80 flex items-start gap-3 text-sm"
                  >
                    <span className="from-vanta-cyan/20 to-vanta-purple/20 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br">
                      <Check size={11} className="text-vanta-cyan" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.45}>
            <div className="from-vanta-cyan/[0.04] to-vanta-purple/[0.04] rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6 backdrop-blur-2xl">
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
