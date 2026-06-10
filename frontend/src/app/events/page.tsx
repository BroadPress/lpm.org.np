'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';


interface EventItem {
  date: { day: string; month: string };
  title: string;
  time: string;
  location: string;
  description: string;
  isFeatured?: boolean;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function EventsPage() {
  // Featured Event - Left Side (First Row)
  const featuredEventLeft: EventItem = {
    date: { day: '15th', month: 'AUG' },
    title: 'Self Management Leadership',
    time: '8:00 am - 12:30 pm',
    location: 'Ananda Pashupati Dharmashala',
    description: 'It is widely used in youth development, entrepreneurship, and organizational growth because it creates responsible individuals who can lead by example.',
    isFeatured: true,
    image: '/events/1.jpg',
    buttonText: 'Donate Now',
    buttonLink: '/donate'
  };

  // List Events - Right Side (First Row)
  const listEventsFirstRow: EventItem[] = [
    {
      date: { day: '20th', month: 'AUG' },
      title: 'Youth Empowerment Workshop',
      time: '10:00 am - 4:00 pm',
      location: 'LPM Training Hall, Kathmandu',
      description: 'A workshop focused on developing leadership skills, positive mindset, and career guidance for the youth of Nepal.'
    },
    {
      date: { day: '25th', month: 'AUG' },
      title: 'Spiritual Awakening Program',
      time: '6:00 am - 9:00 am',
      location: 'Pashupatinath Temple Area',
      description: 'Discover the power of positive energy and spiritual growth through our guided meditation and mindfulness sessions.'
    },
    {
      date: { day: '10th', month: 'SEP' },
      title: 'Entrepreneurship Development Meet',
      time: '1:00 pm - 5:00 pm',
      location: 'Kathmandu University Hall',
      description: 'Connecting aspiring entrepreneurs with mentors to foster innovation and business growth in local communities.'
    }
  ];

  // List Events - Left Side (Second Row)
  const listEventsSecondRow: EventItem[] = [
    {
      date: { day: '15th', month: 'SEP' },
      title: 'Leadership Training for Youth',
      time: '8:00 am - 12:30 pm',
      location: 'LPM Training Center, Kathmandu',
      description: 'A transformational program focused on self-management, positive thinking, and communication skills to develop future leaders.'
    },
    {
      date: { day: '22nd', month: 'SEP' },
      title: 'Traffic Awareness Campaign',
      time: '10:00 am - 2:00 pm',
      location: 'Major Intersections, Kathmandu',
      description: 'A public initiative to educate citizens about road safety and traffic discipline in collaboration with local authorities.'
    },
    {
      date: { day: '5th', month: 'OCT' },
      title: 'Cultural Harmony Meet',
      time: '4:00 pm - 7:00 pm',
      location: 'Nepal-India Friendship Hall',
      description: 'Promoting human connection and cultural understanding through spiritual and social exchange programs.'
    }
  ];

  // Featured Event - Right Side (Second Row)
  const featuredEventRight: EventItem = {
    date: { day: '12th', month: 'OCT' },
    title: 'Volunteer Orientation Day',
    time: '11:00 am - 3:00 pm',
    location: 'Ananda Pashupati, Kathmandu',
    description: 'Join our mission! Learn about our upcoming projects and how you can contribute to social transformation.',
    isFeatured: true,
    image: '/events/2.jpg',
    buttonText: 'Donate Now',
    buttonLink: '/donate'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Events Section */}
      <section className="event-page-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* First Row: Featured Event (Left) + List Events (Right) */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Featured Event Card - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden group h-full">
                <div className="relative h-[500px] w-full">
                  <OptimizedImage
                    src={featuredEventLeft.image!}
                    alt={featuredEventLeft.title}
                    type="hero"
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-4 py-2 text-center shadow-lg z-10">
                  <h4 className="text-white font-bold text-2xl leading-tight">{featuredEventLeft.date.day}</h4>
                  <h5 className="text-white/90 text-sm font-semibold">{featuredEventLeft.date.month}</h5>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {featuredEventLeft.title}
                  </h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Clock size={14} className="text-orange-400" />
                      <span>{featuredEventLeft.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <MapPin size={14} className="text-orange-400" />
                      <span>{featuredEventLeft.location}</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {featuredEventLeft.description}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={featuredEventLeft.buttonLink}
                      className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                    >
                      {featuredEventLeft.buttonText}
                    </Link>
                    <Link
                      href="/events"
                      className="px-5 py-2 border-2 border-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              </div>
            </motion.div>

            {/* List Events - Right Side */}
            <div className="lg:col-span-7 space-y-4">
              {listEventsFirstRow.map((event, idx) => (
                <motion.div
                  key={idx}
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
                      <div className="space-y-1 mb-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock size={14} className="text-orange-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
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

          {/* Second Row: List Events (Left) + Featured Event (Right) */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* List Events - Left Side */}
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              {listEventsSecondRow.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
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
                      <div className="space-y-1 mb-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock size={14} className="text-orange-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
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

            {/* Featured Event Card - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden group h-full">
                <div className="relative h-[500px] w-full">
                  <OptimizedImage
                    src={featuredEventRight.image!}
                    alt={featuredEventRight.title}
                    type="hero"
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-4 py-2 text-center shadow-lg z-10">
                  <h4 className="text-white font-bold text-2xl leading-tight">{featuredEventRight.date.day}</h4>
                  <h5 className="text-white/90 text-sm font-semibold">{featuredEventRight.date.month}</h5>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {featuredEventRight.title}
                  </h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Clock size={14} className="text-orange-400" />
                      <span>{featuredEventRight.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <MapPin size={14} className="text-orange-400" />
                      <span>{featuredEventRight.location}</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {featuredEventRight.description}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href='/donate'
                      className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                    >
                      {featuredEventRight.buttonText}
                    </Link>
                    <Link
                      href="/events/volunteer-orientation"
                      className="px-5 py-2 border-2 border-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/assets/events/2.jpg"
            alt="Get Involved"
            type="hero"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-pink-900/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-300 font-semibold tracking-wide uppercase text-sm">
              GET INVOLVED NOW
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              We&apos;ve funded 12,503 charity projects for 25M people around the world
            </h2>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-500 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Involved Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}