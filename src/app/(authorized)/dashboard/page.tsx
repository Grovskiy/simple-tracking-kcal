'use client';

import { useAuthContext } from '@/providers/AuthProvider';

import CalorieTracker from '@/components/CalorieTracker';

import { useEntries } from '@/hooks/useEntries';
import { useProducts } from '@/hooks/useProducts';

export default function DashboardPage() {
  const { user } = useAuthContext();

  const { products, addProduct, deleteProduct, loading: productsLoading } = useProducts(user?.uid);

  const { entries, addEntry, deleteEntry, loading: entriesLoading } = useEntries(user?.uid);

  if (productsLoading || entriesLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <CalorieTracker
      products={products}
      entries={entries}
      onAddProduct={addProduct}
      onAddEntry={addEntry}
      onDeleteProduct={deleteProduct}
      onDeleteEntry={deleteEntry}
    />
  );
}
