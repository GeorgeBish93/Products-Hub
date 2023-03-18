import useProducts from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";

const ProductGrid = () => {
  const { products, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer>
              <CardSkeleton key={skeleton} />
            </CardContainer>
          ))}

        {products.map((product) => (
          <CardContainer>
            <ProductCard key={product.id} product={product} />
          </CardContainer>
        ))}
      </SimpleGrid>
      <ul></ul>
    </>
  );
};

export default ProductGrid;
