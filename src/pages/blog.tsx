import { Link } from "react-router-dom";
import { Seo } from "@/lib/Seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import { BLOG_POSTS } from "@/data/blog";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const SITE = "https://monopolymers.in";

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Seo
        title="Polymer Industry Blog | MONOPOLYMERS"
        description="Expert guides, market commentary and buyer advice on LDPE, LLDPE, HDPE, PP, engineering plastics and polymer sourcing in India."
        canonical={`${SITE}/blog`}
        ogUrl={`${SITE}/blog`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MONOPOLYMERS Blog",
            url: `${SITE}/blog`,
            description:
              "Expert guides and market commentary on plastic raw materials, polymer grades and sourcing in India.",
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE}/blog/${p.slug}`,
              datePublished: p.date,
              author: { "@type": "Organization", name: p.author },
            })),
          },
          breadcrumbJsonLd("Blog", "/blog"),
        ]}
      />

      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Insights</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            Polymer buyer guides, market notes & technical explainers.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Practical, no-fluff writing for procurement, R&D and production teams sourcing plastic raw materials in India.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest posts" title="Fresh from the desk" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex flex-wrap gap-2">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug">
                  <Link to={`/blog/${p.slug}`} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {p.readMinutes} min read
                  </span>
                </div>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
