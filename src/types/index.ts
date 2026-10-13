export type FlavorId = "strawberry-lime" | "cranberry";

export interface Flavor {
  id: FlavorId;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  tastingNotes: string[];
  keyBotanicals: string[];
  volume: string;
  color: {
    primary: string;
    secondary: string;
    accent: string;
    bgTint: string;
    gradient: string;
  };
  svgCanAsset: string;
  imageFallback: string;
  nutrition: {
    servingSize: string;
    calories: string;
    sugar: string;
    collagen: string;
    carbs: string;
    fat: string;
    sodium: string;
    sweetener: string;
  };
  ingredients: string[];
  idealFor: string[];
  badge: string;
}

export interface WholesalePack {
  id: "pack-6" | "pack-12" | "pack-24";
  name: string;
  size: number; // cans per carton
  tagline: string;
  gridConfig: { cols: number; rows: number };
  idealFor: string;
  targetSectors: string[];
  moq: number; // minimum carton quantity
  priceGuide: string;
  tierDiscounts: { minCartons: number; discountPercent: number }[];
  dimensions: string;
  grossWeight: string;
  paletteTier: string;
  features: string[];
  recommendedFlavorMix: string;
}

export interface QuoteCartItem {
  packId: "pack-6" | "pack-12" | "pack-24";
  flavorId: FlavorId | "mixed";
  cartons: number;
}

export interface BusinessSector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedPack: string;
  benefits: string[];
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Ordering & MOQ" | "Product & Ingredients" | "Shipping & Storage" | "Samples";
}

