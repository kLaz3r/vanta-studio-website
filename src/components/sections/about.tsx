export function AboutSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="orb-cyan -left-40 top-0 h-96 w-96" />
      <div className="orb-purple -bottom-40 -right-40 h-80 w-80" />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
            Design construit pentru <span className="gradient-text">comunicare modernă</span>
          </h2>
          <div className="accent-line" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-vanta-light/60">
            <p>
              VANTA Studio combină graphic design-ul contemporan cu direcția
              digitală modernă pentru a crea branduri clare, coerente și
              relevante vizual.
            </p>
            <p>
              De la branding și materiale promoționale până la website-uri și
              conținut digital, focusul nostru este construirea unei imagini
              profesioniste și consistente pe toate canalele de comunicare.
            </p>
          </div>
        </div>

        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-vanta-cyan/[0.04] to-vanta-purple/[0.04] backdrop-blur-2xl">
          <div className="orb-cyan-bright h-48 w-48" />
          <p className="relative text-sm text-vanta-light/20">
            Creative workspace — imagine
          </p>
        </div>
      </div>
    </section>
  );
}