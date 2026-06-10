import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const Topbar = () => {
  return (
    <header className="bg-[#ffffff] text-black text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="tel:+9779841441374"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <FaPhoneAlt className="shrink-0 text-xs" />
            <span>+977 9841441374</span>
          </a>
          <a
            href="mailto:info@lpm.org.np"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <FaEnvelope className="shrink-0 text-xs" />
            <span>info@lpm.org.np</span>
          </a>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="shrink-0 text-xs" />
            <span>Near Pashupati School, Bajrang Tola, Birganj.</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
            <FaLinkedinIn />
          </a>
          <button
            type="button"
            aria-label="Search"
            className="hover:opacity-80"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar