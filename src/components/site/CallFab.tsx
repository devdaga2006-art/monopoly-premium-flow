import { Phone } from "lucide-react";

export function CallFab() {
  return (
    <a
      href="tel:+919322060428"
      aria-label="Call MONOPOLYMERS now"
      className="fixed bottom-5 right-44 sm:right-48 z-50 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-elegant hover:scale-105 transition-transform"
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Call Now</span>
    </a>
  );
}
