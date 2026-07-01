"use client";

import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { eventDetails } from "./event-data";

export default function EventsClient() {
  const featuredEvents = [eventDetails[0], eventDetails[3]];
  const topList = eventDetails.slice(1, 4);
  const bottomList = eventDetails.slice(4, 7);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <OptimizedImage
                src={featuredEvents[0].image}
                alt={featuredEvents[0].title}
                type="hero"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute left-4 top-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2">
                <h4 className="font-bold text-white">{featuredEvents[0].date.day}th</h4>
                <h5 className="text-sm text-white">{featuredEvents[0].date.month}</h5>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{featuredEvents[0].title}</h3>
                <div className="my-2 flex items-center gap-2 text-white/85">
                  <Clock size={14} />
                  <span>{featuredEvents[0].time}</span>
                  <MapPin size={14} />
                  <span>{featuredEvents[0].location}</span>
                </div>
                <p className="mb-4 text-sm text-white/80">{featuredEvents[0].shortDescription}</p>
                <div className="flex gap-3">
                  <Link href="/donate" className="rounded-lg bg-orange-500 px-5 py-2">
                    Donate Now
                  </Link>
                  <Link
                    href={`/events/${featuredEvents[0].slug}`}
                    className="rounded-lg border-2 px-5 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {topList.map((event) => (
              <div
                key={event.slug}
                className="mt-6 flex items-stretch overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-colors hover:border-orange-200"
              >
                <div className="flex min-w-[72px] flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-pink-500 px-3 py-4">
                  <span className="text-2xl font-bold leading-none text-white">
                    {event.date.day}
                  </span>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/85">
                    {event.date.month}
                  </span>
                </div>
                <div className="min-w-0 flex-1 px-5 py-4">
                  <h3 className="mb-1.5 text-[15px] font-semibold leading-snug text-gray-900">
                    {event.title}
                  </h3>
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-500"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            {bottomList.map((event) => (
              <div
                key={event.slug}
                className="mt-6 flex items-stretch overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-colors hover:border-orange-200"
              >
                <div className="flex min-w-[72px] flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-pink-500 px-3 py-4">
                  <span className="text-2xl font-bold leading-none text-white">
                    {event.date.day}
                  </span>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/85">
                    {event.date.month}
                  </span>
                </div>
                <div className="min-w-0 flex-1 px-5 py-4">
                  <h3 className="mb-1.5 text-[15px] font-semibold leading-snug text-gray-900">
                    {event.title}
                  </h3>
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-500"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <OptimizedImage
                src={featuredEvents[1].image}
                alt={featuredEvents[1].title}
                type="hero"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute left-6 top-6 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2">
                <h4 className="font-bold text-white">{featuredEvents[1].date.day}th</h4>
                <h5 className="text-sm text-white">{featuredEvents[1].date.month}</h5>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{featuredEvents[1].title}</h3>
                <div className="my-2 flex items-center gap-2 text-white/85">
                  <Clock size={14} />
                  <span>{featuredEvents[1].time}</span>
                  <MapPin size={14} />
                  <span>{featuredEvents[1].location}</span>
                </div>
                <p className="mb-4 text-sm text-white/80">{featuredEvents[1].shortDescription}</p>
                <div className="flex gap-3">
                  <Link href="/donate" className="rounded-lg bg-orange-500 px-5 py-2">
                    Donate Now
                  </Link>
                  <Link
                    href={`/events/${featuredEvents[1].slug}`}
                    className="rounded-lg border-2 px-5 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl py-20">
          <OptimizedImage
            src="/images/events/2.jpg"
            alt="CTA"
            type="hero"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-800/70" />
          <div className="relative text-center text-white">
            <h2 className="text-3xl font-bold">
              We&apos;ve funded 12,503 charity projects for 25M people
            </h2>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
              target="_blank"
              className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-orange-500"
            >
              Get Involved Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
