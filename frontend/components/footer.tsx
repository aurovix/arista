import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-muted/20 border-t border-gold/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-xl bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                ARISTA VAULT
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              India's first smart luggage brand offering innovative products with cutting-edge technology for the modern
              traveler.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook" className="text-gold hover:bg-gold/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" className="text-gold hover:bg-gold/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram" className="text-gold hover:bg-gold/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-gold hover:bg-gold/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Smart Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold shrink-0" />
                <span className="text-muted-foreground">info@aristavault.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-gold transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Smart Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold shrink-0" />
                <span className="text-muted-foreground">info@aristavault.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gold">Subscribe to Our Newsletter</h3>
              <div className="flex max-w-md">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none border-gold/30" />
                <Button className="rounded-l-none bg-gold hover:bg-gold/90 text-black">Subscribe</Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground md:text-right">
              <p>© {new Date().getFullYear()} Arista Vault. All rights reserved.</p>
              <div className="flex space-x-4 mt-2 md:justify-end">
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

