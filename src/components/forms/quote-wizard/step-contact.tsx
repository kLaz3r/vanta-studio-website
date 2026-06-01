"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "~/lib/schemas/quote-wizard";
import { FormInput } from "~/components/forms/quote-wizard/form-input";

interface StepContactProps {
  onNext: (data: ContactFormValues) => void;
  onBack: () => void;
  defaultValues: Partial<ContactFormValues>;
  isFirst: boolean;
}

export function StepContact({ onNext, onBack: _, defaultValues, isFirst: _isFirst }: StepContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: defaultValues.fullName ?? "",
      email: defaultValues.email ?? "",
      phone: defaultValues.phone ?? "",
      company: defaultValues.company ?? "",
      website: defaultValues.website ?? "",
      social: defaultValues.social ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-vanta-light">Informații de contact</h2>
        <p className="mt-1 text-sm text-vanta-light/60">
            Cum te putem contacta?
        </p>
        <div className="accent-line" />
      </div>

      <div className="space-y-5">
        <FormInput
          id="fullName"
          label="Nume complet"
          required
          placeholder="Numele tău"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            id="email"
            type="email"
            label="Email"
            required
            placeholder="email@exemplu.ro"
            error={errors.email?.message}
            {...register("email")}
          />
          <FormInput
            id="phone"
            type="tel"
            label="Telefon"
            placeholder="+40 7xx xxx xxx"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <FormInput
          id="company"
          label="Companie / Brand"
          required
          placeholder="Numele afacerii"
          error={errors.company?.message}
          {...register("company")}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            id="website"
            type="url"
            label="Website"
            placeholder="https://exemplu.ro"
            error={errors.website?.message}
            {...register("website")}
          />
          <FormInput
            id="social"
            label="Social Media"
            placeholder="Instagram / LinkedIn"
            error={errors.social?.message}
            {...register("social")}
          />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div />
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
