import { Product } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";

interface AddProductFormProps {
    onAddProduct: (productData: Omit<Product, 'id' | 'userId' | 'createdAt'>) => void;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && calories) {
            onAddProduct({ name, caloriesPer100g: parseInt(calories) });
            setName('');
            setCalories('');
        }
    };

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Додати новий продукт</h2>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Назва продукту"
                        className="input input-sm input-bordered flex-1 w-full max-w-xs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Ккал на 100г"
                        className="input input-sm input-bordered w-28"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                    <button type="submit" className="btn btn-sm btn-primary">
                        <Plus className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};
