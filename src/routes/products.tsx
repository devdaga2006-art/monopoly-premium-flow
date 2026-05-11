import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

const PRODUCTS = [
  { code: "PP", name: "Polypropylene", desc: "Versatile thermoplastic for packaging, automotive parts, textiles, and consumer goods." },
  { code: "LDPE", name: "Low-Density Polyethylene", desc: "Flexible film, liners, squeeze bottles, and general-purpose packaging applications." },
  { code: "LLDPE", name: "Linear Low-Density Polyethylene", desc: "Tough stretch films, agricultural films, and heavy-duty liners." },
  { code: "HDPE", name: "High-Density Polyethylene", desc: "Rigid containers, pipes, blow-moulded bottles, and crates." },
  { code: "ABS", name: "Acrylonitrile Butadiene Styrene", desc: "Impact-resistant engineering plastic for appliances, automotive, and electronics." },
  { code: "EVA", name: "Ethylene-Vinyl Acetate", desc: "Flexible, rubber-like polymer used in footwear, foams, and hot-melt adhesives." },
  { code: "HIPS", name: "High-Impact Polystyrene", desc: "Tough styrenic plastic for refrigerator liners, signage, and disposables." },
  { code: "GPPS", name: "General-Purpose Polystyrene", desc: "Crystal-clear styrenic ideal for cosmetic packaging and disposables." },
  { code: "PC", name: "Polycarbonate", desc: "Transparent, high-impact engineering plastic for lighting, electronics, and safety." },
  { code: "PVC", name: "Polyvinyl Chloride", desc: "Versatile resin for pipes, profiles, cables, and flexible applications." },
  { code: "TPR", name: "Thermoplastic Rubber", desc: "Soft-touch elastomer for grips, seals, footwear, and over-moulding." },
  { code: "PA", name: "Polyamide (Nylon)", desc: "High-performance engineering polymer for automotive, electrical, and industrial parts." },
  { code: "POM", name: "Polyoxymethylene (Acetal)", desc: "Stiff, low-friction engineering plastic for precision gears and mechanical parts." },
  { code: "Acrylic", name: "PMMA", desc: "Optically clear, weather-resistant polymer for signage, displays, and lighting." },
  { code: "PET", name: "Polyethylene Terephthalate", desc: "Clear, strong polymer for bottles, fibres, and food-grade packaging." },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Polymer Grades We Supply | MONOPOLYMERS" },
      { name: "description", content: "PP, LDPE, LLDPE, HDPE, ABS, EVA, HIPS, GPPS, PC, PVC, TPR, PA, POM, Acrylic and PET — supplied across India by MONOPOLYMERS." },
      { property: "og:title", content: "Products — Polymer Grades We Supply | MONOPOLYMERS" },
      { property: "og:description", content: "Full range of commodity and engineering polymers supplied to manufacturers across India." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Products</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            Polymer grades we <span className="text-primary">supply.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            From commodity polyolefins to high-performance engineering plastics — sourced from
            trusted producers and delivered across India.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our portfolio" title="Commodity & engineering polymers" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.code} className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elegant transition-all">
                <div className="inline-flex items-center justify-center min-w-14 h-14 px-3 rounded-xl bg-red-gradient text-white font-display font-bold text-lg shadow-elegant group-hover:scale-105 transition-transform">
                  {p.code}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-charcoal">{p.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
