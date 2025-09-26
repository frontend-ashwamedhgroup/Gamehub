import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gaming.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} borderRadius={10} boxSize="60px" />
      <SearchInput  />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
