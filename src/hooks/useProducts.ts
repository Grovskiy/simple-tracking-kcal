import type { Product } from '@/types';
import { addDoc, collection, deleteDoc, doc, DocumentReference, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'products';

export const useProducts = (userId: string | undefined) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cache, setCache] = useState({
    key: `products_${userId}`,
    lastUpdate: ''
  });

  useEffect(() => {
    if (!userId) return;

    const loadData = async () => {
      const cacheKey = `products_${userId}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        const { data, lastUpdate } = JSON.parse(cachedData);
        setProducts(data);
        setLoading(false);
        setCache({ key: cacheKey, lastUpdate });

        const lastUpdateQuery = query(
          collection(db, COLLECTION_NAME),
          where('userId', '==', userId),
          where('createdAt', '>', lastUpdate),
          orderBy('createdAt', 'desc')
        );

        const snapshot = await getDocs(lastUpdateQuery);
        if (snapshot.empty) return;
      }

      const q = query(
        collection(db, COLLECTION_NAME),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );

      const snapshot = await getDocs(q);
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

      const lastUpdate = new Date().toISOString();
      localStorage.setItem(cacheKey, JSON.stringify({
        data: productsData,
        lastUpdate
      }));
      setCache({ key: cacheKey, lastUpdate });

      setProducts(productsData);
      setLoading(false);
    };

    loadData();
  }, [userId]);

  const addProduct = async (productData: Omit<Product, 'id' | 'userId' | 'createdAt'>) => {
    try {
      const docRef: DocumentReference = await addDoc(collection(db, COLLECTION_NAME), {
        ...productData,
        userId,
        createdAt: new Date().toISOString(),
      });

      const docSnap = await getDoc(docRef);
      const createdProduct: Product = {
        id: docSnap.id,
        ...docSnap.data() as Omit<Product, 'id'>
      };

      const updatedProducts = [createdProduct, ...products];
      setProducts(updatedProducts);

      localStorage.setItem(cache.key, JSON.stringify({
        data: updatedProducts,
        lastUpdate: cache.lastUpdate,
      }));

      return createdProduct;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, productId));
      const filteredProducts = products.filter(item => item.id !== productId);
      setProducts(filteredProducts);

      localStorage.setItem(cache.key, JSON.stringify({
        data: filteredProducts,
        lastUpdate: cache.lastUpdate,
      }));
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  return { products, loading, addProduct, deleteProduct };
};