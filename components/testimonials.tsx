"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Professional',
    content: 'The subscription service has completely changed how I think about car ownership. The flexibility and convenience are unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    content: 'I love being able to switch cars based on my needs. The service is seamless, and the support team is exceptional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Emma Thompson',
    role: 'Digital Nomad',
    content: 'No more worrying about maintenance or long-term commitments. This is truly the future of car usage.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover why thousands choose our car subscription service
          </p>
        </div>
        <div className="relative mt-16">
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 z-10"
              onClick={prev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="overflow-hidden px-4">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="mx-4 flex w-full flex-col items-center p-6 md:w-[600px]"
                  >
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="mt-4 text-center text-lg text-gray-600">
                      "{testimonial.content}"
                    </p>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mt-6 h-16 w-16 rounded-full object-cover"
                    />
                    <h3 className="mt-4 font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </Card>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 z-10"
              onClick={next}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}