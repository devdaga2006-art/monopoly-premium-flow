# Blog image SEO + performance pass

Goal: every blog cover gets real descriptive alt text, search-engine-friendly image metadata, modern compressed formats with responsive sizes, and identical crop/loading behaviour on cards and post headers.

## 1. Descriptive alt text and image metadata

- Extend the cover map in `src/data/blog-covers.ts` from `slug -> image URL` to `slug -> { src, alt, caption }`, keeping a helper that returns the object (with a safe fallback).
- Write unique, human alt text per post that describes what is actually in the photo plus the keyword context (e.g. "Labelled LDPE, LLDPE and HDPE pellet samples on a laboratory bench at a Mumbai polymer distributor") instead of reusing the post title.
- Post detail pages: pass the cover as `og:image` / `twitter:image` (absolute `https://monopolymers.in/...` build URL) so shared blog links show the article photo, and add `image` to the existing `Article` JSON-LD as an `ImageObject` with width/height.
- Blog listing page: add the newest cover as the page-level `og:image`.
- Filenames are already slug-based and keyword-rich; keep them and reuse the same names for the generated variants (no renames needed, so existing links stay valid).

## 2. WebP/AVIF + responsive sizes

- Add a build-time image optimizer so the JPEG sources stay the single source of truth and Vite emits derivatives — `vite-imagetools` (Vite-native, no external binaries).
- For each cover, generate widths 480 / 800 / 1200 / 1600 in AVIF, WebP and JPEG.
- Render covers through a small shared `BlogCover` component using `<picture>`: AVIF `srcset`, then WebP, then JPEG fallback `<img>`, with `sizes` tuned per placement (cards ~ one third viewport on desktop, full width on mobile; header ~ 896px max).
- Expected payload drop: roughly 1.9 MB of JPEG today down to well under 400 KB for a typical listing view.

## 3. Consistent crop, ratio and loading

- One `BlogCover` component owns the presentation everywhere: fixed `aspect-[16/9]`, `object-cover`, `object-position: center`, explicit `width`/`height` attributes to stop layout shift, and rounded/ring styling passed in per placement.
- Loading behaviour: listing cards stay `loading="lazy"` + `decoding="async"` + `fetchpriority="low"`; the post header image becomes `loading="eager"` + `fetchpriority="high"` (it is the LCP element) and gets a `<link rel="preload" imagesrcset>` on the detail route.
- Keep the existing skeleton placeholder and reuse the same 16:9 box so mobile and desktop reserve identical space before the image decodes.

## Technical notes

- Files touched: `src/data/blog-covers.ts`, new `src/components/site/BlogCover.tsx`, `src/pages/blog.tsx`, `src/pages/blog.$slug.tsx`, `vite.config.ts`, plus one new dev dependency (`vite-imagetools`).
- No changes to blog copy, routes, sitemap, or existing schema beyond adding the `image` field.
- Verification: production build to confirm AVIF/WebP variants are emitted, then a browser check of `/blog` and one post for correct `srcset` selection, no layout shift, and alt text present.
