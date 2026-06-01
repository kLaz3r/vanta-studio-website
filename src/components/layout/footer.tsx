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
    <footer className="border-vanta-gray border-t">
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
              <p className="text-vanta-light/60 mt-3 max-w-xs text-sm leading-relaxed">
                VANTA Studio — Branding, Graphic Design &amp; Comunicare
                Vizuală. Studio creativ independent cu bază în Bacău, disponibil
                pentru colaborări locale și remote.
              </p>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-vanta-light/40 mb-4 text-sm font-semibold tracking-wider uppercase">
                Navigare
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-vanta-light/60 hover:text-vanta-cyan transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h4 className="text-vanta-light/40 mb-4 text-sm font-semibold tracking-wider uppercase">
                Contact
              </h4>
              <ul className="text-vanta-light/60 space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:contact@vantastudio.ro"
                    className="hover:text-vanta-cyan transition-colors"
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

          <div className="border-vanta-gray text-vanta-light/30 mt-12 border-t pt-6 text-center text-xs">
            &copy; {new Date().getFullYear()} VANTA Studio. Toate drepturile
            rezervate.
          </div>
        </div>
      </FadeInView>
    </footer>
  );
}
