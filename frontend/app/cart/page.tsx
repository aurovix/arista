import CartItems from "@/components/cart-items"
import CartSummary from "@/components/cart-summary"

export const metadata = {
  title: "Shopping Cart | Arista Vault",
  description: "View and manage your shopping cart",
}

export default function CartPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </main>
  )
}

