// src/components/admin/homepage/TeamForm.tsx
'use client';

import { memo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { updateHomeSection } from '@/lib/supabase/homepage';
import { Loader2, Save, X, Plus, Trash2 } from 'lucide-react';

interface TeamFormProps {
  sectionKey: string;
  initialData: any;
}

const TeamForm = memo(function TeamForm({ sectionKey, initialData }: TeamFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handleMemberChange = useCallback((index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const newMembers = [...(prev.members || [])];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return { ...prev, members: newMembers };
    });
  }, []);

  const addMember = useCallback(() => {
    setFormData((prev: any) => ({
      ...prev,
      members: [...(prev.members || []), { name: '', role: '', bio: '', image_url: '' }],
    }));
  }, []);

  const removeMember = useCallback((index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      members: prev.members.filter((_: any, i: number) => i !== index),
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateHomeSection(sectionKey, formData);
      setSuccess('Team section updated successfully! 🎉');
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
        <h3 className="text-lg font-semibold text-orange-600">Team Section</h3>
        <p className="text-sm text-gray-500 mt-1">Edit team section content</p>
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
        <label className="block text-sm font-medium mb-1">Members</label>
        {(formData.members || []).map((member: any, index: number) => (
          <div key={index} className="border rounded-lg p-4 mb-3 bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-700">Member {index + 1}</h4>
              <button type="button" onClick={() => removeMember(index)} className="p-1.5 text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-1">Name</label>
                <input type="text" value={member.name || ''} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Role</label>
                <input type="text" value={member.role || ''} onChange={(e) => handleMemberChange(index, 'role', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium mb-1">Bio</label>
                <textarea value={member.bio || ''} onChange={(e) => handleMemberChange(index, 'bio', e.target.value)} rows={2} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium mb-1">Image URL</label>
                <input type="text" value={member.image_url || ''} onChange={(e) => handleMemberChange(index, 'image_url', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="/images/path/to/image.jpg" />
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={addMember} className="flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium"><Plus size={16} /> Add Member</button>
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

TeamForm.displayName = 'TeamForm';
export default TeamForm;