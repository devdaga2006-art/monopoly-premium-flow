import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const BASE_URL = "https://monopolymers.in";

const POLYMER_SLUGS = [
  "polypropylene-pp",
  "low-density-polyethylene-ldpe",
  "linear-low-density-polyethylene-lldpe",
  "high-density-polyethylene-hdpe",
  "acrylonitrile-butadiene-styrene-abs",
  "ethylene-vinyl-acetate-eva",
  "high-impact-polystyrene-hips",
  "general-purpose-polystyrene-gpps",
  "polycarbonate-pc",
  "polyvinyl-chloride-pvc",
  "thermoplastic-rubber-tpr",
  "polyamide-pa-nylon",
  "polyoxymethylene-pom-acetal",
  "acrylic-pmma",
  "polyethylene-terephthalate-pet",
];

const LOCATION_SLUGS = ["mumbai", "daman", "vapi", "vasai", "bhiwandi", "india", "gujarat"];

const BLOG_SLUGS = [
  "ldpe-vs-lldpe-vs-hdpe-buyers-guide",
  "how-to-choose-polypropylene-pp-grade",
  "plastic-raw-material-prices-india",
  "polymer-suppliers-mumbai-what-to-look-for",
  "engineering-plastics-abs-pc-nylon-pom",
];

const APPLICATION_SLUGS = [
  "rigid-packaging",
  "flexible-packaging",
  "automotive-components",
  "consumer-appliances",
  "pipes-fittings",
  "agriculture",
  "electrical-cable",
  "houseware-furniture",
  "engineering-industrial",
  "textiles-fibres",
  "footwear-toys",
  "medical-pharma",
];

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/products", changefreq: "monthly", priority: "0.9" },
  { path: "/industries", changefreq: "monthly", priority: "0.8" },
  { path: "/applications", changefreq: "monthly", priority: "0.9" },
  { path: "/infrastructure", changefreq: "monthly", priority: "0.7" },
  { path: "/why-us", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  ...POLYMER_SLUGS.map((s) => ({ path: `/products/${s}`, changefreq: "monthly", priority: "0.7" })),
  ...APPLICATION_SLUGS.map((s) => ({ path: `/applications/${s}`, changefreq: "monthly", priority: "0.8" })),
  ...LOCATION_SLUGS.map((s) => ({ path: `/locations/${s}`, changefreq: "monthly", priority: "0.8" })),
  ...BLOG_SLUGS.map((s) => ({ path: `/blog/${s}`, changefreq: "monthly", priority: "0.6" })),
];


const urls = entries
  .map(
    (e) =>
      `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const out = resolve(process.cwd(), "public/sitemap.xml");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, xml);
console.log(`Wrote ${out} (${entries.length} URLs)`);
