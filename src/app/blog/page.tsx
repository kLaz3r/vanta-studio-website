import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articole despre branding, graphic design, web design și identitate vizuală. Resurse pentru business-uri moderne.",
};

const ARTICLES = [
  {
    title: "Cum alegi un logo profesional pentru afacerea ta",
    category: "Branding",
    slug: "#",
    gradient: "from-vanta-cyan/[0.04] to-vanta-purple/[0.04]",
  },
  {
    title: "Ce este identitatea vizuală și de ce contează",
    category: "Branding",
    slug: "#",
    gradient: "from-vanta-cyan/[0.04] to-vanta-purple/[0.04]",
  },
  {
    title: "Diferența dintre logo și branding",
    category: "Branding",
    slug: "#",
    gradient: "from-vanta-cyan/[0.04] to-vanta-purple/[0.04]",
  },
  {
    title: "Cum influențează designul percepția unui brand",
    category: "Visual Identity",
    slug: "#",
    gradient: "from-vanta-purple/[0.04] to-vanta-cyan/[0.04]",
  },
  {
    title: "De ce are nevoie un business de un website modern",
    category: "Web Design",
    slug: "#",
    gradient: "from-vanta-cyan/[0.04] to-vanta-purple/[0.04]",
  },
  {
    title: "De ce contează consistența vizuală în social media",
    category: "Marketing",
    slug: "#",
    gradient: "from-vanta-purple/[0.04] to-vanta-cyan/[0.04]",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Branding: "text-vanta-cyan",
  "Visual Identity": "text-vanta-purple",
  "Web Design": "text-vanta-cyan",
  Marketing: "text-vanta-purple",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="gradient-text">Blog</span>
            </h1>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-vanta-light/60 mx-auto mt-6 max-w-xl text-base leading-relaxed">
              Resurse și articole despre branding, graphic design, web design și
              comunicare vizuală pentru business-uri moderne.
            </p>
          </div>
        </FadeInView>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-4">
          {ARTICLES.map(({ title, category, slug, gradient }, i) => (
            <FadeInView key={title} direction="up" delay={i * 0.08}>
              <Link
                href={slug}
                className={`block rounded-2xl border border-white/[0.06] bg-gradient-to-br ${gradient} hover:border-vanta-cyan/25 hover:to-vanta-cyan/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:from-white/[0.07] hover:shadow-[0_8px_40px_rgba(34,211,238,0.08)]`}
              >
                <p
                  className={`text-xs font-medium tracking-wider uppercase ${CATEGORY_COLORS[category] ?? "text-vanta-cyan/80"}`}
                >
                  {category}
                </p>
                <h2 className="text-vanta-light group-hover:text-vanta-cyan/90 mt-2 text-xl font-semibold transition-colors">
                  {title}
                </h2>
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}
