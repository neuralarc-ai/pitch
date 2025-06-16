'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let ignore = false;
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (!ignore) {
        setIsAuthenticated(!!data.user);
        setLoading(false);
        if (!data.user && pathname !== '/login') {
          router.replace('/login');
        }
      }
    };
    checkAuth();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user);
      if (!session?.user && pathname !== '/login') {
        router.replace('/login');
      }
    });
    return () => {
      ignore = true;
      listener.subscription.unsubscribe();
    };
  }, [pathname, router]);

  // Allow access to /login always
  if (pathname === '/login') return <>{children}</>;
  if (loading) return <div className="flex min-h-screen items-center justify-center text-lg">Loading...</div>;
  if (!isAuthenticated) return null;
  return <>{children}</>;
} 