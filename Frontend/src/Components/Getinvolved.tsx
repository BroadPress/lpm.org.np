import { FaDonate, FaHandshake, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useJoinForm } from './JoinFormModal'

const cards = [
  {
    icon: FaUserPlus,
    title: 'Become a volunteer',
    description:
      'Life Positive Mission integrates spirituality, life coaching, and leadership development to create real transformation in individuals and society.',
    bg: 'bg-[#415471]',
    button: 'Join Us Now',
    buttonStyle: 'solid',
  },
  {
    icon: FaDonate,
    title: 'Donate to support',
    description:
      'Life Positive Mission is a global human development initiative focused on positive energy, life transformation, leadership, and business coaching.',
    bg: 'bg-[#ef5b3e]',
    button: 'Donate Now',
    buttonStyle: 'outline',
  },
  {
    icon: FaHandshake,
    title: 'Become a partner',
    description:
      'Partner with us to create a positive, conscious, and spiritually awakened world where individuals live with purpose, clarity, discipline, and prosperity.',
    bg: 'bg-[#3d3630]',
    button: 'Learn More',
    buttonStyle: 'solid',
  },
] as const

const buttonClassName = (buttonStyle: 'solid' | 'outline') =>
  buttonStyle === 'outline'
    ? 'w-fit rounded-full border-2 border-white px-6 py-2.5 text-sm font-semibold text-white'
    : 'w-fit rounded-full bg-[#ef5b3e] px-6 py-2.5 text-sm font-semibold text-white'

const Getinvolved = () => {
  const { openJoinForm } = useJoinForm()

  return (
    <section data-fade-in className="bg-gray-100 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-center text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
          Get Involve Now
        </p>
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold text-[#1e2a4a] sm:mb-12 sm:text-3xl md:text-4xl">
          Make a difference today
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cards.map(
            ({ icon: Icon, title, description, bg, button, buttonStyle }) => (
              <div
                key={title}
                className={`${bg} flex flex-col rounded-3xl p-6 text-white sm:p-8 md:p-10`}
              >
                <Icon className="mb-6 text-3xl" />
                <h3 className="mb-4 font-serif text-xl font-bold">{title}</h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-white/95">
                  {description}
                </p>
                {button === 'Join Us Now' ? (
                  <button
                    type="button"
                    onClick={openJoinForm}
                    className={buttonClassName(buttonStyle)}
                  >
                    {button}
                  </button>
                ) : button === 'Donate Now' ? (
                  <Link to="/donate" className={buttonClassName(buttonStyle)}>
                    {button}
                  </Link>
                ) : (
                  <Link to="/single-page" className={buttonClassName(buttonStyle)}>
                    {button}
                  </Link>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Getinvolved