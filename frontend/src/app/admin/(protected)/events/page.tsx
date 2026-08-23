'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getAllEventsAdmin, deleteEvent, Event } from '@/lib/supabase/events';
import { Pencil, Trash2, Plus, Loader2, Eye } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const loadEvents = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllEventsAdmin();
      setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this event? This action cannot be undone.')) return;
    
    setDeleting(id);
    try {
      const event = events.find(e => e.id === id);
      if (event?.image_url) {
        // Image deletion handled separately if needed
      }
      await deleteEvent(id);
      await loadEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete. Please try again.');
    } finally {
      setDeleting(null);
    }
  }, [events, loadEvents]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Events</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage all events</p>
        </div>
        <Link
          href="/admin/events/create"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          <Plus size={16} /> Add Event
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No events yet.</p>
          <Link
            href="/admin/events/create"
            className="inline-block mt-4 text-orange-500 hover:underline"
          >
            Create your first event →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3 hidden md:table-cell">Date</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Featured</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <OptimizedImage
                            src={event.image_url || '/images/placeholder.jpg'}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">{event.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-600">
                      {event.date_day} {event.date_month}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {event.is_featured ? (
                        <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-700">⭐ Featured</span>
                      ) : (
                        <span className="text-gray-400 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`px-2 py-1 rounded-full text-xs ${event.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {event.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/events/edit/${event.id}`}
                          className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(event.id)}
                          disabled={deleting === event.id}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deleting === event.id ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}