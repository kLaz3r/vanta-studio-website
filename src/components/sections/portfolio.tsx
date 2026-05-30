import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

const PROJECTS = [
  { category: "Branding", title: "Identitate vizuală — April Beauty", slug: "#" },
  { category: "Graphic Design", title: "Materiale promoționale — Craft Bakery", slug: "#" },
  { category: "Web Design", title: "Website business — Startup Studio", slug: "#" },
  { category: "Branding", title: "Logo & Packaging — Urban Coffee", slug: "#" },
  { category: "Motion", title: "Social Media Reels — Fashion Brand", slug: "#" },
  { category: "Graphic Design", title: "Sistem vizual — Tech Conference", slug: "#" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Branding: "text-vanta-cyan",
  "Graphic Design": "text-vanta-purple",
  "Web Design": "text-vanta-cyan",
  Motion: "text-vanta-purple",
};

const IMAGE_PLACEHOLDER_BG = [
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
];

export function PortfolioSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="orb-purple -left-32 top-1/3 h-72 w-72" />
      <div className="orb-cyan -bottom-32 right-0 h-64 w-64" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
            <span className="gradient-text">Proiecte</span> selectate
          </h2>
          <div className="accent-line" />
        </div>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-vanta-light/60">
          Fiecare proiect este construit în jurul clarității vizuale,
          funcționalității și unei identități coerente.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ category, title, slug }, i) => (
            <Link
              key={title}
              href={slug}
              className="group rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-4 backdrop-blur-2xl transition-all duration-300 hover:border-vanta-cyan/25 hover:from-white/[0.07] hover:to-vanta-[0.03] hover:shadow-[0_8px_40px_rgba(34,211,238,0.12)]"
            >
              <div
                className={`mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br ${IMAGE_PLACEHOLDER_BG[i]}`}
              >
                <span className="text-xs text-vanta-light/15">
                  Project image
                </span>
              </div>
              <p
                className={`text-xs font-medium uppercase tracking-wider ${CATEGORY_COLORS[category] ?? "text-vanta-cyan/80"}`}
              >
                {category}
              </p>
              <h3 className="mt-1 text-base font-semibold text-vanta-light group-hover:text-vanta-cyan/90 transition-colors">
                {title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" asChild>
            <Link href="/proiecte">
              Vezi toate proiectele
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}