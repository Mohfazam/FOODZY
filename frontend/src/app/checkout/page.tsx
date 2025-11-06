"use client"

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
                    <div>div</div>
                    <div>right</div>
                </div>
            </div>
        </div>
    )
}

export default page
