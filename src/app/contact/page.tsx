import type { Metadata } from "next";
import { FaqSection } from "~/components/sections/faq";
import { WizardContainer } from "~/components/forms/quote-wizard/wizard-container";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Solicită o ofertă personalizată pentru branding, graphic design și comunicare vizuală. Completează wizard-ul rapid și primești un email pre-completat.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 pt-16 pb-12 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-vanta-light text-4xl font-bold tracking-tight sm:text-5xl">
              Solicită o{" "}
              <span className="gradient-text">ofertă personalizată</span>
            </h1>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-vanta-light/60 mx-auto mt-6 max-w-xl text-base leading-relaxed">
              Completează pașii de mai jos și vei primi un email pre-completat
              pe care îl poți trimite direct. Fără call-uri preliminare — doar
              informațiile esențiale pentru o ofertă exactă.
            </p>
          </div>
        </FadeInView>
      </section>
      <WizardContainer />
      <FaqSection />
    </div>
  );
}
