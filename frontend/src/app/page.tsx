import CategoryGrid from "@/Components/CategoryGrid";
import Hero from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar"
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/lib/api'
import ProductsWrapper from "@/Components/ProductsWrapper";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ProductsWrapper />
    </div>
  );
}
