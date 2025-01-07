'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { GoogleSignInButton } from '@/components/GoogleSignInButton';

import { useAuth } from '@/hooks/useAuth';

export default function AuthPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title mx-auto text-center text-base">Ласкаво просимо</h1>
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
