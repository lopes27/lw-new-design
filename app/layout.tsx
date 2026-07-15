 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Surface | Resurfaçage de cuisine au Québec",
  description:
    "Revêtements architecturaux et resurfaçage haut de gamme pour cuisines, armoires et surfaces intérieures à Montréal, Laval et dans les environs.",
  applicationName: "Maison Surface",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA">
      <body className={inter.className}>{children}</body>
    </html>
  );
}