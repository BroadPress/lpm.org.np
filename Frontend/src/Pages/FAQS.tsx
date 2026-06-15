import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import PageBanner from '../Components/PageBanner'
import bannerFaq from '../assets/banner-faq.jpg'

const faqItems = [
  {
    question: 'How we became best among others ?',
    answer:
      'Life Positive Mission stands out by integrating spirituality, life coaching, and leadership development. We believe in the power of positive energy and conscious construction of life, transforming individuals into leaders who can transform the world.',
  },
  {
    question: 'What we offer to you ?',
    answer:
      'We offer transformation programs like "Life With Hanuman Ji" (Sundarkand Motivational Program), the "7-Day Self Management Leadership Program," and initiatives like "Positive Startup & Agro Tourism." We provide life and business coaching to empower students, youth, and professionals.',
  },
  {
    question: 'How we provide services for you ?',
    answer:
      'We provide services through structured workshops, spiritual motivational programs, leadership training, and social service activities. Our approach is volunteer-driven and focuses on both spiritual awakening and practical real-world success.',
  },
  {
    question: 'How we raise fund for charity ?',
    answer:
      'As an international public charitable non-profit organization, we are volunteer-driven. We work through community movement, partnerships, and spiritual/social initiatives to support our mission of building a positive world.',
  },
  {
    question: 'What is the core message of Life Positive Mission?',
    answer:
      'The core message is "Transform Yourself, Transform the World." We believe that personal transformation through positive thinking and discipline is the foundation for creating a positive impact on the global community.',
  },
  {
    question: 'What are the core philosophies of the mission?',
    answer:
      'We believe that positive energy is the foundation of success, mindset creates destiny, and life is a construction rather than luck. We see every challenge as a divine opportunity for growth and transformation.',
  },
  {
    question: 'Why choose Life Positive Mission for your growth?',
    answer:
      'LPM offers a real-life transformation approach with a strong focus on youth, leadership, and personality development. We uniquely integrate spiritual wisdom with practical life skills to empower individuals.',
  },
  {
    question: 'What is the "Power of Positive Energy"?',
    answer:
      'Positive Energy is the foundation of building a positive world. It is the fuel that allows individuals to awaken their inner potential and live with purpose, clarity, and prosperity.',
  },
  {
    question: 'Who is the digital partner of LPM?',
    answer:
      'Life Positive Mission is proud to have SRIYOG as our official Digital Partner, supporting our global transformation movement through technology and digital outreach.',
  },
  {
    question: 'Who can participate in LPM programs?',
    answer:
      'Our initiatives are designed for a wide range of individuals, including students, youth, corporate professionals, entrepreneurs, and social leaders who seek real-world success through transformation.',
  },
  {
    question: 'What role do life and business coaching play?',
    answer:
      'They are the foundation of our mission. We help individuals transform thinking patterns, develop leadership abilities, and align business growth with purpose and spirituality.',
  },
  {
    question: 'What is the "Life With Hanuman Ji" program?',
    answer:
      'It is a spiritual transformation program based on Sundarkand. It focuses on building courage, eliminating fear, and awakening positive energy through spiritual strength.',
  },
  {
    question: 'What does the 7-Day Leadership Program cover?',
    answer:
      'This program focuses on self-management, leadership development, emotional intelligence, time discipline, and goal setting for students and professionals.',
  },
  {
    question: 'What is the Nepal–Bharat Maitri Ramayan Mahayag?',
    answer:
      'It is a 3-day residential program in Kathmandu for spiritual and cultural unity, strengthening the friendship between Nepal and India through leadership training and spiritual awakening.',
  },
  {
    question: 'How can students benefit from volunteering?',
    answer:
      'Students gain personality development, leadership training, and confidence. They learn discipline and skills essential for life success while contributing to social service.',
  },
] as const

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <div>
      <PageBanner title="Faq" image={bannerFaq} />

      <section data-fade-in className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold tracking-widest text-[#f05a42] uppercase">
                  Any Questions
                </p>
                <h2 className="mb-4 font-serif text-3xl font-bold text-[#1e2a4a] md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm leading-relaxed text-[#5f6c7b] md:text-base">
                  Find answers to common questions about our mission, programs,
                  and how you can be part of the global transformation movement.
                </p>
              </div>

              <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index

                  return (
                    <div key={item.question}>
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        className={`flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition md:px-6 md:py-5 ${
                          isOpen ? 'bg-[#ffffff] text-black' : 'bg-white text-[#1e2a4a] hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-serif text-base font-semibold md:text-lg">
                          {item.question}
                        </span>
                        <FaChevronDown
                          className={`shrink-0 text-sm transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-gray-100 bg-[#f8f9fa] px-5 py-4 md:px-6 md:py-5">
                          <p className="text-sm leading-relaxed text-[#5f6c7b] md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQS
