"use client";

import { useQuoteWizardStore } from "~/stores/quote-wizard";
import { WizardProgress } from "~/components/forms/quote-wizard/wizard-progress";
import { StepContact } from "~/components/forms/quote-wizard/step-contact";
import { StepBusiness } from "~/components/forms/quote-wizard/step-business";
import { StepServices } from "~/components/forms/quote-wizard/step-services";
import { StepAssets } from "~/components/forms/quote-wizard/step-assets";
import { StepGoals } from "~/components/forms/quote-wizard/step-goals";
import { StepBudget } from "~/components/forms/quote-wizard/step-budget";
import { StepReferences } from "~/components/forms/quote-wizard/step-references";
import { StepReview } from "~/components/forms/quote-wizard/step-review";

export function WizardContainer() {
  const { currentStep, data, setStep, updateData } = useQuoteWizardStore();

  const handleNext = (stepData: Record<string, unknown>) => {
    updateData(stepData);
    setStep(currentStep + 1);
  };

  const handleBack = () => {
    setStep(currentStep - 1);
  };

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[800px]">
        <WizardProgress currentStep={currentStep} totalSteps={8} />

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-10">
          {currentStep === 0 && (
            <StepContact
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
              isFirst={currentStep === 0}
            />
          )}
          {currentStep === 1 && (
            <StepBusiness
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
            />
          )}
          {currentStep === 2 && (
            <StepServices
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
            />
          )}
          {currentStep === 3 && (
            <StepAssets
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
            />
          )}
          {currentStep === 4 && (
            <StepGoals
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
            />
          )}
          {currentStep === 5 && (
            <StepBudget
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
            />
          )}
          {currentStep === 6 && (
            <StepReferences
              onNext={handleNext}
              onBack={handleBack}
              defaultValues={data}
            />
          )}
          {currentStep === 7 && <StepReview />}
        </div>
      </div>
    </section>
  );
}
