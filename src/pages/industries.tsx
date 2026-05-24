import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { INDUSTRIES } from "@/components/site/data";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import ogIndustries from "@/assets/og-industries.jpg";
import { Seo } from "@/lib/Seo";

export default function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries We Serve, MONOPOLYMERS"
        description="We supply polymers to packaging, automotive, consumer goods, infrastructure, agriculture, electrical and more across India."
        canonical="https://monopoly-premium-flow.lovable.app/industries"
        ogUrl="https://monopoly-premium-flow.lovable.app/industries"
        ogImage={ogIndustries}
        jsonLd={[breadcrumbJsonLd("Industries", "/industries")]}
      />
      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Industries</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            Polymers powering <span className="text-primary">every major industry.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            From packaging giants to automotive OEMs, MONOPOLYMERS supplies high-quality plastic
            raw materials to manufacturers across 10+ industries.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we serve" title="A polymer partner for every sector" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elegant transition-all">
                <div className="h-14 w-14 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant group-hover:scale-110 transition-transform">
                  <ind.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-charcoal">{ind.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
