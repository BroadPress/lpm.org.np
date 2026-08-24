'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getAllEvents, getFeaturedEvents, Event } from '@/lib/supabase/events';

export default function EventsClient() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);
  const [regularEvents, setRegularEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [featured, allEvents] = await Promise.all([
          getFeaturedEvents(),
          getAllEvents(),
        ]);
        setFeaturedEvents(featured);
        // Get regular events (non-featured)
        const regular = allEvents.filter(e => !e.is_featured);
        setRegularEvents(regular);
      } catch (error) {
        console.error('Error fetching events:', error);
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

  // Split regular events into two rows
  const firstRowEvents = regularEvents.slice(0, 3);
  const secondRowEvents = regularEvents.slice(3, 6);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* First Row */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            {featuredEvents.length > 0 && (
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <OptimizedImage
                  src={featuredEvents[0].image_url || '/images/events/1.jpg'}
                  alt={featuredEvents[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-4 py-2">
                  <h4 className="text-white font-bold">{featuredEvents[0].date_day}</h4>
                  <h5 className="text-white text-sm">{featuredEvents[0].date_month}</h5>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{featuredEvents[0].title}</h3>
                  <div className="flex items-center gap-2 my-2 flex-wrap">
                    <Clock size={14} />
                    <span>{featuredEvents[0].time}</span>
                    <MapPin size={14} />
                    <span>{featuredEvents[0].location}</span>
                  </div>
                  <p className="text-sm mb-4 line-clamp-2">{featuredEvents[0].description}</p>
                  <div className="flex gap-3 flex-wrap">
                    <Link href="/donate" className="px-5 py-2 bg-orange-500 rounded-lg text-white">
                      Donate Now
                    </Link>
                    <Link href="/events" className="px-5 py-2 border-2 rounded-lg">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-7 space-y-4">
            {firstRowEvents.map((event, idx) => (
              <div
                key={idx}
                className="mt-6 flex items-stretch bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:border-orange-200 transition-colors"
              >
                <div className="flex flex-col items-center justify-center min-w-[72px] px-3 py-4 bg-gradient-to-b from-orange-500 to-pink-500 shrink-0">
                  <span className="text-white font-bold text-2xl leading-none">
                    {event.date_day?.replace(/\D/g, '') || ''}
                  </span>
                  <span className="text-white/85 text-[11px] font-semibold tracking-wider mt-1 uppercase">
                    {event.date_month || ''}
                  </span>
                </div>
                <div className="flex-1 px-5 py-4 min-w-0">
                  <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-1.5">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        {secondRowEvents.length > 0 && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              {secondRowEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="mt-6 flex items-stretch bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:border-orange-200 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center min-w-[72px] px-3 py-4 bg-gradient-to-b from-orange-500 to-pink-500 shrink-0">
                    <span className="text-white font-bold text-2xl leading-none">
                      {event.date_day?.replace(/\D/g, '') || ''}
                    </span>
                    <span className="text-white/85 text-[11px] font-semibold tracking-wider mt-1 uppercase">
                      {event.date_month || ''}
                    </span>
                  </div>
                  <div className="flex-1 px-5 py-4 min-w-0">
                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-1.5">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5">
              {featuredEvents.length > 1 && (
                <div className="relative rounded-2xl overflow-hidden h-[500px]">
                  <OptimizedImage
                    src={featuredEvents[1].image_url || '/images/events/2.jpg'}
                    alt={featuredEvents[1].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-4 py-2">
                    <h4 className="text-white font-bold">{featuredEvents[1].date_day}</h4>
                    <h5 className="text-white text-sm">{featuredEvents[1].date_month}</h5>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{featuredEvents[1].title}</h3>
                    <div className="flex items-center gap-2 my-2 flex-wrap">
                      <Clock size={14} />
                      <span>{featuredEvents[1].time}</span>
                      <MapPin size={14} />
                      <span>{featuredEvents[1].location}</span>
                    </div>
                    <p className="text-sm mb-4 line-clamp-2">{featuredEvents[1].description}</p>
                    <div className="flex gap-3 flex-wrap">
                      <Link href="/donate" className="px-5 py-2 bg-orange-500 rounded-lg text-white">
                        Donate Now
                      </Link>
                      <Link href="/events" className="px-5 py-2 border-2 rounded-lg">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="relative mt-16 py-20 rounded-2xl overflow-hidden">
          <OptimizedImage
            src="/images/events/2.jpg"
            alt="CTA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-800/70" />
          <div className="relative text-center text-white px-4">
            <h2 className="text-3xl font-bold">
              We&apos;ve funded 12,503 charity projects for 25M people
            </h2>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
              target="_blank"
              className="inline-block mt-6 px-8 py-3 bg-white text-orange-500 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Get Involved Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}