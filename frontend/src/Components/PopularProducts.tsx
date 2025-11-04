import { ProductCard } from './ProductCard'

const PopularProducts = ({ products }: { products: any[] }) => {
    return (
        <div className="w-full px-4 py-4 overflow-hidden">
            <div className="max-w-[1585.97px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default PopularProducts