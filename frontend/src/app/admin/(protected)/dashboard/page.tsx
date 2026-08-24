import { getAllHomeSections } from '@/lib/supabase/homepage';
import { getAllAboutSections } from '@/lib/supabase/about';
import { getAllTeamMembers } from '@/lib/supabase/team';
import { getAllEvents } from '@/lib/supabase/events';
import { getAllGalleryImages } from '@/lib/supabase/gallery';
import { getAllFaqs } from '@/lib/supabase/faqs';
import { 
  Home, 
  Info, 
  Users, 
  Calendar, 
  Image, 
  HelpCircle,
  LayoutDashboard 
} from 'lucide-react';
import { cache } from 'react';
import { getAllContactSubmissions } from '@/lib/supabase/contact';
import { getAllDonationsAdmin } from '@/lib/supabase/donations';

const getDashboardData = cache(async () => {
  const [home, about, team, events, gallery, faqs, contactSubmissions, donations] = await Promise.all([
    getAllHomeSections(),
    getAllAboutSections(),
    getAllTeamMembers(),
    getAllEvents(),
    getAllGalleryImages(),
    getAllFaqs(),
    getAllContactSubmissions(),
    getAllDonationsAdmin()
  ]);

  return { home, about, team, events, gallery, faqs, contactSubmissions, donations };
});

export default async function AdminDashboardPage() {
  const { home, about, team, events, gallery, faqs, contactSubmissions, donations } = await getDashboardData();

  const stats = [
    { 
      label: 'Home Sections', 
      value: home.length, 
      icon: Home, 
      color: 'border-orange-500', 
      textColor: 'text-orange-500' 
    },
    { 
      label: 'About Pages', 
      value: about.length, 
      icon: Info, 
      color: 'border-pink-500', 
      textColor: 'text-pink-500' 
    },
    { 
      label: 'Team Members', 
      value: team.length, 
      icon: Users, 
      color: 'border-purple-500', 
      textColor: 'text-purple-500' 
    },
    { 
      label: 'Events', 
      value: events.length, 
      icon: Calendar, 
      color: 'border-blue-500', 
      textColor: 'text-blue-500' 
    },
    { 
      label: 'Gallery Images', 
      value: gallery.length, 
      icon: Image, 
      color: 'border-green-500', 
      textColor: 'text-green-500' 
    },
    { 
      label: 'FAQs', 
      value: faqs.length, 
      icon: HelpCircle, 
      color: 'border-yellow-500', 
      textColor: 'text-yellow-600' 
    },
    { 
      label: 'Contact Submissions', 
      value: contactSubmissions.length,
      icon: HelpCircle,
      color: 'border-gray-500',
      textColor: 'text-gray-600'
    },
    { 
      label: 'Donations', 
      value: donations.length, 
      icon: HelpCircle, 
      color: 'border-green-500', 
      textColor: 'text-green-500' 
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <LayoutDashboard className="w-5 h-5 text-orange-500" />
        <h2 className="text-lg md:text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`bg-white p-3 md:p-5 rounded-xl shadow-sm border-l-4 ${stat.color} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm truncate">{stat.label}</p>
                  <p className={`text-lg md:text-2xl font-bold mt-1 ${stat.textColor}`}>
                    {stat.value}
                  </p>
                </div>
                <Icon className={`w-5 h-5 md:w-8 md:h-8 ${stat.textColor} opacity-50 flex-shrink-0`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}