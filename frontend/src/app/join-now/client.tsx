'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { fadeUp } from '@/components/animations/variants';

export default function JoinNowClient() {
  const [form, setForm] = useState({
    mission: '',
    email: '',
    education: '',
    phone: '',
    reason: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.mission || !form.email || !form.phone || !form.reason) {
      setError('Please fill all required fields.');
      return;
    }
    setError('');
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ebebf5]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-md p-10 text-center max-w-md w-full mx-4"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Application Submitted!</h2>
          <p className="text-gray-600 mt-2">
            Thank you for your interest. Our team will contact you soon.
          </p>
        </motion.div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#ebebf5] py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-4">

        {/* ── Header Card ── */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          {/* Purple top accent bar */}
          <div className="h-2.5 bg-gradient-to-r from-[#6741d9] to-[#4285f4]" />
          <div className="p-7">
            <h1 className="text-3xl font-normal text-gray-800 mb-4">
              Volunteering Opportunity in LPM
            </h1>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Building A Positive World</strong> - Only Youthful energy Invited. Who has
              willing to Create Self Management Leadership by Providing Positive, Powerful,
              Purposeful, thinking in the community.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Life Positive Mission is volunteer run Public Charitable International Non-Profit
              Organization dedicated to cultivate human potential. The mission&apos;s primary aim has
              always been to impart a practical &amp; ethical education to add values to this
              beautiful world by developing a power of positive energy in the life of people.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              A touchstone for all important choices and decisions in life.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Introducing health and wellness programs in corporations serves as an effective tool
              to reduce corporate stress, sickness-induced absenteeism and employee turnover. Many
              companies are starting to realize the tremendous benefits of corporate wellness
              programs that promote the well-being of their employees, employers and organization
              in general.
            </p>

            <hr className="my-5 border-gray-200" />

            {/* Account row */}
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="text-gray-600">lifepositivemission4@gmail.com</span>
                <span className="mx-2 text-gray-300">|</span>
                <Link
                  href="https://accounts.google.com"
                  target="_blank"
                  className="text-[#4285f4] hover:underline"
                >
                  Switch account
                </Link>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Not shared
            </p>

            <hr className="my-4 border-gray-200" />
            <p className="text-[#d93025] text-sm">* Indicates required question</p>
          </div>
        </motion.div>

        {/* ── Image Card ── */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="relative w-full h-64 sm:h-80">
            <OptimizedImage
              src="/images/joinnow/joinnow.jpg"
              alt="Life Positive Mission Event"
              type="hero"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* ── Error ── */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-2 text-red-600 text-sm border-l-4 border-red-500"
          >
            <AlertCircle size={16} />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* ── Life Positive Mission ── */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <label className="block text-sm text-gray-800 mb-3">
              Life Positive Mission <span className="text-[#d93025]">*</span>
            </label>
            <input
              type="text"
              value={form.mission}
              onChange={(e) => setForm({ ...form, mission: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 focus:border-[#4285f4] outline-none pb-1 text-sm text-gray-800 bg-transparent transition-colors placeholder:text-gray-400"
              required
            />
          </motion.div>

          {/* ── Email ── */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <label className="block text-sm text-gray-800 mb-3">
              Email <span className="text-[#d93025]">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 focus:border-[#4285f4] outline-none pb-1 text-sm text-gray-800 bg-transparent transition-colors placeholder:text-gray-400"
              required
            />
          </motion.div>

          {/* ── Highest Education ── */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <label className="block text-sm text-gray-800 mb-3">Highest Education</label>
            <input
              type="text"
              value={form.education}
              onChange={(e) => setForm({ ...form, education: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 focus:border-[#4285f4] outline-none pb-1 text-sm text-gray-800 bg-transparent transition-colors placeholder:text-gray-400"
            />
          </motion.div>

          {/* ── Phone Number ── */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <label className="block text-sm text-gray-800 mb-3">
              Phone Number <span className="text-[#d93025]">*</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 focus:border-[#4285f4] outline-none pb-1 text-sm text-gray-800 bg-transparent transition-colors placeholder:text-gray-400"
              required
            />
          </motion.div>

          {/* ── Why volunteer ── */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={6}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <label className="block text-sm text-gray-800 mb-3">
              Why you want to become a volunteer?{' '}
              <span className="text-[#d93025]">*</span>
            </label>
            <textarea
              rows={3}
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 focus:border-[#4285f4] outline-none pb-1 text-sm text-gray-800 bg-transparent transition-colors resize-none placeholder:text-gray-400"
              required
            />
          </motion.div>

          {/* ── Submit Row ── */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={7}
            variants={fadeUp}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-2.5 bg-[#6741d9] hover:bg-[#5a35c2] text-white rounded-md text-sm font-medium flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : (
                <>Submit <Send size={14} /></>
              )}
            </button>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full rounded-full" />
              </div>
              <span>Page 1 of 1</span>
              <button
                type="button"
                onClick={() => setForm({ mission: '', email: '', education: '', phone: '', reason: '' })}
                className="text-[#4285f4] hover:underline ml-2"
              >
                Clear form
              </button>
            </div>
          </motion.div>
        </form>

        {/* ── Footer ── */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={8}
          variants={fadeUp}
          className="text-center text-xs text-gray-500 pb-10 space-y-2"
        >
          <p>Never submit passwords through this form.</p>
          <p>
            This content is neither created nor endorsed by Google. —{' '}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
              target="_blank"
              className="text-[#4285f4] hover:underline"
            >
              Contact form owner
            </Link>{' '}
            —{' '}
            <Link href="/terms-and-terminologies" target="_blank" className="text-[#4285f4] hover:underline">
              Terms and Terminologies
            </Link>{' '}
            —{' '}
            <Link href="/privacy-policy" target="_blank" className="text-[#4285f4] hover:underline">
              Privacy Policy
            </Link>
          </p>
          <p>
            Does this form look suspicious?{' '}
            <Link
              href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/abuse"
              target="_blank"
              className="text-[#4285f4] hover:underline"
            >
              Report
            </Link>
          </p>
          <div className="flex items-center justify-center gap-1 mt-3">
            <svg viewBox="0 0 75 25" className="h-6 text-gray-400 fill-current">
              <text x="0" y="20" fontSize="20" fontFamily="sans-serif" fill="#5f6368">Forms</text>
            </svg>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
