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
import type { Entry } from '@/types';

export const useEntries = (userId: string | undefined) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, 'entries'),
      where('userId', '==', userId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const entriesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Entry[];
      
      setEntries(entriesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  const addEntry = async (entryData: Omit<Entry, 'id' | 'userId' | 'createdAt'>) => {
    try {
      await addDoc(collection(db, 'entries'), {
        ...entryData,
        userId,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error adding entry:', error);
      throw error;
    }
  };

  const deleteEntry = async (entryId: string) => {
    try {
      await deleteDoc(doc(db, 'entries', entryId));
    } catch (error) {
      console.error('Error deleting entry:', error);
      throw error;
    }
  };

  return { entries, loading, addEntry, deleteEntry };
};