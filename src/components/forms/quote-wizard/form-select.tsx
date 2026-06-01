"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "~/lib/cn";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: readonly { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    { label, error, className, id, required, options, placeholder, ...props },
    ref,
  ) => (
    <div>
      <label
        htmlFor={id}
        className="text-vanta-light/80 mb-1.5 block text-sm font-medium"
      >
        {label}
        {required && <span className="text-vanta-cyan"> *</span>}
      </label>
      <select
        id={id}
        ref={ref}
        className={cn(
          "text-vanta-light focus:border-vanta-cyan/40 w-full rounded-xl border bg-white/[0.03] px-4 py-2.5 text-sm backdrop-blur-lg transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] focus:outline-none",
          error
            ? "border-red-500/40 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
            : "border-white/[0.08]",
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" className="bg-vanta-dark">
            {placeholder}
          </option>
        )}
        {options.map(({ value, label }) => (
          <option key={value} value={value} className="bg-vanta-dark">
            {label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  ),
);
FormSelect.displayName = "FormSelect";

export { FormSelect };
