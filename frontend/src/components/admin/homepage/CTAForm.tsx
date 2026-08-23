// src/components/admin/homepage/CTAForm.tsx
'use client';

import { memo, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { updateHomeSection, uploadHomeImage, deleteHomeImage } from '@/lib/supabase/homepage';
import { Loader2, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface CTAFormProps {
  sectionKey: string;
  initialData: any;
}

const CTAForm = memo(function CTAForm({ sectionKey, initialData }: CTAFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Please upload an image file'); return; }
    if (file.size > 15 * 1024 * 1024) { setError('Image size should be less than 15MB'); return; }

    setUploading(true);
    setError('');
    try {
      const url = await uploadHomeImage(file, 'cta');
      handleChange('image_url', url);
      setSuccess('Image uploaded successfully! 🎉');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }, [handleChange]);

  const handleRemoveImage = useCallback(async () => {
    if (formData.image_url) {
      try {
        await deleteHomeImage(formData.image_url);
        handleChange('image_url', '');
        setSuccess('Image removed successfully! 🎉');
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to remove image. Please try again.');
      }
    }
  }, [formData.image_url]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateHomeSection(sectionKey, formData);
      setSuccess('CTA section updated successfully! 🎉');
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
        <h3 className="text-lg font-semibold text-orange-600">Call to Action Section</h3>
        <p className="text-sm text-gray-500 mt-1">Edit CTA section content</p>
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
        <textarea value={formData.description || ''} onChange={(e) => handleChange('description', e.target.value)} rows={3} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Button Text</label>
        <input type="text" value={formData.button_text || ''} onChange={(e) => handleChange('button_text', e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Image</label>
        {formData.image_url ? (
          <div className="space-y-2">
            <div className="relative w-full max-w-xs h-48 rounded-lg overflow-hidden border"><OptimizedImage src={formData.image_url} alt="Preview" fill className="object-cover" /></div>
            <div className="flex gap-2">
              <button type="button" onClick={handleRemoveImage} className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">Remove</button>
              <label className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 cursor-pointer">Change<input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} /></label>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full max-w-xs h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center"><ImageIcon className="w-8 h-8 text-gray-400 mb-2" /><p className="text-sm text-gray-500">Click to upload image</p><p className="text-xs text-gray-400">PNG, JPG, WEBP (max 15MB)</p></div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
          </label>
        )}
        {uploading && <div className="flex items-center gap-2 text-sm text-gray-500"><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</div>}
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

CTAForm.displayName = 'CTAForm';
export default CTAForm;