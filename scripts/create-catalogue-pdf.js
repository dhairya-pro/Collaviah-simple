const fs = require('fs');
const path = require('path');

// Clean, valid PDF 1.4 generator with multiple pages, tables, and typography
class SimplePdfBuilder {
  constructor() {
    this.objects = [];
    this.pages = [];
  }

  addObject(content) {
    this.objects.push(content);
    return this.objects.length; // 1-based object number
  }

  build(outputPath) {
    let out = '%PDF-1.4\n%âãÏÓ\n';
    const offsets = [];

    // Obj 1: Catalog
    const catalogObjNum = 1;
    // Obj 2: Pages root
    const pagesObjNum = 2;
    // Obj 3: Font Helvetica
    const fontHelveticaNum = 3;
    // Obj 4: Font Helvetica-Bold
    const fontBoldNum = 4;
    // Obj 5: Font Times-Roman
    const fontTimesNum = 5;

    // We will build 2 pages:
    // Page 1: B2B Overview, Specifications, Flavor Profiles
    // Page 2: Pack Configurations, Tier Pricing, Freight & Export Terms, Ordering Contacts

    const page1Content = `
q
0.96 0.94 0.91 rg
0 0 595 842 re f
Q

% Header Banner (Dark Maroon)
q
0.12 0.04 0.06 rg
0 730 595 112 re f
Q

% Gold accent line
q
0.83 0.66 0.31 rg
0 726 595 4 re f
Q

BT
/F2 26 Tf
1 1 1 rg
40 782 Td
(COLLAVIAH) Tj
ET

BT
/F1 10 Tf
0.83 0.66 0.31 rg
40 762 Td
(COMMERCIAL WHOLESALE CATALOGUE  |  MADE IN OSAKA, JAPAN) Tj
ET

BT
/F1 9 Tf
0.9 0.9 0.9 rg
400 778 Td
(Catalog Ref: COL-2026-B2B) Tj
400 764 Td
(Revision: 3.2 - Global Export) Tj
400 750 Td
(Valid: 2026-2027) Tj
ET

% Executive Summary
BT
/F2 13 Tf
0.12 0.04 0.06 rg
40 690 Td
(1. COMMERCIAL PRODUCT OVERVIEW) Tj
ET

q
0.9 0.88 0.84 rg
40 682 515 1 re f
Q

BT
/F1 9.5 Tf
0.2 0.2 0.2 rg
40 662 Td
(COLLAVIAH is a premium functional beverage formulated and canned in Osaka, Japan. Each 250ml) Tj
40 648 Td
(slim aluminum can provides 2,500mg of bio-fermented plant collagen peptides, 0g sugar (sweetened) Tj
40 634 Td
(exclusively with organic Luo Han Guo monk fruit), and under 15 kcal. Designed for luxury retail) Tj
40 620 Td
(shelves, hotel minibars, wellness clubs, and specialty cafe grab-and-go merchandisers.) Tj
ET

% Flavor Specifications
BT
/F2 13 Tf
0.12 0.04 0.06 rg
40 580 Td
(2. CORE PRODUCT LINEUP) Tj
ET

q
0.9 0.88 0.84 rg
40 572 515 1 re f
Q

% Flavor 1 Card: Strawberry Lime
q
1 1 1 rg
40 435 245 125 re f
0.83 0.66 0.31 RG
1 w
40 435 245 125 re S
Q

BT
/F2 11 Tf
0.71 0.07 0.29 rg
55 538 Td
(STRAWBERRY LIME) Tj
/F1 8 Tf
0.4 0.4 0.4 rg
55 524 Td
(SKU: COL-SL-250  |  UPC/EAN: 4580123456789) Tj
/F1 8.5 Tf
0.15 0.15 0.15 rg
55 504 Td
(* 2,500mg Plant Collagen Peptides) Tj
55 490 Td
(* Alpine Strawberry & Japanese Sudachi Lime) Tj
55 476 Td
(* 12 kcal  |  0g Sugar  |  100mg Vitamin C) Tj
55 462 Td
(* Format: 250ml Slim Can (Matte Finish)) Tj
55 448 Td
(* Shelf Life: 18 Months Ambient (4-22 deg C)) Tj
ET

% Flavor 2 Card: Lemon Lime
q
1 1 1 rg
310 435 245 125 re f
0.83 0.66 0.31 RG
1 w
310 435 245 125 re S
Q

BT
/F2 11 Tf
0.78 0.7 0.0 rg
325 538 Td
(LEMON LIME) Tj
/F1 8 Tf
0.4 0.4 0.4 rg
325 524 Td
(SKU: COL-LL-250  |  UPC/EAN: 4580987654321) Tj
/F1 8.5 Tf
0.15 0.15 0.15 rg
325 504 Td
(* 2,500mg Plant Collagen Peptides) Tj
325 490 Td
(* Sparkling Lemon Zest & Crisp Citrus Zest) Tj
325 476 Td
(* 10 kcal  |  0g Sugar  |  100mg Vitamin C) Tj
325 462 Td
(* Format: 250ml Slim Can (Matte Finish)) Tj
325 448 Td
(* Shelf Life: 18 Months Ambient (4-22 deg C)) Tj
ET

% Nutrition Table
BT
/F2 13 Tf
0.12 0.04 0.06 rg
40 395 Td
(3. NUTRITIONAL & REGULATORY SPECIFICATIONS (PER 250ML CAN)) Tj
ET

q
0.9 0.88 0.84 rg
40 387 515 1 re f
Q

% Table Header
q
0.2 0.2 0.2 rg
40 360 515 20 re f
Q

BT
/F2 8.5 Tf
1 1 1 rg
50 366 Td
(PARAMETER) Tj
160 366 Td
(QUANTITY) Tj
250 366 Td
(DAILY VALUE / COMPLIANCE) Tj
390 366 Td
(FUNCTIONAL BENEFIT) Tj
ET

% Table Rows
q
1 1 1 rg
40 220 515 140 re f
0.85 0.85 0.85 RG
0.5 w
40 220 515 140 re S
Q

BT
/F1 8.5 Tf
0.15 0.15 0.15 rg
50 344 Td
(Vegan Collagen Peptides) Tj
160 344 Td
(2,500 mg) Tj
250 344 Td
(Bio-fermented Gly-Pro-Hyp) Tj
390 344 Td
(Skin elasticity & hydration support) Tj

50 322 Td
(Total Sugar) Tj
160 322 Td
(0.00 g) Tj
250 322 Td
(0% DV  |  Monk Fruit Mogroside V) Tj
390 322 Td
(Zero blood-glucose spike) Tj

50 300 Td
(Calories / Energy) Tj
160 300 Td
(10 - 12 kcal) Tj
250 300 Td
(< 1% Daily Value) Tj
390 300 Td
(Clean low-calorie refreshment) Tj

50 278 Td
(Vitamin C (Ascorbic Acid)) Tj
160 278 Td
(100 mg) Tj
250 278 Td
(100% Recommended Intake) Tj
390 278 Td
(Essential collagen synthesis cofactor) Tj

50 256 Td
(Sodium) Tj
160 256 Td
(8 mg) Tj
250 256 Td
(< 1% Daily Value) Tj
390 256 Td
(Natural trace mineral balance) Tj

50 234 Td
(Certifications) Tj
160 234 Td
(Certified Vegan) Tj
250 234 Td
(ISO 22000, HACCP, Non-GMO) Tj
390 234 Td
(Export certified worldwide) Tj
ET

% Certifications Strip
q
0.92 0.88 0.80 rg
40 90 515 105 re f
0.83 0.66 0.31 RG
1 w
40 90 515 105 re S
Q

BT
/F2 11 Tf
0.12 0.04 0.06 rg
55 174 Td
(KEY BUYER ADVANTAGES & COMMERCIAL HIGHLIGHTS) Tj
/F1 8.5 Tf
0.2 0.2 0.2 rg
55 156 Td
(* High Margin Profile: 40% to 48% retail margin based on recommended $3.99 MSRP.) Tj
55 140 Td
(* Ambient Storage Stability: 18-month shelf life reduces chilled warehousing overhead.) Tj
55 124 Td
(* Category Differentiation: First Japan-made bio-fermented collagen drink in 250ml slim cans.) Tj
55 108 Td
(* Turnkey Marketing: Full merchandising POS kits, acrylic shelf-talkers & digital assets provided.) Tj
ET

% Footer Page 1
BT
/F1 8 Tf
0.5 0.5 0.5 rg
40 40 Td
(COLLAVIAH Japan Beverage Co.  |  4-1-1 Dosho-machi, Chuo-ku, Osaka 541-0045, Japan) Tj
470 40 Td
(Page 1 of 2) Tj
ET
`;

    const page2Content = `
q
0.96 0.94 0.91 rg
0 0 595 842 re f
Q

% Header Banner (Dark Maroon)
q
0.12 0.04 0.06 rg
0 750 595 92 re f
Q

% Gold accent line
q
0.83 0.66 0.31 rg
0 746 595 4 re f
Q

BT
/F2 20 Tf
1 1 1 rg
40 798 Td
(PACKAGING, LOGISTICS & WHOLESALE RATE CARD) Tj
ET

BT
/F1 9 Tf
0.83 0.66 0.31 rg
40 780 Td
(COLLAVIAH B2B COMMERCIAL TERMS  -  VALID WORLDWIDE) Tj
ET

BT
/F2 13 Tf
0.12 0.04 0.06 rg
40 705 Td
(4. PACK CONFIGURATIONS & MASTER CARTON SPECIFICATIONS) Tj
ET

q
0.9 0.88 0.84 rg
40 697 515 1 re f
Q

% Pack Comparison Table Header
q
0.2 0.2 0.2 rg
40 670 515 20 re f
Q

BT
/F2 8.5 Tf
1 1 1 rg
50 676 Td
(PACK FORMAT) Tj
135 676 Td
(CAN COUNT) Tj
195 676 Td
(CARTON DIMENSIONS) Tj
320 676 Td
(WEIGHT) Tj
380 676 Td
(MOQ (CARTONS)) Tj
465 676 Td
(IDEAL PLACEMENT) Tj
ET

% Pack Table Rows
q
1 1 1 rg
40 560 515 110 re f
0.85 0.85 0.85 RG
0.5 w
40 560 515 110 re S
Q

BT
/F1 8.5 Tf
0.15 0.15 0.15 rg
50 646 Td
(Pack of 6 (Counter Unit)) Tj
135 646 Td
(6 cans) Tj
195 646 Td
(165 x 110 x 135 mm) Tj
320 646 Td
(1.65 kg) Tj
380 646 Td
(10 Cartons (60 cans)) Tj
465 646 Td
(Cafe registers & salon checkout) Tj

50 610 Td
(Pack of 12 (Retail Case)) Tj
135 610 Td
(12 cans) Tj
195 610 Td
(220 x 165 x 135 mm) Tj
320 610 Td
(3.25 kg) Tj
380 610 Td
(8 Cartons (96 cans)) Tj
465 610 Td
(Organic grocery coolers & shelves) Tj

50 574 Td
(Pack of 24 (Master Case)) Tj
135 574 Td
(24 cans) Tj
195 574 Td
(330 x 220 x 135 mm) Tj
320 574 Td
(6.45 kg) Tj
380 574 Td
(5 Cartons (120 cans)) Tj
465 574 Td
(Distributor pallets & hotels) Tj
ET

% Tier Pricing Table
BT
/F2 13 Tf
0.12 0.04 0.06 rg
40 525 Td
(5. COMMERCIAL WHOLESALE PRICE MATRIX (USD)) Tj
ET

q
0.9 0.88 0.84 rg
40 517 515 1 re f
Q

% Rate Card Table
q
0.2 0.2 0.2 rg
40 490 515 20 re f
Q

BT
/F2 8.5 Tf
1 1 1 rg
50 496 Td
(PACK SIZE) Tj
120 496 Td
(TIER 1 (TRIAL)) Tj
200 496 Td
(TIER 2 (VOLUME)) Tj
285 496 Td
(TIER 3 (PALLET)) Tj
380 496 Td
(PER-CAN COST) Tj
460 496 Td
(RETAIL MARGIN) Tj
ET

q
1 1 1 rg
40 380 515 110 re f
0.85 0.85 0.85 RG
0.5 w
40 380 515 110 re S
Q

BT
/F1 8.5 Tf
0.15 0.15 0.15 rg
50 466 Td
(Pack of 6) Tj
120 466 Td
($14.50 / carton) Tj
200 466 Td
($13.78 (5% off)) Tj
285 466 Td
($13.34 (8% off)) Tj
380 466 Td
($2.22 - $2.41 / can) Tj
460 466 Td
(40% - 44% margin) Tj

50 430 Td
(Pack of 12) Tj
120 430 Td
($27.00 / carton) Tj
200 430 Td
($25.11 (7% off)) Tj
285 430 Td
($23.76 (12% off)) Tj
380 430 Td
($1.98 - $2.25 / can) Tj
460 430 Td
(44% - 50% margin) Tj

50 394 Td
(Pack of 24) Tj
120 394 Td
($49.20 / carton) Tj
200 394 Td
($44.28 (10% off)) Tj
285 394 Td
($40.34 (18% off)) Tj
380 394 Td
($1.68 - $2.05 / can) Tj
460 394 Td
(48% - 58% margin) Tj
ET

% Freight & Terms
BT
/F2 13 Tf
0.12 0.04 0.06 rg
40 345 Td
(6. SHIPPING, EXPORT & TRADE TERMS) Tj
ET

q
0.9 0.88 0.84 rg
40 337 515 1 re f
Q

BT
/F1 8.5 Tf
0.2 0.2 0.2 rg
40 320 Td
(* Shipping Incoterms: FOB Port of Osaka or CIF major destination seaports and air hubs.) Tj
40 305 Td
(* Pallet Optimization: 120 Master Cartons per standard EUR/ISO pallet (2,880 cans total per pallet).) Tj
40 290 Td
(* Lead Times: Stock orders dispatch within 48-72 hours. Custom production batches dispatch within 14 days.) Tj
40 275 Td
(* Documentation: Certificate of Origin, Certificate of Analysis (COA), HACCP and Phytosanitary certificates provided.) Tj
40 260 Td
(* Payment Terms: T/T wire transfer or confirmed Letter of Credit (L/C). Net 30 available for approved accounts.) Tj
ET

% Ordering Contact Box
q
0.12 0.04 0.06 rg
40 100 515 130 re f
0.83 0.66 0.31 RG
2 w
40 100 515 130 re S
Q

BT
/F2 12 Tf
0.83 0.66 0.31 rg
55 204 Td
(COMMERCIAL ACCOUNTS & BUYER SAMPLES) Tj
ET

BT
/F1 9 Tf
1 1 1 rg
55 186 Td
(To request buyer tasting kits, apply for commercial credit, or place an initial trial order:) Tj
55 168 Td
(Commercial Lead: Elena Sato, Head of Commercial Accounts) Tj
55 152 Td
(Direct Email: wholesale@collaviah.com  |  Alternative: orders@collaviah.com) Tj
55 136 Td
(Phone / WhatsApp: +81 6-6202-8800  |  Commercial Desk Mon-Fri 09:00 - 18:00 JST) Tj
55 120 Td
(Headquarters: COLLAVIAH Japan Beverage Co., 4-1-1 Dosho-machi, Chuo-ku, Osaka 541-0045, Japan) Tj
ET

% Footer Page 2
BT
/F1 8 Tf
0.5 0.5 0.5 rg
40 40 Td
(COLLAVIAH Japan Beverage Co.  |  Export Compliance: ISO 22000, HACCP, Certified Vegan  |  collaviah.com) Tj
470 40 Td
(Page 2 of 2) Tj
ET
`;

    // Objects definition
    const objects = [
      // 1: Catalog
      `<< /Type /Catalog /Pages 2 0 R >>`,
      // 2: Pages
      `<< /Type /Pages /Kids [6 0 R 7 0 R] /Count 2 >>`,
      // 3: Font Helvetica
      `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`,
      // 4: Font Helvetica-Bold
      `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`,
      // 5: Font Times-Roman
      `<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>`,
      // 6: Page 1
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents 8 0 R >>`,
      // 7: Page 2
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents 9 0 R >>`,
      // 8: Content Page 1
      `<< /Length ${Buffer.byteLength(page1Content.trim(), 'utf8')} >>\nstream\n${page1Content.trim()}\nendstream`,
      // 9: Content Page 2
      `<< /Length ${Buffer.byteLength(page2Content.trim(), 'utf8')} >>\nstream\n${page2Content.trim()}\nendstream`
    ];

    let body = '';
    const xref = [];
    xref.push('0000000000 65535 f \n');

    let currentPos = out.length;
    for (let i = 0; i < objects.length; i++) {
      const objNum = i + 1;
      const posStr = String(currentPos).padStart(10, '0');
      xref.push(`${posStr} 00000 n \n`);
      const objStr = `${objNum} 0 obj\n${objects[i]}\nendobj\n`;
      body += objStr;
      currentPos += objStr.length;
    }

    const xrefOffset = out.length + body.length;
    let trailer = `xref\n0 ${objects.length + 1}\n${xref.join('')}`;
    trailer += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

    const finalPdf = out + body + trailer;
    fs.writeFileSync(outputPath, finalPdf, 'binary');
    console.log(`Successfully generated PDF: ${outputPath} (${finalPdf.length} bytes)`);
  }
}

const builder = new SimplePdfBuilder();
builder.build(path.join(__dirname, '..', 'public', 'docs', 'collaviah-wholesale-catalogue.pdf'));
