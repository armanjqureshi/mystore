"use client";

import { CATEGORIES } from "@/lib/products";

export default function FilterBar({ filters, setFilters }) {
  function update(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="flex flex-col gap-4 border-b border-stone-border pb-6 mb-8 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => update("category", "all")}
          className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
            filters.category === "all"
              ? "bg-ink text-white border-ink"
              : "border-stone-border text-ink-muted hover:border-ink"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            onClick={() => update("category", c.slug)}
            className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
              filters.category === c.slug
                ? "bg-ink text-white border-ink"
                : "border-stone-border text-ink-muted hover:border-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Search products..."
          value={filters.query}
          onChange={(e) => update("query", e.target.value)}
          className="rounded-full border border-stone-border bg-stone-surface px-4 py-1.5 text-sm w-48 focus:outline-none"
        />
        <select
          value={filters.sort}
          onChange={(e) => update("sort", e.target.value)}
          className="rounded-full border border-stone-border bg-stone-surface px-4 py-1.5 text-sm"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <label className="flex items-center gap-2 text-sm text-ink-muted">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => update("inStockOnly", e.target.checked)}
          />
          In stock only
        </label>
      </div>
    </div>
  );
}
