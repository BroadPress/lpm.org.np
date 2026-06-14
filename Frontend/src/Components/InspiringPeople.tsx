import { useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import profileImage1 from '../assets/45.jpg'
import profileImage2 from '../assets/44.jpg'
import profileImage3 from '../assets/28.jpg'
import inspiringBg from '../assets/inspiring-people-bg.jpg'

const reviews = [
  {
    name: 'William Wright',
    image: profileImage1,
    imagePosition: 'object-[center_20%]',
    quote:
      "With the core message 'Transform Yourself, Transform the World,'\nLife Positive Mission integrates spirituality, life coaching, business coaching, leadership development, and social empowerment\nto create meaningful transformation in individuals and communities.",
  },
  {
    name: 'Ishwar Bhandari',
    image: profileImage2,
    imagePosition: 'object-[center_25%]',
    quote:
      'Life Positive Mission helped me discover my leadership potential and gave me the confidence to serve my community with purpose, discipline, and positive energy every single day.',
  },
  {
    name: 'Santosh Prasain',
    image: profileImage3,
    imagePosition: 'object-[center_30%]',
    quote:
      'Through LPM programs, I learned that real change begins within. The training inspired me to lead social initiatives and empower others to live with clarity, compassion, and conscious action.',
  },
] as const

const InspiringPeople = () => {
  const [activeReview, setActiveReview] = useState(0)
  const review = reviews[activeReview]

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-8 sm:py-16 md:py-20">
      <img
        src={inspiringBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1 mx-auto w-full max-w-lg lg:max-w-none">
          <div className="flex min-h-[280px] flex-col rounded-3xl bg-[#d65444] px-8 pt-12 pb-10 text-center sm:min-h-[300px] sm:px-10">
            <FaQuoteLeft className="mx-auto mb-6 shrink-0 text-5xl text-white sm:mb-8 sm:text-6xl" />
            <div className="flex flex-1 items-center justify-center">
              <p className="whitespace-pre-line text-sm leading-relaxed text-white sm:text-base">
                {review.quote}
              </p>
            </div>
          </div>

          <div className="-mt-8 text-center">
            <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-4 border-black/80 bg-white sm:h-24 sm:w-24">
              <img
                src={review.image}
                alt={review.name}
                className={`h-full w-full object-cover ${review.imagePosition}`}
              />
            </div>
            <h3 className="mb-4 font-serif text-lg font-bold text-white">
              {review.name}
            </h3>
            <div className="flex items-center justify-center gap-2">
              {reviews.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show review by ${item.name}`}
                  onClick={() => setActiveReview(index)}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                    activeReview === index ? 'bg-[#d65444]' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-2 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
            Positive Thinking
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            Inspiring People
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-white/85 md:text-base">
            Guided by the belief that every individual possesses infinite inner
            potential, LPM works to inspire people to transform their lives
            through positive thinking, discipline, self-management, spirituality,
            and purposeful action.
          </p>
          <button
            type="button"
            className="cursor-pointer rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}

export default InspiringPeople
