import { formatDate } from '@/utils/formateDate';
import { getTodayDate } from '@/utils/getTodayDate';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface DateSelectorProps {
  date: string;
  onDateChange: (date: string) => void;
}

const addDays = (dateString: string, days: number) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

export const DateSelector: React.FC<DateSelectorProps> = ({ date, onDateChange }) => {
  return (
    <div className="my-4 flex items-center justify-center gap-4">
      <button
        className="btn btn-circle btn-outline btn-neutral btn-sm"
        onClick={() => onDateChange(addDays(date, -1))}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="btn btn-ghost btn-outline btn-neutral btn-sm gap-2"
        onClick={() => onDateChange(getTodayDate())}
      >
        <Calendar className="h-5 w-5" />
        {formatDate(date)}
      </button>
      <button
        className="btn btn-circle btn-outline btn-neutral btn-sm"
        onClick={() => onDateChange(addDays(date, 1))}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
