export interface Product {
  id: string;
  name: string;
  caloriesPer100g: number;
  userId: string;
  createdAt: string;
}

export interface Entry {
  id: string;
  productId: string;
  productName: string;
  grams: number;
  calories: number;
  date: string;
  userId: string;
  createdAt: string;
}
