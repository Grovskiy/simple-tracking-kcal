import { useAuthContext } from '@/providers/AuthProvider';
import { Entry } from '@/types';
import { Trash2 } from 'lucide-react';

import { useState } from 'react';

import { useCalorieGoals } from '@/hooks/useCalorieGoals';

import { DeleteConfirmModal } from './DeleteConfirmModal';
import { Card, CardContent } from './ui/card';
import { CenteredProgress } from './ui/centered-progress';

interface DailyStatsProps {
  entries: Entry[];
  onDeleteEntry: (productId: Entry['id']) => void;
  selectedDate: string;
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

export const DailyStats: React.FC<DailyStatsProps> = ({ entries, onDeleteEntry, selectedDate }) => {
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, entry: defaultEntry });

  const { user } = useAuthContext();

  const { goalForDate, loading: goalLoading } = useCalorieGoals(user?.uid, selectedDate);

  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);
  const remainingCalories = goalForDate ? goalForDate - totalCalories : 0;
  const progressPercentage = goalForDate ? (totalCalories / goalForDate) * 100 : 0;

  const getStatusColors = () => {
    if (remainingCalories >= 0) {
      return {
        bar: 'bg-primary',
        text: 'text-primary',
      };
    }
    if (Math.abs(remainingCalories) <= 110) {
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
    if (Math.abs(remainingCalories) <= 110) {
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

  if (goalLoading)
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  return (
    <div>
      <Card className="mb-4">
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">Прогрес</span>
            <span className={`text-lg font-medium ${statusColors.text}`}>
              {' '}
              {goalLoading ? (
                <span className="loading loading-ring loading-xs mr-1"></span>
              ) : (
                Math.round(progressPercentage)
              )}
              %
            </span>
          </div>
          <div>
            <progress
              className={`progress ${progressColor.bar}`}
              value={goalLoading ? undefined : progressPercentage}
              max="100"
            ></progress>
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Спожито</p>
                <p className="font-medium">{totalCalories} ккал</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Залишилось</p>
                <p className="font-medium">
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
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Ціль</p>
                <p className="font-medium">{goalForDate} ккал</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="space-y-2">
            {entries.map((entry) => {
              const percentage = goalForDate ? ((entry.calories / goalForDate) * 100) : 0;
              return (
                <div
                  key={entry.id}
                  className="rounded-lg bg-base-200 pl-2"
                >
                  <div className='flex items-center justify-between gap-x-2'>
                    <div className='flex items-center gap-x-2 flex-1 min-w-0'>
                      <span className="font-medium truncate block overflow-hidden text-overflow-ellipsis whitespace-nowrap">{entry.productName}</span>
                      <span className="text-sm text-base-content/70 whitespace-nowrap"> • {entry.grams}г</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{entry.calories} ккал</span>
                      <button className="btn btn-ghost btn-sm" onClick={() => handleDelete(entry)}>
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                  <CenteredProgress value={percentage} className="-mt-[2px]" />
                </div>
              )
            })}
          </div>
          <DeleteConfirmModal
            isOpen={deleteModal.isOpen}
            onConfirm={confirmDelete}
            onCancel={() => setDeleteModal({ isOpen: false, entry: defaultEntry })}
            itemName={`${deleteModal.entry?.productName} (${deleteModal.entry?.grams}г)`}
          />
        </CardContent>
      </Card>
    </div>
  );
};