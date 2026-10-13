import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COLLAVIAH | Premium Japan-Based Vegan Collagen Beverage (250ml Wholesale)",
  description:
    "Official B2B wholesale portal for COLLAVIAH. Premium Japan-based vegan collagen beverage in 250ml slim cans. Zero sugar, monk fruit sweetener, low calories. Wholesale packs of 6, 12, and 24 for retailers, cafes, gyms, salons, hotels, and distributors.",
  keywords: [
    "vegan collagen beverage",
    "Japan vegan collagen",
    "wholesale collagen drink",
    "B2B beverage supplier",
    "zero sugar functional drink",
    "monk fruit collagen",
    "COLLAVIAH wholesale",
    "250ml slim can beverage",
  ],
  authors: [{ name: "COLLAVIAH Japan Beverage Co." }],
  openGraph: {
    title: "COLLAVIAH | Premium Japan-Based Vegan Collagen Beverage",
    description:
      "Nourish • Rejuvenate • Glow. Official wholesale packs for commercial stockists, retailers, and hospitality.",
    type: "website",
    locale: "en_US",
    siteName: "COLLAVIAH Wholesale",
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
    description: "Premium Japan-based vegan collagen functional beverages for B2B commercial wholesale.",
    url: "https://collaviah.com",
    logo: "https://collaviah.com/images/collaviah-logo.svg",
    knowsAbout: [
      "Vegan Collagen Bio-Fermentation",
      "Functional RTD Beverages",
      "Zero Sugar Formulations",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Wholesale & Commercial Sales Desk",
      email: "wholesale@collaviah.com",
      availableLanguage: ["English", "Japanese"],
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <head>
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

