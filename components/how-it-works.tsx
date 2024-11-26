import { Search, CalendarCheck, Car, Key } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Browse & Choose',
    description: 'Explore our extensive collection of premium vehicles'
  },
  {
    icon: CalendarCheck,
    title: 'Select Duration',
    description: 'Pick your ideal subscription length'
  },
  {
    icon: Car,
    title: 'Schedule Delivery',
    description: 'Choose when and where to receive your car'
  },
  {
    icon: Key,
    title: 'Start Driving',
    description: 'Enjoy your new vehicle with complete peace of mind'
  }
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get started with your car subscription in four simple steps
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-gray-200 lg:block" />
                )}
                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}