"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import { SITE } from "@/lib/config";

export default function ShopClient({ initialProducts, initialCategory = "all" }) {
  const [filters, setFilters] = useState({
    category: initialCategory,
    query: "",
    sort: "default",
    inStockOnly: false,
  });

  const filtered = useMemo(() => {
    let list = [...initialProducts];

    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }
    if (filters.query.trim()) {
      const q = filters.query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.material?.toLowerCase().includes(q)
      );
    }
    if (filters.inStockOnly) {
      list = list.filter((p) => p.inStock);
    }
    if (filters.sort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [initialProducts, filters]);

  return (
    <main>
      <div className="sticky top-0 z-10 border-b border-stone-border bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-xl">
            {SITE.name}
          </Link>
          <span className="text-sm text-ink-muted">{filtered.length} products</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <FilterBar filters={filters} setFilters={setFilters} />

        {filtered.length === 0 ? (
          <p className="text-ink-muted py-16 text-center">
            No products match those filters yet. Try clearing a filter.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
