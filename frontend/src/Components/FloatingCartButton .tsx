"use client"

import { ShoppingCart } from "lucide-react"
import { useCartStore, useCartModalStore } from '@/Store/Store';

export const FloatingCartButton = () => {
  const cart = useCartStore((state) => state.cart);
  const openCart = useCartModalStore((state) => state.openCart);
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 bg-white hover:bg-gray-50 text-[#253D4E] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group border border-gray-200 hover:cursor-pointer"
      aria-label="Open shopping cart"
    >
      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
        <ShoppingCart size={24} className="sm:w-7 sm:h-7" strokeWidth={2} />
        
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#F53E32] text-white text-[11px] sm:text-[12px] font-bold rounded-full min-w-5 sm:min-w-[22px] h-5 sm:h-[22px] flex items-center justify-center border-2 border-white shadow-md animate-in zoom-in duration-200">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </div>

      <div className="absolute inset-0 rounded-full bg-[#3BB77E] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </button>
  );
};