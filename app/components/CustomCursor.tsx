'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 border-2 border-accent rounded-full opacity-0 transition-opacity duration-300 z-50 translate-x-[-50%] translate-y-[-50%]"
        style={{
          mixBlendMode: 'screen',
        }}
      />

      {/* Inner cursor dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed w-2 h-2 bg-accent rounded-full opacity-0 transition-opacity duration-300 z-50 translate-x-[-50%] translate-y-[-50%]"
      />
    </>
  )
}
