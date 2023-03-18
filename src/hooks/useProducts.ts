import { useEffect, useState } from "react";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

const useProducts = () => useData<Product>("/products");
export default useProducts;
