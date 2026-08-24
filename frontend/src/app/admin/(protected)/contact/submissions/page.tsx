'use client';

import { useEffect, useState, useCallback } from 'react';
import { getAllContactSubmissions, updateSubmissionStatus, deleteContactSubmission, ContactSubmission } from '@/lib/supabase/contact';
import { Loader2, Trash2, CheckCircle, XCircle, Clock, Mail, Phone, User } from 'lucide-react';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  read: 'bg-blue-100 text-blue-800',
  replied: 'bg-green-100 text-green-800',
  spam: 'bg-red-100 text-red-800',
};

const statusIcons = {
  pending: Clock,
  read: Mail,
  replied: CheckCircle,
  spam: XCircle,
};

export default function AdminContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  const loadSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllContactSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  const handleStatusUpdate = useCallback(async (id: string, status: string) => {
    setUpdating(id);
    try {
      await updateSubmissionStatus(id, status);
      await loadSubmissions();
    } catch (error) {
      console.error('Error updating submission:', error);
      alert('Failed to update status. Please try again.');
    } finally {
      setUpdating(null);
    }
  }, [loadSubmissions]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this submission? This action cannot be undone.')) return;
    try {
      await deleteContactSubmission(id);
      await loadSubmissions();
    } catch (error) {
      console.error('Error deleting submission:', error);
      alert('Failed to delete. Please try again.');
    }
  }, [loadSubmissions]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Contact Submissions</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">All messages from contact form</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-sm text-gray-500">Total: </span>
          <span className="font-bold text-orange-600">{submissions.length}</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No contact submissions yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3 hidden md:table-cell">Email</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Subject</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => {
                  const StatusIcon = statusIcons[sub.status as keyof typeof statusIcons] || Clock;
                  return (
                    <tr key={sub.id} className="border-t hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-gray-400" />
                          <span className="font-medium">{sub.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell text-gray-600">
                        {sub.email}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-gray-500 truncate max-w-[120px]">
                        {sub.subject || 'No subject'}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <select
                            value={sub.status}
                            onChange={(e) => handleStatusUpdate(sub.id, e.target.value)}
                            disabled={updating === sub.id}
                            className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-orange-500 ${
                              statusColors[sub.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                            <option value="spam">Spam</option>
                          </select>
                          {updating === sub.id && <Loader2 size={12} className="animate-spin text-orange-500" />}
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-gray-500">
                        {new Date(sub.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleDelete(sub.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}