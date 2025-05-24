import { Button } from "@chakra-ui/react";
import React from "react";
import { type Filters, initialFilters } from "../utils/filter";

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const DiscardButton: React.FC<Props> = ({ setFilters }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      borderWidth={0}
      onClick={() => setFilters(initialFilters)}
    >
      Discard Filters
    </Button>
  );
};

export default DiscardButton;