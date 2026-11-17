import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { AmbientCanvas } from "@/components/motion/AmbientCanvas";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { SectionIndicator } from "@/components/motion/SectionIndicator";
import { PageLoader } from "@/components/motion/PageLoader";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { QuoteDrawer } from "@/components/common/QuoteDrawer";
import { QuoteProvider } from "@/context/QuoteContext";

export const metadata: Metadata = {
  title: "COLLAVIAH | Vegan Collagen Beverage Made in Osaka (250ml Slim Can)",
  description:
    "Official B2B commercial portal for COLLAVIAH. Premium vegan collagen beverage made in Osaka, Japan in 250ml slim cans. Zero sugar, monk fruit sweetener, low calories. Carton packs of 6, 12, and 24 for retailers, cafes, gyms, salons, hotels, and distributors.",
  keywords: [
    "vegan collagen beverage",
    "Made in Osaka vegan collagen",
    "commercial collagen drink",
    "B2B beverage supplier",
    "zero sugar functional drink",
    "monk fruit collagen",
    "COLLAVIAH Osaka",
    "250ml slim can beverage",
  ],
  authors: [{ name: "COLLAVIAH Japan Beverage Co." }],
  openGraph: {
    title: "COLLAVIAH | Vegan Collagen Beverage Made in Osaka",
    description:
      "Official carton packs for commercial stockists, retailers, and hospitality. Made in Osaka, Japan.",
    type: "website",
    locale: "en_US",
    siteName: "COLLAVIAH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "COLLAVIAH",
    description: "Premium vegan collagen functional beverages made in Osaka for B2B commercial supply.",
    url: "https://collaviah.com",
    logo: "https://collaviah.com/images/collaviah-logo.svg",
    knowsAbout: [
      "Vegan Collagen Bio-Fermentation",
      "Functional RTD Beverages",
      "Zero Sugar Formulations",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Commercial Sales Desk",
      email: "orders@collaviah.com",
      availableLanguage: ["English", "Japanese"],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:ital,wght@0,300..900;1,300..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-pearl text-richBlack selection:bg-crimson selection:text-white">
        <QuoteProvider>
          <LenisProvider>
            {/* Global Interactive Layers */}
            <PageLoader />
            <ScrollProgressBar />
            <CustomCursor />
            <AmbientCanvas />
            <SectionIndicator />

            {/* Layout Shell */}
            <Navbar />
            <QuoteDrawer />

            <main className="min-h-screen relative">{children}</main>

            <Footer />
          </LenisProvider>
        </QuoteProvider>
      </body>
    </html>
  );
}

