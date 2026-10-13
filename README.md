
# COLLAVIAH | Premium Japan-Based Vegan Collagen Beverage (250ml)

**"Glow from Within" — Nourish • Rejuvenate • Glow**

A production-ready, highly interactive 2D B2B wholesale website for **COLLAVIAH**, engineered for commercial retail buyers, gourmet cafes, boutique gyms, luxury med-spas, hospitality operators, and beverage distributors. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP + ScrollTrigger**, **Lenis Smooth Scroll**, and an interactive canvas ambient layer.

---

## 1. Project Architecture & File Tree

```
collaviah-simple/
├── .env.example                  # Environment configuration template
├── next.config.mjs               # Next.js configuration (AVIF/WebP, strict mode)
├── package.json                  # Dependencies, scripts, and build tasks
├── postcss.config.js             # PostCSS Tailwind plugins
├── tailwind.config.ts            # Brand design tokens, colors, custom animations
├── tsconfig.json                 # Strict TypeScript configuration with alias @/*
├── README.md                     # Comprehensive documentation and run guide
├── public/
│   ├── images/
│   │   ├── collaviah-logo.svg    # Official brand vector logo
│   │   ├── can-strawberry-lime.svg # Vector fallback mockup for Strawberry Lime
│   │   ├── can-cranberry.svg     # Vector fallback mockup for Cranberry
│   │   ├── pack-6.svg            # Carton mockup for Pack of 6
│   │   ├── pack-12.svg           # Carton mockup for Pack of 12
│   │   ├── pack-24.svg           # Carton mockup for Pack of 24
│   │   ├── fruit/
│   │   │   ├── strawberry.svg    # Strawberry vector illustration
│   │   │   ├── lime.svg          # Lime slice vector illustration
│   │   │   ├── cranberry.svg     # Cranberry cluster vector illustration
│   │   │   └── monk-fruit.svg    # Luo Han Guo monk fruit illustration
│   │   └── florals/
│   │       └── petals.svg        # Sakura blush petal vector
├── scripts/
│   └── create-asset-fallbacks.js # Standalone script to generate vector asset fallbacks
└── src/
    ├── app/
    │   ├── api/
    │   │   └── quote/
    │   │       └── route.ts      # B2B quote submission, rate-limiting & honeypot API
    │   ├── about/
    │   │   └── page.tsx          # Japanese bio-lab story, vegan peptide science
    │   ├── contact/
    │   │   └── page.tsx          # Commercial accounts desk & buyer tasting kits
    │   ├── privacy/
    │   │   └── page.tsx          # B2B commercial data & trade privacy policy
    │   ├── products/
    │   │   └── [slug]/
    │   │       └── page.tsx      # Dynamic flavor deep dive with sommelier & nutrition
    │   ├── terms/
    │   │   └── page.tsx          # Wholesale terms of trade, MOQs, payment terms
    │   ├── wholesale/
    │   │   └── page.tsx          # Wholesale master case specs, pallet data & quote builder
    │   ├── globals.css           # Brand CSS tokens, scrollbars, accessible focus
    │   ├── layout.tsx            # Root layout, Google fonts (Playfair, Montserrat, Great Vibes), JSON-LD
    │   ├── page.tsx              # Homepage assembling all 11 choreographed sections
    │   ├── robots.ts             # Search engine crawler policies
    │   └── sitemap.ts            # Dynamic XML sitemap generator
    ├── components/
    │   ├── common/
    │   │   ├── BotanicalElements.tsx # Reusable SVG fruits, petals, leaves & droplets
    │   │   ├── CanMockup.tsx     # Photorealistic 2D vector can with condensation droplets
    │   │   ├── CartonMockup.tsx  # Interactive carton box with animated can-filling grid
    │   │   ├── Footer.tsx        # Rich black footer with gold accents & compliance notes
    │   │   ├── Navbar.tsx        # Sticky blur navigation with live quote badge & mobile drawer
    │   │   └── QuoteDrawer.tsx   # Slide-over cart drawer with live carton steppers & WhatsApp
    │   ├── motion/
    │   │   ├── AmbientCanvas.tsx # Floating sakura petals, bubbles, and gold dust canvas
    │   │   ├── CustomCursor.tsx  # Gold dot with soft ring and magnetic button attraction
    │   │   ├── LenisProvider.tsx # Lenis smooth scrolling connected with GSAP ScrollTrigger
    │   │   ├── Marquee.tsx       # Infinite smooth ticker ribbons
    │   │   ├── PageLoader.tsx    # Crimson-to-champagne curtain wipe with SVG logo draw
    │   │   ├── ScrollProgressBar.tsx # Gold top scroll progress bar
    │   │   └── SectionIndicator.tsx  # Side dots for section tracking and navigation
    │   └── sections/
    │       ├── HeroSection.tsx   # Giant wordmark, floating 3D-feel can, cursor parallax, CTAs
    │       ├── TrustBar.tsx      # Icon badges popping in with animated SVG stroke draw
    │       ├── WhyCollaviah.tsx  # Centered can with drawn gold connector lines and 4 callouts
    │       ├── FlavorsShowcase.tsx # Split-screen flavor switcher with physics-like fruit bursts
    │       ├── WholesalePacksSection.tsx # 3 interactive carton cards (6, 12, 24) with can grids
    │       ├── QuoteBuilderSection.tsx # Real-time B2B configurator, Zod validation, petal confetti
    │       ├── WhoWeServeSection.tsx # Horizontal scroll gallery with 3D tilt sector cards
    │       ├── HowItWorksSection.tsx # 5-step timeline with vertical drawn gold line
    │       ├── SocialProofSection.tsx # Partner ticker marquee & testimonial carousel
    │       ├── FAQSection.tsx    # Smooth accordion with plus-to-minus morphing icons
    │       └── FinalCTASection.tsx # Script accent banner with petal hover & magnetic CTA
    ├── context/
    │   └── QuoteContext.tsx      # React Context for wholesale carton quantities & drawer state
    ├── data/
    │   ├── flavors.ts            # Flavor profiles, nutrition panels, botanicals, compliance
    │   └── packs.ts              # Wholesale packs (6, 12, 24), sectors, timeline, FAQ, testimonials
    ├── lib/
    │   ├── utils.ts              # Tailwind merge helper & WhatsApp formatted message builder
    │   └── validations/
    │       └── quoteSchema.ts    # Zod schema for commercial quote submissions & honeypot
    └── types/
        └── index.ts              # Shared TypeScript interfaces
```

