import type { Metadata } from "next";
import Link from "next/link";

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
  },
  {
    title: "Ce este identitatea vizuală și de ce contează",
    category: "Branding",
    slug: "#",
  },
  {
    title: "Diferența dintre logo și branding",
    category: "Branding",
    slug: "#",
  },
  {
    title: "Cum influențează designul percepția unui brand",
    category: "Visual Identity",
    slug: "#",
  },
  {
    title: "De ce are nevoie un business de un website modern",
    category: "Web Design",
    slug: "#",
  },
  {
    title: "De ce contează consistența vizuală în social media",
    category: "Marketing",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-vanta-light/60">
          Resurse și articole despre branding, graphic design, web design și
          comunicare vizuală pentru business-uri moderne.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-4">
          {ARTICLES.map(({ title, category, slug }) => (
            <Link
              key={title}
              href={slug}
              className="block rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6 transition-colors hover:border-vanta-cyan/40"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-vanta-cyan/80">
                {category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-vanta-light">
                {title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}