'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const upcomingEvents = [
  {
    id: 1,
    title: 'Self Management Leadership',
    date: { day: '15th', month: 'AUG' },
    time: '8:00 am - 12:30 pm',
    location: 'Ananda Pashupati Dharmashala',
    description: 'Transformational leadership program focused on self-management, positive thinking, and personal discipline. It creates responsible individuals who can lead by example, inspire trust, and maintain stability in challenging situations.',
    isFeatured: true,
    image: '/images/events/1.jpg'
  },
  {
    id: 2,
    title: 'Youth Empowerment Workshop',
    date: { day: '20th', month: 'AUG' },
    time: '10:00 am - 4:00 pm',
    location: 'LPM Training Hall, Kathmandu',
    description: 'A workshop focused on developing leadership skills, positive mindset, and career guidance for the youth of Nepal.',
    isFeatured: false
  },
  {
    id: 3,
    title: 'Spiritual Awakening Program',
    date: { day: '25th', month: 'AUG' },
    time: '6:00 am - 9:00 am',
    location: 'Pashupatinath Temple Area',
    description: 'Discover the power of positive energy and spiritual growth through guided meditation and mindfulness sessions.',
    isFeatured: false
  },
  {
    id: 4,
    title: 'Entrepreneurship Development Meet',
    date: { day: '10th', month: 'SEP' },
    time: '1:00 pm - 5:00 pm',
    location: 'Kathmandu University Hall',
    description: 'Connecting aspiring entrepreneurs with mentors to foster innovation and business growth in local communities.',
    isFeatured: false
  }
];

export default function UpcomingEvents() {
  const featuredEvent = upcomingEvents.find(e => e.isFeatured) ?? upcomingEvents[0];
  if (!featuredEvent) return null;
  const regularEvents = upcomingEvents.filter(e => !e.isFeatured);

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
            INVOLVE NOW
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Join our transformative events and be part of positive change
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Side - Featured Event Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl h-full"
            >
              <div className="relative h-[500px] w-full">
                <OptimizedImage
                  src={featuredEvent.image ?? '/images/events/1.jpg'}
                  alt={featuredEvent.title}
                  sizes='160px'
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              
              {/* Date Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-5 py-2 text-center shadow-lg z-10">
                <h4 className="text-white font-bold text-2xl leading-tight">{featuredEvent.date.day}</h4>
                <h5 className="text-white/90 text-sm font-semibold">{featuredEvent.date.month}</h5>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {featuredEvent.title}
                </h3>
                <div className="space-y-1.5  mb-2">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Clock size={14} className="text-orange-400" />
                    <span >{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin size={14} className="text-orange-400 shrink-0" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {featuredEvent.description}
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/donate"
                    className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/events"
                    className="px-5 py-2 border-2 border-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Regular Events List */}
          <div className="lg:col-span-7 space-y-4">
            {regularEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date Badge */}
                  <div className="sm:w-28 bg-gradient-to-br from-orange-500 to-pink-500 p-4 text-center flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2">
                    <h4 className="text-white font-bold text-xl">{event.date.day}</h4>
                    <h5 className="text-white/90 text-sm font-semibold">{event.date.month}</h5>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-2">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Clock size={14} className="text-orange-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={14} className="text-orange-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            Discover All Events <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}