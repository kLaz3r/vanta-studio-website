import Link from "next/link";
import Image from "next/image";
import { FadeInView } from "~/components/ui/fade-in-view";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Branding", href: "/branding" },
  { label: "Graphic Design", href: "/graphic-design" },
  { label: "Web Design", href: "/web-design" },
  { label: "Motion & Video", href: "/motion-video" },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Despre", href: "/despre" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", src: "/icons/Instagram.svg" },
  { label: "YouTube", href: "#", src: "/icons/Youtube.svg" },
  { label: "LinkedIn", href: "#", src: "/icons/Linkedin.svg" },
];

export function Footer() {
  return (
    <footer className="border-t border-vanta-gray">
      <FadeInView direction="up">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.svg"
                alt="VANTA Studio"
                width={120}
                height={40}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-vanta-light/60">
              VANTA Studio — Branding, Graphic Design &amp; Comunicare
              Vizuală. Studio creativ independent cu bază în Bacău, disponibil
              pentru colaborări locale și remote.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-vanta-light/40">
              Navigare
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-vanta-light/60 transition-colors hover:text-vanta-cyan"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-vanta-light/40">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-vanta-light/60">
              <li>
                <Link
                  href="mailto:contact@vantastudio.ro"
                  className="transition-colors hover:text-vanta-cyan"
                >
                  contact@vantastudio.ro
                </Link>
              </li>
              <li>Bacău, România</li>
            </ul>
            <div className="mt-4 flex gap-4">
              {SOCIAL_LINKS.map(({ label, href, src }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="opacity-40 transition-opacity hover:opacity-100"
                >
                  <Image src={src} alt={label} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-vanta-gray pt-6 text-center text-xs text-vanta-light/30">
          &copy; {new Date().getFullYear()} VANTA Studio. Toate drepturile
          rezervate.
        </div>
      </div>
      </FadeInView>
    </footer>
  );
}