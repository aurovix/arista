"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
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
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.section
      ref={sectionRef}
      className="w-full bg-gold/5 dark:bg-gold/10 py-8 md:py-12"
      style={{ opacity, scale }}
    >
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
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <benefit.icon className="h-6 w-6 text-gold" />
              </motion.div>
              <h3 className="font-semibold text-base md:text-lg mb-1 text-gold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

