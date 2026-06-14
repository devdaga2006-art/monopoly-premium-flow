import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { CtaBand } from "@/components/site/CtaBand";
import { Users, TrendingUp, Warehouse, Truck, ShieldCheck, Award, Clock, Heart } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import { Seo } from "@/lib/Seo";

const POINTS = [
  { icon: Users, t: "1000+ Active Customers", d: "Manufacturers across India trust us as their primary polymer source." },
  { icon: TrendingUp, t: "₹100Cr+ Turnover", d: "A growing enterprise, proof of scale, stability, and momentum." },
  { icon: Award, t: "30+ Year Relationships", d: "Customers who have grown alongside us for three decades." },
  { icon: Warehouse, t: "Strategic Warehousing", d: "Multiple warehouses across India for fast, reliable supply." },
  { icon: Truck, t: "On-time Delivery", d: "Industry-leading delivery consistency, even for bulk orders." },
  { icon: ShieldCheck, t: "Industry Expertise", d: "50+ years of family experience deeply embedded in plastics." },
  { icon: Clock, t: "Quick Response", d: "Sales team responds within hours on working days." },
  { icon: Heart, t: "Founder Accountability", d: "Direct access to the Daga family, every order matters." },
];

export default function WhyPage() {
  return (
    <>
      <Seo
        title="Why Choose MONOPOLYMERS, Trusted Polymer Distributor"
        description="1000+ customers, ₹100Cr+ turnover, 30+ year relationships, multiple warehouses, on-time delivery, built for high-volume B2B."
        canonical="https://monopolymers.in/why-us"
        ogUrl="https://monopolymers.in/why-us"
        jsonLd={[breadcrumbJsonLd("Why Us", "/why-us")]}
      />
      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Why Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            The polymer partner manufacturers <span className="text-primary">trust for life.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Three decades. 1000+ customers. A reputation built one delivery, one relationship at a time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCounter value={1000} suffix="+" label="Customers" />
          <StatCounter value={100} prefix="₹" suffix="Cr+" label="Turnover" />
          <StatCounter value={30} suffix="+" label="Yr Relationships" />
          <StatCounter value={50} suffix="+" label="Years Legacy" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Differentiators" title="Why MONOPOLYMERS stands apart" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {POINTS.map((p) => (
              <div key={p.t} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-charcoal text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
