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
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, isLoading } = useCategory();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Categories
      </Heading>
      <List>
        {data.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={8}
                src={getCroppedImageUrl(category.image)}
              ></Image>
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
    </>
  );
};

export default CategoryList;
