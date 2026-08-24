import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFaqById } from '@/lib/supabase/faqs';
import { FaqForm } from '@/components/admin/faqs/FaqForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit FAQ | LPM Admin',
  description: 'Edit frequently asked question',
};

const getFaq = cache(async (id: string) => {
  return await getFaqById(id);
});

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const faq = await getFaq(id);

  if (!faq) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit FAQ</h2>
          <p className="text-sm text-gray-500 mt-1">Update frequently asked question</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">
          {faq.id}
        </span>
      </div>
      <FaqForm initialData={faq} />
    </div>
  );
}