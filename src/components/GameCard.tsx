import { Card, Image, Text, Badge, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import type { Game } from "../utils/fetch-game-types";
import No_Image from "../assets/No_Image.jpg";
import Rater from "./Rater";
interface Props {
  game: Game;
}
function getColors(metacritic: number): { color: string; bg: string } {
  return metacritic > 90
    ? { color: "white", bg: "green" }
    : { color: "black", bg: "lightgray" };
}
const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={game.background_image || No_Image}
        alt={`image of game ${game.name}`}
        objectFit={"cover"}
        height="100%"
      />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <VStack>
          <HStack justifyContent={"space-between"} width="100%">
            <Text>
              {game.parent_platforms.map((p) => p.platform.name).join("; ")}
            </Text>
            {game.metacritic && (
              <Badge {...getColors(game.metacritic)}>{game.metacritic}</Badge>
            )}
          </HStack>
          <Rater rate={game.rating}></Rater>
        </VStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
