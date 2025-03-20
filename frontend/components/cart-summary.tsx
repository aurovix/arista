"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { ArrowRight, CreditCard } from "lucide-react"

export default function CartSummary() {
  const { items } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? (subtotal > 1000 ? 0 : 100) : 0
  const tax = subtotal * 0.18 // 18% GST
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false)
      // Redirect to checkout page
      window.location.href = "/checkout"
    }, 1500)
  }

  return (
    <div className="bg-background border rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString()}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (18% GST)</span>
          <span>₹{tax.toLocaleString()}</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Button
        className="w-full mb-4 group"
        size="lg"
        disabled={items.length === 0 || isCheckingOut}
        onClick={handleCheckout}
      >
        {isCheckingOut ? (
          "Processing..."
        ) : (
          <>
            Checkout
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center mb-2">
          <CreditCard className="h-4 w-4 mr-1" />
          <span>Secure Payment</span>
        </div>
        <p>We accept all major credit cards and UPI payments</p>
      </div>
    </div>
  )
}

