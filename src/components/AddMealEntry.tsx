import { Entry, Product } from '@/types';
import { Plus } from 'lucide-react';

import { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface AddMealEntryProps {
  products: Product[];
  onAddEntry: (entryData: Omit<Entry, 'id' | 'userId' | 'createdAt'>) => void;
  selectedDate: string;
}

export const AddMealEntry: React.FC<AddMealEntryProps> = ({
  products,
  onAddEntry,
  selectedDate,
}) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedProduct && grams) {
      const product = products.find((p) => p.id === selectedProduct);
      if (!product) return;

      const calories = Math.round((product.caloriesPer100g * parseInt(grams)) / 100);

      onAddEntry({
        productId: selectedProduct,
        grams: parseInt(grams),
        date: selectedDate,
        productName: product.name,
        calories,
      });

      setSelectedProduct('');
      setGrams('');
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="fixed bottom-20 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 shadow-lg transition-colors hover:bg-indigo-700">
          <Plus className="h-6 w-6 text-white" />
        </button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Додати спожиту їжу</SheetTitle>
          <SheetDescription>
            Додайте продукти до свого щоденника. Натисніть &quot;+&quot; після завершення.
          </SheetDescription>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <select
              className="select select-bordered select-sm w-full max-w-xs flex-1 text-base"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Виберіть продукт</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} ({product.caloriesPer100g} ккал/100г)
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Грам"
              className="input input-sm input-bordered w-20 text-base"
              value={grams}
              onChange={(e) => setGrams(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              <Plus className="h-5 w-5" />
            </button>
          </form>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
