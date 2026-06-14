import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { FaTimes } from 'react-icons/fa'

type SearchContextValue = {
  isSearchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
}

const SearchContext = createContext<SearchContextValue | null>(null)

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
  return context
}

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)

  useEffect(() => {
    if (!isSearchOpen) return

    inputRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSearch()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen])

  useEffect(() => {
    document.body.style.overflow = isSearchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isSearchOpen])

  return (
    <SearchContext.Provider value={{ isSearchOpen, openSearch, closeSearch }}>
      {children}

      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/40 transition-all duration-500 ${
          isSearchOpen
            ? 'visible scale-100 opacity-100'
            : 'invisible scale-0 opacity-0 pointer-events-none'
        }`}
        onClick={closeSearch}
        aria-hidden={!isSearchOpen}
      >
        <button
          type="button"
          aria-label="Close search"
          onClick={closeSearch}
          className="absolute top-5 right-5 cursor-pointer text-lg text-white transition hover:text-[#CB4B36]"
        >
          <FaTimes />
        </button>

        <div
          className="relative mx-auto w-full max-w-2xl px-4"
          onClick={(event) => event.stopPropagation()}
        >
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="w-full"
          >
            <input
              ref={inputRef}
              type="text"
              name="s"
              placeholder="Enter your text..."
              className="h-[52px] w-full rounded-full border-0 bg-white px-8 text-center text-[#292929] outline-none"
            />
          </form>
        </div>
      </div>
    </SearchContext.Provider>
  )
}
