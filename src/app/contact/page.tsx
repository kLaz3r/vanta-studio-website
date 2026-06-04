import type { Metadata } from "next";
import { FaqSection } from "~/components/sections/faq";
import { WizardContainer } from "~/components/forms/quote-wizard/wizard-container";
import { FadeInView } from "~/components/ui/fade-in-view";
import { JsonLd } from "~/components/layout/json-ld";
import { breadcrumbSchema, faqPageSchema } from "~/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact — Solicită o Ofertă Personalizată",
  description:
    "Contactează VANTA Studio pentru o ofertă personalizată de branding, graphic design, web design sau conținut video. Completează wizard-ul rapid și primești un email pre-completat.",
  openGraph: {
    title: "Contact — Solicită o Ofertă Personalizată | VANTA Studio",
    description:
      "Contactează VANTA Studio pentru o ofertă personalizată de branding, graphic design, web design sau conținut video.",
    url: "https://vantastudio.ro/contact",
  },
  alternates: {
    canonical: "https://vantastudio.ro/contact",
  },
};

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const faqSchema = faqPageSchema([
    {
      question: "Ce servicii oferă VANTA Studio?",
      answer:
        "Oferim servicii de branding, graphic design, materiale publicitare, web design și conținut vizual pentru mediul digital.",
    },
    {
      question: "Realizați și print?",
      answer:
        "Nu realizăm producție tipografică internă, însă toate materialele sunt pregătite profesional pentru print și producție.",
    },
    {
      question: "Lucrați doar cu firme din Bacău?",
      answer:
        "Nu. Colaborăm atât local, cât și remote, cu business-uri din toată țara.",
    },
  ]);

  return (
    <div className="pt-20">
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />
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
