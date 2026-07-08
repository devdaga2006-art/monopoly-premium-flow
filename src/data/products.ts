export interface PolymerSpec {
  property: string;
  value: string;
  unit?: string;
  method?: string;
}

export interface PolymerFAQ {
  q: string;
  a: string;
}

export interface Polymer {
  slug: string;
  code: string;
  name: string;
  fullName: string;
  shortDesc: string;
  longDesc: string;
  applications: string[];
  properties: string[];
  industries: string[];
  specs: PolymerSpec[];
  faqs: PolymerFAQ[];
  processing?: string[];
  brands?: string[];
  packaging?: string;
}

const COMMON_PACKAGING = "25 kg PP-woven bags with LDPE liner; 1000-1250 kg jumbo bags; palletised or loose-loaded in 20ft containers. Minimum order 1 MT; truckload (5-25 MT) preferred.";

export const POLYMERS: Polymer[] = [
  {
    slug: "polypropylene-pp",
    code: "PP",
    name: "Polypropylene",
    fullName: "Polypropylene (PP)",
    shortDesc: "Versatile thermoplastic for packaging, automotive parts, textiles, and consumer goods.",
    longDesc:
      "Polypropylene (PP) is one of the most widely used thermoplastics globally, prized for its balance of stiffness, chemical resistance, and low density. MONOPOLYMERS supplies homopolymer, copolymer, and random copolymer PP grades for injection moulding, blow moulding, extrusion, and fibre applications across India.",
    applications: ["Rigid packaging", "Automotive interior parts", "Woven sacks & raffia", "Caps & closures", "Household goods", "Non-woven fabrics"],
    properties: ["High stiffness-to-weight ratio", "Excellent chemical resistance", "Good fatigue resistance", "Food-contact safe grades available"],
    industries: ["Packaging", "Automotive", "Consumer Goods", "Agriculture"],
    processing: ["Injection Moulding", "Blow Moulding", "Extrusion", "Thermoforming", "Fibre Spinning"],
    brands: ["Reliance Repol", "IOCL Propel", "HMEL", "LyondellBasell Moplen", "SABIC"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "0.90-0.91", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (230°C/2.16 kg)", value: "2-35", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "30-38", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "1300-1700", unit: "MPa", method: "ASTM D790" },
      { property: "Notched Izod Impact (23°C)", value: "20-80", unit: "J/m", method: "ASTM D256" },
      { property: "Heat Deflection Temp (0.45 MPa)", value: "95-110", unit: "°C", method: "ASTM D648" },
      { property: "Vicat Softening Point", value: "148-155", unit: "°C", method: "ASTM D1525" },
      { property: "Form", value: "Natural granules", method: "-" },
    ],
    faqs: [
      { q: "What is the price of PP granules in India?", a: "PP granule prices in India typically range from ₹95-130 per kg depending on grade (homopolymer / copolymer / random), MFI, and prevailing Reliance / IOCL list price. Contact MONOPOLYMERS for a same-day quote based on your grade and quantity." },
      { q: "What is the minimum order quantity (MOQ) for PP?", a: "Our standard MOQ is 1 MT (40 x 25 kg bags), with best pricing on full truck loads of 5-25 MT. We can dispatch same-day from our Mumbai and Vasai warehouses." },
      { q: "Which PP grade should I use for injection moulding?", a: "For general injection moulding of household goods and thin-wall containers, a homopolymer grade with MFI 12-25 (e.g., Reliance Repol H110MA, H030SG) works well. For impact-critical parts, choose a block copolymer with MFI 8-20." },
      { q: "Do you supply food-grade / FDA-compliant PP?", a: "Yes, we stock food-contact-approved PP grades from Reliance, IOCL, and LyondellBasell that meet FDA 21 CFR 177.1520 and EU 10/2011 standards for direct food contact." },
      { q: "Is PP recyclable?", a: "Yes, PP carries recycling code 5 and is fully mechanically recyclable. We also supply post-industrial recycled (PIR) PP granules on request." },
    ],
  },
  {
    slug: "low-density-polyethylene-ldpe",
    code: "LDPE",
    name: "Low-Density Polyethylene",
    fullName: "Low-Density Polyethylene (LDPE)",
    shortDesc: "Flexible film, liners, squeeze bottles, and general-purpose packaging applications.",
    longDesc:
      "LDPE is a soft, flexible polyolefin widely used in film and flexible packaging. Its low density, excellent processability, and clarity make it the polymer of choice for shrink film, liners, and squeeze bottles. We supply LDPE grades from leading global producers.",
    applications: ["Shrink film", "Liners & garbage bags", "Squeeze bottles", "Wire & cable insulation", "Lamination film"],
    properties: ["High flexibility", "Excellent moisture barrier", "Good chemical resistance", "Easy to process"],
    industries: ["Packaging", "Agriculture", "Consumer Goods"],
    processing: ["Blown Film Extrusion", "Cast Film", "Extrusion Coating", "Injection Moulding"],
    brands: ["Reliance Relene", "GAIL", "IOCL", "LyondellBasell Lupolen", "SABIC"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "0.915-0.925", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (190°C/2.16 kg)", value: "0.3-25", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Break", value: "10-17", unit: "MPa", method: "ASTM D638" },
      { property: "Elongation at Break", value: "300-700", unit: "%", method: "ASTM D638" },
      { property: "Vicat Softening Point", value: "85-95", unit: "°C", method: "ASTM D1525" },
      { property: "Dart Impact (film)", value: "80-150", unit: "g", method: "ASTM D1709" },
      { property: "Form", value: "Natural granules", method: "-" },
    ],
    faqs: [
      { q: "What is the difference between LDPE and LLDPE?", a: "LDPE has long-branched chains giving it softer feel, better clarity, and easier processing on older extruders. LLDPE has short, linear branches giving higher tensile strength, puncture resistance, and elongation — ideal for stretch film. Many film converters blend the two for balance." },
      { q: "Which LDPE grade is best for shrink film?", a: "For collation shrink film, choose an LDPE grade with MFI 0.3-0.75 g/10 min (e.g., Reliance Relene 24FS040, LyondellBasell Lupolen 2420F). Lower MFI gives better bubble stability and shrink force." },
      { q: "Do you supply LDPE for wire and cable insulation?", a: "Yes, we stock cable-grade LDPE with tightly controlled MFI and dielectric properties, suitable for LV insulation and jacketing. Ask for LDPE cable compound grades." },
      { q: "What is the MOQ and delivery time for LDPE?", a: "MOQ is 1 MT. Ex-stock delivery from Mumbai/Vasai is same-day for orders confirmed by 2 PM; upcountry delivery to Pune, Ahmedabad, or Daman is 1-2 working days." },
    ],
  },
  {
    slug: "linear-low-density-polyethylene-lldpe",
    code: "LLDPE",
    name: "Linear Low-Density Polyethylene",
    fullName: "Linear Low-Density Polyethylene (LLDPE)",
    shortDesc: "Tough stretch films, agricultural films, and heavy-duty liners.",
    longDesc:
      "LLDPE offers superior tensile strength, puncture resistance, and elongation compared to conventional LDPE. It is the workhorse polymer for stretch wrap, agricultural mulch film, and heavy-duty liners across India's industrial base.",
    applications: ["Stretch & cling film", "Agricultural mulch film", "Heavy-duty bags", "Industrial liners", "Geomembranes"],
    properties: ["High tensile strength", "Excellent puncture resistance", "Good elongation at break", "Wide processing window"],
    industries: ["Packaging", "Agriculture", "Infrastructure"],
    processing: ["Blown Film Extrusion", "Cast Film", "Rotational Moulding", "Injection Moulding"],
    brands: ["Reliance Relene", "GAIL", "HMEL", "ExxonMobil Exceed", "SABIC"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "0.918-0.940", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (190°C/2.16 kg)", value: "0.8-20", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Break", value: "20-35", unit: "MPa", method: "ASTM D638" },
      { property: "Elongation at Break", value: "600-900", unit: "%", method: "ASTM D638" },
      { property: "Dart Impact (film)", value: "150-400", unit: "g", method: "ASTM D1709" },
      { property: "Vicat Softening Point", value: "95-118", unit: "°C", method: "ASTM D1525" },
      { property: "Comonomer", value: "Butene / Hexene / Octene", method: "-" },
    ],
    faqs: [
      { q: "Which LLDPE grade should I use for stretch film?", a: "For hand and machine stretch film, use an octene or hexene LLDPE with MFI 2-4 g/10 min and density 0.918-0.920 g/cm³ (e.g., ExxonMobil Exceed 1018, Reliance Relene M26GN010). These give the best puncture and cling performance." },
      { q: "Can LLDPE be used for rotational moulding?", a: "Yes, specific roto-grade LLDPEs (typically MFI 3-6, density ~0.935) are widely used for water tanks, chemical tanks, and containers. Ask for rotomoulding-grade LLDPE." },
      { q: "What is the difference between butene, hexene, and octene LLDPE?", a: "The comonomer controls film properties: butene is economical for basic films; hexene gives better strength and clarity; octene (metallocene) delivers the highest dart impact and toughness — used in premium stretch and heavy-duty film." },
      { q: "Do you supply agriculture-grade LLDPE with UV stabilisation?", a: "Yes, we stock UV-stabilised LLDPE mulch and greenhouse film grades with 1-3 year UV life ratings, sourced from Reliance and GAIL." },
    ],
  },
  {
    slug: "high-density-polyethylene-hdpe",
    code: "HDPE",
    name: "High-Density Polyethylene",
    fullName: "High-Density Polyethylene (HDPE)",
    shortDesc: "Rigid containers, pipes, blow-moulded bottles, and crates.",
    longDesc:
      "HDPE is a high-strength, semi-crystalline polyolefin used in blow moulding, pipe extrusion, and injection-moulded containers. MONOPOLYMERS supplies HDPE grades for blow-moulded bottles, water and gas pipes, crates, and woven bags.",
    applications: ["Blow-moulded bottles", "Water & gas pipes", "Crates & containers", "Woven sacks", "Cable insulation"],
    properties: ["High strength-to-density ratio", "Excellent chemical resistance", "Long service life", "Recyclable"],
    industries: ["Packaging", "Infrastructure", "Agriculture", "Consumer Goods"],
    processing: ["Blow Moulding", "Pipe Extrusion", "Injection Moulding", "Film Extrusion", "Raffia / Tape"],
    brands: ["Reliance Relene", "GAIL", "HMEL", "IOCL", "SABIC"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "0.941-0.965", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (190°C/2.16 kg)", value: "0.03-20", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "25-35", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "1000-1500", unit: "MPa", method: "ASTM D790" },
      { property: "ESCR (F50)", value: ">500", unit: "hours", method: "ASTM D1693" },
      { property: "Vicat Softening Point", value: "123-130", unit: "°C", method: "ASTM D1525" },
      { property: "Pipe Grade Classification", value: "PE 63 / PE 80 / PE 100", method: "ISO 4427" },
    ],
    faqs: [
      { q: "What is the difference between PE 80 and PE 100 pipe grade HDPE?", a: "PE 80 has a Minimum Required Strength (MRS) of 8.0 MPa and is used for lower-pressure water and gas pipes. PE 100 offers MRS 10.0 MPa, allowing thinner walls and higher operating pressures. We stock both, conforming to IS 4984 / ISO 4427." },
      { q: "Which HDPE grade is best for blow-moulded bottles?", a: "For 200 ml-5 L bottles, use a blow-moulding HDPE with MFI 0.3-0.8 g/10 min and density 0.952-0.958. Reliance Relene 5200B and equivalent grades give excellent ESCR and top-load strength." },
      { q: "Do you supply HDPE for woven sacks and FIBC?", a: "Yes, we stock raffia-grade HDPE (MFI ~0.7, density ~0.955) suitable for cement, fertiliser, and FIBC applications." },
      { q: "Is HDPE food-safe?", a: "Yes, we supply FDA and BIS-compliant food-grade HDPE for milk pouches, edible-oil bottles, and food containers." },
    ],
  },
  {
    slug: "acrylonitrile-butadiene-styrene-abs",
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
    fullName: "Acrylonitrile Butadiene Styrene (ABS)",
    shortDesc: "Impact-resistant engineering plastic for appliances, automotive, and electronics.",
    longDesc:
      "ABS is a tough, rigid engineering thermoplastic combining the strength of acrylonitrile, the gloss of styrene, and the impact resistance of polybutadiene. Widely used in appliance housings, automotive interior parts, and electronic enclosures.",
    applications: ["Appliance housings", "Automotive interior trims", "Electronic enclosures", "Toys & sports gear", "Pipe fittings"],
    properties: ["High impact strength", "Excellent surface finish", "Good dimensional stability", "Easy to machine and paint"],
    industries: ["Automotive", "Electrical & Electronics", "Consumer Goods"],
    processing: ["Injection Moulding", "Extrusion", "Blow Moulding", "Thermoforming", "3D Printing (FDM)"],
    brands: ["INEOS Styrolution Absolac / Terluran", "LG Chem", "Chi Mei", "SABIC Cycolac", "Kumho"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.04-1.07", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (220°C/10 kg)", value: "6-45", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "40-50", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "2100-2600", unit: "MPa", method: "ASTM D790" },
      { property: "Notched Izod Impact (23°C)", value: "180-350", unit: "J/m", method: "ASTM D256" },
      { property: "Heat Deflection Temp (1.82 MPa)", value: "82-95", unit: "°C", method: "ASTM D648" },
      { property: "Vicat Softening Point", value: "98-105", unit: "°C", method: "ASTM D1525" },
    ],
    faqs: [
      { q: "What are the common ABS grades and their uses?", a: "General-purpose ABS (e.g., Absolac 120) for appliance housings; high-impact ABS (Absolac 800) for automotive; heat-resistant ABS for hair-dryer casings; plating grade for chrome-plated automotive trims; flame-retardant (V0) for electronics." },
      { q: "Is ABS suitable for 3D printing?", a: "Yes, ABS is one of the most common FDM 3D printing filaments and can also be supplied as granules for pellet-fed printers. Ask for extrusion-grade ABS with narrow MFI distribution." },
      { q: "How does ABS compare to Polycarbonate?", a: "ABS is cheaper and easier to process but has lower impact strength and heat resistance than PC. Many premium products use PC/ABS blends to get PC's toughness with ABS's processability." },
      { q: "Do you supply flame-retardant (V0) ABS?", a: "Yes, we stock UL 94 V-0 rated flame-retardant ABS grades for electronic housings and switchgear applications." },
    ],
  },
  {
    slug: "ethylene-vinyl-acetate-eva",
    code: "EVA",
    name: "Ethylene-Vinyl Acetate",
    fullName: "Ethylene-Vinyl Acetate (EVA)",
    shortDesc: "Flexible, rubber-like polymer used in footwear, foams, and hot-melt adhesives.",
    longDesc:
      "EVA is a copolymer of ethylene and vinyl acetate, offering rubber-like softness, clarity, and toughness without the need for plasticizers. It is the standard polymer for footwear midsoles, foam sheets, and hot-melt adhesives.",
    applications: ["Footwear midsoles", "Foam sheets", "Hot-melt adhesives", "Solar encapsulation", "Flexible tubing"],
    properties: ["Rubber-like flexibility", "Good clarity", "Excellent stress-crack resistance", "UV and ozone resistance"],
    industries: ["Footwear", "Consumer Goods", "Solar & Electrical"],
    processing: ["Injection Moulding", "Extrusion", "Foaming", "Compression Moulding"],
    brands: ["Reliance Relene EVA", "LyondellBasell Lupolen V", "Hanwha", "LG Chem", "ExxonMobil Escorene"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "0.93-0.95", unit: "g/cm³", method: "ASTM D792" },
      { property: "Vinyl Acetate (VA) Content", value: "9-33", unit: "%", method: "ASTM D5594" },
      { property: "Melt Flow Index (190°C/2.16 kg)", value: "0.3-45", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Break", value: "10-25", unit: "MPa", method: "ASTM D638" },
      { property: "Elongation at Break", value: "700-900", unit: "%", method: "ASTM D638" },
      { property: "Shore A Hardness", value: "78-92", unit: "-", method: "ASTM D2240" },
      { property: "Vicat Softening Point", value: "40-75", unit: "°C", method: "ASTM D1525" },
    ],
    faqs: [
      { q: "Which EVA VA content should I choose?", a: "9-15% VA: film and cable applications; 18-22% VA: footwear midsoles and foam sheets; 25-33% VA: hot-melt adhesives and solar encapsulation. The higher the VA, the softer and more rubber-like the polymer." },
      { q: "Do you supply solar-grade EVA for module encapsulation?", a: "Yes, we can source solar encapsulant-grade EVA sheets and resin with 28-33% VA content, cross-linkable formulations for PV module lamination." },
      { q: "What is the price range of EVA granules in India?", a: "EVA granule prices vary from ₹140-220 per kg depending on VA content and MFI. Higher-VA and solar-grade EVAs command a premium. Contact us for a live quote." },
    ],
  },
  {
    slug: "high-impact-polystyrene-hips",
    code: "HIPS",
    name: "High-Impact Polystyrene",
    fullName: "High-Impact Polystyrene (HIPS)",
    shortDesc: "Tough styrenic plastic for refrigerator liners, signage, and disposables.",
    longDesc:
      "HIPS is a rubber-modified polystyrene that delivers impact strength and easy thermoforming. It is widely used in refrigerator inner liners, point-of-sale signage, and disposable cups & cutlery.",
    applications: ["Refrigerator liners", "Disposable cups & cutlery", "Signage & POS displays", "Toys", "Stationery"],
    properties: ["Good impact strength", "Excellent thermoformability", "Easy to print and decorate", "Cost-effective"],
    industries: ["Appliances", "Packaging", "Consumer Goods"],
    processing: ["Injection Moulding", "Sheet Extrusion", "Thermoforming"],
    brands: ["INEOS Styrolution Polystyrol", "LG Chem", "Supreme Petrochem Styron", "Chi Mei", "Trinseo"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.04-1.05", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (200°C/5 kg)", value: "3-14", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "18-28", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "1600-2200", unit: "MPa", method: "ASTM D790" },
      { property: "Notched Izod Impact (23°C)", value: "70-160", unit: "J/m", method: "ASTM D256" },
      { property: "Vicat Softening Point", value: "88-98", unit: "°C", method: "ASTM D1525" },
    ],
    faqs: [
      { q: "What is the difference between HIPS and GPPS?", a: "GPPS is crystal-clear, brittle, and rigid — ideal for cosmetic packaging. HIPS is opaque, rubber-modified, and much tougher — ideal for refrigerator liners and disposables that must survive drops and thermoforming." },
      { q: "Is HIPS food-safe?", a: "Yes, we supply FDA and IS 10142 compliant HIPS grades for disposable cups, plates, and cutlery." },
      { q: "Which HIPS grade is best for refrigerator liners?", a: "Use a high-impact HIPS with Izod >120 J/m and good ESCR to resist blowing agents from insulation foam (e.g., Supreme Styron 484, INEOS Polystyrol 486M)." },
    ],
  },
  {
    slug: "general-purpose-polystyrene-gpps",
    code: "GPPS",
    name: "General-Purpose Polystyrene",
    fullName: "General-Purpose Polystyrene (GPPS)",
    shortDesc: "Crystal-clear styrenic ideal for cosmetic packaging and disposables.",
    longDesc:
      "GPPS is a rigid, transparent styrenic plastic with excellent optical clarity and dimensional stability. It is the polymer of choice for cosmetic packaging, disposable cutlery, and CD cases.",
    applications: ["Cosmetic packaging", "Disposable cutlery", "CD/DVD cases", "Lighting diffusers", "Lab consumables"],
    properties: ["Crystal-clear transparency", "High stiffness", "Good dimensional stability", "Easy to process"],
    industries: ["Packaging", "Consumer Goods", "Electrical"],
    processing: ["Injection Moulding", "Sheet Extrusion", "Thermoforming"],
    brands: ["INEOS Styrolution Polystyrol", "Supreme Petrochem Styron", "LG Chem", "Chi Mei", "Trinseo"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.04-1.05", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (200°C/5 kg)", value: "1.5-25", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "40-55", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "2900-3400", unit: "MPa", method: "ASTM D790" },
      { property: "Light Transmission", value: "88-92", unit: "%", method: "ASTM D1003" },
      { property: "Vicat Softening Point", value: "98-108", unit: "°C", method: "ASTM D1525" },
    ],
    faqs: [
      { q: "Can GPPS be used for food contact?", a: "Yes, food-grade GPPS is BIS and FDA-approved for disposable cups, lids, and PET-alternative packaging." },
      { q: "What is the difference between injection-grade and extrusion-grade GPPS?", a: "Injection-grade GPPS has higher MFI (10-25) for fast-cycle moulding; extrusion-grade has lower MFI (1.5-4) for stable sheet and film production." },
      { q: "Does GPPS yellow over time?", a: "Standard GPPS can yellow under UV exposure. For outdoor applications choose PMMA (Acrylic) instead, or ask for UV-stabilised GPPS grades." },
    ],
  },
  {
    slug: "polycarbonate-pc",
    code: "PC",
    name: "Polycarbonate",
    fullName: "Polycarbonate (PC)",
    shortDesc: "Transparent, high-impact engineering plastic for lighting, electronics, and safety.",
    longDesc:
      "Polycarbonate is a tough, transparent engineering thermoplastic with exceptional impact resistance and thermal stability. Used in lighting diffusers, electronic housings, safety equipment, and optical media.",
    applications: ["LED lighting diffusers", "Electronic housings", "Safety eyewear & helmets", "Optical media", "Automotive headlamps"],
    properties: ["Exceptional impact resistance", "Optical clarity", "High heat resistance (up to 135°C)", "Flame-retardant grades available"],
    industries: ["Electrical & Electronics", "Automotive", "Construction"],
    processing: ["Injection Moulding", "Extrusion (sheet/film)", "Blow Moulding", "Thermoforming"],
    brands: ["Covestro Makrolon", "SABIC Lexan", "Trinseo Calibre", "Mitsubishi Iupilon", "LG Chem"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.20-1.22", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (300°C/1.2 kg)", value: "3-30", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "60-70", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "2300-2500", unit: "MPa", method: "ASTM D790" },
      { property: "Notched Izod Impact (23°C)", value: "700-900", unit: "J/m", method: "ASTM D256" },
      { property: "Heat Deflection Temp (1.82 MPa)", value: "125-135", unit: "°C", method: "ASTM D648" },
      { property: "Light Transmission", value: "88-90", unit: "%", method: "ASTM D1003" },
    ],
    faqs: [
      { q: "Which PC grade is best for LED lighting diffusers?", a: "Use an optical-grade PC with MFI 10-15 (e.g., Covestro Makrolon LED, SABIC Lexan LUX) that offers high light transmission and can be compounded with diffusing additives." },
      { q: "Is Polycarbonate BPA-free?", a: "Standard PC is manufactured from bisphenol-A (BPA). For BPA-sensitive applications (baby bottles, medical), choose Tritan copolyester or specific BPA-free PC alternatives." },
      { q: "Do you stock flame-retardant PC for electronics?", a: "Yes, we supply UL 94 V-0 and V-2 rated flame-retardant PC grades for switchgear, EV battery housings, and consumer electronics." },
      { q: "Can PC be used for automotive headlamp lenses?", a: "Yes, PC is the standard headlamp lens material. It requires a hard silicone coating for scratch and UV resistance." },
    ],
  },
  {
    slug: "polyvinyl-chloride-pvc",
    code: "PVC",
    name: "Polyvinyl Chloride",
    fullName: "Polyvinyl Chloride (PVC)",
    shortDesc: "Versatile resin for pipes, profiles, cables, and flexible applications.",
    longDesc:
      "PVC is one of the most versatile polymers, available in both rigid (uPVC) and flexible (plasticised) forms. Widely used in water and drainage pipes, window profiles, wire insulation, and flooring across India's construction sector.",
    applications: ["Water & drainage pipes", "Window & door profiles", "Wire & cable insulation", "Flooring & sheeting", "Medical tubing"],
    properties: ["Excellent chemical resistance", "Inherently flame-retardant", "Long service life", "Cost-effective"],
    industries: ["Infrastructure", "Construction", "Electrical"],
    processing: ["Pipe & Profile Extrusion", "Injection Moulding", "Calendering", "Blow Moulding"],
    brands: ["Reliance", "Chemplast Sanmar", "DCW", "Formosa", "LG Chem"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "K-Value (Suspension PVC)", value: "57-70", unit: "-", method: "ISO 1628-2" },
      { property: "Density (rigid)", value: "1.38-1.45", unit: "g/cm³", method: "ASTM D792" },
      { property: "Tensile Strength (rigid uPVC)", value: "40-55", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus (rigid)", value: "2400-3000", unit: "MPa", method: "ASTM D790" },
      { property: "Vicat Softening Point (rigid)", value: "76-82", unit: "°C", method: "ASTM D1525" },
      { property: "Volatile Content", value: "<0.3", unit: "%", method: "ISO 1269" },
      { property: "Bulk Density", value: "0.50-0.60", unit: "g/cm³", method: "ISO 60" },
    ],
    faqs: [
      { q: "What is K-value in PVC resin?", a: "K-value indicates molecular weight. K57-60 is used for injection moulding and rigid fittings; K65-67 for pipes and profiles; K70+ for cable insulation and flexible applications." },
      { q: "Do you supply lead-free / calcium-zinc stabilised PVC compound?", a: "We supply suspension PVC resin; for compounds we can arrange lead-free (Ca-Zn) stabilised formulations through partner compounders." },
      { q: "What is the difference between suspension, emulsion, and mass PVC?", a: "Suspension PVC (S-PVC) is the most common — used for pipes, profiles, cables. Emulsion PVC (E-PVC / paste) is used for coatings, gloves, and flooring. Mass/bulk PVC gives higher clarity for calendering." },
    ],
  },
  {
    slug: "thermoplastic-rubber-tpr",
    code: "TPR",
    name: "Thermoplastic Rubber",
    fullName: "Thermoplastic Rubber (TPR)",
    shortDesc: "Soft-touch elastomer for grips, seals, footwear, and over-moulding.",
    longDesc:
      "TPR combines the elasticity of rubber with the processability of thermoplastics. It is ideal for soft-touch over-moulded grips, seals, footwear outsoles, and sporting goods.",
    applications: ["Soft-touch grips", "Footwear outsoles", "Seals & gaskets", "Toys & sports goods", "Over-moulded handles"],
    properties: ["Rubber-like elasticity", "Easy over-moulding", "Wide hardness range", "Recyclable"],
    industries: ["Footwear", "Consumer Goods", "Automotive"],
    processing: ["Injection Moulding", "Over-moulding onto PP/ABS/PC", "Extrusion", "Blow Moulding"],
    brands: ["Kraiburg TPE", "Kraton", "LG Chem", "Dynasol", "Domestic compounders"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "0.90-1.20", unit: "g/cm³", method: "ASTM D792" },
      { property: "Shore Hardness", value: "5A-65D", unit: "-", method: "ASTM D2240" },
      { property: "Tensile Strength", value: "3-15", unit: "MPa", method: "ASTM D412" },
      { property: "Elongation at Break", value: "400-900", unit: "%", method: "ASTM D412" },
      { property: "Compression Set (22h/70°C)", value: "25-45", unit: "%", method: "ASTM D395" },
      { property: "Service Temperature", value: "-40 to +100", unit: "°C", method: "-" },
    ],
    faqs: [
      { q: "What is the difference between TPR, TPE and TPU?", a: "TPR (SBS/SEBS-based) is the softest and most economical, used in footwear and grips. TPE is a broad family including TPR. TPU (thermoplastic polyurethane) is tougher, more abrasion-resistant, and used in premium footwear, cables, and hose." },
      { q: "Can TPR be over-moulded onto PP or ABS?", a: "Yes, SEBS-based TPR grades bond well to PP; specific TPR-V grades bond to ABS, PC, and Nylon. Ask for over-moulding-compatible TPR." },
      { q: "What hardness of TPR is used for shoe outsoles?", a: "Typically Shore A 55-70 for casual/sports outsoles, with slip-resistance and abrasion additives. Injection MFI is usually 8-20 g/10 min at 200°C." },
    ],
  },
  {
    slug: "polyamide-pa-nylon",
    code: "PA",
    name: "Polyamide (Nylon)",
    fullName: "Polyamide / Nylon (PA)",
    shortDesc: "High-performance engineering polymer for automotive, electrical, and industrial parts.",
    longDesc:
      "Polyamide (Nylon) offers high mechanical strength, abrasion resistance, and thermal stability. PA6 and PA66 grades are widely used in automotive under-the-hood parts, electrical connectors, and industrial machinery components.",
    applications: ["Automotive under-hood parts", "Electrical connectors", "Gears & bearings", "Industrial machinery", "Cable ties"],
    properties: ["High mechanical strength", "Excellent wear & abrasion resistance", "Good thermal stability", "Self-lubricating"],
    industries: ["Automotive", "Electrical & Electronics", "Industrial"],
    processing: ["Injection Moulding", "Extrusion", "Blow Moulding", "Compounding (GF-reinforced)"],
    brands: ["BASF Ultramid", "DuPont Zytel", "Lanxess Durethan", "Radici Radilon", "Domo Technyl"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density (unfilled PA6)", value: "1.13-1.15", unit: "g/cm³", method: "ASTM D792" },
      { property: "Tensile Strength (dry)", value: "70-85", unit: "MPa", method: "ASTM D638" },
      { property: "Tensile Strength (GF30)", value: "160-180", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus (dry)", value: "2500-2800", unit: "MPa", method: "ASTM D790" },
      { property: "Melting Point PA6 / PA66", value: "220 / 260", unit: "°C", method: "ASTM D3418" },
      { property: "HDT (1.82 MPa, GF30)", value: "200-220", unit: "°C", method: "ASTM D648" },
      { property: "Moisture Absorption (24h)", value: "1.2-1.8", unit: "%", method: "ASTM D570" },
    ],
    faqs: [
      { q: "What is the difference between PA6 and PA66?", a: "PA66 has a higher melting point (260°C vs 220°C), better stiffness, and better heat resistance — preferred for under-hood automotive parts. PA6 is easier to process, absorbs more moisture, and is cheaper — used for consumer parts, films, and fibres." },
      { q: "Do you supply glass-fibre reinforced Nylon (PA6-GF30, PA66-GF30)?", a: "Yes, we supply GF15, GF30, GF50 reinforced PA6 and PA66 for structural automotive and industrial parts. Ask for BASF Ultramid, Lanxess Durethan, or Radici Radilon grades." },
      { q: "Does Nylon absorb moisture?", a: "Yes, PA6 and PA66 are hygroscopic and absorb 1.5-3% moisture, which affects dimensions and properties. Granules must be dried at 80°C for 4 hours before moulding, and dry-as-moulded (DAM) specs should be used for design." },
      { q: "What Nylon grade is used for cable ties?", a: "Extrusion/injection PA66 with medium viscosity (MFI ~15) provides the strength and flexibility needed for cable ties and zip fasteners." },
    ],
  },
  {
    slug: "polyoxymethylene-pom-acetal",
    code: "POM",
    name: "Polyoxymethylene (Acetal / Delrin)",
    fullName: "Polyoxymethylene / Acetal / Delrin (POM)",
    shortDesc: "Stiff, low-friction engineering plastic granules for precision gears and mechanical parts. Also known as Delrin.",
    longDesc:
      "POM (Acetal), commonly known by the brand name Delrin, is a high-stiffness, low-friction engineering thermoplastic ideal for precision components. MONOPOLYMERS supplies POM / Delrin granules in bulk for automotive fuel systems, plumbing fittings, and consumer mechanism parts.",
    applications: ["Precision gears", "Automotive fuel system parts", "Plumbing fittings", "Zippers & clips", "Conveyor components"],
    properties: ["High stiffness & strength", "Low coefficient of friction", "Excellent dimensional stability", "Good fatigue resistance"],
    industries: ["Automotive", "Industrial", "Consumer Goods"],
    processing: ["Injection Moulding", "Extrusion (rod/sheet)", "Machining"],
    brands: ["DuPont Delrin", "Celanese Celcon / Hostaform", "Polyplastics Duracon", "Korea Engineering Plastics Kepital", "Mitsubishi Iupital"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.39-1.42", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (190°C/2.16 kg)", value: "2-45", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "62-72", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "2600-2900", unit: "MPa", method: "ASTM D790" },
      { property: "Coefficient of Friction (dynamic)", value: "0.20-0.35", unit: "-", method: "-" },
      { property: "Melting Point", value: "165-175", unit: "°C", method: "-" },
      { property: "HDT (1.82 MPa)", value: "100-110", unit: "°C", method: "ASTM D648" },
    ],
    faqs: [
      { q: "What is the difference between POM Homopolymer (Delrin) and POM Copolymer (Celcon/Hostaform)?", a: "Homopolymer POM (DuPont Delrin) has slightly higher mechanical strength and stiffness. Copolymer POM (Celanese Celcon, Polyplastics Duracon) offers better long-term thermal stability and chemical resistance, especially in hot water. Both are widely used for gears and precision parts." },
      { q: "Is POM / Delrin food-safe?", a: "Yes, most POM grades from DuPont, Celanese, and Polyplastics have FDA and EU 10/2011 approvals for food and drinking-water contact. Common use: water filter housings, coffee-machine parts." },
      { q: "Can POM be welded or bonded?", a: "POM is difficult to bond with adhesives due to its low surface energy — surface treatment (flame, corona, plasma) is required. It can be ultrasonic-welded and hot-plate welded well." },
      { q: "What is a typical MFI for POM injection moulding?", a: "General-purpose POM injection grades have MFI 9-15 g/10 min; fast-cycle thin-wall grades go up to 27-45 MFI; extrusion grades are 1-2.5 MFI." },
    ],
  },
  {
    slug: "acrylic-pmma",
    code: "Acrylic",
    name: "PMMA (Acrylic)",
    fullName: "Polymethyl Methacrylate (PMMA / Acrylic)",
    shortDesc: "Optically clear, weather-resistant polymer for signage, displays, and lighting.",
    longDesc:
      "PMMA (Acrylic) offers glass-like optical clarity with half the weight and superior weatherability. Widely used in signage, lighting diffusers, display panels, and architectural glazing.",
    applications: ["Signage & displays", "Lighting diffusers", "Architectural glazing", "Automotive tail lamps", "Sanitaryware"],
    properties: ["92% light transmission", "Excellent weather resistance", "UV stability", "Easy to thermoform"],
    industries: ["Signage", "Construction", "Automotive"],
    processing: ["Injection Moulding", "Extrusion (sheet)", "Cast Sheet", "Thermoforming"],
    brands: ["Arkema Altuglas / Plexiglas", "Mitsubishi Shinkolite", "LG Chem", "Trinseo", "Sumitomo Sumipex"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.17-1.20", unit: "g/cm³", method: "ASTM D792" },
      { property: "Melt Flow Index (230°C/3.8 kg)", value: "1.5-25", unit: "g/10 min", method: "ASTM D1238" },
      { property: "Tensile Strength at Yield", value: "65-75", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "3100-3400", unit: "MPa", method: "ASTM D790" },
      { property: "Light Transmission", value: "92", unit: "%", method: "ASTM D1003" },
      { property: "Refractive Index", value: "1.491", unit: "-", method: "ASTM D542" },
      { property: "HDT (1.82 MPa)", value: "88-100", unit: "°C", method: "ASTM D648" },
    ],
    faqs: [
      { q: "How does PMMA compare to Polycarbonate?", a: "PMMA has better optical clarity, UV stability, and scratch resistance, and is cheaper. PC has ~30x higher impact strength and higher heat resistance. Use PMMA for signage/lighting; PC for safety and impact-critical parts." },
      { q: "Do you supply cast or extruded PMMA sheets?", a: "We primarily supply PMMA granules for injection and extrusion. For cast/extruded sheets, we can source through our sheet partners on request." },
      { q: "Is PMMA suitable for outdoor signage?", a: "Yes, PMMA has excellent 10+ year outdoor UV stability without yellowing, making it the industry standard for backlit signage, hoardings, and channel letters." },
    ],
  },
  {
    slug: "polyethylene-terephthalate-pet",
    code: "PET",
    name: "Polyethylene Terephthalate",
    fullName: "Polyethylene Terephthalate (PET)",
    shortDesc: "Clear, strong polymer for bottles, fibres, and food-grade packaging.",
    longDesc:
      "PET is the dominant polymer for beverage bottles, fibres, and food-grade packaging. Its clarity, strength, and excellent gas-barrier properties make it the global standard for water and carbonated soft drink bottles.",
    applications: ["Water & beverage bottles", "Food-grade containers", "Polyester fibres", "Thermoformed trays", "Film & sheet"],
    properties: ["Excellent clarity", "High tensile strength", "Good gas barrier", "Fully recyclable"],
    industries: ["Packaging", "Textiles", "Food & Beverage"],
    processing: ["Injection Stretch-Blow Moulding (ISBM)", "Extrusion", "Fibre Spinning", "Thermoforming"],
    brands: ["Reliance Relpet", "IVL Dhunseri", "JBF", "Indorama", "SABIC"],
    packaging: COMMON_PACKAGING,
    specs: [
      { property: "Density", value: "1.38-1.40", unit: "g/cm³", method: "ASTM D792" },
      { property: "Intrinsic Viscosity (IV)", value: "0.72-0.85", unit: "dL/g", method: "ASTM D4603" },
      { property: "Tensile Strength", value: "55-75", unit: "MPa", method: "ASTM D638" },
      { property: "Flexural Modulus", value: "2400-3100", unit: "MPa", method: "ASTM D790" },
      { property: "Melting Point", value: "245-255", unit: "°C", method: "-" },
      { property: "Glass Transition (Tg)", value: "70-80", unit: "°C", method: "-" },
      { property: "Moisture Content (as-supplied)", value: "<0.4", unit: "%", method: "-" },
    ],
    faqs: [
      { q: "What IV of PET should I use for water and CSD bottles?", a: "IV 0.76-0.80 dL/g is standard for mineral water bottles. IV 0.80-0.85 is used for carbonated soft drink (CSD) bottles that need higher stress-crack resistance. Fibre-grade PET is typically IV 0.62-0.68." },
      { q: "Do you supply food-grade / FDA-approved PET resin?", a: "Yes, all bottle-grade PET we supply (Reliance Relpet, IVL, JBF, Indorama) is FDA 21 CFR 177.1630 and BIS/FSSAI approved for direct food and beverage contact." },
      { q: "Does PET need to be dried before processing?", a: "Yes, PET is highly hygroscopic and MUST be dried to <50 ppm (<0.005%) moisture before injection or ISBM processing, typically at 160-170°C for 4-6 hours in a desiccant dryer. Wet PET causes IV drop, hazy bottles, and moulding defects." },
      { q: "Do you supply rPET (recycled PET) granules?", a: "Yes, we can arrange food-grade rPET (FSSAI/EFSA-approved) as well as textile-grade rPET flakes and pellets on request." },
    ],
  },
];

export function getPolymerBySlug(slug: string): Polymer | undefined {
  return POLYMERS.find((p) => p.slug === slug);
}
