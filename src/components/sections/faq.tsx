"use client";

import { type FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { FadeInView } from "~/components/ui/fade-in-view";

const FAQ_ITEMS = [
  {
    question: "Ce servicii oferă VANTA Studio?",
    answer:
      "Oferim branding (logo, identitate vizuală, ghid de brand), graphic design (flyere, afișe, bannere, meniuri, packaging), web design (site-uri moderne, rapide, optimizate) și conținut video (reels, motion graphics, reclame).",
  },
  {
    question: "Realizați și print?",
    answer:
      "Nu facem producție tipografică internă, dar toate materialele sunt pregătite profesional pentru tipar — fișiere corect configurate, cu bleed, CMYK și crop marks. Le trimiți direct la tipografie.",
  },
  {
    question: "Lucrați doar cu firme din Bacău?",
    answer:
      "Deloc. Colaborăm cu business-uri din toată țara, fie remote, fie la fața locului dacă ești prin Bacău. Totul se poate rezolva online fără probleme.",
  },
  {
    question: "Cum începe colaborarea?",
    answer:
      "Discutăm pe scurt ce ai nevoie, stabilim direcția creativă și îți trimitem o ofertă personalizată. Dacă ești de acord, începem treaba. Fără contracte complicate.",
  },
  {
    question: "Ce informații sunt necesare pentru ofertă?",
    answer:
      "În funcție de ce ai nevoie, ajută să știm: ce tip de business ai, care sunt obiectivele proiectului, ce servicii te interesează, un deadline orientativ și, dacă ai, câteva exemple de vizualuri care îți plac.",
  },
  {
    question: "Cât durează un proiect de branding?",
    answer:
      "Pentru un pachet complet de branding (logo, identitate vizuală, ghid de brand), în general lucrăm în 2-4 săptămâni. Un logo simplu poate fi gata și într-o săptămână.",
  },
  {
    question: "Cât costă un website?",
    answer:
      "Depinde de complexitate. Un site de prezentare cu 3-5 pagini pornește de la prețuri accesibile, iar un site mai complex cu funcționalități custom se discută individual. Completează wizard-ul și îți dăm un răspuns exact.",
  },
];

export const FaqSection: FC = () => (
  <section className="px-6 py-24">
    <FadeInView direction="up">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-vanta-light text-3xl font-bold tracking-tight sm:text-4xl">
          Întrebări frecvente
        </h2>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map(({ question, answer }, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </FadeInView>
  </section>
);
