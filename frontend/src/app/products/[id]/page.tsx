'use client'

import { Star, Plus, Minus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useProductStore, useCartStore } from '@/Store/Store';
import { ProductCard } from '../../../Components/ProductCard';

const page = () => {
  const navigate = useRouter();
  const params = useParams();
  const productId = params.id as string;
  const { products } = useProductStore();
  const { addToCart, cart, updateQuantity } = useCartStore();
  const [priceRange, setPriceRange] = useState({ min: 200, max: 500 });
  const [localQuantity, setLocalQuantity] = useState(1);
  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  const product = products.find(p => p.id === productId);

  
  const cartItem = cart.find(item => item.id === productId);
  const isInCart = !!cartItem;
  const cartQuantity = cartItem?.quantity || 0;

  const popularProducts = products
    .filter(p => p.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2B2B2D] mb-4">Product Not Found</h1>
          <p className="text-[#7A7A7A]">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const actualPrice = product.price * 1.15;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      flag: product.flag,
      discount: product.discount,
      category: product.category,
      rating: product.rating,
      brand: product.brand,
      price: product.price,
      items: product.items,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      categoryId: product.categoryId,
    });
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = cartQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      updateQuantity(productId, 0);
    }
  };

  const handleLocalQuantityChange = (change: number) => {
    const newQuantity = localQuantity + change;
    if (newQuantity > 0) {
      setLocalQuantity(newQuantity);
    }
  };

  return (
    <div className="mb-8">
      <div className='w-full bg-[#F53E32] mt-6 mb-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0'>
            <span className='text-white font-semibold text-lg sm:text-base'>Products</span>

            <div className="flex gap-2 sm:gap-4 hover:cursor-pointer text-white text-sm sm:text-base">
              <span onClick={() => navigate.push("/")}>Home</span>
              <span>-</span>
              <span>Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="hidden lg:block w-[306px] max-h-[578px] rounded-[5px] bg-[#F7F7F8] border border-[#E9E9E9] px-6 py-6 shrink-0">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-[16px] leading-[25px] tracking-[0.48px] text-[#2B2B2D] font-medium font-poppins">Product Category</span>
                <div className="bg-[#e9e9e9] h-px" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center px-2">
                  <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border border-[#DDDDDD]" />
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A] flex-1 px-3">Juice & Drinks</span>
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">[20]</span>
                </div>

                <div className="flex justify-between items-center px-2">
                  <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border border-[#DDDDDD]" />
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A] flex-1 px-3">Vegetables</span>
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">[15]</span>
                </div>

                <div className="flex justify-between items-center px-2">
                  <input type="checkbox" className="w-[18px] h-[18px] rounded-[5px] border border-[#DDDDDD]" />
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A] flex-1 px-3">Snacks</span>
                  <span className="text-[14px] leading-[21px] tracking-[0.48px] text-[#7A7A7A]">[30]</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <span className="text-[16px] leading-[25px] tracking-[0.48px] text-[#2B2B2D] font-medium font-poppins">Filter By Price</span>
                <div className="bg-[#e9e9e9] h-px" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="px-2 py-4">
                  <div className="relative h-1 bg-gray-300 rounded-full">
                    <div
                      className="absolute h-1 bg-[#F53E32] rounded-full"
                      style={{
                        left: `${(priceRange.min / MAX_PRICE) * 100}%`,
                        right: `${100 - (priceRange.max / MAX_PRICE) * 100}%`
                      }}
                    />

                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange.min}
                      onChange={(e) => {
                        const value = Math.min(Number(e.target.value), priceRange.max - 10);
                        setPriceRange({ ...priceRange, min: value });
                      }}
                      className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#F53E32] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#F53E32] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                    />

                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange.max}
                      onChange={(e) => {
                        const value = Math.max(Number(e.target.value), priceRange.min + 10);
                        setPriceRange({ ...priceRange, max: value });
                      }}
                      className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#F53E32] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#F53E32] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[15px] font-bold leading-[18px] tracking-[0.48px] text-[#000000]">Price : </span>
                  <span className="text-[15px] font-bold leading-[18px] tracking-[0.48px] text-[#7A7A7A]">
                    ₹{priceRange.min} - ₹{priceRange.max}
                  </span>
                </div>

                <button className="w-20 h-10 rounded-[5px] bg-[#F53E32] hover:bg-[#f63224] text-white font-semibold">
                  Filter
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[25px] tracking-[0.48px] text-[#2B2B2D] font-medium font-poppins">Product Tags</span>
                  <div className="bg-[#e9e9e9] h-px" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="w-full h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-[13px] leading-[30px] tracking-[0.48px] font-normal text-[#7A7A7A]">Vegetables</span>
                  </div>

                  <div className="w-full h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-[13px] leading-[30px] tracking-[0.48px] font-normal text-[#7A7A7A]">Juice</span>
                  </div>

                  <div className="w-full h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-[13px] leading-[30px] tracking-[0.48px] font-normal text-[#7A7A7A]">Food</span>
                  </div>

                  <div className="w-full h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-[13px] leading-[30px] tracking-[0.48px] font-normal text-[#7A7A7A]">Dry Fruits</span>
                  </div>

                  <div className="w-full h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-[13px] leading-[30px] tracking-[0.48px] font-normal text-[#7A7A7A]">Snacks</span>
                  </div>

                  <div className="w-full h-8 rounded-[5px] border border-[#E9E9E9] bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-[13px] leading-[30px] tracking-[0.48px] font-normal text-[#7A7A7A]">Beverages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[471px] h-[400px] sm:h-[500px] lg:h-[590px] flex justify-center items-center rounded-[5px] border border-[#E9E9E9] shrink-0">
                  <img src={product.image || "/Product1.svg"} alt={product.name} draggable={false} className="object-contain h-full w-full p-4" />
                </div>

                <div className="flex-1 flex flex-col gap-3">
                  <span className="text-[20px] sm:text-[22px] leading-7 sm:leading-[33px] tracking-[0.48px] font-medium font-poppins text-[#2B2B2D]">{product.name}</span>
                  <span className="text-[13px] sm:text-[14px] leading-6 tracking-[0.48px] font-medium font-poppins text-[#7A7A7A]">{product.description || product.basicInfo || "No description available"}</span>
                  <div className="bg-[#e9e9e9] h-px" />

                  <div className="flex gap-4">
                    <div className="flex gap-2 text-[#F5885F]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="fill-current" size={16} />
                      ))}
                    </div>
                    <span className="text-[13px] sm:text-[15px] font-poppins leading-[26px] tracking-[0.48px] text-[#7A7A7A]">({product.reviewsCount || 0} reviews)</span>
                  </div>

                  
                  <div className="flex flex-col gap-2">
                    {product.brand && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Brand</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.brand}</span>
                      </div>
                    )}

                    {product.flavour && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Flavour</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.flavour}</span>
                      </div>
                    )}

                    {product.dietType && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Diet Type</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.dietType}</span>
                      </div>
                    )}

                    {product.weight && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Weight</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.weight}</span>
                      </div>
                    )}

                    {product.speciality && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Speciality</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.speciality}</span>
                      </div>
                    )}

                    {product.basicInfo && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Info</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.basicInfo}</span>
                      </div>
                    )}

                    {product.category && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Category</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className="text-[#7A7A7A]">{product.category.name}</span>
                      </div>
                    )}

                    {product.stock !== undefined && (
                      <div className="flex gap-2 text-sm sm:text-base">
                        <div className="flex justify-between w-[100px]">
                          <span className="text-[14px] sm:text-[16px] leading-6 tracking-[0.48px] font-poppins text-[#2B2B2D]">Stock</span>
                          <span className="pr-3 text-[#2B2B2D]">:</span>
                        </div>
                        <span className={`${product.stock > 0 ? 'text-[#3BB77E]' : 'text-[#F53E32]'} font-semibold`}>
                          {product.stock > 0 ? `${product.stock} Available` : 'Out of Stock'}
                        </span>
                      </div>
                    )}
                  </div>

              
                  <div className="flex gap-4 items-center mt-4 flex-wrap">
                    <span className="font-semibold text-[22px] sm:text-[24px] leading-7 text-[#F53E32] font-poppins">₹{product.price.toFixed(2)}</span>
                    <span className="font-poppins text-[14px] sm:text-[16px] leading-7 text-[#7A7A7A] line-through">₹{actualPrice.toFixed(2)}</span>
                    {product.discount && (
                      <span className="px-2 py-1 bg-[#F53E32] text-white text-[11px] sm:text-[12px] rounded-md font-semibold">
                        {product.discount}% OFF
                      </span>
                    )}
                  </div>

                 
                  <div className="flex gap-3 mt-4 items-center flex-wrap">
                    <span className="text-[14px] sm:text-[16px] leading-[25px] text-[#2B2B2D] font-poppins">Size/Weight :</span>
                    <div className="flex gap-2 flex-wrap">
                      <button className="rounded-[5px] w-[54px] h-6 border border-[#E9E9E9] bg-[#F53E32] text-white flex items-center justify-center text-[12px]">5kg</button>
                      <button className="rounded-[5px] w-[54px] h-6 border border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] flex items-center justify-center text-[12px] hover:bg-gray-50">10kg</button>
                      <button className="rounded-[5px] w-[54px] h-6 border border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] flex items-center justify-center text-[12px] hover:bg-gray-50">15kg</button>
                      <button className="rounded-[5px] w-[54px] h-6 border border-[#E9E9E9] bg-[#FFFFFF] text-[#777777] flex items-center justify-center text-[12px] hover:bg-gray-50">20kg</button>
                    </div>
                  </div>

         
                  <div className="flex gap-5 mt-4 flex-wrap items-center">
                    {!isInCart ? (
                      <>
                        <div className="flex gap-2 items-center">
                          <div className="w-10 h-10 rounded-[5px] border border-[#E9E9E9] flex items-center justify-center text-[#000000] font-semibold">
                            {localQuantity}
                          </div>
                          <div className="flex flex-col gap-1">
                            <button 
                              onClick={() => handleLocalQuantityChange(1)}
                              className="w-[18px] h-[18px] rounded-[5px] border border-[#E9E9E9] flex items-center justify-center text-[12px] hover:bg-gray-100"
                            >
                              +
                            </button>
                            <button 
                              onClick={() => handleLocalQuantityChange(-1)}
                              className="w-[18px] h-[18px] rounded-[5px] border border-[#E9E9E9] flex items-center justify-center text-[12px] hover:bg-gray-100"
                            >
                              -
                            </button>
                          </div>
                        </div>

                        <button 
                          onClick={handleAddToCart}
                          className="w-full sm:w-[125px] h-10 rounded-[5px] bg-[#F53E32] text-white font-semibold hover:bg-[#f23224] transition-colors"
                        >
                          Add To Cart
                        </button>
                      </>
                    ) : (
                      <div className="flex gap-3 items-center">
                        <span className="text-[14px] text-[#3BB77E] font-semibold">In Cart:</span>
                        <div className="flex gap-2 items-center bg-[#3BB77E] rounded-[5px] px-3 py-2">
                          <button
                            onClick={() => handleQuantityChange(-1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-[#2da066] rounded transition-colors"
                          >
                            <Minus size={14} className="text-white" />
                          </button>
                          <span className="text-white font-bold min-w-5 text-center">{cartQuantity}</span>
                          <button
                            onClick={() => handleQuantityChange(1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-[#2da066] rounded transition-colors"
                          >
                            <Plus size={14} className="text-white" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

       
              <div className="flex flex-col gap-6 w-full rounded-[5px] border border-[#E9E9E9] px-4 sm:px-6 py-6">
                <div className="flex gap-4 sm:gap-6 flex-wrap">
                  <button className="hover:cursor-pointer text-[#F53E32] text-[15px] sm:text-[17px] leading-[25px] font-semibold">Description</button>
                  <button className="hover:cursor-pointer text-[#2B2B2D] text-[15px] sm:text-[17px] leading-[25px] font-semibold hover:text-[#F53E32]">Information</button>
                  <button className="hover:cursor-pointer text-[#2B2B2D] text-[15px] sm:text-[17px] leading-[25px] font-semibold hover:text-[#F53E32]">Review</button>
                </div>

                <div className="bg-[#e9e9e9] h-px" />

                <div className="flex flex-col gap-4">
                  <p className="font-poppins leading-[25px] text-[13px] sm:text-[14px] font-normal text-[#7A7A7A]">
                    {product.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus consequatur."}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-poppins text-[16px] leading-6 font-bold text-[#2B2B2D]">Packaging & Delivery</span>
                  <div className="bg-[#e9e9e9] h-px" />
                  <span className="font-poppins text-[14px] leading-6 text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequuntur repellat distincto re. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
              <div className="w-full flex flex-col py-6 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[24px] sm:text-[32px] leading-8 sm:leading-[38px] text-[#2B2B2D] font-bold text-center">Popular Products</span>
                  <span className="text-[14px] sm:text-[16px] leading-5 sm:leading-[22px] text-[#7A7A7A] font-medium text-center font-poppins max-w-[800px] px-4">
                    Discover our most loved products chosen by customers like you
                  </span>
                </div>
                
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                    {popularProducts.map((popularProduct) => (
                      <ProductCard
                        key={popularProduct.id}
                        id={popularProduct.id}
                        name={popularProduct.name}
                        image={popularProduct.image}
                        flag={popularProduct.flag}
                        discount={popularProduct.discount}
                        category={popularProduct.category?.name || ""}
                        rating={popularProduct.rating}
                        brand={popularProduct.brand}
                        price={popularProduct.price}
                      />
                    ))}
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default page