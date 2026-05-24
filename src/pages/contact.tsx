import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { breadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import ogContact from "@/assets/og-contact.jpg";
import { Seo } from "@/lib/Seo";

const CONTACTS = [
  { name: "Mr. Jitendra K. Daga", role: "Co-founder & Director", phone: "+91 93225 19925", tel: "+919322519925" },
  { name: "Mr. Manoj K. Daga", role: "Co-founder & Director", phone: "+91 93220 60428", tel: "+919322060428" },
  { name: "Mr. Dev J. Daga", role: "Director", phone: "+91 90045 00225", tel: "+919004500225" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone.");
      return;
    }
    const text = `Hi MONOPOLYMERS,%0A%0AName: ${form.name}%0ACompany: ${form.company}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/919326287420?text=${text}`, "_blank");
    toast.success("Opening WhatsApp with your enquiry…");
  };

  return (
    <>
      <Seo
        title="Contact MONOPOLYMERS, Get a Quote"
        description="Reach MONOPOLYMERS in Mumbai or Vasai. Call our directors, WhatsApp our team, or send a quick enquiry."
        canonical="https://monopoly-premium-flow.lovable.app/contact"
        ogUrl="https://monopoly-premium-flow.lovable.app/contact"
        ogImage={ogContact}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MONOPOLYMERS",
            url: "https://monopoly-premium-flow.lovable.app/contact",
            telephone: ["+91-93225-19925", "+91-93220-60428", "+91-90045-00225"],
            email: "monopolymers@yahoo.com",
            address: [
              { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
              { "@type": "PostalAddress", addressLocality: "Vasai", addressRegion: "Maharashtra", addressCountry: "IN" },
            ],
            areaServed: "IN",
            priceRange: "$$",
          },
          breadcrumbJsonLd("Contact", "/contact"),
        ]}
      />
      <section className="bg-hero-gradient text-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Contact</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            Let's talk <span className="text-primary">polymers.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Bulk enquiries, partnership conversations, or just a quick question, our team responds fast.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 mb-16">
          {CONTACTS.map((c) => (
            <div key={c.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition-shadow">
              <h3 className="font-semibold text-charcoal text-lg">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.role}</p>
              <div className="mt-5 flex flex-col gap-2">
                <a href={`tel:${c.tel}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80">
                  <Phone className="h-4 w-4" /> {c.phone}
                </a>
                <a href={`https://wa.me/${c.tel.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-charcoal hover:text-primary">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Send Enquiry"
              title="Get a quote in hours, not days"
              subtitle="Fill the form and our team will reach out via WhatsApp or call."
            />
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <Input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <Textarea rows={5} placeholder="Tell us about your requirement, polymer type, grade, quantity…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" size="lg" className="w-full bg-red-gradient hover:opacity-95">
                Send Enquiry via WhatsApp
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-charcoal text-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Quick Channels</h3>
              <div className="mt-6 space-y-4">
                <a href="https://wa.me/919326287420" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-[#25D366] flex items-center justify-center"><MessageCircle className="h-6 w-6" /></div>
                  <div>
                    <div className="text-sm text-white/60">WhatsApp Enquiry</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">+91 93262 87420</div>
                  </div>
                </a>
                <a href="mailto:monopolymers@yahoo.com" className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center"><Mail className="h-6 w-6" /></div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">monopolymers@yahoo.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <div className="text-sm text-white/60">Offices</div>
                    <div className="font-semibold">Mumbai · Vasai</div>
                    <div className="text-sm text-white/60 mt-1">Warehouses across India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                title="MONOPOLYMERS Mumbai location"
                src="https://www.google.com/maps?q=Mumbai,India,India&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
