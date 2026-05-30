export function AboutSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
            Design construit pentru comunicare modernă
          </h2>
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

        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-vanta-gray bg-vanta-gray/30">
          <p className="text-sm text-vanta-light/20">
            Creative workspace — imagine
          </p>
        </div>
      </div>
    </section>
  );
}