# Visitor Tracking + Lead Capture with Admin Dashboard

Two things get added: aggregate visitor analytics, and real enquiry leads stored in a database you can read from a private admin page on the site.

## 1. Lead capture (contact details)

Today the contact form just opens WhatsApp — nothing is saved, so if the person never sends the message you lose the lead.

New behaviour on the contact form (and the product/application quote forms):
- Save the enquiry first (name, company, phone, email, message, which page it came from, referrer, timestamp), then open WhatsApp as it does today.
- Validate inputs (required name + phone, length limits, valid email format) before saving.
- Nothing about the visible form design changes.

## 2. Visitor tracking

A lightweight first-party page-view log, written on every route change:
- Path visited, referrer (Google, WhatsApp, direct...), device type, UTM campaign tags if present, coarse country/city from the request, and an anonymous visitor ID stored in the browser.
- No names, emails, or precise location — that data does not exist unless someone submits the enquiry form.
- Key clicks are also logged as events: Call Now, WhatsApp FAB, Get a Quote, WhatsApp Sales on product pages.

Honest limitation: this shows *behaviour*, not identity. Nobody (not Google Analytics either) can tell you the name, phone number, or company of an anonymous visitor. Named contact details only come from people who fill the form or message you.

## 3. Admin page

A private `/admin` route, reachable only after signing in with an email/password account you own (public visitors get a login screen, and non-admin accounts are rejected server-side).

Two tabs:
- **Leads** — table of every enquiry, newest first: date, name, company, phone (click to call), email, message, source page. Search box, and CSV export.
- **Traffic** — visits today / last 7 days / last 30 days, top pages, top referrers, top cities, and click-event counts.

## Technical notes

- Enable Lovable Cloud for the database and auth.
- Tables: `leads`, `page_views`, `click_events`, plus a separate `user_roles` table with an `app_role` enum and a `has_role()` security-definer function (roles are never stored on a profile row).
- RLS: anonymous visitors may INSERT into `leads`, `page_views`, `click_events` but cannot SELECT any of them. SELECT is restricted to `has_role(auth.uid(), 'admin')`. Grants issued explicitly per table.
- Your admin account is created via the Cloud user list and granted the `admin` role by a one-off data insert; there is no public signup page.
- Client-side and DB-level validation on lead fields; WhatsApp URL params stay `encodeURIComponent`-encoded.
- A small `usePageView` hook in `App.tsx` handles route-change logging; failures are silent and never block rendering.
- Since the live site is a static Netlify build, all of this runs from the browser against Cloud — no server changes to the Netlify setup.

## Optional (say the word)

Email notification per new lead can be added later; it needs an email provider key (e.g. Resend) and a verified sending domain.
