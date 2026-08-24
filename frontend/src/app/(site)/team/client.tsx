'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getAllTeamMembers, TeamMember } from '@/lib/supabase/team';

const socialIcons = [FaFacebook, FaTwitter, FaInstagram];

export default function TeamClient() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllTeamMembers();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
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

  // Split into rows
  const firstRow = members.slice(0, 3);
  const secondRow = members.slice(3, 6);
  const thirdRow = members.slice(6, 7);

  const renderMemberCard = (member: TeamMember) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative group">
        <div className="p-6 flex justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500">
            <OptimizedImage
              src={member.image_url || '/images/placeholder.jpg'}
              alt={member.name}
              fill
              sizes="160px"
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
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Meet Our Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Dedicated leaders and volunteers committed to building a positive, conscious, and spiritually awakened world.
          </p>
        </motion.div>

        {members.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No team members found.</p>
          </div>
        ) : (
          <>
            {/* First Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {firstRow.map(renderMemberCard)}
            </div>

            {/* Second Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {secondRow.map(renderMemberCard)}
            </div>

            {/* Third Row - 1 member centered */}
            {thirdRow.length > 0 && (
              <div className="flex justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                  {thirdRow.map(renderMemberCard)}
                </div>
              </div>
            )}
          </>
        )}
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
                      src={selected.image_url || '/images/placeholder.jpg'}
                      alt={selected.name}
                      fill
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