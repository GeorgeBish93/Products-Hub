import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}
interface FetchProductsResponse {
  count: number;
  results: Product[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // apiClient.get<FetchProductsResponse>('/products')
    //   .then(res => setProducts(res.data.results))
    //     .catch(err => setError(err.message))
    let componentMounted = true;
    const getProdcuts = async () => {
      setLoading(true);

      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (componentMounted) {
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
        setLoading(false);
      };
    };
    getProdcuts();
  }, []);
  return { products, error, isLoading };
};
export default useProducts;
