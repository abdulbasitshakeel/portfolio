'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
  delay?: number
}

export function AnimatedCard({
  children,
  className = '',
  index = 0,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay || index * 0.1,
        ease: [0.25, 1, 0.5, 1],
      }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(51, 51, 102, 0.15)' }}
      className={`rounded-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
