import React from "react";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import ProductPrice from "./ProductPrice";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(product.images[1])} />
      <CardBody>
        <Heading fontSize="2xl">{product.title}</Heading>
        <HStack justifyContent="space-between" marginBottom={3}>
          <ProductPrice score={product.price} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
