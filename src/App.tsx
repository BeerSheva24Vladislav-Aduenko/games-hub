import { Grid, GridItem, Stack, Wrap } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { initialFilters, type Filters } from "./utils/filter";
import DiscardButton from "./components/DiscardButton";

function App() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <Stack hideBelow="md">
        <GridItem area="aside" paddingX={5}>
          <GanreList
            selectedGenre={filters.genre}
            onSelectGenre={(genreName: string) =>
              setFilters((prev) => ({ ...prev, genre: genreName }))
            }
          />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <Wrap>
          <PlatformSelector
            selectedPlatform={filters.platform}
            onSelectPlatform={(platform) =>
              setFilters((prev) => ({ ...prev, platform }))
            }
          />
          {(filters.platform || filters.genre) && (
            <DiscardButton setFilters={setFilters} />
          )}
        </Wrap>
        <GameGrid
          selectedGenre={filters.genre}
          selectedPlatform={filters.platform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
