import ShopClient from "./ShopClient";
import { getProducts } from "@/lib/products";

export const revalidate = 60; // re-check for new/edited products every minute

export default async function ShopPage({ searchParams }) {
  const products = await getProducts();
  const initialCategory = searchParams?.category || "all";
  return <ShopClient initialProducts={products} initialCategory={initialCategory} />;
}
