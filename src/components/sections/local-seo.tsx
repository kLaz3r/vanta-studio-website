import { FadeInView } from "~/components/ui/fade-in-view";

export function LocalSeoSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <FadeInView direction="up">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
            Graphic Design &amp; Comunicare Vizuală{" "}
            <span className="gradient-text">în Bacău</span>
          </h2>
          <div className="accent-line" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-vanta-light/60">
            <p>
              VANTA Studio oferă servicii de branding, graphic design și
              comunicare vizuală pentru business-uri din Bacău și din întreaga
              țară.
            </p>
            <p>Realizăm:</p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 marker:text-vanta-cyan/60">
              <li>logo design</li>
              <li>identitate vizuală</li>
              <li>materiale publicitare</li>
              <li>reclame digitale</li>
              <li>social media visuals</li>
              <li>website-uri moderne</li>
              <li>materiale pregătite pentru producție tipografică</li>
            </ul>
            <p>
              Toate proiectele sunt dezvoltate cu focus pe claritate vizuală,
              consistență și adaptare la mediul digital modern.
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}