import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import { POLYMERS } from "@/data/products";
import ogProducts from "@/assets/og-products.jpg";

const URL = "https://monopoly-premium-flow.lovable.app/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products, Polymer Grades We Supply | MONOPOLYMERS" },
      { name: "description", content: "PP, LDPE, LLDPE, HDPE, ABS, EVA, HIPS, GPPS, PC, PVC, TPR, PA, POM, Acrylic and PET, supplied across India by MONOPOLYMERS." },
      { property: "og:title", content: "Products, Polymer Grades We Supply | MONOPOLYMERS" },
      { property: "og:description", content: "Full range of commodity and engineering polymers supplied to manufacturers across India." },
      { property: "og:url", content: URL },
      { property: "og:image", content: ogProducts },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Polymer grades supplied by MONOPOLYMERS",
          itemListElement: POLYMERS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://monopoly-premium-flow.lovable.app/products/${p.slug}`,
            item: {
              "@type": "Product",
              name: p.fullName,
              description: p.shortDesc,
              category: "Polymer raw material",
              brand: { "@type": "Brand", name: "MONOPOLYMERS" },
              url: `https://monopoly-premium-flow.lovable.app/products/${p.slug}`,
            },
          })),
        }),
      },
      breadcrumbJsonLd("Products", "/products"),
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
            From commodity polyolefins to high-performance engineering plastics, sourced from
            trusted producers and delivered across India.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our portfolio" title="Commodity & engineering polymers" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLYMERS.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elegant transition-all flex flex-col"
              >
                <div className="inline-flex items-center justify-center min-w-14 h-14 px-3 rounded-xl bg-red-gradient text-white font-display font-bold text-lg shadow-elegant group-hover:scale-105 transition-transform self-start">
                  {p.code}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-charcoal">{p.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed flex-1">{p.shortDesc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
