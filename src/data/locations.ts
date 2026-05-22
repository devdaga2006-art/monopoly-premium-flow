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
    slug: "vapi",
    city: "Vapi",
    region: "Gujarat",
    title: "Plastic Raw Material & Polymer Granules Supplier in Vapi | MONOPOLYMERS",
    description:
      "Bulk supplier of plastic granules and polymer raw materials in Vapi. PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin, TPR & PET delivered to Vapi GIDC manufacturers.",
    intro:
      "MONOPOLYMERS supplies plastic raw materials and polymer granules to manufacturers across Vapi GIDC and the broader Vapi industrial belt. We dispatch commodity and engineering polymers in bulk from our Mumbai HQ and Vasai warehouse with quick turnaround to Vapi.",
    highlights: [
      "Regular bulk dispatch to Vapi GIDC",
      "Commodity polymers: PP, LDPE, LLDPE, HDPE, PVC, PET",
      "Engineering polymers: ABS, PC, PA (Nylon), Delrin (POM), PMMA",
      "Specialty grades: EVA, TPR, TPE, GPPS, HIPS",
      "Trusted polymer distributor since 1996",
    ],
    industries: ["Plastics Processing", "Chemicals", "Packaging", "Textiles"],
    deliveryNote:
      "Serving Vapi, Sarigam, Umbergaon, Daman, Silvassa and the South Gujarat industrial corridor.",
  },
  {
    slug: "vasai",
    city: "Vasai",
    region: "Maharashtra",
    title: "Plastic Raw Material & Polymer Granules Supplier in Vasai | MONOPOLYMERS",
    description:
      "Local supplier of plastic granules and polymer raw materials in Vasai & Vasai-Virar. Bulk PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin, TPR & PET from MONOPOLYMERS Vasai warehouse.",
    intro:
      "MONOPOLYMERS operates a dedicated warehouse in Vasai East, supplying plastic raw materials and polymer granules to manufacturers across Vasai, Virar, Nalasopara and the wider Vasai-Virar industrial belt with same-day dispatch.",
    highlights: [
      "Vasai East warehouse for same-day local dispatch",
      "Bulk PP, LDPE, LLDPE, HDPE granules in stock",
      "Engineering grades: ABS, PC, PA (Nylon), Delrin (POM), PMMA",
      "EVA, TPR, TPE, GPPS, HIPS, PVC and PET available",
      "Family-run distributor with 30+ years of experience",
    ],
    industries: ["Plastics Processing", "Packaging", "Consumer Goods", "Footwear", "Electricals"],
    deliveryNote:
      "Serving Vasai, Virar, Nalasopara, Navghar, Bhayandar and the Vasai-Virar Municipal Corporation area.",
  },
  {
    slug: "bhiwandi",
    city: "Bhiwandi",
    region: "Maharashtra",
    title: "Plastic Raw Material & Polymer Granules Supplier in Bhiwandi | MONOPOLYMERS",
    description:
      "Bulk supplier of plastic granules and polymer raw materials in Bhiwandi. PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin, TPR & PET delivered to Bhiwandi warehouses and units.",
    intro:
      "MONOPOLYMERS supplies plastic raw materials and polymer granules to manufacturers, warehousing units and processors in Bhiwandi. From our Mumbai HQ and Vasai warehouse, we provide fast, reliable bulk dispatch across the Bhiwandi logistics belt.",
    highlights: [
      "Fast bulk dispatch to Bhiwandi warehouses & units",
      "Commodity polymers: PP, LDPE, LLDPE, HDPE, PVC, PET",
      "Engineering polymers: ABS, PC, PA (Nylon), Delrin (POM)",
      "Specialty grades: EVA, TPR, TPE, GPPS, HIPS",
      "Established polymer distributor since 1996",
    ],
    industries: ["Warehousing & Logistics", "Textiles", "Packaging", "Plastics Processing"],
    deliveryNote:
      "Serving Bhiwandi, Kalyan, Dombivli, Thane and the wider MMR logistics corridor.",
  },
  {
    slug: "india",
    city: "India",
    region: "Pan-India",
    title: "Plastic Raw Material & Polymer Granules Supplier in India | MONOPOLYMERS",
    description:
      "Pan-India supplier of plastic raw materials and polymer granules. Bulk PP, LDPE, LLDPE, HDPE, ABS, EVA, PVC, PC, Delrin, TPR & PET delivered across India by MONOPOLYMERS since 1996.",
    intro:
      "MONOPOLYMERS is a trusted pan-India supplier of plastic raw materials and polymer granules. With 1000+ customers, ₹100Cr+ annual turnover and 30 years of relationships, we serve manufacturers across Maharashtra, Gujarat, Daman, Delhi NCR, South India and beyond.",
    highlights: [
      "1000+ B2B customers across India",
      "Full polymer portfolio in stock for fast dispatch",
      "Commodity grades: PP, LDPE, LLDPE, HDPE, PVC, PET, GPPS, HIPS",
      "Engineering grades: ABS, PC, PA (Nylon), Delrin (POM), Acrylic",
      "EVA, TPR and TPE for footwear and over-moulding",
    ],
    industries: ["Packaging", "Automotive", "Consumer Goods", "Electrical & Electronics", "Textiles", "Footwear"],
    deliveryNote:
      "Pan-India dispatch from our Mumbai HQ and Vasai warehouse to manufacturers nationwide.",
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
