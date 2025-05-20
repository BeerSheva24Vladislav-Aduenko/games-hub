import type { Game } from "../utils/fetch-game-types";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useData from "../hooks/useData";
const GameGrid = () => {
  const { data: games, errorMessage } = useData<Game>("/games");

  return (
    <>
      {errorMessage ? (
        <Text color="red" fontSize={"2.5rem"}>
          {errorMessage}
        </Text>
      ) : (
        <SimpleGrid
          paddingEnd={2}
          maxHeight="85vh"
          overflow="auto"
          marginTop="2vh"
          columns={{
            base: 1,
            sm: 2,
            md: 3,
          }}
          gap={5}
        >
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
