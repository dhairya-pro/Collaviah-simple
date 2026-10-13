import { WholesalePack, BusinessSector, FAQItem } from "@/types";

export const WHOLESALE_PACKS: WholesalePack[] = [
  {
    id: "pack-6",
    name: "Pack of 6",
    size: 6,
    tagline: "Compact Retail & Counter Display Unit",
    gridConfig: { cols: 3, rows: 2 },
    idealFor: "Cafe counter merchandising, salon checkout stations & initial market trials",
    targetSectors: ["Specialty Cafes", "Hair & Nail Salons", "Boutique Studios", "Retail Pilots"],
    moq: 10, // 10 cartons (60 cans total)
    priceGuide: "Price on Wholesale Enquiry (Tier 1 Entry)",
    tierDiscounts: [
      { minCartons: 10, discountPercent: 0 },
      { minCartons: 25, discountPercent: 5 },
      { minCartons: 50, discountPercent: 8 },
    ],
    dimensions: "165 mm x 110 mm x 135 mm",
    grossWeight: "1.65 kg per carton",
    paletteTier: "Standard Retail Master Carton",
    features: [
      "Perforated tear-away shelf-ready display lid",
      "Compact footprint suited for high-impulse register placement",
      "Available in Single Flavor or 3+3 Mixed Variety Carton",
      "Individual can barcode (EAN-13) & master carton QR tracking",
    ],
    recommendedFlavorMix: "Available in single flavor or 3x Strawberry Lime + 3x Cranberry split.",
  },
  {
    id: "pack-12",
    name: "Pack of 12",
    size: 12,
    tagline: "Standard Retail Shelf & Salon Lounge Case",
    gridConfig: { cols: 4, rows: 3 },
    idealFor: "Dedicated beverage coolers, organic grocery aisles & wellness member lounges",
    targetSectors: ["Premium Grocery", "Aesthetic Clinics", "Luxury Spas", "Co-working Hubs"],
    moq: 8, // 8 cartons (96 cans total)
    priceGuide: "Price on Wholesale Enquiry (Tier 2 Standard)",
    tierDiscounts: [
      { minCartons: 8, discountPercent: 0 },
      { minCartons: 20, discountPercent: 7 },
      { minCartons: 40, discountPercent: 12 },
    ],
    dimensions: "220 mm x 165 mm x 135 mm",
    grossWeight: "3.25 kg per carton",
    paletteTier: "Double-fluted heavy-duty cardboard",
    features: [
      "Optimized for standard 30cm supermarket depth shelving",
      "Tamper-evident holographic security seal on outer case",
      "High-speed POS scanning barcodes on all six faces",
      "Includes complimentary acrylic counter tent-card with QR tasting guide",
    ],
    recommendedFlavorMix: "Available in single flavor or 6x Strawberry Lime + 6x Cranberry split.",
  },
  {
    id: "pack-24",
    name: "Pack of 24",
    size: 24,
    tagline: "High-Velocity Hospitality & Distributor Master Carton",
    gridConfig: { cols: 6, rows: 4 },
    idealFor: "Distributor pallets, fitness chains, luxury hotel minibars & corporate events",
    targetSectors: ["Regional Distributors", "Luxury Hotel Chains", "Fitness Clubs", "Corporate Gifting"],
    moq: 5, // 5 cartons (120 cans total)
    priceGuide: "Price on Wholesale Enquiry (Tier 3 Volume)",
    tierDiscounts: [
      { minCartons: 5, discountPercent: 0 },
      { minCartons: 15, discountPercent: 10 },
      { minCartons: 30, discountPercent: 18 },
    ],
    dimensions: "330 mm x 220 mm x 135 mm",
    grossWeight: "6.45 kg per carton",
    paletteTier: "Pallet-optimized interlock stackable shipper",
    features: [
      "Maximum pallet space density (120 cartons / 2,880 cans per pallet)",
      "Moisture-resistant reinforced kraft outer layer for cold-chain transit",
      "Best per-can wholesale margin profile for commercial resale",
      "Priority freight dispatch & designated wholesale relationship manager",
    ],
    recommendedFlavorMix: "Available in single flavor or 12x Strawberry Lime + 12x Cranberry balanced case.",
  },
];

