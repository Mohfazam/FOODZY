import CategoryGrid from "@/Components/CategoryGrid";
import DailyBestSales from "@/Components/DailyBestSales";
import DealOfTheDay from "@/Components/DealOfTheDay";
import Delivery from "@/Components/Delivery";
import {Footer} from "@/Components/Footer";
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
      <Delivery />
      <Footer />
    </div>
  );
}
