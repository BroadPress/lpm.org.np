'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { getAllFaqs, FAQ } from '@/lib/supabase/faqs';

export default function FAQClient() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllFaqs();
        setFaqs(data);
        if (data.length > 0) {
          setOpenQuestion(data[0].id);
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="faq-page-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Header & FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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

              {faqs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No FAQs available yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
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
              )}
            </motion.div>

            {/* Right Column - Contact Info & Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
                <p className="text-white/90 text-sm mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Please contact us.
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