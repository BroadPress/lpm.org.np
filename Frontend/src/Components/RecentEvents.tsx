import activities1 from '../assets/activities1.jpg'
import activities2 from '../assets/activities2.jpg'

const events = [
  {
    title: 'Entrepreneurship Award',
    description:
      'Recognizing and honoring outstanding entrepreneurs who have made significant contributions to the community through innovation and social responsibility.',
    progress: 70,
    color: '#e65c41',
    image: activities1,
    alt: 'Award presentation ceremony at Life Positive Mission event',
  },
  {
    title: 'Financial help for poor, needy families',
    description:
      'Providing essential support and resources to underprivileged families to help them build a better future and overcome financial challenges.',
    progress: 85,
    color: '#2c3e50',
    image: activities2,
    alt: 'Management Leadership program participants at Life Positive Mission',
  },
] as const

const RecentEvents = () => {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-[#2c3e50] md:text-4xl">
          Recent Events
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {events.map(({ title, description, progress, color, image, alt }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="relative aspect-4/3 w-full bg-gray-300">
                <img
                  src={image}
                  alt={alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 bottom-4 left-4">
                  <div className="relative h-10 w-full overflow-hidden rounded-full bg-[#f8f9fa]">
                    <div
                      className="absolute inset-y-0 left-0 flex min-w-0 items-center justify-between rounded-full px-4 text-xs font-bold text-white"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: color,
                      }}
                    >
                      <span className="truncate">Raised Funds</span>
                      <span className="shrink-0">{progress}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-[#2c3e50]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7f8c8d]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentEvents