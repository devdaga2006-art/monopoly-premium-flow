import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import founders from "@/assets/founders.jpg";
import hmelRecognition from "@/assets/hmel-recognition.jpg";
import { CheckCircle2, Heart, Sparkles, Handshake, Trophy } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MONOPOLYMERS — A 50-Year Family Legacy in Polymers" },
      { name: "description", content: "Founded in 1996 in Mumbai by Mr. Jitendra Daga and Mr. Manoj Daga. A family legacy of more than 50 years in India's plastic industry." },
      { property: "og:title", content: "About MONOPOLYMERS — A 50-Year Family Legacy" },
      { property: "og:description", content: "Three decades of polymer distribution, built on ethics, consistency, and long-term customer relationships." },
      { property: "og:image", content: founders },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, t: "Relationships First", d: "30+ year customer relationships built on trust and accountability." },
  { icon: Sparkles, t: "Consistent Quality", d: "Sourced from leading global producers, every single batch." },
  { icon: Handshake, t: "Ethical Pricing", d: "Transparent, fair pricing — no surprises, ever." },
  { icon: Trophy, t: "Operational Excellence", d: "Fast dispatch, reliable supply, professional service." },
];

const TIMELINE = [
  { y: "1970s", t: "Family Roots", d: "The Daga family enters the plastic industry, building decades of expertise." },
  { y: "1996", t: "MONOPOLYMERS Founded", d: "Mr. Jitendra Daga and Mr. Manoj Daga establish the company in Mumbai." },
  { y: "2000s", t: "Customer Network Grows", d: "Trusted by hundreds of manufacturers across India." },
  { y: "2010s", t: "Infrastructure Expansion", d: "Multiple warehouses opened across the state to support high-volume supply." },
  { y: "Today", t: "₹100Cr+ Enterprise", d: "1000+ active customers, growing turnover, and a next-generation team." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">About Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-4xl">
            A family legacy of more than <span className="text-primary">50 years</span> in plastics.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl leading-relaxed">
            MONOPOLYMERS was founded in 1996 in Mumbai by Mr. Jitendra Daga and Mr. Manoj Daga,
            building on a deep family heritage in India's plastic industry. Three decades later,
            we serve 1000+ industrial customers and stand among India's most trusted polymer
            distributors.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={founders} alt="MONOPOLYMERS founders" loading="lazy" width={1400} height={1024} className="rounded-3xl shadow-elegant w-full" />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Founders"
              title="Two generations. One unwavering commitment."
              subtitle="What started as a small Mumbai-based polymer trading firm in 1996 has grown into a ₹100Cr+ enterprise — guided by the same values the founders began with: integrity, consistency, and care for every customer."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Mr. Jitendra K. Daga — Co-founder",
                "Mr. Manoj K. Daga — Co-founder",
                "Mr. Dev J. Daga — Next-generation leadership",
                "A combined 50+ years in the plastic industry",
              ].map((p) => (
                <li key={p} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span>{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Journey" title="From a Mumbai trading desk to a India-wide distributor" />
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {TIMELINE.map((t, i) => (
              <div key={t.y} className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl">{t.y}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-lg">{t.t}</h3>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{t.d}</p>
                </div>
                <span className="absolute left-2.5 md:left-1/2 top-1.5 h-3 w-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
