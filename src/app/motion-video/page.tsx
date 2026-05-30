import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Motion & Video",
  description:
    "Motion design și video editing pentru social media, advertising și prezentare digitală. Reels, animații și conținut video.",
};

export default function MotionVideoPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Motion Design &amp; Video Editing
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
          Conținut vizual modern pentru social media, advertising și prezentare
          digitală.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6">
            <h3 className="text-lg font-semibold text-vanta-light">
              Realizăm
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60">
              <li>reels</li>
              <li>motion graphics</li>
              <li>social ads</li>
              <li>intro animations</li>
              <li>short-form content</li>
              <li>video editing</li>
            </ul>
          </div>

          <div className="flex items-center justify-center rounded-lg border border-vanta-gray bg-vanta-gray/30">
            <p className="text-sm text-vanta-light/20">
              Video editing workflow — imagine
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Button asChild>
            <Link href="/contact">
              Solicită o ofertă
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}