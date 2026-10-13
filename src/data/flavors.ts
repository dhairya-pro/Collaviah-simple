import { Flavor } from "@/types";

export const FLAVORS: Flavor[] = [
  {
    id: "strawberry-lime",
    name: "Strawberry Lime",
    tagline: "Sun-ripened strawberry meets zesty Japanese sudachi-lime freshness",
    shortDescription:
      "A delicate balance of sweet alpine strawberry notes and crisp lime zest, formulated with Japan-based vegan collagen for an effervescent daily beauty ritual.",
    fullDescription:
      "Crafted for modern discerning palates, our Strawberry Lime formulation marries the lush aroma of ripe strawberries with the invigorating tang of fresh lime. Sweetened exclusively with organic monk fruit extract, it offers pure, vibrant refreshment with zero sugar and ultra-low calories.",
    tastingNotes: [
      "Top: Crisp kaffir lime zest & morning dew",
      "Heart: Sun-ripened ruby strawberry nectar",
      "Finish: Silky, clean botanical bloom with zero linger",
    ],
    keyBotanicals: [
      "Japan-based fermented vegan collagen peptides",
      "Cold-pressed lime oil",
      "Natural strawberry botanical extract",
      "Zero-glycemic Monk Fruit extract",
    ],
    volume: "250 ml (Slim Can)",
    color: {
      primary: "#D7263D",
      secondary: "#9CC83C",
      accent: "#B5124A",
      bgTint: "#FDECEF",
      gradient: "from-[#D7263D]/10 via-[#F6EDE4] to-[#9CC83C]/10",
    },
    svgCanAsset: "/images/can-strawberry-lime.png",
    imageFallback: "/images/can-strawberry-lime.png",
    nutrition: {
      servingSize: "250 ml (1 can)",
      calories: "12 kcal",
      sugar: "0 g",
      collagen: "2,500 mg (Vegan Bio-Peptides)",
      carbs: "1.2 g",
      fat: "0 g",
      sodium: "8 mg",
      sweetener: "100% Monk Fruit (Luo Han Guo)",
    },
    ingredients: [
      "Sparkling Alpine Spring Water",
      "Japan-based Vegan Collagen Peptide Complex (Fermented Plant Peptides)",
      "Natural Strawberry Extract",
      "Lime Juice Concentrate",
      "Monk Fruit Extract (Mogroside V)",
      "Citric Acid (from Citrus Fermentation)",
      "Natural Hibiscus Flower Extract (for natural hue)",
    ],
    idealFor: [
      "Upscale Cafes & Matcha Bars",
      "Boutique Spas & Beauty Lounges",
      "Specialty Organic Retailers",
      "Modern Co-working & Corporate Lounges",
    ],
    badge: "Bestseller • High Velocity",
  },
  {
    id: "cranberry",
    name: "Cranberry",
    tagline: "Tart Nordic cranberry balanced with delicate ruby botanical notes",
    shortDescription:
      "An invigorating, antioxidant-rich profile boasting crisp cranberry tartness softened by smooth herbal undertones and our signature bio-identical collagen matrix.",
    fullDescription:
      "Deep, sophisticated, and revitalizing. The Cranberry profile delivers a bold, adult palate with appetizing astringency and deep crimson elegance. Formulated without synthetic preservatives or artificial colorants, it stands out as a premium functional beverage on any retail shelf or beverage menu.",
    tastingNotes: [
      "Top: Crisp wild cranberry tang & citrus blossom",
      "Heart: Deep ruby red berry tannin structure",
      "Finish: Refreshing clean palate cleanse",
    ],
    keyBotanicals: [
      "Japan-based fermented vegan collagen peptides",
      "Wild harvested cranberry essence",
      "Hibiscus calyx infusion",
      "Zero-glycemic Monk Fruit extract",
    ],
    volume: "250 ml (Slim Can)",
    color: {
      primary: "#8E1B3A",
      secondary: "#B07A2E",
      accent: "#B5124A",
      bgTint: "#F8E9EE",
      gradient: "from-[#8E1B3A]/15 via-[#F6EDE4] to-[#B07A2E]/10",
    },
    svgCanAsset: "/images/can-cranberry.png",
    imageFallback: "/images/can-cranberry.png",
    nutrition: {
      servingSize: "250 ml (1 can)",
      calories: "14 kcal",
      sugar: "0 g",
      collagen: "2,500 mg (Vegan Bio-Peptides)",
      carbs: "1.4 g",
      fat: "0 g",
      sodium: "9 mg",
      sweetener: "100% Monk Fruit (Luo Han Guo)",
    },
    ingredients: [
      "Sparkling Alpine Spring Water",
      "Japan-based Vegan Collagen Peptide Complex (Fermented Plant Peptides)",
      "Natural Cranberry Extract",
      "Hibiscus Infusion",
      "Monk Fruit Extract (Mogroside V)",
      "Malic Acid (Naturally Derived)",
      "Natural Black Carrot Juice (for natural hue)",
    ],
    idealFor: [
      "Luxury Hotel Minibars & Lounges",
      "High-Performance Fitness Studios",
      "Curated Fine-Dining & Gourmet Grocers",
      "Corporate Gifting & VIP Event Bars",
    ],
    badge: "Sophisticated • High Margin",
  },
];

export const BRAND_CLAIMS = [
  {
    title: "Japan-Based Vegan Collagen",
    subtitle: "Patented Bio-Fermentation",
    description: "Type 1 & 3 peptide mimetic engineered via Japanese plant-fermentation biotechnology.",
    icon: "sparkles",
  },
  {
    title: "Zero Sugar",
    subtitle: "0g Glycemic Load",
    description: "Pure botanical sweetness without insulin spikes or sugar crashes.",
    icon: "shield-check",
  },
  {
    title: "Monk Fruit Sweetener",
    subtitle: "Luo Han Guo Pure Extract",
    description: "Rare Mogroside-V extract delivering rounded mouthfeel with zero lingering bitterness.",
    icon: "leaf",
  },
  {
    title: "Low Calories",
    subtitle: "< 15 kcal per 250ml Can",
    description: "Guilt-free functional hydration that fits seamlessly into low-carb and keto lifestyles.",
    icon: "flame",
  },
  {
    title: "250 ml Sleek Can",
    subtitle: "Infinite Recyclability",
    description: "Premium matte-touch aluminum slim can preserving carbonation and light-sensitive peptides.",
    icon: "droplet",
  },
];

export const REGULATORY_COMPLIANCE_NOTES = {
  // TODO: Insert local regulatory registration / FSSAI License Number upon market rollout
  fssaiLicense: "TODO: FSSAI Lic. No. [Pending Allocation for India / Regional FDA]",
  // TODO: Insert exact batch expiry protocol and storage temperature recommendations
  shelfLife: "18 Months from date of manufacture when stored in cool, dry conditions away from direct sunlight.",
  storageRecommendation: "Store between 4°C - 22°C. Best served chilled (6°C - 8°C).",
  allergens: "Contains zero common allergens (Gluten-free, Soy-free, Dairy-free, Nut-free).",
  manufactureOrigin: "Formulated in Osaka, Japan. Packaged under aseptic sterile canning protocols.",
};

