import { Link, useParams } from "react-router-dom";
import { Seo } from "@/lib/Seo";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog";
import { CtaBand } from "@/components/site/CtaBand";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import NotFoundPage from "@/pages/not-found";

const SITE = "https://monopolymers.in";

export default function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <NotFoundPage />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${post.title} | MONOPOLYMERS Blog`}
        description={post.description}
        canonical={`${SITE}/blog/${post.slug}`}
        ogUrl={`${SITE}/blog/${post.slug}`}
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "MONOPOLYMERS",
              logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${post.slug}` },
            keywords: post.tags.join(", "),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
            ],
          },
        ]}
      />

      <section className="bg-hero-gradient text-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/70 hover:text-white">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog" className="text-white/70 hover:text-white">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-[10px] font-semibold uppercase tracking-wider bg-white/10 rounded-full px-2 py-1">
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-balance leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readMinutes} min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-neutral">
          {post.sections.map((s, i) => (
            <section key={i} className="mb-10">
              {s.heading && <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{s.heading}</h2>}
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              {s.bullets && (
                <ul className="mt-2 space-y-2">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="pl-5 relative text-base md:text-lg text-muted-foreground leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-12 flex justify-between border-t border-border pt-8">
            <Button asChild variant="outline">
              <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />All articles</Link>
            </Button>
            <Button asChild className="bg-red-gradient">
              <Link to="/contact">Get a quote</Link>
            </Button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Keep reading</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="block rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition">
                  <h3 className="text-lg font-bold leading-snug hover:text-primary">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
