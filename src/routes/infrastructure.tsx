import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import warehouseImg from "@/assets/warehouse.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { Building2, Warehouse, Truck, Clock, MapPin, ShieldCheck } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Logistics, MONOPOLYMERS" },
      { name: "description", content: "Two corporate offices in Mumbai and Vasai, plus multiple warehouses across India. Built for fast, reliable polymer distribution." },
      { property: "og:title", content: "Infrastructure & Logistics, MONOPOLYMERS" },
      { property: "og:description", content: "Strategic warehouses and logistics network across India, designed for high-volume polymer distribution." },
      { property: "og:url", content: "https://monopoly-premium-flow.lovable.app/infrastructure" },
      { property: "og:image", content: warehouseImg },
    ],
    links: [{ rel: "canonical", href: "https://monopoly-premium-flow.lovable.app/infrastructure" }],
    scripts: [breadcrumbJsonLd("Infrastructure", "/infrastructure")],
  }),
  component: InfraPage,
});

const OFFICES = [
  { t: "Mumbai, Head Office", d: "Our corporate headquarters and primary commercial hub for South & Central India operations." },
  { t: "Vasai, Operations Office", d: "Strategic operations and logistics command center supporting India-wide distribution." },
];

const CAPS = [
  { icon: Warehouse, t: "Multiple Warehouses", d: "Strategically located stocking points across India." },
  { icon: Truck, t: "Modern Fleet", d: "Reliable transport partners and dedicated logistics capacity." },
  { icon: Clock, t: "Same-day Dispatch", d: "Bulk orders dispatched the same or next working day." },
  { icon: ShieldCheck, t: "Inventory Reliability", d: "Healthy stock buffers prevent supply disruptions for our customers." },
  { icon: MapPin, t: "Regional Coverage", d: "Door delivery across India's industrial belts." },
  { icon: Building2, t: "Two Corporate Offices", d: "Mumbai HQ and Vasai operations office." },
];

function InfraPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Infrastructure</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            Built for <span className="text-primary">scale, speed, and reliability.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Two corporate offices and multiple strategically located warehouses across India
           , engineered to keep your production line running.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <img src={warehouseImg} alt="MONOPOLYMERS regional polymer warehouse interior" loading="lazy" width={1600} height={1024} className="rounded-3xl shadow-elegant w-full" />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Offices"
              title="Two corporate offices powering India-wide distribution"
            />
            <div className="mt-8 grid gap-4">
              {OFFICES.map((o) => (
                <div key={o.t} className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-gradient flex items-center justify-center text-white">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-charcoal text-lg">{o.t}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Capabilities" title="Logistics that keeps you running" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPS.map((c) => (
              <div key={c.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-charcoal text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img src={logisticsImg} alt="MONOPOLYMERS logistics fleet delivering polymer raw materials" loading="lazy" width={1600} height={1024} className="rounded-3xl shadow-elegant w-full" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
