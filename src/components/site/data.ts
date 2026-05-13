import {
  Package, Car, ShoppingBag, Factory, Building2, Home, Sprout, Zap, Droplets, Shirt,
} from "lucide-react";

export const INDUSTRIES = [
  { icon: Package, title: "Packaging", desc: "Films, containers, caps & closures, FMCG packaging." },
  { icon: Car, title: "Automotive", desc: "Interior trims, under-the-hood components, OEM supply." },
  { icon: ShoppingBag, title: "Consumer Goods", desc: "Appliances, electronics housings, lifestyle products." },
  { icon: Factory, title: "Industrial Manufacturing", desc: "Engineering plastics for high-volume production." },
  { icon: Building2, title: "Infrastructure", desc: "Pipes, fittings, construction-grade polymers." },
  { icon: Home, title: "Household Products", desc: "Moulded furniture, kitchenware, daily-use plastics." },
  { icon: Sprout, title: "Agriculture", desc: "Drip irrigation, films, crates & agri-tech components." },
  { icon: Zap, title: "Electrical", desc: "Insulation, switchgear & cable applications." },
  { icon: Droplets, title: "Pipes & Fittings", desc: "PVC, HDPE & PPR raw material supply." },
  { icon: Shirt, title: "Textiles & Fibres", desc: "Synthetic fibre and yarn-grade polymers." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "MONOPOLYMERS has been our trusted polymer partner for over a decade. Their consistency in quality and on-time deliveries have helped us scale production without a single supply disruption.",
    name: "Rajesh Mehta",
    role: "Procurement Head",
    company: "Leading Packaging Manufacturer, Mumbai",
  },
  {
    quote:
      "What sets MONOPOLYMERS apart is the relationship. The Daga family treats us like a partner, not just a customer. Pricing is fair, response is quick, and the material is always reliable.",
    name: "Anil Shah",
    role: "Director",
    company: "Auto Components Pvt. Ltd., Pune",
  },
  {
    quote:
      "Their warehousing strength across India is a game changer for us. We get same-day dispatches and never have to worry about stock for our consumer goods plant.",
    name: "Priya Iyer",
    role: "Supply Chain Manager",
    company: "Consumer Appliances Group",
  },
  {
    quote:
      "Three decades of doing business and the standards have only gone up. MONOPOLYMERS is the gold standard for polymer distribution in our region.",
    name: "Suresh Patil",
    role: "Founder",
    company: "Industrial Plastics Mfg., Vasai",
  },
] as const;

export const FAQS = [
  {
    q: "What products does MONOPOLYMERS supply?",
    a: "We distribute a wide portfolio of plastic raw materials including PP, PE (HDPE/LDPE/LLDPE), PVC, PS, ABS, engineering plastics, and specialty polymers, sourced from leading global and Indian producers.",
  },
  {
    q: "Which industries do you serve?",
    a: "We supply manufacturers across packaging, automotive, consumer goods, industrial manufacturing, infrastructure, household products, agriculture, electrical, pipes & fittings, and textiles.",
  },
  {
    q: "Do you provide bulk orders?",
    a: "Yes. Bulk and large-volume orders are our core strength. With ₹100Cr+ annual turnover and multiple warehouses, we comfortably handle high-volume B2B requirements with predictable lead times.",
  },
  {
    q: "Where are your warehouses located?",
    a: "Our offices are in Mumbai and Vasai, supported by multiple strategically located warehouses across India to ensure fast dispatch and reliable supply.",
  },
  {
    q: "How long has MONOPOLYMERS been in business?",
    a: "MONOPOLYMERS was founded in 1996 in Mumbai by Mr. Jitendra Daga and Mr. Manoj Daga, building on a family legacy of more than 50 years in the plastic industry.",
  },
  {
    q: "Do you supply across India?",
    a: "Yes. We deliver across India and serve large industrial buyers throughout the region with same-day or next-day dispatch capability.",
  },
  {
    q: "How can businesses contact your team?",
    a: "Call our directors directly, send an enquiry on WhatsApp at +91 93262 87420, or use the contact form on our website. Our team responds within hours on working days.",
  },
  {
    q: "What makes MONOPOLYMERS different from competitors?",
    a: "Three decades of customer retention, a 50+ year family legacy in plastics, strong logistics & warehousing, ethical pricing, and personal accountability from the founding family, every order, every time.",
  },
] as const;
