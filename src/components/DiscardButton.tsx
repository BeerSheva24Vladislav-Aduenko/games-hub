import { Button } from "@chakra-ui/react";
import React from "react";

const DiscardButton: React.FC = () => {
  return (
    <Button variant="outline" size="sm" borderWidth={0}>
      Discard Filters
    </Button>
  );
};

export default DiscardButton;
