// src/app/admin/donations/page.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import { getAllDonationsAdmin, updateDonationStatus, deleteDonation, Donation } from '@/lib/supabase/donations';
import { Loader2, Eye, Trash2, CheckCircle, XCircle, Clock } from 'lucide-react';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
};

const statusIcons = {
  pending: Clock,
  completed: CheckCircle,
  failed: XCircle,
};

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  const loadDonations = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllDonationsAdmin();
      setDonations(data);
    } catch (error) {
      console.error('Error loading donations:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDonations();
  }, [loadDonations]);

  const handleStatusUpdate = useCallback(async (id: string, status: string) => {
    setUpdating(id);
    try {
      await updateDonationStatus(id, status);
      await loadDonations();
    } catch (error) {
      console.error('Error updating donation:', error);
      alert('Failed to update status. Please try again.');
    } finally {
      setUpdating(null);
    }
  }, [loadDonations]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this donation record? This action cannot be undone.')) return;
    try {
      await deleteDonation(id);
      await loadDonations();
    } catch (error) {
      console.error('Error deleting donation:', error);
      alert('Failed to delete. Please try again.');
    }
  }, [loadDonations]);

  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Donations</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage all donations</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-sm text-gray-500">Total Donations: </span>
          <span className="font-bold text-orange-600">${totalAmount.toFixed(2)}</span>
          <span className="text-xs text-gray-400 ml-2">({donations.length} donations)</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      ) : donations.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No donations yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3">Donor</th>
                  <th className="px-4 py-3 hidden md:table-cell">Email</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Method</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => {
                  const StatusIcon = statusIcons[donation.status as keyof typeof statusIcons] || Clock;
                  return (
                    <tr key={donation.id} className="border-t hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div>
                          <span className="font-medium">{donation.first_name} {donation.last_name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell text-gray-600">
                        {donation.email}
                      </td>
                      <td className="px-4 py-3 font-bold text-orange-600">
                        ${donation.amount.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-gray-500 capitalize">
                        {donation.payment_method}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <select
                            value={donation.status}
                            onChange={(e) => handleStatusUpdate(donation.id, e.target.value)}
                            disabled={updating === donation.id}
                            className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-orange-500 ${
                              statusColors[donation.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="failed">Failed</option>
                          </select>
                          {updating === donation.id && <Loader2 size={12} className="animate-spin text-orange-500" />}
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-gray-500">
                        {new Date(donation.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleDelete(donation.id)}
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