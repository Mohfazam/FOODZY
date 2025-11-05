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
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
                    <span className="text-[24px] sm:text-[32px] font-poppins leading-[30px] sm:leading-[38px] font-bold text-[#253D4E]">Daily Best Sells</span>
                    <div className="flex gap-3 sm:gap-2 flex-wrap">
                        <span 
                            className={`text-[14px] sm:text-[16px] leading-4 font-poppins font-semibold hover:cursor-pointer ${
                                activeTab === 'featured' ? 'text-[#3BB77E]' : 'text-[#253D4E]'
                            }`}
                            onClick={() => setActiveTab('featured')}
                        >
                            Featured
                        </span>
                        <span 
                            className={`text-[14px] sm:text-[16px] leading-4 font-poppins font-semibold hover:cursor-pointer ${
                                activeTab === 'popular' ? 'text-[#3BB77E]' : 'text-[#253D4E]'
                            }`}
                            onClick={() => setActiveTab('popular')}
                        >
                            Popular
                        </span>
                        <span 
                            className={`text-[14px] sm:text-[16px] leading-4 font-poppins font-semibold hover:cursor-pointer ${
                                activeTab === 'new' ? 'text-[#3BB77E]' : 'text-[#253D4E]'
                            }`}
                            onClick={() => setActiveTab('new')}
                        >
                            New added
                        </span>
                    </div>
                </div>

                <div className="py-4 flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-[368px] lg:h-[520px] rounded-[15px] overflow-hidden shrink-0">
                        <img src="/Left.svg" alt="image" draggable={false} className="w-full h-full object-contain lg:object-cover" />
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                        {displayProducts.length > 0 ? (
                            displayProducts.map((product) => (
                                <BestProductCard
                                    key={product.id}
                                    id={product.id}
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