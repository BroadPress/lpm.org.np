import { FaDonate, FaHandshake, FaUserPlus } from 'react-icons/fa'

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

const Getinvolved = () => {
  return (
    <section className="bg-gray-100 px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-[#1e2a4a] md:text-4xl">
          Make a difference today
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map(
            ({ icon: Icon, title, description, bg, button, buttonStyle }) => (
              <div
                key={title}
                className={`${bg} flex flex-col rounded-3xl p-10 text-white`}
              >
                <Icon className="mb-6 text-3xl" />
                <h3 className="mb-4 font-serif text-xl font-bold">{title}</h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-white/95">
                  {description}
                </p>
                <button
                  type="button"
                  className={
                    buttonStyle === 'outline'
                      ? 'w-fit rounded-full border-2 border-white px-6 py-2.5 text-sm font-semibold text-white'
                      : 'w-fit rounded-full bg-[#ef5b3e] px-6 py-2.5 text-sm font-semibold text-white'
                  }
                >
                  {button}
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Getinvolved