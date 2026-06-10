import { Link } from 'react-router-dom'
import santoshImage from '../assets/45.jpg'
import ishwarImage from '../assets/44.jpg'

const volunteers = [
  {
    name: 'Santosh Prasain',
    role: 'Social Activist',
    bio: 'is a dedicated youth volunteer passionate about leadership, community service, and positive social transformation through awareness and educational programs.',
    image: santoshImage,
    alt: 'Santosh Prasain speaking at a Life Positive Mission event',
  },
  {
    name: 'Ishwar Bhandari',
    role: 'Event Manager',
    bio: 'is an active volunteer focused on empowering youth, promoting positive thinking, and supporting community development through impactful events and outreach programs.',
    image: ishwarImage,
    alt: 'Ishwar Bhandari speaking at a Life Positive Mission event',
  },
] as const

const VolunteeroftheYear = () => {
  return (
    <section className="bg-[#f8f9fa] px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
            Power of Positive Energy
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#2c3e50] md:text-4xl">
            Volunteer of the Year
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          {volunteers.map(({ name, role, bio, image, alt }) => (
            <article key={name} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-80 w-full max-w-[280px] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-md">
                <img
                  src={image}
                  alt={alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mb-1 font-serif text-xl font-bold text-[#2c3e50] md:text-2xl">
                {name}
              </h3>
              <p className="mb-4 text-sm font-medium text-[#7f8c8d]">{role}</p>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-[#7f8c8d]">
                {bio}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/team"
            className="inline-block rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            View All Member
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VolunteeroftheYear
