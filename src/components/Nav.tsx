import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";
interface Props {
  searchSubmitter: (text: string) => void;
}

const Nav: React.FC<Props> = ({ searchSubmitter }) => {
  return (
    <HStack paddingTop={"10px"}>
      <Image src={logo} boxSize={"30px"} />
      <SearchBar searchSubmitter={searchSubmitter} />
      <ColorModeButton />
    </HStack>
  );
};

export default Nav;
