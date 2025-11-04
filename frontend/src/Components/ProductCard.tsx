import { Star, ShoppingCart } from 'lucide-react';

export const ProductCard = () => {
    return (
        <div className="w-[298px] h-[465px] rounded-2xl border border-[#ECECEC]">
            <div className="w-full h-full flex flex-col">
                <div className="w-[296px] h-[271px] flex items-center justify-center">
                    <img src="/Product1.svg" alt="Product Image" className="object-cover" />
                </div>

                <div className="flex flex-col gap-2 px-4">
                    
                    <span className="text-[12px] leading-6 text-[#ADADAD] ">Snack</span>
                    
                    <span className="text-[15px] w-[268px] h-[39px] leading-6 tracing-[0.5px] text-[#2B2B2D] font-medium font-poppins">Fresh organic villa farm lomon 500gm pack</span>
                    <div className='w-[60px] h-3 flex gap-2 items-center py-4'>
                        <Star size={42} className='text-[#fdc040]'/>
                        <span className='text-[14px] leading-6 text-[#B6B6B6] font-medium'>(4.0)</span>
                    </div>
                    <div className='flex gap-1'>
                        <span className='leading-6 text-[14px] font-medium text-[#B6B6B6]'>By</span>
                        <span className='leading-6 text-[14px] text-[#F53E32]'>NestFood</span>
                    </div>
                    <div className='flex justify-between py-2 items-center'>
                        <div className='flex gap-2'>
                            <span className='text-[18px] leading-6 text-[#3BB77E] font-bold font-poppins'>$28.85</span>
                            <span className='text-[14px] leading-6 text-[#ADADAD] font-poppins line-through'>$32.85</span>
                        </div>

                        <div className='w-[84px] h-9 bg-[#F53E32] rounded-sm flex justify-between items-center px-4 hover:cursor-pointer hover:bg-[#f23224]'>
                            <ShoppingCart size={16}/>
                            <span className='text-[14px] leading-6 font-bold'>Add</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
