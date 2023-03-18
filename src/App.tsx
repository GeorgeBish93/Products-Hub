import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import CategoryHeading from "./components/CategoryHeading";
import CategoryList from "./components/CategoryList";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import SortSelector from "./components/SortSelector";
import { Category } from "./hooks/useCategory";

export interface ProductQuery {
  category: Category | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <CategoryHeading productQuery={productQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              {" "}
              <SortSelector
                sortOrder={productQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setProductQuery({ ...productQuery, sortOrder })
                }
              />
            </Box>
          </Flex>
        </Box>
        <ProductGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
