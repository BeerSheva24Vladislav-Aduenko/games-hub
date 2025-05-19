import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import GameCard from "./GameCard";
import { Grid, Text } from "@chakra-ui/react";
import type { Game } from "../utils/types";
import type { AxiosError } from "axios";

const GameGrid: React.FC = () => {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [responseError, setResponseError] = useState<string>("");
  useEffect(() => {
    apiClient
      .get("/games")
      .then((response) => setGameList(response.data.results))
      .catch((error: AxiosError) => setResponseError(error.message));
  }, []);
  return (
    <>
      {responseError && <Text color="red" textAlign="center" textStyle="6xl">{responseError}</Text>}
      <Grid templateColumns="repeat(5, 1fr)" gap="6" maxW="1440px" mx="auto" mb="10">
        {gameList.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
