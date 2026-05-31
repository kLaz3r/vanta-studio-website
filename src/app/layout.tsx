import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource-variable/google-sans/wght.css";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { DefaultJsonLd } from "~/components/layout/json-ld";
import { SiteBackground } from "~/components/layout/site-background";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "VANTA Studio | Branding, Graphic Design & Comunicare Vizuală",
    template: "%s | VANTA Studio",
  },
  description:
    "Studio creativ specializat în branding, graphic design și comunicare vizuală. Materiale pregătite pentru digital și print.",
  metadataBase: new URL("https://vantastudio.ro"),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "VANTA Studio",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <DefaultJsonLd />
        <SiteBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}