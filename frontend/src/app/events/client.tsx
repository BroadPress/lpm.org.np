
'use client';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const listEvents = [
  { date: { day: '20th', month: 'AUG' }, title: 'Youth Empowerment Workshop', time: '10:00 am - 4:00 pm', location: 'LPM Training Hall, Kathmandu', desc: 'A workshop focused on developing leadership skills for youth.' },
  { date: { day: '25th', month: 'AUG' }, title: 'Spiritual Awakening Program', time: '6:00 am - 9:00 am', location: 'Pashupatinath Temple Area', desc: 'Guided meditation and mindfulness sessions.' },
  { date: { day: '10th', month: 'SEP' }, title: 'Entrepreneurship Development Meet', time: '1:00 pm - 5:00 pm', location: 'Kathmandu University Hall', desc: 'Connecting entrepreneurs with mentors.' },
  { date: { day: '15th', month: 'SEP' }, title: 'Leadership Training for Youth', time: '8:00 am - 12:30 pm', location: 'LPM Training Center', desc: 'Self-management and communication skills.' },
  { date: { day: '22nd', month: 'SEP' }, title: 'Traffic Awareness Campaign', time: '10:00 am - 2:00 pm', location: 'Major Intersections', desc: 'Road safety and traffic discipline.' },
  { date: { day: '5th', month: 'OCT' }, title: 'Cultural Harmony Meet', time: '4:00 pm - 7:00 pm', location: 'Nepal-India Friendship Hall', desc: 'Cultural understanding and exchange.' }
];

const featuredEvents = [
  { side: 'left', date: { day: '15th', month: 'AUG' }, title: 'Self Management Leadership', time: '8:00 am - 12:30 pm', location: 'Ananda Pashupati Dharmashala', desc: 'Creates responsible individuals who can lead by example.', image: '/events/1.jpg' },
  { side: 'right', date: { day: '12th', month: 'OCT' }, title: 'Volunteer Orientation Day', time: '11:00 am - 3:00 pm', location: 'Ananda Pashupati, Kathmandu', desc: 'Learn about projects and how to contribute.', image: '/events/2.jpg' }
];


export default function EventsClient() {
  const firstRowEvents = listEvents.slice(0, 3);
  const secondRowEvents = listEvents.slice(3, 6);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* First Row */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <OptimizedImage src={featuredEvents[0].image} alt={featuredEvents[0].title} type="hero" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-4 py-2"><h4 className="text-white font-bold">15th</h4><h5 className="text-white text-sm">AUG</h5></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{featuredEvents[0].title}</h3>
                <div className="flex items-center gap-2 my-2"><Clock size={14} /><span>{featuredEvents[0].time}</span><MapPin size={14} /><span>{featuredEvents[0].location}</span></div>
                <p className="text-sm mb-4">{featuredEvents[0].desc}</p>
                <div className="flex gap-3"><Link href="/donate" className="px-5 py-2 bg-orange-500 rounded-lg">Donate Now</Link><Link href="/events" className="px-5 py-2 border-2 rounded-lg">View Details</Link></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {firstRowEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow flex flex-col sm:flex-row">
                <div className="sm:w-28 bg-gradient-to-br from-orange-500 to-pink-500 p-4 text-center">
                  <h4 className="text-white font-bold text-xl">{event.date.day}</h4>
                  <h5 className="text-white/90 text-sm">{event.date.month}</h5></div>
                <div className="flex-1 p-5">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 my-1">
                    <Clock size={14} /><span>{event.time}</span>
                    <MapPin size={14} />
                    <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{event.desc}</p>
                    </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            {secondRowEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow flex flex-col sm:flex-row">
                <div className="sm:w-28 bg-gradient-to-br from-orange-500 to-pink-500 p-4 text-center"><h4 className="text-white font-bold text-xl">{event.date.day}</h4><h5 className="text-white/90 text-sm">{event.date.month}</h5></div>
                <div className="flex-1 p-5"><h3 className="text-lg font-bold">{event.title}</h3><div className="flex items-center gap-2 text-sm text-gray-500 my-1"><Clock size={14} /><span>{event.time}</span><MapPin size={14} /><span>{event.location}</span></div><p className="text-gray-600 text-sm">{event.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <OptimizedImage src={featuredEvents[1].image} alt={featuredEvents[1].title} type="hero" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-4 py-2"><h4 className="text-white font-bold">12th</h4><h5 className="text-white text-sm">OCT</h5></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{featuredEvents[1].title}</h3>
                <div className="flex items-center gap-2 my-2"><Clock size={14} /><span>{featuredEvents[1].time}</span><MapPin size={14} /><span>{featuredEvents[1].location}</span></div>
                <p className="text-sm mb-4">{featuredEvents[1].desc}</p>
                <div className="flex gap-3"><Link href="/donate" className="px-5 py-2 bg-orange-500 rounded-lg">Donate Now</Link><Link href="/events" className="px-5 py-2 border-2 rounded-lg">View Details</Link></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-16 py-20 rounded-2xl overflow-hidden">
          <OptimizedImage src="/events/2.jpg" alt="CTA" type="hero" className="object-cover" />
          <div className="absolute inset-0 bg-gray-800/70" />
          <div className="relative text-center text-white"><h2 className="text-3xl font-bold">We've funded 12,503 charity projects for 25M people</h2><Link href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform" target="_blank" className="inline-block mt-6 px-8 py-3 bg-white text-orange-500 rounded-xl font-semibold">Get Involved Now</Link></div>
        </div>
      </div>
    </div>
  );
}