"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const cars = [
  {
    id: 1,
    name: 'Tesla Model 3',
    description: 'Experience the future of driving',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2940&auto=format&fit=crop',
    price: '899',
    category: 'Electric'
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    description: 'Luxury meets performance',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2940&auto=format&fit=crop',
    price: '799',
    category: 'Luxury'
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    description: 'Elegance in motion',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop',
    price: '849',
    category: 'Premium'
  },
  {
    id: 4,
    name: 'Audi A4',
    description: 'Advanced technology, superior comfort',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2940&auto=format&fit=crop',
    price: '869',
    category: 'Luxury'
  }
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cars.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-[#1B3641] pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Promo Banner */}
        <div className="flex justify-center py-4">
          <div className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-1 text-sm font-medium animate-bounce">
            AED 200 OFF
            <span className="ml-2 text-gray-700">Sign up offer on 1st booking</span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            Get a car on your terms
          </h1>
          <div className="flex items-center justify-center gap-2 text-white mb-12">
            <span>Join our 20,000+ happy subscribers</span>
            <span className="flex items-center gap-1">
              <span className="text-yellow-400 animate-pulse">★★★★</span>★ 4.0
            </span>
          </div>
        </div>

        {/* Car Slider */}
        <div className="relative mb-16">
          <div
            ref={sliderRef}
            className={cn(
              "flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {cars.map((car, index) => (
              <div
                key={car.id}
                className={cn(
                  "relative flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105",
                  index === activeIndex ? "ring-2 ring-primary ring-offset-4 ring-offset-[#1B3641]" : ""
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-sm mb-3">
                    {car.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="mb-4 text-gray-200">{car.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      AED {car.price}<span className="text-sm font-normal">/month</span>
                    </span>
                    <Link href={`/cars/${car.id}`}>
                      <Button variant="secondary" className="hover:bg-white hover:text-primary">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cars.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-400"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}