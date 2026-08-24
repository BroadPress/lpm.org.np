'use client';

import { memo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { updateHomeSection } from '@/lib/supabase/homepage';
import { Loader2, Save, X, Plus, Trash2 } from 'lucide-react';

interface PartnersFormProps {
  sectionKey: string;
  initialData: any;
}

const PartnersForm = memo(function PartnersForm({ sectionKey, initialData }: PartnersFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handlePartnerChange = useCallback((index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const newPartners = [...(prev.partners || [])];
      newPartners[index] = { ...newPartners[index], [field]: value };
      return { ...prev, partners: newPartners };
    });
  }, []);

  const addPartner = useCallback(() => {
    setFormData((prev: any) => ({
      ...prev,
      partners: [...(prev.partners || []), { logo: '', name: '' }],
    }));
  }, []);

  const removePartner = useCallback((index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      partners: prev.partners.filter((_: any, i: number) => i !== index),
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateHomeSection(sectionKey, formData);
      setSuccess('Partners section updated successfully! 🎉');
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
        <h3 className="text-lg font-semibold text-orange-600">Partners Section</h3>
        <p className="text-sm text-gray-500 mt-1">Edit partners section content</p>
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
        <label className="block text-sm font-medium mb-1">Partners</label>
        {(formData.partners || []).map((partner: any, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <input type="text" value={partner.logo || ''} onChange={(e) => handlePartnerChange(index, 'logo', e.target.value)} className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="Logo URL" />
            <input type="text" value={partner.name || ''} onChange={(e) => handlePartnerChange(index, 'name', e.target.value)} className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="Partner Name" />
            <button type="button" onClick={() => removePartner(index)} className="p-2 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
          </div>
        ))}
        <button type="button" onClick={addPartner} className="flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium"><Plus size={16} /> Add Partner</button>
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

PartnersForm.displayName = 'PartnersForm';
export default PartnersForm;