---

## 2. Design System & Visual Mood

### Color Tokens
- **Pearl White** (`#FFFFFF`): Primary background and clean airy spacing
- **Warm Champagne** (`#F6EDE4` / `#FAF5EE`): Secondary background, section transitions, luxury tints
- **Raspberry Crimson** (`#B5124A`, hover `#96103D`): Primary commercial CTAs, focus highlights
- **Antique Gold** (`#B07A2E`): Labels, section tags, borders, subtle foil accents
- **Soft Gold** (`#D4A94F`): Hover states, dividers, ambient dust particles
- **Rich Black** (`#1A1A1A`): Editorial serif headlines, primary dark footer
- **Warm Charcoal** (`#4A4340`): Body typography, high legibility contrast
- **Leaf Green** (`#2F5D3A`): Vegan certification, natural trust badges
- **Blush Pink** (`#F6D9DD`): Card backgrounds, cherry blossom petals, subtle tints
- **Strawberry Lime Accents**: `#D7263D` (Crimson Ruby) + `#9CC83C` (Sudachi Lime)
- **Cranberry Accents**: `#8E1B3A` (Deep Nordic Red) + `#B07A2E` (Antique Gold)

### Typography
- **Headings**: `Playfair Display` (next/font/google)
- **Body & Labels**: `Montserrat` (next/font/google)
- **Script Accent**: `Great Vibes` (next/font/google) used selectively for *"Glow from Within"*

---

## 3. Motion System & Interactive Choreography

1. **Page-Load Curtain Reveal**: Crimson-to-champagne curtain wipe with SVG stroke path drawing of the `COLLAVIAH` wordmark.
2. **Smooth Scroll**: Lenis integration synchronized with GSAP ScrollTrigger ticker.
3. **Ambient Canvas Layer**: Real-time canvas rendering slow-drifting sakura petals, micro-bubbles, and twinkling gold dust specks. Density automatically adjusts on mobile and pauses on `prefers-reduced-motion`.
4. **Custom Magnetic Cursor**: Gold dot with a smooth trailing spring ring that expands over cards and magnetically locks onto CTA buttons (desktop only).
5. **Hero Parallax**: Large serif wordmark pinned behind the 250ml can. Parallax layers of strawberries, limes, cranberries, and blush petals shift with mouse movement on desktop and scroll depth.
6. **Why COLLAVIAH Connectors**: Centered can stage where 4 claim cards connect via animated SVG gold drawn lines (`pathLength` transition).
7. **Flavors Showcase**: Split-screen flavor switcher. Switching between Strawberry Lime and Cranberry triggers an animated can slide, background gradient morph, and a physics-spring fruit burst.
8. **Wholesale Carton Grid**: Hovering or tapping a pack card (6, 12, or 24) reveals an animated grid of miniature 250ml cans populating the carton one by one.
9. **B2B Quote Builder**: Live can-counter updating in real time, instant WhatsApp message link generator, and celebratory sakura petal confetti on submission.
10. **Horizontal Scroll Gallery**: "Who We Serve" sector cards with subtle 3D hover tilt.
11. **Vertical Timeline**: 5-step timeline with a continuous gold connector line drawn downwards as you scroll.
12. **FAQ Accordion**: Smooth height expansion with SVG plus-to-minus morphing icon.

