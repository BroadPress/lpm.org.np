import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollRevealProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    let observer: IntersectionObserver | undefined

    const setup = () => {
      observer?.disconnect()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )

      document
        .querySelectorAll('[data-fade-in]:not(.is-visible)')
        .forEach((element) => observer?.observe(element))
    }

    const frameId = requestAnimationFrame(setup)

    return () => {
      cancelAnimationFrame(frameId)
      observer?.disconnect()
    }
  }, [location.pathname])

  return children
}
