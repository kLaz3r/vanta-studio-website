import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, "Numele este obligatoriu"),
  email: z.string().email("Adresa de email nu este validă"),
  phone: z.string().optional(),
  company: z.string().min(1, "Compania / Brandul este obligatoriu"),
  website: z.string().optional(),
  social: z.string().optional(),
});

export const businessSchema = z.object({
  businessDescription: z.string().min(1, "Descrierea afacerii este obligatorie"),
  industry: z.string().min(1, "Selectează industria"),
  businessAge: z.string().min(1, "Selectează vechimea afacerii"),
});

export const servicesSchema = z.object({
  services: z.array(z.string()),
  mainService: z.string().min(1, "Selectează serviciul principal"),
});

export const assetsSchema = z.object({
  brandingStatus: z.enum(["yes", "partial", "no"]),
  existingLogo: z.boolean().optional(),
  brandGuidelines: z.boolean().optional(),
  sourceFiles: z.boolean().optional(),
  existingMaterials: z.array(z.string()),
});

export const goalsSchema = z.object({
  goals: z.string().min(1, "Obiectivele proiectului sunt obligatorii"),
  challenges: z.string().optional(),
});

export const budgetSchema = z.object({
  budget: z.string().min(1, "Selectează un buget"),
  startDate: z.string().min(1, "Selectează data de start dorită"),
  deadline: z.string().optional(),
});

export const referencesSchema = z.object({
  references: z.string().optional(),
  notes: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type BusinessFormValues = z.infer<typeof businessSchema>;
export type ServicesFormValues = z.infer<typeof servicesSchema>;
export type AssetsFormValues = z.infer<typeof assetsSchema>;
export type GoalsFormValues = z.infer<typeof goalsSchema>;
export type BudgetFormValues = z.infer<typeof budgetSchema>;
export type ReferencesFormValues = z.infer<typeof referencesSchema>;
