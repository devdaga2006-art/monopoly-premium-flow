import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Truck, Warehouse, Users, TrendingUp, ShieldCheck, Award, Clock } from "lucide-react";
import heroImg from "@/assets/hero-pellets.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { LocationMap } from "@/components/site/LocationMap";
import { INDUSTRIES, TESTIMONIALS, FAQS } from "@/components/site/data";
import { useReveal } from "@/hooks/use-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Seo } from "@/lib/Seo";

const WHY = [
  { icon: Users, title: "1000+ Customers", desc: "Trusted by manufacturers across India for decades." },
  { icon: TrendingUp, title: "₹100Cr+ Turnover", desc: "A growing enterprise with proven scale and stability." },
  { icon: Warehouse, title: "Multiple Warehouses", desc: "Strategic stocking points across India." },
  { icon: Truck, title: "Fast Dispatch", desc: "Same-day & next-day delivery for bulk orders." },
  { icon: ShieldCheck, title: "Consistent Quality", desc: "Sourced from leading global polymer producers." },
  { icon: Award, title: "30+ Year Relationships", desc: "Customers who have grown with us for 3 decades." },
];

export default function HomePage() {
  const aboutRef = useReveal<HTMLDivElement>();
  const industriesRef = useReveal<HTMLDivElement>();

  return (
    <>
      <Seo
        title="MONOPOLYMERS, Trusted Polymer Distribution Since 1996"
        description="Bulk polymer & plastic raw material distribution in India. 1000+ customers, ₹100Cr+ turnover, founded 1996 in Mumbai."
        canonical="https://monopolymers.in/"
        ogUrl="https://monopolymers.in/"
        ogImage={heroImg}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.slice(0, 5).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="relative -mt-[88px] md:-mt-[104px] min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Premium polymer pellets cascading"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div aria-hidden className="granules-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/15">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Established 1996 · Mumbai
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance">
              <span className="block">MONOPOLYMERS</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90 mt-2">
                Trusted Polymer Distributors <span className="text-primary">Since 1996</span>
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              A 50+ year family legacy in plastics. 1000+ industrial customers. ₹100Cr+ in
              annual turnover. Strategic warehousing across India, built for high-volume,
              high-trust B2B supply.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-red-gradient hover:opacity-95 shadow-elegant text-base">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur border-white/30 text-white hover:bg-white hover:text-charcoal text-base">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {[
                ["1000+", "Customers"],
                ["50+", "Years Legacy"],
                ["₹100Cr+", "Turnover"],
                ["1996", "Established"],
              ].map(([v, l]) => (
                <div key={l} className="border-l-2 border-primary pl-3">
                  <div className="text-2xl md:text-3xl font-bold text-white font-display">{v}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={aboutRef} className="reveal relative">
            <div className="absolute -inset-4 bg-red-gradient rounded-3xl opacity-20 blur-2xl" />
            <img
              src={warehouseImg}
              alt="MONOPOLYMERS warehouse"
              loading="lazy"
              width={1600}
              height={1024}
              className="relative rounded-3xl shadow-elegant w-full"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Three decades of polymer expertise. Built on a 50-year family legacy."
              subtitle="Founded in Mumbai in 1996 by Mr. Jitendra Daga and Mr. Manoj Daga, MONOPOLYMERS carries forward a family heritage of more than five decades in the plastic industry, earning the trust of 1000+ industrial customers across India."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Founded by Mr. Jitendra Daga & Mr. Manoj Daga in 1996",
                "Family experience of 50+ years in plastics",
                "Long-term customers retained for 30+ years",
                "Built on ethics, consistency, and quality",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-red-gradient hover:opacity-95">
              <Link to="/about">Read Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Powering India's manufacturing backbone"
            subtitle="From packaging giants to automotive OEMs, we supply mission-critical polymer raw materials to manufacturers across every major industry."
          />
          <div ref={industriesRef} className="reveal mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.slice(0, 8).map((ind) => (
              <div
                key={ind.title}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant group-hover:scale-110 transition-transform">
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-charcoal/20">
              <Link to="/industries">View all industries <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white text-balance">
              Built for high-volume B2B. Trusted for the long run.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w) => (
              <div key={w.title} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center shadow-elegant">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Infrastructure"
              title="Strategic logistics across India"
              subtitle="Two corporate offices and multiple warehouses positioned for fastest possible dispatch, so your production line never waits."
            />
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Warehouse, t: "Multiple Warehouses", d: "Strategically located across India." },
                { icon: Truck, t: "Fast Dispatch", d: "Same-day & next-day for bulk orders." },
                { icon: Clock, t: "On-Time Delivery", d: "Industry-leading delivery consistency." },
                { icon: ShieldCheck, t: "Quality Assured", d: "Sourced from reputed manufacturers." },
              ].map((i) => (
                <div key={i.t} className="bg-muted/50 rounded-xl p-5 border border-border">
                  <i.icon className="h-6 w-6 text-primary" />
                  <h4 className="mt-3 font-semibold text-charcoal">{i.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={logisticsImg}
              alt="MONOPOLYMERS logistics fleet"
              loading="lazy"
              width={1600}
              height={1024}
              className="rounded-3xl shadow-elegant w-full"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Voice of customers"
            title="Three decades of partnerships"
            subtitle="What India's top manufacturers say about working with MONOPOLYMERS."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-shadow">
                <div className="text-5xl text-primary leading-none font-display">"</div>
                <blockquote className="mt-2 text-foreground leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-charcoal">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role} · {t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Questions, answered." />
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.slice(0, 5).map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-charcoal hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/faq">See all FAQs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <LocationMap />
      <CtaBand />
    </>
  );
}
