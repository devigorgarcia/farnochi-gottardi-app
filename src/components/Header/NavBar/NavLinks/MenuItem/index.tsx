import { Box, chakra, Link, shouldForwardProp, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { ReactNode } from "react";

export interface IMenuLinksProps {
  children: ReactNode;
  to: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const MenuItem = ({
  children,
  to,
  setIsOpen,
  isOpen,
  ...rest
}: IMenuLinksProps) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop: any) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      {isOpen ? (
        <Link
          onClick={() => setIsOpen(false)}
          _hover={{ _after: { w: "100%" } }}
          href={to}
          width="100%"
          p="10px 0"
          textTransform={"uppercase"}
          pos="relative"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "#958E86",
            h: "3px",
            w: "0%",
            left: 0,
            bottom: "0",
            transition: "0.3s",
          }}
        >
          {children}
        </Link>
      ) : (
        <Link
          onClick={() => setIsOpen(false)}
          _hover={{ _after: { w: "100%" } }}
          href={to}
          p="5px 0"
          textTransform={"uppercase"}
          pos="relative"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "#958E86",
            h: "3px",
            w: "0%",
            left: 0,
            bottom: "0",
            transition: "0.4s",
          }}
        >
          {children}
        </Link>
      )}
    </>
  );
};
