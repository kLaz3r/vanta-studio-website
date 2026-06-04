import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pen, Layers, MessageCircle, LifeBuoy } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

const VALUES = [
  {
    title: "Design strategic",
    desc: "Fiecare element are un scop — nu doar arată bine, ci comunică exact ce trebuie.",
    icon: Pen,
  },
  {
    title: "Identitate coerentă",
    desc: "Construim sisteme vizuale unitare care funcționează pe orice canal media.",
    icon: Layers,
  },
  {
    title: "Colaborare directă",
    desc: "Transparență totală și comunicare constantă pe tot parcursul proiectului.",
    icon: MessageCircle,
  },
  {
    title: "Suport continuu",
    desc: "Rămânem alături de tine și după livrare, cu consultanță și ajustări.",
    icon: LifeBuoy,
  },
] as const;

const STATS = [
  { number: "3+", label: "ani de experiență" },
  { number: "50+", label: "proiecte finalizate" },
  { number: "95%", label: "clienți recomandă" },
] as const;

export function AboutSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <FadeInView direction="left" className="lg:col-span-2">
            <div className="from-vanta-dark via-vanta-dark to-vanta-gray relative mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="bg-vanta-cyan/8 absolute -top-20 -left-20 h-64 w-64 rounded-full blur-[120px]" />
              <div className="bg-vanta-purple/8 absolute -right-16 -bottom-16 h-52 w-52 rounded-full blur-[100px]" />
              <div className="bg-vanta-cyan/5 absolute top-1/3 left-1/3 h-32 w-32 rounded-full blur-[60px]" />

              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8">
                <div className="from-vanta-cyan/15 to-vanta-purple/15 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br shadow-[0_0_40px_rgba(34,211,238,0.06)] backdrop-blur-2xl">
                  <Image
                    src="/vanta-simple.svg"
                    alt="VANTA Studio"
                    width={80}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>

                <div className="text-center">
                  <p className="text-vanta-light/80 text-sm font-semibold">
                    VANTA STUDIO
                  </p>
                  <p className="text-vanta-light/30 mt-0.5 text-xs">
                    Branding &bull; Design &bull; Web
                  </p>
                </div>

                <div className="flex w-full gap-3">
                  <div className="from-vanta-cyan/30 to-vanta-purple/30 h-1.5 flex-1 rounded-full bg-gradient-to-r" />
                  <div className="h-1.5 flex-1 rounded-full bg-white/[0.04]" />
                  <div className="h-1.5 flex-1 rounded-full bg-white/[0.04]" />
                </div>

                <div className="bg-vanta-cyan/40 absolute top-6 right-8 h-2 w-2 rounded-full" />
                <div className="bg-vanta-purple/40 absolute bottom-8 left-8 h-2 w-2 rounded-full" />
                <div className="bg-vanta-cyan/25 absolute top-10 left-10 h-1.5 w-1.5 rounded-full" />
                <div className="bg-vanta-purple/25 absolute right-10 bottom-10 h-1.5 w-1.5 rounded-full" />
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="right" className="lg:col-span-3">
            <div>
              <h2 className="text-vanta-light text-3xl font-bold tracking-tight sm:text-4xl">
                Design construit pentru{" "}
                <span className="gradient-text">comunicare modernă</span>
              </h2>
              <div className="accent-line" />
              <p className="text-vanta-light/80 mt-6 max-w-xl text-base leading-relaxed">
                Nu facem doar design care arată bine — facem design care
                comunică. Fiecare alegere vizuală are un scop și contribuie la
                imaginea pe care business-ul tău o transmite.
              </p>
              <p className="text-vanta-light/60 mt-4 max-w-xl text-base leading-relaxed">
                Colaborăm direct cu tine, fără intermediari. De la logo și
                identitate până la website și materiale printate, totul este
                gândit să funcționeze împreună, pe orice canal.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:shadow-[0_0_32px_rgba(34,211,238,0.2)]"
                  asChild
                >
                  <Link href="/despre">
                    Vezi cum lucrăm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInView>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ title, desc, icon: Icon }, i) => (
            <FadeInView key={title} direction="up" delay={i * 0.08}>
              <div className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]">
                <div className="from-vanta-cyan/20 to-vanta-purple/20 mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-vanta-cyan h-4 w-4" />
                </div>
                <h4 className="text-vanta-light text-sm font-semibold">
                  {title}
                </h4>
                <p className="text-vanta-light/50 mt-1 text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {STATS.map(({ number, label }, i) => (
            <FadeInView key={label} direction="up" delay={0.2 + i * 0.08}>
              <div className="from-vanta-cyan/[0.04] to-vanta-purple/[0.04] rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6 text-center backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/[0.1]">
                <div className="gradient-text text-3xl font-bold tracking-tight">
                  {number}
                </div>
                <div className="text-vanta-light/50 mt-1.5 text-sm">
                  {label}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
