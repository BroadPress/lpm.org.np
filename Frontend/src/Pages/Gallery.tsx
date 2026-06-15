import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import PageBanner from '../Components/PageBanner'
import bannerGallery from '../assets/banner-gallery.jpg'
import gallery1 from '../assets/19.jpg'
import gallery2 from '../assets/31.jpg'
import gallery3 from '../assets/activities1.jpg'
import gallery4 from '../assets/activities2.jpg'
import gallery5 from '../assets/8.jpg'
import gallery6 from '../assets/28.jpg'
import gallery7 from '../assets/44.jpg'
import gallery8 from '../assets/45.jpg'
import gallery9 from '../assets/event-1.jpg'
import gallery10 from '../assets/event-2.jpg'

const galleryImages = [
  { src: gallery1, alt: 'Community outreach with local villagers' },
  { src: gallery2, alt: 'Donation and award ceremony event' },
  { src: gallery3, alt: 'Charity donation program at Life Positive Mission' },
  { src: gallery4, alt: 'Clean campaign and leadership program' },
  { src: gallery5, alt: 'Happy children at a training program' },
  { src: gallery6, alt: 'Support program for underprivileged children' },
  { src: gallery7, alt: 'Helping helpless people in the community' },
  { src: gallery8, alt: 'Life Positive Mission volunteer team' },
  { src: gallery9, alt: 'Self management leadership event' },
  { src: gallery10, alt: 'Volunteer orientation day event' },
] as const

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null)

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <div>
      <PageBanner title="Gallery" image={bannerGallery} />

      <section data-fade-in className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {galleryImages.map(({ src, alt }, index) => (
              <button
                key={`${alt}-${index}`}
                type="button"
                onClick={() => setSelectedImage({ src, alt })}
                className="group cursor-pointer overflow-hidden rounded-[25px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05a42]"
              >
                <img
                  src={src}
                  alt={alt}
                  className="aspect-4/3 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close gallery image"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 cursor-pointer text-2xl text-white hover:text-[#f05a42]"
          >
            <FaTimes />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Gallery
