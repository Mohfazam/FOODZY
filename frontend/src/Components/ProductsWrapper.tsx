"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import PopularProducts from "./PopularProducts";

interface Product {
  id: string;
  name: string;
  description?: string;
  basicInfo?: string;
  image?: string;
  brand?: string;
  flavour?: string;
  dietType?: string;
  weight?: string;
  speciality?: string;
  ingredients?: string;
  items: number;
  price: number;
  rating?: number;
  reviewsCount?: number;
  stock?: number;
  createdAt: string;
  updatedAt: string;
  category?: {
    id: string;
    name: string;
  };
}

const ProductsWrapper = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products</p>;

  const products: Product[] = data?.data?.products ?? [];

  return <PopularProducts products={products} />;
};

export default ProductsWrapper;
