// src/app/admin/about/edit/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAboutSection } from '@/lib/supabase/about';
import AboutForm from '@/components/admin/about/AboutForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit About Us | LPM Admin',
  description: 'Edit About Us page content',
};

const getAboutData = cache(async () => {
  return await getAboutSection();
});

export default async function EditAboutPage() {
  const section = await getAboutData();

  if (!section) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit About Us Page</h2>
          <p className="text-sm text-gray-500 mt-1">Update about page content</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">
          about_page
        </span>
      </div>
      <AboutForm sectionKey="about_page" initialData={section.data} />
    </div>
  );
}