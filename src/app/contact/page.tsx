import type { Metadata } from "next";
import { FaqSection } from "~/components/sections/faq";
import { ContactFormSection } from "~/components/forms/contact-form";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ai un proiect în minte? Contactează VANTA Studio pentru branding, graphic design și comunicare vizuală.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 pb-12 pt-16 text-center">
        <FadeInView direction="up">
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
              Întrebări frecvente &amp;{" "}
              <span className="gradient-text">Contact</span>
            </h1>
            <div className="mt-3 flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-vanta-light/60">
              Înainte să începem colaborarea, am răspuns mai jos la câteva dintre
              cele mai frecvente întrebări. Dacă vrei să discutăm despre proiectul
              tău, completează formularul de contact.
            </p>
          </div>
        </FadeInView>
      </section>
      <FaqSection />
      <FadeInView direction="up">
        <ContactFormSection />
      </FadeInView>
    </div>
  );
}