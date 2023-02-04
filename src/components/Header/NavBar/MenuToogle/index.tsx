import { Box } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

interface IMenuOpenProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuToggle = ({ isOpen, toggle }: IMenuOpenProps) => {
  return (
    <>
      <Box onClick={toggle} display={{ base: "block", md: "none" }}>
        {isOpen ? (
          <IoMdClose size={"30px"} cursor="pointer" />
        ) : (
          <GiHamburgerMenu size={"30px"} cursor="pointer" />
        )}
      </Box>
    </>
  );
};
