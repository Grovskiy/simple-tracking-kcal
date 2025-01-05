import { Entry, Product } from '@/types';
import { Plus } from 'lucide-react';

import { useState } from 'react';

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
    }
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-base">Додати спожиту їжу</h2>
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
      </div>
    </div>
  );
};
