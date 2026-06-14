import { Link } from 'react-router-dom'

import heroBg from '../assets/hero-home.jpg'

const Hero = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden px-4 pt-24 pb-16 sm:min-h-[80vh] sm:px-8 sm:pt-28 sm:pb-20 md:px-12 md:pt-32 lg:min-h-[85vh] lg:px-16 lg:pt-36 lg:pb-28">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#151515]/55" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl text-left lg:max-w-4xl">
          <h1 className="mb-4 font-serif text-3xl leading-[1.1] font-black text-[#F63A35] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Life Positive Mission
          </h1>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white sm:mb-10 sm:text-base md:text-lg">
            Life Positive Mission (LPM) is a volunteer-driven, public charitable,
            international non-profit organization dedicated to cultivating human
            potential.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/donate"
              className="cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
            >
              Donate Fund
            </Link>
            <Link
              to="/single-page"
              className="cursor-pointer rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
