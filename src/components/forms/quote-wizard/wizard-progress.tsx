"use client";

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function WizardProgress({
  currentStep,
  totalSteps,
}: WizardProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-10">
      <p className="text-vanta-light/60 text-sm">
        Pas {currentStep + 1} din {totalSteps}
      </p>
      <div className="bg-vanta-gray mt-2 h-1.5 w-full overflow-hidden rounded-full">
        <div
          className="from-vanta-cyan to-vanta-purple h-full rounded-full bg-gradient-to-r transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-3 flex justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i <= currentStep ? "bg-vanta-cyan" : "bg-vanta-gray"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
