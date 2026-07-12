import {
  Package, Milk, Wine, Boxes, PillBottle, Car, Home, Wrench, Sprout,
  Zap, Droplets, Shirt, ShoppingBag, Cable, HardHat, Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Application {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  recommendedPolymers: string[]; // polymer slugs
  useCases: string[];
  keyProperties: string[];
  seoTitle: string;
  seoDescription: string;
}

export const APPLICATIONS: Application[] = [
  {
    slug: "rigid-packaging",
    title: "Rigid Packaging",
    category: "Packaging",
    icon: Package,
    shortDesc: "Bottles, jars, tubs, caps and closures for FMCG, food and personal care.",
    longDesc:
      "Injection and blow-moulded rigid containers demand tight dimensional control, gloss, ESCR and food-contact compliance. We supply HDPE blow-moulding grades, PP homopolymer for caps, PET for bottles, and GPPS/HIPS for tubs and thin-wall packaging.",
    recommendedPolymers: ["high-density-polyethylene-hdpe", "polypropylene-pp", "polyethylene-terephthalate-pet", "general-purpose-polystyrene-gpps", "high-impact-polystyrene-hips"],
    useCases: ["Milk and edible-oil bottles", "Shampoo and cosmetic containers", "Ice-cream and dairy tubs", "Caps, closures and dispensers"],
    keyProperties: ["Food-grade compliance", "ESCR", "High gloss", "Impact strength"],
    seoTitle: "HDPE, PP & PET for Rigid Packaging | MONOPOLYMERS India",
    seoDescription: "Food-grade HDPE, PP homopolymer, PET, GPPS and HIPS for bottles, jars, tubs, caps and closures. Bulk supply in Mumbai, Vasai and across India.",
  },
  {
    slug: "flexible-packaging",
    title: "Flexible Packaging & Films",
    category: "Packaging",
    icon: Milk,
    shortDesc: "Mono and multilayer films for food, laminates, shrink and stretch wrap.",
    longDesc:
      "Extrusion film converters need consistent MFI, low gel counts and predictable seal behaviour. Our LDPE, LLDPE (butene/hexene/metallocene) and blown-film PP grades cover lamination, collation shrink, stretch wrap and heavy-duty sacks.",
    recommendedPolymers: ["low-density-polyethylene-ldpe", "linear-low-density-polyethylene-lldpe", "polypropylene-pp", "ethylene-vinyl-acetate-eva"],
    useCases: ["Food and snack laminates", "Stretch and shrink film", "Lamination sealant layers", "Heavy-duty industrial sacks"],
    keyProperties: ["Puncture resistance", "Seal strength", "Optical clarity", "Consistent MFI"],
    seoTitle: "LDPE, LLDPE & PP Film Grades for Flexible Packaging | India",
    seoDescription: "Blown-film LDPE, butene/hexene/metallocene LLDPE, PP and EVA for laminates, shrink and stretch film. Supplied from Mumbai, Vasai, Bhiwandi and Daman.",
  },
  {
    slug: "automotive-components",
    title: "Automotive Components",
    category: "Automotive",
    icon: Car,
    shortDesc: "Interior trims, under-hood parts, bumpers and structural OEM components.",
    longDesc:
      "OEM tier-1 and tier-2 suppliers rely on PP copolymer, ABS, PC, PC/ABS blends, PA6/PA66 and POM for strength, heat and impact performance. We stock automotive-grade polymers with COAs and consistent lot-to-lot supply.",
    recommendedPolymers: ["polypropylene-pp", "acrylonitrile-butadiene-styrene-abs", "polycarbonate-pc", "polyamide-pa-nylon", "polyoxymethylene-pom-acetal"],
    useCases: ["Bumpers and body panels", "Dashboards and door trims", "Under-hood connectors", "Gears, bushings and clips"],
    keyProperties: ["Impact strength", "Heat resistance", "Dimensional stability", "Low warpage"],
    seoTitle: "PP, ABS, PC, Nylon & POM for Automotive Parts | India",
    seoDescription: "Automotive-grade PP copolymer, ABS, PC/ABS, PA6/PA66 nylon and POM (Delrin) with COAs for OEMs across Mumbai, Vapi, Gujarat and India.",
  },
  {
    slug: "consumer-appliances",
    title: "Consumer Appliances & Electronics",
    category: "Consumer Goods",
    icon: Cpu,
    shortDesc: "Housings, enclosures and internal parts for appliances and electronics.",
    longDesc:
      "ABS, HIPS, PC and PC/ABS deliver the aesthetics, flame retardancy and impact required for TV bezels, appliance housings, power tools and small kitchen appliances.",
    recommendedPolymers: ["acrylonitrile-butadiene-styrene-abs", "high-impact-polystyrene-hips", "polycarbonate-pc", "polypropylene-pp"],
    useCases: ["TV and monitor housings", "Refrigerator liners", "Power tool bodies", "Small kitchen appliances"],
    keyProperties: ["Gloss finish", "Flame retardancy", "Impact strength", "Paintability"],
    seoTitle: "ABS, HIPS, PC & PP for Appliances & Electronics | India",
    seoDescription: "Flame-retardant ABS, HIPS, polycarbonate and PP for TV bezels, refrigerator, power tool and appliance housings. Supplied across India from Vasai.",
  },
  {
    slug: "pipes-fittings",
    title: "Pipes, Fittings & Plumbing",
    category: "Infrastructure",
    icon: Droplets,
    shortDesc: "Pressure pipes, drainage, plumbing fittings and cable ducts.",
    longDesc:
      "PVC, HDPE PE80/PE100 and PP-R serve potable water, gas, drainage, irrigation and industrial piping. We supply pipe-grade resins with long-term hydrostatic strength and consistent processing.",
    recommendedPolymers: ["polyvinyl-chloride-pvc", "high-density-polyethylene-hdpe", "polypropylene-pp"],
    useCases: ["Water and gas pipes", "SWR and drainage", "Cable ducts and conduits", "Plumbing fittings"],
    keyProperties: ["Hydrostatic strength", "Chemical resistance", "UV stability", "Weldability"],
    seoTitle: "PVC, HDPE & PP Pipe Grades for Plumbing | MONOPOLYMERS",
    seoDescription: "Pipe-grade PVC, HDPE PE80/PE100 and PP-R for water, gas, drainage and irrigation. Distributed in Mumbai, Bhiwandi, Vapi, Daman and Gujarat.",
  },
  {
    slug: "agriculture",
    title: "Agriculture & Irrigation",
    category: "Agriculture",
    icon: Sprout,
    shortDesc: "Drip pipes, mulch films, greenhouse covers and crates.",
    longDesc:
      "Farm-grade polymers must withstand UV, chemicals and mechanical stress. LLDPE and LDPE dominate drip and mulch films, while HDPE serves crates and tanks.",
    recommendedPolymers: ["linear-low-density-polyethylene-lldpe", "low-density-polyethylene-ldpe", "high-density-polyethylene-hdpe", "polypropylene-pp"],
    useCases: ["Drip and sprinkler pipes", "Mulch and greenhouse films", "Storage tanks", "Agri crates and trays"],
    keyProperties: ["UV resistance", "Puncture resistance", "Chemical resistance", "Long service life"],
    seoTitle: "LLDPE, LDPE & HDPE for Agri Films & Irrigation | India",
    seoDescription: "UV-stabilised LLDPE, LDPE and HDPE for drip pipes, mulch and greenhouse films, tanks and crates. Bulk supply across Maharashtra and Gujarat.",
  },
  {
    slug: "electrical-cable",
    title: "Electrical, Wire & Cable",
    category: "Electrical",
    icon: Cable,
    shortDesc: "Cable insulation, sheathing, switchgear and electrical housings.",
    longDesc:
      "Insulation grades of LDPE, XLPE-compatible PE, PVC compounds and engineering plastics (PA, PC) meet dielectric strength, flame retardancy and thermal endurance requirements.",
    recommendedPolymers: ["low-density-polyethylene-ldpe", "polyvinyl-chloride-pvc", "polyamide-pa-nylon", "polycarbonate-pc"],
    useCases: ["Cable insulation and sheath", "Switchgear housings", "Connectors and terminals", "Junction boxes"],
    keyProperties: ["Dielectric strength", "Flame retardancy", "Thermal endurance", "Colourability"],
    seoTitle: "LDPE, PVC, Nylon & PC for Wire, Cable & Switchgear",
    seoDescription: "Insulation LDPE, PVC compounds, PA nylon and polycarbonate for cables, sheathing, switchgear and junction boxes. Supplied to Mumbai, Vasai and Vapi.",
  },
  {
    slug: "houseware-furniture",
    title: "Houseware & Moulded Furniture",
    category: "Consumer Goods",
    icon: Home,
    shortDesc: "Chairs, tables, storage boxes and everyday household plastics.",
    longDesc:
      "PP copolymer dominates moulded chairs and crates; HDPE serves buckets and storage; HIPS and GPPS handle disposables and organisers.",
    recommendedPolymers: ["polypropylene-pp", "high-density-polyethylene-hdpe", "high-impact-polystyrene-hips", "general-purpose-polystyrene-gpps"],
    useCases: ["Moulded chairs and tables", "Buckets and storage bins", "Disposable cutlery", "Kitchen organisers"],
    keyProperties: ["Stiffness", "Impact strength", "Colourability", "Cost efficiency"],
    seoTitle: "PP, HDPE, HIPS & GPPS for Moulded Furniture & Houseware",
    seoDescription: "PP copolymer, HDPE, HIPS and GPPS for moulded chairs, buckets, storage and disposables. Bulk polymer supply in Mumbai, Bhiwandi and Vasai.",
  },
  {
    slug: "engineering-industrial",
    title: "Engineering & Industrial Parts",
    category: "Industrial",
    icon: Wrench,
    shortDesc: "Gears, bearings, pump housings and precision engineering components.",
    longDesc:
      "POM (Delrin), PA6/PA66 nylon, PC and ABS deliver dimensional stability, low friction and mechanical strength for demanding industrial parts.",
    recommendedPolymers: ["polyoxymethylene-pom-acetal", "polyamide-pa-nylon", "polycarbonate-pc", "acrylonitrile-butadiene-styrene-abs"],
    useCases: ["Precision gears and cams", "Bearings and bushings", "Pump and valve housings", "Conveyor components"],
    keyProperties: ["Dimensional stability", "Low friction", "Fatigue resistance", "Chemical resistance"],
    seoTitle: "Delrin POM, Nylon, PC & ABS for Engineering Parts | India",
    seoDescription: "POM (Delrin), PA6/PA66 nylon, polycarbonate and ABS for gears, bearings and pump housings. Distributed across Mumbai, Vapi and Gujarat.",
  },
  {
    slug: "textiles-fibres",
    title: "Textiles, Fibres & Non-wovens",
    category: "Textiles",
    icon: Shirt,
    shortDesc: "Fibre-grade polymers for yarns, non-wovens, ropes and geotextiles.",
    longDesc:
      "PP fibre grades and PET chips serve spun-bond non-wovens, BOPP tapes, FIBC bags and technical textiles.",
    recommendedPolymers: ["polypropylene-pp", "polyethylene-terephthalate-pet"],
    useCases: ["Non-woven fabrics", "FIBC and woven sacks", "BOPP tapes", "Ropes and geotextiles"],
    keyProperties: ["Spinnability", "Tenacity", "UV stability", "Consistent MFI"],
    seoTitle: "Fibre-grade PP & PET for Non-wovens & FIBC | India",
    seoDescription: "Fibre-grade PP and PET chips for spun-bond non-wovens, BOPP tapes, FIBCs, ropes and geotextiles. Supplied across India from Vasai and Bhiwandi.",
  },
  {
    slug: "footwear-toys",
    title: "Footwear, Sports & Toys",
    category: "Consumer Goods",
    icon: ShoppingBag,
    shortDesc: "Soft-touch soles, sports gear and safe, colourful toy components.",
    longDesc:
      "TPR, EVA and PP flex grades create comfortable footwear soles and shock-absorbing sports goods. ABS and PP serve rigid toy structures.",
    recommendedPolymers: ["thermoplastic-rubber-tpr", "ethylene-vinyl-acetate-eva", "polypropylene-pp", "acrylonitrile-butadiene-styrene-abs"],
    useCases: ["Footwear soles and straps", "Yoga mats and sports pads", "Rigid toy parts", "Bicycle and helmet parts"],
    keyProperties: ["Flexibility", "Cushioning", "Non-toxicity", "Bright colourability"],
    seoTitle: "TPR, EVA, PP & ABS for Footwear, Sports & Toys | India",
    seoDescription: "TPR, EVA, PP flex and ABS grades for soles, sports pads and rigid toys. Bulk polymer distribution across Mumbai, Vasai and Vapi.",
  },
  {
    slug: "medical-pharma",
    title: "Medical & Pharma Packaging",
    category: "Healthcare",
    icon: PillBottle,
    shortDesc: "Pharma bottles, closures, medical device housings and disposables.",
    longDesc:
      "Medical-grade PP, HDPE, PC and PMMA deliver clarity, sterilisability and biocompatibility for pharma primary packaging and device housings.",
    recommendedPolymers: ["polypropylene-pp", "high-density-polyethylene-hdpe", "polycarbonate-pc", "acrylic-pmma"],
    useCases: ["Pharma bottles and caps", "Syringe and IV components", "Device housings", "Diagnostic consumables"],
    keyProperties: ["Biocompatibility", "Sterilisability", "Clarity", "Low extractables"],
    seoTitle: "Medical-grade PP, HDPE, PC & PMMA for Pharma Packaging",
    seoDescription: "Sterilisable medical-grade PP, HDPE, polycarbonate and acrylic (PMMA) for pharma bottles, syringes and device housings. Delivered across India.",
  },
];

export const APPLICATION_CATEGORIES = Array.from(new Set(APPLICATIONS.map((a) => a.category)));

export const getApplicationBySlug = (slug: string) =>
  APPLICATIONS.find((a) => a.slug === slug);