---

## 4. Getting Started & Local Development

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+ or pnpm / yarn

### Installation
```bash
# Clone or navigate to the project directory
cd "Collaviah simple"

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 5. How to Customize Assets, Pricing & Flavors

### A. Replacing Can, Fruit, and Carton Images
The application is built with photorealistic 2D vector components (`CanMockup.tsx`, `BotanicalElements.tsx`, `CartonMockup.tsx`) that render crisply on all screen sizes with zero layout shift.

To replace them with your own high-resolution 3D renders or photography:
1. Place your transparent PNG or WebP files in `public/images/`:
   - `public/images/can-strawberry-lime.png` (250ml slim can front render)
   - `public/images/can-cranberry.png` (250ml slim can front render)
   - `public/images/pack-6.png`, `pack-12.png`, `pack-24.png` (Carton photography)
   - `public/images/fruit/` and `public/images/florals/`
2. Update the `svgCanAsset` and `imageFallback` properties in `src/data/flavors.ts`.

### B. Adding or Modifying Flavors
All flavor profiles, tasting notes, botanicals, and nutrition panels are defined in **`src/data/flavors.ts`**.
To add a third flavor (e.g., *Yuzu Blossom*):
```typescript
{
  id: "yuzu-blossom",
  name: "Yuzu Blossom",
  tagline: "Crisp Japanese citrus with delicate white flower aromatics",
  // Add tasting notes, botanicals, nutrition, and colors...
}
```
The architecture automatically creates the `/products/yuzu-blossom` route via dynamic SSG (`generateStaticParams`).

### C. Modifying Pack Sizes, MOQs & Tier Pricing
All wholesale pack configurations are located in **`src/data/packs.ts`**:
- `moq`: Minimum carton quantity per order
- `tierDiscounts`: Percentage discount brackets based on carton volume
- `gridConfig`: Columns and rows for carton can visualization
- `dimensions` & `grossWeight`: Master shipper specifications

---

## 6. Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js.
4. Add your Environment Variables under **Project Settings > Environment Variables**:
   - `SALES_NOTIFICATION_EMAIL=wholesale@collaviah.com`
   - `NEXT_PUBLIC_WHATSAPP_PHONE=819012345678`
   - `RESEND_API_KEY` (optional, for automated transactional email delivery)
   - `QUOTE_WEBHOOK_URL` (optional, for Slack/CRM/Google Sheets integration)
5. Click **Deploy**.

---

## 7. Assumptions & Checklist of Items for Client Handover

The following items are configured with clearly designated placeholders and should be updated with official client assets upon market launch:

1. **High-Res Can & Carton Photography**:
   - Transparent PNG / WebP cutouts for Strawberry Lime and Cranberry 250ml slim cans.
   - Master carton photography for Packs of 6, 12, and 24.
2. **Official Vector Logo SVG**:
   - Replace `/public/images/collaviah-logo.svg` with your finalized brand vector marks.
3. **Regulatory & License Identifiers**:
   - Replace the `TODO` placeholders in `src/data/flavors.ts`:
     - FSSAI License Number (or regional FDA / EFSA registration).
     - Exact batch expiry & storage protocols.
4. **Commercial Pricing Rate Card**:
   - In accordance with B2B wholesale best practices, public pricing is displayed as *"Price on Wholesale Enquiry"* with volume tier discounts (-5%, -10%, -18%). If you wish to display fixed carton wholesale prices, update `priceGuide` in `src/data/packs.ts`.
5. **WhatsApp Number & Email**:
   - Set `NEXT_PUBLIC_WHATSAPP_PHONE` and `SALES_NOTIFICATION_EMAIL` in `.env.local` to your sales desk numbers.

