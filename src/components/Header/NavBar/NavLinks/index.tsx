import { Flex, Stack } from "@chakra-ui/react";

import { MenuItem } from "./MenuItem";

export interface INavLinksProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavLinks = ({ isOpen, setIsOpen }: INavLinksProps) => {
  return (
    <Flex
      mt="1rem"
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", lg: "auto" }}
    >
      <Flex
        w="100%"
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "0", lg: "2rem" }}
        justify="center"
      >
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#">
          Inicio
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#projects">
          Projetos
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#projectsDone">
          Obras Realizadas
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#adm">
          Administração de Obras
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#contact">
          Contato
        </MenuItem>
      </Flex>
    </Flex>
  );
};
