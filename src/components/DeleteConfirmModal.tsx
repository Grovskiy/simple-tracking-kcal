interface DeleteConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  itemName: string;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  itemName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open rounded-box">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Підтвердження видалення</h3>
        <p className="py-4">Ви впевнені, що хочете видалити {itemName}?</p>
        <div className="modal-action">
          <button className="btn" onClick={onCancel}>
            Скасувати
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Видалити
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onCancel}></div>
    </div>
  );
};
