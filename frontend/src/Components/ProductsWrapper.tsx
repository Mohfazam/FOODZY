"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import { useProductStore } from "@/Store/Store";
import PopularProducts from "./PopularProducts";

const ProductsWrapper = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    console.log("Query data:", data);
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-lg text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-lg text-red-600">Failed to load products. Please try again.</p>
      </div>
    );
  }

  return <PopularProducts />;
};

export default ProductsWrapper;