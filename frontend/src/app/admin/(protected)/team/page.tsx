// src/app/admin/team/page.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getAllTeamMembersAdmin, deleteTeamMember, TeamMember } from '@/lib/supabase/team';
import { Pencil, Trash2, Plus, Loader2, Eye } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const loadMembers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllTeamMembersAdmin();
      setMembers(data);
    } catch (error) {
      console.error('Error loading team members:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this team member? This action cannot be undone.')) return;
    
    setDeleting(id);
    try {
      await deleteTeamMember(id);
      await loadMembers();
    } catch (error) {
      console.error('Error deleting team member:', error);
      alert('Failed to delete. Please try again.');
    } finally {
      setDeleting(null);
    }
  }, [loadMembers]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Team Members</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage team members</p>
        </div>
        <Link
          href="/admin/team/create"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          <Plus size={16} /> Add Member
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      ) : members.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No team members yet.</p>
          <Link
            href="/admin/team/create"
            className="inline-block mt-4 text-orange-500 hover:underline"
          >
            Add your first team member →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3">Member</th>
                  <th className="px-4 py-3 hidden md:table-cell">Position</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Order</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                          <OptimizedImage
                            src={member.image_url || '/images/placeholder.jpg'}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-600">
                      {member.position}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-500">
                      {member.display_order}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`px-2 py-1 rounded-full text-xs ${member.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {member.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/team/edit/${member.id}`}
                          className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(member.id)}
                          disabled={deleting === member.id}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deleting === member.id ? (
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