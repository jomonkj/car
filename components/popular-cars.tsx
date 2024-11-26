import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Fuel, Users } from 'lucide-react'
import Link from 'next/link'

const popularCars = [
  {
    id: 1,
    name: 'Tesla Model 3',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2940&auto=format&fit=crop',
    price: 899,
    specs: {
      type: 'Electric',
      seats: '5',
      minDuration: '1 month'
    }
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2940&auto=format&fit=crop',
    price: 799,
    specs: {
      type: 'Petrol',
      seats: '5',
      minDuration: '3 months'
    }
  },
  {
    id: 3,
    name: 'Mercedes-Benz C-Class',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop',
    price: 849,
    specs: {
      type: 'Hybrid',
      seats: '5',
      minDuration: '1 month'
    }
  }
]

export default function PopularCars() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Cars
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover our most sought-after vehicles
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularCars.map((car) => (
            <Card key={car.id} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                <p className="mt-2 text-2xl font-bold text-primary">
                  ${car.price}<span className="text-sm text-gray-600">/month</span>
                </p>
                <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-600">{car.specs.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-600">{car.specs.seats} seats</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-600">{car.specs.minDuration}</span>
                  </div>
                </div>
                <Link href={`/cars/${car.id}`} className="mt-6 block">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/cars">
            <Button variant="outline" size="lg">
              View All Cars
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}