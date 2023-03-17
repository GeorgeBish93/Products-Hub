import React from 'react'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'


interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
    return (
        <Card>
          <Image src={product.images[2]} />
          <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
              
            </HStack>
            <Heading fontSize='2xl'>{product.title}</Heading>
          </CardBody>
        </Card>
      )
}

export default ProductCard