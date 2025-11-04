
import { create } from 'zustand';

interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: string;
  name: string;
  description?: string;
  basicInfo?: string;
  image?: string;
  brand?: string;
  flavour?: string;
  dietType?: string;
  weight?: string;
  speciality?: string;
  ingredients?: string;
  items: number;
  price: number;
  rating?: number;
  reviewsCount?: number;
  stock?: number;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  flag?: "HOT" | "SALE" | "NEW";
  discount?: number | null;
  category?: Category;
}

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));