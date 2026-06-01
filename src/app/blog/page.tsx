import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "~/components/ui/fade-in-view";
import { getPostsFrontmatter } from "~/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articole despre branding, graphic design, web design și identitate vizuală. Resurse pentru business-uri moderne.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Branding: "text-vanta-cyan",
  "Visual Identity": "text-vanta-purple",
  "Web Design": "text-vanta-cyan",
  Marketing: "text-vanta-purple",
};

const GRADIENTS = [
  "from-vanta-cyan/[0.04] to-vanta-purple/[0.04]",
  "from-vanta-purple/[0.04] to-vanta-cyan/[0.04]",
];

export default function BlogPage() {
  const posts = getPostsFrontmatter();

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
          {posts.map(({ title, category, slug, excerpt }, i) => (
            <FadeInView key={slug} direction="up" delay={i * 0.08}>
              <Link
                href={`/blog/${slug}`}
                className={`block rounded-2xl border border-white/[0.06] bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} hover:border-vanta-cyan/25 hover:to-vanta-cyan/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:from-white/[0.07] hover:shadow-[0_8px_40px_rgba(34,211,238,0.08)]`}
              >
                <p
                  className={`text-xs font-medium tracking-wider uppercase ${CATEGORY_COLORS[category] ?? "text-vanta-cyan/80"}`}
                >
                  {category}
                </p>
                <h2 className="text-vanta-light mt-2 text-xl font-semibold transition-colors">
                  {title}
                </h2>
                {excerpt && (
                  <p className="text-vanta-light/40 mt-2 line-clamp-2 text-sm leading-relaxed">
                    {excerpt}
                  </p>
                )}
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}
