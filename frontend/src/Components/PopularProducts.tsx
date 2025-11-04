
import { ProductCard } from './ProductCard'

const PopularProducts = () => {
  return (
    <div className="w-full px-4 py-4">
  <div className="grid grid-cols-5 grid-rows-2 gap-4 justify-center">
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

  )
}

    export default PopularProducts
