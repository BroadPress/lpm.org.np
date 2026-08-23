// src/components/admin/homepage/UpcomingEventsForm.tsx
'use client';

import { memo, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { updateHomeSection, uploadEventImage, deleteEventImage } from '@/lib/supabase/homepage';
import { Loader2, Save, X, Plus, Trash2, Upload } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface UpcomingEventsFormProps {
  sectionKey: string;
  initialData: any;
}

const UpcomingEventsForm = memo(function UpcomingEventsForm({ sectionKey, initialData }: UpcomingEventsFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handleFeaturedChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      featured_event: { ...prev.featured_event, [field]: value },
    }));
  }, []);

  const handleEventChange = useCallback((index: number, field: string, value: any) => {
    setFormData((prev: any) => {
      const newEvents = [...(prev.events || [])];
      newEvents[index] = { ...newEvents[index], [field]: value };
      return { ...prev, events: newEvents };
    });
  }, []);

  const addEvent = useCallback(() => {
    setFormData((prev: any) => ({
      ...prev,
      events: [...(prev.events || []), { title: '', date: { day: '', month: '' }, time: '', location: '', description: '', isFeatured: false }],
    }));
  }, []);

  const removeEvent = useCallback((index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      events: prev.events.filter((_: any, i: number) => i !== index),
    }));
  }, []);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Please upload an image file'); return; }
    if (file.size > 15 * 1024 * 1024) { setError('Image size should be less than 15MB'); return; }

    setUploading(true);
    setUploadingIndex(index !== undefined ? index : -1);
    setError('');
    try {
      const url = await uploadEventImage(file, `event-${Date.now()}`);
      if (field === 'featured_event') {
        handleFeaturedChange('image_url', url);
      } else if (index !== undefined) {
        handleEventChange(index, 'image_url', url);
      }
      setSuccess('Image uploaded successfully! 🎉');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
      setUploadingIndex(null);
      const key = field === 'featured_event' ? 'featured' : `${index}`;
      if (fileInputRefs.current[key]) fileInputRefs.current[key]!.value = '';
    }
  }, []);

  const handleRemoveImage = useCallback(async (field: string, imageUrl: string, index?: number) => {
    if (imageUrl) {
      try {
        await deleteEventImage(imageUrl);
        if (field === 'featured_event') {
          handleFeaturedChange('image_url', '');
        } else if (index !== undefined) {
          handleEventChange(index, 'image_url', '');
        }
        setSuccess('Image removed successfully! 🎉');
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to remove image. Please try again.');
      }
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateHomeSection(sectionKey, formData);
      setSuccess('Upcoming Events section updated successfully! 🎉');
      router.refresh();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [sectionKey, formData, router]);

  const renderEventFields = (event: any, index: number, isFeatured: boolean) => (
    <div key={index} className="border rounded-lg p-4 mb-4 bg-gray-50">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-700">{isFeatured ? '⭐ Featured Event' : `Event ${index + 1}`}</h4>
        {!isFeatured && (
          <button type="button" onClick={() => removeEvent(index)} className="p-1.5 text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium mb-1">Title</label>
          <input type="text" value={event.title || ''} onChange={(e) => isFeatured ? handleFeaturedChange('title', e.target.value) : handleEventChange(index, 'title', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Date (Day)</label>
          <input type="text" value={event.date?.day || ''} onChange={(e) => isFeatured ? handleFeaturedChange('date', { ...event.date, day: e.target.value }) : handleEventChange(index, 'date', { ...event.date, day: e.target.value })} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="15th" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Date (Month)</label>
          <input type="text" value={event.date?.month || ''} onChange={(e) => isFeatured ? handleFeaturedChange('date', { ...event.date, month: e.target.value }) : handleEventChange(index, 'date', { ...event.date, month: e.target.value })} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="AUG" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Time</label>
          <input type="text" value={event.time || ''} onChange={(e) => isFeatured ? handleFeaturedChange('time', e.target.value) : handleEventChange(index, 'time', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-1">Location</label>
          <input type="text" value={event.location || ''} onChange={(e) => isFeatured ? handleFeaturedChange('location', e.target.value) : handleEventChange(index, 'location', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-1">Description</label>
          <textarea value={event.description || ''} onChange={(e) => isFeatured ? handleFeaturedChange('description', e.target.value) : handleEventChange(index, 'description', e.target.value)} rows={2} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium mb-1">Image</label>
          {event.image_url ? (
            <div className="flex items-center gap-3">
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border"><OptimizedImage src={event.image_url} alt="Event" fill className="object-cover" /></div>
              <button type="button" onClick={() => handleRemoveImage(isFeatured ? 'featured_event' : 'events', event.image_url, isFeatured ? undefined : index)} className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">Remove</button>
              <label className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 cursor-pointer">Change<input ref={(el) => { const key = isFeatured ? 'featured' : `${index}`; fileInputRefs.current[key] = el; }} type="file" accept="image/*" onChange={(e) => handleImageUpload(e, isFeatured ? 'featured_event' : 'events', isFeatured ? undefined : index)} className="hidden" disabled={uploading} /></label>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-16 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
              <div className="flex items-center gap-2"><Upload size={14} /><span className="text-xs text-gray-500">Upload image</span></div>
              <input ref={(el) => { const key = isFeatured ? 'featured' : `${index}`; fileInputRefs.current[key] = el; }} type="file" accept="image/*" onChange={(e) => handleImageUpload(e, isFeatured ? 'featured_event' : 'events', isFeatured ? undefined : index)} className="hidden" disabled={uploading} />
            </label>
          )}
          {uploading && uploadingIndex === (isFeatured ? -1 : index) && <Loader2 className="w-3 h-3 animate-spin text-orange-500" />}
        </div>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-6 max-w-4xl">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-orange-600">Upcoming Events Section</h3>
        <p className="text-sm text-gray-500 mt-1">Edit upcoming events content</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input type="text" value={formData.title || ''} onChange={(e) => handleChange('title', e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Subtitle</label>
        <input type="text" value={formData.subtitle || ''} onChange={(e) => handleChange('subtitle', e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea value={formData.description || ''} onChange={(e) => handleChange('description', e.target.value)} rows={2} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
      </div>

      {/* Featured Event */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-semibold text-orange-600 mb-3">⭐ Featured Event</h3>
        {formData.featured_event && renderEventFields(formData.featured_event, 0, true)}
      </div>

      {/* Regular Events */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-orange-600">📅 Regular Events</h3>
          <button type="button" onClick={addEvent} className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700"><Plus size={16} /> Add Event</button>
        </div>
        {(formData.events || []).map((event: any, index: number) => renderEventFields(event, index, false))}
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
      {success && <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">{success}</div>}

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button type="submit" disabled={loading || uploading} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : <><Save size={16} /> Save Changes</>}
        </button>
        <button type="button" onClick={() => router.push('/admin/homepage')} className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300"><X size={16} /> Cancel</button>
      </div>
    </form>
  );
});

UpcomingEventsForm.displayName = 'UpcomingEventsForm';
export default UpcomingEventsForm;