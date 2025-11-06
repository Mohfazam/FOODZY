"use client"

import { Star } from "lucide-react";
import { useRouter } from "next/navigation"

const page = () => {
    const navigate = useRouter();
    return (
        <div>
            <div className='w-full bg-[#F53E32] mt-6 mb-6'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0'>
                        <span className='text-white font-semibold text-lg sm:text-base'>Products</span>

                        <div className="flex gap-2 sm:gap-4 hover:cursor-pointer text-white text-sm sm:text-base">
                            <span onClick={() => navigate.push("/")}>Home</span>
                            <span>-</span>
                            <span>Checkout</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div>
                    <div className="h-[1245px] w-[440px] flex flex-col gap-5 items-center">
                        <div className="w-[416px] h-[414px] flex flex-col gap-4 px-4 py-4 border border-[#E9E9E9] rounded-[5px]">
                            <span className="text-[20px] font-semibold font-poppins leading-6 text-[#000000]">Summary</span>
                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex justify-between">
                                    <span className="text-[14px] leading-6 text-[#7A7A7A]">Sub-Total</span>
                                    <span className="font-medium text-[15px] leading-6 text-[#000000]">$80.00</span>
                                </div>

                                <div className="w-full flex justify-between">
                                    <span className="text-[14px] leading-6 text-[#7A7A7A]">Delivery Charges</span>
                                    <span className="font-medium text-[15px] leading-6 text-[#000000]">$20.00</span>
                                </div>
                                <div className="bg-[#e9e9e9] h-px" />

                                <div className="flex justify-between mb-2">
                                    <span className="text-[16px] font-semibold leading-6 text-[#2B2B2D]">Total Amount</span>
                                    <span className="text-[22px] leading-6 text-[#000000] font-semibold">$80.00</span>
                                </div>

                                <div className="flex gap-3">
                                    <img src="/Product1.svg" alt="Product image" className="w-20 h-20" />
                                    <div className="w-[214px] h-[88px] flex flex-col gap-2">
                                        <span className="text-[15px] leading-[18px] font-normal text-[#000000]">Dates Value Pouch</span>
                                        <div className="flex gap-2">
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <span className="font-poppins text-[16px] leading-7 text-[#64B496]">$120.25</span>
                                            <span className="font-poppins text-[13px] leading-[23px] text-[#7A7A7A]">$123.25</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <img src="/Product1.svg" alt="Product image" className="w-20 h-20" />
                                    <div className="w-[214px] h-[88px] flex flex-col gap-2">
                                        <span className="text-[15px] leading-[18px] font-normal text-[#000000]">Dates Value Pouch</span>
                                        <div className="flex gap-2">
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                            <Star size={14} className="text-[#F4A263]" />
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <span className="font-poppins text-[16px] leading-7 text-[#64B496]">$120.25</span>
                                            <span className="font-poppins text-[13px] leading-[23px] text-[#7A7A7A]">$123.25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[416px] h-[189px] px-4 py-4 border border-[#E9E9E9] rounded-[5px] flex flex-col gap-2">
                            <span className="text-[20px] leading-6 text-[#000000]">Delivery Method</span>

                            <span className="text-[14px] leading-6 text-[#7A7A7A]">
                                Please select the preferred shipping method to use this order
                            </span>

                            <div className="flex justify-between mt-3">

                                <div>
                                    <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Free Shipping</span>
                                    <div className="flex gap-2 items-center mt-1">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
          checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
          checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
          checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                        />
                                        <span className="text-[14px] leading-4 text-[#7A7A7A]">
                                            Rate - $0.00 Shipping
                                        </span>
                                    </div>
                                </div>


                                <div>
                                    <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Express Shipping</span>
                                    <div className="flex gap-2 items-center mt-1">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
          checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
          checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
          checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                        />
                                        <span className="text-[14px] leading-4 text-[#7A7A7A]">
                                            Rate - $5.00 Shipping
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="w-[416px] px-4 py-4 border border-[#E9E9E9] rounded-[5px] flex flex-col gap-3">
                            <span className="text-[20px] leading-6 text-[#000000]">Payment Method</span>

                            <span className="text-[14px] leading-6 text-[#7A7A7A]">
                                Please select your preferred payment method for this order
                            </span>

                            <div className="flex flex-col gap-3 mt-3">

                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
        checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
        checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
        checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Cash on Delivery</span>
                                    </div>
                                </div>


                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
        checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
        checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
        checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[15px] leading-[15px] text-[#2B2B2D]">UPI</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
        checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
        checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
        checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Bank Transfer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[101px] w-[416px] flex flex-col gap-3 px-4 py-4 border border-[#E9E9E9] rounded-[5px]">
                            <span className="text-[20px] leading-6 text-[#000000]">Payment Method</span>
                            
                                <img src="/Visa.svg" alt="Visa Image" />
                        </div>
                    </div>
                    <div>right</div>
                </div>
            </div>
        </div>
    )
}

export default page
