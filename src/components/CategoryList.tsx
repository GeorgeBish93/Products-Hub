import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useCategory from "../hooks/useCategory";

const CategoryList = () => {
  const { data } = useCategory();
  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id} paddingY="5px">
          <HStack>
            <Image boxSize="20px" borderRadius={8} src={category.image}></Image>
            <Text fontSize="lg">{category.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
