import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import lpmLogo from '../assets/lpm-logo.png'
import { useSearch } from './SearchOverlay'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'TEAM', to: '/team' },
  { label: 'EVENTS', to: '/events' },
  { label: 'FAQS', to: '/faq' },
  { label: 'GALLERY', to: '/gallery' },
  { label: 'CONTACT', to: '/contact' },
] as const

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
] as const

const joinFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-[#f97316]'
    : 'text-black hover:text-[#f97316]'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [mainRowHeight, setMainRowHeight] = useState(0)
  const headerRef = useRef<HTMLElement>(null)
  const mainRowRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { openSearch } = useSearch()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [menuOpen])

  useEffect(() => {
    const updateHeader = () => {
      if (mainRowRef.current) {
        setMainRowHeight(mainRowRef.current.offsetHeight)
      }

      const topbar = document.querySelector('[data-topbar]') as HTMLElement | null
      const isDesktop = window.innerWidth >= 1024
      const threshold = isDesktop
        ? topbar?.offsetHeight ?? 0
        : headerRef.current?.offsetHeight ?? 0

      setIsFixed(window.scrollY > threshold)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    window.addEventListener('resize', updateHeader)

    return () => {
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('resize', updateHeader)
    }
  }, [])

  const mobileMenuTop = isFixed ? mainRowHeight : 48

  return (
    <header ref={headerRef}>
      <div
        className={`flex items-center justify-between bg-[#4a4a44] px-4 py-3 lg:hidden ${
          isFixed ? 'hidden' : ''
        }`}
      >
        <div className="flex items-center gap-4 text-white">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-sm hover:opacity-80"
            >
              <Icon />
            </a>
          ))}
        </div>
        <div className="flex items-center border-l border-white/30 pl-4 text-white">
          <button
            type="button"
            aria-label="Search"
            onClick={() => {
              setMenuOpen(false)
              openSearch()
            }}
            className="cursor-pointer text-sm hover:opacity-80"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {isFixed && (
        <div
          className="lg:hidden"
          style={{ height: mainRowHeight }}
          aria-hidden="true"
        />
      )}

      <nav
        className={`border-b border-gray-100 bg-white text-black transition-shadow duration-300 ${
          isFixed
            ? 'fixed top-0 right-0 left-0 z-50 shadow-md'
            : 'relative'
        }`}
      >
      <div ref={mainRowRef} className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src={lpmLogo}
            alt="Life Positive Mission - Power of Positive Energy - www.lpm.org.np"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          <ul className="flex items-center gap-4 text-sm font-medium tracking-wide lg:gap-6">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink to={to} end={to === '/'} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href={joinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#f97316] px-6 py-2 text-sm font-bold text-white hover:bg-[#e04a2d]"
          >
            Join Now
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-[14px] w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-[#242424] transition-all duration-300 ${
                menuOpen
                  ? 'top-1/2 -translate-y-1/2 rotate-45'
                  : 'top-0'
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 bg-[#242424] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-[#242424] transition-all duration-300 ${
                menuOpen
                  ? 'top-1/2 -translate-y-1/2 -rotate-45'
                  : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </div>
      </nav>

      {isFixed && (
        <div
          className="hidden lg:block"
          style={{ height: mainRowHeight }}
          aria-hidden="true"
        />
      )}

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed right-0 left-0 z-[60] bg-black/40 lg:hidden"
          style={{ top: mobileMenuTop, bottom: 0 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 z-[70] flex min-w-[280px] flex-col bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: 'min(50vw, 320px)',
          top: mobileMenuTop,
          height: `calc(100% - ${mobileMenuTop}px)`,
        }}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h4 className="text-lg font-bold text-[#212121]">Menu</h4>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer p-1 text-2xl text-[#333]"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto">
          {navLinks.map(({ label, to }) => (
            <li key={label} className="border-t border-[#e6e6e6]">
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-4 text-center text-[15px] font-semibold transition ${
                    isActive
                      ? 'text-[#f97316]'
                      : 'text-black hover:text-[#CB4B36]'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="border-t border-[#e6e6e6] p-4">
          <a
            href={joinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full bg-[#CB4B36] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#a33a2b]"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
