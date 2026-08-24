import { createServerSupabase } from '@/lib/supabase/server';
import dynamic from "next/dynamic";
import { Suspense } from 'react';
import { redirect } from 'next/navigation';

const LogoutButton = dynamic(() => import("@/components/admin/LogoutButton").then((mod) => mod.default));
const AdminSidebar = dynamic(() => import("@/components/admin/AdminSidebar").then((mod) => mod.AdminSidebar));
export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <Suspense fallback={<div className="w-60 bg-orange-500 animate-pulse hidden md:block" />}>
        <AdminSidebar />
      </Suspense>
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 px-3 sm:px-6 py-2.5 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-orange-600 truncate">LPM Admin</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs text-gray-500 hidden sm:inline-block truncate max-w-[120px]">
              {user.email}
            </span>
            <LogoutButton />
          </div>
        </header>
        <main className="flex-1 p-3 sm:p-4 md:p-6 pb-20 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}