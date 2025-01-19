'use client';

import { useAuthContext } from '@/providers/AuthProvider';

import CalorieTracker from '@/components/CalorieTracker';

import { useEntries } from '@/hooks/useEntries';
import { useProducts } from '@/hooks/useProducts';
import { useState } from 'react';
import { getTodayDate } from '@/utils/getTodayDate';

export default function DashboardPage() {
  const { user } = useAuthContext();

  const { products, loading: productsLoading } = useProducts(user?.uid);

  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const { entries, addEntry, deleteEntry, loading: entriesLoading } = useEntries(user?.uid, selectedDate);


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
      selectedDate={selectedDate}
      onAddEntry={addEntry}
      onDeleteEntry={deleteEntry}
      onDateChange={setSelectedDate}
    />
  );
}
