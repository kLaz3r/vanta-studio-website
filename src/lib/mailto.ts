import type { WizardData } from "~/stores/quote-wizard";

const RECIPIENT = "contact@vantastudio.ro";

function formatList(items: string[]): string {
  if (items.length === 0) return "-";
  return items.map((item) => `• ${item}`).join("\n");
}

function formatBool(value: boolean, label: string): string {
  return value ? `✓ ${label}` : "";
}

export function buildMailtoUrl(data: WizardData): string {
  const subject = `Cerere ofertă - ${data.mainService} - ${data.company}`;

  const brandingDetails = [
    data.brandingStatus !== "no" && "\nDetalii branding:",
    data.existingLogo && formatBool(data.existingLogo, "Logo existent"),
    data.brandGuidelines &&
      formatBool(data.brandGuidelines, "Brand guidelines"),
    data.sourceFiles && formatBool(data.sourceFiles, "Fișiere sursă"),
  ]
    .filter(Boolean)
    .join("\n");

  const body = [
    "Salut,",
    "",
    "Aș dori să solicit o ofertă pentru următorul proiect.",
    "",
    "────────────────────",
    "",
    "DATE CONTACT",
    "",
    `Nume:\n${data.fullName}`,
    "",
    `Email:\n${data.email}`,
    "",
    `Telefon:\n${data.phone || "-"}`,
    "",
    `Companie:\n${data.company}`,
    "",
    `Website:\n${data.website || "-"}`,
    "",
    `Social Media:\n${data.social || "-"}`,
    "",
    "────────────────────",
    "",
    "BUSINESS",
    "",
    `Industrie:\n${data.industry || "-"}`,
    "",
    `Vechime:\n${data.businessAge || "-"}`,
    "",
    `Descriere:\n${data.businessDescription || "-"}`,
    "",
    "────────────────────",
    "",
    "SERVICII",
    "",
    `Servicii solicitate:\n${formatList(data.services)}`,
    "",
    `Serviciu principal:\n${data.mainService}`,
    "",
    "────────────────────",
    "",
    "ACTIVE EXISTENTE",
    "",
    `Branding:\n${data.brandingStatus === "yes" ? "Da" : data.brandingStatus === "partial" ? "Parțial" : "Nu"}`,
    brandingDetails || "",
    "",
    `Materiale existente:\n${formatList(data.existingMaterials)}`,
    "",
    "────────────────────",
    "",
    "OBIECTIVE",
    "",
    data.goals || "-",
    "",
    "────────────────────",
    "",
    "PROVOCĂRI",
    "",
    data.challenges || "-",
    "",
    "────────────────────",
    "",
    "BUGET",
    "",
    data.budget || "-",
    "",
    "────────────────────",
    "",
    "TIMELINE",
    "",
    `Start:\n${data.startDate || "-"}`,
    "",
    `Deadline:\n${data.deadline || "-"}`,
    "",
    "────────────────────",
    "",
    "REFERINȚE",
    "",
    data.references || "-",
    "",
    "────────────────────",
    "",
    "INFORMAȚII SUPLIMENTARE",
    "",
    data.notes || "-",
    "",
    "Mulțumesc!",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${RECIPIENT}?${params.toString()}`;
}
