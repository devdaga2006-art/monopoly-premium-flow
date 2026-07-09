export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  readMinutes: number;
  tags: string[];
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ldpe-vs-lldpe-vs-hdpe-buyers-guide",
    title: "LDPE vs LLDPE vs HDPE: A Practical Buyer's Guide",
    description:
      "Compare LDPE, LLDPE and HDPE by density, strength, processing and applications. Pick the right polyethylene grade for films, moulding and pipes.",
    excerpt:
      "Three polyethylenes, three very different jobs. Here's how to tell LDPE, LLDPE and HDPE apart before you place an order.",
    date: "2026-01-15",
    author: "Monopolymers Technical Desk",
    readMinutes: 6,
    tags: ["LDPE", "LLDPE", "HDPE", "Buyer Guide"],
    sections: [
      {
        paragraphs: [
          "Polyethylene is the most widely used polymer on earth, but not all PE is the same. LDPE, LLDPE and HDPE share a backbone but behave very differently on the shop floor. Choosing the wrong grade is one of the most common — and most expensive — mistakes new buyers make.",
        ],
      },
      {
        heading: "Quick comparison",
        bullets: [
          "LDPE (Low Density PE): 0.910–0.925 g/cc. Soft, flexible, excellent clarity. Great for lamination, squeeze bottles, shrink film.",
          "LLDPE (Linear Low Density PE): 0.915–0.925 g/cc. Higher tensile and puncture resistance than LDPE. The workhorse of stretch film and heavy-duty liners.",
          "HDPE (High Density PE): 0.941–0.965 g/cc. Rigid, high tensile strength, chemical resistant. Used for pipes, drums, crates, blow moulded bottles.",
        ],
      },
      {
        heading: "When to specify LDPE",
        paragraphs: [
          "Choose LDPE where softness, clarity and heat-sealability matter more than tensile strength — lamination film, agricultural film and squeeze-tube caps are typical examples. LDPE also processes at lower temperatures, which saves energy on long extrusion runs.",
        ],
      },
      {
        heading: "When to specify LLDPE",
        paragraphs: [
          "If your film has to survive stretching, dart impact or heavy loads, LLDPE is almost always the answer. It costs marginally more than LDPE but you can down-gauge — the same job in a thinner film — which usually pays back within a single production cycle.",
        ],
      },
      {
        heading: "When to specify HDPE",
        paragraphs: [
          "HDPE is the go-to for structural and container applications: water tanks, pipes, jerry cans, milk crates. If your part has to hold shape under load or resist aggressive chemicals, HDPE outperforms both LDPE and LLDPE.",
        ],
      },
      {
        heading: "How Monopolymers helps",
        paragraphs: [
          "We stock LDPE, LLDPE and HDPE from leading Indian and imported brands with MFI options for blown film, injection, blow moulding and pipe extrusion. Share your end use and we'll shortlist two or three grades that fit your machine and cost target.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-polypropylene-pp-grade",
    title: "How to Choose the Right Polypropylene (PP) Grade for Your Product",
    description:
      "MFI, copolymer vs homopolymer, and application-fit — a step-by-step guide to specifying the correct PP grade for injection moulding, film and non-woven.",
    excerpt:
      "PP is not one polymer — it's a family. Here's the practical way to pick a grade that runs cleanly on your machine and passes QC every time.",
    date: "2026-02-02",
    author: "Monopolymers Technical Desk",
    readMinutes: 7,
    tags: ["Polypropylene", "PP", "Injection Moulding"],
    sections: [
      {
        paragraphs: [
          "Polypropylene is one of the most versatile polymers on the market, but picking the right grade takes more than looking at price per kilo. Get MFI, copolymer type and additive package wrong and you'll see short shots, warpage, or brittle failures in the field.",
        ],
      },
      {
        heading: "Step 1: Match MFI to your process",
        bullets: [
          "Injection moulding: MFI 10–40 g/10 min depending on wall thickness.",
          "Blow moulding: MFI 2–6 g/10 min for good parison strength.",
          "Film extrusion: MFI 2–8 g/10 min.",
          "Non-woven / fibre: MFI 25–40 g/10 min for fine denier.",
        ],
      },
      {
        heading: "Step 2: Homopolymer or copolymer?",
        paragraphs: [
          "PP homopolymer offers higher stiffness and heat resistance — ideal for rigid packaging, caps and closures. PP copolymer (random or impact) trades some stiffness for much better impact strength and low-temperature toughness. Crates, automotive interiors and appliance parts almost always run on copolymer.",
        ],
      },
      {
        heading: "Step 3: Check regulatory and additive needs",
        paragraphs: [
          "Food contact, medical, and UV-exposed applications need specific compliance certificates and stabiliser packages. Confirm FSSAI or FDA compliance up front, and specify UV or antistatic masterbatches at the quote stage rather than adding them later.",
        ],
      },
      {
        heading: "Step 4: Trial before you commit tonnage",
        paragraphs: [
          "Even after specification, always run a 100–200 kg trial. Shrinkage and cycle time can vary between suppliers within the same MFI band. Monopolymers ships trial quantities across Mumbai, Vasai, Bhiwandi, Daman and Vapi so you can validate before locking in.",
        ],
      },
    ],
  },
  {
    slug: "plastic-raw-material-prices-india",
    title: "What Drives Plastic Raw Material Prices in India",
    description:
      "Crude oil, naphtha, INR-USD, import duty and demand cycles — a plain-English explanation of how polymer prices move in the Indian market.",
    excerpt:
      "Polymer prices don't move randomly. Once you understand the four levers below, you can time purchases and negotiate better.",
    date: "2026-02-20",
    author: "Monopolymers Market Desk",
    readMinutes: 5,
    tags: ["Market", "Pricing", "India"],
    sections: [
      {
        paragraphs: [
          "Every buyer asks the same question — why did prices jump this week? The Indian polymer market is influenced by a mix of global feedstock costs, currency, domestic supply and seasonal demand. Here's a simple framework to read the market.",
        ],
      },
      {
        heading: "1. Crude oil and naphtha",
        paragraphs: [
          "Most commodity polymers — PP, PE, PVC, PS — are downstream of naphtha, which tracks crude oil. When Brent moves 5–10 percent, expect commodity polymers to follow with a 1–3 week lag.",
        ],
      },
      {
        heading: "2. INR-USD exchange rate",
        paragraphs: [
          "India imports a significant share of engineering plastics. A weaker rupee raises landed cost even when international prices are flat. Watch USD/INR alongside CFR India numbers.",
        ],
      },
      {
        heading: "3. Domestic supply and turnarounds",
        paragraphs: [
          "Planned maintenance at RIL, IOCL, HPL or GAIL can tighten domestic supply for 2–6 weeks. These are usually announced quarters in advance — a good buyer tracks them.",
        ],
      },
      {
        heading: "4. Seasonal demand",
        paragraphs: [
          "Agricultural film peaks before monsoon, PET before summer, and packaging around Diwali. Anticipating these cycles by 4–6 weeks avoids paying peak-season premiums.",
        ],
      },
      {
        heading: "How Monopolymers helps buyers stay ahead",
        paragraphs: [
          "Our customers get weekly price commentary on the polymers they use, plus early warning on plant turnarounds and import parity shifts. Ask your account manager to add you to the list.",
        ],
      },
    ],
  },
  {
    slug: "polymer-suppliers-mumbai-what-to-look-for",
    title: "Choosing a Polymer Supplier in Mumbai: 7 Things That Actually Matter",
    description:
      "Beyond price per kilo — stock depth, credit terms, technical support, delivery reliability. A practical checklist for evaluating polymer suppliers in Mumbai.",
    excerpt:
      "Cheapest quote wins the first PO. These seven factors decide whether you keep buying from them a year later.",
    date: "2026-03-05",
    author: "Monopolymers Sales Desk",
    readMinutes: 6,
    tags: ["Mumbai", "Sourcing", "B2B"],
    sections: [
      {
        paragraphs: [
          "Mumbai is India's polymer trading capital — dozens of distributors quote the same brands every day. So how do you separate a reliable long-term partner from someone just chasing a one-off order? These seven questions cut through the noise.",
        ],
      },
      {
        heading: "The 7-point checklist",
        bullets: [
          "Stock depth — do they physically hold the grades you use, or are they always 'arranging' from another trader?",
          "Warehouse locations — Vasai, Bhiwandi, Daman coverage matters for delivery speed.",
          "Brand authorisations and consistent batch quality.",
          "Technical support — can they help pick a grade, not just a price?",
          "Credit terms and financial stability.",
          "Delivery reliability — on-time-in-full track record.",
          "Documentation — proper invoicing, e-way bills, batch COAs.",
        ],
      },
      {
        heading: "Why buyers switch to Monopolymers",
        paragraphs: [
          "Since 1996 we've built the answer to every one of those seven questions. Multi-warehouse stock across Mumbai, Vasai, Bhiwandi and Daman, authorisations from leading Indian and imported polymer makers, and a technical team that helps you specify — not just quote.",
        ],
      },
    ],
  },
  {
    slug: "engineering-plastics-abs-pc-nylon-pom",
    title: "Engineering Plastics Explained: ABS, PC, Nylon and POM Compared",
    description:
      "Where to use ABS, Polycarbonate, Nylon (PA) and POM (Acetal) — key properties, typical applications, and cost trade-offs for engineering parts.",
    excerpt:
      "Commodity polymers won't survive a gear, a housing or a load-bearing bracket. Here's when to reach for engineering plastics — and which one.",
    date: "2026-03-22",
    author: "Monopolymers Technical Desk",
    readMinutes: 7,
    tags: ["Engineering Plastics", "ABS", "PC", "Nylon", "POM"],
    sections: [
      {
        paragraphs: [
          "Engineering plastics fill the gap between commodity polymers and metals. They cost more per kilo than PP or PE, but they deliver strength, dimensional stability and heat resistance that commodity grades simply cannot.",
        ],
      },
      {
        heading: "ABS — appearance and impact",
        paragraphs: [
          "ABS gives a great surface finish, plates well and takes impact without shattering. Automotive interiors, appliance housings, helmets and LEGO-style parts all rely on ABS. It's not the strongest engineering plastic, but nothing else combines cosmetics, cost and toughness this well.",
        ],
      },
      {
        heading: "Polycarbonate (PC) — clarity and toughness",
        paragraphs: [
          "PC is unique — glass-clear yet virtually unbreakable. Safety helmets, machine guards, LED lenses and medical devices all use PC. Watch out for chemical compatibility and stress cracking with aggressive cleaners.",
        ],
      },
      {
        heading: "Nylon (PA6 / PA66) — mechanical workhorse",
        paragraphs: [
          "When a part has to move, mesh, or carry load, nylon usually wins. Gears, bushings, cable ties, automotive under-hood parts. Glass-filled grades push stiffness close to die-cast aluminium at a fraction of the weight.",
        ],
      },
      {
        heading: "POM (Acetal / Delrin) — precision and low friction",
        paragraphs: [
          "POM machines beautifully and holds tight tolerances. It's the standard choice for precision gears, small mechanisms, fuel system parts and pump components. Copolymer POM offers better chemical resistance; homopolymer offers slightly higher strength.",
        ],
      },
      {
        heading: "Getting samples",
        paragraphs: [
          "Monopolymers stocks ABS, PC, PA6, PA66 and POM in natural and pre-coloured grades, with glass-filled options on request. Share your part drawing or a description of the load case and we'll recommend two or three viable grades to trial.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
