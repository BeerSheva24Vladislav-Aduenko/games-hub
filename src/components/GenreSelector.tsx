import {
  Menu,
  Button,
  Portal,
  Avatar,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, type FC } from "react";
import { easeInOut, easeOut } from "framer-motion";
import ComponentMotion from "./ComponentMotion";
import sortOptions from "../../config/sort-config.json";
import useGenre from "../hooks/useGenre";
export type SortOption = (typeof sortOptions)[0];
interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string | null;
}
const duration = 0.5;

const GenreSelector: FC<Props> = ({ onSelectGenre, selectedGenre }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: genres, errorMessage, isLoading } = useGenre();
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        !errorMessage && (
          <Menu.Root onExitComplete={() => setIsOpen(false)}>
            <Menu.Trigger asChild>
              <Button
                variant="outline"
                size="sm"
                borderWidth={0}
                onClick={() => setIsOpen(!isOpen)}
              >
                {`${selectedGenre || "All Genres"}`}
                {isOpen ? (
                  <ComponentMotion duration={duration} timing={easeOut}>
                    <FaChevronUp />
                  </ComponentMotion>
                ) : (
                  <ComponentMotion
                    duration={duration}
                    timing={easeInOut}
                    key="up"
                  >
                    <FaChevronDown />
                  </ComponentMotion>
                )}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <ComponentMotion duration={duration} timing={easeOut}>
                  <Menu.Content>
                    {genres.map((g) => (
                      <HStack padding={2} key={g.id}>
                        <Avatar.Root shape="rounded" size="lg" me="-1">
                          <Avatar.Fallback name={g.name} />
                          <Avatar.Image src={g.image_background} />
                        </Avatar.Root>
                        <Menu.Item
                          onClick={() => onSelectGenre(g.slug)}
                          value={g.slug}
                        >
                          {g.name}
                        </Menu.Item>
                      </HStack>
                    ))}
                  </Menu.Content>
                </ComponentMotion>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        )
      )}
    </>
  );
};

export default GenreSelector;
