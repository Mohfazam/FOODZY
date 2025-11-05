import { MapPin, MailCheck, Send, Phone, Facebook, Twitter, Dribbble, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-12'>
            <div className='flex flex-col items-between'>
                <div className='flex justify-evenly'>
                    <div className='w-[394px] h-[255px] flex flex-col gap-4'>
                        <div>
                            <img src="/Main_Logo.svg" alt="Main Logo" className='w-28' />
                        </div>

                        <span className='text-[14px] font-poppins leading-6 text-[#7A7A7A] w-[394px] h-11'>Food Trove is the biggest market of grocery products. Get your daily needs from our store.</span>

                        <div className='flex gap-4'>
                            <MapPin size={20} className='text-red-600' />
                            <span className='text-[16px] leading-[26px] text-[#777777]'>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span>
                        </div>

                        <div className='flex gap-4'>
                            <MailCheck size={20} className='text-red-600' />
                            <span className='text-[16px] leading-[26px] text-[#777777]'>example@email.com</span>
                        </div>

                        <div className='flex gap-4'>
                            <Phone size={20} className='text-red-600' />
                            <span className='text-[16px] leading-[26px] text-[#777777]'>+91 123 4567890</span>
                        </div>
                    </div>

                    <div className='w-[394px] h-[255px] flex flex-col gap-4'>
                        <span className='text-[18px] leading-6 text-[#000000] font-bold'>Company</span>

                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>About Us</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Delivery Information</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Privacy Policy</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Terms & Conditions</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>contact Us</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Support Center</span>
                    </div>

                    <div className='w-[394px] h-[255px] flex flex-col gap-4'>
                        <span className='text-[18px] leading-6 text-[#000000] font-bold'>Category</span>

                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Dairy & Bakery</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Fruits & Vegetable</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Snack & Spice</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Juice & Drinks</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Chicken & Meat</span>
                        <span className='text-[14px] font-poppins leading-[26px] tracing-[0.48px] text-[#777777]'>Fast Food</span>
                    </div>

                    <div className='w-[394px] h-[255px] flex flex-col gap-4'>
                        <span className='text-[18px] leading-6 text-[#000000] font-bold'>Subscribe to Our Newsletter</span>

                        <div className="w-[416px] h-11 flex items-center bg-white border border-[#E9E9E9] rounded-[5px] px-4">
                            <input
                                type="text"
                                placeholder="Search Here"
                                className="flex-1 bg-transparent outline-none text-[14px] text-[#333]"
                            />
                            <Send
                                size={18}
                                className="text-[#000000] cursor-pointer hover:text-[#1d1b1b] transition"
                            />
                        </div>
                        <div className='flex gap-2'>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center'><Facebook className='text-black' /></div>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center'><Twitter className='text-black' /></div>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center'><Dribbble className='text-black' /></div>
                            <div className='w-[35px] h-[35px] rounded-[5px] border border-[#E1DFDF] bg-[#FFFFFF] p-2 flex justify-center items-center'><Instagram className='text-black' /></div>
                        </div>

                        <div className='flex gap-3'>
                            <img src="/F1.svg" alt="F1 image" draggable={false} className='w-[74px] h-[74px] rounded-[5px]' />
                            <img src="/F2.svg" alt="F1 image" draggable={false} className='w-[74px] h-[74px] rounded-[5px]' />
                            <img src="/F3.svg" alt="F1 image" draggable={false} className='w-[74px] h-[74px] rounded-[5px]' />
                            <img src="/F4.svg" alt="F1 image" draggable={false} className='w-[74px] h-[74px] rounded-[5px]' />
                            <img src="/F5.svg" alt="F1 image" draggable={false} className='w-[74px] h-[74px] rounded-[5px]' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-24 mb-4'>
                    <span className='text-[14px] font-poppins leading-4 tracing-[0.48px] text-[#000000]'>
                        © 2025 <span className='text-[#F53E32]'>foodzy</span>, All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer