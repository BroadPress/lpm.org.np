import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, CalendarDays, CheckCircle2 } from 'lucide-react';
import { getEventBySlug, eventDetails } from '../event-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Details',
    };
  }

  return {
    title: event.title,
    description: event.shortDescription,
    openGraph: {
      title: `${event.title} | Life Positive Mission`,
      description: event.shortDescription,
      images: [event.image],
    },
  };
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = eventDetails.filter((item) => item.slug !== event.slug).slice(0, 3);

  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={event.image} alt={event.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Events
            </Link>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/85 backdrop-blur-sm">
              <CalendarDays size={14} />
              Event Details
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/85">{event.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <Clock size={16} />
                {event.time}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {event.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {event.date.day} {event.date.month} {event.date.year}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
              >
                {event.ctaLabel}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
              <p className="mt-4 text-base leading-8 text-gray-700 dark:text-gray-300">
                {event.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Objectives</h2>
              <div className="mt-4 space-y-3">
                {event.objectives.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 dark:border-gray-800 dark:bg-gray-900/60"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-orange-500" size={18} />
                    <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Program Agenda</h2>
              <ol className="mt-4 space-y-3">
                {event.agenda.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-gray-200 px-4 py-4 dark:border-gray-800"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-gray-700 dark:text-gray-300">{item}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/60">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Who Can Attend</h2>
              <ul className="mt-4 space-y-3">
                {event.audience.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/60">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Expected Outcomes</h2>
              <ul className="mt-4 space-y-3">
                {event.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-orange-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white">
              <h2 className="text-xl font-bold">Join This Event</h2>
              <p className="mt-3 text-sm leading-7 text-white/90">
                If this event fits your interest, join the program and be part of a meaningful community
                experience.
              </p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd5oi9ujlXHfxByvYI7iuAjbCWFtgRrCsN62PrwjFL2ABSPCg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-orange-600"
              >
                {event.ctaLabel}
              </Link>
            </section>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Events</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedEvents.map((item) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-orange-200 dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                  {item.date.day} {item.date.month}
                </p>
                <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
