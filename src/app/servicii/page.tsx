import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Layout,
  Globe,
  Clapperboard,
  Check,
  ArrowRight,
} from "lucide-react";
import { FadeInView } from "~/components/ui/fade-in-view";
import { Button } from "~/components/ui/button";
import { JsonLd } from "~/components/layout/json-ld";
import { serviceSchema, breadcrumbSchema } from "~/lib/structured-data";

export const metadata: Metadata = {
  title: "Servicii de Branding, Graphic Design și Web Design",
  description:
    "Servicii complete de branding, graphic design, web design și conținut video în Bacău și online. Logo-uri, site-uri, materiale print și motion graphics — totul într-un singur loc.",
  openGraph: {
    title: "Servicii de Branding, Graphic Design și Web Design | VANTA Studio",
    description:
      "Servicii complete de branding, graphic design, web design și conținut video în Bacău și online.",
    url: "https://vantastudio.ro/servicii",
  },
  alternates: {
    canonical: "https://vantastudio.ro/servicii",
  },
};

const SERVICE_BLOCKS = [
  {
    title: "Branding & Identitate Vizuală",
    href: "/branding",
    icon: Palette,
    iconGradient: "from-vanta-cyan/20 to-vanta-purple/20 text-vanta-cyan",
    description:
      "Construim identități care spun clar cine ești. Logo, paletă, fonturi și ghid de brand — totul gândit să funcționeze împreună, oriunde l-ai folosi.",
    deliverables: [
      "Logo principal + variante",
      "Paletă cromatică și tipografie",
      "Ghid de brand (Brand Guidelines)",
      "Template-uri pentru Social Media",
      "Sistem vizual complet",
    ],
  },
  {
    title: "Graphic Design pentru Digital și Print",
    href: "/graphic-design",
    icon: Layout,
    iconGradient: "from-vanta-purple/20 to-vanta-cyan/20 text-vanta-purple",
    description:
      "Orice material grafic de care ai nevoie — de la un flyer sau un meniu până la bannere, reclame și packaging. Livrăm gata de print sau optimizat pentru ecran.",
    deliverables: [
      "Flyere și pliante",
      "Meniuri și cataloage",
      "Afișe și bannere",
      "Packaging și etichete",
      "Visual-uri pentru Social Media",
      "Reclame digitale",
      "Materiale promoționale",
      "Prezentări și pitch deck-uri",
    ],
  },
  {
    title: "Web Design Modern",
    href: "/web-design",
    icon: Globe,
    iconGradient: "from-vanta-cyan/20 to-vanta-purple/20 text-vanta-cyan",
    description:
      "Site-uri care arată bine, se încarcă rapid și sunt optimizate să aducă clienți. Design personalizat, nu template-uri.",
    deliverables: [
      "Design unic, pe măsura ta",
      "Optimizat pentru viteză",
      "Total responsive (mobile, tablet, desktop)",
      "Navigație clară și intuitivă",
      "SEO de bază inclus",
    ],
  },
  {
    title: "Motion Design & Video Editing",
    href: "/motion-video",
    icon: Clapperboard,
    iconGradient: "from-vanta-purple/20 to-vanta-cyan/20 text-vanta-purple",
    description:
      "Reels, motion graphics și videouri pentru campanii care opresc scrolling-ul. Conținut scurt, eficient, gata de postat.",
    deliverables: [
      "Reels și Shorts",
      "Motion Graphics",
      "Videouri pentru reclame",
      "Intro-uri și animații",
      "Conținut scurt (TikTok, Reels)",
      "Editare video și post-producție",
    ],
  },
  {
    title: "Graphic Design pentru Digital și Print",
    href: "/graphic-design",
    icon: Layout,
    iconGradient: "from-vanta-purple/20 to-vanta-cyan/20 text-vanta-purple",
    description:
      "Realizăm materiale vizuale pentru online și producție tipografică, adaptate imaginii și nevoilor fiecărui business.",
    deliverables: [
      "Flyere",
      "Meniuri",
      "Afișe",
      "Bannere",
      "Packaging",
      "Social Media Visuals",
      "Reclame Digitale",
      "Materiale Promoționale",
    ],
  },
  {
    title: "Web Design Modern",
    href: "/web-design",
    icon: Globe,
    iconGradient: "from-vanta-cyan/20 to-vanta-purple/20 text-vanta-cyan",
    description:
      "Creăm website-uri moderne, rapide și optimizate pentru experiență și conversii.",
    deliverables: [
      "Structură Clară",
      "Design Contemporan",
      "Performanță Optimă",
      "Responsive Experience",
      "Imagine Profesională",
    ],
  },
  {
    title: "Motion Design & Video Editing",
    href: "/motion-video",
    icon: Clapperboard,
    iconGradient: "from-vanta-purple/20 to-vanta-cyan/20 text-vanta-purple",
    description:
      "Conținut vizual modern pentru social media, advertising și prezentare digitală.",
    deliverables: [
      "Reels",
      "Motion Graphics",
      "Social Ads",
      "Intro Animations",
      "Short-Form Content",
      "Video Editing",
    ],
  },
];

