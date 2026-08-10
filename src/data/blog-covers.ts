import ldpe from "@/assets/blog/ldpe-vs-lldpe-vs-hdpe-buyers-guide.jpg";
import pp from "@/assets/blog/how-to-choose-polypropylene-pp-grade.jpg";
import prices from "@/assets/blog/plastic-raw-material-prices-india.jpg";
import mumbai from "@/assets/blog/polymer-suppliers-mumbai-what-to-look-for.jpg";
import engPlastics from "@/assets/blog/engineering-plastics-abs-pc-nylon-pom.jpg";
import eva from "@/assets/blog/eva-tpr-tpe-footwear-injection-guide.jpg";
import hdpePipe from "@/assets/blog/hdpe-pipe-grade-supplier-india.jpg";
import pet from "@/assets/blog/pet-bottle-grade-supplier-india.jpg";
import pvc from "@/assets/blog/pvc-pipe-fitting-compound-india.jpg";
import gujarat from "@/assets/blog/polymer-supplier-gujarat-vapi-daman.jpg";
import absPc from "@/assets/blog/abs-vs-pc-vs-abs-pc-alloy-guide.jpg";
import masterbatch from "@/assets/blog/masterbatch-vs-natural-polymer-guide.jpg";

/** Realistic cover photo for each blog post, keyed by slug. */
export const BLOG_COVERS: Record<string, string> = {
  "ldpe-vs-lldpe-vs-hdpe-buyers-guide": ldpe,
  "how-to-choose-polypropylene-pp-grade": pp,
  "plastic-raw-material-prices-india": prices,
  "polymer-suppliers-mumbai-what-to-look-for": mumbai,
  "engineering-plastics-abs-pc-nylon-pom": engPlastics,
  "eva-tpr-tpe-footwear-injection-guide": eva,
  "hdpe-pipe-grade-supplier-india": hdpePipe,
  "pet-bottle-grade-supplier-india": pet,
  "pvc-pipe-fitting-compound-india": pvc,
  "polymer-supplier-gujarat-vapi-daman": gujarat,
  "abs-vs-pc-vs-abs-pc-alloy-guide": absPc,
  "masterbatch-vs-natural-polymer-guide": masterbatch,
};

export function getBlogCover(slug: string) {
  return BLOG_COVERS[slug];
}
