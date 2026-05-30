import Link from "next/link";
import { Palette, Layout, Globe, Clapperboard } from "lucide-react";
import { cn } from "~/lib/cn";

const SERVICES = [
  {
    title: "Branding",
    description:
      "Identități vizuale moderne construite pentru claritate, consistență și recunoaștere.",
    icon: Palette,
    href: "/branding",
  },
  {
    title: "Graphic Design",
    description:
      "Materiale promoționale și vizuale dezvoltate pentru digital și producție tipografică.",
    icon: Layout,
    href: "/graphic-design",
  },
  {
    title: "Web Design",
    description:
      "Website-uri moderne, rapide și optimizate pentru experiență și conversii.",
    icon: Globe,
    href: "/web-design",
  },
  {
    title: "Motion & Video",
    description:
      "Conținut vizual și animații pentru social media, advertising și prezentare digitală.",
    icon: Clapperboard,
    href: "/motion-video",
  },
];

export function ServicesSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
          Servicii creative pentru business-uri moderne
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, icon: Icon, href }) => (
            <Link
              key={title}
              href={href}
              className={cn(
                "group rounded-lg border border-vanta-gray bg-vanta-gray/40 p-6 transition-colors",
                "hover:border-vanta-cyan/50 hover:bg-vanta-gray/60",
              )}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-vanta-cyan/10 text-vanta-cyan">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-vanta-light">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vanta-light/60">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}