import React, { useState } from 'react';
import { DailyStats } from './DailyStats';
import { ProductsList } from './ProductList';
import { getTodayDate } from '@/utils/getTodayDate';
import { AddMealEntry } from './AddMealEntry';
import { DateSelector } from './DateSelector';
import { AddProductForm } from './AddProductForm';
import { Entry, Product } from '@/types';


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
  onDeleteEntry }) => {

  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const dailyEntries = entries.filter((entry: { date: string; }) => entry.date === selectedDate);

  return (
    <div className="max-w-lg mx-auto p-4">
      <AddProductForm onAddProduct={onAddProduct} />
      <DateSelector date={selectedDate} onDateChange={setSelectedDate} />
      <AddMealEntry
        products={products}
        onAddEntry={onAddEntry}
        selectedDate={selectedDate}
      />
      <div className="my-4">
        <ProductsList
          products={products}
          onDeleteProduct={onDeleteProduct}
        />
      </div>
      <div className="my-4">
        <DailyStats entries={dailyEntries} date={selectedDate} onDeleteEntry={onDeleteEntry} />
      </div>
    </div>
  );
};

export default CalorieTracker;