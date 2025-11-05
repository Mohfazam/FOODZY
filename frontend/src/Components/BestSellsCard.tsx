import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    name: string;
    image?: string;
    flag?: "HOT" | "SALE" | "NEW";
    discount?: number | null;
    category: string;
    rating?: number;
    brand?: string;
    price: number;
}

export const BestProductCard = ({
    name,
    image,
    flag,
    discount,
    category,
    rating = 4,
    brand = "Unknown",
    price,
}: ProductCardProps) => {
    
    const actualPrice = price * 1.15;
    
    const getFlagColor = (flag?: "HOT" | "SALE" | "NEW") => {
        if (flag === "HOT") return "bg-[#f74b81]";
        if (flag === "SALE") return "bg-[#67BCEE]";
        if (flag === "NEW") return "bg-[#3BB77E]";
        return "bg-[#67BCEE]"; 
    };

    const getFlagText = () => {
        if (discount) return `${discount}%`;
        if (flag) return flag;
        return "SALE";
    };

    const shouldShowFlag = flag || discount;

    return (
        <div className="w-full max-w-[260px] h-[510px] rounded-2xl border border-[#ECECEC] hover:shadow-lg transition-shadow">
            <div className="w-full h-full flex flex-col relative">
                <div className="w-full h-[271px] flex items-center justify-center rounded-t-2xl overflow-hidden">
                    <img 
                        src={image || "/Product1.svg"} 
                        alt={name} 
                        className="w-full h-full object-cover" 
                    />

                    {shouldShowFlag && (
                        <div className={`absolute rounded-tl-2xl rounded-br-2xl ${getFlagColor(flag)} top-0 left-0 min-w-[62px] h-8 flex justify-center items-center px-3`}>
                            <span className='text-[12px] leading-3 font-poppins font-medium text-center text-white'>
                                {getFlagText()}
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-2 px-4 py-3">
                    <span className="text-[12px] leading-6 text-[#ADADAD]">{category}</span>
                    
                    <span className="text-[15px] leading-6 tracking-[0.5px] text-[#2B2B2D] font-medium font-poppins line-clamp-2 min-h-12">
                        {name}
                    </span>

                    <div className='flex gap-2 items-center py-1'>
                        <Star size={14} className='text-[#fdc040] fill-[#fdc040]' />
                        <span className='text-[14px] leading-6 text-[#B6B6B6] font-medium'>({rating.toFixed(1)})</span>
                    </div>

                    <div className='flex gap-1'>
                        <span className='leading-6 text-[14px] font-medium text-[#B6B6B6]'>By</span>
                        <span className='leading-6 text-[14px] text-[#F53E32]'>{brand}</span>
                    </div>

                    <div className='flex justify-between py-2 items-center'>
                        <div className='flex gap-2 items-center'>
                            <span className='text-[18px] leading-6 text-[#3BB77E] font-bold font-poppins'>
                                ₹{price.toFixed(2)}
                            </span>
                            <span className='text-[14px] leading-6 text-[#ADADAD] font-poppins line-through'>
                                ₹{actualPrice.toFixed(2)}
                            </span>
                        </div>

                        <button className='w-[84px] h-9 bg-[#F53E32] rounded-sm flex justify-center gap-2 items-center px-4 hover:bg-[#f23224] transition-colors'>
                            <ShoppingCart size={16} className='text-white' />
                            <span className='text-[14px] leading-6 font-bold text-white'>Add</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};