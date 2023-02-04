import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { MenuToggle } from "./MenuToogle";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify={[
        "space-between",
        "space-between",
        "space-between",
        "space-evenly",
      ]}
      wrap="wrap"
      w="100%"
      h={"100%"}
      p={["1rem 3rem"]}
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
      position="sticky"
      bg="white"
      zIndex={13}
      top="0"
    >
      <Flex align={"center"} gap="0.25rem" flexDir={"column"}>
        <Image src={logo} width="100px" />
      </Flex>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
    </Flex>
  );
};
