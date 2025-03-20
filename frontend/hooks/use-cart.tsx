"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Product {
  id: number
  name: string
  price: number
  image: string
  [key: string]: any
}

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === product.id)

        if (existingItem) {
          return set({
            items: currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          })
        }

        set({ items: [...currentItems, { ...product, quantity: 1 }] })
      },
      removeItem: (id: number) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
      },
      updateQuantity: (id: number, quantity: number) => {
        set({
          items: get().items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
)

