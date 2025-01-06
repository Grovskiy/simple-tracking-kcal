import { Calendar } from 'lucide-react';

import React, { useState } from 'react';

interface CalorieGoalSettingProps {
  currentGoal: number | null;
  onSetGoal: (value: number) => Promise<void>;
  goalHistory: Array<{
    value: number;
    startDate: string;
  }>;
}

const CalorieGoalSetting: React.FC<CalorieGoalSettingProps> = ({
  currentGoal,
  onSetGoal,
  goalHistory,
}) => {
  const [newGoal, setNewGoal] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal) {
      try {
        await onSetGoal(Number(newGoal));
        setNewGoal('');
      } catch (error) {
        console.error('Error setting goal:', error);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="card compact w-full">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-base">Ціль калорій</h2>
          <div className="text-base">{currentGoal ? `${currentGoal} ккал` : 'Не встановлено'}</div>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            type="number"
            placeholder="Нова ціль (ккал)"
            className="input input-sm input-bordered flex-1 text-base"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Зберегти
          </button>
        </form>

        {goalHistory.length > 0 && (
          <>
            <div className="divider">Історія змін</div>
            <div className="space-y-2">
              {goalHistory.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-base-200 p-2"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(goal.startDate)}</span>
                  </div>
                  <span className="font-medium">{goal.value} ккал</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CalorieGoalSetting;
