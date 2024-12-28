'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const logos = [
  { src: "/placeholder.svg", alt: "Company 1" },
  { src: "/placeholder.svg", alt: "Company 2" },
  { src: "/placeholder.svg", alt: "Company 3" },
  { src: "/placeholder.svg", alt: "Company 4" },
  { src: "/placeholder.svg", alt: "Company 5" },
  { src: "/placeholder.svg", alt: "Company 6" },
]

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <h3 className="text-2xl font-semibold mb-6 text-center">Our Partners</h3>
      <div className="flex items-center justify-center">
        <Button variant="outline" size="icon" className="mr-4" onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center justify-center space-x-8">
          {[...Array(3)].map((_, i) => {
            const logoIndex = (currentIndex + i) % logos.length
            return (
              <div key={i} className="w-32 h-32 flex items-center justify-center">
                <img
                  src={logos[logoIndex].src}
                  alt={logos[logoIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )
          })}
        </div>
        <Button variant="outline" size="icon" className="ml-4" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

