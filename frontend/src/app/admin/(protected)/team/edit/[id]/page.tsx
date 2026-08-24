import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTeamMemberById } from '@/lib/supabase/team';
import { TeamForm } from '@/components/admin/team/TeamForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit Team Member | LPM Admin',
  description: 'Edit team member details',
};

const getMember = cache(async (id: string) => {
  return await getTeamMemberById(id);
});

export default async function EditTeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = await getMember(id);

  if (!member) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit: {member.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Update team member details</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">
          {member.id}
        </span>
      </div>
      <TeamForm initialData={member} />
    </div>
  );
}