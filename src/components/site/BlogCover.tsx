import type { BlogCover as BlogCoverData } from "@/data/blog-covers";
import { cn } from "@/lib/utils";

type Props = {
  cover: BlogCoverData;
  /** Responsive `sizes` hint for the browser. */
  sizes: string;
  /** `true` for the post header (LCP element), `false` for listing cards. */
  priority?: boolean;
  className?: string;
  /** Wrapper class; the 16/9 box lives here so every placement reserves identical space. */
  wrapperClassName?: string;
};

/**
 * Single source of truth for blog cover presentation: same 16:9 crop, same
 * object-position, explicit intrinsic size (no layout shift) and consistent
 * loading behaviour on mobile and desktop.
 */
export function BlogCover({ cover, sizes, priority = false, className, wrapperClassName }: Props) {
  return (
    <picture className={cn("block", wrapperClassName)}>
      {cover.avifSrcSet && <source type="image/avif" srcSet={cover.avifSrcSet} sizes={sizes} />}
      {cover.webpSrcSet && <source type="image/webp" srcSet={cover.webpSrcSet} sizes={sizes} />}
      <img
        src={cover.src}
        srcSet={cover.jpegSrcSet || undefined}
        sizes={sizes}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "low"}
        className={cn("aspect-[16/9] w-full object-cover object-center", className)}
      />
    </picture>
  );
}
