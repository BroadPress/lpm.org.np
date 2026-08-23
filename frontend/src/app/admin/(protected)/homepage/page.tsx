// src/app/admin/(protected)/homepage/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllHomeSections } from '@/lib/supabase/homepage';
import { Pencil } from 'lucide-react';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Homepage Content | LPM Admin',
  description: 'Manage homepage sections',
};

const homeSections = [
  { key: 'home_hero', label: 'Hero Section', icon: '🎯' },
  { key: 'home_mission', label: 'Mission Section', icon: '🚀' },
  { key: 'home_partners', label: 'Partners Section', icon: '🤝' },
  { key: 'home_get_involved', label: 'Get Involved Section', icon: '🙌' },
  { key: 'home_social_activities', label: 'Social Activities', icon: '📅' },
  { key: 'home_cta', label: 'Call to Action', icon: '📢' },
  { key: 'home_upcoming_events', label: 'Upcoming Events', icon: '📆' },
  { key: 'home_team', label: 'Team Section', icon: '👥' },
  { key: 'home_testimonials', label: 'Testimonials', icon: '💬' },
  { key: 'home_gallery', label: 'Gallery Section', icon: '🖼️' },
  { key: 'home_blog', label: 'Blog Section', icon: '📝' },
];

const getSections = cache(async () => {
  return await getAllHomeSections();
});

export default async function HomepageAdminPage() {
  const allSections = await getSections();
  const sectionMap = new Map(allSections.map((s) => [s.section_key, s]));

  return (
    <div>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Homepage Content</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage all homepage sections</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {homeSections.map(({ key, label, icon }) => {
          const section = sectionMap.get(key);
          return (
            <div
              key={key}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-4 md:p-5"
            >
              <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl">{icon}</span>
                    <h3 className="font-semibold text-sm md:text-base text-gray-800 truncate">{label}</h3>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-2">
                    Updated:{' '}
                    {section?.updated_at
                      ? new Date(section.updated_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })
                      : 'Never'}
                  </p>
                </div>
                <Link
                  href={`/admin/homepage/edit/${key}`}
                  className="p-1.5 md:p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex-shrink-0"
                  title="Edit"
                >
                  <Pencil size={16} className="md:size-18" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}