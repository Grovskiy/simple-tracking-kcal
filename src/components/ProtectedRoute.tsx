'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/providers/AuthProvider';
import { LoaderCircle } from 'lucide-react';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className='min-h-screen flex items-center justify-center'><div className='animate-spin ml-2'><LoaderCircle size={26} strokeWidth={1} /></div></div>;
  }

  return user ? <>{children}</> : null;
};