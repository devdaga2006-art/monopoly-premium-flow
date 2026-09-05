import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CallFab } from "@/components/site/CallFab";
import { Toaster } from "@/components/ui/sonner";
import { useAnalytics } from "@/hooks/use-analytics";

import HomePage from "@/pages/index";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import FaqPage from "@/pages/faq";
import IndustriesPage from "@/pages/industries";
import ApplicationsPage from "@/pages/applications";
import ApplicationDetailPage from "@/pages/applications.$slug";

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
      additionalType: ["https://schema.org/Wholesale", "https://schema.org/Distributor"],
      name: "MONOPOLYMERS",
      alternateName: ["Monopolymers", "Mono Polymers"],
      slogan: "Polymer Raw Material Distributor in India Since 1996",
      url: `${SITE}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE}/#logo`,
        url: `${SITE}/favicon.png`,
        caption: "MONOPOLYMERS",
      },
      image: `${SITE}/favicon.png`,
      foundingDate: "1996",
      foundingLocation: { "@type": "Place", name: "Mumbai, Maharashtra, India" },
      email: "monopolymers@yahoo.com",
      telephone: "+91-93225-19925",
      description: "Trusted distributor of plastic raw materials and polymers in India since 1996.",
      address: [
        { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
        { "@type": "PostalAddress", addressLocality: "Vasai", addressRegion: "Maharashtra", addressCountry: "IN" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-93225-19925",
          email: "monopolymers@yahoo.com",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-93220-60428",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-90045-00225",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-93262-87420",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
      ],
      areaServed: [
        { "@type": "Country", name: "India", "@id": `${SITE}/#area-in` },
        { "@type": "State", name: "Maharashtra", "@id": `${SITE}/#area-mh` },
        { "@type": "State", name: "Gujarat", "@id": `${SITE}/#area-gj` },
        { "@type": "City", name: "Mumbai", "@id": `${SITE}/#area-mumbai` },
        { "@type": "City", name: "Vasai", "@id": `${SITE}/#area-vasai` },
        { "@type": "City", name: "Bhiwandi", "@id": `${SITE}/#area-bhiwandi` },
        { "@type": "City", name: "Vapi", "@id": `${SITE}/#area-vapi` },
        { "@type": "City", name: "Daman", "@id": `${SITE}/#area-daman` },
      ],
      knowsAbout: [
        "Plastic raw material India",
        "Plastic granules suppliers",
        "LDPE HDPE PP raw material",
        "Polymer distribution",
        "Polypropylene PP supplier Mumbai",
        "HDPE pipe grade supplier India",
        "LLDPE stretch film grade",
        "ABS engineering plastic",
        "Delrin POM supplier",
        "Nylon PA6 PA66 supplier",
        "PET bottle grade resin",
        "PVC resin supplier",
        "EVA TPR TPE footwear grade",
        "Polycarbonate PC supplier",
        "Acrylic PMMA supplier",
        "Polymer supplier Daman Vapi Gujarat",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plastic raw materials and polymer distribution",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Polymer granules and plastic raw materials",
              description: "Bulk PP, LDPE, LLDPE, HDPE, ABS, PVC, PET, EVA, HIPS, GPPS, PC, PA, POM, TPR, PMMA and more.",
              url: `${SITE}/products`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "B2B polymer supply and application consulting",
              description: "Same-day dispatch, grade recommendation, and technical support for manufacturers across India.",
              url: `${SITE}/applications`,
            },
          },
        ],
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bulk polymer distribution across India",
          description: "Wholesale supply of polymer granules with warehousing in Mumbai, Vasai, Bhiwandi, Vapi and Daman.",
        },
        areaServed: { "@id": `${SITE}/#area-in` },
        seller: { "@id": `${SITE}/#organization` },
      },
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
  useAnalytics();
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
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/applications/:slug" element={<ApplicationDetailPage />} />

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
