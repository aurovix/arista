"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Smart Luggage",
    description: "Travel with confidence using our GPS-enabled smart luggage",
    image: "/placeholder.svg?height=600&width=800",
    link: "/categories/luggage",
  },
  {
    id: 2,
    name: "Wallets & Cards",
    description: "Keep your essentials secure with RFID-blocking technology",
    image: "/placeholder.svg?height=600&width=800",
    link: "/categories/wallets",
  },
  {
    id: 3,
    name: "Backpacks & Bags",
    description: "Anti-theft backpacks with charging ports and hidden compartments",
    image: "/placeholder.svg?height=600&width=800",
    link: "/categories/bags",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="w-full bg-muted/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our range of smart products designed for the modern lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="mb-4 text-white/90">{category.description}</p>
                <Link href={category.link}>
                  <Button
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white w-full sm:w-auto group"
                  >
                    Explore Collection
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

