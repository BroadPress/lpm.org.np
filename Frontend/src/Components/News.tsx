import newsImage1 from '../assets/8.jpg'
import newsImage2 from '../assets/19.jpg'
import newsImage3 from '../assets/31.jpg'

const newsItems = [
  {
    title: 'Leadership Training',
    description:
      'A transformational leadership training program focused on self-management, positive thinking, communication skills, teamwork, and youth empowerment to develop responsible and visionary leaders for society.',
    footer: 'Life Positive Mission | August 17, 2025',
    image: newsImage1,
    alt: 'Leadership training welcome ceremony with participants',
  },
  {
    title: 'Traffic Awareness Program',
    description:
      'A public awareness initiative designed to educate citizens, students, and drivers about road safety, traffic discipline & responsible driving.',
    footer: 'Life Positive Mission | September 17, 2025',
    image: newsImage2,
    alt: 'Community outreach program at a public shelter',
  },
  {
    title: 'Entrepreneurship Award',
    description:
      'A prestigious recognition program honoring innovative entrepreneurs, startup founders, and business leaders who are contributing to economic growth, employment generation, and positive social impact.',
    footer: 'Life Positive Mission | March 17, 2026',
    image: newsImage3,
    alt: 'Entrepreneurship award presentation ceremony',
  },
] as const

const News = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
            Latest Updates
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#2c3e50] md:text-4xl">
            News &amp; Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsItems.map(({ title, description, footer, image, alt }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="aspect-4/3 w-full bg-gray-300">
                <img
                  src={image}
                  alt={alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-6 pt-6 pb-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#2c3e50]">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
                <hr className="mb-4 border-gray-200" />
                <p className="text-xs text-gray-400">{footer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News