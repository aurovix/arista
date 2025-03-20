// import { notFound } from "next/navigation"
// import ProductDetails from "@/components/product-details"
// import RelatedProducts from "@/components/related-products"

// // Mock data - would be fetched from an API in a real application
// const products = Array(24)
//   .fill(0)
//   .map((_, index) => ({
//     id: index + 1,
//     name: `Product ${index + 1}`,
//     description:
//       "Smart product with advanced features and technology. This innovative product is designed to enhance your daily life with cutting-edge technology and sleek design. Perfect for tech enthusiasts and those who value quality and functionality.",
//     price: 99.99 + index * 10,
//     image: `/placeholder.svg?height=600&width=600&text=Product+${index + 1}`,
//     images: Array(4)
//       .fill(0)
//       .map((_, i) => `/placeholder.svg?height=600&width=600&text=Image+${i + 1}`),
//     category: ["Bags", "Wallets", "Luggage", "Accessories"][index % 4],
//     rating: 4 + Math.random() * 0.9,
//     reviewCount: Math.floor(Math.random() * 100) + 10,
//     isNew: index % 5 === 0,
//     features: [
//       "Anti-theft technology",
//       "GPS tracking",
//       "RFID blocking",
//       "USB charging port",
//       "Water-resistant material",
//     ],
//     specifications: {
//       dimensions: "30 x 20 x 10 cm",
//       weight: "1.2 kg",
//       material: "Premium polyester",
//       warranty: "Limited lifetime warranty",
//       color: ["Black", "Blue", "Grey"][index % 3],
//     },
//     stock: Math.floor(Math.random() * 50) + 1,
//   }))

// export function generateMetadata({ params }: { params: { id: string } }) {
//   const product = products.find((p) => p.id === Number.parseInt(params.id))

//   if (!product) {
//     return {
//       title: "Product Not Found | Arista Vault",
//       description: "The requested product could not be found",
//     }
//   }

//   return {
//     title: `${product.name} | Arista Vault`,
//     description: product.description.substring(0, 160),
//   }
// }

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const productId = Number.parseInt(params.id)
//   const product = products.find((p) => p.id === productId)

//   if (!product) {
//     notFound()
//   }

//   // Get related products (same category)
//   const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

//   return (
//     <main className="flex min-h-screen flex-col">
//       <ProductDetails product={product} />
//       <RelatedProducts products={relatedProducts} />
//     </main>
//   )
// }
import { notFound } from "next/navigation"
import ProductDetails from "@/components/product-details"
import RelatedProducts from "@/components/related-products"

// Define the expected type for Next.js dynamic route parameters
interface Params {
  params: {
    id: string
  }
}

// Define the Product type to match `ProductDetails.tsx`
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
  isNew: boolean
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

// Mock data - would be fetched from an API in a real application
const products: Product[] = Array(24)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: "Smart product with advanced features and technology.",
    price: 99.99 + index * 10,
    image: `/placeholder.svg?height=600&width=600&text=Product+${index + 1}`,
    images: Array(4)
      .fill(0)
      .map((_, i) => `/placeholder.svg?height=600&width=600&text=Image+${i + 1}`), // ✅ Fixed missing 'images' field
    category: ["Bags", "Wallets", "Luggage", "Accessories"][index % 4],
    rating: 4 + Math.random() * 0.9,
    reviewCount: Math.floor(Math.random() * 100) + 10,
    isNew: index % 5 === 0,
    features: ["Anti-theft technology", "GPS tracking", "RFID blocking", "USB charging port"],
    specifications: {
      dimensions: "30 x 20 x 10 cm",
      weight: "1.2 kg",
      material: "Premium polyester",
      warranty: "Limited lifetime warranty",
      color: ["Black", "Blue", "Grey"][index % 3],
    },
    stock: Math.floor(Math.random() * 50) + 1,
  }))

// Function to generate metadata dynamically
export function generateMetadata({ params }: Params) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return {
      title: "Product Not Found | Arista Vault",
      description: "The requested product could not be found",
    }
  }

  return {
    title: `${product.name} | Arista Vault`,
    description: product.description.substring(0, 160),
  }
}

// The main product page component
export default function ProductPage({ params }: Params) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  // Get related products (same category)
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4)

  return (
    <main className="flex min-h-screen flex-col">
      <ProductDetails product={product} />
      <RelatedProducts products={relatedProducts} />
    </main>
  )
}
