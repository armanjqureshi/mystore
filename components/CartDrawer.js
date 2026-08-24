"use client";

import { useCart } from "@/components/CartProvider";
import { SITE } from "@/lib/config";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total, whatsappLink, count } = useCart();

  return (
    <>
      {/* Floating tab, always visible once something is selected */}
      {count > 0 && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-white shadow-lg font-body text-sm"
        >
          <span>Your list</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage text-xs">
            {count}
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            aria-label="Close order list"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-ink/30"
          />
          <div className="relative z-10 flex h-full w-full max-w-sm flex-col bg-stone-surface p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-border pb-4">
              <h2 className="font-display text-xl">Your list</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ink-muted hover:text-ink"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              {items.length === 0 ? (
                <p className="text-ink-muted text-sm">
                  Nothing here yet. Add items from the shop to build your order list.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-ink-muted text-xs">₹{item.price} each</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="h-7 w-7 rounded border border-stone-border text-sm"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="h-7 w-7 rounded border border-stone-border text-sm"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-ink-muted hover:text-ink underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-stone-border pt-4">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-ink-muted">Estimated total</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-sage py-3 text-center text-white font-medium hover:bg-sage-dark transition-colors"
                >
                  Order via WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-ink-muted">
                  Or call us at {SITE.phoneDisplay}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
