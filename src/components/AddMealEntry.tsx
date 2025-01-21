"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import type { Entry, Product } from "@/types"
import Select from "react-select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Option {
  value: string
  label: string
}

interface AddMealEntryProps {
  products: Product[]
  onAddEntry: (entryData: Omit<Entry, "id" | "userId" | "createdAt">) => void
  selectedDate: string
}

export const AddMealEntry: React.FC<AddMealEntryProps> = ({ products, onAddEntry, selectedDate }) => {
  const [selectedProduct, setSelectedProduct] = useState<Option | null>(null)
  const [grams, setGrams] = useState<string>("")
  const [open, setOpen] = useState(false)

  const productOptions: Option[] = products.map((product) => ({
    value: product.id,
    label: `${product.name} (${product.caloriesPer100g} ккал/100г)`,
  }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedProduct && grams) {
      const product = products.find((p) => p.id === selectedProduct.value)
      if (!product) return

      const calories = Math.round((product.caloriesPer100g * Number.parseInt(grams)) / 100)

      onAddEntry({
        productId: selectedProduct.value,
        grams: Number.parseInt(grams),
        date: selectedDate,
        productName: product.name,
        calories,
      })

      setSelectedProduct(null)
      setGrams("")
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-20 right-6 h-14 w-14 rounded-full p-0" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Додати спожиту їжу</DialogTitle>
          <DialogDescription>
            Додайте продукти до свого щоденника. Натисніть кнопку "Додати" після завершення.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select
            options={productOptions}
            value={selectedProduct}
            onChange={setSelectedProduct}
            placeholder="Виберіть продукт"
            className="react-select-container"
            classNamePrefix="react-select"
          />
          <Input type="number" placeholder="Грам" value={grams} onChange={(e) => setGrams(e.target.value)} />
          <Button type="submit" className="w-full">
            Додати
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

