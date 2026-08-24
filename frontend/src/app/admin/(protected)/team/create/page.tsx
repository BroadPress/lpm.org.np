import { Metadata } from 'next';
import { TeamForm } from '@/components/admin/team/TeamForm';

export const metadata: Metadata = {
  title: 'Add Team Member | LPM Admin',
  description: 'Add a new team member',
};

export default function CreateTeamPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Add Team Member</h2>
          <p className="text-sm text-gray-500 mt-1">Add a new team member</p>
        </div>
      </div>
      <TeamForm />
    </div>
  );
}