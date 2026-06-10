import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import lpmLogo from '../assets/lpm-logo.png'

const socialIcons = [
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaYoutube, label: 'YouTube' },
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
] as const

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <Link to="/" className="mb-5 inline-block">
              <img
                src={lpmLogo}
                alt="Life Positive Mission - Power of Positive Energy - www.lpm.org.np"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-200">
              Life Positive Mission (LPM) is a volunteer-driven international
              public charitable non-profit organization committed to building a
              positive, conscious, and spiritually awakened world through the
              power of positive energy, leadership, and human transformation.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">
              Contact Information
            </h3>
            <div className="mt-2 mb-5 h-1 w-12 bg-[#e65c40]" />
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#e65c40]" />
                <span>Near Pashupati School, Bajrang Tola, Birganj</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-[#e65c40]" />
                <span>+9779841441374</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-[#e65c40]" />
                <span>info@lpm.org.np</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">
              Office Location
            </h3>
            <div className="mt-2 mb-5 h-1 w-12 bg-[#e65c40]" />
          </div>
        </div>

        <hr className="my-10 border-gray-500" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-4 text-base font-bold">
              Subscribe our Newsletter
            </h3>
            <div className="flex max-w-md items-center gap-2 rounded-lg border border-gray-300 bg-white p-1.5">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                className="shrink-0 rounded-md bg-[#004d00] px-5 py-2 text-sm font-semibold text-white hover:bg-[#003d00]"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="flex gap-2">
              {socialIcons.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-[#e65c40] text-white"
                >
                  <Icon className="text-sm" />
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-200">
              <span>Privacy Policy</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>Term &amp; Condition</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>FAQ</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
