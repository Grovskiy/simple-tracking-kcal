import { formatDate } from '@/utils/formateDate';
import { getTodayDate } from '@/utils/getTodayDate';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from './ui/button';

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
    <div className="flex items-center justify-between gap-4">
      <Button onClick={() => onDateChange(addDays(date, -1))} variant="ghost">
        <ChevronLeft className="!size-5" />
      </Button>
      <Button onClick={() => onDateChange(getTodayDate())} variant="ghost" className="text-base">
        <Calendar size={16} />
        {formatDate(date)}
      </Button>
      <Button onClick={() => onDateChange(addDays(date, 1))} variant="ghost">
        <ChevronRight className="!size-5" />
      </Button>
    </div>
  );
};
