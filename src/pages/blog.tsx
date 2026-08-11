import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "@/lib/Seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import { BLOG_POSTS, BLOG_CATEGORIES, getAllTags, getPostCategory, type BlogPost } from "@/data/blog";
import { getBlogCover } from "@/data/blog-covers";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Calendar } from "lucide-react";

const SITE = "https://monopolymers.in";

const ALL = "All";
const ALL_TAGS = "__all_tags__";



function CardSkeleton() {
  return (
    <article className="flex flex-col border-b border-border pb-6">
      <Skeleton className="aspect-[16/10] w-full rounded-md" />
      <div className="flex flex-1 flex-col pt-4">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="mt-3 h-5 w-full" />
        <Skeleton className="mt-2 h-5 w-3/4" />
        <Skeleton className="mt-4 h-3 w-full" />
        <Skeleton className="mt-2 h-3 w-5/6" />
        <Skeleton className="mt-5 h-3 w-1/2" />
      </div>
    </article>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const category = getPostCategory(post);
  const cover = getBlogCover(post.slug);
  return (
    <article className="group flex flex-col border-b border-border pb-6">
      <Link
        to={`/blog/${post.slug}`}
        aria-label={post.title}
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-md bg-muted"
      >
        {cover && (
          <img
            src={cover}
            alt={post.title}
            width={1280}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          <span>{category}</span>
          <span className="h-px w-6 bg-primary/40" />
          <span className="text-muted-foreground">{post.readMinutes} min read</span>
        </div>

        <h2 className="mt-2 text-[1.35rem] font-bold leading-tight tracking-tight">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <Link
            to={`/blog/${post.slug}`}
            className="ml-auto inline-flex items-center gap-1 font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
          >
            Read article <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}


export default function BlogPage() {
  const posts = useMemo(
    () => [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [],
  );
  const allTags = useMemo(() => getAllTags(), []);

  // Applied filters (drive the grid)
  const [category, setCategory] = useState<string>(ALL);
  const [tag, setTag] = useState<string | null>(null);
  // Pending filters (mobile: applied only on "Show results")
  const [pendingCategory, setPendingCategory] = useState<string>(ALL);
  const [pendingTag, setPendingTag] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 350);
    return () => window.clearTimeout(t);
  }, [category, tag]);

  const dirty = pendingCategory !== category || pendingTag !== tag;

  const applyPending = () => {
    setCategory(pendingCategory);
    setTag(pendingTag);
  };

  const setBoth = (c: string, t: string | null) => {
    setCategory(c);
    setTag(t);
    setPendingCategory(c);
    setPendingTag(t);
  };

  const filtered = posts.filter(
    (p) =>
      (category === ALL || getPostCategory(p) === category) &&
      (!tag || p.tags.includes(tag)),
  );

  const hasFilters = category !== ALL || !!tag;

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

      <section className="pb-20 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest posts" title="Fresh from the desk" />
        </div>

        {/* Mobile: sticky filter bar with dropdowns + single apply button */}
        <div className="sticky top-16 z-40 mt-8 border-y border-border bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3">
            <Select value={pendingCategory} onValueChange={setPendingCategory}>
              <SelectTrigger className="h-9 flex-1 text-xs" aria-label="Filter posts by category">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {[ALL, ...BLOG_CATEGORIES].map((c) => (
                  <SelectItem key={c} value={c} className="text-xs">
                    {c === ALL ? "All categories" : c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={pendingTag ?? ALL_TAGS}
              onValueChange={(v) => setPendingTag(v === ALL_TAGS ? null : v)}
            >
              <SelectTrigger className="h-9 flex-1 text-xs" aria-label="Filter posts by tag">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_TAGS} className="text-xs">
                  All tags
                </SelectItem>
                {allTags.map((t) => (
                  <SelectItem key={t} value={t} className="text-xs">
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              type="button"
              size="sm"
              onClick={applyPending}
              disabled={!dirty}
              className="h-9 shrink-0 bg-red-gradient px-3 text-xs"
            >
              Show results
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop: pills */}
          <div className="mt-10 hidden space-y-3 md:block">
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter posts by category">
              {[ALL, ...BLOG_CATEGORIES].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setBoth(c, tag)}
                  aria-pressed={category === c}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    category === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter posts by tag">
              {allTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setBoth(category, tag === t ? null : t)}
                  aria-pressed={tag === t}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide transition ${
                    tag === t
                      ? "bg-primary/10 text-primary ring-1 ring-primary"
                      : "text-muted-foreground/80 hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center text-xs text-muted-foreground">
            <span>
              {loading ? "Loading articles…" : `Showing ${filtered.length} of ${posts.length} articles`}
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={() => setBoth(ALL, null)}
                className="ml-2 font-semibold text-primary hover:underline"
              >
                Clear filters ✕
              </button>
            )}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
              : filtered.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>

          {!loading && filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              No articles match these filters yet.
            </p>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
