import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { FaTimes } from 'react-icons/fa'

const JOIN_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform?embedded=true'

type JoinFormContextValue = {
  openJoinForm: () => void
  closeJoinForm: () => void
}

const JoinFormContext = createContext<JoinFormContextValue | null>(null)

export const useJoinForm = () => {
  const context = useContext(JoinFormContext)
  if (!context) {
    throw new Error('useJoinForm must be used within JoinFormProvider')
  }
  return context
}

export const JoinFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openJoinForm = () => setIsOpen(true)
  const closeJoinForm = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeJoinForm()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <JoinFormContext.Provider value={{ openJoinForm, closeJoinForm }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4"
          onClick={closeJoinForm}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-form-title"
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h2
                id="join-form-title"
                className="font-serif text-lg font-bold text-[#1e2a4a] md:text-xl"
              >
                Join Now
              </h2>
              <button
                type="button"
                aria-label="Close join form"
                onClick={closeJoinForm}
                className="cursor-pointer p-1 text-xl text-gray-500 hover:text-gray-800"
              >
                <FaTimes />
              </button>
            </div>

            <iframe
              src={JOIN_FORM_EMBED_URL}
              title="Join Life Positive Mission"
              className="h-[min(75vh,720px)] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </JoinFormContext.Provider>
  )
}
