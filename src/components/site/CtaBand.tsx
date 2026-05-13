import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-gradient opacity-30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-balance">
                Ready to scale your polymer supply chain?
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Partner with India's trusted polymer distributor. Bulk orders, consistent quality,
                India-wide reach, backed by 30 years of relationships.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-red-gradient hover:opacity-95">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-charcoal">
                <a href="tel:+919322519925">Talk to Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
