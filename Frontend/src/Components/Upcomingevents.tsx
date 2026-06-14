import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'

import eventBg from '../assets/event-1.jpg'

const featuredEvent = {
  day: '15th',
  month: 'AUG',
  title: 'Self Management Leadership',
  time: '8:00 am - 12:30 pm',
  location: 'Ananda Pashupati Dharmashala',
  description:
    'Join us for an inspiring session on self-leadership, discipline, and conscious living. Learn practical tools to manage your life with clarity, purpose, and positive energy.',
}

const sideEvents = [
  {
    day: '20th',
    month: 'AUG',
    title: 'Youth Empowerment Workshop',
    time: '10:00 am - 2:00 pm',
    location: 'Life Positive Mission Hall',
    description:
      'A dynamic workshop designed to empower young minds with leadership skills, positive thinking, and spiritual awareness for a brighter future.',
    accent: '#f05a42',
  },
  {
    day: '22nd',
    month: 'SEP',
    title: 'Spiritual Awakening Seminar',
    time: '9:00 am - 1:00 pm',
    location: 'Ananda Pashupati Dharmashala',
    description:
      'Explore the path to spiritual awakening through meditation, mindfulness, and the philosophy of conscious construction of life.',
    accent: '#4a90d9',
  },
  {
    day: '5th',
    month: 'OCT',
    title: 'Leadership Training Camp',
    time: '7:00 am - 5:00 pm',
    location: 'Birganj Community Center',
    description:
      'An intensive one-day camp focused on building leadership qualities, team collaboration, and personal transformation for community impact.',
    accent: '#2ecc71',
  },
] as const

const Upcomingevents = () => {
  return (
    <section className="bg-gray-100 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-center text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
          Involve Now
        </p>
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold text-[#2c3e50] sm:mb-12 sm:text-3xl md:text-4xl">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:min-h-[480px] sm:p-8 md:min-h-[520px]">
            <img
              src={eventBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/20" />

            <div className="absolute top-6 right-6 rounded-lg bg-[#f05a42] px-3 py-2 text-center text-white">
              <span className="block text-lg leading-none font-bold">
                {featuredEvent.day}
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase">
                {featuredEvent.month}
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                {featuredEvent.title}
              </h3>
              <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#f05a42]" />
                  {featuredEvent.time}
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#f05a42]" />
                  {featuredEvent.location}
                </span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/85">
                {featuredEvent.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-lg bg-[#f05a42] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Donate Now
                </button>
                <button
                  type="button"
                  className="rounded-lg border-2 border-white px-5 py-2.5 text-sm font-semibold text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {sideEvents.map(
              ({ day, month, title, time, location, description, accent }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-md sm:flex-row sm:gap-5 sm:p-6"
                >
                  <div className="min-w-0 flex-1 order-2 sm:order-1">
                    <h3 className="mb-3 font-serif text-lg font-bold text-[#2c3e50]">
                      {title}
                    </h3>
                    <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <FaClock style={{ color: accent }} />
                        {time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-[#4a90d9]" />
                        {location}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {description}
                    </p>
                  </div>

                  <div
                    className="order-1 flex shrink-0 flex-row items-center justify-center gap-3 self-start rounded-xl border-2 px-4 py-2 text-center sm:order-2 sm:flex-col sm:gap-0 sm:px-3 sm:py-2"
                    style={{ borderColor: accent, color: accent }}
                  >
                    <span className="text-base leading-none font-bold">
                      {day}
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {month}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            Discover All Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default Upcomingevents