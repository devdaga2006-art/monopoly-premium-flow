const SITE = "https://monopoly-premium-flow.lovable.app";

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name, item: `${SITE}${path}` },
      ],
    }),
  };
}
