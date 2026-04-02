'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export interface Tab {
  id: string
  label: string
  icon?: string
}

export const tabs: Tab[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

interface NavigationProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <motion.div 
      className="glass-card sticky top-6 z-40 p-4 rounded-2xl mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-accent-light rounded-xl p-1 flex flex-wrap gap-1 justify-center md:justify-start">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-white'
                : 'text-text-secondary hover:text-accent'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 rounded-lg"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
