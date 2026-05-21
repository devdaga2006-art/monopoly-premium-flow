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
}

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
  },
  {
    slug: "polyoxymethylene-pom-acetal",
    code: "POM",
    name: "Polyoxymethylene (Acetal)",
    fullName: "Polyoxymethylene / Acetal (POM)",
    shortDesc: "Stiff, low-friction engineering plastic for precision gears and mechanical parts.",
    longDesc:
      "POM (Acetal) is a high-stiffness, low-friction engineering thermoplastic ideal for precision components. Common in automotive fuel systems, plumbing fittings, and consumer mechanism parts.",
    applications: ["Precision gears", "Automotive fuel system parts", "Plumbing fittings", "Zippers & clips", "Conveyor components"],
    properties: ["High stiffness & strength", "Low coefficient of friction", "Excellent dimensional stability", "Good fatigue resistance"],
    industries: ["Automotive", "Industrial", "Consumer Goods"],
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
  },
];

export function getPolymerBySlug(slug: string): Polymer | undefined {
  return POLYMERS.find((p) => p.slug === slug);
}
