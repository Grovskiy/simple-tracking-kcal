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
    <>
      <div className="space-y-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-md bg-base-200 px-2"
          >
            <div className="flex min-w-0 flex-1 items-center justify-between gap-x-2">
              <span className="text-overflow-ellipsis block overflow-hidden truncate whitespace-nowrap font-medium">
                {product.name}
              </span>
              <span className="whitespace-nowrap text-sm text-base-content/70">
                {product.caloriesPer100g} ккал
              </span>
            </div>
            <button
              className="btn btn-ghost btn-sm flex-shrink-0"
              onClick={() => handleDelete(product)}
            >
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
    </>
  );
};
