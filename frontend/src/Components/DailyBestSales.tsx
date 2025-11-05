"use client"

import { useState } from 'react';
import { BestProductCard } from "./BestSellsCard"
import { useProductStore } from '@/Store/Store';

const DailyBestSales = () => {
    const products = useProductStore((state) => state.products);
    const [activeTab, setActiveTab] = useState<'featured' | 'popular' | 'new'>('featured');

    const getFilteredProducts = () => {
        let filtered = [];
        
        switch(activeTab) {
            case 'featured':
                filtered = products?.filter(product => product.flag === 'SALE') || [];
                break;
            case 'popular':
                filtered = products?.filter(product => product.flag === 'HOT') || [];
                break;
            case 'new':
                filtered = products?.filter(product => product.flag === 'NEW') || [];
                break;
            default:
                filtered = products || [];
        }
        
        return filtered.slice(0, 4);
    };

    const displayProducts = getFilteredProducts();

    return (
        <div className='w-full px-4 py-8 overflow-hidden'>
            <div>
                <div className='flex justify-between'>
                    <span className="text-[32px] font-poppins leading-[38px] font-bold text-[#253D4E]">Daily Best Sells</span>
                    <div className="flex gap-2">
                        <span 
                            className={`text-[16px] leading-4 font-poppins font-semibold hover:cursor-pointer ${
                                activeTab === 'featured' ? 'text-[#3BB77E]' : 'text-[#253D4E]'
                            }`}
                            onClick={() => setActiveTab('featured')}
                        >
                            Featured
                        </span>
                        <span 
                            className={`text-[16px] leading-4 font-poppins font-semibold hover:cursor-pointer ${
                                activeTab === 'popular' ? 'text-[#3BB77E]' : 'text-[#253D4E]'
                            }`}
                            onClick={() => setActiveTab('popular')}
                        >
                            Popular
                        </span>
                        <span 
                            className={`text-[16px] leading-4 font-poppins font-semibold hover:cursor-pointer ${
                                activeTab === 'new' ? 'text-[#3BB77E]' : 'text-[#253D4E]'
                            }`}
                            onClick={() => setActiveTab('new')}
                        >
                            New added
                        </span>
                    </div>
                </div>

                <div className="py-4 flex gap-2">
                    <div className="w-[368px] h-[520px] rounded-[15px]">
                        <img src="/Left.svg" alt="image" draggable={false} className="object-cover" />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        {displayProducts.length > 0 ? (
                            displayProducts.map((product) => (
                                <BestProductCard
                                    key={product.id}
                                    name={product.name}
                                    image={product.image}
                                    flag={product.flag}
                                    discount={product.discount}
                                    category={product.category?.name || "Uncategorized"}
                                    rating={product.rating}
                                    brand={product.brand}
                                    price={product.price}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400">No products available for this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyBestSales