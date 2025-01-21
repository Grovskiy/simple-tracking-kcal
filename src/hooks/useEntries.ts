import type { Entry } from '@/types';
import { addDoc, collection, deleteDoc, doc, DocumentReference, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'entries';

interface CacheData {
  data: Entry[];
  lastUpdate: string;
}

interface CacheState {
  key: string;
  lastUpdate: string;
}

interface UseEntriesReturn {
  entries: Entry[];
  loading: boolean;
  error: Error | null;
  addEntry: (data: Omit<Entry, 'id' | 'userId' | 'createdAt'>) => Promise<Entry>;
  deleteEntry: (id: string) => Promise<void>;
}

const getCachedData = (cacheKey: string): CacheData | null => {
  const cached = localStorage.getItem(cacheKey);
  return cached ? JSON.parse(cached) : null;
};

const updateCache = (key: string, data: Entry[], lastUpdate: string): void => {
  localStorage.setItem(key, JSON.stringify({ data, lastUpdate }));
};

export const useEntries = (userId: string | undefined, specificDate: string): UseEntriesReturn => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [cache, setCache] = useState<CacheState>({
    key: `entries_${userId}_${specificDate}`,
    lastUpdate: ''
  });

  useEffect(() => {
    if (!userId || !specificDate) return;

    let isMounted = true;

    const loadData = async () => {
      try {
        const cacheKey = `entries_${userId}_${specificDate}`;
        const cachedData = getCachedData(cacheKey);

        if (cachedData && isMounted) {
          setEntries(cachedData.data);
          setLoading(false);
          setCache({ key: cacheKey, lastUpdate: cachedData.lastUpdate });

          const lastUpdateQuery = query(
            collection(db, COLLECTION_NAME),
            where('userId', '==', userId),
            where('date', '==', specificDate),
            where('createdAt', '>', cachedData.lastUpdate),
            orderBy('createdAt', 'desc')
          );

          const snapshot = await getDocs(lastUpdateQuery);
          if (snapshot.empty) return;
        }

        const q = query(
          collection(db, COLLECTION_NAME),
          where('userId', '==', userId),
          where('date', '==', specificDate),
          orderBy('createdAt', 'desc')
        );

        const snapshot = await getDocs(q);
        const entriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Entry[];

        const lastUpdate = new Date().toISOString();

        if (isMounted) {
          updateCache(cacheKey, entriesData, lastUpdate);
          setCache({ key: cacheKey, lastUpdate });
          setEntries(entriesData);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading entries:', err);
        if (isMounted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [userId, specificDate]);

  const addEntry = async (entryData: Omit<Entry, 'id' | 'userId' | 'createdAt'>): Promise<Entry> => {
    try {
      const newEntry = {
        ...entryData,
        userId,
        createdAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, COLLECTION_NAME), newEntry);
      const docSnap = await getDoc(docRef);

      const createdEntry: Entry = {
        id: docSnap.id,
        ...docSnap.data() as Omit<Entry, 'id'>
      };

      setEntries(prev => [createdEntry, ...prev]);
      updateCache(cache.key, [createdEntry, ...entries], cache.lastUpdate);

      return createdEntry;
    } catch (err) {
      console.error('Error adding entry:', err);
      setError(err as Error);
      throw err;
    }
  };

  const deleteEntry = async (entryId: string): Promise<void> => {
    const previousEntries = [...entries];
    try {
      const filteredEntries = entries.filter(item => item.id !== entryId);
      setEntries(filteredEntries);
      updateCache(cache.key, filteredEntries, cache.lastUpdate);

      await deleteDoc(doc(db, COLLECTION_NAME, entryId));
    } catch (err) {
      setEntries(previousEntries);
      updateCache(cache.key, previousEntries, cache.lastUpdate);

      console.error('Error deleting entry:', err);
      setError(err as Error);
      throw err;
    }
  };

  return { entries, loading, error, addEntry, deleteEntry };
};