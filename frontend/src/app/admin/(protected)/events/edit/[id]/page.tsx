// src/app/admin/events/edit/[id]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEventById } from '@/lib/supabase/events';
import { EventForm } from '@/components/admin/events/EventForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit Event | LPM Admin',
  description: 'Edit event details',
};

const getEvent = cache(async (id: string) => {
  return await getEventById(id);
});

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit: {event.title}</h2>
          <p className="text-sm text-gray-500 mt-1">Update event details</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">
          {event.id}
        </span>
      </div>
      <EventForm initialData={event} />
    </div>
  );
}