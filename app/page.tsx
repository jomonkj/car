import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import HowItWorks from '@/components/how-it-works'
import PopularCars from '@/components/popular-cars'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <PopularCars />
      <HowItWorks />
      <Testimonials />
    </main>
  )
}