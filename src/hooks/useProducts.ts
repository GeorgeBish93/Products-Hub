import { ProductQuery } from "../App";
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
const useProducts = (productQuery: ProductQuery) =>
  useData<Product>(
    "/products",
    {
      params: {
        categoryId: productQuery.category?.id,
      },
    },
    [productQuery]
  );
export default useProducts;
