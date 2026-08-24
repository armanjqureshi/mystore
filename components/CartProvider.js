"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { SITE } from "@/lib/config";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id, name, price, qty }
  const [isOpen, setIsOpen] = useState(false);

  function addItem(product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
    setIsOpen(true);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id, qty) {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  function clearCart() {
    setItems([]);
  }

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  );

  const whatsappLink = useMemo(() => {
    if (items.length === 0) return null;
    const lines = items.map((i) => `- ${i.name} x${i.qty} (₹${i.price * i.qty})`);
    const message = [
      `Hi! I'd like to order:`,
      ...lines,
      ``,
      `Total: ₹${total}`,
    ].join("\n");
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [items, total]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    total,
    whatsappLink,
    isOpen,
    setIsOpen,
    count: items.reduce((sum, i) => sum + i.qty, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
