import type { CalorieGoal, UserProfile } from '@/types';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';

const GOALS_COLLECTION = 'calorieGoals';
const PROFILES_COLLECTION = 'userProfiles';

interface CacheData<T> {
  data: T;
  lastUpdate: string;
}

interface UseCalorieGoalsReturn {
  goalHistory: CalorieGoal[];
  currentGoal: number | null;
  loading: boolean;
  error: Error | null;
  setNewGoal: (value: number) => Promise<void>;
}

const getCachedData = <T>(cacheKey: string): CacheData<T> | null => {
  const cached = localStorage.getItem(cacheKey);
  return cached ? JSON.parse(cached) : null;
};

const updateCache = <T>(key: string, data: T, lastUpdate: string): void => {
  localStorage.setItem(key, JSON.stringify({ data, lastUpdate }));
};

export const useCalorieGoals = (userId: string | undefined): UseCalorieGoalsReturn => {
  const [goalHistory, setGoalHistory] = useState<CalorieGoal[]>([]);
  const [currentGoal, setCurrentGoal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return;

    let isMounted = true;

    const loadGoalHistory = async () => {
      try {
        const cacheKey = `goalHistory_${userId}`;
        const cachedData = getCachedData<CalorieGoal[]>(cacheKey);

        if (cachedData && isMounted) {
          setGoalHistory(cachedData.data);
          setLoading(false);

          const lastUpdateQuery = query(
            collection(db, GOALS_COLLECTION),
            where('userId', '==', userId),
            where('createdAt', '>', cachedData.lastUpdate),
            orderBy('createdAt', 'desc')
          );

          const snapshot = await getDocs(lastUpdateQuery);
          if (snapshot.empty) return;
        }

        const q = query(
          collection(db, GOALS_COLLECTION),
          where('userId', '==', userId),
          orderBy('startDate', 'desc')
        );

        const snapshot = await getDocs(q);
        const goals = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as CalorieGoal[];

        if (isMounted) {
          const lastUpdate = new Date().toISOString();
          updateCache(cacheKey, goals, lastUpdate);
          setGoalHistory(goals);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading goal history:', err);
        if (isMounted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    loadGoalHistory();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  useEffect(() => {
    if (!userId) return;

    let isMounted = true;

    const loadCurrentGoal = async () => {
      try {
        const cacheKey = `currentGoal_${userId}`;
        const cachedData = getCachedData<number>(cacheKey);

        if (cachedData) {
          setCurrentGoal(cachedData.data);
        }

        const docRef = doc(db, PROFILES_COLLECTION, userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && isMounted) {
          const profile = docSnap.data() as UserProfile;
          const lastUpdate = new Date().toISOString();
          updateCache(cacheKey, profile.currentGoal, lastUpdate);
          setCurrentGoal(profile.currentGoal);
        }
      } catch (err) {
        console.error('Error loading current goal:', err);
        if (isMounted) {
          setError(err as Error);
        }
      }
    };

    loadCurrentGoal();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const setNewGoal = async (value: number): Promise<void> => {
    if (!userId) return;

    const previousGoalHistory = [...goalHistory];
    const previousCurrentGoal = currentGoal;

    try {
      const newGoal: Partial<CalorieGoal> = {
        userId,
        value,
        startDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };

      setCurrentGoal(value);
      setGoalHistory(prev => [{ ...newGoal, id: 'temp' } as CalorieGoal, ...prev]);

      await addDoc(collection(db, GOALS_COLLECTION), newGoal);

      await setDoc(
        doc(db, PROFILES_COLLECTION, userId),
        {
          userId,
          currentGoal: value,
          lastUpdated: new Date().toISOString(),
        },
        { merge: true }
      );

      const lastUpdate = new Date().toISOString();
      updateCache(`goalHistory_${userId}`, goalHistory, lastUpdate);
      updateCache(`currentGoal_${userId}`, value, lastUpdate);

    } catch (err) {
      setGoalHistory(previousGoalHistory);
      setCurrentGoal(previousCurrentGoal);

      console.error('Error setting new goal:', err);
      setError(err as Error);
      throw err;
    }
  };

  return {
    goalHistory,
    currentGoal,
    loading,
    error,
    setNewGoal,
  };
};