import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/22222222.jpg";
import { ColorModeButton } from "./ui/color-mode";

const Nav = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"30px"} alt="logo" />
      <ColorModeButton />
    </HStack>
  );
};

export default Nav;
