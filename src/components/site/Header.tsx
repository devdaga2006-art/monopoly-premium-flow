import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const NAV: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/why-us", label: "Why Us" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)} aria-label="MONOPOLYMERS home">
          <img
            src={logo}
            alt="MONOPOLYMERS company logo"
            className="block h-28 sm:h-28 lg:h-36 w-auto object-contain select-none -my-10 sm:-my-8 lg:-my-10"
            draggable={false}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 text-sm font-semibold text-primary"
                  : "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+919322519925"
            className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +91 93225 19925
          </a>
          <Button asChild className="bg-red-gradient text-primary-foreground hover:opacity-95 shadow-elegant">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-3 rounded-md text-base font-semibold text-primary bg-accent"
                    : "px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted"
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 bg-red-gradient text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
