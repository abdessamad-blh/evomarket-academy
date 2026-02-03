import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EvoMarket Academy - Formation en Communication Digitale",
  description: "Formation pratique en Social Media Marketing à Casablanca. Apprenez à créer, gérer et optimiser votre communication digitale.",
  keywords: "formation marketing digital, social media marketing, Casablanca, EvoMarket, communication digitale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
