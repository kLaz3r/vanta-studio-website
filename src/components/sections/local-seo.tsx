import {
  PenTool,
  Layers,
  FileText,
  Megaphone,
  Share2,
  Globe,
  Printer,
  type LucideIcon,
} from "lucide-react";
import { FadeInView } from "~/components/ui/fade-in-view";

const SERVICES: { title: string; Icon: LucideIcon; tint: string }[] = [
  {
    title: "Logo design",
    Icon: PenTool,
    tint: "from-vanta-cyan/20 to-vanta-cyan/5",
  },
  {
    title: "Identitate vizuală",
    Icon: Layers,
    tint: "from-vanta-purple/20 to-vanta-purple/5",
  },
  {
    title: "Materiale publicitare",
    Icon: FileText,
    tint: "from-vanta-cyan/20 to-vanta-cyan/5",
  },
  {
    title: "Reclame digitale",
    Icon: Megaphone,
    tint: "from-vanta-purple/20 to-vanta-purple/5",
  },
  {
    title: "Social media visuals",
    Icon: Share2,
    tint: "from-vanta-cyan/20 to-vanta-cyan/5",
  },
  {
    title: "Website-uri moderne",
    Icon: Globe,
    tint: "from-vanta-purple/20 to-vanta-purple/5",
  },
  {
    title: "Materiale pentru producție tipografică",
    Icon: Printer,
    tint: "from-vanta-cyan/20 to-vanta-cyan/5",
  },
];

export function LocalSeoSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="orb-cyan -top-32 -left-32 h-96 w-96 opacity-60" />
      <div className="orb-purple -right-32 -bottom-32 h-96 w-96 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeInView direction="up">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="bg-vanta-cyan/70 absolute inline-flex h-full w-full animate-ping rounded-full" />
                <span className="bg-vanta-cyan relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="text-vanta-light/70 text-xs tracking-wide">
                Studio local · Bacău
              </span>
            </div>

            <h2 className="text-vanta-light mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Graphic Design &amp; Comunicare Vizuală{" "}
              <span className="gradient-text">în Bacău</span>
            </h2>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-vanta-light/60 mx-auto mt-5 max-w-2xl text-base leading-relaxed">
              VANTA Studio oferă servicii de branding, graphic design și
              comunicare vizuală pentru business-uri din Bacău și din întreaga
              țară.
            </p>
          </div>
        </FadeInView>

        <FadeInView direction="up" delay={0.15}>
          <div className="glass-card-tint relative mt-14 overflow-hidden rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="from-vanta-cyan/[0.05] to-vanta-purple/[0.05] absolute inset-0 bg-gradient-to-br" />
            <div className="bg-vanta-cyan/10 absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl" />
            <div className="bg-vanta-purple/10 absolute -bottom-20 -left-20 h-48 w-48 rounded-full blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-vanta-light/40 text-xs font-medium tracking-[0.2em] uppercase">
                  Ce realizăm
                </p>
                <h3 className="text-vanta-light mt-3 text-2xl leading-snug font-semibold sm:text-3xl">
                  Servicii complete, de la concept până la livrare.
                </h3>
                <p className="text-vanta-light/60 mt-5 text-base leading-relaxed">
                  Lucrăm cu focus pe{" "}
                  <span className="text-vanta-light/90">claritate vizuală</span>
                  , <span className="text-vanta-light/90">consistență</span> și
                  adaptare la mediul digital modern — pentru branduri care vor
                  să comunice profesional, online și offline.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-vanta-cyan h-1.5 w-1.5 rounded-full" />
                    <span className="text-vanta-light/70 text-xs">
                      Branding
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-vanta-purple h-1.5 w-1.5 rounded-full" />
                    <span className="text-vanta-light/70 text-xs">Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-vanta-cyan h-1.5 w-1.5 rounded-full" />
                    <span className="text-vanta-light/70 text-xs">Web</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-vanta-purple h-1.5 w-1.5 rounded-full" />
                    <span className="text-vanta-light/70 text-xs">Print</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICES.map(({ title, Icon, tint }, i) => (
                    <FadeInView
                      key={title}
                      direction="up"
                      delay={0.2 + i * 0.05}
                    >
                      <div className="group hover:border-vanta-cyan/25 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[0_4px_24px_rgba(34,211,238,0.08)]">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${tint} transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className="text-vanta-cyan h-5 w-5" />
                        </div>
                        <span className="text-vanta-light/90 text-sm font-medium">
                          {title}
                        </span>
                      </div>
                    </FadeInView>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
