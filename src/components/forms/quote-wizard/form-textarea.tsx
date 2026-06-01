"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "~/lib/cn";

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, id, required, ...props }, ref) => (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-vanta-light/80"
      >
        {label}
        {required && <span className="text-vanta-cyan"> *</span>}
      </label>
      <textarea
        id={id}
        ref={ref}
        className={cn(
          "w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-2.5 text-sm text-vanta-light placeholder:text-vanta-light/30 backdrop-blur-lg transition-all duration-200 focus:border-vanta-cyan/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] focus:outline-none",
          error
            ? "border-red-500/40 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
            : "border-white/[0.08]",
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  ),
);
FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
