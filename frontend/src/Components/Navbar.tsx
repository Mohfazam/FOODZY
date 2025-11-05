"use client"

import { useState } from 'react';
import { ChevronDown, Phone, Search, UserRound, Heart, ShoppingCart } from "lucide-react"
import { useCartStore } from '@/Store/Store';
import { CartModal } from './CartModal';

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCartStore();

  return (
    <>
      <div>
        <div className="bg-[#FFFFFF] shadow-[0_1px_4px_0_#0000001A]">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="w-full flex justify-between items-center gap-2">
                <div className="w-[35px] h-[35px] rounded-[5px] border border-[#E9E9E9] flex justify-center items-center shrink-0">
                  <img src="menu.svg" alt="Menu" />
                </div>

                <div className="hidden xl:flex justify-evenly flex-1">
                  <button className="px-3 py-1">
                    <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                      Home
                    </span>
                  </button>

                  <button className="px-3 py-1 flex items-center gap-1">
                    <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                      Category
                    </span>
                    <ChevronDown size={18} className="text-[#000000]" />
                  </button>

                  <button className="px-3 py-1 flex items-center gap-1">
                    <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                      Products
                    </span>
                    <ChevronDown size={18} className="text-[#000000]" />
                  </button>

                  <button className="px-3 py-1 flex items-center gap-1">
                    <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                      Pages
                    </span>
                    <ChevronDown size={18} className="text-[#000000]" />
                  </button>

                  <button className="px-3 py-1 flex items-center gap-1">
                    <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                      Blogs
                    </span>
                    <ChevronDown size={18} className="text-[#000000]" />
                  </button>

                  <button className="px-3 py-1 flex items-center gap-1">
                    <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                      Elements
                    </span>
                    <ChevronDown size={18} className="text-[#000000]" />
                  </button>
                </div>

                <div className="hidden lg:flex gap-3 items-center shrink-0">
                  <Phone className="text-[#000000]" />
                  <span className="text-[#000000] font-normal text-[15px] leading-[22.5px] text-center tracing-[0.48px] whitespace-nowrap">+123 ( 456 ) ( 7890 )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:px-8 -mb-3">
          <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-4">
            <div className="shrink-0">
              <img src="/Main_Logo.svg" alt="Main Logo" className="w-36 sm:w-48 h-auto px-2" />
            </div>
            <div className="flex justify-center items-center w-full xl:w-auto flex-1 xl:flex-initial">
              <input type="text" className="border focus:border-[#64B496] outline-none focus:ring-0 border-[#64B496] rounded-tl-[5px] rounded-bl-[5px] w-full sm:w-[300px] md:w-[350px] xl:w-[408px] h-[45px] px-3 text-[#000000]" placeholder="Search For items..." />

              <div className="relative shrink-0">
                <select
                  className="w-[100px] sm:w-[130px] h-[45px] -ml-2 border border-[#64B496] bg-[#FFFFFF] py-2 pr-8 pl-3 text-[#212529] text-[13px] leading-5 appearance-none"
                >
                  <option value="">All Categories</option>
                  <option value="products">Vegetables</option>
                  <option value="categories">Cold Drinks</option>
                  <option value="blogs">Snacks</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#212529] pointer-events-none"
                />
              </div>

              <button className="w-[45px] h-[45px] bg-[#F53E32] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] shrink-0"> <Search className="text-white" size={15} /></button>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-4 shrink-0">
              
              <div className="relative group">
                <div className="flex justify-center items-center gap-1 sm:gap-2 text-[#000000] cursor-pointer">
                  <UserRound size={21} />
                  <span className="text-[13px] sm:text-[15px] leading-[15px] font-medium font-poppins">Account</span>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#253D4E] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  <span className="text-[13px] font-poppins">Coming Soon</span>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#253D4E] rotate-45"></div>
                </div>
              </div>

              
              <div className="relative group">
                <div className="flex justify-center items-center gap-1 sm:gap-2 text-[#000000] cursor-pointer">
                  <Heart size={21} />
                  <span className="text-[13px] sm:text-[15px] leading-[15px] font-medium font-poppins">Wishlist</span>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#253D4E] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  <span className="text-[13px] font-poppins">Coming Soon</span>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#253D4E] rotate-45"></div>
                </div>
              </div>

              
              <div className="relative">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex justify-center items-center gap-1 sm:gap-2 text-[#000000] cursor-pointer"
                >
                  <div className="relative">
                    <ShoppingCart size={21} />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#F53E32] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </div>
                  <span className="text-[13px] sm:text-[15px] leading-[15px] font-medium font-poppins">Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}