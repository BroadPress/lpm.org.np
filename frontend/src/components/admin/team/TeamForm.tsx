// src/components/admin/team/TeamForm.tsx
'use client';

import { memo, useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createTeamMember, updateTeamMember, uploadTeamImage, deleteTeamImage, TeamMember } from '@/lib/supabase/team';
import { Loader2, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface TeamFormProps {
  initialData?: TeamMember;
}

export const TeamForm = memo(function TeamForm({ initialData }: TeamFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    position: initialData?.position || '',
    bio: initialData?.bio || '',
    image_url: initialData?.image_url || '',
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
      const url = await uploadTeamImage(file);
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
  }, [handleChange]);

  const handleRemoveImage = useCallback(async () => {
    if (formData.image_url) {
      try {
        await deleteTeamImage(formData.image_url);
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
        await updateTeamMember(initialData.id, formData);
        setSuccess('Team member updated successfully! 🎉');
      } else {
        await createTeamMember(formData as any);
        setSuccess('Team member created successfully! 🎉');
      }
      router.push('/admin/team');
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
          {initialData ? 'Edit Team Member' : 'Add Team Member'}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Fill in the details below</p>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Enter full name"
        />
      </div>

      {/* Position */}
      <div>
        <label className="block text-sm font-medium mb-1">Position *</label>
        <input
          type="text"
          required
          value={formData.position}
          onChange={(e) => handleChange('position', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="e.g. CEO - Life Positive Mission"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          rows={5}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Enter biography..."
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium mb-1">Image</label>
        {formData.image_url ? (
          <div className="space-y-2">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500">
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
          <label className="flex flex-col items-center justify-center w-full max-w-xs h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center">
              <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
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
          <label className="block text-sm font-medium mb-1">Status</label>
          <label className="flex items-center gap-2 cursor-pointer">
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
          {loading ? 'Saving...' : <><Save size={16} /> Save Member</>}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/team')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <X size={16} /> Cancel
        </button>
      </div>
    </form>
  );
});

TeamForm.displayName = 'TeamForm';