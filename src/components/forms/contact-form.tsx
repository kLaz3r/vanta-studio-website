"use client";

import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/cn";

const contactSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  email: z.string().email("Adresa de email nu este validă"),
  phone: z.string().optional(),
  business: z.string().optional(),
  service: z.string().min(1, "Selectează un serviciu"),
  budget: z.string().optional(),
  message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICES = [
  { value: "", label: "Selectează..." },
  { value: "branding", label: "Branding & Identitate Vizuală" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "web-design", label: "Web Design" },
  { value: "motion-video", label: "Motion & Video" },
  { value: "other", label: "Altceva / Mai multe" },
];

const BUDGETS = [
  { value: "", label: "Selectează..." },
  { value: "under-500", label: "Sub 500 €" },
  { value: "500-1500", label: "500 – 1.500 €" },
  { value: "1500-3000", label: "1.500 – 3.000 €" },
  { value: "3000-plus", label: "Peste 3.000 €" },
  { value: "not-sure", label: "Nu știu încă" },
];

export const ContactFormSection: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: wire to API / email endpoint
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
  };

  if (isSubmitSuccessful) {
    return (
      <section className="px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
            Mulțumim!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vanta-light/60">
            Am primut mesajul tău și revenim în cel mai scurt timp cu o
            direcție inițială pentru proiectul tău.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-vanta-light sm:text-4xl">
          Spune-ne despre{" "}
          <span className="gradient-text">proiectul tău</span>
        </h2>
        <div className="accent-line" />
        <p className="mt-6 text-base leading-relaxed text-vanta-light/60">
          Completează formularul de mai jos și revenim cu o direcție inițială
          pentru proiectul tău.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
          noValidate
        >
          {/* Nume */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-vanta-light/80"
            >
              Nume <span className="text-vanta-cyan">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Numele tău"
              className={cn(
                "w-full rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light placeholder:text-vanta-light/30 backdrop-blur-lg transition-all duration-200",
                errors.name
                  ? "border border-red-500/40 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                  : "border border-white/[0.08] focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]",
                "focus:outline-none",
              )}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email + Telefon */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-vanta-light/80"
              >
                Email <span className="text-vanta-cyan">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@exemplu.ro"
                className={cn(
                  "w-full rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light placeholder:text-vanta-light/30 backdrop-blur-lg transition-all duration-200",
                  errors.email
                    ? "border border-red-500/40 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                    : "border border-white/[0.08] focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]",
                  "focus:outline-none",
                )}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-vanta-light/80"
              >
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+40 7xx xxx xxx"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light placeholder:text-vanta-light/30 backdrop-blur-lg transition-all duration-200 focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] focus:outline-none"
                {...register("phone")}
              />
            </div>
          </div>

          {/* Business */}
          <div>
            <label
              htmlFor="business"
              className="mb-1.5 block text-sm font-medium text-vanta-light/80"
            >
              Business / Brand
            </label>
            <input
              id="business"
              type="text"
              placeholder="Numele afacerii"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light placeholder:text-vanta-light/30 backdrop-blur-lg transition-all duration-200 focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] focus:outline-none"
              {...register("business")}
            />
          </div>

          {/* Serviciu + Buget */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-medium text-vanta-light/80"
              >
                Serviciu dorit <span className="text-vanta-cyan">*</span>
              </label>
              <select
                id="service"
                className={cn(
                  "w-full rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light backdrop-blur-lg transition-all duration-200",
                  errors.service
                    ? "border border-red-500/40 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                    : "border border-white/[0.08] focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]",
                  "focus:outline-none",
                )}
                {...register("service")}
              >
                {SERVICES.map(({ value, label }) => (
                  <option key={value} value={value} className="bg-vanta-dark">
                    {label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.service.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="budget"
                className="mb-1.5 block text-sm font-medium text-vanta-light/80"
              >
                Buget estimativ
              </label>
              <select
                id="budget"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light backdrop-blur-lg transition-all duration-200 focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] focus:outline-none"
                {...register("budget")}
              >
                {BUDGETS.map(({ value, label }) => (
                  <option key={value} value={value} className="bg-vanta-dark">
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mesaj */}
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-vanta-light/80"
            >
              Mesaj <span className="text-vanta-cyan">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Descrie proiectul tău..."
              className={cn(
                "w-full rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light placeholder:text-vanta-light/30 backdrop-blur-lg transition-all duration-200",
                errors.message
                  ? "border border-red-500/40 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                  : "border border-white/[0.08] focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]",
                "focus:outline-none resize-none",
              )}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              "Se trimite..."
            ) : (
              <>
                Trimite mesajul
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};