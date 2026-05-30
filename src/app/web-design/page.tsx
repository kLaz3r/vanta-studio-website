import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Website-uri moderne, rapide și optimizate. Web design responsive pentru business-uri care vor o imagine profesionistă online.",
};

export default function WebDesignPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-vanta-light sm:text-5xl">
          Web Design Modern
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vanta-light/60">
          Creăm website-uri moderne, rapide și optimizate pentru experiență și
          conversii.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-vanta-gray bg-vanta-gray/30 p-6">
            <h3 className="text-lg font-semibold text-vanta-light">Focus</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-vanta-light/60">
              <li>structură clară</li>
              <li>design contemporan</li>
              <li>performanță</li>
              <li>responsive experience</li>
              <li>imagine profesională</li>
            </ul>
          </div>

          <div className="flex items-center justify-center rounded-lg border border-vanta-gray bg-vanta-gray/30">
            <p className="text-sm text-vanta-light/20">
              Modern website mockups — imagine
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