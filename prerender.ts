/**
 * Build-time prerender: writes dist/<route>/index.html for every public route
 * with its own <title>, description, canonical, OG tags, H1 and main text,
 * so crawlers that don't run JavaScript see unique pages instead of the SPA shell.
 * React replaces the #root content on boot, so the live UI is unchanged.
 */
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { POLYMERS } from "./src/data/products";
import { LOCATIONS } from "./src/data/locations";
import { APPLICATIONS } from "./src/data/applications";
import { BLOG_POSTS } from "./src/data/blog";

const SITE = "https://monopolymers.in";

interface PageMeta {
  path: string;
  title: string;
  description: string;
  h1: string;
  body: string; // pre-escaped HTML
  ogType?: string;
}

const esc = (s: string) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const p = (s: string) => `<p>${esc(s)}</p>`;
const ul = (items: string[] = []) => (items.length ? `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "");
const h2 = (s: string) => `<h2>${esc(s)}</h2>`;
const link = (href: string, text: string) => `<a href="${esc(href)}">${esc(text)}</a>`;

function staticPages(): PageMeta[] {
  const productLinks = ul([]) + `<ul>${POLYMERS.map((x) => `<li>${link(`/products/${x.slug}`, x.fullName)}</li>`).join("")}</ul>`;
  const appLinks = `<ul>${APPLICATIONS.map((a) => `<li>${link(`/applications/${a.slug}`, a.title)}</li>`).join("")}</ul>`;
  const blogLinks = `<ul>${BLOG_POSTS.map((b) => `<li>${link(`/blog/${b.slug}`, b.title)}</li>`).join("")}</ul>`;
  return [
    { path: "/", title: "Plastic Raw Material & Polymer Supplier in India | Monopolymers", description: "Monopolymers is a trusted plastic raw material supplier & polymer distributor in India since 1996. Bulk PP, LDPE, LLDPE, HDPE, ABS, PVC, PET, EVA, PC & engineering polymers — same-day dispatch from Mumbai.", h1: "Monopolymers — Polymer Raw Material Distributor in India Since 1996", body: h2("Polymers we supply") + productLinks },
    { path: "/about", title: "About MONOPOLYMERS, A 50-Year Family Legacy in Polymers", description: "Founded in 1996 in Mumbai by Mr. Jitendra Daga and Mr. Manoj Daga. A family legacy of more than 50 years in India's plastic industry.", h1: "A family legacy of more than 50 years in plastics", body: p("MONOPOLYMERS was founded in 1996 in Mumbai by Mr. Jitendra Daga and Mr. Manoj Daga, building on the Daga family's decades in India's plastic industry.") },
    { path: "/products", title: "Products, Polymer Grades We Supply | MONOPOLYMERS", description: "PP, LDPE, LLDPE, HDPE, ABS, EVA, HIPS, GPPS, PC, PVC, TPR, PA, POM, Acrylic and PET, supplied across India by MONOPOLYMERS.", h1: "Polymer grades we supply", body: productLinks },
    { path: "/industries", title: "Industries We Serve, MONOPOLYMERS", description: "We supply polymers to packaging, automotive, consumer goods, infrastructure, agriculture, electrical and more across India.", h1: "Polymers powering every major industry", body: appLinks },
    { path: "/applications", title: "Polymer Applications by Grade & Industry | MONOPOLYMERS India", description: "PP, LDPE, LLDPE, HDPE, PVC, ABS, PC, PA, POM, EVA & TPR grades mapped to 12 end-use applications. Bulk supply across Mumbai, Vasai, Bhiwandi, Vapi, Daman & Gujarat.", h1: "The right polymer for every application", body: appLinks },
    { path: "/infrastructure", title: "Infrastructure & Logistics, MONOPOLYMERS", description: "Two corporate offices in Mumbai and Vasai, plus multiple warehouses across India. Built for fast, reliable polymer distribution.", h1: "Built for scale, speed, and reliability", body: p("Corporate offices in Mumbai and Vasai with warehouses supporting high-volume polymer distribution.") },
    { path: "/why-us", title: "Why Choose MONOPOLYMERS, Trusted Polymer Distributor", description: "1000+ customers, ₹100Cr+ turnover, 30+ year relationships, multiple warehouses, on-time delivery, built for high-volume B2B.", h1: "The polymer partner manufacturers trust for life", body: p("1000+ customers, 30+ year relationships, multiple warehouses and on-time delivery for high-volume B2B buyers.") },
    { path: "/blog", title: "Polymer Industry Blog | MONOPOLYMERS", description: "Expert guides, market commentary and buyer advice on LDPE, LLDPE, HDPE, PP, engineering plastics and polymer sourcing in India.", h1: "Polymer buyer guides, market notes & technical explainers", body: blogLinks },
    { path: "/faq", title: "FAQ, MONOPOLYMERS", description: "Answers to common questions about our polymer products, supply, warehouses, and B2B services.", h1: "Frequently asked questions", body: p("Answers about our polymer products, supply, warehouses and B2B services.") },
    { path: "/contact", title: "Contact MONOPOLYMERS, Get a Quote", description: "Reach MONOPOLYMERS in Mumbai or Vasai. Call our directors, WhatsApp our team, or send a quick enquiry.", h1: "Let's talk polymers", body: p("Call +91 93225 19925, email monopolymers@yahoo.com, or WhatsApp our team for a quotation.") },
  ];
}

function dynamicPages(): PageMeta[] {
  const products = POLYMERS.map((x) => ({
    path: `/products/${x.slug}`,
    title: `${x.fullName} Supplier in India | Price, Grades & Specs | Monopolymers`,
    description: `${x.shortDesc} Bulk ${x.code} granules with typical MFI, density & tensile specs. Same-day dispatch from Mumbai & Vasai. Since 1996.`,
    h1: `${x.fullName} Supplier in India`,
    body: p(x.longDesc) + h2("Key properties") + ul(x.properties) + h2("Applications") + ul(x.applications) + h2("Industries served") + ul(x.industries) + (x.specs?.length ? h2("Typical specifications") + ul(x.specs.map((s) => `${s.property}: ${s.value}${s.unit ? " " + s.unit : ""}`)) : ""),
  }));
  const locations = LOCATIONS.map((l) => ({
    path: `/locations/${l.slug}`,
    title: l.title,
    description: l.description,
    h1: `Polymer & Plastic Raw Material Supplier in ${l.city}`,
    body: p(l.intro) + ul(l.highlights) + h2("Industries served") + ul(l.industries) + p(l.deliveryNote),
  }));
  const apps = APPLICATIONS.map((a) => ({
    path: `/applications/${a.slug}`,
    title: a.seoTitle,
    description: a.seoDescription,
    h1: a.title,
    body: p(a.longDesc) + h2("Use cases") + ul(a.useCases) + h2("Key properties") + ul(a.keyProperties),
  }));
  const posts = BLOG_POSTS.map((b) => ({
    path: `/blog/${b.slug}`,
    title: `${b.title} | MONOPOLYMERS Blog`,
    description: b.description,
    h1: b.title,
    ogType: "article",
    body: b.sections.map((s) => (s.heading ? h2(s.heading) : "") + (s.paragraphs ?? []).map(p).join("") + ul(s.bullets)).join(""),
  }));
  return [...products, ...locations, ...apps, ...posts];
}

function render(template: string, m: PageMeta): string {
  const url = `${SITE}${m.path === "/" ? "/" : m.path}`;
  const head = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="${m.ogType ?? "website"}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
  ].join("\n    ");
  return template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta (property="og:(title|description|url|type)"|name="twitter:[a-z]+")[^>]*>/g, "")
    .replace("</head>", `    ${head}\n  </head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root"><main><h1>${esc(m.h1)}</h1>${m.body}</main></div>`,
    );
}

export function getPrerenderPages(): PageMeta[] {
  return [...staticPages(), ...dynamicPages()];
}

export function prerender(): Plugin {
  let outDir = "dist";
  return {
    name: "monopolymers-prerender",
    apply: "build",
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      const pages = getPrerenderPages();
      for (const m of pages) {
        const file = m.path === "/" ? path.join(outDir, "index.html") : path.join(outDir, `${m.path.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(template, m));
      }
      // SPA fallback for unknown routes keeps the generic shell.
      fs.writeFileSync(path.join(outDir, "200.html"), template);
      console.log(`[prerender] wrote ${pages.length} pages`);
    },
  };
}
