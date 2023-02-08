import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

export const NewProject = () => {
  return (
    <Container maxW={"7xl"}>
      <Flex flexDir={{ base: "column", md: "row" }} gap="2rem">
        <Box w={{ base: "100%", md: "120%" }}>
          <video
            autoPlay
            loop
            playsInline
            preload="auto"
            muted
            width="100%"
            src="https://video.wixstatic.com/video/e306a5_ac3e3a978c5a489584f7f75ccc9eacaa/480p/mp4/file.mp4"
          />
        </Box>
        <Flex flexDir={"column"} gap="1rem" w="100%">
          <Heading size={"lg"}>Residencial Outeiro do Sul</Heading>
          <Text mt="2rem">
            Localizado no alto da zona sul da cidade de Ribeirão Preto/SP, o
            Edifício Outeiro do Sul oferece 82,77 metros quadrados de muito
            conforto e sofisticação. Cada apartamento possui 2 suítes, varanda
            gourmet com vista privilegiada, 2 vagas de garagem, cozinha
            integrada à sala de jantar/estar e conta com infraestrutura para
            climatização de todos os dormitórios e sala. Entre em contato
            conosco para mais informações.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
