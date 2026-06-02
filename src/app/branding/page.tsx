import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Branding & Identitate Vizuală",
  description:
    "Servicii de branding și identitate vizuală. Logo design, brand guidelines, direcție vizuală și sisteme tipografice pentru business-uri moderne.",
};

const COLOR_SWATCHES = [
  { label: "Dark", color: "#0b0b0d" },
  { label: "Cyan", color: "#22d3ee" },
  { label: "Purple", color: "#8b5cf6" },
  { label: "Light", color: "#f5f7fa" },
  { label: "Gradient", gradient: "linear-gradient(135deg, #22d3ee, #8b5cf6)" },
] as const;

const DELIVERABLES = [
  "Logo principal + variante",
  "Sistem de culori și tipografie",
  "Brand Guidelines",
  "Template-uri Social Media",
  "Direcție vizuală și asset-uri",
] as const;

const STATS = [
  { number: "50+", label: "identități create" },
  { number: "12", label: "industrii" },
  { number: "95%", label: "clienți recurenți" },
] as const;

export default function BrandingPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeInView direction="up">
            <div>
              <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
                Construim identități vizuale{" "}
                <span className="gradient-text">memorabile și scalabile</span>
              </h1>
              <div className="accent-line" />
              <p className="text-vanta-light/80 mt-6 max-w-lg text-base leading-relaxed">
                De la logo și paletă cromatică până la sistem complet de brand —
                creăm identități care diferențiază și comunică profesional.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:shadow-[0_0_32px_rgba(34,211,238,0.2)]"
                  asChild
                >
                  <Link href="/contact">
                    Hai să construim brandul tău
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.15}>
            <div className="group relative mx-auto w-full max-w-md">
              <div className="from-vanta-cyan/[0.05] to-vanta-purple/[0.05] relative rounded-2xl border border-white/[0.08] bg-gradient-to-br p-6 shadow-[0_20px_60px_rgba(34,211,238,0.08)] backdrop-blur-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className="from-vanta-cyan to-vanta-purple flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                    <Image
                      src="/vanta-simple.svg"
                      alt="VANTA Studio"
                      width={40}
                      height={20}
                      className="h-3.5 w-auto"
                    />
                  </div>
                  <div>
                    <div className="text-vanta-light text-sm font-semibold">
                      VANTA
                    </div>
                    <div className="text-vanta-light/40 text-xs">
                      Creative Studio
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
                    Tipografie
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                    <div className="text-vanta-light text-lg font-semibold">
                      Inter
                    </div>
                    <div className="text-vanta-light/40 text-xs">
                      Heading &bull; Body &bull; UI
                    </div>
                  </div>
                </div>

                <div className="from-vanta-cyan/[0.08] to-vanta-purple/[0.08] mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br p-4">
                  <div className="from-vanta-cyan/[0.08] to-vanta-purple/[0.08] flex aspect-[1.6/1] items-center justify-center rounded-lg border border-white/[0.04] bg-gradient-to-br">
                    <div className="text-center">
                      <div className="from-vanta-cyan to-vanta-purple mx-auto flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br">
                        <Image
                          src="/vanta-simple.svg"
                          alt="VANTA Studio"
                          width={32}
                          height={16}
                          className="h-2.5 w-auto"
                        />
                      </div>
                      <p className="text-vanta-light/60 mt-1 text-[10px] font-semibold">
                        VANTA STUDIO
                      </p>
                      <p className="text-vanta-light/30 text-[8px]">
                        Branding &bull; Design &bull; Web
                      </p>
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
