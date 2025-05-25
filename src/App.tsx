import { Grid, GridItem, Stack, Wrap } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SorterSelector from "./components/SortSelector";
import type GameQuery from "./utils/gameQuery";
import type ParentOrder from "./utils/ParentOrder";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <Nav
          searchSubmitter={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside" paddingX={5}>
          <GanreList
            selectedGenre={gameQuery.genreName}
            onSelectGenre={(genreName: string | null) =>
              setGameQuery({ ...gameQuery, genreName })
            }
          />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <Wrap>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SorterSelector
            onSelectOrdering={(option) => setGameQuery({ ...gameQuery, ordering: option })} selectedOrdering={gameQuery.ordering}
          />
        </Wrap>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
