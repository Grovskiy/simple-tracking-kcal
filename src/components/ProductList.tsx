import { Product } from '@/types';
import { Trash2 } from 'lucide-react';

import { useState } from 'react';

import { DeleteConfirmModal } from './DeleteConfirmModal';

interface ProductsListProps {
  products: Product[];
  onDeleteProduct: (productId: Product['id']) => void;
}

const defaultProduct: Product = {
  id: '',
  name: '',
  caloriesPer100g: 0,
  userId: '',
  createdAt: '',
};

export const ProductsList: React.FC<ProductsListProps> = ({ products, onDeleteProduct }) => {
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, product: defaultProduct });

  const handleDelete = (product: Product) => {
    setDeleteModal({ isOpen: true, product });
  };

  const confirmDelete = () => {
    if (deleteModal.product) {
      onDeleteProduct(deleteModal.product.id);
      setDeleteModal({ isOpen: false, product: defaultProduct });
    }
  };

  return (
    <div className="card card-compact">
      <div className="card-body">
        <h2 className="card-title text-base">Мої продукти</h2>
        <div className="space-y-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-lg bg-base-100 px-2 shadow-md"
            >
              <div>
                <span className="font-medium">{product.name}</span>
                <span className="text-sm text-base-content/70">
                  {' '}
                  • {product.caloriesPer100g} ккал/100г
                </span>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={() => handleDelete(product)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
        <DeleteConfirmModal
          isOpen={deleteModal.isOpen}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteModal({ isOpen: false, product: defaultProduct })}
          itemName={deleteModal.product?.name}
        />
      </div>
    </div>
  );
};
