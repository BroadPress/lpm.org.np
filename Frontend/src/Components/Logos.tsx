import { useEffect, useMemo, useRef, useState } from 'react'

import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const partnerLogos = [
  { src: logo1, alt: 'Peace and Human Rights' },
  { src: logo2, alt: 'World AIDS Day' },
  { src: logo3, alt: 'LifeCare Logo' },
  { src: logo4, alt: 'Sarcoma Cancer Awareness Month - Hope' },
]

// Rough width of one logo set (4 logos + gaps) for repeat calculation
const ESTIMATED_SET_WIDTH = 1100

const Logos = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [copiesPerHalf, setCopiesPerHalf] = useState(3)

  useEffect(() => {
    const updateCopies = () => {
      const width = sectionRef.current?.offsetWidth ?? window.innerWidth
      const needed = Math.max(2, Math.ceil(width / ESTIMATED_SET_WIDTH) + 1)
      setCopiesPerHalf(needed)
    }

    updateCopies()
    window.addEventListener('resize', updateCopies)
    return () => window.removeEventListener('resize', updateCopies)
  }, [])

  const marqueeLogos = useMemo(() => {
    const half = Array.from({ length: copiesPerHalf }, () => partnerLogos).flat()
    return [...half, ...half]
  }, [copiesPerHalf])

  return (
    <section
      ref={sectionRef}
      data-fade-in
      className="overflow-hidden bg-[#f5f5f5] py-10"
      aria-label="Partner logos"
    >
      <div className="logo-marquee-track items-center gap-10 px-6 sm:gap-16 sm:px-10">
        {marqueeLogos.map((logo, index) => (
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={index < partnerLogos.length ? logo.alt : ''}
            aria-hidden={index >= partnerLogos.length}
            className="h-12 w-auto max-w-[160px] shrink-0 object-contain sm:h-14 md:h-16 md:max-w-[220px]"
          />
        ))}
      </div>
    </section>
  )
}

export default Logos
