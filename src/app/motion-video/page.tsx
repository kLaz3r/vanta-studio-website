import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clapperboard } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Motion & Video",
  description:
    "Motion design și video editing pentru social media, advertising și prezentare digitală. Reels, animații și conținut video.",
};

export default function MotionVideoPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
        <FadeInView direction="up">
          <div className="relative">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-vanta-purple/20 to-vanta-cyan/20 text-vanta-purple">
              <Clapperboard size={20} />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
              Motion Design &amp;{" "}
              <span className="gradient-text">Video Editing</span>
            </h1>
            <div className="accent-line" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
              Conținut vizual modern pentru social media, advertising și
              prezentare digitală.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <FadeInView direction="up" delay={0.15}>
                <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-purple/[0.04] to-vanta-cyan/[0.04] p-6 backdrop-blur-2xl">
                  <h3 className="text-lg font-semibold text-vanta-light">
                    Realizăm
                  </h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60 marker:text-vanta-purple/60">
                    <li>reels</li>
                    <li>motion graphics</li>
                    <li>social ads</li>
                    <li>intro animations</li>
                    <li>short-form content</li>
                    <li>video editing</li>
                  </ul>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <div className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-purple/[0.04] to-vanta-cyan/[0.04] backdrop-blur-2xl">
                  <div className="orb-purple h-32 w-32 scale-[0.4]" />
                  <p className="relative text-sm text-vanta-light/20">
                    Video editing workflow — imagine
                  </p>
                </div>
              </FadeInView>
            </div>

            <FadeInView direction="up" delay={0.45}>
              <div className="mt-12">
                <Button asChild>
                  <Link href="/contact">
                    Solicită o ofertă
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}