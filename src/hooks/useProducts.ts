import { useEffect, useState } from "react";
import { Category } from "./useCategory";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  category: {
    id: number;
    name: string;
  };
}

//here insert the endount code
const useProducts = (selectedCategory: Category | null) =>
  useData<Product>("/products");
export default useProducts;
