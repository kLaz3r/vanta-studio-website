import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Layout, Globe, Clapperboard, Check, ArrowRight } from "lucide-react";
import { FadeInView } from "~/components/ui/fade-in-view";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Servicii de branding, graphic design, web design și comunicare vizuală pentru business-uri moderne. Materiale pregătite pentru digital și print.",
};

const SERVICE_BLOCKS = [
  {
    title: "Branding & Identitate Vizuală",
    href: "/branding",
    icon: Palette,
    iconGradient: "from-vanta-cyan/20 to-vanta-purple/20 text-vanta-cyan",
    description:
      "Construim identități vizuale moderne și sisteme de brand coerente care ajută business-urile să comunice clar și memorabil.",
    deliverables: [
      "Logo Design",
      "Identitate Vizuală",
      "Brand Guidelines",
      "Direcție Vizuală",
      "Sisteme Tipografice",
      "Social Media Identity",
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
  return (
    <div className="pt-20">
      {/* Intro */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
              Servicii de Branding, Graphic Design și{" "}
              <span className="gradient-text">Comunicare Vizuală</span>
            </h1>
            <div className="mt-6 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-vanta-light/80">
              VANTA Studio dezvoltă identități vizuale și materiale creative
              pentru business-uri care vor o imagine modernă și profesionistă.
              Lucrăm atât pentru mediul digital, cât și pentru materiale
              pregătite profesional pentru print și producție.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm text-vanta-light/50">
              Peste 30 de identități vizuale livrate — pentru startup-uri,
              companii tech și branduri premium.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Service blocks */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        {SERVICE_BLOCKS.map(
          ({ title, href, icon: Icon, iconGradient, description, deliverables }, i) => {
            const iconColor = iconGradient.includes("cyan") ? "#22d3ee" : "#8b5cf6";
            return (
            <FadeInView key={href} direction="up" delay={i * 0.15}>
              <div className={`mb-20 grid gap-12 md:grid-cols-2 md:items-start ${i % 2 !== 0 ? "[&>:first-child]:md:order-2 [&>:last-child]:md:order-1" : ""}`}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -left-4 -top-4 select-none"
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
                <h2 className="text-2xl font-bold text-vanta-light md:text-3xl">
                  {title}
                </h2>
                <div className="mt-3 h-px w-12 bg-gradient-to-r from-vanta-cyan/40 to-transparent" />
                <p className="mt-5 text-base leading-relaxed text-vanta-light/80">
                  {description}
                </p>
                <div className="mt-8">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={href}>
                      <span className="group inline-flex items-center gap-1">
                        Vezi serviciul complet
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="group/card rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.03] to-vanta-purple/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(34,211,238,0.06)] md:p-8">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-vanta-light/50">
                  Ce include
                </h3>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-vanta-light/80">
                      <Check size={14} className="mt-0.5 shrink-0 text-vanta-cyan" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </FadeInView>
          );
        })}
      </section>
    </div>
  );
}