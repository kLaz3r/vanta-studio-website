"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/cn";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Servicii", href: "/servicii" },
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-white/[0.02] shadow-[0_1px_0_0] backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo-gradient.svg"
            alt="VANTA Studio"
            width={120}
            height={40}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-vanta-light/80 hover:text-vanta-cyan text-sm transition-colors"
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
          className="text-vanta-light hover:text-vanta-cyan inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden"
          aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "bg-vanta-dark fixed inset-0 top-0 z-40 flex flex-col px-6 pt-24 transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-vanta-light/80 hover:text-vanta-cyan text-xl font-medium transition-colors"
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
    </motion.header>
  );
}
