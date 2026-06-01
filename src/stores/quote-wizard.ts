import { create } from "zustand";

export const INDUSTRIES = [
  "Restaurant / HoReCa",
  "Retail",
  "Beauty",
  "Medical",
  "Real Estate",
  "Professional Services",
  "E-commerce",
  "Technology",
  "Education",
  "Other",
] as const;

export const BUSINESS_AGES = [
  "Not launched yet",
  "Under 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
] as const;

export const SERVICE_OPTIONS = [
  "Branding",
  "Logo Design",
  "Graphic Design",
  "Social Media Design",
  "Print Materials",
  "Packaging",
  "Web Design",
  "Website Development",
  "Motion Graphics",
  "Video Editing",
] as const;

export const BUDGET_OPTIONS = [
  "Under €500",
  "€500–1000",
  "€1000–2500",
  "€2500–5000",
  "€5000+",
  "Not sure",
] as const;

export const START_DATE_OPTIONS = [
  "Immediately",
  "Within 30 days",
  "Within 3 months",
  "Flexible",
] as const;

export const EXISTING_MATERIAL_OPTIONS = [
  "Website",
  "Social Media",
  "Print Materials",
  "Brand Assets",
  "None",
] as const;

export interface WizardData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  social: string;
  businessDescription: string;
  industry: string;
  businessAge: string;
  services: string[];
  mainService: string;
  brandingStatus: "yes" | "partial" | "no";
  existingLogo: boolean;
  brandGuidelines: boolean;
  sourceFiles: boolean;
  existingMaterials: string[];
  goals: string;
  challenges: string;
  budget: string;
  startDate: string;
  deadline: string;
  references: string;
  notes: string;
}

const defaultData: WizardData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  social: "",
  businessDescription: "",
  industry: "",
  businessAge: "",
  services: [],
  mainService: "",
  brandingStatus: "no",
  existingLogo: false,
  brandGuidelines: false,
  sourceFiles: false,
  existingMaterials: [],
  goals: "",
  challenges: "",
  budget: "",
  startDate: "",
  deadline: "",
  references: "",
  notes: "",
};

interface WizardStore {
  currentStep: number;
  data: WizardData;
  setStep: (step: number) => void;
  updateData: (partial: Partial<WizardData>) => void;
  reset: () => void;
}

export const useQuoteWizardStore = create<WizardStore>((set) => ({
  currentStep: 0,
  data: { ...defaultData },
  setStep: (step) => set({ currentStep: step }),
  updateData: (partial) =>
    set((state) => ({ data: { ...state.data, ...partial } })),
  reset: () => set({ currentStep: 0, data: { ...defaultData } }),
}));
