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
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={{ sm: "1rem" }}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
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
      </Stack>
    </Flex>
  );
};
