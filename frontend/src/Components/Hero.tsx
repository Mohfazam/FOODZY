import {Send} from "lucide-react"

const Hero = () => {
    return (
        <div className="w-full h-[848px] m-0 relative">
            <img src="/Hero.svg" alt="Hero Image" className="w-full h-full object-cover absolute inset-0" draggable={false} />


            <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="h-full w-[550px] flex justify-center items-center">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3 items-end">
                            <span className="text-[#F53E32] underline decoration-2 decoration-[#F53E32] font-bold text-[20px] leading-6 tracking-[0.5px]">
                                100%
                            </span>
                            <span className="font-bold text-[20px] leading-6 tracking-[0.5px] text-[#212529]">
                                Organic Vegetables
                            </span>
                        </div>

                        <div>
                            <span className='text-[55px] leading-[68px] font-black text-[#000000]'>The best way to
                                stuff your wallet.</span>
                        </div>

                        <div>
                            <span className='font-normal text-[15px] leading-[26px] tracing-[0.5px] text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                                reiciendis beatae consequuntur.</span>
                        </div>


                        <div className='flex items-center'>
                            
                            <div className="relative">
                                <Send
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d8d8d]"
                                />
                                <input
                                    type="text"
                                    name="Newsletter"
                                    placeholder="Your email address"
                                    className='w-[292px] h-16 pl-12 pr-4 bg-[#ffffff] text-[#8d8d8d] rounded-tl-[50px] rounded-bl-[50px] outline-none'
                                />
                            </div>

                            <div className='bg-[#ffffff] rounded-tr-[50px] rounded-br-[50px]'>
                                <button className='w-[157px] h-16 rounded-[50px] bg-[#3BB77E] text-white font-medium'>
                                    Subscribe
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero