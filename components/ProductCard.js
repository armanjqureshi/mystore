"use client";

import Image from "next/image";
import { useCart } from "@/components/CartProvider";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col rounded-xl border border-stone-border bg-white shadow-card hover:shadow-card-hover transition-shadow overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-stone-surface">
        <Image
          src={product.images?.[0] || "/sample/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-white">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase tracking-wide text-ink-muted">
          {product.material || product.category}
        </p>
        <h3 className="font-body text-sm font-medium leading-snug mt-1 line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-semibold">₹{product.price}</span>
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="text-sm font-medium rounded-lg bg-sage-dark text-white px-4 py-2 hover:bg-ink transition-colors disabled:opacity-40 disabled:hover:bg-sage-dark"
          >
            {product.inStock ? "Add to cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}
