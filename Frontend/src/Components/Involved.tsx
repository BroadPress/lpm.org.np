import { FaPlay } from 'react-icons/fa'

import fundraisingBg from '../assets/fundraising.jpg'

const Involved = () => {
  return (
    <section data-fade-in className="relative overflow-hidden px-4 py-12 text-white sm:px-8 sm:py-16 md:py-24">
      <img
        src={fundraisingBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-widest text-[#ef5b3e] uppercase">
            Call to Action
          </p>
          <h2 className="mb-6 font-serif text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Fundraising for the people and causes you care about
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
            LPM promotes the philosophy that life is not based on luck or
            coincidence, but on conscious construction through positive thinking,
            discipline, and spiritual awakening.
          </p>
          <button
            type="button"
            className="flex items-center gap-4 text-sm font-semibold tracking-wide uppercase"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
              <FaPlay className="ml-0.5 text-[#ef5b3e]" />
            </span>
            Play Short Video
          </button>
        </div>

        <div className="rounded-3xl bg-[rgba(30,40,60,0.75)] p-6 sm:p-8 md:p-10">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Name*"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="Enter Email*"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-500"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="Enter Phone No*"
                className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-500"
              />
              <input
                type="text"
                placeholder="Enter Code*"
                className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-500"
              />
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-lg bg-[#ef5b3e] py-3.5 text-sm font-semibold text-white hover:bg-[#e04a2d]"
            >
              Get Involve Today
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Involved