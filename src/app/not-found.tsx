import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-vanta-cyan">404</h1>
      <p className="mt-4 text-lg text-vanta-light/60">
        Pagina pe care o cauți nu există.
      </p>
      <div className="mt-8">
        <Button variant="secondary" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}