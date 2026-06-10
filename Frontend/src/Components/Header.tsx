import { Link, NavLink } from 'react-router-dom'
import lpmLogo from '../assets/lpm-logo.png'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'TEAM', to: '/team' },
  { label: 'EVENTS', to: '/events' },
  { label: 'FAQS', to: '/faq' },
  { label: 'GALLERY', to: '/gallery' },
  { label: 'CONTACT', to: '/contact' },
] as const

const Header = () => {
  return (
    <nav className="sticky top-0 z-40 bg-[#ffffff] text-black shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4">
        <Link to="/" className="shrink-0">
          <img
            src={lpmLogo}
            alt="Life Positive Mission - Power of Positive Energy - www.lpm.org.np"
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-6 lg:gap-8">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium tracking-wide lg:gap-6">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-pointer text-[#f97316]'
                      : 'cursor-pointer text-black hover:text-[#f97316]'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#f97316] px-6 py-2 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
