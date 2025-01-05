"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { GoogleSignInButton } from '@/components/GoogleSignInButton';
import { LoaderCircle } from 'lucide-react';

export default function AuthPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className='min-h-screen flex items-center justify-center'><div className='animate-spin ml-2'><LoaderCircle size={34} strokeWidth={1} /></div></div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-lg font-semi text-center mb-2">Ласкаво просимо</h1>
        <GoogleSignInButton />
      </div>
    </div>
  );
}