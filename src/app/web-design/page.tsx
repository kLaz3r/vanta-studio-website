import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Website-uri moderne, rapide și optimizate. Web design responsive pentru business-uri care vor o imagine profesionistă online.",
};

export default function WebDesignPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
        <div className="orb-cyan -left-32 -top-32 h-80 w-80" />
        <div className="orb-purple -bottom-32 -right-32 h-64 w-64" />
        <div className="relative">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-vanta-cyan/20 to-vanta-purple/20 text-vanta-cyan">
            <Globe size={20} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
            <span className="gradient-text">Web Design</span> Modern
          </h1>
          <div className="accent-line" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
            Creăm website-uri moderne, rapide și optimizate pentru experiență
            și conversii.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.04] to-vanta-purple/[0.04] p-6 backdrop-blur-2xl">
              <h3 className="text-lg font-semibold text-vanta-light">
                Focus
              </h3>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60 marker:text-vanta-cyan/60">
                <li>structură clară</li>
                <li>design contemporan</li>
                <li>performanță</li>
                <li>responsive experience</li>
                <li>imagine profesională</li>
              </ul>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.04] to-vanta-purple/[0.04] backdrop-blur-2xl">
              <div className="orb-cyan h-32 w-32 scale-[0.4]" />
              <p className="relative text-sm text-vanta-light/20">
                Modern website mockups — imagine
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
        </div>
      </section>
    </div>
  );
}