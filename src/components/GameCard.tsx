import React from "react";
import type { Game } from "../utils/types";
import { Card, Text, Image } from "@chakra-ui/react";
interface IGameCard {
  game: Game;
}

const GameCard: React.FC<IGameCard> = ({ game }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" cursor={"pointer"}>
      <Image
        src={game.background_image}
        alt={game.name}
        fit="cover"
        w="100%"
        height={"200px"}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>{game.released}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="auto">
          {game.rating}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
