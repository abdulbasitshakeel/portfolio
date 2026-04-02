'use client'

import { useState } from 'react'
import { portfolioData } from '@/app/data/portfolio'
import { AnimatedCard } from '@/app/components/AnimatedCard'

type JourneyFilter = 'experience' | 'education' | 'certifications'

export function Journey() {
  const [filter, setFilter] = useState<JourneyFilter>('experience')
  const { experience, education, certifications } = portfolioData

  const getFilteredData = () => {
    switch (filter) {
      case 'education':
        return education
      case 'certifications':
        return certifications
      case 'experience':
      default:
        return experience
    }
  }

  const filteredData = getFilteredData()

  return (
    <div className="space-y-8 animate-fadeInUp">
      <div>
        <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
          My Journey
        </h2>
        <div className="w-16 h-1 bg-accent-gradient rounded-full mt-4 mb-10" />
      </div>

      {/* Filter Buttons */}
      <div className="text-center">
        <div className="inline-flex bg-accent-light rounded-xl p-1 gap-1">
          {(['experience', 'education', 'certifications'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm capitalize transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-lg'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Journey Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredData.map((item, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className="bg-white p-6 border-l-4 border-accent"
          >
            <h4 className="text-xl font-bold text-text-primary mb-2">
              {'company' in item ? item.company : 'school' in item ? item.school : item.organization}
            </h4>
            <p className="text-sm font-semibold text-accent mb-3">
              {item.period}
            </p>
            {'position' in item && (
              <p className="text-sm font-semibold text-text-primary mb-2">
                {item.position}
              </p>
            )}
            {'degree' in item && (
              <p className="text-sm font-semibold text-text-primary mb-2">
                {item.degree}
              </p>
            )}
            {'title' in item && (
              <p className="text-sm font-semibold text-text-primary mb-2">
                {item.title}
              </p>
            )}
            <p className="text-text-secondary">
              {item.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
