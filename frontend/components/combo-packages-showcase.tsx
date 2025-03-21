"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package } from "lucide-react"

interface ComboPackage {
  id: number
  name: string
  description: string
  price: number
  originalPrice: number
  image: string
  discount: number
  inStock: boolean
  items: string[]
}

const comboPackages: ComboPackage[] = [
  {
    id: 1,
    name: "Adventure Smart Combo: Aviator Luggage, Backpack, Wallet, Keychain and TechBag",
    description: "Complete travel set for the modern adventurer",
    price: 34740,
    originalPrice: 73198,
    image: "/placeholder.svg?height=400&width=400&text=Adventure+Combo",
    discount: 52,
    inStock: false,
    items: ["Smart Luggage", "Backpack", "Wallet", "Keychain", "TechBag"],
  },
  {
    id: 2,
    name: "College Smart Combo: Backpack, Keychain & Wallet Set",
    description: "Essential combo for students",
    price: 16800,
    originalPrice: 25199,
    image: "/placeholder.svg?height=400&width=400&text=College+Combo",
    discount: 33,
    inStock: false,
    items: ["Backpack", "Keychain", "Wallet"],
  },
  {
    id: 3,
    name: "Office Smart Combo: TechBag, Keychain & Wallet Set",
    description: "Professional combo for business people",
    price: 15220,
    originalPrice: 23199,
    image: "/placeholder.svg?height=400&width=400&text=Office+Combo",
    discount: 34,
    inStock: false,
    items: ["TechBag", "Keychain", "Wallet"],
  },
  {
    id: 4,
    name: "Travel Smart Combo: Follow me, Wallet & Passport Set",
    description: "Complete travel essentials",
    price: 73440,
    originalPrice: 102599,
    image: "/placeholder.svg?height=400&width=400&text=Travel+Combo",
    discount: 28,
    inStock: false,
    items: ["Smart Luggage", "Wallet", "Passport Holder"],
  },
]

// Function to format numbers consistently
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ComboPackagesShowcase() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1600&text=Combo+Packages)",
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
            COMPLETED PACKAGE - COMBO
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Save more with our specially curated combo packages</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comboPackages.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={combo.image || "/placeholder.svg"}
                  alt={combo.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute top-3 left-3 bg-gold text-black">Save {combo.discount}%</Badge>
                {!combo.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Sold Out</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <Link href={`/products/${combo.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-gold transition-colors line-clamp-2">
                    {combo.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{combo.description}</p>
                <div className="mb-3">
                  <div className="text-sm text-muted-foreground mb-2">Includes:</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {combo.items.map((item, i) => (
                      <Badge key={i} variant="outline" className="bg-gold/5 text-gold border-gold/20">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <span className="font-bold text-lg text-gold">₹{formatNumber(combo.price)}</span>
                  <span className="text-sm text-muted-foreground line-through ml-2">
                    ₹{formatNumber(combo.originalPrice)}
                  </span>
                </div>
                <Button
                  className="w-full group bg-gradient-to-r from-gold to-gold-light text-black hover:from-gold/90 hover:to-gold-light/90"
                  disabled={!combo.inStock}
                >
                  <Package className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {combo.inStock ? "Add to Cart" : "Sold Out"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/combos">
            <Button variant="outline" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
              View All Combo Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}