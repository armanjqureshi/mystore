import Link from "next/link";
import { SITE } from "@/lib/config";
import { CATEGORIES, getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();
  const featured = products.filter((p) => p.inStock).slice(0, 4);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-stone-border pb-12">
          <div className="max-w-xl">
            <p className="text-sm text-sage-dark tracking-wide uppercase mb-3">
              From our shop to your door
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.1] italic">
              {SITE.name}
            </h1>
            <p className="mt-4 text-ink-muted text-base md:text-lg">
              {SITE.tagline}
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-white text-sm hover:bg-sage-dark transition-colors"
            >
              Browse the catalog
            </Link>
          </div>

          {/* shelf motif: a row of category "labels" like tags on a physical shelf */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-64">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/shop?category=${c.slug}`}
                className="rounded-md border border-stone-border bg-stone-surface px-4 py-3 text-sm shadow-shelf hover:border-ink transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-2xl">On the shelf now</h2>
            <Link href="/shop" className="text-sm text-ink-muted hover:text-ink underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <footer className="border-t border-stone-border py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-ink-muted">
          <span>{SITE.name} — visit our shop or order online</span>
          <span>Call/WhatsApp: {SITE.phoneDisplay}</span>
        </div>
      </footer>
    </main>
  );
}
