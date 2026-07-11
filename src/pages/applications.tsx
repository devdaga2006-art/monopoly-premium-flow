import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { Seo } from "@/lib/Seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import { APPLICATIONS, APPLICATION_CATEGORIES } from "@/data/applications";
import { POLYMERS } from "@/data/products";

const SITE = "https://monopolymers.in";

export default function ApplicationsPage() {
  const polymerByslug = Object.fromEntries(POLYMERS.map((p) => [p.slug, p]));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Polymer Applications",
    itemListElement: APPLICATIONS.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `${SITE}/applications#${a.slug}`,
    })),
  };

  return (
    <>
      <Seo
        title="Polymer Applications Hub | End-Use Guide | MONOPOLYMERS"
        description="Find the right polymer grade for your application, packaging, automotive, pipes, agriculture, electrical, medical and more. Recommended PP, PE, PVC, ABS, PC, PA, POM grades from MONOPOLYMERS India."
        canonical={`${SITE}/applications`}
        ogUrl={`${SITE}/applications`}
        jsonLd={[breadcrumbJsonLd("Applications", "/applications"), itemListJsonLd]}
      />

      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Applications Hub
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            The right polymer for <span className="text-primary">every application.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Browse end-use applications across packaging, automotive, infrastructure, agriculture,
            electrical, engineering and healthcare, mapped to recommended polymer grades we stock and supply across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {APPLICATION_CATEGORIES.map((c) => (
              <span
                key={c}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Application Directory"
            title="Match your end-use to the right polymer"
            subtitle="Each application card lists typical use cases, key material properties and the polymer grades our technical team recommends."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {APPLICATIONS.map((a) => (
              <article
                key={a.slug}
                id={a.slug}
                className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elegant transition-all scroll-mt-28"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant group-hover:scale-110 transition-transform">
                    <a.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {a.category}
                    </span>
                    <h2 className="mt-1 text-xl font-semibold text-charcoal">{a.title}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{a.longDesc}</p>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                      Typical use cases
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {a.useCases.map((u) => (
                        <li key={u} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                      Key properties
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {a.keyProperties.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                    Recommended grades
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {a.recommendedPolymers.map((slug) => {
                      const p = polymerByslug[slug];
                      if (!p) return null;
                      return (
                        <Link
                          key={slug}
                          to={`/products/${slug}`}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent text-charcoal hover:bg-red-gradient hover:text-white transition-colors"
                        >
                          {p.code}
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Get grade recommendation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
