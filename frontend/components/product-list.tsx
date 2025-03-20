"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"
import ProductCardSkeleton from "@/components/product-card-skeleton"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

// Mock data - would be fetched from an API in a real application
const allProducts = Array(24)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: "Smart product with advanced features and technology",
    price: 99.99 + index * 10,
    image: `/placeholder.svg?height=400&width=400&text=Product+${index + 1}`,
    category: ["Bags", "Wallets", "Luggage", "Accessories"][index % 4],
    rating: 4 + Math.random(),
    reviewCount: Math.floor(Math.random() * 100) + 10,
    isNew: index % 5 === 0,
  }))

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<typeof allProducts>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  const productsPerPage = 8

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setProducts(allProducts.slice(0, productsPerPage))
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Load more products when the load more button comes into view
  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      loadMoreProducts()
    }
  }, [inView, isLoading])

  const loadMoreProducts = () => {
    const nextPage = page + 1
    const start = (nextPage - 1) * productsPerPage
    const end = start + productsPerPage

    // Simulate API delay
    setTimeout(() => {
      const newProducts = allProducts.slice(0, end)
      setProducts(newProducts)
      setPage(nextPage)
      setHasMore(end < allProducts.length)
    }, 800)
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(productsPerPage)
          .fill(0)
          .map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % productsPerPage) * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center" ref={ref}>
          <Button variant="outline" size="lg" onClick={loadMoreProducts} className="mx-auto">
            Load More Products
          </Button>
        </div>
      )}
    </>
  )
}

