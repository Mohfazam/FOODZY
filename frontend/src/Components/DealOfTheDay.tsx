"use client"

import { DealsOfTheDayProductCard } from "./DealsOfTheDayCard"
import { useProductStore } from '@/Store/Store';

const DealOfTheDay = () => {
  const products = useProductStore((state) => state.products);
  
  const dealProducts = products?.slice(0, 4) || [];

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full py-2 gap-3 sm:gap-0">
          <span className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[30px] sm:leading-[34px] lg:leading-[38px] font-poppins font-bold text-[#253D4E]">
            Deal of the Day
          </span>
          <span className="text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-8 lg:leading-[38px] font-poppins font-bold text-[#253D4E] cursor-pointer hover:text-[#3BB77E] transition-colors">
            All Deals &gt;
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 lg:gap-4 justify-items-center py-4">
          {dealProducts.length > 0 ? (
            dealProducts.map((product) => (
              <DealsOfTheDayProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                flag={product.flag}
                discount={product.discount}
                category={product.category?.name || "Uncategorized"}
                rating={product.rating}
                brand={product.brand}
                price={product.price}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-base sm:text-lg">No deals available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DealOfTheDay