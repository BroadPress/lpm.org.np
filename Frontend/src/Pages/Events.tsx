import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'

import PageBanner from '../Components/PageBanner'
import { useJoinForm } from '../Components/JoinFormModal'
import bannerEvents from '../assets/banner-events.jpg'
import event1 from '../assets/event-1.jpg'
import event2 from '../assets/event-2.jpg'
import ctaImage from '../assets/activities1.jpg'

type EventItem = {
  day: string
  month: string
  title: string
  time: string
  location: string
  description: string
  accent?: string
}

type FeaturedEvent = EventItem & {
  image: string
}

const featuredEvents: [FeaturedEvent, FeaturedEvent] = [
  {
    day: '15th',
    month: 'AUG',
    title: 'Self Management Leadership',
    time: '8:00 am - 12:30 pm',
    location: 'Ananda Pashupati Dharmashala',
    description:
      'It is widely used in youth development, entrepreneurship, and organizational growth because it creates responsible individuals who can lead by example.',
    image: event1,
  },
  {
    day: '12th',
    month: 'OCT',
    title: 'Volunteer Orientation Day',
    time: '11:00 am - 3:00 pm',
    location: 'Ananda Pashupati, Kathmandu',
    description:
      'Join our mission! Learn about our upcoming projects and how you can contribute to social transformation.',
    image: event2,
  },
]

const firstRowEvents: EventItem[] = [
  {
    day: '20th',
    month: 'AUG',
    title: 'Youth Empowerment Workshop',
    time: '10:00 am - 4:00 pm',
    location: 'LPM Training Hall, Kathmandu',
    description:
      'A workshop focused on developing leadership skills, positive mindset, and career guidance for the youth of Nepal.',
    accent: '#f05a42',
  },
  {
    day: '25th',
    month: 'AUG',
    title: 'Spiritual Awakening Program',
    time: '6:00 am - 9:00 am',
    location: 'Pashupatinath Temple Area',
    description:
      'Discover the power of positive energy and spiritual growth through our guided meditation and mindfulness sessions.',
    accent: '#4a90d9',
  },
  {
    day: '10th',
    month: 'SEP',
    title: 'Entrepreneurship Development Meet',
    time: '1:00 pm - 5:00 pm',
    location: 'Kathmandu University Hall',
    description:
      'Connecting aspiring entrepreneurs with mentors to foster innovation and business growth in local communities.',
    accent: '#2ecc71',
  },
]

const secondRowEvents: EventItem[] = [
  {
    day: '15th',
    month: 'SEP',
    title: 'Leadership Training for Youth',
    time: '8:00 am - 12:30 pm',
    location: 'LPM Training Center, Kathmandu',
    description:
      'A transformational program focused on self-management, positive thinking, and communication skills to develop future leaders.',
    accent: '#f05a42',
  },
  {
    day: '22nd',
    month: 'SEP',
    title: 'Traffic Awareness Campaign',
    time: '10:00 am - 2:00 pm',
    location: 'Major Intersections, Kathmandu',
    description:
      'A public initiative to educate citizens about road safety and traffic discipline in collaboration with local authorities.',
    accent: '#4a90d9',
  },
  {
    day: '5th',
    month: 'OCT',
    title: 'Cultural Harmony Meet',
    time: '4:00 pm - 7:00 pm',
    location: 'Nepal-India Friendship Hall',
    description:
      'Promoting human connection and cultural understanding through spiritual and social exchange programs.',
    accent: '#2ecc71',
  },
]

const FeaturedEventCard = ({
  day,
  month,
  title,
  time,
  location,
  description,
  image,
}: FeaturedEvent) => (
  <article className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-2xl">
    <img
      src={image}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/20" />

    <div className="absolute top-6 right-6 rounded-lg bg-[#f05a42] px-3 py-2 text-center text-white">
      <span className="block text-lg leading-none font-bold">{day}</span>
      <span className="text-xs font-semibold tracking-wide uppercase">
        {month}
      </span>
    </div>

    <div className="relative z-10 p-8">
      <h3 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
        {title}
      </h3>
      <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
        <span className="flex items-center gap-2">
          <FaClock className="text-[#f05a42]" />
          {time}
        </span>
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#f05a42]" />
          {location}
        </span>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-white/85">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-[#f05a42] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e04a2d]"
        >
          Donate Now
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-full border-2 border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          View Details
        </button>
      </div>
    </div>
  </article>
)

const EventListCard = ({
  day,
  month,
  title,
  time,
  location,
  description,
  accent = '#f05a42',
}: EventItem) => (
  <article className="flex gap-5 rounded-2xl bg-white p-6 shadow-md">
    <div className="min-w-0 flex-1">
      <h3 className="mb-3 font-serif text-lg font-bold text-[#2c3e50] md:text-xl">
        {title}
      </h3>
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600 md:text-sm">
        <span className="flex items-center gap-1.5">
          <FaClock style={{ color: accent }} />
          {time}
        </span>
        <span className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-[#4a90d9]" />
          {location}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
    </div>

    <div
      className="flex shrink-0 flex-col items-center justify-center rounded-xl border-2 px-3 py-2 text-center"
      style={{ borderColor: accent, color: accent }}
    >
      <span className="text-base leading-none font-bold">{day}</span>
      <span className="text-xs font-semibold tracking-wide uppercase">
        {month}
      </span>
    </div>
  </article>
)

const Events = () => {
  const { openJoinForm } = useJoinForm()

  return (
    <div>
      <PageBanner title="Event List" image={bannerEvents} />

      <section data-fade-in className="bg-gray-100 px-4 py-12 sm:px-8 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5">
              <FeaturedEventCard {...featuredEvents[0]} />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-7">
              {firstRowEvents.map((event) => (
                <EventListCard key={event.title} {...event} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-7">
              {secondRowEvents.map((event) => (
                <EventListCard key={event.title} {...event} />
              ))}
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <FeaturedEventCard {...featuredEvents[1]} />
            </div>
          </div>
        </div>
      </section>

      <section data-fade-in className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20 md:py-24">
        <img
          src={ctaImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
            Get Involve Now
          </p>
          <h2 className="mb-8 font-serif text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            We&apos;ve funded 12,503 charity projects for 25M people around the
            world
          </h2>
          <button
            type="button"
            onClick={openJoinForm}
            className="inline-block cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            Get Involve Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Events
