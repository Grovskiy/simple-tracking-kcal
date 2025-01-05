import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  addDoc, 
  deleteDoc,
  doc,
  onSnapshot
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Product } from '@/types';

export const useProducts = (userId: string | undefined) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, 'products'),
      where('userId', '==', userId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      
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
        createdAt: new Date().toISOString()
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