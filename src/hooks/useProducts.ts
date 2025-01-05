import type { Product } from '@/types';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';

import { useEffect, useState } from 'react';

import { db } from '@/lib/firebase';

export const useProducts = (userId: string | undefined) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const q = query(collection(db, 'products'), where('userId', '==', userId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

      productsData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      setProducts(productsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  const addProduct = async (productData: Omit<Product, 'id' | 'userId' | 'createdAt'>) => {
    try {
      await addDoc(collection(db, 'products'), {
        ...productData,
        userId,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  return { products, loading, addProduct, deleteProduct };
};
