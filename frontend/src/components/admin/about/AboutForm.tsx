// src/components/admin/about/AboutForm.tsx
'use client';

import { memo, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { updateAboutSection, uploadAboutImage, deleteAboutImage } from '@/lib/supabase/about';
import { Loader2, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface AboutFormProps {
  sectionKey: string;
  initialData: any;
}

const AboutForm = memo(function AboutForm({ sectionKey, initialData }: AboutFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError('Image size should be less than 15MB');
      return;
    }

    setUploading(true);
    setUploadingField(field);
    setError('');

    try {
      const folder = field === 'core_image' ? 'core' : 'hero';
      const url = await uploadAboutImage(file, folder);
      handleChange(field, url);
      setSuccess('Image uploaded successfully! 🎉');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      setUploadingField(null);
      if (fileInputRefs.current[field]) {
        fileInputRefs.current[field]!.value = '';
      }
    }
  }, [handleChange]);

  const handleRemoveImage = useCallback(async (field: string) => {
    const imageUrl = formData[field];
    if (imageUrl) {
      try {
        await deleteAboutImage(imageUrl);
        handleChange(field, '');
        setSuccess('Image removed successfully! 🎉');
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to remove image. Please try again.');
        console.error('Delete error:', err);
      }
    }
  }, [formData, handleChange]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await updateAboutSection(formData);
      setSuccess('About page updated successfully! 🎉');
      router.refresh();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update content. Please try again.');
      console.error('Update error:', err);
    } finally {
      setLoading(false);
    }
  }, [formData, router]);

  const renderImageUpload = (field: string, label: string, className: string = '') => (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      {formData[field] ? (
        <div className="space-y-2">
          <div className="relative w-full max-w-xs h-48 rounded-lg overflow-hidden border">
            <OptimizedImage src={formData[field]} alt={label} fill className="object-cover" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => handleRemoveImage(field)}
              className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
            <label className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-pointer">
              Change
              <input
                ref={(el) => { fileInputRefs.current[field] = el; }}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, field)}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full max-w-xs h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex flex-col items-center">
            <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Click to upload image</p>
            <p className="text-xs text-gray-400">PNG, JPG, WEBP (max 15MB)</p>
          </div>
          <input
            ref={(el) => { fileInputRefs.current[field] = el; }}
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, field)}
            className="hidden"
            disabled={uploading}
          />
        </label>
      )}
      {uploading && uploadingField === field && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
        </div>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-6 max-w-4xl">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-orange-600">About Us Page Content</h3>
        <p className="text-sm text-gray-500 mt-1">Edit the content below and click Save</p>
      </div>

      {/* Title & Subtitle */}
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Transform Yourself, Transform the World"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Subtitle</label>
        <input
          type="text"
          value={formData.subtitle || ''}
          onChange={(e) => handleChange('subtitle', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="ABOUT LIFE POSITIVE MISSION"
        />
      </div>

      {/* Descriptions */}
      <div>
        <label className="block text-sm font-medium mb-1">Description 1</label>
        <textarea
          value={formData.description_1 || ''}
          onChange={(e) => handleChange('description_1', e.target.value)}
          rows={3}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Life Positive Mission (LPM) is a volunteer-driven..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description 2</label>
        <textarea
          value={formData.description_2 || ''}
          onChange={(e) => handleChange('description_2', e.target.value)}
          rows={3}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Guided by the belief that every individual..."
        />
      </div>

      {/* Core Philosophy */}
      <div>
        <label className="block text-sm font-medium mb-1">Core Philosophy</label>
        <textarea
          value={formData.core_philosophy || ''}
          onChange={(e) => handleChange('core_philosophy', e.target.value)}
          rows={4}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Life Positive Mission believes that positive energy is the foundation..."
        />
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderImageUpload('core_image', 'Core Philosophy Image')}
        {renderImageUpload('hero_image', 'Hero / CTA Background Image')}
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-md font-semibold text-orange-600 mb-3">📢 Call to Action Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">CTA Title</label>
            <input
              type="text"
              value={formData.cta_title || ''}
              onChange={(e) => handleChange('cta_title', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              placeholder="Building a positive, conscious, and spiritually awakened world."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CTA Button Text</label>
            <input
              type="text"
              value={formData.cta_button_text || ''}
              onChange={(e) => handleChange('cta_button_text', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              placeholder="Get Involve Now"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">CTA Link</label>
            <input
              type="url"
              value={formData.cta_link || ''}
              onChange={(e) => handleChange('cta_link', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              placeholder="https://docs.google.com/forms/d/..."
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
          <span>❌</span> {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm flex items-center gap-2">
          <span>✅</span> {success}
        </div>
      )}

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : <><Save size={16} /> Save Changes</>}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/about')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <X size={16} /> Cancel
        </button>
      </div>
    </form>
  );
});

AboutForm.displayName = 'AboutForm';
export default AboutForm;