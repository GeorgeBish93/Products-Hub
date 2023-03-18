import { useEffect, useState } from "react";

export interface Category {
  id: number;
  name: string;
  image: string;
}

const useCategory = () => {
  const [categories, setCategory] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // apiClient.get<FetchProductsResponse>('/products')
    //   .then(res => setProducts(res.data.results))
    //     .catch(err => setError(err.message))
    let componentMounted = true;
    const getCategories = async () => {
      setLoading(true);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      if (componentMounted) {
        const data = await response.json();
        setCategory(data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
        setLoading(false);
      };
    };
    getCategories();
  }, []);
  return { categories, error, isLoading };
};

export default useCategory;
