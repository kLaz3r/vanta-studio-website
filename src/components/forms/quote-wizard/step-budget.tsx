"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { budgetSchema, type BudgetFormValues } from "~/lib/schemas/quote-wizard";
import { BUDGET_OPTIONS, START_DATE_OPTIONS } from "~/stores/quote-wizard";
import { FormSelect } from "~/components/forms/quote-wizard/form-select";
import { FormInput } from "~/components/forms/quote-wizard/form-input";

interface StepBudgetProps {
  onNext: (data: BudgetFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<BudgetFormValues>;
}

export function StepBudget({ onNext, onBack, defaultValues }: StepBudgetProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetFormValues>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      budget: defaultValues.budget ?? "",
      startDate: defaultValues.startDate ?? "",
      deadline: defaultValues.deadline ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-vanta-light">Buget &amp; Timeline</h2>
        <p className="mt-1 text-sm text-vanta-light/60">
          Ajută-ne să înțelegem orizontul tău de timp și bugetul estimativ.
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-5">
        <FormSelect
          id="budget"
          label="Buget estimativ"
          required
          placeholder="Selectează o variantă"
          error={errors.budget?.message}
          options={BUDGET_OPTIONS.map((b) => ({ value: b, label: b }))}
          {...register("budget")}
        />

        <FormSelect
          id="startDate"
          label="Dorit pentru începerea proiectului"
          required
          placeholder="Selectează o variantă"
          error={errors.startDate?.message}
          options={START_DATE_OPTIONS.map((d) => ({ value: d, label: d }))}
          {...register("startDate")}
        />

        <FormInput
          id="deadline"
          type="date"
          label="Deadline"
          error={errors.deadline?.message}
          {...register("deadline")}
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
