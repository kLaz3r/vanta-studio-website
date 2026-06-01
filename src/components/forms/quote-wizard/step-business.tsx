"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  businessSchema,
  type BusinessFormValues,
} from "~/lib/schemas/quote-wizard";
import {
  INDUSTRIES,
  BUSINESS_AGES,
} from "~/stores/quote-wizard";
import { FormTextarea } from "~/components/forms/quote-wizard/form-textarea";
import { FormSelect } from "~/components/forms/quote-wizard/form-select";

interface StepBusinessProps {
  onNext: (data: BusinessFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<BusinessFormValues>;
}

export function StepBusiness({ onNext, onBack, defaultValues }: StepBusinessProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessFormValues>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      businessDescription: defaultValues.businessDescription ?? "",
      industry: defaultValues.industry ?? "",
      businessAge: defaultValues.businessAge ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-vanta-light">Despre afacerea ta</h2>
        <p className="mt-1 text-sm text-vanta-light/60">
          Ajută-ne să înțelegem mai bine business-ul tău.
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-5">
        <FormTextarea
          id="businessDescription"
          label="Ce face afacerea ta?"
          required
          rows={4}
          placeholder="Descrie pe scurt activitatea business-ului tău..."
          error={errors.businessDescription?.message}
          {...register("businessDescription")}
        />

        <FormSelect
          id="industry"
          label="Industrie"
          required
          placeholder="Selectează industria"
          error={errors.industry?.message}
          options={INDUSTRIES.map((i) => ({ value: i, label: i }))}
          {...register("industry")}
        />

        <FormSelect
          id="businessAge"
          label="Vechimea afacerii"
          required
          placeholder="Selectează vechimea"
          error={errors.businessAge?.message}
          options={BUSINESS_AGES.map((a) => ({ value: a, label: a }))}
          {...register("businessAge")}
        />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-13 cursor-pointer items-center justify-center rounded-xl border border-vanta-cyan/30 bg-white/[0.03] px-7 text-base font-medium text-vanta-cyan backdrop-blur-xl transition-all duration-300 hover:border-vanta-cyan/50 hover:bg-white/[0.07] hover:shadow-[0_4px_20px_rgba(34,211,238,0.06)] active:scale-[0.97] select-none"
        >
          Înapoi
        </button>
        <button
          type="submit"
          className="inline-flex h-13 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-vanta-cyan to-vanta-purple px-7 text-base font-medium text-white transition-all duration-300 hover:from-vanta-cyan/90 hover:to-vanta-purple/90 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)] active:scale-[0.97] select-none"
        >
          Continuă
        </button>
      </div>
    </form>
  );
}
