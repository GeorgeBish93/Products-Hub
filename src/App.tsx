import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";


function App() {
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
      <NavBar  />

      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
