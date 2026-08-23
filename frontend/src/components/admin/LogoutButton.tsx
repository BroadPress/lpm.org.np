'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { LogOut } from 'lucide-react';
import { useState, useCallback } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = useCallback(async () => {
    setLoading(true);
    await supabase.auth.signOut();
    // Clear any cached data
    router.push('/admin/login');
    router.refresh();
    setLoading(false);
  }, [router]);

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-red-600 transition-colors disabled:opacity-50 px-2 py-1.5 rounded-lg hover:bg-red-50"
    >
      <LogOut size={16} />
      <span className="hidden sm:inline">Logout</span>
    </button>
  );
}