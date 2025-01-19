import { Entry, Product } from '@/types';

import React from 'react';

import { AddMealEntry } from './AddMealEntry';
import { DailyStats } from './DailyStats';
import { DateSelector } from './DateSelector';

interface CalorieTrackerProps {
  products: Product[];
  entries: Entry[];
  selectedDate: string;
  onAddEntry: (entryData: Omit<Entry, 'id' | 'userId' | 'createdAt'>) => void;
  onDeleteEntry: (productId: Entry['id']) => void;
  onDateChange: (date: string) => void;
}

const CalorieTracker: React.FC<CalorieTrackerProps> = ({
  products,
  entries,
  selectedDate,
  onAddEntry,
  onDeleteEntry,
  onDateChange,
}) => {

  const dailyEntries = entries.filter((entry: { date: string }) => entry.date === selectedDate);

  return (
    <div className="min-h-screen pb-28">
      <div className="bg-background shadow-sm">
        <div className="mx-auto max-w-xl px-4 py-2">
          <DateSelector date={selectedDate} onDateChange={onDateChange} />
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
