import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Layout, Globe, Clapperboard } from "lucide-react";

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
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Servicii de Branding, Graphic Design și Comunicare Vizuală
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-vanta-light/60">
          VANTA Studio dezvoltă identități vizuale și materiale creative pentru
          business-uri care vor o imagine modernă și profesionistă. Lucrăm atât
          pentru mediul digital, cât și pentru materiale pregătite profesional
          pentru print și producție.
        </p>
      </section>

      {/* Service blocks */}
      <section className="mx-auto max-w-5xl space-y-20 px-6 pb-24">
        {SERVICE_BLOCKS.map(
          ({ title, href, icon: Icon, description, deliverables }) => (
            <div
              key={href}
              className="grid gap-12 md:grid-cols-2 md:items-start"
            >
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-vanta-cyan/10 text-vanta-cyan">
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-vanta-light">{title}</h2>
                <p className="mt-4 text-base leading-relaxed text-vanta-light/60">
                  {description}
                </p>
                <Link
                  href={href}
                  className="mt-4 inline-block text-sm font-medium text-vanta-cyan transition-colors hover:text-vanta-cyan/80"
                >
                  Detalii complete →
                </Link>
              </div>
              <div className="rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vanta-light/40">
                  Ce include
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-vanta-light/60">
                  {deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ),
        )}
      </section>
    </div>
  );
}