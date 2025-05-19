import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, md: `'nav nav' 'main '` }}
      gap={6}
    >
      <GridItem area="nav" bg="gold">
        <Nav />
      </GridItem>
      {/* <GridItem area="aside" bg="coral">
        adide
      </GridItem> */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
