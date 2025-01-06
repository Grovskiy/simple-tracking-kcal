import { useAuthContext } from '@/providers/AuthProvider';
import { Entry } from '@/types';
import { formatDate } from '@/utils/formateDate';
import { Trash2 } from 'lucide-react';

import { useState } from 'react';

import { useCalorieGoals } from '@/hooks/useCalorieGoals';

import CalorieGoalSetting from './CalorieGoalSetting';
import { DeleteConfirmModal } from './DeleteConfirmModal';

interface DailyStatsProps {
  entries: Entry[];
  date: string;
  onDeleteEntry: (productId: Entry['id']) => void;
}

const defaultEntry = {
  id: '',
  productId: '',
  productName: '',
  grams: 0,
  calories: 0,
  date: '',
  userId: '',
  createdAt: '',
};

export const DailyStats: React.FC<DailyStatsProps> = ({ entries, date, onDeleteEntry }) => {
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, entry: defaultEntry });

  const { user } = useAuthContext();

  const { goalHistory, currentGoal, setNewGoal, loading: goalLoading } = useCalorieGoals(user?.uid);

  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);
  const remainingCalories = currentGoal ? currentGoal - totalCalories : 0;
  const progressPercentage = Math.min((totalCalories / (currentGoal ? currentGoal : 0)) * 100, 100);

  const getStatusColors = () => {
    if (remainingCalories >= 0) {
      return {
        bar: 'bg-primary',
        text: 'text-primary',
      };
    }
    if (Math.abs(remainingCalories) <= 80) {
      return {
        bar: 'bg-warning',
        text: 'text-warning',
      };
    }
    return {
      bar: 'bg-error',
      text: 'text-error',
    };
  };

  const getProgressColors = () => {
    if (remainingCalories >= 0) {
      return {
        bar: 'progress-primary',
        text: 'text-primary',
      };
    }
    if (Math.abs(remainingCalories) <= 80) {
      return {
        bar: 'progress-warning',
        text: 'text-warning',
      };
    }
    return {
      bar: 'progress-error',
      text: 'text-error',
    };
  };

  const statusColors = getStatusColors();

  const progressColor = getProgressColors();

  const handleDelete = (entry: Entry) => {
    setDeleteModal({ isOpen: true, entry });
  };

  const confirmDelete = () => {
    if (deleteModal.entry) {
      onDeleteEntry(deleteModal.entry.id);
      setDeleteModal({ isOpen: false, entry: defaultEntry });
    }
  };

  // if (goalLoading) return (<div className="flex items-center justify-center">
  //   <span className="loading loading-ring loading-lg"></span>
  // </div>)

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-base">{formatDate(date)}</h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{totalCalories}</span>

            <details className="dropdown dropdown-end w-full">
              <summary className="btn btn-sm text-sm text-base-content/70">
                / {goalLoading ? <span className="loading loading-ring"></span> : currentGoal} ккал
              </summary>
              <div className="dropdown-content glass z-[1] mt-2 rounded-box p-2 shadow">
                <CalorieGoalSetting
                  currentGoal={currentGoal}
                  onSetGoal={setNewGoal}
                  goalHistory={goalHistory}
                />
              </div>
            </details>
          </div>
        </div>
        <div>
          <progress
            className={`progress ${progressColor.bar}`}
            value={goalLoading ? undefined : progressPercentage}
            max="100"
          ></progress>
          <div className="mb-1 flex justify-between text-sm">
            <span>Прогрес</span>
            <span>
              {goalLoading ? (
                <span className="loading loading-ring loading-xs mr-1"></span>
              ) : (
                Math.round(progressPercentage)
              )}
              %
            </span>
          </div>
          <div className="mt-1 flex justify-between text-sm">
            <span>Залишилось:</span>
            <span className={statusColors.text}>
              {goalLoading ? (
                <span className="loading loading-ring loading-xs"></span>
              ) : (
                Math.abs(remainingCalories)
              )}{' '}
              ккал
              {remainingCalories >= 0
                ? ''
                : Math.abs(remainingCalories) <= 80
                  ? ' трохи перевищено'
                  : ' перевищено'}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between rounded-lg bg-base-200 px-2"
            >
              <div>
                <span className="font-medium">{entry.productName}</span>
                <span className="text-sm text-base-content/70"> • {entry.grams}г</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">{entry.calories} ккал</span>
                <button className="btn btn-ghost btn-sm" onClick={() => handleDelete(entry)}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <DeleteConfirmModal
          isOpen={deleteModal.isOpen}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteModal({ isOpen: false, entry: defaultEntry })}
          itemName={`${deleteModal.entry?.productName} (${deleteModal.entry?.grams}г)`}
        />
      </div>
    </div>
  );
};
