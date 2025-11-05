import { ProductCard } from './ProductCard';
import { useProductStore } from '@/Store/Store';

const PopularProducts = () => {
    const products = useProductStore((state) => state.products);

    console.log("Products inside PopularProducts component:", products);

    const displayProducts = products?.slice(0, 10) || [];

    return (
        <div className="w-full px-4 py-4 overflow-hidden">
            <div className="max-w-[1585.97px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
                    {displayProducts.length > 0 ? (
                        displayProducts.map((product) => (
                            <ProductCard
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
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-400 text-lg">No products available.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;