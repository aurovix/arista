import { Suspense } from "react"
import ProductList from "@/components/product-list"
import ProductListSkeleton from "@/components/product-list-skeleton"
import ProductFilters from "@/components/product-filters"

export const metadata = {
  title: "Products | Arista Vault",
  description: "Browse our collection of smart luggage, wallets, and accessories",
}

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our innovative range of smart luggage, wallets, and accessories designed for the modern traveler
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 shrink-0">
            <ProductFilters />
          </div>
          <div className="flex-1">
            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}

