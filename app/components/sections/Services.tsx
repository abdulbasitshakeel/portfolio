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
    <div className="space-y-12">
      <div>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
          My Services
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-purple-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className="flex flex-col p-6 rounded-lg border border-accent/10 bg-white/50 hover:bg-white/80"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-purple-200/20 flex items-center justify-center mb-4 text-accent">
              {iconMap[service.icon] || null}
            </div>
            <h4 className="text-lg font-semibold text-text-primary mb-3">
              {service.title}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed flex-grow">
              {service.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
