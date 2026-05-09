## MONOPOLYMERS — Premium B2B Website Plan

A modern, multi-page corporate site for a polymer distribution company. Red/white/charcoal palette, premium industrial-corporate feel, fully responsive, SEO-ready.

### Brand & Design System
- **Palette (oklch in `src/styles.css`):**
  - Primary Red `#E10E1A`, Red Glow `#FF2A36`
  - Charcoal `#1A1A1A`, Slate `#3F3F46`, Light Grey `#F4F4F5`
  - Background White, Foreground Charcoal
  - Gradients: red-to-deep-red hero overlay, subtle grey radial for sections
- **Typography:** Headings `Space Grotesk` (bold, tight), body `Inter`. Large display sizes, tight tracking on headlines.
- **UI language:** Generous whitespace, soft shadows, 12–16px radii, thin red accent rules, animated counters, scroll-reveal fades, hover lift on cards, sticky translucent nav with red CTA.
- **Logo:** Use uploaded MONOPOLYMERS logo in `src/assets/`, shown in header + footer.
- **Imagery:** AI-generated premium industrial visuals (polymer granules close-ups, warehouse, factory, logistics trucks, handshake/team) saved to `src/assets/`.

### Route Architecture (TanStack Start, separate routes for SEO)
```
src/routes/
  __root.tsx          → shared layout + Header + Footer + WhatsApp FAB
  index.tsx           → Home (hero, highlights, stats, industries teaser, why-us, testimonials, CTA)
  about.tsx           → Founders, legacy, values, timeline
  industries.tsx      → All industries served (cards grid)
  infrastructure.tsx  → Offices, warehouses map, logistics network
  why-us.tsx          → Differentiators, stats, leadership
  faq.tsx             → Accordion FAQs
  contact.tsx         → Form, addresses, phones, map, click-to-call
```
Each route ships its own `head()` (title, description, og:title, og:description).

### Shared Components (`src/components/`)
- `Header` — sticky, translucent on scroll, logo + nav + red "Get a Quote" CTA
- `Footer` — multi-column, contacts, quick links, addresses, legal
- `WhatsAppFab` — floating green WhatsApp button → `wa.me/919326287420`
- `QuickEnquiryBar` — secondary sticky CTA
- `StatCounter` — animated count-up on view
- `IndustryCard`, `ValueCard`, `WarehouseCard`, `TestimonialCard`
- `SectionHeading` — eyebrow + headline + subcopy
- `Accordion` (shadcn) wrapper for FAQs
- `ContactForm` (shadcn form + zod, frontend-only submit → opens WhatsApp/mail)

### Page Sections (highlights)

**Home**
- Hero: full-bleed dark image + red gradient, headline "Trusted Polymer Distribution Since 1996", sub on legacy/scale, CTAs `Explore Products`, `Contact Us`, trust strip (1000+ customers · ₹100Cr+ · 50+ yrs · Maharashtra-wide).
- Legacy intro (Daga family, Mumbai 1996).
- Stats band with animated counters: 1000+ Customers · 50+ Years Legacy · ₹100Cr+ Turnover · 30+ Years Relationships · Multiple Warehouses · Est. 1996.
- Industries grid (8 cards w/ icons).
- Why Choose Us (6-feature bento).
- Infrastructure preview (Mumbai HQ, Vasai office, Maharashtra warehouses).
- Testimonials carousel (4 realistic B2B quotes).
- FAQ teaser (top 4) → link to /faq.
- Final CTA band → contact.

**About** — founders, family legacy, timeline (1996 → today), values (ethics, consistency, quality, relationships).

**Industries** — Packaging, Automotive, Consumer Goods, Industrial Mfg, Infrastructure, Household, Agriculture, Electrical, Pipes & Fittings, Textiles.

**Infrastructure** — office cards (Mumbai, Vasai), warehouse list across Maharashtra, logistics capabilities, embedded Google Map iframe.

**Contact** — form (name, company, phone, email, requirement), three founder contact cards with click-to-call, WhatsApp enquiry number, addresses, embedded map.

### Copywriting (delivered in components)
- Hero headlines + 2 alternates in comments
- About narrative emphasizing Daga family 50-yr legacy
- Industry one-liners
- 4 realistic testimonial quotes (packaging, auto-parts, consumer-goods, infra clients)
- 8 FAQs with full answers
- SEO meta per route

### Technical Details
- TanStack Router file-based routes, `Link` for nav.
- shadcn/ui: button, card, accordion, form, input, textarea, sonner, navigation-menu, sheet (mobile nav).
- Animations: CSS transitions + small `IntersectionObserver` hook for reveal/counters (no heavy libs).
- Icons: `lucide-react`.
- Responsive: mobile-first, hamburger sheet nav, stacked grids.
- Click-to-call: `tel:` links; WhatsApp: `https://wa.me/919326287420?text=...`.
- Google Maps: `<iframe>` embed (no API key needed).
- Contact form: client-side only (no backend yet) — shows toast + opens WhatsApp prefilled. Backend wiring (Lovable Cloud) can be added later if you want submissions stored/emailed.

### Out of scope (ask if you want these)
- Lovable Cloud backend (store enquiries, email notifications)
- Real product catalog / CMS
- Multilingual support
- Blog/news section

Ready to build on approval.