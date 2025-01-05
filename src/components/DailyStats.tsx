import { formatDate } from "@/utils/formateDate";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { Entry } from "@/types";

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
}

export const DailyStats: React.FC<DailyStatsProps> = ({ entries, date, onDeleteEntry }) => {
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, entry: defaultEntry });
  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);

  const handleDelete = (entry: Entry) => {
    setDeleteModal({ isOpen: true, entry });
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
        <div className="flex justify-between items-center">
          <h2 className="card-title text-base">
            {formatDate(date)}
          </h2>
          <div className="text-lg font-bold">
            {totalCalories} ккал
          </div>
        </div>
        <div className="divider my-2"></div>
        <div className="space-y-2">
          {entries.map(entry => (
            <div key={entry.id} className="flex justify-between items-center px-2 bg-base-200 rounded-lg">
              <div>
                <span className="font-medium">{entry.productName}</span>
                <span className="text-sm text-base-content/70"> • {entry.grams}г</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">{entry.calories} ккал</span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => handleDelete(entry)}
                >
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