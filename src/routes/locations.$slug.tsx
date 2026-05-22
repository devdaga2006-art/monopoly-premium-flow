import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Truck } from "lucide-react";
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
import { SectionHeading } from "@/components/site/SectionHeading";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { POLYMERS } from "@/data/products";

const SITE = "https://monopoly-premium-flow.lovable.app";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = getLocationBySlug(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ params, loaderData }) => {
    const l = loaderData?.location;
    if (!l) return { meta: [{ title: "Location not found, MONOPOLYMERS" }] };
    const url = `${SITE}/locations/${params.slug}`;
    return {
      meta: [
        { title: l.title },
        { name: "description", content: l.description },
        { property: "og:title", content: l.title },
        { property: "og:description", content: l.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `MONOPOLYMERS — Polymer & Plastic Raw Material Supplier in ${l.city}`,
            description: l.description,
            url,
            telephone: "+91-93225-19925",
            email: "monopolymers@yahoo.com",
            address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
            areaServed: { "@type": "Place", name: `${l.city}, ${l.region}, India` },
            priceRange: "₹₹",
            foundingDate: "1996",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: `Suppliers in ${l.city}`, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: LocationPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-charcoal">Location not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary font-semibold">Back to home</Link>
    </div>
  ),
});

function LocationPage() {
  const { location: l } = Route.useLoaderData();

  return (
    <>
      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-white">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Suppliers in {l.city}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <MapPin className="h-3.5 w-3.5" /> {l.region}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-4xl">
            Plastic raw material & polymer granules supplier in{" "}
            <span className="text-primary">{l.city}.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl leading-relaxed">{l.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get bulk quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/products">View all polymers <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Why us" title={`Bulk polymer supply in ${l.city}`} />
            <ul className="mt-8 space-y-4">
              {l.highlights.map((h: string) => (
                <li key={h} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-charcoal leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-start gap-3 bg-muted/50 border border-border rounded-2xl p-6">
              <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-charcoal leading-relaxed">{l.deliveryNote}</p>
            </div>
          </div>

          <aside className="bg-card border border-border rounded-2xl p-7 h-fit">
            <h3 className="text-lg font-semibold text-charcoal">Industries served in {l.city}</h3>
            <ul className="mt-4 space-y-2">
              {l.industries.map((i) => (
                <li key={i} className="text-muted-foreground">• {i}</li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">Need a quick quote?</p>
              <a href="tel:+919322519925" className="block mt-2 text-primary font-semibold">+91 93225 19925</a>
              <a href="https://wa.me/919322519925" className="block mt-1 text-primary font-semibold">WhatsApp us</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="In stock" title={`Polymer grades we supply in ${l.city}`} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POLYMERS.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <div className="inline-flex items-center justify-center min-w-12 h-12 px-3 rounded-lg bg-red-gradient text-white font-display font-bold text-base shadow-elegant">
                  {p.code}
                </div>
                <h3 className="mt-3 text-base font-semibold text-charcoal">{p.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal">Also serving</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {LOCATIONS.filter((x) => x.slug !== l.slug).map((x) => (
              <Link
                key={x.slug}
                to="/locations/$slug"
                params={{ slug: x.slug }}
                className="px-5 py-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 text-charcoal font-medium transition-colors"
              >
                {x.city} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
