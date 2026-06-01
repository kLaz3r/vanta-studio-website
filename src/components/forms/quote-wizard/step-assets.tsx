"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assetsSchema,
  type AssetsFormValues,
} from "~/lib/schemas/quote-wizard";
import { EXISTING_MATERIAL_OPTIONS } from "~/stores/quote-wizard";
import { cn } from "~/lib/cn";

interface StepAssetsProps {
  onNext: (data: AssetsFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<AssetsFormValues>;
}

export function StepAssets({ onNext, onBack, defaultValues }: StepAssetsProps) {
  const { register, handleSubmit, watch } = useForm<AssetsFormValues>({
    resolver: zodResolver(assetsSchema),
    defaultValues: {
      brandingStatus: defaultValues.brandingStatus ?? "no",
      existingLogo: defaultValues.existingLogo ?? false,
      brandGuidelines: defaultValues.brandGuidelines ?? false,
      sourceFiles: defaultValues.sourceFiles ?? false,
      existingMaterials: defaultValues.existingMaterials ?? [],
    },
  });

  const brandingStatus = watch("brandingStatus");
  const showBrandingDetails =
    brandingStatus === "yes" || brandingStatus === "partial";

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-vanta-light text-2xl font-bold">
          Active existente
        </h2>
        <p className="text-vanta-light/60 mt-1 text-sm">Ce ai deja pregătit?</p>
        <div className="accent-line" />
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-vanta-light/80 mb-3 block text-sm font-medium">
            Ai branding existent?
          </label>
          <div className="flex gap-3">
            {(["yes", "partial", "no"] as const).map((value) => (
              <label
                key={value}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all duration-200",
                  brandingStatus === value
                    ? "border-vanta-cyan/50 bg-vanta-cyan/10 text-vanta-cyan"
                    : "text-vanta-light/70 border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15]",
                )}
              >
                <input
                  type="radio"
                  value={value}
                  className="sr-only"
                  {...register("brandingStatus")}
                />
                {value === "yes"
                  ? "Da"
                  : value === "partial"
                    ? "Parțial"
                    : "Nu"}
              </label>
            ))}
          </div>
        </div>

        {showBrandingDetails && (
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="text-vanta-light/80 mb-3 text-sm font-medium">
              Ce ai la dispoziție?
            </p>
            <div className="space-y-2">
              {[
                { id: "existingLogo", label: "Logo existent" },
                { id: "brandGuidelines", label: "Brand guidelines" },
                { id: "sourceFiles", label: "Fișiere sursă" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  className="text-vanta-light/70 flex cursor-pointer items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    className="text-vanta-cyan accent-vanta-cyan h-4 w-4 rounded border-white/[0.08] bg-white/[0.03]"
                    {...register(
                      id as "existingLogo" | "brandGuidelines" | "sourceFiles",
                    )}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="text-vanta-light/80 mb-3 block text-sm font-medium">
            Materiale existente
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {EXISTING_MATERIAL_OPTIONS.map((material) => (
              <label
                key={material}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-all duration-200",
                  "text-vanta-light/70 border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15]",
                )}
              >
                <input
                  type="checkbox"
                  value={material}
                  className="text-vanta-cyan accent-vanta-cyan h-4 w-4 rounded border-white/[0.08] bg-white/[0.03]"
                  {...register("existingMaterials")}
                />
                {material}
              </label>
            ))}
          </div>
        </div>
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
