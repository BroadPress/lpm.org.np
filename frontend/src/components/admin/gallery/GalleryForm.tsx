'use client';

import { memo, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createGalleryImage, updateGalleryImage, uploadGalleryImage, deleteGalleryImageFromStorage, GalleryImage } from '@/lib/supabase/gallery';
import { Loader2, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface GalleryFormProps {
  initialData?: GalleryImage;
}

const categories = ['General', 'Events', 'Volunteer', 'Activities', 'Community', 'Training'];

export const GalleryForm = memo(function GalleryForm({ initialData }: GalleryFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    image_url: initialData?.image_url || '',
    alt_text: initialData?.alt_text || '',
    category: initialData?.category || 'General',
    display_order: initialData?.display_order || 0,
    is_active: initialData?.is_active ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setError('');

    try {
      // If there's an existing image, delete it from storage
      if (formData.image_url) {
        await deleteGalleryImageFromStorage(formData.image_url);
      }

      const url = await uploadGalleryImage(file);
      handleChange('image_url', url);
      setSuccess('Image uploaded successfully! 🎉');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }, [formData.image_url]);

  const handleRemoveImage = useCallback(async () => {
    if (formData.image_url) {
      try {
        await deleteGalleryImageFromStorage(formData.image_url);
        handleChange('image_url', '');
        setSuccess('Image removed successfully! 🎉');
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to remove image. Please try again.');
        console.error('Delete error:', err);
      }
    }
  }, [formData.image_url]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (initialData) {
        await updateGalleryImage(initialData.id, formData);
        setSuccess('Gallery image updated successfully! 🎉');
      } else {
        await createGalleryImage(formData as any);
        setSuccess('Gallery image created successfully! 🎉');
      }
      router.push('/admin/gallery');
      router.refresh();
    } catch (err) {
      setError('Failed to save. Please try again.');
      console.error('Save error:', err);
    } finally {
      setLoading(false);
    }
  }, [formData, initialData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-6 max-w-3xl">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-orange-600">
          {initialData ? 'Edit Gallery Image' : 'Add Gallery Image'}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Fill in the details below</p>
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title *</label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Enter image title"
        />
      </div>

      {/* Alt Text */}
      <div>
        <label className="block text-sm font-medium mb-1">Alt Text</label>
        <input
          type="text"
          value={formData.alt_text}
          onChange={(e) => handleChange('alt_text', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Descriptive text for accessibility"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">Image *</label>
        {formData.image_url ? (
          <div className="space-y-2">
            <div className="relative w-full max-w-xs aspect-square rounded-lg overflow-hidden border">
              <OptimizedImage src={formData.image_url} alt="Preview" fill className="object-cover" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleRemoveImage}
                className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
              <label className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-pointer">
                Change
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full max-w-xs aspect-square border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center">
              <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to upload image</p>
              <p className="text-xs text-gray-400">PNG, JPG, WEBP (max 15MB)</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        )}
        {uploading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
          </div>
        )}
      </div>

      {/* Display Order & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Display Order</label>
          <input
            type="number"
            value={formData.display_order}
            onChange={(e) => handleChange('display_order', parseInt(e.target.value) || 0)}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            min="0"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 cursor-pointer pt-6">
            <input
              type="checkbox"
              checked={formData.is_active}
              onChange={(e) => handleChange('is_active', e.target.checked)}
              className="w-4 h-4 accent-orange-500"
            />
            <span className="text-sm text-gray-600">Active (visible on website)</span>
          </label>
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
          {loading ? 'Saving...' : <><Save size={16} /> Save Image</>}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/gallery')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <X size={16} /> Cancel
        </button>
      </div>
    </form>
  );
});

GalleryForm.displayName = 'GalleryForm';