'use client';

import { memo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { updateHomeSection } from '@/lib/supabase/homepage';
import { Loader2, Save, X, Plus, Trash2 } from 'lucide-react';

interface GetInvolvedFormProps {
  sectionKey: string;
  initialData: any;
}

const iconOptions = ['Users', 'Heart', 'Target', 'Award', 'Globe', 'Star', 'Calendar', 'Clock'];

const GetInvolvedForm = memo(function GetInvolvedForm({ sectionKey, initialData }: GetInvolvedFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handleCardChange = useCallback((index: number, field: string, value: any) => {
    setFormData((prev: any) => {
      const newCards = [...(prev.cards || [])];
      newCards[index] = { ...newCards[index], [field]: value };
      return { ...prev, cards: newCards };
    });
  }, []);

  const addCard = useCallback(() => {
    setFormData((prev: any) => ({
      ...prev,
      cards: [...(prev.cards || []), { icon: 'Users', title: '', description: '', color: 'from-orange-500 to-red-500', link: '/', btnText: 'Learn More' }],
    }));
  }, []);

  const removeCard = useCallback((index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      cards: prev.cards.filter((_: any, i: number) => i !== index),
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateHomeSection(sectionKey, formData);
      setSuccess('Get Involved section updated successfully! 🎉');
      router.refresh();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [sectionKey, formData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-6 max-w-4xl">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-orange-600">Get Involved Section</h3>
        <p className="text-sm text-gray-500 mt-1">Edit get involved section content</p>
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
        <label className="block text-sm font-medium mb-1">Cards</label>
        {(formData.cards || []).map((card: any, index: number) => (
          <div key={index} className="border rounded-lg p-4 mb-3 bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-700">Card {index + 1}</h4>
              <button type="button" onClick={() => removeCard(index)} className="p-1.5 text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-1">Title</label>
                <input type="text" value={card.title || ''} onChange={(e) => handleCardChange(index, 'title', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Icon</label>
                <select value={card.icon || 'Users'} onChange={(e) => handleCardChange(index, 'icon', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none">
                  {iconOptions.map((icon) => <option key={icon} value={icon}>{icon}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium mb-1">Description</label>
                <textarea value={card.description || ''} onChange={(e) => handleCardChange(index, 'description', e.target.value)} rows={2} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Link</label>
                <input type="text" value={card.link || ''} onChange={(e) => handleCardChange(index, 'link', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Button Text</label>
                <input type="text" value={card.btnText || ''} onChange={(e) => handleCardChange(index, 'btnText', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={addCard} className="flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium"><Plus size={16} /> Add Card</button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
      {success && <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">{success}</div>}

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button type="submit" disabled={loading} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : <><Save size={16} /> Save Changes</>}
        </button>
        <button type="button" onClick={() => router.push('/admin/homepage')} className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300"><X size={16} /> Cancel</button>
      </div>
    </form>
  );
});

GetInvolvedForm.displayName = 'GetInvolvedForm';
export default GetInvolvedForm;