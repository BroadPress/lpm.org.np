'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Heart, Target, ArrowRight } from 'lucide-react';

interface GetInvolvedCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  btnText: string;
}

interface GetInvolvedSectionProps {
  data?: {
    title?: string;
    subtitle?: string;
    cards?: GetInvolvedCard[];
  };
}

const iconMap: Record<string, any> = {
  Users: Users,
  Heart: Heart,
  Target: Target,
};

const defaultCards: GetInvolvedCard[] = [
  {
    icon: 'Users',
    title: 'Become a volunteer',
    description: 'Life Positive Mission integrates spirituality, life coaching, and leadership development to create real transformation.',
    color: 'from-orange-500 to-red-500',
    link: '/join-now',
    btnText: 'Join Us Now',
  },
  {
    icon: 'Heart',
    title: 'Donate to support',
    description: 'Life Positive Mission is a global human development initiative focused on positive energy and life transformation.',
    color: 'from-pink-500 to-rose-500',
    link: '/donate',
    btnText: 'Donate Now',
  },
  {
    icon: 'Target',
    title: 'Become a partner',
    description: 'Partner with us to create a positive, conscious, and spiritually awakened world.',
    color: 'from-purple-500 to-indigo-500',
    link: '/about',
    btnText: 'Learn More',
  },
];

export default function GetInvolvedSection({ data }: GetInvolvedSectionProps) {
  const title = data?.title || 'Make a difference today';
  const subtitle = data?.subtitle || 'Get Involve Now';
  const cards = data?.cards?.length ? data.cards : defaultCards;

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, idx) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href={item.link} className="inline-flex items-center gap-2 text-orange-500 font-semibold">
                    {item.btnText} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}