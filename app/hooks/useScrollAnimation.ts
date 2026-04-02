import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  useEffect(() => {
    // Refresh ScrollTrigger when component mounts
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const animateOnScroll = (
    element: HTMLElement | null,
    options: {
      duration?: number
      from?: gsap.TweenVars
      to?: gsap.TweenVars
      trigger?: HTMLElement | string
    } = {}
  ) => {
    if (!element) return

    const {
      duration = 0.6,
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 },
      trigger = element,
    } = options

    gsap.fromTo(element, from, {
      ...to,
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false,
      },
      duration,
    })
  }

  return { animateOnScroll }
}
