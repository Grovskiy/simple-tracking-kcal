import type { CalorieGoal, UserProfile } from '@/types';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { useEffect, useState } from 'react';

import { db } from '@/lib/firebase';

export const useCalorieGoals = (userId: string | undefined) => {
  const [goalHistory, setGoalHistory] = useState<CalorieGoal[]>([]);
  const [currentGoal, setCurrentGoal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, 'calorieGoals'),
      where('userId', '==', userId),
      orderBy('startDate', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const goals = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CalorieGoal[];

      setGoalHistory(goals);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  useEffect(() => {
    if (!userId) return;

    const docRef = doc(db, 'userProfiles', userId);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setCurrentGoal((doc.data() as UserProfile).currentGoal);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const setNewGoal = async (value: number) => {
    try {
      await addDoc(collection(db, 'calorieGoals'), {
        userId,
        value,
        startDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      });

      // Оновлюємо поточну ціль в профілі
      await setDoc(
        doc(db, 'userProfiles', userId),
        {
          userId,
          currentGoal: value,
          lastUpdated: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (error) {
      console.error('Error setting new goal:', error);
      throw error;
    }
  };

  return {
    goalHistory,
    currentGoal,
    setNewGoal,
    loading,
  };
};
