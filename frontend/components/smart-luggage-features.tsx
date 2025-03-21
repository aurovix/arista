"use client"

import { motion } from "framer-motion"
import { Search, Phone, Luggage, Plane, User, Battery } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "NEVER LOSE YOUR LUGGAGE",
    description: "Never lose your luggage with smart tracking, keeping it safe and easy to find",
  },
  {
    icon: Phone,
    title: "CALL YOUR LUGGAGE",
    description: "Easily locate it with a simple ring, making retrieval quick & hassle-free!",
  },
  {
    icon: Luggage,
    title: "RIDE-ON YOUR LUGGAGE",
    description: "Turn your luggage into a ride for a smooth, fun way to move through the airport with ease!",
  },
  {
    icon: Plane,
    title: "AIRPORT PROMPT",
    description:
      "Get notified when your luggage arrives with the airport prompt feature, ensuring a smooth & timely pickup!",
  },
  {
    icon: User,
    title: "AUTO FOLLOW LUGGAGE",
    description: "Let your luggage follow you automatically, hands-free, for effortless travel",
  },
  {
    icon: Battery,
    title: "POWER CHARGING",
    description: "Featuring seamless device charging through its built-in power port",
  },
]

export default function SmartLuggageFeatures() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            WHY SMART LUGGAGE?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel with our innovative smart luggage features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

