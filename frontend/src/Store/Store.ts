import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);
        
        if (existingItem) {
          // If product already exists, increase quantity
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          // Add new product with quantity 1
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }
      }),
      
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId),
      })),
      
      updateQuantity: (productId, quantity) => set((state) => {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          return {
            cart: state.cart.filter(item => item.id !== productId),
          };
        }
        
        return {
          cart: state.cart.map(item =>
            item.id === productId
              ? { ...item, quantity }
              : item
          ),
        };
      }),
      
      clearCart: () => set({ cart: [] }),
      
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => {
          const itemPrice = item.discount 
            ? item.price - (item.price * item.discount / 100)
            : item.price;
          return total + (itemPrice * item.quantity);
        }, 0);
      },
    }),
    {
      name: 'cart-storage', 
    }
  )
);

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));