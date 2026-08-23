import { getAllHomeSections } from '@/lib/supabase/homepage';
import { Home, LayoutDashboard } from 'lucide-react';
import { cache } from 'react';

const getDashboardData = cache(async () => {
  const home = await getAllHomeSections();
  return { home };
});

export default async function AdminDashboardPage() {
  const { home } = await getDashboardData();

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <LayoutDashboard className="w-5 h-5 text-orange-500" />
        <h2 className="text-lg md:text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-white p-3 md:p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs sm:text-sm">Home Sections</p>
              <p className="text-lg md:text-2xl font-bold text-orange-500 mt-1">{home.length}</p>
            </div>
            <Home className="w-5 h-5 md:w-8 md:h-8 text-orange-500 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}