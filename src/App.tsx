import { Box, Grid, GridItem, Stack, Wrap } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SorterSelector, { type SortOption } from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";
import useGameQuery from "./state-managment/store";
import DiscardButton from "./components/DiscardButton";

function App() {
  const {
    genreName,
    platform,
    searchText,
    ordering,
    setGenreName,
    setPlatform,
    setSearchText,
    setOrdering,
  } = useGameQuery();

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <Nav
          searchSubmitter={(searchText: string) => setSearchText(searchText)}
        />
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside" paddingX={5}>
          <GanreList
            selectedGenre={genreName}
            onSelectGenre={(genreName: string | null) =>
              setGenreName(genreName)
            }
          />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <Wrap>
          <PlatformSelector
            selectedPlatform={platform}
            onSelectPlatform={(platform) => setPlatform(platform)}
          />
          <SorterSelector
            selectedOrdering={ordering}
            onSelectOrdering={(option) =>
              setOrdering(option as SortOption | null)
            }
          />
          <DiscardButton />
          <Box as="div" display={"inline"} hideBelow={"sm"} hideFrom={"md"}>
            <GenreSelector
              selectedGenre={genreName}
              onSelectGenre={(genreName: string | null) =>
                setGenreName(genreName)
              }
            />
          </Box>
        </Wrap>
        <GameGrid gameQuery={{ genreName, platform, searchText, ordering }} />
      </GridItem>
    </Grid>
  );
}

export default App;
