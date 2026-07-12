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
  },
];

export const APPLICATION_CATEGORIES = Array.from(new Set(APPLICATIONS.map((a) => a.category)));
