"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Truck } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  images: string[]
  category: string
  rating: number
  reviewCount: number
  isNew?: boolean
  features: string[]
  specifications: {
    dimensions: string
    weight: string
    material: string
    warranty: string
    color: string
  }
  stock: number
}

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    })
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted/20">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center text-amber-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                    />
                  ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold">₹{product.price.toLocaleString()}</div>

          <div className="prose dark:prose-invert max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4" />
            <span>{product.stock > 0 ? `In stock (${product.stock} available)` : "Out of stock"}</span>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                  className="h-10 w-10 rounded-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1 group" onClick={handleAddToCart} disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" aria-label="Add to wishlist">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Share product">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="features" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="pt-4">
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Dimensions</p>
                  <p className="text-sm text-muted-foreground">{product.specifications.dimensions}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Weight</p>
                  <p className="text-sm text-muted-foreground">{product.specifications.weight}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Material</p>
                  <p className="text-sm text-muted-foreground">{product.specifications.material}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Warranty</p>
                  <p className="text-sm text-muted-foreground">{product.specifications.warranty}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Color</p>
                  <p className="text-sm text-muted-foreground">{product.specifications.color}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm text-muted-foreground">On all prepaid orders across India</p>
                </div>
                <div>
                  <h4 className="font-medium">Delivery Time</h4>
                  <p className="text-sm text-muted-foreground">2-5 business days for most locations</p>
                </div>
                <div>
                  <h4 className="font-medium">Return Policy</h4>
                  <p className="text-sm text-muted-foreground">Easy 7-day returns for unused products</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

