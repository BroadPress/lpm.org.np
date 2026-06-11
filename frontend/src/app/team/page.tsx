
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';
import OptimizedImage from '@/components/ui/OptimizedImage';

const teamMembers = [
  { id: 1, name: 'VANDANA KARN', position: 'Chairman – Nepal Chapter', image: '/team/team-1.png', bio: 'Vandana Karn is a visionary leader whose compassionate leadership motivates positive change. With experience in positive education, spirituality, music therapy, and "Waste to Best" initiatives, she empowers women and communities to live with confidence and purpose.' },
  { id: 2, name: 'SANDHYA KARN', position: 'Executive Chairman', image: '/team/team-2.png', bio: 'Sandhya Karn is a dedicated social entrepreneur and social psychologist working for positive transformation through awareness, compassion, and leadership. Known as the "Iron Lady for Positive Change."' },
  { id: 3, name: 'TARA NUPANE', position: 'CEO – Life Positive Mission', image: '/team/team-3.png', bio: 'Tara Nupane is a dynamic leader serving as CEO of Life Positive Mission. Known for her positive energy and compassion, she inspires transformation through wellness and purposeful action.' },
  { id: 4, name: 'BIKASH PARAJULI', position: 'Director – Resource Management', image: '/team/team-4.png', bio: 'Bikash Parajuli is a young entrepreneur serving as Director of Resource Management at Life Positive Mission. He brings execution power and commitment to social development.' },
  { id: 5, name: 'SRIJANA RANA', position: 'Program Director', image: '/team/team-5.png', bio: 'Srijana Rana is a passionate and dedicated leader committed to organizing impactful positive programs that inspire growth, awareness, and human transformation.' },
  { id: 6, name: 'RAJU BASYAL', position: 'Secretary', image: '/team/team-7.png', bio: 'Raju Basyal is a spiritually strong and highly motivated personality dedicated to positive transformation through spiritual wisdom and human connection.' },
  { id: 7, name: 'MEENA AGGRAWAL', position: 'Vice President', image: '/team/team-6.png', bio: 'Meena Aggrawal is a dedicated social entrepreneur and spiritual leader, serving as the Vice President of Life Positive Mission. She is deeply committed to women empowerment.' }
];

const socialIcons = [FaFacebook, FaTwitter, FaInstagram];

export default function TeamPage() {
  const [selected, setSelected] = useState<any>(null);

  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3, 6);
  const thirdRow = teamMembers.slice(6, 7);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* First Row - 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {firstRow.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative group">
                <div className="p-6 flex justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      type="avatar"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3 rounded-2xl">
                  {socialIcons.map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                  {member.position}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {member.name}
                </h3>
                <button
                  onClick={() => setSelected(member)}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row - 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {secondRow.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative group">
                <div className="p-6 flex justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      type="avatar"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3 rounded-2xl">
                  {socialIcons.map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                  {member.position}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {member.name}
                </h3>
                <button
                  onClick={() => setSelected(member)}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third Row - 1 member centered */}
        <div className="flex justify-center">
          {thirdRow.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative group">
                <div className="p-6 flex justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      type="avatar"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3 rounded-2xl">
                  {socialIcons.map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                  {member.position}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {member.name}
                </h3>
                <button
                  onClick={() => setSelected(member)}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b p-4 flex justify-between items-center">
                  <h5 className="text-xl font-bold">{selected.name} - Statement</h5>
                  <button onClick={() => setSelected(null)} className="p-2 rounded-full hover:bg-gray-100">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                    <OptimizedImage
                      src={selected.image}
                      alt={selected.name}
                      type="avatar"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-left leading-relaxed">
                    {selected.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}