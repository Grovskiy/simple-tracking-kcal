import { Entry, Product } from '@/types';
import { getTodayDate } from '@/utils/getTodayDate';

import React, { useState } from 'react';

import { AddMealEntry } from './AddMealEntry';
import { DailyStats } from './DailyStats';
import { DateSelector } from './DateSelector';

interface CalorieTrackerProps {
  products: Product[];
  entries: Entry[];
  onAddProduct: (productData: Omit<Product, 'id' | 'userId' | 'createdAt'>) => void;
  onAddEntry: (entryData: Omit<Entry, 'id' | 'userId' | 'createdAt'>) => void;
  onDeleteProduct: (productId: Product['id']) => void;
  onDeleteEntry: (productId: Entry['id']) => void;
}

const CalorieTracker: React.FC<CalorieTrackerProps> = ({
  products,
  entries,
  onAddEntry,
  onDeleteEntry,
}) => {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const dailyEntries = entries.filter((entry: { date: string }) => entry.date === selectedDate);

  return (
    <div className="min-h-screen pb-28">
      <div className="bg-background shadow-sm">
        <div className="mx-auto max-w-xl px-4 py-2">
          <DateSelector date={selectedDate} onDateChange={setSelectedDate} />
        </div>
      </div>

      <div className="mx-auto max-w-xl px-4 py-4">
        <DailyStats entries={dailyEntries} onDeleteEntry={onDeleteEntry} />
      </div>

      <AddMealEntry products={products} onAddEntry={onAddEntry} selectedDate={selectedDate} />
    </div>
  );
};

export default CalorieTracker;
