import type { Metadata } from "next";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Portofoliu de proiecte VANTA Studio — branding, graphic design, web design și motion. Vezi proiectele noastre.",
};

const CATEGORIES = ["Toate", "Branding", "Graphic Design", "Web Design", "Motion"] as const;

const PROJECTS = [
  { category: "Branding", title: "Identitate vizuală — April Beauty", image: null },
  { category: "Graphic Design", title: "Materiale promoționale — Craft Bakery", image: null },
  { category: "Web Design", title: "Website business — Startup Studio", image: null },
  { category: "Branding", title: "Logo & Packaging — Urban Coffee", image: null },
  { category: "Graphic Design", title: "Sistem vizual — Tech Conference", image: null },
  { category: "Motion", title: "Social Media Reels — Fashion Brand", image: null },
  { category: "Web Design", title: "Site prezentare — Law Firm", image: null },
  { category: "Branding", title: "Rebranding — Local Restaurant", image: null },
  { category: "Graphic Design", title: "Packaging — Organic Skincare", image: null },
];

const CATEGORY_COLORS: Record<string, string> = {
  Branding: "text-vanta-cyan",
  "Graphic Design": "text-vanta-purple",
  "Web Design": "text-vanta-cyan",
  Motion: "text-vanta-purple",
};

const PLACEHOLDER_GRADIENTS = [
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
  "from-vanta-cyan/5 to-vanta-purple/5",
  "from-vanta-purple/5 to-vanta-cyan/5",
  "from-vanta-cyan/5 to-vanta-purple/5",
];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
              <span className="gradient-text">Proiecte</span>
            </h1>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-vanta-light/60">
              O selecție de proiecte de branding, graphic design, web design și
              motion realizate pentru business-uri moderne.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Filter bar */}
      <FadeInView direction="up" delay={0.15}>
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm text-vanta-light/70 backdrop-blur-lg transition-all duration-200 hover:border-vanta-cyan/30 hover:bg-white/[0.07] hover:text-vanta-cyan"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ category, title }, i) => (
            <FadeInView key={title} direction="up" delay={i * 0.06}>
              <div
                className="group cursor-pointer rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-4 backdrop-blur-2xl transition-all duration-300 hover:border-vanta-cyan/25 hover:from-white/[0.07] hover:to-white/[0.03] hover:shadow-[0_8px_40px_rgba(34,211,238,0.12)]"
              >
                <div
                  className={`mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[i]}`}
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
                <h3 className="mt-1 text-base font-semibold text-vanta-light transition-colors group-hover:text-vanta-cyan/90">
                  {title}
                </h3>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}