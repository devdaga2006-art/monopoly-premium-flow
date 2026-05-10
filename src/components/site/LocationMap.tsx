import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ADDRESS =
  "Gala No. 8, Deewan Indl. Estate, Navghar, Vasai Road, Navghar Road, Vasai East No6, Samarth Krupa Nagar, Vasai East, Thane, Vasai-Virar, Maharashtra 401202";

const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export function LocationMap() {
  return (
    <section className="py-20 md:py-28 bg-muted/40 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Us"
          subtitle="Drop by our Vasai East facility — strategically located for fast dispatch across Maharashtra."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elegant transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-red-gradient flex items-center justify-center text-white shadow-elegant">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-charcoal">MONOPOLYMERS</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ADDRESS}</p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Get Directions →
            </a>
          </div>

          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-[16/10] md:aspect-[16/9] w-full">
              <iframe
                title="MONOPOLYMERS Location"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
