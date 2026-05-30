"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/cn";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Despre", href: "/despre" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors",
        scrolled
          ? "bg-vanta-dark/95 backdrop-blur shadow-[0_1px_0_0] shadow-vanta-gray/50"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-vanta-light"
          onClick={() => setMobileOpen(false)}
        >
          VANTA<span className="text-vanta-cyan">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-vanta-light/80 transition-colors hover:text-vanta-cyan"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">Solicită o ofertă</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-vanta-light transition-colors hover:text-vanta-cyan md:hidden"
          aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col bg-vanta-dark px-6 pt-24 transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-xl font-medium text-vanta-light/80 transition-colors hover:text-vanta-cyan"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="w-full"
            onClick={() => setMobileOpen(false)}
          >
            <Link href="/contact">Solicită o ofertă</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}