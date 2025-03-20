"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = [
  { id: "bags", label: "Bags" },
  { id: "wallets", label: "Wallets" },
  { id: "luggage", label: "Luggage" },
  { id: "accessories", label: "Accessories" },
]

const features = [
  { id: "gps", label: "GPS Tracking" },
  { id: "anti-theft", label: "Anti-Theft" },
  { id: "rfid", label: "RFID Blocking" },
  { id: "usb", label: "USB Charging" },
  { id: "fingerprint", label: "Fingerprint Lock" },
]

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const handleCategoryChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, id])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== id))
    }
  }

  const handleFeatureChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, id])
    } else {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id))
    }
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const resetFilters = () => {
    setPriceRange([0, 500])
    setSelectedCategories([])
    setSelectedFeatures([])
  }

  return (
    <div className="sticky top-24 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Button variant="outline" size="sm" onClick={resetFilters}>
          Reset All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "features"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 500]}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">₹{priceRange[0]}</span>
                <span className="text-sm">₹{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${feature.id}`}
                    checked={selectedFeatures.includes(feature.id)}
                    onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                  />
                  <Label htmlFor={`feature-${feature.id}`} className="text-sm font-normal cursor-pointer">
                    {feature.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

