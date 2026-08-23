import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHomeSection } from '@/lib/supabase/homepage';
import HomepageForm from '@/components/admin/homepage/HomepageForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit Homepage Section | LPM Admin',
  description: 'Edit homepage section content',
};

const getSection = cache(async (sectionKey: string) => {
  return await getHomeSection(sectionKey);
});

export default async function EditHomepageSectionPage({
  params,
}: {
  params: Promise<{ sectionKey: string }>;
}) {
  const { sectionKey } = await params;
  const section = await getSection(sectionKey);

  if (!section) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit: {section.title}</h2>
          <p className="text-sm text-gray-500 mt-1">Update content for this section</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">{sectionKey}</span>
      </div>
      <HomepageForm sectionKey={sectionKey} initialData={section.data} />
    </div>
  );
}