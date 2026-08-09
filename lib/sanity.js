import { createClient } from "@sanity/client";

// Fill these in once you've created your free Sanity project (see README.md).
// Until then, the site runs on the sample data in lib/products.js.
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
};

export const sanityClient = sanityConfig.projectId
  ? createClient(sanityConfig)
  : null;

export function urlFor(image) {
  // Sanity images come back as asset references; once connected,
  // swap this for the official @sanity/image-url helper.
  if (!image?.asset?.url) return null;
  return image.asset.url;
}
