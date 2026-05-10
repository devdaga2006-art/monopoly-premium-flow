import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white rounded-lg p-3 inline-block">
            <img src={logo} alt="MONOPOLYMERS" className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Trusted polymer & plastic raw material distribution since 1996. A family legacy of
            more than 50 years powering India's industrial growth.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-primary">Industries</Link></li>
            <li><Link to="/infrastructure" className="hover:text-primary">Infrastructure</Link></li>
            <li><Link to="/why-us" className="hover:text-primary">Why Choose Us</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div>
                <a href="tel:+919322519925" className="block hover:text-primary">+91 93225 19925</a>
                <a href="tel:+919322060428" className="block hover:text-primary">+91 93220 60428</a>
                <a href="tel:+919004500225" className="block hover:text-primary">+91 90045 00225</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:info@monopolymers.in" className="block hover:text-primary">info@monopolymers.in</a>
              <a href="mailto:monopolymers@yahoo.com" className="block hover:text-primary">monopolymers@yahoo.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Offices</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span><strong className="block text-white">Mumbai HQ</strong>Maharashtra, India</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span><strong className="block text-white">Vasai Office</strong>Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between text-xs text-white/50 gap-2">
          <p>© {new Date().getFullYear()} MONOPOLYMERS. All rights reserved.</p>
          <p>Polymer & Plastic Raw Material Distribution · Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
