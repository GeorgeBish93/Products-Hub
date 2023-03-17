import { useEffect, useState } from "react";


interface Product{
    id:number;
    title:string;
}
interface FetchProductsResponse{
    count:number;
    results: Product[];
}

const useProducts = () =>{
    const [products,setProducts] = useState<Product[]>([]);
    const [error,setError] = useState('');
  
    useEffect(()=>{
        // apiClient.get<FetchProductsResponse>('/products')
        //   .then(res => setProducts(res.data.results))
        //     .catch(err => setError(err.message))
        let componentMounted = true;
        const getProdcuts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            if (componentMounted) {
                const data = await response.json();
                setProducts(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();

    },[]);
    return {products,error};

}
export default useProducts;
