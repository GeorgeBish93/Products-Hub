import useProducts from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";

const ProductGrid = () => {
  const { data, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <CardSkeleton />
            </CardContainer>
          ))}

        {data.map((product) => (
          <CardContainer key={product.id}>
            <ProductCard product={product} />
          </CardContainer>
        ))}
      </SimpleGrid>
      <ul></ul>
    </>
  );
};

export default ProductGrid;
