// src/app/admin/faqs/page.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getAllFaqsAdmin, deleteFaq, FAQ } from '@/lib/supabase/faqs';
import { Pencil, Trash2, Plus, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const loadFaqs = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllFaqsAdmin();
      setFaqs(data);
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFaqs();
  }, [loadFaqs]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this FAQ? This action cannot be undone.')) return;
    
    setDeleting(id);
    try {
      await deleteFaq(id);
      await loadFaqs();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      alert('Failed to delete. Please try again.');
    } finally {
      setDeleting(null);
    }
  }, [loadFaqs]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">FAQs</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage frequently asked questions</p>
        </div>
        <Link
          href="/admin/faqs/create"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          <Plus size={16} /> Add FAQ
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      ) : faqs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No FAQs yet.</p>
          <Link
            href="/admin/faqs/create"
            className="inline-block mt-4 text-orange-500 hover:underline"
          >
            Create your first FAQ →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3 w-8">#</th>
                  <th className="px-4 py-3">Question</th>
                  <th className="px-4 py-3 hidden md:table-cell">Category</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Order</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((faq, index) => (
                  <tr key={faq.id} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400 text-center">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleExpand(faq.id)}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          {expandedId === faq.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        <span className="font-medium line-clamp-1">{faq.question}</span>
                      </div>
                      {expandedId === faq.id && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-600 text-sm">
                          {faq.answer}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                        {faq.category || 'General'}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-500">
                      {faq.display_order}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`px-2 py-1 rounded-full text-xs ${faq.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {faq.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/faqs/edit/${faq.id}`}
                          className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(faq.id)}
                          disabled={deleting === faq.id}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deleting === faq.id ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}