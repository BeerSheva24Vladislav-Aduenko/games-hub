import { Menu, Button, Portal, Spinner } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, type FC } from "react";
import type ParentPlatform from "../utils/ParentPlatform";
import usePlatforms from "../hooks/usePlatforms";
import { easeInOut } from "framer-motion";
import ComponentMotion from "./ComponentMotion";
interface Props {
  selectedPlatform: ParentPlatform | null;
  onSelectPlatform: (platform: ParentPlatform) => void;
}

const duration = 0.5;

const PlatformSelector: FC<Props> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const { errorMessage, isLoading, data: platforms } = usePlatforms();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        !errorMessage && (
          <Menu.Root onExitComplete={() => setIsOpen(false)}>
            <Menu.Trigger asChild onClick={() => setIsOpen(!isOpen)}>
              <Button variant="outline" size="sm" borderWidth={0}>
                {selectedPlatform?.name || "Platforms"}
                {isOpen ? (
                  <ComponentMotion
                    duration={duration}
                    timing={easeInOut}
                    key="down"
                  >
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
                <ComponentMotion duration={duration} timing={easeInOut}>
                  <Menu.Content>
                    {platforms.map((p) => (
                      <Menu.Item
                        key={p.id}
                        onClick={() => onSelectPlatform(p)}
                        value={p.id}
                      >
                        {p.name}
                      </Menu.Item>
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

export default PlatformSelector;
