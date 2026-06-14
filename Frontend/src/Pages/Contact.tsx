import {
  FaEnvelopeOpenText,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'

import PageBanner from '../Components/PageBanner'
import bannerContact from '../assets/banner-contact.jpg'
import formBg from '../assets/contact-form-bg.jpg'

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: 'Head office address :',
    lines: ['Near Pashupati School, Bajrang Tola, Birganj'],
  },
  {
    icon: FaPhoneVolume,
    title: 'Toll free number :',
    lines: ['Phone: +977 9841441374'],
  },
  {
    icon: FaEnvelopeOpenText,
    title: 'Email address :',
    lines: ['Website: www.lpm.org.np', 'Email: info@lpm.org.np'],
  },
] as const

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/', color: '#3b5998' },
  { icon: FaPinterest, label: 'Pinterest', href: 'https://www.pinterest.com/', color: '#bd081c' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/9779841441374', color: '#25d366' },
  { icon: FaLinkedinIn, label: 'Linkedin', href: 'https://www.linkedin.com/', color: '#0077b5' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://www.twitter.com/', color: '#1da1f2' },
  { icon: FaGoogle, label: 'Google', href: 'https://www.google.com/', color: '#db4437' },
] as const

const Contact = () => {
  return (
    <div>
      <PageBanner title="Contact us" image={bannerContact} />

      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
                  Contact Us
                </p>
                <h2 className="mb-4 font-serif text-3xl font-bold text-[#1e2a4a] md:text-4xl">
                  Feel free to contact & reach us !!
                </h2>
                <p className="text-sm leading-relaxed text-[#5f6c7b] md:text-base">
                  We are here to assist you on your journey of transformation.
                  Whether you have questions about our programs, want to
                  volunteer, or wish to partner with us, please reach out.
                  Together, we can build a positive and conscious world.
                </p>
              </div>

              <ul className="space-y-6 pt-5 md:space-y-8">
                {contactDetails.map(({ icon: Icon, title, lines }) => (
                  <li
                    key={title}
                    className="flex items-center rounded-[25px] border border-[#f05a42]/25 px-5 py-6 sm:px-8 sm:py-7"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f05a42] text-2xl text-white sm:h-20 sm:w-20 sm:text-3xl">
                      <Icon />
                    </span>
                    <div className="min-w-0 flex-1 pl-5">
                      <h3 className="mb-2 font-serif text-base font-bold text-[#1e2a4a] sm:text-lg">
                        {title}
                      </h3>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-[#5f6c7b] sm:text-base"
                        >
                          {line.startsWith('Email:') ? (
                            <>
                              Email:{' '}
                              <a
                                href="mailto:info@lpm.org.np"
                                className="text-[#f05a42] hover:underline"
                              >
                                info@lpm.org.np
                              </a>
                            </>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-2xl p-6 md:p-8">
                <img
                  src={formBg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#151515]/75" />

                <form
                  className="relative z-10 space-y-4"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name*"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f05a42] focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email*"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f05a42] focus:outline-none"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter Subject*"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f05a42] focus:outline-none"
                    />
                    <input
                      type="tel"
                      name="number"
                      placeholder="Enter Number*"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f05a42] focus:outline-none"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Enter Message*"
                    required
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f05a42] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
                  >
                    Submit Now
                  </button>
                </form>
              </div>

              <div className="mt-10">
                <h3 className="mb-6 font-serif text-xl font-bold text-[#1e2a4a]">
                  Follow us on social media..
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: color }}
                      className="flex items-center overflow-hidden rounded-full text-white transition hover:brightness-110"
                    >
                      <span className="flex w-10 shrink-0 items-center justify-center py-3">
                        <Icon className="text-sm" />
                      </span>
                      <span className="truncate bg-linear-to-r from-black/10 to-transparent py-3 pr-3 pl-2 text-sm font-medium">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          title="Life Positive Mission office location - Birgunj, Nepal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113710.36495423553!2d84.7906101189676!3d27.04757484692372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935446b21c98cb%3A0x42938e30ff4f6cb5!2sBirgunj!5e0!3m2!1sen!2snp!4v1779797183705!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[280px] w-full sm:h-[350px] md:h-[450px]"
        />
      </section>
    </div>
  )
}

export default Contact
