'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-accent to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-none"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  )
}
