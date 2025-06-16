'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AuthGuard from '@/components/layout/auth-guard';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavFooter = pathname !== '/login';
  return (
    <>
      {showNavFooter && <Navbar />}
      <AuthGuard>{children}</AuthGuard>
      {showNavFooter && <Footer />}
    </>
  );
} 