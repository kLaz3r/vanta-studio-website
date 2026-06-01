import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Motion & Video",
  description:
    "Motion design și video editing pentru social media, advertising și prezentare digitală. Reels, animații și conținut video.",
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
  "Reels + Short-form Content",
  "Motion Graphics",
  "Social Ads Video",
  "Intro & Title Animations",
  "Video Editing & Post-producție",
] as const;

const STATS = [
  { number: "100+", label: "videouri produse" },
  { number: "50+", label: "campanii" },
  { number: "3", label: "ani de activitate" },
] as const;

export default function MotionVideoPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeInView direction="up">
            <div>
              <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
                Conținut video și motion design care{" "}
                <span className="gradient-text">captează atenția</span>
              </h1>
              <div className="accent-line" />
              <p className="text-vanta-light/80 mt-6 max-w-lg text-base leading-relaxed">
                De la reels și motion graphics până la videouri pentru campanii
                — producem conținut vizual care oprește scrolling-ul și comunică
                rapid.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="shadow-[0_0_24px_rgba(139,92,246,0.12)] hover:shadow-[0_0_32px_rgba(139,92,246,0.2)]"
                  asChild
                >
                  <Link href="/contact">
                    Hai să creăm conținutul tău video
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.15}>
            <div className="group relative mx-auto w-full max-w-md">
              <div className="from-vanta-purple/[0.05] to-vanta-cyan/[0.05] relative rounded-2xl border border-white/[0.08] bg-gradient-to-br p-6 shadow-[0_20px_60px_rgba(139,92,246,0.08)] backdrop-blur-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                  <div className="from-vanta-purple/[0.15] to-vanta-cyan/[0.15] flex aspect-video items-center justify-center bg-gradient-to-br">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                      <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white/60" />
                    </div>
                  </div>
                  <div className="space-y-2 border-t border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
                      <div className="from-vanta-purple to-vanta-cyan h-full w-3/5 rounded-full bg-gradient-to-r" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="h-2 w-6 rounded-full bg-white/10" />
                        <div className="h-2 w-6 rounded-full bg-white/10" />
                        <div className="h-2 w-6 rounded-full bg-white/10" />
                      </div>
                      <div className="h-2 w-10 rounded-full bg-white/10" />
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
                    Formate
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
                      <div className="text-vanta-light/40 text-xs">Social</div>
                      <div className="text-vanta-light mt-0.5 text-sm font-semibold">
                        Reels &amp; Stories
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
                      <div className="text-vanta-light/40 text-xs">Ads</div>
                      <div className="text-vanta-light mt-0.5 text-sm font-semibold">
                        Social &amp; Display
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
