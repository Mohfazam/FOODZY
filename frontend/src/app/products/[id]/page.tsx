'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [priceRange, setPriceRange] = useState({ min: 200, max: 500 });
  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  return (
    <div>
      <div className='w-full bg-[#F53E32] mt-6 mb-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex justify-between items-center'>
            <span className='text-white font-semibold'>Products</span>

            <div className="flex gap-4 hover:cursor-pointer text-white">
              <span>Home</span>
              <span>-</span>
              <span>Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-2">
          <div className="w-[306px] h-[578px] rounded-[5px] bg-[#F7F7F8] border border-[#E9E9E9] px-6 py-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-[16px] leading-[25px] tracking-[0.48px] text-[#2B2B2D] font-medium font-poppins">Product Category</span>
                <div className="bg-[#e9e9e9] h-px" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-evenly">
                  <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border border-[#DDDDDD]" />
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">Juice & Drinks</span>
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">[20]</span>
                </div>

                <div className="flex justify-evenly">
                  <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border border-[#DDDDDD]" />
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">Juice & Drinks</span>
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">[20]</span>
                </div>

                <div className="flex justify-evenly">
                  <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border border-[#DDDDDD]" />
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">Juice & Drinks</span>
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">[20]</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <span className="text-[16px] leading-[25px] tracking-[0.48px] text-[#2B2B2D] font-medium font-poppins">Filter By Price</span>
                <div className="bg-[#e9e9e9] h-px" />
              </div>

              <div className="flex flex-col gap-3">

                <div className="px-2 py-4">
                  <div className="relative h-1 bg-gray-300 rounded-full">

                    <div
                      className="absolute h-1 bg-[#F53E32] rounded-full"
                      style={{
                        left: `${(priceRange.min / MAX_PRICE) * 100}%`,
                        right: `${100 - (priceRange.max / MAX_PRICE) * 100}%`
                      }}
                    />


                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange.min}
                      onChange={(e) => {
                        const value = Math.min(Number(e.target.value), priceRange.max - 10);
                        setPriceRange({ ...priceRange, min: value });
                      }}
                      className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#F53E32] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#3BB77E] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                    />


                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange.max}
                      onChange={(e) => {
                        const value = Math.max(Number(e.target.value), priceRange.min + 10);
                        setPriceRange({ ...priceRange, max: value });
                      }}
                      className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#F53E32] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#3BB77E] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                    />
                  </div>
                </div>


                <div>
                  <span className="text-[15px] font-bold leading-[18px] tracking-[0.48px] text-[#000000]">Price : </span>
                  <span className="text-[15px] font-bold leading-[18px] tracking-[0.48px] text-[#7A7A7A]">
                    ₹{priceRange.min} - ₹{priceRange.max}
                  </span>
                </div>

                <button className="w-20 h-10 rounded-[5px] bg-[#F53E32] hover:bg-[#f63224]">
                  Filter
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[25px] tracking-[0.48px] text-[#2B2B2D] font-medium font-poppins">Product Tags</span>
                  <div className="bg-[#e9e9e9] h-px" />
                </div>


                <div className="grid grid-cols-2 grid-rows-2 gap-3">
                  <div className="w-[116px] h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center">
                    <span className="text-[14px] leading-[30px] tracing-[0.48px] font-normal text-[#7A7A7A]">Vegetables</span>
                  </div>

                  <div className="w-[116px] h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center">
                    <span className="text-[14px] leading-[30px] tracing-[0.48px] font-normal text-[#7A7A7A]">Juice</span>
                  </div>

                  <div className="w-[116px] h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center">
                    <span className="text-[14px] leading-[30px] tracing-[0.48px] font-normal text-[#7A7A7A]">Food</span>
                  </div>

                  <div className="w-[116px] h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center">
                    <span className="text-[14px] leading-[30px] tracing-[0.48px] font-normal text-[#7A7A7A]">Dry Fruits</span>
                  </div>

                  <div className="w-[116px] h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center">
                    <span className="text-[14px] leading-[30px] tracing-[0.48px] font-normal text-[#7A7A7A]">Dry Fruits</span>
                  </div>

                  <div className="w-[116px] h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center">
                    <span className="text-[14px] leading-[30px] tracing-[0.48px] font-normal text-[#7A7A7A]">Dry Fruits</span>
                  </div>
                </div>

              </div>



            </div>
          </div>
          <div>Right</div>
        </div>
      </div>
    </div>
  )
}

export default page