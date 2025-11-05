"use client"

import { DealsOfTheDayProductCard } from "./DealsOfTheDayCard"
import { useProductStore } from '@/Store/Store';

const DealOfTheDay = () => {
  const products = useProductStore((state) => state.products);
  
  
  const dealProducts = products?.slice(0, 4) || [];

  return (
    <div className="w-full px-4 py-8 overflow-hidden">
      <div className="flex justify-between w-full py-2">
        <span className="text-[32px] leading-[38px] font-poppins font-bold text-[#253D4E]">Deal of the Day</span>
        <span className="text-[16px] leading-[38px] font-poppins font-bold text-[#253D4E] cursor-pointer hover:text-[#3BB77E] transition-colors">All Deals &gt;</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center py-4">
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
            <p className="text-gray-400 text-lg">No deals available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DealOfTheDay