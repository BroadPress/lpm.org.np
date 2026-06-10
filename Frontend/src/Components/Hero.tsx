const Hero = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-linear-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] px-8 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 font-serif text-4xl font-bold text-[#ef5b3e] md:text-5xl lg:text-6xl">
          Life Positive Mission
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
          Life Positive Mission (LPM) is a volunteer-driven, public charitable,
          international non-profit organization dedicated to cultivating human
          potential.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-full bg-[#ef5b3e] px-8 py-3 text-sm font-semibold text-white hover:bg-[#e04a2d]"
          >
            Donate Fund
          </button>
          <button
            type="button"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero