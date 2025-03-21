"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Smart Luggage for the Modern Traveler",
    description:
      "Experience the future of travel with GPS tracking, anti-theft technology, and built-in power banks",
    image: "/assets/Jarviz_-_D.webp?height=800&width=1600",
    cta: "Shop Smart Luggage",
    link: "/products/luggage",
  },
  {
    id: 2,
    title: "Secure Wallets with Anti-Theft Technology",
    description:
      "Keep your valuables safe with our innovative smart wallets featuring RFID protection",
    image: "/assets/Airport_-_D.webp?height=800&width=1600",
    cta: "Explore Wallets",
    link: "/products/wallets",
  },
  {
    id: 3,
    title: "Travel Accessories for the Digital Age",
    description:
      "Enhance your journey with our range of smart accessories designed for the modern traveler",
    image: "/assets/Malaysia-Banner.webp?height=800&width=1600",
    cta: "Discover Accessories",
    link: "/products/accessories",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollY } = useScroll()

  // Background transforms
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const scale = useTransform(scrollY, [0, 500], [1, 1.05])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4])

  // Text transforms
  const textY = useTransform(scrollY, [0, 300], [0, -50])
  const textScale = useTransform(scrollY, [0, 300], [1, 0.9])
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.8])

  // ✨ Width transition ✨
  const textWidth = useTransform(scrollY, [0, 300], ["500px", "50%"])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full h-[90vh] relative overflow-hidden">
      {/* Slides Background */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.image})`,
            y: index === currentSlide ? y : 0,
            scale: index === currentSlide ? scale : 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 dark:from-black/80 dark:to-black/50"
            style={{ opacity }}
          />
        </motion.div>
      ))}

      {/* Slide Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div
          className="relative"
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
            width: textWidth, // Animated width ✨
          }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                y: index === currentSlide ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute"
              style={{
                display: index === currentSlide ? "block" : "none",
              }}
            >
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-500">
                <motion.span
                  className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent"
                  style={{
                    opacity: textOpacity,
                    scale: textScale,
                  }}
                >
                  {slide.title}
                </motion.span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {slide.description}
              </p>

              {/* CTA Button */}
              <Link href={slide.link}>
                <Button
                  size="lg"
                  className="group bg-gold hover:bg-gold/90 text-black transition-all duration-300"
                >
                  {slide.cta}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-gold w-8"
              : "bg-white/50 hover:bg-white/80"
              }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
