'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Leadership Training',
    description: 'A transformational leadership training program focused on self-management, positive thinking, communication skills, teamwork, and youth empowerment to develop responsible and visionary leaders for society.',
    image: '/gallery/8.jpg',
    author: 'Life Positive Mission',
    date: 'August 17, 2025',
    category: 'Training',
  },
  {
    title: 'Traffic Awareness Program',
    description: 'A public awareness initiative designed to educate citizens, students, and drivers about road safety, traffic discipline & responsible driving.',
    image: '/gallery/19.jpg',
    author: 'Life Positive Mission',
    date: 'September 17, 2025',
    category: 'Awareness',
  },
  {
    title: 'Entrepreneurship Award',
    description: 'A prestigious recognition program honoring innovative entrepreneurs, startup founders, and business leaders who are contributing to economic growth, employment generation, and positive social impact.',
    image: '/gallery/31.jpg',
    author: 'Life Positive Mission',
    date: 'March 17, 2026',
    category: 'Award',
  },
];

const BlogPost = ({ post, index }: { post: any; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative h-56 overflow-hidden">
      <OptimizedImage src={post.image} alt={post.title}  className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
        {post.category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    </div>
  </motion.article>
);

export default function BlogSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-orange-500 font-semibold tracking-wide uppercase">Latest Updates</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">News & Updates</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <BlogPost key={idx} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}