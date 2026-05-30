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

export function PortfolioSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
          Proiecte selectate
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-vanta-light/60">
          Fiecare proiect este construit în jurul clarității vizuale,
          funcționalității și unei identități coerente.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ category, title, slug }) => (
            <Link
              key={title}
              href={slug}
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