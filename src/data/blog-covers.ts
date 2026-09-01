/**
 * Blog cover images.
 *
 * Sources live in `src/assets/blog/<slug>.jpg` (keyword-rich, slug-based filenames).
 * vite-imagetools generates responsive AVIF / WebP / JPEG derivatives at build time,
 * so each cover ships as a `<picture>` with three srcsets instead of one 1.6k-wide JPEG.
 */

const WIDTHS = "480;800;1200;1600";

const avif = import.meta.glob("/src/assets/blog/*.jpg", {
  query: { w: WIDTHS, format: "avif", as: "srcset" },
  eager: true,
  import: "default",
}) as Record<string, string>;

const webp = import.meta.glob("/src/assets/blog/*.jpg", {
  query: { w: WIDTHS, format: "webp", as: "srcset" },
  eager: true,
  import: "default",
}) as Record<string, string>;

const jpeg = import.meta.glob("/src/assets/blog/*.jpg", {
  query: { w: WIDTHS, format: "jpg", as: "srcset" },
  eager: true,
  import: "default",
}) as Record<string, string>;

const fallback = import.meta.glob("/src/assets/blog/*.jpg", {
  query: { w: "1200", format: "jpg" },
  eager: true,
  import: "default",
}) as Record<string, string>;

/** Descriptive, unique alt text per cover — describes the photo, not just the headline. */
const ALT: Record<string, string> = {
  "ldpe-vs-lldpe-vs-hdpe-buyers-guide":
    "Labelled LDPE, LLDPE and HDPE pellet samples side by side on a laboratory bench at a Mumbai polymer distributor",
  "how-to-choose-polypropylene-pp-grade":
    "Quality-control technician scooping polypropylene granules from a sample tray for melt-flow testing",
  "plastic-raw-material-prices-india":
    "Stacked 25 kg bags of imported plastic raw material in an Indian polymer distribution warehouse",
  "polymer-suppliers-mumbai-what-to-look-for":
    "Warehouse supervisor checking polymer bag batch labels against a delivery sheet in Mumbai",
  "engineering-plastics-abs-pc-nylon-pom":
    "Trays of ABS, polycarbonate, nylon and POM engineering plastic granules arranged for comparison",
  "eva-tpr-tpe-footwear-injection-guide":
    "EVA, TPR and TPE compound granules beside moulded footwear soles on an injection shop floor",
  "hdpe-pipe-grade-supplier-india":
    "Coils of black HDPE pipe stacked next to pipe-grade polyethylene granules at an Indian plant",
  "pet-bottle-grade-supplier-india":
    "Bottle-grade PET chips and preforms on a conveyor at a PET packaging manufacturing line",
  "pvc-pipe-fitting-compound-india":
    "PVC compound pellets with grey PVC fittings and pipe stock in a distributor's warehouse",
  "polymer-supplier-gujarat-vapi-daman":
    "Polymer raw material bags loaded on pallets at a Gujarat warehouse serving Vapi and Daman",
  "abs-vs-pc-vs-abs-pc-alloy-guide":
    "ABS, polycarbonate and ABS-PC alloy pellet samples in labelled dishes under workshop daylight",
  "masterbatch-vs-natural-polymer-guide":
    "Coloured masterbatch granules next to natural polymer pellets ready for dosing at an extruder",
};

export type BlogCover = {
  /** Fallback JPEG src for the `<img>` element. */
  src: string;
  avifSrcSet: string;
  webpSrcSet: string;
  jpegSrcSet: string;
  alt: string;
  width: number;
  height: number;
};

const key = (slug: string) => `/src/assets/blog/${slug}.jpg`;

export function getBlogCover(slug: string): BlogCover | undefined {
  const k = key(slug);
  const src = fallback[k];
  if (!src) return undefined;
  return {
    src,
    avifSrcSet: avif[k] ?? "",
    webpSrcSet: webp[k] ?? "",
    jpegSrcSet: jpeg[k] ?? "",
    alt: ALT[slug] ?? "Plastic raw material and polymer granules at MONOPOLYMERS",
    width: 1600,
    height: 900,
  };
}

/** Absolute URL for og:image / structured data. */
export function absoluteCoverUrl(site: string, src: string) {
  return src.startsWith("http") ? src : `${site}${src}`;
}
