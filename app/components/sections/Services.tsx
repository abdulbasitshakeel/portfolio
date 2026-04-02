'use client'

import { portfolioData } from '@/app/data/portfolio'
import { AnimatedCard } from '@/app/components/AnimatedCard'
import {
  Globe,
  Smartphone,
  LayoutTemplate,
  Layers,
  ShoppingCart,
  Gauge,
  Wrench,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  'globe': <Globe className="w-8 h-8" />,
  'tablet-smartphone': <Smartphone className="w-8 h-8" />,
  'layout-template': <LayoutTemplate className="w-8 h-8" />,
  'toy-brick': <Layers className="w-8 h-8" />,
  'shopping-cart': <ShoppingCart className="w-8 h-8" />,
  'gauge-circle': <Gauge className="w-8 h-8" />,
  'wrench': <Wrench className="w-8 h-8" />,
}

export function Services() {
  const { services } = portfolioData

  return (
    <div className="space-y-8 animate-fadeInUp">
      <div>
        <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
          My Services
        </h2>
        <div className="w-16 h-1 bg-accent-gradient rounded-full mt-4 mb-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className="flex items-start space-x-4 bg-white p-6 border-l-4 border-accent"
          >
            <div className="text-accent flex-shrink-0">
              {iconMap[service.icon] || null}
            </div>
            <div>
              <h4 className="text-xl font-bold text-text-primary mb-2">
                {service.title}
              </h4>
              <p className="text-text-secondary">
                {service.description}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
