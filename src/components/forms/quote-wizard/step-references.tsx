"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  referencesSchema,
  type ReferencesFormValues,
} from "~/lib/schemas/quote-wizard";
import { FormTextarea } from "~/components/forms/quote-wizard/form-textarea";

interface StepReferencesProps {
  onNext: (data: ReferencesFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<ReferencesFormValues>;
}

export function StepReferences({
  onNext,
  onBack,
  defaultValues,
}: StepReferencesProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReferencesFormValues>({
    resolver: zodResolver(referencesSchema),
    defaultValues: {
      references: defaultValues.references ?? "",
      notes: defaultValues.notes ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-vanta-light text-2xl font-bold">
          Referințe &amp; Informații suplimentare
        </h2>
        <p className="text-vanta-light/60 mt-1 text-sm">
          Orice detaliu care ne poate ajuta să înțelegem mai bine ce îți
          dorești.
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-5">
        <FormTextarea
          id="references"
          label="Referințe"
          rows={3}
          placeholder="https://example.com&#10;https://another-example.com"
          error={errors.references?.message}
          {...register("references")}
        />

        <FormTextarea
          id="notes"
          label="Informații suplimentare"
          rows={4}
          placeholder="Orice altceva consideri relevant pentru proiect..."
          error={errors.notes?.message}
          {...register("notes")}
        />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="border-vanta-cyan/30 text-vanta-cyan hover:border-vanta-cyan/50 inline-flex h-13 cursor-pointer items-center justify-center rounded-xl border bg-white/[0.03] px-7 text-base font-medium backdrop-blur-xl transition-all duration-300 select-none hover:bg-white/[0.07] hover:shadow-[0_4px_20px_rgba(34,211,238,0.06)] active:scale-[0.97]"
        >
          Înapoi
        </button>
        <button
          type="submit"
          className="from-vanta-cyan to-vanta-purple hover:from-vanta-cyan/90 hover:to-vanta-purple/90 inline-flex h-13 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r px-7 text-base font-medium text-white transition-all duration-300 select-none hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)] active:scale-[0.97]"
        >
          Continuă
        </button>
      </div>
    </form>
  );
}
