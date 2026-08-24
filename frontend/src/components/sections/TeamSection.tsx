'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image_url: string;
}

interface TeamSectionProps {
  data?: {
    title?: string;
    subtitle?: string;
    members?: TeamMember[];
  };
}

const defaultMembers: TeamMember[] = [
  {
    name: 'Santosh Prasain',
    role: 'Social Activist',
    bio: 'A dedicated youth volunteer passionate about leadership, community service, and positive social transformation through awareness and educational programs.',
    image_url: '/images/home/45.jpg',
  },
  {
    name: 'Ishwar Bhandari',
    role: 'Event Manager',
    bio: 'An active volunteer focused on empowering youth, promoting positive thinking, and supporting community development initiatives with compassion and teamwork.',
    image_url: '/images/home/44.jpg',
  },
];

export default function TeamSection({ data }: TeamSectionProps) {
  const title = data?.title || 'Volunteer of the Year';
  const subtitle = data?.subtitle || 'Power of Positive Energy';
  const members = data?.members?.length ? data.members : defaultMembers;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex gap-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden shrink-0">
                <OptimizedImage
                  src={member.image_url}
                  sizes="160px"
                  priority={true}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <span className="text-orange-500 text-sm font-medium">{member.role}</span>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold"
          >
            View All Members <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}