export const WHOLESALE_SECTORS: BusinessSector[] = [
  {
    id: "retailers",
    title: "Gourmet & Organic Retailers",
    subtitle: "High Margin • Eye-Catching Shelf Presence",
    description:
      "Transform your premium beverage aisle with Japan-formulated vegan collagen cans. Modern design, zero sugar, and clean ingredients capture wellness-conscious grocery shoppers immediately.",
    recommendedPack: "Pack of 12 (Shelf-Ready)",
    benefits: ["Turnkey POS shelf-talkers provided", "High repeat purchase velocity", "Up to 45% retailer gross margin"],
    icon: "shopping-bag",
  },
  {
    id: "cafes",
    title: "Specialty Cafes & Matcha Bars",
    subtitle: "Counter Grab & Go • Clean Energy Alternative",
    description:
      "The perfect non-coffee alternative for patrons seeking functional beauty hydration. Pairs impeccably with plant-based menus, afternoon brunches, and light pastries.",
    recommendedPack: "Pack of 6 (Counter Display)",
    benefits: ["Small counter footprint", "Ideal RTD complement to matcha & teas", "Aesthetic photogenic presentation"],
    icon: "coffee",
  },
  {
    id: "gyms",
    title: "Fitness Clubs & Pilates Studios",
    subtitle: "Post-Workout Recovery • Low Calorie Hydration",
    description:
      "Offer your members a zero-sugar, peptide-rich recovery drink that supports joints and skin without heavy carbohydrates or synthetic stimulants.",
    recommendedPack: "Pack of 24 (High-Volume Cooler)",
    benefits: ["Zero sugar fits keto & macro tracking", "Appeals directly to female & wellness demographics", "Premium chiller presence"],
    icon: "dumbbell",
  },
  {
    id: "salons",
    title: "Luxury Salons & Med-Spas",
    subtitle: "VIP Welcome Drink • Complimentary Luxury Service",
    description:
      "Elevate your guest treatment experience. Serve chilled COLLAVIAH during beauty, hair, or dermal services as an exquisite ingestible beauty amenity.",
    recommendedPack: "Pack of 12 (Salon Lounge)",
    benefits: ["Direct synergy with skincare & aesthetic treatments", "Elevates client perceived value", "Retail take-home checkout bundles"],
    icon: "sparkles",
  },
  {
    id: "hotels",
    title: "Hotels & Boutique Hospitality",
    subtitle: "Minibar Curation • VIP Welcome Amenity",
    description:
      "Upgrade your minibar and concierge welcome baskets with an exclusive Japanese beauty drink that stands apart from conventional soft drinks.",
    recommendedPack: "Pack of 24 (Hospitality Stock)",
    benefits: ["Sleek 250ml can fits minibar cooling racks", "High perceived retail guest value", "Exclusive corporate banquet packages"],
    icon: "building",
  },
  {
    id: "corporate",
    title: "Corporate Gifting & Wellness",
    subtitle: "Executive Gift Hampers • Pantry Hydration",
    description:
      "Deliver mindful corporate gifting boxes and stock executive boardrooms with functional luxury beverages that champion health and longevity.",
    recommendedPack: "Pack of 6 or 12 (Gift Box Ready)",
    benefits: ["Custom co-branded sleeve options for large orders", "Health-conscious corporate alignment", "Premium champagne-gold packaging"],
    icon: "gift",
  },
  {
    id: "distributors",
    title: "Regional Beverage Distributors",
    subtitle: "Pallet Shipments • Exclusive Territory Terms",
    description:
      "Partner with COLLAVIAH to distribute our fast-growing functional beauty portfolio across regional supermarket chains, duty-free hubs, and fitness chains.",
    recommendedPack: "Pack of 24 (Palletized Freight)",
    benefits: ["Protected territory agreements available", "Full marketing co-op spend support", "EDI & automated dispatch integrations"],
    icon: "truck",
  },
];

