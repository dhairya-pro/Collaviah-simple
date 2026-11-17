import { Flavor } from "@/types";

export const FLAVORS: Flavor[] = [
  {
    id: "strawberry-lime",
    name: "Strawberry Lime",
    tagline: "Sun-ripened strawberry meets zesty Japanese sudachi-lime freshness",
    shortDescription:
      "A delicate balance of sweet alpine strawberry notes and crisp lime zest, formulated with bio-fermented vegan collagen made in Osaka for clean daily hydration.",
    fullDescription:
      "Crafted for modern discerning palates, our Strawberry Lime formulation marries the lush aroma of ripe strawberries with the invigorating tang of fresh lime. Sweetened exclusively with organic monk fruit extract, it offers pure, vibrant refreshment with zero sugar and ultra-low calories.",
    tastingNotes: [
      "Top: Crisp kaffir lime zest & morning dew",
      "Heart: Sun-ripened ruby strawberry nectar",
      "Finish: Silky, clean botanical bloom with zero linger",
    ],
    keyBotanicals: [
      "Bio-fermented vegan collagen peptides (Made in Osaka)",
      "Vitamin C (Antioxidant & Collagen Synergist)",
      "Cold-pressed lime oil",
      "Natural strawberry botanical extract",
      "Organic Monk Fruit extract",
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
      collagen: "5,000 mg (Vegan Bio-Peptides)",
      carbs: "1.2 g",
      fat: "0 g",
      sodium: "8 mg",
      sweetener: "100% Monk Fruit (Luo Han Guo)",
      vitaminC: "100 mg (100% DV)",
    },
    ingredients: [
      "Sparkling Alpine Spring Water",
      "Osaka Bio-Fermented Vegan Collagen Peptide Complex",
      "Vitamin C (Ascorbic Acid)",
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
    id: "lemon-lime",
    name: "Lemon Lime",
    tagline: "Zesty sun-kissed lemon meets crisp Japanese yuzu-lime effervescence",
    shortDescription:
      "A radiant, citrus-forward formulation pairing bright lemon zest with cool lime freshness, powered by bio-fermented vegan collagen made in Osaka.",
    fullDescription:
      "Crafted for discerning palates that crave vibrant citrus clarity, our Lemon Lime formulation unites the sunlit brightness of cold-pressed lemon with the invigorating freshness of Japanese yuzu-lime. Sweetened exclusively with organic monk fruit extract, it delivers a clean, effervescent lift with zero sugar and ultra-low calories.",
    tastingNotes: [
      "Top: Bright cold-pressed lemon zest & yuzu blossom",
      "Heart: Crisp Japanese lime with sparkling effervescence",
      "Finish: Silky, clean citrus bloom with zero linger",
    ],
    keyBotanicals: [
      "Bio-fermented vegan collagen peptides (Made in Osaka)",
      "Vitamin C (Antioxidant & Collagen Synergist)",
      "Cold-pressed lemon oil & yuzu extract",
      "Natural lime juice concentrate",
      "Organic Monk Fruit extract",
    ],
    volume: "250 ml (Slim Can)",
    color: {
      primary: "#C8B400",
      secondary: "#9CC83C",
      accent: "#A89B00",
      bgTint: "#FAFCE8",
      gradient: "from-[#C8B400]/10 via-[#F6F9E4] to-[#9CC83C]/10",
    },
    svgCanAsset: "/images/can-lemon-lime.png",
    imageFallback: "/images/can-lemon-lime.png",
    nutrition: {
      servingSize: "250 ml (1 can)",
      calories: "11 kcal",
      sugar: "0 g",
      collagen: "5,000 mg (Vegan Bio-Peptides)",
      carbs: "1.1 g",
      fat: "0 g",
      sodium: "7 mg",
      sweetener: "100% Monk Fruit (Luo Han Guo)",
      vitaminC: "100 mg (100% DV)",
    },
    ingredients: [
      "Sparkling Alpine Spring Water",
      "Osaka Bio-Fermented Vegan Collagen Peptide Complex",
      "Vitamin C (Ascorbic Acid)",
      "Natural Lemon Extract & Cold-Pressed Lemon Oil",
      "Yuzu Lime Juice Concentrate",
      "Monk Fruit Extract (Mogroside V)",
      "Citric Acid (from Citrus Fermentation)",
      "Natural Turmeric Extract (for natural hue)",
    ],
    idealFor: [
      "Upscale Cafes & Wellness Bars",
      "Boutique Spas & Beauty Lounges",
      "Specialty Organic Retailers",
      "Modern Co-working & Corporate Lounges",
    ],
    badge: "Refreshing • Premium Citrus",
  },
];

export const BRAND_CLAIMS = [
  {
    title: "5,000mg Plant Collagen",
    subtitle: "Made in Osaka, Japan",
    description: "Bio-fermented plant collagen peptides matching Type I & III amino acid profiles.",
    icon: "sparkles",
    metric: "5,000mg",
  },
  {
    title: "0g Sugar",
    subtitle: "Monk Fruit Sweetened",
    description: "Sweetened exclusively with organic Luo Han Guo extract. Clean taste with zero sugar.",
    icon: "shield-check",
    metric: "0g",
  },
  {
    title: "< 15 kcal per Can",
    subtitle: "Clean Daily Hydration",
    description: "Light botanical effervescence suited for retail shelves, cafes, and hospitality menus.",
    icon: "flame",
    metric: "< 15 kcal",
  },
];

export const REGULATORY_COMPLIANCE_NOTES = {
  complianceCertifications: "ISO 22000 & HACCP Certified • Global Export Compliant",
  shelfLife: "12 Months from date of manufacture when stored in cool, dry conditions away from direct sunlight.",
  storageRecommendation: "Store between 4°C - 22°C. Best served chilled (6°C - 8°C).",
  allergens: "Contains zero common allergens (Gluten-free, Soy-free, Dairy-free, Nut-free).",
  manufactureOrigin: "Formulated and canned in Osaka, Japan under sterile aseptic canning protocols.",
};

