'use client';

import { useAuthContext } from '@/providers/AuthProvider';
import { LogOut } from 'lucide-react';

import CalorieTracker from '@/components/CalorieTracker';
import { ProtectedRoute } from '@/components/ProtectedRoute';

import { useEntries } from '@/hooks/useEntries';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { user, logout } = useAuthContext();

  const { products, addProduct, deleteProduct, loading: productsLoading } = useProducts(user?.uid);

  const { entries, addEntry, deleteEntry, loading: entriesLoading } = useEntries(user?.uid);

  const nickname = user?.email && user.email.split('@')[0];

  if (productsLoading || entriesLoading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="grid min-h-screen grid-rows-[1fr_55px] justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="row-start-1 flex flex-col items-start">
          <div className="mx-auto pb-4 pt-8 text-sm">Вітаю, {user?.displayName || nickname}</div>
          <CalorieTracker
            products={products}
            entries={entries}
            onAddProduct={addProduct}
            onAddEntry={addEntry}
            onDeleteProduct={deleteProduct}
            onDeleteEntry={deleteEntry}
          />
        </main>
        <footer className="row-start-2 flex flex-wrap items-center justify-center gap-6">
          <button onClick={logout} className="btn btn-sm">
            Вийти
            <LogOut size={16} />
          </button>
        </footer>
      </div>
    </ProtectedRoute>
  );
}
