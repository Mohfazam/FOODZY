import { CartModal } from "@/Components/CartModal";
import CategoryGrid from "@/Components/CategoryGrid";
import DailyBestSales from "@/Components/DailyBestSales";
import DealOfTheDay from "@/Components/DealOfTheDay";
import Delivery from "@/Components/Delivery";
import { FloatingCartButton } from "@/Components/FloatingCartButton ";
import {Footer} from "@/Components/Footer";
import Hero from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar"
import ProductsWrapper from "@/Components/ProductsWrapper";

export default function Home() {
  return (
    <div>
      
      <FloatingCartButton />
      <CartModal />
      <Hero />
      <CategoryGrid />
      <ProductsWrapper />
      <DailyBestSales />
      <DealOfTheDay />
      <Delivery />
    </div>
  );
}
