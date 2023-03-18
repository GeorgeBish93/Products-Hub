import useProducts from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading } = useProducts(productQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
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
  );
};

export default ProductGrid;
