'use client';

import { useAuthContext } from '@/providers/AuthProvider';
import { LogOut } from 'lucide-react';

import React from 'react';

import { AddProductForm } from '@/components/AddProductForm';
import CalorieGoalSetting from '@/components/CalorieGoalSetting';
import { ProductsList } from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useCalorieGoals } from '@/hooks/useCalorieGoals';
import { useProducts } from '@/hooks/useProducts';

const SettingsPage = () => {
  const { user, logout } = useAuthContext();
  const { goalHistory, currentGoal, setNewGoal, loading: goalLoading } = useCalorieGoals(user?.uid);
  const { products, addProduct, deleteProduct, loading: productsLoading } = useProducts(user?.uid);

  if (productsLoading || goalLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-background shadow-sm">
        <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-2">
          <h1 className="text-lg font-semibold">Налаштування</h1>
          <Button onClick={logout} size="sm" variant="ghost">
            <LogOut size={16} /> Вийти
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-xl px-4 py-4">
        <Tabs defaultValue="products">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="products" className="flex-1">
              Мої продукти
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex-1">
              Цілі
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card>
              <CardContent>
                <AddProductForm onAddProduct={addProduct} />
                <div className="divider">Мої продукти</div>
                <ProductsList products={products} onDeleteProduct={deleteProduct} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals">
            <Card>
              <CardContent>
                <CalorieGoalSetting
                  currentGoal={currentGoal}
                  onSetGoal={setNewGoal}
                  goalHistory={goalHistory}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
