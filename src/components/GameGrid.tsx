import { useEffect, useState } from "react";
import api from "../services/apiClient";
import type { Game, GamesResponse } from "../utils/fetch-game-types";
import { AxiosError } from "axios";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
const GameGrid = () => { 
  const [games, setGames] = useState<Game[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    api
      .get<GamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error: AxiosError) => setErrorMessage(error.message));
  }, []);
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
