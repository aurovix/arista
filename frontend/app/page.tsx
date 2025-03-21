import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import CategoryShowcase from "@/components/category-showcase"
import Newsletter from "@/components/newsletter"
import BenefitsBanner from "@/components/benefits-banner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <BenefitsBanner />
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our collection of smart luggage and accessories with cutting-edge technology
          </p>
        </div>
        <FeaturedProducts />
      </section>
      <CategoryShowcase />
      <Newsletter />
    </main>
  )
}