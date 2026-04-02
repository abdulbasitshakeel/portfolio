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
    <div ref={containerRef} className="space-y-12">
      <div>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
          Professional Skills
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-purple-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-3 p-4 rounded-lg border border-accent/10 bg-white/50 hover:bg-white/80 transition-all duration-300">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">
                {skill.name}
              </span>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                {skill.proficiency}%
              </span>
            </div>
            <div className="w-full bg-accent/10 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-accent to-purple-400 h-full rounded-full transition-all duration-1000 ease-out"
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
