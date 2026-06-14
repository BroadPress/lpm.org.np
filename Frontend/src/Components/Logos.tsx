import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const partnerLogos = [
  { src: logo1, alt: 'Peace and Human Rights' },
  { src: logo2, alt: 'World AIDS Day' },
  { src: logo3, alt: 'LifeCare Logo' },
  { src: logo4, alt: 'Sarcoma Cancer Awareness Month - Hope' },
]

const Logos = () => {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 sm:justify-around sm:gap-8 sm:px-8">
        {partnerLogos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto max-w-[160px] object-contain sm:h-14 md:h-16 md:max-w-[220px]"
          />
        ))}
      </div>
    </section>
  )
}

export default Logos
