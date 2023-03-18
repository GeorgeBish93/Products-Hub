import { Heading } from "@chakra-ui/react";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const CategoryHeading = ({ productQuery }: Props) => {
  const heading = `${productQuery.sortOrder || ""} ${
    productQuery.category?.name || ""
  } Products`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default CategoryHeading;
