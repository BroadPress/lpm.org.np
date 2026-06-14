import PageBanner from '../Components/PageBanner'
import bannerAbout from '../assets/banner-about.jpg'
import {
  FaBriefcase,
  FaGraduationCap,
  FaLightbulb,
  FaUserTie,
  FaUsers,
} from 'react-icons/fa'

import philosophyImage from '../assets/8.jpg'
import ctaImage from '../assets/activities1.jpg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const partnerLogos = [
  { src: logo1, alt: 'Peace and Human Rights' },
  { src: logo2, alt: 'World AIDS Day' },
  { src: logo3, alt: 'LifeCare Logo' },
  { src: logo4, alt: 'Sarcoma Cancer Awareness Month - Hope' },
] as const

const audienceCards = [
  { label: 'Students', icon: FaGraduationCap },
  { label: 'Youth', icon: FaUsers },
  { label: 'Professionals', icon: FaBriefcase },
  { label: 'Entrepreneurs', icon: FaLightbulb },
  { label: 'Leaders', icon: FaUserTie },
] as const

const About = () => {
  return (
    <div>
      <PageBanner title="About Us" image={bannerAbout} />

      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
                About Life Positive Mission
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#1e2a4a] md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Transform Yourself, Transform the World
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-[#5f6c7b] md:text-base">
              <p>
                Life Positive Mission (LPM) is a volunteer-driven international
                public charitable non-profit organization committed to building a
                positive, conscious, and spiritually awakened world through the
                power of positive energy, leadership, and human transformation.
              </p>
              <p>
                Guided by the belief that every individual possesses infinite
                inner potential, LPM works to inspire people to transform their
                lives through positive thinking, discipline, self-management,
                spirituality, and purposeful action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {audienceCards.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-[#eef2f7] px-4 py-8 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f05a42]">
                  <Icon className="text-2xl text-[#f05a42]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#1e2a4a] md:text-lg">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-0">
            <div className="relative z-10 lg:col-span-5 lg:-mr-8">
              <div className="rounded-3xl border-4 border-white bg-[#1e2a4a] p-6 shadow-xl md:p-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
                  Core Philosophy
                </h2>
                <p className="text-sm leading-relaxed text-white/90">
                  Life Positive Mission believes that positive energy is the
                  foundation of success. Mindset creates destiny, and life is not
                  luck—it is a conscious construction. We teach that you are not
                  jobless, but under divine development, where every challenge is
                  part of your transformation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={philosophyImage}
                  alt="Life Positive Mission community training session"
                  className="aspect-4/3 w-full object-cover lg:aspect-auto lg:min-h-[320px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-around gap-6 border-t border-gray-100 pt-10">
            {partnerLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto max-w-[210px] object-contain md:h-20"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20 md:py-24">
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
            Building a positive, conscious, and spiritually awakened world.
          </h2>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            Get Involve Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
