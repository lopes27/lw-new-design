import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://maisonsurface.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maison Surface | Resurfaçage de cuisine au Québec",
  description:
    "Revêtements architecturaux et resurfaçage haut de gamme pour cuisines, armoires et surfaces intérieures à Montréal, Laval et dans les environs.",
  applicationName: "Maison Surface",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "resurfaçage cuisine",
    "revêtement armoires",
    "kitchen wrapping Montréal",
    "cabinet wrapping Québec",
    "Maison Surface",
  ],
  openGraph: {
    title: "Maison Surface | Resurfaçage de cuisine",
    description:
      "Transformez votre cuisine sans tout remplacer grâce à nos revêtements architecturaux haut de gamme.",
    type: "website",
    locale: "fr_CA",
    siteName: "Maison Surface",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-kitchen-luxury.png",
        width: 1200,
        height: 630,
        alt: "Cuisine transformée par Maison Surface",
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Maison Surface",
  url: siteUrl,
  email: "maisonsurfacecontact@gmail.com",
  telephone: "+1-514-581-8948",
  description:
    "Revêtements architecturaux et resurfaçage haut de gamme pour cuisines, armoires et surfaces intérieures.",
  areaServed: ["Montréal", "Laval", "Rive-Nord", "Rive-Sud", "Québec"],
  sameAs: [
    "https://www.instagram.com/maisonsurfacewrap/",
    "https://www.facebook.com/maisonsurfaceQC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
