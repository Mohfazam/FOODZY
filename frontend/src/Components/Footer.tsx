import { MapPin, MailCheck, Send, Phone, Facebook, Twitter, Dribbble, Instagram } from 'lucide-react'

export const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-12'>
            <div className='flex flex-col'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4'>
                    <div className='w-full flex flex-col gap-4'>
                        <div>
                            <img src="/Main_Logo.svg" alt="Main Logo" className='w-28' />
                        </div>

                        <span className='text-[14px] font-poppins leading-6 text-[#7A7A7A]'>Food Trove is the biggest market of grocery products. Get your daily needs from our store.</span>

                        <div className='flex gap-4'>
                            <MapPin size={20} className='text-red-600 shrink-0' />
                            <span className='text-[14px] sm:text-[16px] leading-[26px] text-[#777777]'>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span>
                        </div>

                        <div className='flex gap-4'>
                            <MailCheck size={20} className='text-red-600 shrink-0' />
                            <span className='text-[14px] sm:text-[16px] leading-[26px] text-[#777777]'>example@email.com</span>
                        </div>

                        <div className='flex gap-4'>
                            <Phone size={20} className='text-red-600 shrink-0' />
                            <span className='text-[14px] sm:text-[16px] leading-[26px] text-[#777777]'>+91 123 4567890</span>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-3 lg:gap-4'>
                        <span className='text-[18px] leading-6 text-[#000000] font-bold'>Company</span>

                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>About Us</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Delivery Information</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Privacy Policy</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Terms & Conditions</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>contact Us</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Support Center</span>
                    </div>

                    <div className='w-full flex flex-col gap-3 lg:gap-4'>
                        <span className='text-[18px] leading-6 text-[#000000] font-bold'>Category</span>

                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Dairy & Bakery</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Fruits & Vegetable</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Snack & Spice</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Juice & Drinks</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Chicken & Meat</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777] cursor-pointer hover:text-[#3BB77E] transition-colors'>Fast Food</span>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <span className='text-[18px] leading-6 text-[#000000] font-bold'>Subscribe to Our Newsletter</span>

                        <div className="w-full max-w-[416px] h-11 flex items-center bg-white border border-[#E9E9E9] rounded-[5px] px-4">
                            <input
                                type="text"
                                placeholder="Search Here"
                                className="flex-1 bg-transparent outline-none text-[14px] text-[#333]"
                            />
                            <Send
                                size={18}
                                className="text-[#000000] cursor-pointer hover:text-[#1d1b1b] transition shrink-0"
                            />
                        </div>
                        <div className='flex gap-2 flex-wrap'>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center cursor-pointer hover:border-[#3BB77E] transition-colors'><Facebook className='text-black' size={18} /></div>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center cursor-pointer hover:border-[#3BB77E] transition-colors'><Twitter className='text-black' size={18} /></div>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center cursor-pointer hover:border-[#3BB77E] transition-colors'><Dribbble className='text-black' size={18} /></div>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center cursor-pointer hover:border-[#3BB77E] transition-colors'><Instagram className='text-black' size={18} /></div>
                        </div>

                        <div className='flex gap-3 flex-wrap'>
                            <img src="/F1.svg" alt="F1 image" draggable={false} className='w-[60px] sm:w-[70px] lg:w-[74px] h-[60px] sm:h-[70px] lg:h-[74px] rounded-[5px] object-cover' />
                            <img src="/F2.svg" alt="F2 image" draggable={false} className='w-[60px] sm:w-[70px] lg:w-[74px] h-[60px] sm:h-[70px] lg:h-[74px] rounded-[5px] object-cover' />
                            <img src="/F3.svg" alt="F3 image" draggable={false} className='w-[60px] sm:w-[70px] lg:w-[74px] h-[60px] sm:h-[70px] lg:h-[74px] rounded-[5px] object-cover' />
                            <img src="/F4.svg" alt="F4 image" draggable={false} className='w-[60px] sm:w-[70px] lg:w-[74px] h-[60px] sm:h-[70px] lg:h-[74px] rounded-[5px] object-cover' />
                            <img src="/F5.svg" alt="F5 image" draggable={false} className='w-[60px] sm:w-[70px] lg:w-[74px] h-[60px] sm:h-[70px] lg:h-[74px] rounded-[5px] object-cover' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-12 lg:mt-24 mb-4'>
                    <span className='text-[14px] font-poppins leading-4 tracing-[0.48px] text-[#000000] text-center'>
                        © 2025 <span className='text-[#F53E32]'>foodzy</span>, All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    )
}
