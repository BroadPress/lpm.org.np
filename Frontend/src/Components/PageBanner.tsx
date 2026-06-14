import type { ReactNode } from 'react'

type PageBannerProps = {
  title: string
  image: string
  variant?: 'hero' | 'page'
  titleClassName?: string
  children?: ReactNode
}

const PageBanner = ({
  title,
  image,
  variant = 'page',
  titleClassName,
  children,
}: PageBannerProps) => {
  const heightClass = variant === 'hero' ? 'min-h-[70vh]' : 'min-h-[32vh] sm:min-h-[40vh]'

  return (
    <section
      className={`relative flex ${heightClass} items-center justify-center overflow-hidden px-4 py-16 text-center sm:px-8 sm:py-20`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1
          className={
            titleClassName ??
            'font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl'
          }
        >
          {title}
        </h1>
        {children}
      </div>
    </section>
  )
}

export default PageBanner
