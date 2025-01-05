import { Product } from '@/types';
import { Plus } from 'lucide-react';

import { useState } from 'react';

interface AddProductFormProps {
  onAddProduct: (productData: Omit<Product, 'id' | 'userId' | 'createdAt'>) => void;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && calories) {
      onAddProduct({ name, caloriesPer100g: parseInt(calories) });
      setName('');
      setCalories('');
    }
  };

  return (
    <div className="card card-compact">
      <div className="card-body">
        <h2 className="card-title text-base">Додати новий продукт</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label className="form-control w-full max-w-xs flex-1">
            <div className="label">
              <span className="label-text">Назва продукту</span>
            </div>
            <input
              type="text"
              placeholder="Цільнозерновий хліб"
              className="input input-md input-bordered w-full max-w-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-controlmax-w-xs">
            <div className="label">
              <span className="label-text">Ккал на 100г</span>
            </div>
            <input
              type="number"
              placeholder="244"
              className="input input-md input-bordered w-28"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>

          <label className="form-control max-w-xs">
            <div className="label">
              <span className="label-text">⠀</span>
            </div>
            <button type="submit" className="btn btn-primary btn-md">
              <Plus className="h-5 w-5" />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};
