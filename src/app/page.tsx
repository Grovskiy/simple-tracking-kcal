"use client"
import CalorieTracker from "@/components/CalorieTracker";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useEntries } from "@/hooks/useEntries";
import { useProducts } from "@/hooks/useProducts";
import { useAuthContext } from "@/providers/AuthProvider";
import { LogOut } from "lucide-react";

export default function Home() {
  const { user, logout } = useAuthContext();

  const { 
    products, 
    addProduct, 
    deleteProduct,
    loading: productsLoading 
  } = useProducts(user?.uid);
  
  const { 
    entries, 
    addEntry, 
    deleteEntry,
    loading: entriesLoading 
  } = useEntries(user?.uid);

  return (
    <ProtectedRoute>
      <div className="grid grid-rows-[10px_1fr_55px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <div className="p-4"><p>Вітаю, {user?.email}</p></div>
          {productsLoading || entriesLoading ? 'Loading...' : <CalorieTracker
            products={products}
            entries={entries}
            onAddProduct={addProduct}
            onAddEntry={addEntry}
            onDeleteProduct={deleteProduct}
            onDeleteEntry={deleteEntry}
          />}
          
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <button onClick={logout} className="btn btn-sm">
            Button
            <LogOut size={16} />
          </button>
        </footer>
      </div>
    </ProtectedRoute>
  );
}
