import { Send } from "lucide-react"

const Delivery = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className='w-full h-[417px] px-4 py-8 mb-4 relative'>
                <div className="absolute inset-0 mx-4 mt-2 rounded-[20px] overflow-hidden">
                    <img
                        src="/Delivery.svg"
                        alt="Delivery"
                        draggable={false}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 px-[78px] h-full flex items-center">
                    <div className="flex flex-col gap-8">
                        <div className="w-[530px] h-[98px]">
                            <span className="text-[36px] font-bold leading-12 text-[#253D4E] font-poppins">
                                Stay home & get your daily needs from our shop
                            </span>
                        </div>

                        <span className="text-[18px] leading-6 text-[#7E7E7E]">
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
                                    className='w-full sm:w-[292px] h-16 pl-12 pr-4 bg-[#ffffff] text-[#8d8d8d] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px] sm:rounded-tr-none sm:rounded-br-none outline-none'
                                />
                            </div>

                            <div className='bg-[#ffffff] rounded-[50px] sm:rounded-tr-[50px] sm:rounded-br-[50px] sm:rounded-tl-none sm:rounded-bl-none'>
                                <button className='w-full sm:w-[157px] h-16 rounded-[50px] bg-[#f53e32] text-white font-medium hover:bg-[#f23224] transition-colors'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="px-4 py-2 mb-8 relative">
                <div className="flex gap-1">
                    <div className="w-[321px] h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <img src="/Sale.svg" alt="Sale" className="w-[60px] h-[67px] object-cover mt-1" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[18px] leading-[21px] text-[#242424]">Best prices & offers</span>
                                <span className="text-[16px] leading-6 text-[#ADADAD]">Orders $50 or more</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[321px] h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <img src="/Handshake.svg" alt="Sale" className="w-[60px] h-[67px] object-cover mt-1" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[18px] leading-[21px] text-[#242424]">Free delivery</span>
                                <span className="text-[16px] leading-6 text-[#ADADAD]">24/7 amazing services</span>
                            </div>
                        </div>
                    </div>


                    <div className="w-[321px] h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <img src="/Contract.svg" alt="Sale" className="w-[60px] h-[67px] object-cover mt-1" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[18px] leading-[21px] text-[#242424]">Great Deal Daily</span>
                                <span className="text-[16px] leading-6 text-[#ADADAD]">When you Sign Up</span>
                            </div>
                        </div>
                    </div>


                    <div className="w-[321px] h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <img src="/Connections.svg" alt="Sale" className="w-[60px] h-[67px] object-cover" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[18px] leading-[21px] text-[#242424]">Wide assortment</span>
                                <span className="text-[16px] leading-6 text-[#ADADAD]">Mega Discounts</span>
                            </div>
                        </div>
                    </div>


                    <div className="w-[321px] h-[107px] rounded-[10px] bg-[#F4F6FA] flex justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <img src="/Return.svg" alt="Sale" className="w-[70px] h-[69px] object-cover" />
                            <div className="flex flex-col gap-2">
                                <span className="text-[18px] leading-[21px] text-[#242424]">Easy Return</span>
                                <span className="text-[16px] leading-6 text-[#ADADAD]">Within 30 days</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Delivery