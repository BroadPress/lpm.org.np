import { Metadata } from 'next';
import { EventForm } from '@/components/admin/events/EventForm';

export const metadata: Metadata = {
  title: 'Add Event | LPM Admin',
  description: 'Add a new event',
};

export default function CreateEventPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Add Event</h2>
          <p className="text-sm text-gray-500 mt-1">Add a new event</p>
        </div>
      </div>
      <EventForm />
    </div>
  );
}