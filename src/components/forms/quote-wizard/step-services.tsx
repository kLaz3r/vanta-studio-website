"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  servicesSchema,
  type ServicesFormValues,
} from "~/lib/schemas/quote-wizard";
import { SERVICE_OPTIONS } from "~/stores/quote-wizard";
import { FormSelect } from "~/components/forms/quote-wizard/form-select";
import { cn } from "~/lib/cn";

interface StepServicesProps {
  onNext: (data: ServicesFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<ServicesFormValues>;
}

export function StepServices({
  onNext,
  onBack,
  defaultValues,
}: StepServicesProps) {
  const [selected, setSelected] = useState<string[]>(
    defaultValues.services ?? [],
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ServicesFormValues>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      services: defaultValues.services ?? [],
      mainService: defaultValues.mainService ?? "",
    },
  });

  const toggleService = (service: string) => {
    const next = selected.includes(service)
      ? selected.filter((s) => s !== service)
      : [...selected, service];
    setSelected(next);
    setValue("services", next, { shouldValidate: true });

    if (!next.includes(getValues("mainService") ?? "")) {
      setValue("mainService", "", { shouldValidate: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-vanta-light text-2xl font-bold">Servicii dorite</h2>
        <p className="text-vanta-light/60 mt-1 text-sm">
          Selectează serviciile de care ai nevoie.
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-vanta-light/80 mb-1.5 block text-sm font-medium">
            Servicii
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_OPTIONS.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={cn(
                  "cursor-pointer rounded-xl border px-3 py-2.5 text-left text-sm transition-all duration-200",
                  selected.includes(service)
                    ? "border-vanta-cyan/50 bg-vanta-cyan/10 text-vanta-cyan"
                    : "text-vanta-light/70 border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15]",
                )}
              >
                {service}
              </button>
            ))}
          </div>
          <Controller control={control} name="services" render={() => <></>} />
        </div>

        <FormSelect
          id="mainService"
          label="Serviciul principal"
          required
          placeholder="Selectează serviciul principal"
          error={errors.mainService?.message}
          options={SERVICE_OPTIONS.map((s) => ({ value: s, label: s }))}
          {...register("mainService")}
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
