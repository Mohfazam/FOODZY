import {Send} from "lucide-react"

const Hero = () => {
    return (
        <div className="w-full h-[600px] sm:h-[700px] lg:h-[848px] mt-8 relative overflow-hidden bg-[#F0F3F2]">
            <img 
                src="/Hero.svg" 
                alt="Hero Image" 
                className="w-full h-full object-cover object-center absolute inset-0" 
                draggable={false} 
                style={{ minWidth: '100%', minHeight: '100%' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="h-full w-full max-w-[550px] flex justify-center items-center">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex gap-2 sm:gap-3 items-end flex-wrap">
                            <span className="text-[#F53E32] underline decoration-2 decoration-[#F53E32] font-bold text-[16px] sm:text-[20px] leading-6 tracking-[0.5px]">
                                100%
                            </span>
                            <span className="font-bold text-[16px] sm:text-[20px] leading-6 tracking-[0.5px] text-[#212529]">
                                Organic Vegetables
                            </span>
                        </div>

                        <div>
                            <span className='text-[32px] sm:text-[45px] lg:text-[55px] leading-10 sm:leading-14 lg:leading-[68px] font-black text-[#000000]'>
                                The best way to stuff your wallet.
                            </span>
                        </div>

                        <div>
                            <span className='font-normal text-[14px] sm:text-[15px] leading-[22px] sm:leading-[26px] tracing-[0.5px] text-[#7A7A7A]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                            </span>
                        </div>

                        <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0'>
                            <div className="relative flex-1 sm:flex-initial">
                                <Send
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d8d8d]"
                                />
                                <input
                                    type="text"
                                    name="Newsletter"
                                    placeholder="Your email address"
                                    className='w-full sm:w-[292px] h-16 pl-12 pr-4 bg-[#ffffff] text-[#8d8d8d] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px] sm:rounded-tr-none sm:rounded-br-none outline-none'
                                />
                            </div>

                            <div className='bg-[#ffffff] rounded-[50px] sm:rounded-tr-[50px] sm:rounded-br-[50px] sm:rounded-tl-none sm:rounded-bl-none'>
                                <button className='w-full sm:w-[157px] h-16 rounded-[50px] bg-[#3BB77E] text-white font-medium hover:bg-[#2fa66d] transition-colors'>
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