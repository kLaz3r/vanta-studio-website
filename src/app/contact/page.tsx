import type { Metadata } from "next";
import { FaqSection } from "~/components/sections/faq";
import { ContactFormSection } from "~/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ai un proiect în minte? Contactează VANTA Studio pentru branding, graphic design și comunicare vizuală.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-6 pt-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Întrebări frecvente &amp; Contact
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-vanta-light/60">
          Înainte să începem colaborarea, am răspuns mai jos la câteva dintre
          cele mai frecvente întrebări. Dacă vrei să discutăm despre proiectul
          tău, completează formularul de contact.
        </p>
      </div>
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}