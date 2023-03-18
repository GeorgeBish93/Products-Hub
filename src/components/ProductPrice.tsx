import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
}

const ProductPrice = ({ score }: Props) => {
  let color = score > 500 ? 'red' : score > 100 ? 'yellow' : 'green';

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default ProductPrice