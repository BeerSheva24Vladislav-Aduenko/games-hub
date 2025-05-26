import { Button } from "@chakra-ui/react";
import React from "react";
import useGameQuery from "../state-managment/store";

const DiscardButton: React.FC = () => {
  const { setDiscard } = useGameQuery();
  return (
    <Button variant="outline" size="sm" borderWidth={0} onClick={setDiscard}>
      Discard Filters
    </Button>
  );
};

export default DiscardButton;
