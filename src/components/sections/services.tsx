import Link from "next/link";
import { Palette, Layout, Globe, Clapperboard } from "lucide-react";
import { FadeInView } from "~/components/ui/fade-in-view";

const SERVICES = [
  {
    title: "Branding & Identitate",
    description:
      "Logo, paletă cromatică, fonturi și reguli clare — construim de la zero identitatea vizuală a business-ului tău.",
    href: "/branding",
    Icon: Palette,
    gradient: "from-vanta-cyan/20 to-vanta-purple/20",
    iconColor: "text-vanta-cyan",
  },
  {
    title: "Graphic Design",
    description:
      "Flyere, afișe, bannere, meniuri, packaging — orice material grafic de care ai nevoie, pregătit pentru print sau social media.",
    href: "/graphic-design",
    Icon: Layout,
    gradient: "from-vanta-purple/20 to-vanta-cyan/20",
    iconColor: "text-vanta-purple",
  },
  {
    title: "Web Design",
    description:
      "Site-uri rapide, plăcute și făcute să convertească vizitatori în clienți. Fiecare detaliu contează.",
    href: "/web-design",
    Icon: Globe,
    gradient: "from-vanta-cyan/20 to-vanta-purple/20",
    iconColor: "text-vanta-cyan",
  },
  {
    title: "Motion & Video",
    description:
      "Reels, motion graphics, ads video și conținut scurt care oprește scroll-ul și transmite exact ce trebuie.",
    href: "/motion-video",
    Icon: Clapperboard,
    gradient: "from-vanta-purple/20 to-vanta-cyan/20",
    iconColor: "text-vanta-purple",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView direction="up">
          <div className="text-center">
            <h2 className="text-vanta-light text-3xl font-bold tracking-tight sm:text-4xl">
              Servicii de{" "}
              <span className="gradient-text">design și branding</span>
            </h2>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-vanta-light/60 mx-auto mt-4 max-w-2xl text-base leading-relaxed">
              De la strategia de brand și logo până la website-ul și materialele
              tale printate — tot ce ai nevoie pentru o imagine profesionistă,
              într-un singur loc.
            </p>
          </div>
        </FadeInView>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(
            ({ title, description, href, gradient, Icon, iconColor }, i) => (
              <FadeInView key={title} direction="up" delay={i * 0.1}>
                <Link
                  href={href}
                  className="group hover:border-vanta-cyan/25 block rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-2xl transition-all duration-300 hover:from-white/[0.07] hover:to-white/[0.03] hover:shadow-[0_8px_40px_rgba(34,211,238,0.08)]"
                >
                  <div
                    className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} ${iconColor}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-vanta-light group-hover:text-vanta-cyan/90 text-lg font-semibold transition-colors">
                    {title}
                  </h3>
                  <p className="text-vanta-light/50 mt-2 text-sm leading-relaxed">
                    {description}
                  </p>
                </Link>
              </FadeInView>
            ),
          )}
        </div>

        <FadeInView direction="up" delay={0.4}>
          <p className="text-vanta-light/40 mt-12 text-center text-sm leading-relaxed">
            Toate serviciile noastre sunt gândite atât pentru mediul digital,
            cât și pentru print. Fiecare material este livrat în formatele de
            care ai nevoie, fără bătăi de cap.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
