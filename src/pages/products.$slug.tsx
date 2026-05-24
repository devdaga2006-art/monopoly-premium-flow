import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Factory, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CtaBand } from "@/components/site/CtaBand";
import { POLYMERS, getPolymerBySlug } from "@/data/products";
import { Seo } from "@/lib/Seo";

const SITE = "https://monopoly-premium-flow.lovable.app";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const p = slug ? getPolymerBySlug(slug) : undefined;

  if (!p) {
    return (
      <>
        <Seo title="Polymer not found, MONOPOLYMERS" />
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-charcoal">Polymer not found</h1>
          <p className="mt-3 text-muted-foreground">The polymer grade you're looking for isn't in our catalogue.</p>
          <Button asChild className="mt-6 bg-red-gradient">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </>
    );
  }

  const url = `${SITE}/products/${slug}`;
  const title = `${p.fullName} Supplier in India | MONOPOLYMERS`;
  const desc = `${p.shortDesc} Bulk ${p.code} supply across India by MONOPOLYMERS, trusted polymer distributor since 1996.`;
  const related = POLYMERS.filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <Seo
        title={title}
        description={desc}
        canonical={url}
        ogUrl={url}
        ogType="product"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${url}#product`,
            name: p.fullName,
            description: p.longDesc,
            sku: p.code,
            mpn: p.code,
            category: "Plastic raw material / Polymer granules",
            url,
            brand: { "@type": "Brand", name: "MONOPOLYMERS" },
            manufacturer: { "@type": "Organization", name: "MONOPOLYMERS" },
            additionalProperty: [
              { "@type": "PropertyValue", name: "Form", value: "Granules" },
              { "@type": "PropertyValue", name: "Polymer code", value: p.code },
            ],
            offers: {
              "@type": "Offer",
              url: `${SITE}/contact`,
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "0",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                valueAddedTaxIncluded: false,
                description: "Bulk B2B pricing on request — contact MONOPOLYMERS for a quote.",
              },
              seller: { "@type": "Organization", name: "MONOPOLYMERS", url: SITE },
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "State", name: "Maharashtra" },
                { "@type": "State", name: "Gujarat" },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/products` },
              { "@type": "ListItem", position: 3, name: p.fullName, item: url },
            ],
          },
        ]}
      />

      <section className="bg-hero-gradient text-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="hover:text-white">
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="hover:text-white">
                  <Link to="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{p.fullName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-white/70 hover:text-white text-sm">
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <div className="inline-flex items-center justify-center min-w-16 h-16 px-4 rounded-2xl bg-red-gradient text-white font-display font-bold text-2xl shadow-elegant">
              {p.code}
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Polymer Grade</span>
              <h1 className="mt-1 text-3xl md:text-5xl font-bold text-balance">{p.fullName}</h1>
            </div>
          </div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl leading-relaxed">{p.longDesc}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-red-gradient flex items-center justify-center text-white">
                <Factory className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal">Applications</h2>
            </div>
            <ul className="space-y-3">
              {p.applications.map((a) => (
                <li key={a} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-red-gradient flex items-center justify-center text-white">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal">Key Properties</h2>
            </div>
            <ul className="space-y-3">
              {p.properties.map((a) => (
                <li key={a} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Industries served</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.industries.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium border border-border">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Other polymer grades we supply</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/products/${r.slug}`}
                className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <div className="inline-flex items-center justify-center min-w-12 h-12 px-3 rounded-xl bg-red-gradient text-white font-display font-bold shadow-elegant group-hover:scale-105 transition-transform">
                  {r.code}
                </div>
                <h3 className="mt-4 text-base font-semibold text-charcoal">{r.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
