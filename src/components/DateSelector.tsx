import { formatDate } from "@/utils/formateDate";
import { getTodayDate } from "@/utils/getTodayDate";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="flex justify-center items-center gap-4 my-4">
            <button className="btn btn-sm btn-neutral btn-outline btn-circle" onClick={() => onDateChange(addDays(date, -1))}>
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="btn btn-sm btn-neutral btn-outline btn-ghost gap-2" onClick={() => onDateChange(getTodayDate())}>
                <Calendar className="w-5 h-5" />
                {formatDate(date)}
            </button>
            <button className="btn btn-sm btn-neutral btn-outline btn-circle" onClick={() => onDateChange(addDays(date, 1))}>
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};