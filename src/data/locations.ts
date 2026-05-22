export interface Location {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  industries: string[];
  deliveryNote: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    title: "Plastic Raw Material & Polymer Granules Supplier in Mumbai | MONOPOLYMERS",
    description:
      "Trusted supplier of plastic granules and polymer raw materials in Mumbai since 1996. Bulk PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin (POM), TPR & PET from our Mumbai HQ and Vasai warehouse.",
    intro:
      "MONOPOLYMERS is one of Mumbai's most trusted distributors of plastic raw materials and polymer granules. Headquartered in Mumbai with a dedicated warehouse in Vasai, we supply commodity and engineering polymers to 1000+ manufacturers across Maharashtra with same-day and next-day dispatch.",
    highlights: [
      "Mumbai HQ + Vasai warehouse for same-day dispatch",
      "Bulk PP, LDPE, LLDPE, HDPE granules in stock",
      "Engineering grades: ABS, PC, Nylon (PA), Delrin (POM), Acrylic",
      "EVA, TPR, TPE, GPPS, HIPS, PVC and PET available",
      "Trusted by 1000+ Mumbai-based manufacturers",
    ],
    industries: ["Packaging", "Automotive", "Consumer Goods", "Electrical & Electronics", "Footwear"],
    deliveryNote:
      "Delivering plastic granules across Mumbai, Navi Mumbai, Thane, Vasai-Virar, Bhiwandi and the wider MMR.",
  },
  {
    slug: "daman",
    city: "Daman",
    region: "Daman & Diu",
    title: "Plastic Raw Material & Polymer Granules Supplier in Daman | MONOPOLYMERS",
    description:
      "Bulk supplier of plastic granules and polymer raw materials in Daman. PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin, TPR and PET delivered to Daman manufacturers from MONOPOLYMERS.",
    intro:
      "MONOPOLYMERS supplies plastic raw materials and polymer granules to manufacturers across Daman's industrial belt. From our Mumbai HQ and Vasai warehouse, we offer fast, reliable bulk dispatch of commodity and engineering polymers to Daman's packaging, plastics processing and consumer goods units.",
    highlights: [
      "Regular dispatch to Daman industrial estates",
      "Commodity polymers: PP, LDPE, LLDPE, HDPE, PVC, PET",
      "Engineering polymers: ABS, PC, PA (Nylon), Delrin (POM), PMMA",
      "Specialty grades: EVA, TPR, TPE, GPPS, HIPS",
      "Family-run distribution business since 1996",
    ],
    industries: ["Plastics Processing", "Packaging", "Consumer Goods", "Electrical"],
    deliveryNote:
      "Serving Daman, Vapi, Silvassa and the surrounding Union Territory industrial corridor.",
  },
  {
    slug: "gujarat",
    city: "Gujarat",
    region: "Gujarat",
    title: "Plastic Raw Material & Polymer Granules Supplier in Gujarat | MONOPOLYMERS",
    description:
      "Reliable supplier of plastic granules and polymer raw materials across Gujarat. Bulk PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin, TPR & PET to Ahmedabad, Vapi, Surat, Vadodara and Rajkot.",
    intro:
      "MONOPOLYMERS serves Gujarat's vast manufacturing base with a complete portfolio of plastic raw materials and polymer granules. We supply 1000+ B2B customers including units in Ahmedabad, Vapi, Surat, Vadodara, Rajkot and Bharuch with bulk dispatch from our Mumbai and Vasai warehouses.",
    highlights: [
      "Bulk supply to Ahmedabad, Vapi, Surat, Vadodara, Rajkot",
      "Full polymer portfolio in stock for fast dispatch",
      "Commodity grades: PP, LDPE, LLDPE, HDPE, PVC, PET, GPPS, HIPS",
      "Engineering grades: ABS, PC, PA (Nylon), Delrin (POM), Acrylic",
      "EVA, TPR and TPE for footwear and over-moulding",
    ],
    industries: ["Packaging", "Textiles", "Automotive", "Chemicals & Plastics", "Agriculture"],
    deliveryNote:
      "Delivering across Gujarat: Ahmedabad, Surat, Vadodara, Rajkot, Vapi, Bharuch, Jamnagar and beyond.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
