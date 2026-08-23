// src/components/admin/faqs/FaqForm.tsx
'use client';

import { memo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createFaq, updateFaq, FAQ } from '@/lib/supabase/faqs';
import { Loader2, Save, X } from 'lucide-react';

interface FaqFormProps {
  initialData?: FAQ;
}

const categories = ['General', 'About', 'Programs', 'Volunteer', 'Donation'];

export const FaqForm = memo(function FaqForm({ initialData }: FaqFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    question: initialData?.question || '',
    answer: initialData?.answer || '',
    category: initialData?.category || 'General',
    display_order: initialData?.display_order || 0,
    is_active: initialData?.is_active ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (initialData) {
        await updateFaq(initialData.id, formData);
        setSuccess('FAQ updated successfully! 🎉');
      } else {
        await createFaq(formData as any);
        setSuccess('FAQ created successfully! 🎉');
      }
      router.push('/admin/faqs');
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
          {initialData ? 'Edit FAQ' : 'Add FAQ'}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Fill in the details below</p>
      </div>

      {/* Question */}
      <div>
        <label className="block text-sm font-medium mb-1">Question *</label>
        <input
          type="text"
          required
          value={formData.question}
          onChange={(e) => handleChange('question', e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Enter frequently asked question"
        />
      </div>

      {/* Answer */}
      <div>
        <label className="block text-sm font-medium mb-1">Answer *</label>
        <textarea
          required
          value={formData.answer}
          onChange={(e) => handleChange('answer', e.target.value)}
          rows={5}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          placeholder="Enter detailed answer..."
        />
      </div>

      {/* Category & Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      {/* Status */}
      <div>
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
          disabled={loading}
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : <><Save size={16} /> Save FAQ</>}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/faqs')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <X size={16} /> Cancel
        </button>
      </div>
    </form>
  );
});

FaqForm.displayName = 'FaqForm';