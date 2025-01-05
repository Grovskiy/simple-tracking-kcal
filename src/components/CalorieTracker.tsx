import { Entry, Product } from '@/types';
import { getTodayDate } from '@/utils/getTodayDate';

import React, { useState } from 'react';

import { AddMealEntry } from './AddMealEntry';
import { AddProductForm } from './AddProductForm';
import { DailyStats } from './DailyStats';
import { DateSelector } from './DateSelector';
import { ProductsList } from './ProductList';

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
  onAddProduct,
  onAddEntry,
  onDeleteProduct,
  onDeleteEntry,
}) => {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const dailyEntries = entries.filter((entry: { date: string }) => entry.date === selectedDate);

  return (
    <div className="mx-auto max-w-lg space-y-4 p-4">
      <details className="dropdown w-full">
        <summary className="btn btn-outline btn-neutral btn-sm btn-block mb-2">
          Додати новий продукт
        </summary>
        <div className="dropdown-content glass z-[1] w-full rounded-box p-2 shadow">
          <AddProductForm onAddProduct={onAddProduct} />
          <ProductsList products={products} onDeleteProduct={onDeleteProduct} />
        </div>
      </details>
      <DateSelector date={selectedDate} onDateChange={setSelectedDate} />
      <AddMealEntry products={products} onAddEntry={onAddEntry} selectedDate={selectedDate} />
      <DailyStats entries={dailyEntries} date={selectedDate} onDeleteEntry={onDeleteEntry} />
    </div>
  );
};

export default CalorieTracker;
