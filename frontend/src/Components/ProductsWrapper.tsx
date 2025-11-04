'use client';

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import PopularProducts from "./PopularProducts";

const ProductsWrapper = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products</p>;

  return <PopularProducts products={data} />;
};

export default ProductsWrapper;
