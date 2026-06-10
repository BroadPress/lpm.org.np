import { useEffect, useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaTwitter,
} from 'react-icons/fa'

import team1 from '../assets/team-1.png'
import team2 from '../assets/team-2.png'
import team3 from '../assets/team-3.png'
import team4 from '../assets/team-4.png'
import team5 from '../assets/team-5.png'
import team6 from '../assets/team-6.png'
import team7 from '../assets/team-7.png'

type TeamMember = {
  image: string
  title: string
  name: string
  statement: string
  quote?: string
  centered?: boolean
}

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://www.twitter.com/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/' },
] as const

const teamMembers: TeamMember[] = [
  {
    image: team1,
    title: 'Chairman – Nepal Chapter',
    name: 'VANDANA KARN',
    statement:
      'Vandana Karn is a visionary leader whose compassionate leadership motivates positive change. With experience in positive education, spirituality, music therapy, and \'Waste to Best\' initiatives, she empowers women and communities to live with confidence and purpose. Her love for nature and human values reflects her mission to spread positivity and peace. Through strengthening Bharat–Nepal relations, she inspires people to unite and build a better future with hope and harmony.',
  },
  {
    image: team2,
    title: 'Executive Chairman',
    name: 'SANDHYA KARN',
    statement:
      'Sandhya Karn is a dedicated social entrepreneur and social psychologist working for positive transformation through awareness, compassion, and leadership. Known as the "Iron Lady for Positive Change," she supports initiatives focused on human values, mental wellness, women empowerment, social harmony, and Indo-Nepal friendship. Her vision is a society where positivity, wisdom, service, and humanity form the foundation of collective progress.',
    quote:
      'Positive thinking, compassionate action, and fearless leadership can transform society.',
  },
  {
    image: team3,
    title: 'CEO – Life Positive Mission',
    name: 'TARA NUPANE',
    statement:
      'Tara Nupane is a dynamic leader serving as CEO of Life Positive Mission. Known for her positive energy and compassion, she inspires transformation through wellness and purposeful action. She believes true success begins with inner wellness, self-confidence, and a positive vision. Her mission is to build a future where positivity, service, humanity, and wellness guide personal and social transformation.',
    quote:
      'Positive energy has the power to heal minds, inspire hearts, and transform lives.',
  },
  {
    image: team4,
    title: 'Director – Resource Management',
    name: 'BIKASH PARAJULI',
    statement:
      'Bikash Parajuli is a young entrepreneur serving as Director of Resource Management at Life Positive Mission. With practical leadership and grounded nature, he brings execution power and commitment to social development. He is dedicated to creating meaningful impact through organized resources and strategic planning. He contributes to strengthening Nepal–India relations and represents a new generation of leadership rooted in positivity and transformation.',
  },
  {
    image: team5,
    title: 'Program Director',
    name: 'SRIJANA RANA',
    statement:
      'Srijana Rana is a passionate and dedicated leader committed to organizing impactful positive programs that inspire growth, awareness, and human transformation. With strong motivation, positive energy, and excellent coordination skills, she continuously contributes to the mission of spreading hope, wellness, and meaningful social change through the activities of Life Positive Mission.',
  },
  {
    image: team6,
    title: 'Secretary',
    name: 'RAJU BASYAL',
    statement:
      'Raju Basyal is a spiritually strong and highly motivated personality dedicated to positive transformation through spiritual wisdom and human connection. He deeply understands the spiritual and cultural relationship between Nepal and Bharat, inspiring people through motivation, positivity, and values-based leadership. His dedication to spiritual growth and social harmony continues to strengthen the mission of creating a more conscious and positive society.',
  },
  {
    image: team7,
    title: 'Vice President',
    name: 'MEENA AGGRAWAL',
    statement:
      'Meena Aggrawal is a dedicated social entrepreneur and spiritual leader, serving as the Vice President of Life Positive Mission. She is highly energetic and deeply committed to women empowerment, working consistently to inspire confidence, self-reliance, and positive transformation among women. Through her leadership and spiritual outlook, she contributes actively to building a stronger, more conscious, and empowered society.',
    centered: true,
  },
]

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  useEffect(() => {
    if (!selectedMember) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMember(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMember])

  return (
    <div>
      <div className="flex min-h-[40vh] items-center justify-center bg-linear-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] px-8 py-20 text-center">
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Team
        </h1>
      </div>

      <section className="bg-white px-8 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className={`flex flex-col items-center text-center${member.centered ? ' sm:col-span-2 sm:mx-auto lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="group relative mb-6 h-48 w-48 overflow-hidden rounded-full shadow-md sm:h-52 sm:w-52 md:h-56 md:w-56">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1e2a4a] transition hover:bg-[#f05a42] hover:text-white"
                      >
                        <Icon className="text-sm" />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mb-3 text-xs font-semibold tracking-widest text-[#2d5a44] uppercase">
                  {member.title}
                </p>
                <h2 className="mb-5 font-serif text-xl font-bold tracking-wide text-[#1e2a4a] uppercase md:text-2xl">
                  {member.name}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer rounded-full bg-[#f05a42] px-6 py-1.5 text-sm font-bold text-white hover:bg-[#e04a2d]"
                >
                  Bio
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          onClick={() => setSelectedMember(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bio-modal-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h3
                id="bio-modal-title"
                className="font-serif text-lg font-bold text-[#1e2a4a] md:text-xl"
              >
                {selectedMember.name} - Statement
              </h3>
              <button
                type="button"
                aria-label="Close bio"
                onClick={() => setSelectedMember(null)}
                className="cursor-pointer text-xl text-gray-500 hover:text-gray-800"
              >
                <FaTimes />
              </button>
            </div>

            <div className="px-6 py-8 text-center md:px-10 md:py-10">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="mx-auto mb-6 h-36 w-36 rounded-full object-cover"
              />
              <p className="text-sm leading-relaxed text-[#5f6c7b] md:text-base">
                {selectedMember.statement}
              </p>
              {selectedMember.quote && (
                <p className="mt-4 text-sm leading-relaxed text-[#5f6c7b] italic md:text-base">
                  &ldquo;{selectedMember.quote}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Team
