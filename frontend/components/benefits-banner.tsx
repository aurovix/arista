"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Clock, CreditCard } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On all prepaid orders",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Limited warranty on all products",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Customer service excellence",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "100% secure payment methods",
  },
]

export default function BenefitsBanner() {
  return (
    <section className="w-full bg-gold/5 dark:bg-gold/10 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold text-base md:text-lg mb-1 text-gold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

