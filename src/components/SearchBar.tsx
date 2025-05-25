import { Box, Input, InputGroup } from "@chakra-ui/react";
import React, { useRef, type FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  searchSubmitter: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchSubmitter }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    inputElement.current?.blur();
    searchSubmitter(inputElement.current!.value || "");
  };
  return (
    <Box as="form" onSubmit={onSubmit} boxSize={"100%"} cursor={"pointer"}>
      <InputGroup startElement={<FaSearch />}>
        <Input
          ref={inputElement}
          onFocus={() =>
            inputElement.current?.value && (inputElement.current.value = "")
          }
          borderRadius={"30px"}
          placeholder="Search games..."
          required
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
