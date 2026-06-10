'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Team Member Interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  social: { icon: any; link: string }[];
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'VANDANA KARN',
      position: 'Chairman – Nepal Chapter',
      image: '/team/team-1.png',
      bio: 'Vandana Karn is a visionary leader whose compassionate leadership motivates positive change. With experience in positive education, spirituality, music therapy, and "Waste to Best" initiatives, she empowers women and communities to live with confidence and purpose. Her love for nature and human values reflects her mission to spread positivity and peace. Through strengthening Bharat–Nepal relations, she inspires people to unite and build a better future with hope and harmony.',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
    {
      id: 2,
      name: 'SANDHYA KARN',
      position: 'Executive Chairman',
      image: '/team/team-2.png',
      bio: 'Sandhya Karn is a dedicated social entrepreneur and social psychologist working for positive transformation through awareness, compassion, and leadership. Known as the "Iron Lady for Positive Change," she supports initiatives focused on human values, mental wellness, women empowerment, social harmony, and Indo-Nepal friendship. Her vision is a society where positivity, wisdom, service, and humanity form the foundation of collective progress.\n\n"Positive thinking, compassionate action, and fearless leadership can transform society."',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
    {
      id: 3,
      name: 'TARA NUPANE',
      position: 'CEO – Life Positive Mission',
      image: '/team/team-3.png',
      bio: 'Tara Nupane is a dynamic leader serving as CEO of Life Positive Mission. Known for her positive energy and compassion, she inspires transformation through wellness and purposeful action. She believes true success begins with inner wellness, self-confidence, and a positive vision. Her mission is to build a future where positivity, service, humanity, and wellness guide personal and social transformation.\n\n"Positive energy has the power to heal minds, inspire hearts, and transform lives."',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
    {
      id: 4,
      name: 'BIKASH PARAJULI',
      position: 'Director – Resource Management',
      image: '/team/team-4.png',
      bio: 'Bikash Parajuli is a young entrepreneur serving as Director of Resource Management at Life Positive Mission. With practical leadership and grounded nature, he brings execution power and commitment to social development. He is dedicated to creating meaningful impact through organized resources and strategic planning. He contributes to strengthening Nepal–India relations and represents a new generation of leadership rooted in positivity and transformation.',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
    {
      id: 5,
      name: 'SRIJANA RANA',
      position: 'Program Director',
      image: '/team/team-5.png',
      bio: 'Srijana Rana is a passionate and dedicated leader committed to organizing impactful positive programs that inspire growth, awareness, and human transformation. With strong motivation, positive energy, and excellent coordination skills, she continuously contributes to the mission of spreading hope, wellness, and meaningful social change through the activities of Life Positive Mission.',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
    {
      id: 6,
      name: 'RAJU BASYAL',
      position: 'Secretary',
      image: '/team/team-7.png',
      bio: 'Raju Basyal is a spiritually strong and highly motivated personality dedicated to positive transformation through spiritual wisdom and human connection. He deeply understands the spiritual and cultural relationship between Nepal and Bharat, inspiring people through motivation, positivity, and values-based leadership. His dedication to spiritual growth and social harmony continues to strengthen the mission of creating a more conscious and positive society.',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
    {
      id: 7,
      name: 'MEENA AGGRAWAL',
      position: 'Vice President',
      image: '/team/team-6.png',
      bio: 'Meena Aggrawal is a dedicated social entrepreneur and spiritual leader, serving as the Vice President of Life Positive Mission. She is highly energetic and deeply committed to women empowerment, working consistently to inspire confidence, self-reliance, and positive transformation among women. Through her leadership and spiritual outlook, she contributes actively to building a stronger, more conscious, and empowered society.',
      social: [
        { icon: FaFacebook, link: 'https://www.facebook.com/' },
        { icon: FaTwitter, link: 'https://www.twitter.com/' },
        { icon: FaInstagram, link: 'https://www.instagram.com/' },
      ]
    },
  ];

  // Split team into rows: first 3, next 3, last 1 centered
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3, 6);
  const thirdRow = teamMembers.slice(6, 7);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Team Section */}
      <div className="team-page-section py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {firstRow.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="team-card"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative group overflow-hidden">
                    <div className="relative h-100 ">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        type="card"
                        className="group-hover:scale-110 p-20 rounded-full transition-transform duration-500"
                      />
                    </div>
                    {/* Social Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        {member.social.map((social, sidx) => (
                          <a
                            key={sidx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <social.icon size={18} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                      {member.position}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                      {member.name}
                    </h3>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Bio
                    </button>
                  </div>
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
                whileHover={{ y: -8 }}
                className="team-card"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative group overflow-hidden">
                    <div className="relative h-100 ">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        type="card"
                        className="group-hover:scale-110 p-20 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        {member.social.map((social, sidx) => (
                          <a
                            key={sidx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <social.icon size={18} />
                          </a>
                        ))}
                      </div>
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
                      onClick={() => setSelectedMember(member)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Bio
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Row - 1 member centered */}
          <div className="flex justify-center">
            {thirdRow.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="w-full md:w-1/2 lg:w-1/3 team-card"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative group overflow-hidden">
                    <div className="relative h-100 ">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        type="card"
                        className="group-hover:scale-110 p-20 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        {member.social.map((social, sidx) => (
                          <a
                            key={sidx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <social.icon size={18} />
                          </a>
                        ))}
                      </div>
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
                      onClick={() => setSelectedMember(member)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Bio
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedMember.name} - Statement
                  </h5>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 text-center">
                  <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                    <OptimizedImage
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      type="avatar"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    {selectedMember.bio.split('\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                        {paragraph}
                        {paragraph.includes('"') && (
                          <span className="block text-orange-500 italic mt-2">
                            {paragraph.match(/"([^"]+)"/)?.[0]}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}