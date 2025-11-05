import { Send } from "lucide-react"

const Delivery = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className='w-full min-h-[300px] sm:min-h-[350px] lg:h-[417px] px-4 py-8 mb-4 relative'>
                <div className="absolute inset-0 mx-4 mt-2 rounded-[20px] overflow-hidden">
                    <img
                        src="/Delivery.svg"
                        alt="Delivery"
                        draggable={false}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 px-4 sm:px-8 lg:px-[78px] h-full flex items-center">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full max-w-[530px]">
                        <div className="w-full">
                            <span className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold leading-tight text-[#253D4E] font-poppins">
                                Stay home & get your daily needs from our shop
                            </span>
                        </div>

                        <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-6 text-[#7E7E7E]">
                            Start You'r Daily Shopping with{" "}
                            <span className="text-[#3BB77E]">Nest Mart</span>
                        </span>

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
                                    className='w-full sm:w-60 lg:w-[292px] h-12 sm:h-14 lg:h-16 pl-12 pr-4 bg-[#ffffff] text-[#8d8d8d] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px] sm:rounded-tr-none sm:rounded-br-none outline-none text-sm lg:text-base'
                                />
                            </div>

                            <div className='bg-[#ffffff] rounded-[50px] sm:rounded-tr-[50px] sm:rounded-br-[50px] sm:rounded-tl-none sm:rounded-bl-none'>
                                <button className='w-full sm:w-[120px] lg:w-[157px] h-12 sm:h-14 lg:h-16 rounded-[50px] bg-[#f53e32] text-white font-medium hover:bg-[#f23224] transition-colors text-sm lg:text-base'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-2 mb-8 relative overflow-x-auto">
                <div className="flex gap-3 lg:gap-1 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
                    <div className="w-[280px] lg:w-auto h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center px-4">
                        <div className="flex gap-3 lg:gap-4 items-center">
                            <img src="/Sale.svg" alt="Sale" className="w-[50px] lg:w-[60px] h-[57px] lg:h-[67px] object-cover mt-1 shrink-0" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[16px] lg:text-[18px] leading-[21px] text-[#242424] whitespace-nowrap">Best prices & offers</span>
                                <span className="text-[14px] lg:text-[16px] leading-6 text-[#ADADAD] whitespace-nowrap">Orders $50 or more</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[280px] lg:w-auto h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center px-4">
                        <div className="flex gap-3 lg:gap-4 items-center">
                            <img src="/Handshake.svg" alt="Handshake" className="w-[50px] lg:w-[60px] h-[57px] lg:h-[67px] object-cover mt-1 shrink-0" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[16px] lg:text-[18px] leading-[21px] text-[#242424] whitespace-nowrap">Free delivery</span>
                                <span className="text-[14px] lg:text-[16px] leading-6 text-[#ADADAD] whitespace-nowrap">24/7 amazing services</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[280px] lg:w-auto h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center px-4">
                        <div className="flex gap-3 lg:gap-4 items-center">
                            <img src="/Contract.svg" alt="Contract" className="w-[50px] lg:w-[60px] h-[57px] lg:h-[67px] object-cover mt-1 shrink-0" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[16px] lg:text-[18px] leading-[21px] text-[#242424] whitespace-nowrap">Great Deal Daily</span>
                                <span className="text-[14px] lg:text-[16px] leading-6 text-[#ADADAD] whitespace-nowrap">When you Sign Up</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[280px] lg:w-auto h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center px-4">
                        <div className="flex gap-3 lg:gap-4 items-center">
                            <img src="/Connections.svg" alt="Connections" className="w-[50px] lg:w-[60px] h-[57px] lg:h-[67px] object-cover shrink-0" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[16px] lg:text-[18px] leading-[21px] text-[#242424] whitespace-nowrap">Wide assortment</span>
                                <span className="text-[14px] lg:text-[16px] leading-6 text-[#ADADAD] whitespace-nowrap">Mega Discounts</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[280px] lg:w-auto h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center px-4">
                        <div className="flex gap-3 lg:gap-4 items-center">
                            <img src="/Return.svg" alt="Return" className="w-[60px] lg:w-[70px] h-[59px] lg:h-[69px] object-cover shrink-0" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[16px] lg:text-[18px] leading-[21px] text-[#242424] whitespace-nowrap">Easy Return</span>
                                <span className="text-[14px] lg:text-[16px] leading-6 text-[#ADADAD] whitespace-nowrap">Within 30 days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery