import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

export const Hero = () => {
  return (
    <Flex flexDir={{ base: "column" }}>
      <Flex
        flexDir={"row"}
        bg="#C0BFBB"
        p="1rem"
        w={{ base: "100%", md: "40%" }}
        boxShadow={"10px 10px 5px 0px rgba(0,0,0,0.75)"}
        gap="1.5rem"
      >
        <Image
          src="https://static.wixstatic.com/media/e306a5_1e90dc0ad3284c89b160e10464ee4ed1~mv2.png"
          w="20%"
          maxW={"80px"}
        />
        <Flex flexDir={"column"}>
          <Heading
            textAlign={"left"}
            textShadow={" 4px 3px 0 #7A7A7A"}
            color={"white"}
          >
            LANÇAMENTO
          </Heading>
          <Heading
            textAlign={"left"}
            size={"md"}
            textShadow={" 2px 2px 0 #7A7A7A"}
            color={"white"}
          >
            RESEDENCIAL OUTEIRO DO SUL
          </Heading>
        </Flex>
      </Flex>
      <Box
        boxShadow={"10px 10px 5px 0px rgba(0,0,0,0.75)"}
        bg="purple.900"
        w="30%"
        p="1rem"
      >
        <Heading pt="1rem" size={"md"} color={"white"} textAlign={"center"}>
          EM BREVE!
        </Heading>
      </Box>
    </Flex>
  );
};
