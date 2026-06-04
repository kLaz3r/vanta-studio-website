import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeInView } from "~/components/ui/fade-in-view";

export const metadata: Metadata = {
  title: "404 — Pagina nu a fost găsită",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <FadeInView direction="up">
        <h1 className="text-vanta-cyan text-6xl font-bold">404</h1>
      </FadeInView>
      <FadeInView direction="up" delay={0.15}>
        <p className="text-vanta-light/60 mt-4 text-lg">
          Pagina pe care o cauți nu există.
        </p>
      </FadeInView>
      <FadeInView direction="up" delay={0.3}>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi la homepage
            </Link>
          </Button>
        </div>
      </FadeInView>
    </div>
  );
}
