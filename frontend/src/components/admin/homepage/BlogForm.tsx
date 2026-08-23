// src/components/admin/homepage/BlogForm.tsx
'use client';

import { memo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { updateHomeSection } from '@/lib/supabase/homepage';
import { Loader2, Save, X, Plus, Trash2 } from 'lucide-react';

interface BlogFormProps {
  sectionKey: string;
  initialData: any;
}

const BlogForm = memo(function BlogForm({ sectionKey, initialData }: BlogFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const handlePostChange = useCallback((index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const newPosts = [...(prev.posts || [])];
      newPosts[index] = { ...newPosts[index], [field]: value };
      return { ...prev, posts: newPosts };
    });
  }, []);

  const addPost = useCallback(() => {
    setFormData((prev: any) => ({
      ...prev,
      posts: [...(prev.posts || []), { title: '', description: '', image_url: '', author: '', date: '', category: '' }],
    }));
  }, []);

  const removePost = useCallback((index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      posts: prev.posts.filter((_: any, i: number) => i !== index),
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateHomeSection(sectionKey, formData);
      setSuccess('Blog section updated successfully! 🎉');
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
        <h3 className="text-lg font-semibold text-orange-600">Blog Section</h3>
        <p className="text-sm text-gray-500 mt-1">Edit blog section content</p>
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
        <label className="block text-sm font-medium mb-1">Posts</label>
        {(formData.posts || []).map((post: any, index: number) => (
          <div key={index} className="border rounded-lg p-4 mb-3 bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-700">Post {index + 1}</h4>
              <button type="button" onClick={() => removePost(index)} className="p-1.5 text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium mb-1">Title</label>
                <input type="text" value={post.title || ''} onChange={(e) => handlePostChange(index, 'title', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium mb-1">Description</label>
                <textarea value={post.description || ''} onChange={(e) => handlePostChange(index, 'description', e.target.value)} rows={2} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Author</label>
                <input type="text" value={post.author || ''} onChange={(e) => handlePostChange(index, 'author', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Date</label>
                <input type="text" value={post.date || ''} onChange={(e) => handlePostChange(index, 'date', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Category</label>
                <input type="text" value={post.category || ''} onChange={(e) => handlePostChange(index, 'category', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Image URL</label>
                <input type="text" value={post.image_url || ''} onChange={(e) => handlePostChange(index, 'image_url', e.target.value)} className="w-full border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="/images/path/to/image.jpg" />
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={addPost} className="flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium"><Plus size={16} /> Add Post</button>
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

BlogForm.displayName = 'BlogForm';
export default BlogForm;