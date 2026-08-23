// src/app/admin/about/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAboutSection } from '@/lib/supabase/about';
import { Pencil, Eye } from 'lucide-react';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'About Us | LPM Admin',
  description: 'Manage About Us page content',
};

const getAboutData = cache(async () => {
  return await getAboutSection();
});

export default async function AboutAdminPage() {
  const section = await getAboutData();

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">About Us Page</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage about page content</p>
        </div>
        <Link
          href="/admin/about/edit"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          <Pencil size={16} /> Edit About Page
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <h3 className="text-xs md:text-sm font-medium text-gray-500">Section</h3>
            <p className="mt-1 font-medium text-sm md:text-base">About Us</p>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-gray-500">Last Updated</h3>
            <p className="mt-1 text-sm md:text-base">
              {section?.updated_at
                ? new Date(section.updated_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : 'Not created'}
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xs md:text-sm font-medium text-gray-500">Title</h3>
            <p className="mt-1 text-sm text-gray-600">{section?.data?.title || 'Not set'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xs md:text-sm font-medium text-gray-500">Description Preview</h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {section?.data?.description_1 || 'Not set'}
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 flex flex-wrap gap-3">
          <Link
            href="/admin/about/edit"
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Pencil size={16} /> Edit Content
          </Link>
          <Link
            href="/about"
            target="_blank"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <Eye size={16} /> View on Site
          </Link>
        </div>
      </div>
    </div>
  );
}