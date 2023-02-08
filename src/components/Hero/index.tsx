import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

export const Hero = () => {
  return (
    <Flex flexDir={{ base: "column" }}>
      <Flex
        flexDir={"column"}
        bg="#C0BFBB"
        p="1rem"
        w={{ base: "100%", md: "50%" }}
        boxShadow={"10px 10px 5px 0px rgba(0,0,0,0.75)"}
        pos="relative"
        gap="0.5rem"
      >
        <Image
          src="https://static.wixstatic.com/media/e306a5_1e90dc0ad3284c89b160e10464ee4ed1~mv2.png"
          w="20%"
          pos="absolute"
          maxW={"80px"}
        />
        <Heading
          textAlign={"right"}
          textShadow={" 4px 3px 0 #7A7A7A"}
          color={"white"}
        >
          LANÇAMENTO
        </Heading>
        <Heading
          textAlign={"right"}
          size={"md"}
          textShadow={" 2px 2px 0 #7A7A7A"}
          color={"white"}
        >
          RESEDENCIAL OUTEIRO DO SUL
        </Heading>
      </Flex>
      <Box
        boxShadow={"10px 10px 5px 0px rgba(0,0,0,0.75)"}
        bg="purple.900"
        w="40%"
        p="1rem"
      >
        <Heading pt="1rem" size={"md"} color={"white"} textAlign={"center"}>
          EM BREVE!
        </Heading>
      </Box>
      <Container>
        <Flex mt="3rem">
          <Text color="white">
            Localizado no alto da zona sul da cidade de Ribeirão Preto/SP, o
            Edifício Outeiro do Sul oferece 82,77 metros quadrados de muito
            conforto e sofisticação. Cada apartamento possui 2 suítes, varanda
            gourmet com vista privilegiada, 2 vagas de garagem, cozinha
            integrada à sala de jantar/estar e conta com infraestrutura para
            climatização de todos os dormitórios e sala. Entre em contato
            conosco para mais informações.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};
