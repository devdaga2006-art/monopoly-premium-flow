import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  preloadImage?: {
    href: string;
    srcSet?: string;
    sizes?: string;
    type?: string;
  };
  jsonLd?: object[];
}

export function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  preloadImage,
  jsonLd,
}: SeoProps) {
  const t = ogTitle ?? title;
  const d = ogDescription ?? description;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {preloadImage && (
        <link
          rel="preload"
          as="image"
          href={preloadImage.href}
          imageSrcSet={preloadImage.srcSet}
          imageSizes={preloadImage.sizes}
          type={preloadImage.type}
        />
      )}
      <meta property="og:title" content={t} />
      {d && <meta property="og:description" content={d} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      {d && <meta name="twitter:description" content={d} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {jsonLd?.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
