import type { Metadata } from "next";

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

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Proiecte
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-vanta-light/60">
          O selecție de proiecte de branding, graphic design, web design și
          motion realizate pentru business-uri moderne.
        </p>
      </section>

      {/* Filter bar */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="rounded-full border border-vanta-gray px-4 py-1.5 text-sm text-vanta-light/70 transition-colors hover:border-vanta-cyan/50 hover:text-vanta-cyan"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ category, title }) => (
            <div
              key={title}
              className="group rounded-lg border border-vanta-gray bg-vanta-gray/30 p-4 transition-colors hover:border-vanta-cyan/40"
            >
              <div className="mb-4 flex aspect-video items-center justify-center rounded bg-vanta-gray/50">
                <span className="text-xs text-vanta-light/15">
                  Project image
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-vanta-cyan/80">
                {category}
              </p>
              <h3 className="mt-1 text-base font-semibold text-vanta-light">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}