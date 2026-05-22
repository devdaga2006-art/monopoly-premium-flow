import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CallFab } from "@/components/site/CallFab";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "8_kqC06NtAxslcIQqiCGZFw1W26EEk08K0X5TAuSX8A" },
      { title: "MONOPOLYMERS, Trusted Polymer Distribution Since 1996" },
      { name: "description", content: "MONOPOLYMERS is a leading distributor of plastic raw materials & polymers since 1996. 1000+ customers, ₹100Cr+ turnover, warehouses across India." },
      { name: "author", content: "MONOPOLYMERS" },
      { property: "og:title", content: "MONOPOLYMERS, Trusted Polymer Distribution Since 1996" },
      { property: "og:description", content: "MONOPOLYMERS is a leading distributor of plastic raw materials & polymers since 1996. 1000+ customers, ₹100Cr+ turnover, warehouses across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MONOPOLYMERS, Trusted Polymer Distribution Since 1996" },
      { name: "twitter:description", content: "MONOPOLYMERS is a leading distributor of plastic raw materials & polymers since 1996. 1000+ customers, ₹100Cr+ turnover, warehouses across India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/acf13eb9-dfdc-4d7f-8c83-bc41d33a3ffb/id-preview-37922952--1a00f9da-b2bf-41d9-86b9-2a680679e641.lovable.app-1778567900819.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/acf13eb9-dfdc-4d7f-8c83-bc41d33a3ffb/id-preview-37922952--1a00f9da-b2bf-41d9-86b9-2a680679e641.lovable.app-1778567900819.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://monopoly-premium-flow.lovable.app/#organization",
              name: "MONOPOLYMERS",
              url: "https://monopoly-premium-flow.lovable.app/",
              logo: "https://monopoly-premium-flow.lovable.app/favicon.ico",
              foundingDate: "1996",
              description:
                "Trusted distributor of plastic raw materials and polymers in India since 1996.",
              address: [
                { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
                { "@type": "PostalAddress", addressLocality: "Vasai", addressCountry: "IN" },
              ],
              contactPoint: [
                { "@type": "ContactPoint", telephone: "+91-93225-19925", contactType: "sales", areaServed: "IN" },
                { "@type": "ContactPoint", telephone: "+91-93220-60428", contactType: "sales", areaServed: "IN" },
              ],
              areaServed: [
                { "@type": "State", name: "Maharashtra" },
                { "@type": "State", name: "Gujarat" },
                { "@type": "AdministrativeArea", name: "Daman and Diu" },
                { "@type": "City", name: "Mumbai" },
                { "@type": "Country", name: "India" },
              ],
              knowsAbout: [
                "Plastic raw materials",
                "Plastic granules",
                "Polymer distribution",
                "Polypropylene (PP)",
                "LDPE", "LLDPE", "HDPE", "PVC", "PET", "GPPS", "HIPS",
                "ABS", "Polycarbonate (PC)", "Nylon (PA)",
                "POM / Acetal / Delrin", "PMMA / Acrylic", "EVA", "TPR", "TPE",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://monopoly-premium-flow.lovable.app/#website",
              url: "https://monopoly-premium-flow.lovable.app/",
              name: "MONOPOLYMERS",
              publisher: { "@id": "https://monopoly-premium-flow.lovable.app/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <CallFab />
      <Toaster />
    </QueryClientProvider>
  );
}
