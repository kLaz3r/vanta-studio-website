"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { goalsSchema, type GoalsFormValues } from "~/lib/schemas/quote-wizard";
import { FormTextarea } from "~/components/forms/quote-wizard/form-textarea";

interface StepGoalsProps {
  onNext: (data: GoalsFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<GoalsFormValues>;
}

export function StepGoals({ onNext, onBack, defaultValues }: StepGoalsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GoalsFormValues>({
    resolver: zodResolver(goalsSchema),
    defaultValues: {
      goals: defaultValues.goals ?? "",
      challenges: defaultValues.challenges ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-vanta-light">Obiective</h2>
        <p className="mt-1 text-sm text-vanta-light/60">
          Ce vrei să realizezi prin acest proiect?
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-5">
        <FormTextarea
          id="goals"
          label="Obiectivele proiectului"
          required
          rows={4}
          placeholder="De exemplu: creșterea vizibilității brandului, un website modern, materiale pentru campanii..."
          error={errors.goals?.message}
          {...register("goals")}
        />

        <FormTextarea
          id="challenges"
          label="Provocări curente"
          rows={3}
          placeholder="Ce probleme sau provocări întâmpini în prezent?"
          error={errors.challenges?.message}
          {...register("challenges")}
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
