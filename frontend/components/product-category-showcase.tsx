"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  inStock: boolean
}

interface ProductCategoryShowcaseProps {
  title: string
  description: string
  products: Product[]
  viewAllLink: string
}

// Function to format numbers consistently
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ProductCategoryShowcase({
  title,
  description,
  products,
  viewAllLink,
}: ProductCategoryShowcaseProps) {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(/placeholder.svg?height=800&width=1600&text=${title})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Sold Out</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-1 hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-gold mr-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                        />
                      ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                </div>
                <div className="flex items-center mb-3">
                  <span className="font-bold text-lg text-gold">₹{formatNumber(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ₹{formatNumber(product.originalPrice)}
                    </span>
                  )}
                </div>
                <Button
                  className="w-full group bg-gradient-to-r from-gold to-gold-light text-black hover:from-gold/90 hover:to-gold-light/90"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {product.inStock ? "Add to Cart" : "Sold Out"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={viewAllLink}>
            <Button variant="outline" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
              View All {title}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}