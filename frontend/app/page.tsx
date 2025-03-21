import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import CategoryShowcase from "@/components/category-showcase"
import Newsletter from "@/components/newsletter"
import BenefitsBanner from "@/components/benefits-banner"
import SmartLuggageFeatures from "@/components/smart-luggage-features"
import AnimatedCompanyLogos from "@/components/animated-company-logos"
import ProductCategoryShowcase from "@/components/product-category-showcase"
import ComboPackagesShowcase from "@/components/combo-packages-showcase"
import ParallaxSection from "@/components/parallax-section"

// Mock data for smart wallets
const smartWallets = [
  {
    id: 1,
    name: "Wallet-bot Classic | Smart wallet | Inbuilt Powerbank (Brown)",
    description: "Smart wallet with built-in power bank",
    price: 5280,
    originalPrice: 6600,
    image: "/placeholder.svg?height=400&width=400&text=Wallet+Brown",
    rating: 4.79,
    reviewCount: 42,
    inStock: true,
  },
  {
    id: 2,
    name: "Traveller Wallet | Tracker Wallet | Anti Theft (Blue)",
    description: "Anti-theft wallet with tracking features",
    price: 4480,
    originalPrice: 5600,
    image: "/placeholder.svg?height=400&width=400&text=Wallet+Blue",
    rating: 4.92,
    reviewCount: 38,
    inStock: true,
  },
  {
    id: 3,
    name: "Wallet-bot Finder | Tracker wallet | Anti-Theft (Brown)",
    description: "Smart wallet with finder technology",
    price: 4480,
    originalPrice: 5600,
    image: "/placeholder.svg?height=400&width=400&text=Wallet+Brown+2",
    rating: 4.77,
    reviewCount: 29,
    inStock: true,
  },
  {
    id: 4,
    name: "Wallet-bot Classic | Smart wallet | Inbuilt Powerbank (Black)",
    description: "Premium smart wallet with power bank",
    price: 5280,
    originalPrice: 6600,
    image: "/placeholder.svg?height=400&width=400&text=Wallet+Black",
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
  },
]

// Mock data for smart backpacks
const smartBackpacks = [
  {
    id: 5,
    name: "Smart Fingerlock Backpack Leather in (Black)",
    description: "Secure backpack with fingerprint lock",
    price: 9840,
    image: "/placeholder.svg?height=400&width=400&text=Backpack+1",
    rating: 4.82,
    reviewCount: 64,
    inStock: true,
  },
  {
    id: 6,
    name: "Techbag Fingerlock Laptop Leather Bags (Black)",
    description: "Tech-friendly laptop bag with security",
    price: 8260,
    image: "/placeholder.svg?height=400&width=400&text=Techbag",
    rating: 4.91,
    reviewCount: 47,
    inStock: false,
  },
  {
    id: 7,
    name: "Croc-Textured Fingerlock Smart Leather Laptop Bag",
    description: "Stylish laptop bag with fingerprint security",
    price: 6860,
    image: "/placeholder.svg?height=400&width=400&text=Laptop+Bag",
    rating: 4.89,
    reviewCount: 38,
    inStock: true,
  },
  {
    id: 8,
    name: "Smart-Pac Fingerlock Backpack Black - Orange",
    description: "Modern backpack with accent colors",
    price: 9840,
    image: "/placeholder.svg?height=400&width=400&text=Backpack+2",
    rating: 5.0,
    reviewCount: 29,
    inStock: false,
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <BenefitsBanner />

      <SmartLuggageFeatures />

      <AnimatedCompanyLogos />

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

      <ParallaxSection
        title="Travel Smarter, Not Harder"
        description="Our smart luggage combines cutting-edge technology with elegant design to make your travels seamless and stress-free."
        image="/placeholder.svg?height=800&width=1600&text=Smart+Travel"
        buttonText="Explore Smart Luggage"
        buttonLink="/categories/luggage"
      />

      <ProductCategoryShowcase
        title="SMART WALLETS"
        description="Keep your essentials secure with our innovative smart wallets featuring RFID protection and tracking"
        products={smartWallets}
        viewAllLink="/categories/wallets"
      />

      <CategoryShowcase />

      <ParallaxSection
        title="Security Meets Style"
        description="Our fingerprint-secured backpacks and bags combine premium materials with advanced technology for the modern professional."
        image="/placeholder.svg?height=800&width=1600&text=Smart+Backpacks"
        buttonText="Discover Smart Backpacks"
        buttonLink="/categories/backpacks"
        reversed={true}
      />

      <ProductCategoryShowcase
        title="SMART BACKPACKS"
        description="Protect your belongings with our fingerprint-secured backpacks and laptop bags"
        products={smartBackpacks}
        viewAllLink="/categories/backpacks"
      />

      <ComboPackagesShowcase />

      <Newsletter />
    </main>
  )
}

