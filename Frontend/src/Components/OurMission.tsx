import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import missionImage from '../assets/28.jpg'

const stats = [
  { value: '15K+', label: 'Volunteers' },
  { value: '380+', label: 'Sponsors' },
  { value: '125+', label: 'Branches' },
  { value: '77+', label: 'Awards' },
] as const

const missionPoints = [
  'Inspire positive thinking and conscious living',
  'Develop life skills, discipline, and moral values',
  'Empower youth through education and leadership training',
  'Support entrepreneurs and employment generation',
  'Promote cultural harmony and social service',
  'Strengthen Nepal-India friendship and cooperation',
] as const

const OurMission = () => {
  return (
    <section className="bg-white px-8 py-16 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={missionImage}
              alt="Life Positive Mission speaker at a community event"
              className="aspect-4/3 w-full object-cover"
            />
          </div>

          <div className="absolute right-4 -bottom-8 left-4 rounded-2xl bg-[#1e2a4a] px-4 py-5 shadow-lg sm:right-8 sm:left-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#4a6283]">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center sm:px-3"
                >
                  <p className="font-serif text-2xl font-bold text-white md:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-white/90 sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <p className="mb-2 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
            Our Mission
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#1e2a4a] md:text-4xl">
            Transform Yourself, Transform the World
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[#7f8c8d] md:text-base">
            We work to connect spirituality with practical life development for
            real-world success.
          </p>

          <ul className="mb-8 space-y-3">
            {missionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#2c3e50]">
                <FaCheck className="mt-0.5 shrink-0 text-[#f05a42]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="inline-block cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            Continue Reading
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurMission
