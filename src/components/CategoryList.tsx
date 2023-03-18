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
import useCategory, { Category } from "../hooks/useCategory";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, isLoading } = useCategory();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id} paddingY="5px">
          <HStack>
            <Image boxSize="20px" borderRadius={8} src={category.image}></Image>
            <Button
              fontWeight={
                category.id === selectedCategory?.id ? "bold" : "normal"
              }
              onClick={() => onSelectCategory(category)}
              fontSize="lg"
              variant="link"
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
