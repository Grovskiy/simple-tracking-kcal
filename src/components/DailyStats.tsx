import { Entry } from '@/types';
import { formatDate } from '@/utils/formateDate';
import { Trash2 } from 'lucide-react';

import { useState } from 'react';

import { DeleteConfirmModal } from './DeleteConfirmModal';

interface DailyStatsProps {
  entries: Entry[];
  date: string;
  onDeleteEntry: (productId: Entry['id']) => void;
}

const CALORIE_GOAL_KEY = 'calorieGoal';

const getCalorieGoalStorage = (): string => {
  const saved = localStorage.getItem(CALORIE_GOAL_KEY);
  return saved ? saved : '1700';
};

const setCalorieGoalStorage = (goal: string): void => {
  localStorage.setItem(CALORIE_GOAL_KEY, goal);
};

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
  const [calorieGoal, setCalorieGoal] = useState(getCalorieGoalStorage());
  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);
  const remainingCalories = parseInt(calorieGoal) - totalCalories;
  const progressPercentage = Math.min((totalCalories / parseInt(calorieGoal)) * 100, 100);

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

  const statusColors = getStatusColors();

  const handleDelete = (entry: Entry) => {
    setDeleteModal({ isOpen: true, entry });
  };

  const handleChagenCalorieGoal = (goal: string) => {
    setCalorieGoal(goal);
    setCalorieGoalStorage(goal);
  };

  const confirmDelete = () => {
    if (deleteModal.entry) {
      onDeleteEntry(deleteModal.entry.id);
      setDeleteModal({ isOpen: false, entry: defaultEntry });
    }
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-base">{formatDate(date)}</h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{totalCalories}</span>

            <details className="dropdown dropdown-end w-full">
              <summary className="btn btn-sm text-sm text-base-content/70">
                / {calorieGoal} ккал
              </summary>
              <div className="dropdown-content glass z-[1] mt-2 rounded-box p-2 shadow">
                <label className="form-controlmax-w-xs">
                  <div className="label">
                    <span className="label-text">Денна ціль</span>
                  </div>
                  <input
                    type="number"
                    placeholder="1700"
                    className="input input-md input-bordered w-28 text-base"
                    value={calorieGoal}
                    onChange={(e) => handleChagenCalorieGoal(e.target.value)}
                  />
                </label>
              </div>
            </details>
          </div>
        </div>
        <div>
          <div className="mb-1 h-2 w-full rounded-full bg-base-200">
            <div
              className={`h-2 rounded-full ${statusColors.bar}`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="mb-1 flex justify-between text-sm">
            <span>Прогрес</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="mt-1 flex justify-between text-sm">
            <span>Залишилось:</span>
            <span className={statusColors.text}>
              {Math.abs(remainingCalories)} ккал
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
