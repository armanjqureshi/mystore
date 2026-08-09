"use client";

import Image from "next/image";
import { useCart } from "@/components/CartProvider";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-md bg-clay-light shadow-shelf">
        <Image
          src={product.images?.[0] || "/sample/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-white">
            Out of stock
          </span>
        )}
      </div>

      {/* the "shelf" line every product sits on */}
      <div className="mt-3 border-t border-stone-border pt-3">
        <p className="font-body text-sm text-ink-muted">
          {product.material || product.category}
        </p>
        <h3 className="font-display text-lg leading-tight mt-0.5">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium">₹{product.price}</span>
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="text-sm rounded-full border border-ink px-4 py-1.5 hover:bg-ink hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            {product.inStock ? "Add to list" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}
