'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// FAQ Data
const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    questions: [
      {
        id: 1,
        question: 'How we became best among others ?',
        answer: 'Life Positive Mission stands out by integrating spirituality, life coaching, and leadership development. We believe in the power of positive energy and conscious construction of life, transforming individuals into leaders who can transform the world.'
      },
      {
        id: 2,
        question: 'What we offer to you ?',
        answer: 'We offer transformation programs like "Life With Hanuman Ji" (Sundarkand Motivational Program), the "7-Day Self Management Leadership Program," and initiatives like "Positive Startup & Agro Tourism." We provide life and business coaching to empower students, youth, and professionals.'
      },
      {
        id: 3,
        question: 'How we provide services for you ?',
        answer: 'We provide services through structured workshops, spiritual motivational programs, leadership training, and social service activities. Our approach is volunteer-driven and focuses on both spiritual awakening and practical real-world success.'
      },
      {
        id: 4,
        question: 'How we raise fund for charity ?',
        answer: 'As an international public charitable non-profit organization, we are volunteer-driven. We work through community movement, partnerships, and spiritual/social initiatives to support our mission of building a positive world.'
      },
      {
        id: 5,
        question: 'What is the core message of Life Positive Mission?',
        answer: 'The core message is "Transform Yourself, Transform the World." We believe that personal transformation through positive thinking and discipline is the foundation for creating a positive impact on the global community.'
      },
      {
        id: 6,
        question: 'What are the core philosophies of the mission?',
        answer: 'We believe that positive energy is the foundation of success, mindset creates destiny, and life is a construction rather than luck. We see every challenge as a divine opportunity for growth and transformation.'
      },
      {
        id: 7,
        question: 'Why choose Life Positive Mission for your growth?',
        answer: 'LPM offers a real-life transformation approach with a strong focus on youth, leadership, and personality development. We uniquely integrate spiritual wisdom with practical life skills to empower individuals.'
      },
      {
        id: 8,
        question: 'What is the "Power of Positive Energy"?',
        answer: 'Positive Energy is the foundation of building a positive world. It is the fuel that allows individuals to awaken their inner potential and live with purpose, clarity, and prosperity.'
      },
      {
        id: 9,
        question: 'Who is the digital partner of LPM?',
        answer: 'Life Positive Mission is proud to have SRIYOG as our official Digital Partner, supporting our global transformation movement through technology and digital outreach.'
      },
      {
        id: 10,
        question: 'Who can participate in LPM programs?',
        answer: 'Our initiatives are designed for a wide range of individuals, including students, youth, corporate professionals, entrepreneurs, and social leaders who seek real-world success through transformation.'
      },
      {
        id: 11,
        question: 'What role do life and business coaching play?',
        answer: 'They are the foundation of our mission. We help individuals transform thinking patterns, develop leadership abilities, and align business growth with purpose and spirituality.'
      },
      {
        id: 12,
        question: 'What is the "Life With Hanuman Ji" program?',
        answer: 'It is a spiritual transformation program based on Sundarkand. It focuses on building courage, eliminating fear, and awakening positive energy through spiritual strength.'
      },
      {
        id: 13,
        question: 'What does the 7-Day Leadership Program cover?',
        answer: 'This program focuses on self-management, leadership development, emotional intelligence, time discipline, and goal setting for students and professionals.'
      },
      {
        id: 14,
        question: 'What is the Nepal-Bharat Maitri Ramayan Mahayag?',
        answer: 'It is a 3-day residential program in Kathmandu for spiritual and cultural unity, strengthening the friendship between Nepal and India through leadership training and spiritual awakening.'
      },
      {
        id: 15,
        question: 'How can students benefit from volunteering?',
        answer: 'Students gain personality development, leadership training, and confidence. They learn discipline and skills essential for life success while contributing to social service.'
      }
    ]
  }
];




export default function FAQClient() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* FAQ Page Section */}
      <div className="faq-page-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Header & FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Header */}
              <div className="section-head mb-8">
                <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
                  ANY QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  FREQUENTLY ASKED <br />
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    QUESTIONS
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Find answers to common questions about our mission, programs, and how you can be part of
                  the global transformation movement.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {faqCategories[0].questions.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: faq.id * 0.03 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 ml-4"
                      >
                        <ChevronDown size={18} className="text-orange-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openQuestion === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-100 dark:border-gray-700"
                        >
                          <div className="px-5 py-4">
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Info & Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Still Have Questions Card */}
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
                <p className="text-white/90 text-sm mb-6">
                  Can't find the answer you're looking for? Please contact us.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-orange-500 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <Mail size={18} />
                    Contact Us
                  </Link>
                  <a
                    href="tel:+9779841441374"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    <Phone size={18} />
                    Call Us: +977 9841441374
                  </a>
                </div>
              </div>

              {/* Quick Help Links */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HelpCircle size={18} className="text-orange-500" />
                  Quick Help
                </h3>
                <div className="space-y-3">
                  <Link href="/about" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <span>About Life Positive Mission</span>
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  </Link>
                  <Link href="/team" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <span>Meet Our Team</span>
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  </Link>
                  <Link href="/events" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <span>Upcoming Events</span>
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  </Link>
                  <Link href="/join-now" className="flex items-center justify-between py-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <span>Become a Volunteer</span>
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  </Link>
                </div>
              </div>

        
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}