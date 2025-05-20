import type { Genre } from "../utils/fetch-genre-types";
import { Text, List, HStack, Avatar, Button } from "@chakra-ui/react";
import useData from "../hooks/useData";
interface Props {
  onSelectGenre: (genre: string) => void;
}
const GenreList: React.FC<Props> = ({ onSelectGenre }) => {
  const { data: genres, errorMessage } = useData<Genre>("/genres");

  return (
    <>
      {errorMessage ? (
        <Text color="red" fontSize={"2.5rem"}>
          {errorMessage}
        </Text>
      ) : (
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
          {genres.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg" me="-1">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background} />
                </Avatar.Root>
                <Button
                  variant={"outline"}
                  borderWidth="0"
                  onClick={onSelectGenre.bind(undefined, g.name)}
                >
                  {g.name}
                </Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;
