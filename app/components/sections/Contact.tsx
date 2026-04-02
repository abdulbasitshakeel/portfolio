'use client'

import { portfolioData } from '@/app/data/portfolio'
import { AnimatedCard } from '@/app/components/AnimatedCard'
import { Mail, Phone, MapPin } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  'mail': <Mail className="w-12 h-12" />,
  'phone': <Phone className="w-12 h-12" />,
  'map-pin': <MapPin className="w-12 h-12" />,
}

export function Contact() {
  const { contact } = portfolioData

  return (
    <div className="space-y-8 animate-fadeInUp">
      <div>
        <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-accent-gradient rounded-full mt-4 mb-10" />
      </div>

      <p className="text-lg text-center text-text-secondary mb-12 max-w-2xl mx-auto">
        I&apos;m always open to discussing new projects and opportunities. Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contact.map((item, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className="bg-white p-8 text-center border-t-4 border-accent"
          >
            <a href={item.href} className="group flex flex-col h-full">
              <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {iconMap[item.icon]}
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-text-secondary group-hover:text-accent transition-colors">
                {item.value}
              </p>
            </a>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