export default function ServicesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Servicii", url: "/servicii" },
  ]);

  const serviceSchemas = SERVICE_BLOCKS.map((s) =>
    serviceSchema(s.title, s.description, s.href),
  );

  return (
    <div className="pt-20">
      <JsonLd data={breadcrumb} />
      {serviceSchemas.map((s) => (
        <JsonLd key={(s as { url: string }).url} data={s} />
      ))}

      {/* Intro */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
              Servicii de Branding, Graphic Design și{" "}
              <span className="gradient-text">Comunicare Vizuală</span>
            </h1>
            <div className="mt-6 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-vanta-light/80 mx-auto mt-6 max-w-2xl text-base leading-relaxed">
              Oferim tot ce ține de identitate vizuală și comunicare: de la
              logo și reguli de brand până la website, materiale printate și
              conținut pentru social media. Colaborăm cu business-uri din
              România, indiferent de oraș.
            </p>
            <p className="text-vanta-light/50 mx-auto mt-6 max-w-xl text-sm">
              Peste 50 de proiecte livrate — pentru startup-uri, companii tech,
              restaurante și branduri locale.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Service blocks */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        {SERVICE_BLOCKS.map(
          (
            {
              title,
              href,
              icon: Icon,
              iconGradient,
              description,
              deliverables,
            },
            i,
          ) => {
            const iconColor = iconGradient.includes("cyan")
              ? "#22d3ee"
              : "#8b5cf6";
            return (
              <FadeInView key={href} direction="up" delay={i * 0.15}>
                <div
                  className={`mb-20 grid gap-12 md:grid-cols-2 md:items-start ${i % 2 !== 0 ? "[&>:first-child]:md:order-2 [&>:last-child]:md:order-1" : ""}`}
                >
                  <div className="relative">
                    <div
                      className="pointer-events-none absolute -top-4 -left-4 select-none"
                      aria-hidden="true"
                    >
                      <Icon
                        size={260}
                        style={{ color: iconColor, opacity: 0.04 }}
                      />
                    </div>
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${iconGradient}`}
                    >
                      <Icon size={20} />
                    </div>
                    <h2 className="text-vanta-light text-2xl font-bold md:text-3xl">
                      {title}
                    </h2>
                    <div className="from-vanta-cyan/40 mt-3 h-px w-12 bg-gradient-to-r to-transparent" />
                    <p className="text-vanta-light/80 mt-5 text-base leading-relaxed">
                      {description}
                    </p>
                    <div className="mt-8">
                      <Button variant="secondary" size="sm" asChild>
                        <Link href={href}>
                          <span className="group inline-flex items-center gap-1">
                            Vezi serviciul complet
                            <ArrowRight
                              size={14}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="group/card from-vanta-cyan/[0.03] to-vanta-purple/[0.03] rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6 backdrop-blur-2xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(34,211,238,0.06)] md:p-8">
                    <h3 className="text-vanta-light/50 mb-5 text-sm font-semibold tracking-wider uppercase">
                      Ce include
                    </h3>
                    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-vanta-light/80 flex items-start gap-3 text-sm"
                        >
                          <Check
                            size={14}
                            className="text-vanta-cyan mt-0.5 shrink-0"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInView>
            );
          },
        )}
      </section>
    </div>
  );
}
