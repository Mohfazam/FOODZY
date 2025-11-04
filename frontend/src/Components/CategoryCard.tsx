import React from 'react'

const CategoryCard = () => {
  return (
    <div className="w-[482px] h-[300px] rounded-[10px] relative overflow-hidden">
      <img
        src="/Category-1.svg"
        alt="Category1"
        className="w-full h-full object-cover absolute inset-0"
      />

      
      <div className="absolute inset-0 z-10 flex items-center pl-[50px]">
        <div className="flex flex-col gap-6">
          <span className="w-[203px] text-[24px] leading-6 text-[#253D4E] font-semibold">
            Everyday Fresh & Clean With Our Products
          </span>
          <button className="bg-[#F53E32] text-white rounded-sm w-[103px] h-8 px-5 py-2 font-medium text-[12px] leading-[15px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