export const WHOLESALE_TIMELINE = [
  {
    step: "01",
    title: "Enquire & Configure",
    duration: "Under 2 Minutes",
    description:
      "Select your desired pack sizes, flavors, and anticipated carton volumes using our interactive Wholesale Quote Builder.",
    highlight: "Custom carton mixes welcomed",
  },
  {
    step: "02",
    title: "Formal Quotation",
    duration: "Within 4 Business Hours",
    description:
      "Receive our comprehensive B2B rate card, volume tier discount schedule, and freight estimates directly via email and WhatsApp.",
    highlight: "Transparent FOB & CIF pricing",
  },
  {
    step: "03",
    title: "Sample Verification",
    duration: "1 - 3 Days Dispatch",
    description:
      "Qualified buyers receive a curated tasting kit containing both Strawberry Lime and Cranberry cans to evaluate taste and shelf aesthetics.",
    highlight: "Free tasting kit for registered retail buyers",
  },
  {
    step: "04",
    title: "Order Placement & Terms",
    duration: "Seamless Digital Invoicing",
    description:
      "Finalize carton allocation, apply volume discounts, and settle via corporate invoice, wire transfer, or revolving credit terms.",
    highlight: "Net 30 terms available for verified accounts",
  },
  {
    step: "05",
    title: "Expedited Dispatch",
    duration: "Cold-Chain / Protected Transit",
    description:
      "Your order is packed in reinforced master cartons and dispatched via insured freight carriers with end-to-end tracking.",
    highlight: "Guaranteed product integrity on arrival",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: "Ordering & MOQ",
    question: "What is the Minimum Order Quantity (MOQ) for wholesale accounts?",
    answer:
      "Our MOQ depends on the carton format: 10 cartons for Pack of 6 (60 cans), 8 cartons for Pack of 12 (96 cans), and 5 cartons for Pack of 24 (120 cans). For first-time trial orders, we allow mixing packs to meet baseline case quantities.",
  },
  {
    category: "Ordering & MOQ",
    question: "Can we mix flavors within a single carton or order?",
    answer:
      "Yes! We provide 50/50 split variety master cartons (e.g., 3 Strawberry Lime + 3 Cranberry in the 6-pack, or 12 + 12 in the 24-pack). You can also mix different single-flavor cartons freely to reach volume discount thresholds.",
  },
  {
    category: "Product & Ingredients",
    question: "What makes COLLAVIAH's vegan collagen different from traditional bovine or marine collagen?",
    answer:
      "Conventional collagen is sourced from animal hide or fish scales. COLLAVIAH uses a cutting-edge Japanese bio-fermented plant peptide matrix that precisely mirrors the amino acid sequence of human Type I and Type III collagen. It is 100% vegan, cruelty-free, halal-compliant, and carries zero fishy aftertaste.",
  },
  {
    category: "Product & Ingredients",
    question: "How is zero sugar achieved without an artificial sweetener aftertaste?",
    answer:
      "We sweeten exclusively with premium Luo Han Guo (Monk Fruit) extract standardized to high Mogroside-V purity. It imparts a clean, rounded fruit sweetness that dissipates naturally without the metallic or bitter finish common in stevia, aspartame, or sucralose.",
  },
  {
    category: "Shipping & Storage",
    question: "What are the storage requirements and ambient shelf life?",
    answer:
      "COLLAVIAH cans are shelf-stable for 18 months at ambient warehouse temperatures (4°C to 22°C). While refrigeration is not required for storage, chilling the cans to 6°C - 8°C prior to service enhances their crisp, effervescent botanical profile.",
  },
  {
    category: "Shipping & Storage",
    question: "Do you supply retail point-of-sale (POS) display materials?",
    answer:
      "Yes. Every wholesale customer has access to complimentary POS merchandising collateral, including acrylic counter-top tent cards, double-sided shelf-talkers, branded aluminum ice buckets for VIP lounges, and digital asset kits for online menus.",
  },
  {
    category: "Samples",
    question: "How do I request a wholesale sampling kit before committing to a pallet?",
    answer:
      "Simply complete the Wholesale Quote Builder on this site and check the 'Request Tasting Sample Kit' box. Our commercial accounts team will verify your business details and dispatch a complimentary 2-flavor sample box via expedited courier.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "COLLAVIAH has become our fastest-selling functional beverage across our 6 organic retail locations. The Japanese vegan collagen claim coupled with zero sugar resonates immediately with our beauty-conscious clientele.",
    author: "Elena Rostova",
    title: "Head of Beverage Procurement",
    company: "Lumina Organic Markets",
    rating: 5,
    location: "Tokyo & Singapore",
  },
  {
    quote:
      "Serving chilled COLLAVIAH cans in our VIP salon suites elevated our treatment protocol overnight. Clients love the delicate strawberry lime palate, and retail take-home conversions have exceeded 38%.",
    author: "Marcella Fontaine",
    title: "Operations Director",
    company: "Maison de Beauté Med-Spas",
    rating: 5,
    location: "Paris & Dubai",
  },
  {
    quote:
      "The 24-can master cartons are brilliantly engineered for pallet density and transit stability. Reordering is smooth, and the margin structure allows us to offer attractive distributor promotions.",
    author: "Kenji Takahashi",
    title: "Commercial Director",
    company: "Apex Wellness Distribution",
    rating: 5,
    location: "Kobe, Japan",
  },
];

