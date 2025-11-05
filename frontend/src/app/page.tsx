import CategoryGrid from "@/Components/CategoryGrid";
import DailyBestSales from "@/Components/DailyBestSales";
import DealOfTheDay from "@/Components/DealOfTheDay";
import Hero from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar"
import ProductsWrapper from "@/Components/ProductsWrapper";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ProductsWrapper />
      <DailyBestSales />
      <DealOfTheDay />
    </div>
  );
}
