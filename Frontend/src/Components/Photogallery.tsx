import { Link } from 'react-router-dom'
import gallery1 from '../assets/19.jpg'
import gallery2 from '../assets/31.jpg'
import gallery3 from '../assets/activities1.jpg'
import gallery4 from '../assets/activities2.jpg'
import gallery5 from '../assets/8.jpg'
import gallery6 from '../assets/28.jpg'
import gallery7 from '../assets/44.jpg'
import gallery8 from '../assets/45.jpg'

const galleryItems = [
  { title: 'Village people', image: gallery1, alt: 'Community outreach with local villagers' },
  { title: 'Donation campaign', image: gallery2, alt: 'Donation and award ceremony event' },
  { title: 'Charity donation', image: gallery3, alt: 'Charity donation program at Life Positive Mission' },
  { title: 'Clean campaign', image: gallery4, alt: 'Clean campaign and leadership program' },
  { title: 'Happy child', image: gallery5, alt: 'Happy children at a training program' },
  { title: 'Poor children', image: gallery6, alt: 'Support program for underprivileged children' },
  { title: 'Helpless People', image: gallery7, alt: 'Helping helpless people in the community' },
  { title: 'Volunteer team', image: gallery8, alt: 'Life Positive Mission volunteer team' },
] as const

const Photogallery = () => {
  return (
    <section className="bg-gray-100 px-10 py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
            Portfolio / Gallery
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#2c3e50] md:text-4xl">
            Photo gallery
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:px-8 lg:grid-cols-4 lg:gap-8">
          {galleryItems.map(({ title, image, alt }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl shadow-sm"
            >
              <img
                src={image}
                alt={alt}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-block cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            View All Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Photogallery
