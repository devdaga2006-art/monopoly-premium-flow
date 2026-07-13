import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
import { APPLICATIONS, getApplicationBySlug } from "@/data/applications";
import { POLYMERS } from "@/data/products";
import { Seo } from "@/lib/Seo";
import { breadcrumbTrailJsonLd, itemListJsonLd } from "@/lib/breadcrumb-jsonld";

const SITE = "https://monopolymers.in";

export default function ApplicationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const a = slug ? getApplicationBySlug(slug) : undefined;
  const polymerBySlug = Object.fromEntries(POLYMERS.map((p) => [p.slug, p]));

  if (!a) {
    return (
      <>
        <Seo title="Application not found | MONOPOLYMERS" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-charcoal">Application not found</h1>
          <Link to="/applications" className="mt-6 inline-block text-primary font-semibold">
            Back to applications
          </Link>
        </div>
      </>
    );
  }

  const url = `${SITE}/applications/${a.slug}`;
  const recommended = a.recommendedPolymers
    .map((s) => polymerBySlug[s])
    .filter(Boolean);

  return (
    <>
      <Seo
        title={a.seoTitle}
        description={a.seoDescription}
        canonical={url}
        ogUrl={url}
        jsonLd={[
          breadcrumbTrailJsonLd([
            { name: "Applications", path: "/applications" },
            { name: a.title, path: `/applications/${a.slug}` },
          ]),
          itemListJsonLd(
            `Recommended polymer grades for ${a.title}`,
            recommended.map((p) => ({
              name: p.fullName,
              url: `/products/${p.slug}`,
            })),
          ),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            serviceType: `Polymer supply for ${a.title}`,
            name: `${a.title} — polymer grades supplied by MONOPOLYMERS`,
            description: a.longDesc,
            provider: { "@type": "Organization", name: "MONOPOLYMERS", url: SITE },
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Vasai" },
              { "@type": "City", name: "Bhiwandi" },
              { "@type": "City", name: "Vapi" },
              { "@type": "City", name: "Daman" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `Recommended grades for ${a.title}`,
              itemListElement: recommended.map((p) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: p.fullName,
                  sku: p.code,
                  category: "Plastic raw material / Polymer granules",
                  url: `${SITE}/products/${p.slug}`,
                },
              })),
            },
          },
        ]}
      />

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
                <BreadcrumbLink asChild>
                  <Link to="/applications" className="hover:text-white">Applications</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{a.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <a.icon className="h-3.5 w-3.5" /> {a.category}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-4xl">
            {a.title} — <span className="text-primary">recommended polymer grades.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl leading-relaxed">{a.longDesc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get grade recommendation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/products">Browse all polymers <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading eyebrow="Use cases" title={`Where ${a.title.toLowerCase()} matters`} />
            <ul className="mt-8 space-y-4">
              {a.useCases.map((u) => (
                <li key={u} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-charcoal leading-relaxed">{u}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Key properties" title="What buyers specify" />
            <ul className="mt-8 space-y-4">
              {a.keyProperties.map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-charcoal leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recommended grades" title={`Polymers for ${a.title}`} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                aria-label={`View ${p.fullName} (${p.code}) polymer grade`}
                title={`${p.fullName} (${p.code}) — polymer grade`}
                className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elegant transition-all flex flex-col"
              >
                <div className="inline-flex items-center justify-center min-w-14 h-14 px-3 rounded-xl bg-red-gradient text-white font-display font-bold text-lg shadow-elegant group-hover:scale-105 transition-transform self-start">
                  {p.code}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-charcoal">{p.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed flex-1">{p.shortDesc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  View {p.code} grade <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {(() => {
            const polymerSet = new Set(a.recommendedPolymers);
            const siblings = APPLICATIONS
              .filter((x) => x.slug !== a.slug && x.recommendedPolymers.some((s) => polymerSet.has(s)));
            const others = APPLICATIONS.filter(
              (x) => x.slug !== a.slug && !siblings.find((s) => s.slug === x.slug),
            );
            return (
              <>
                {siblings.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-charcoal">
                      Related applications that use the same polymer grades
                    </h2>
                    <p className="mt-2 text-muted-foreground max-w-3xl">
                      These end-uses share one or more recommended grades with {a.title.toLowerCase()} — useful when
                      you're comparing options or consolidating polymer purchases.
                    </p>
                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {siblings.map((x) => {
                        const shared = x.recommendedPolymers.filter((s) => polymerSet.has(s));
                        return (
                          <article
                            key={x.slug}
                            className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-elegant transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 shrink-0 rounded-lg bg-red-gradient flex items-center justify-center text-white">
                                <x.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                                  {x.category}
                                </div>
                                <h3 className="text-base font-semibold text-charcoal">
                                  <Link
                                    to={`/applications/${x.slug}`}
                                    aria-label={`View ${x.title} application details`}
                                    title={`${x.title} — application`}
                                    className="hover:text-primary transition-colors"
                                  >
                                    View {x.title} application
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {shared.map((s) => {
                                const poly = polymerBySlug[s];
                                if (!poly) return null;
                                return (
                                  <Link
                                    key={s}
                                    to={`/products/${s}`}
                                    aria-label={`View ${poly.fullName} (${poly.code}) polymer grade`}
                                    title={`${poly.fullName} (${poly.code}) — polymer grade`}
                                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-accent text-charcoal hover:bg-red-gradient hover:text-white transition-colors"
                                  >
                                    {poly.code}
                                  </Link>
                                );
                              })}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </>
                )}

                {others.length > 0 && (
                  <>
                    <h2 className="mt-12 text-xl font-bold text-charcoal">Explore other applications</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {others.map((x) => (
                        <Link
                          key={x.slug}
                          to={`/applications/${x.slug}`}
                          className="px-5 py-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 text-charcoal font-medium transition-colors"
                        >
                          {x.title} →
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </>
            );
          })()}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
