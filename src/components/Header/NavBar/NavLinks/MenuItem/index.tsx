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
          _hover={{}}
          href={to}
          width="100%"
        >
          <ChakraBox
            as={motion.div}
            whileHover={{
              borderBottom: "2px solid #A66D6D",
              fontWeight: "600",
            }}
            transition="0.1s ease-in-out"
          >
            <Text
              textAlign={["left", "left", "center", "center"]}
              display={"flex"}
              _hover={{ color: "#A66D6D" }}
              color="#003400"
              alignItems="center"
              align={"center"}
              fontSize={["18px", "17px"]}
              gap="2"
              {...rest}
            >
              {children}
            </Text>
          </ChakraBox>
        </Link>
      ) : (
        <ChakraBox
          as={motion.div}
          whileHover={{
            borderBottom: "2px solid #A66D6D",
            fontWeight: "600",
          }}
          transition="0.2s ease"
        >
          <Link onClick={() => setIsOpen(false)} href={to} _hover={{}}>
            <Text
              textAlign={["left", "left", "center", "center"]}
              display={"flex"}
              alignItems="center"
              align={"center"}
              fontSize={["18px", "17px"]}
              gap="2"
              textTransform={"uppercase"}
              _hover={{ color: "#A66D6D" }}
              {...rest}
            >
              {children}
            </Text>
          </Link>
        </ChakraBox>
      )}
    </>
  );
};
