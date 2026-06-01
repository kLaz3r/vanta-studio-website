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
  {
    question: "Cum începe colaborarea?",
    answer:
      "Discutăm obiectivele proiectului, stabilim direcția creativă și revenim cu o ofertă personalizată.",
  },
  {
    question: "Ce informații sunt necesare pentru ofertă?",
    answer:
      "În funcție de proiect, avem nevoie de detalii precum: tipul business-ului, obiectivele proiectului, serviciile dorite, deadline estimativ, exemple vizuale preferate.",
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
