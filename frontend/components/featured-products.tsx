"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"
import ProductCardSkeleton from "@/components/product-card-skeleton"

// Mock data - would be fetched from an API in a real application
const featuredProducts = [
  {
    id: 1,
    name: "Travel Luggage X1",
    description: "Smart luggage with fingerprint lock and built-in scale",
    price: 249.99,
    image: "/assets/2_cfe13cd8-ccfe-4379-801b-1d0ddb5958fc.webp?height=400&width=400",
    category: "Luggage",
    rating: 4.9,
    reviewCount: 56,
    isNew: true,
  },
  {
    id: 2,
    name: "Secure Wallet Plus",
    description: "RFID blocking wallet with Bluetooth tracking",
    price: 59.99,
    image: "/assets/Smart_Passport_Holder_Brown.webp?height=400&width=400",
    category: "Wallets",
    rating: 4.6,
    reviewCount: 89,
    isNew: false,
  },
  {
    id: 3,
    name: "Smart Backpack Pro",
    description: "Anti-theft backpack with GPS tracking and USB charging",
    price: 129.99,
    image: "/assets/Smart_Fingerlock_Backpack_Leather_In_Black.webp?height=400&width=400",
    category: "Bags",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
  },
  {
    id: 4,
    name: "Croc-Textured Fingerlock Smart Leather laptop bag",
    description: "Stylish laptop bag with fingerprint lock and GPS tracking",
    price: 199.99,
    image: "/assets/Croc-Textured_Fingerlock_Smart_Leather_Laptop_Bag.webp?height=400&width=400",
    category: "Bags",
    rating: 4.7,
    reviewCount: 67,
    isNew: false,
  },
]

export default function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {isLoading
        ? Array(4)
          .fill(0)
          .map((_, index) => <ProductCardSkeleton key={index} />)
        : featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
    </div>
  )
}

