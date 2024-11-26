import { Shield, Calendar, CreditCard, Car } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Flexible Subscriptions',
    description: 'Choose your subscription length, from 1 to 24 months'
  },
  {
    icon: Shield,
    title: 'Comprehensive Insurance',
    description: 'Full coverage insurance included with every subscription'
  },
  {
    icon: CreditCard,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise charges'
  },
  {
    icon: Car,
    title: 'Premium Selection',
    description: 'Wide range of carefully curated vehicles'
  }
]

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Car Subscription?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Experience the future of car ownership with our flexible subscription service
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}