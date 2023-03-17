import useProducts from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products, error } = useProducts();

  return (
    <>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
   {products.map((product) => (
    <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
    <ul>
      
    </ul>
    </>

  );
};

export default ProductGrid;
