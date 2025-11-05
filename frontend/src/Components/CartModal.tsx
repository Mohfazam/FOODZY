"use client"

import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { useCartStore } from '@/Store/Store';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCartStore();

  const handleQuantityChange = (productId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
     
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[600px] max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        
        <div className="flex justify-between items-center px-3 sm:px-6 py-2.5 sm:py-4 border-b border-gray-200">
          <h2 className="text-[18px] sm:text-[24px] font-bold text-[#253D4E] font-poppins">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-3 sm:py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-8 sm:py-12">
              <ShoppingCart size={48} className="sm:w-16 sm:h-16 text-gray-300 mb-3 sm:mb-4" />
              <p className="text-gray-500 text-[14px] sm:text-[16px] font-poppins">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-2.5 sm:space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-2.5 sm:p-4 border border-gray-200 rounded-lg">
                  
                  <div className="flex gap-2.5 sm:gap-4 flex-1">
                    
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0">
                      <img 
                        src={item.image || "/Product1.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[12px] sm:text-[14px] font-medium text-[#253D4E] font-poppins line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-[10px] sm:text-[12px] text-gray-500 mt-0.5">{item.brand}</p>
                      
                      
                      <div className="sm:hidden mt-1.5">
                        <span className="text-[14px] font-bold text-[#3BB77E] font-poppins">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  
                  <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
                    
                    <div className="flex items-center gap-0.5 sm:gap-1 border border-gray-300 rounded-md bg-white">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                        className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors text-[#253D4E] active:bg-gray-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                      </button>
                      <span className="px-2 sm:px-3 text-[12px] sm:text-[14px] font-bold text-[#253D4E] min-w-6 sm:min-w-7 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                        className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors text-[#253D4E] active:bg-gray-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                      </button>
                    </div>

                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="hidden sm:inline text-[16px] font-bold text-[#3BB77E] font-poppins whitespace-nowrap">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1 active:scale-95"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        
        {cart.length > 0 && (
          <div className="px-3 sm:px-6 py-2.5 sm:py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center mb-2.5 sm:mb-4">
              <span className="text-[15px] sm:text-[18px] font-bold text-[#253D4E] font-poppins">Total:</span>
              <span className="text-[18px] sm:text-[24px] font-bold text-[#3BB77E] font-poppins">
                ₹{getTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={clearCart}
                className="flex-1 py-2 sm:py-3 border-2 border-gray-300 rounded-lg text-[12px] sm:text-[14px] font-semibold text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {
                  onClose();
                  
                }}
                className="flex-1 py-2 sm:py-3 bg-[#F53E32] rounded-lg text-[12px] sm:text-[14px] font-semibold text-white hover:bg-[#f23224] active:bg-[#e02a1d] transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};