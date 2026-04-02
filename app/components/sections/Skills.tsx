'use client'

import { portfolioData } from '@/app/data/portfolio'
import { useEffect, useRef, useState } from 'react'

export function Skills() {
  const { skills } = portfolioData
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedSkills(skills.map((_, i) => i))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [skills])

  return (
    <div ref={containerRef} className="space-y-8 animate-fadeInUp">
      <div>
        <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
          Professional Skills
        </h2>
        <div className="w-16 h-1 bg-accent-gradient rounded-full mt-4 mb-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2 p-4 rounded-lg hover:bg-accent-light/20 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-text-primary">
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-accent">
                {skill.proficiency}%
              </span>
            </div>
            <div className="w-full bg-accent-light rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-accent to-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-lg shadow-accent/30"
                style={{
                  width: animatedSkills.includes(index)
                    ? `${skill.proficiency}%`
                    : '0%',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
