import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CallFab } from "@/components/site/CallFab";
import { Toaster } from "@/components/ui/sonner";

import HomePage from "@/pages/index";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import FaqPage from "@/pages/faq";
import IndustriesPage from "@/pages/industries";
import InfrastructurePage from "@/pages/infrastructure";
import ProductsPage from "@/pages/products";
import ProductDetailPage from "@/pages/products.$slug";
import LocationPage from "@/pages/locations.$slug";
import WhyUsPage from "@/pages/why-us";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog.$slug";
import NotFoundPage from "@/pages/not-found";

const SITE = "https://monopolymers.in";

const GLOBAL_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "MONOPOLYMERS",
      url: `${SITE}/`,
      logo: `${SITE}/favicon.png`,
      foundingDate: "1996",
      description: "Trusted distributor of plastic raw materials and polymers in India since 1996.",
      address: [
        { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
        { "@type": "PostalAddress", addressLocality: "Vasai", addressCountry: "IN" },
      ],
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+91-93225-19925", contactType: "sales", areaServed: "IN" },
        { "@type": "ContactPoint", telephone: "+91-93220-60428", contactType: "sales", areaServed: "IN" },
      ],
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Vasai" },
        { "@type": "City", name: "Bhiwandi" },
        { "@type": "City", name: "Vapi" },
        { "@type": "City", name: "Daman" },
      ],
      knowsAbout: [
        "Plastic raw material India", "Plastic granules suppliers",
        "LDPE HDPE PP raw material", "Polymer distribution",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "MONOPOLYMERS",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(GLOBAL_JSONLD)}</script>
      </Helmet>
      <ScrollToTop />
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <CallFab />
      <Toaster />
    </>
  );
}
