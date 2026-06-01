"use client";

import { useQuoteWizardStore } from "~/stores/quote-wizard";
import { buildMailtoUrl } from "~/lib/mailto";
import { Mail } from "lucide-react";

export function StepReview() {
  const { data, setStep } = useQuoteWizardStore();

  const handleSend = () => {
    const url = buildMailtoUrl(data);
    window.location.href = url;
  };

  const sections = [
    {
      title: "Informații de contact",
      items: [
        { label: "Nume", value: data.fullName },
        { label: "Email", value: data.email },
        { label: "Telefon", value: data.phone || "-" },
        { label: "Companie", value: data.company },
        { label: "Website", value: data.website || "-" },
        { label: "Social Media", value: data.social || "-" },
      ],
    },
    {
      title: "Afacere",
      items: [
        { label: "Industrie", value: data.industry || "-" },
        { label: "Vechime", value: data.businessAge || "-" },
        { label: "Descriere", value: data.businessDescription || "-" },
      ],
    },
    {
      title: "Servicii",
      items: [
        {
          label: "Servicii solicitate",
          value: data.services.length > 0 ? data.services.join(", ") : "-",
        },
        { label: "Serviciu principal", value: data.mainService || "-" },
      ],
    },
    {
      title: "Active existente",
      items: [
        {
          label: "Branding existent",
          value:
            data.brandingStatus === "yes"
              ? "Da"
              : data.brandingStatus === "partial"
                ? "Parțial"
                : "Nu",
        },
        ...(data.brandingStatus !== "no"
          ? [
              {
                label: "Logo existent",
                value: data.existingLogo ? "Da" : "Nu",
              },
              {
                label: "Brand guidelines",
                value: data.brandGuidelines ? "Da" : "Nu",
              },
              {
                label: "Fișiere sursă",
                value: data.sourceFiles ? "Da" : "Nu",
              },
            ]
          : []),
        {
          label: "Materiale existente",
          value:
            data.existingMaterials.length > 0
              ? data.existingMaterials.join(", ")
              : "-",
        },
      ],
    },
    {
      title: "Obiective",
      items: [
        { label: "Obiective", value: data.goals || "-" },
        {
          label: "Provocări",
          value: data.challenges || "-",
        },
      ],
    },
    {
      title: "Buget & Timeline",
      items: [
        { label: "Buget", value: data.budget || "-" },
        { label: "Start", value: data.startDate || "-" },
        { label: "Deadline", value: data.deadline || "-" },
      ],
    },
    {
      title: "Referințe & Note",
      items: [
        { label: "Referințe", value: data.references || "-" },
        { label: "Note", value: data.notes || "-" },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-vanta-light">
          Verifică informațiile
        </h2>
        <p className="mt-1 text-sm text-vanta-light/60">
          Asigură-te că toate datele sunt corecte înainte de a trimite.
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vanta-cyan">
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div key={item.label} className="text-sm">
                  <span className="text-vanta-light/50">{item.label}:</span>{" "}
                  <span className="text-vanta-light/80">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep(6)}
          className="inline-flex h-13 cursor-pointer items-center justify-center rounded-xl border border-vanta-cyan/30 bg-white/[0.03] px-7 text-base font-medium text-vanta-cyan backdrop-blur-xl transition-all duration-300 hover:border-vanta-cyan/50 hover:bg-white/[0.07] hover:shadow-[0_4px_20px_rgba(34,211,238,0.06)] active:scale-[0.97] select-none"
        >
          Înapoi
        </button>
        <button
          type="button"
          onClick={handleSend}
          className="inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-vanta-cyan to-vanta-purple px-7 text-base font-medium text-white transition-all duration-300 hover:from-vanta-cyan/90 hover:to-vanta-purple/90 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)] active:scale-[0.97] select-none"
        >
          <Mail className="h-4 w-4" />
          Deschide Emailul
        </button>
      </div>
    </div>
  );
}
