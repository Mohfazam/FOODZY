import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/Store/Store';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    id: string;
    name: string;
    image?: string;
    flag?: "HOT" | "SALE" | "NEW";
    discount?: number | null;
    category: string;
    rating?: number;
    brand?: string;
    price: number;
}

export const ProductCard = ({
    id,
    name,
    image,
    flag,
    discount,
    category,
    rating = 4,
    brand = "Unknown",
    price,
}: ProductCardProps) => {
    const router = useRouter();
    const { addToCart, cart, updateQuantity } = useCartStore();
    const actualPrice = price * 1.15;
    
    const cartItem = cart.find(item => item.id === id);
    const isInCart = !!cartItem;
    const quantity = cartItem?.quantity || 0;
    
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

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent navigation
        addToCart({
            id,
            name,
            image,
            flag,
            discount,
            category: { id: '', name: category, createdAt: '', updatedAt: '' },
            rating,
            brand,
            price,
            items: 1,
            stock: 0,
            createdAt: '',
            updatedAt: '',
            categoryId: '',
        });
    };

    const handleQuantityChange = (e: React.MouseEvent, change: number) => {
        e.stopPropagation(); // Prevent navigation
        const newQuantity = quantity + change;
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity);
        } else {
            updateQuantity(id, 0); 
        }
    };

    const handleCardClick = () => {
        router.push(`/products/${id}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="w-full max-w-[280px] h-[465px] rounded-2xl border border-[#ECECEC] hover:shadow-lg transition-shadow cursor-pointer"
        >
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
                        <span className='text-[14px] leading-6 text-[#B6B6B6] font-medium'>({rating?.toFixed(1) || '0.0'})</span>
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

                        {isInCart ? (
                            <div className='w-[84px] h-9 bg-[#3BB77E] rounded-sm flex justify-between items-center px-2'>
                                <button
                                    onClick={(e) => handleQuantityChange(e, -1)}
                                    className='w-6 h-6 flex items-center justify-center hover:bg-[#2da066] rounded transition-colors'
                                >
                                    <Minus size={14} className='text-white' />
                                </button>
                                <span className='text-[14px] leading-6 font-bold text-white'>{quantity}</span>
                                <button
                                    onClick={(e) => handleQuantityChange(e, 1)}
                                    className='w-6 h-6 flex items-center justify-center hover:bg-[#2da066] rounded transition-colors'
                                >
                                    <Plus size={14} className='text-white' />
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={handleAddToCart}
                                className='w-[84px] h-9 bg-[#F53E32] rounded-sm flex justify-center gap-2 items-center px-4 hover:bg-[#f23224] transition-colors'
                            >
                                <ShoppingCart size={16} className='text-white' />
                                <span className='text-[14px] leading-6 font-bold text-white'>Add</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};