import { Metadata } from 'next';
import { FaqForm } from '@/components/admin/faqs/FaqForm';

export const metadata: Metadata = {
  title: 'Add FAQ | LPM Admin',
  description: 'Add a new frequently asked question',
};

export default function CreateFaqPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Add FAQ</h2>
          <p className="text-sm text-gray-500 mt-1">Add a new frequently asked question</p>
        </div>
      </div>
      <FaqForm />
    </div>
  );
}