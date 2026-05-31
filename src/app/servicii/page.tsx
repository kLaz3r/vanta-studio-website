import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Layout, Globe, Clapperboard } from "lucide-react";
import { FadeInView } from "~/components/ui/fade-in-view";

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
      "logo design",
      "identitate vizuală",
      "brand guidelines",
      "direcție vizuală",
      "sisteme tipografice",
      "social media identity",
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
      "flyere",
      "meniuri",
      "afișe",
      "bannere",
      "packaging",
      "social media visuals",
      "reclame digitale",
      "materiale promoționale",
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
      "structură clară",
      "design contemporan",
      "performanță",
      "responsive experience",
      "imagine profesională",
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
      "reels",
      "motion graphics",
      "social ads",
      "intro animations",
      "short-form content",
      "video editing",
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
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
              Servicii de Branding, Graphic Design și{" "}
              <span className="gradient-text">Comunicare Vizuală</span>
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-vanta-light/60">
              VANTA Studio dezvoltă identități vizuale și materiale creative
              pentru business-uri care vor o imagine modernă și profesionistă.
              Lucrăm atât pentru mediul digital, cât și pentru materiale
              pregătite profesional pentru print și producție.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Service blocks */}
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-24">
        {SERVICE_BLOCKS.map(
          ({ title, href, icon: Icon, iconGradient, description, deliverables }, i) => (
            <FadeInView key={href} direction="up" delay={i * 0.15}>
              <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${iconGradient}`}
                >
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-vanta-light hover:text-vanta-cyan/90 transition-colors">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-vanta-light/60">
                  {description}
                </p>
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-vanta-cyan transition-colors hover:text-vanta-purple"
                >
                  Detalii complete →
                </Link>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.03] to-vanta-purple/[0.03] p-6 backdrop-blur-2xl">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vanta-light/40">
                  Ce include
                </h3>
                <ul className="list-inside list-disc space-y-1.5 text-sm text-vanta-light/60 marker:text-vanta-cyan/60">
                  {deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
            </FadeInView>
          ),
        )}
      </section>
    </div>
  );
}