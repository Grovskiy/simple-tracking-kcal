import { LogIn } from 'lucide-react';

import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

export const GoogleSignInButton: FC = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <button onClick={handleSignIn} className="btn btn-neutral btn-sm">
      Увійдіть за допомогою Google
      <LogIn size={16} />
    </button>
  );
};
