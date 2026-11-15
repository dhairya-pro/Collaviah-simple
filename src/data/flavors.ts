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
      "Vitamin C (Antioxidant & Collagen Synergist)",
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
      vitaminC: "100 mg (100% DV)",
    },
    ingredients: [
      "Sparkling Alpine Spring Water",
      "Japan-based Vegan Collagen Peptide Complex (Fermented Plant Peptides)",
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
      "A radiant, citrus-forward formulation pairing bright lemon zest with cool lime freshness, powered by Japan-based vegan collagen for a sparkling daily beauty ritual.",
    fullDescription:
      "Crafted for discerning palates that crave vibrant citrus clarity, our Lemon Lime formulation unites the sunlit brightness of cold-pressed lemon with the invigorating freshness of Japanese yuzu-lime. Sweetened exclusively with organic monk fruit extract, it delivers a clean, effervescent lift with zero sugar and ultra-low calories.",
    tastingNotes: [
      "Top: Bright cold-pressed lemon zest & yuzu blossom",
      "Heart: Crisp Japanese lime with sparkling effervescence",
      "Finish: Silky, clean citrus bloom with zero linger",
    ],
    keyBotanicals: [
      "Japan-based fermented vegan collagen peptides",
      "Vitamin C (Antioxidant & Collagen Synergist)",
      "Cold-pressed lemon oil & yuzu extract",
      "Natural lime juice concentrate",
      "Zero-glycemic Monk Fruit extract",
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
      collagen: "2,500 mg (Vegan Bio-Peptides)",
      carbs: "1.1 g",
      fat: "0 g",
      sodium: "7 mg",
      sweetener: "100% Monk Fruit (Luo Han Guo)",
      vitaminC: "100 mg (100% DV)",
    },
    ingredients: [
      "Sparkling Alpine Spring Water",
      "Japan-based Vegan Collagen Peptide Complex (Fermented Plant Peptides)",
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

