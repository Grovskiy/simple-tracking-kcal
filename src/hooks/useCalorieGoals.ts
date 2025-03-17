import type { CalorieGoal } from '@/types';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

import { useEffect, useState } from 'react';

import { db } from '@/lib/firebase';

export const useCalorieGoals = (userId: string | undefined, selectedDate?: string) => {
  const [goalHistory, setGoalHistory] = useState<CalorieGoal[]>([]);
  const [currentGoal, setCurrentGoal] = useState<number | null>(null);
  const [goalForDate, setGoalForDate] = useState<number | null>(null);
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

      if (goals.length > 0) {
        setCurrentGoal(goals[0].value);
      }

      if (selectedDate) {
        const selectedDateTimestamp = new Date(selectedDate).getTime();

        let appropriateGoal = null;

        for (const goal of goals) {
          const goalStartDate = new Date(goal.startDate).setHours(0, 0, 0, 0);

          if (goalStartDate <= selectedDateTimestamp) {
            appropriateGoal = goal;
            break;
          }
        }
        setGoalForDate(appropriateGoal ? appropriateGoal.value : null);
      } else {
        setGoalForDate(goals.length > 0 ? goals[0].value : null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId, selectedDate]);

  const setNewGoal = async (value: number) => {
    if (!userId) return;
    try {
      await addDoc(collection(db, 'calorieGoals'), {
        userId,
        value,
        startDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      });

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
    goalForDate,
    setNewGoal,
    loading,
  };
};
