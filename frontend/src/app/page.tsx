import CategoryCard from "@/Components/CategoryCard";
import CategoryGrid from "@/Components/CategoryGrid";
import Hero from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar"
import PopularProducts from "@/Components/PopularProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <PopularProducts />
    </div>
  );
}
