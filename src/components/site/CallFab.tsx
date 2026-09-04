import { Phone } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export function CallFab() {
  return (
    <a
      href="tel:+919322060428"
      aria-label="Call MONOPOLYMERS now"
      onClick={() => trackConversion("contact_call", { location: "fab" })}
      className="fixed bottom-20 right-5 sm:bottom-5 sm:right-48 z-50 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-elegant hover:scale-105 transition-transform"
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Call Now</span>
    </a>
  );
}
