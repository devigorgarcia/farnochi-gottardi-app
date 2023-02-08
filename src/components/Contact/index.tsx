import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { FormContact } from "./FormContact";

export const Contact = () => {
  const [height, setHeight] = useState("");
  const [width, setwidth] = useState("");

  useEffect(() => {
    handleWindow();
    window.addEventListener("resize", handleWindow);
    return () => window.removeEventListener("resize", handleWindow);
  }, []);

  const handleWindow = () => {
    if (window.innerWidth < 1024) {
      setHeight("300");
      const newWidth = window.innerWidth - window.innerWidth * 0.35;
      setwidth(String(newWidth));
    } else {
      setHeight("700");
      const newWidth = window.innerWidth - window.innerWidth * 0.65;
      setwidth(String(newWidth));
    }
  };

  return (
    <Flex
      bgGradient={{
        base: "linear(to-t, purple.900 20%, white 10%)",
        lg: "linear(to-l, purple.900 30%, white 10%)",
      }}
      p="3rem 4rem"
      gap="4rem"
      flexDir={{ base: "column", lg: "row" }}
      align={{ base: "center" }}
      id="contact"
    >
      <Flex
        flexDir={"column"}
        gap="1.2rem"
        w="100%"
        maxW={"1000px"}
        margin={{ base: 0, lg: "0 auto" }}
      >
        <Heading>
          Peça seu{" "}
          <Text as="span" color="gray.900">
            orçamento
          </Text>
        </Heading>
        <Text>
          Por favor, preencha o formulário abaixo para solicitar um orçamento.
          Forneça detalhes sobre o objetivo que procura,e nós entraremos em
          contato o mais breve possível com uma cotação personalizada.
        </Text>
        <FormContact />
        <Flex
          w="70%"
          flexDir={{ base: "column", md: "row" }}
          align="flex-start"
          justify={'center'}
          gap="2rem"
        >
          <Flex align={"center"} justify="center" gap="0.5rem">
            <AiOutlinePhone size={"30px"} />
            <VStack spacing={0} align="flex-start">
              <Text fontWeight="bold">Telefone</Text>
              <Text fontSize={"12px"}>(16) 3442-4520</Text>
            </VStack>
          </Flex>
          <Flex align={"center"} gap="0.5rem">
            <MdOutlineMailOutline size={"38px"} />
            <VStack spacing={0} align="flex-start">
              <Text fontWeight="bold">E-mail</Text>
              <Text fontSize={"12px"}>fernando@farnochiengenharia.com.br</Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.9344862688108!2d-47.801600835824615!3d-21.204707075786505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b8d439b2f533%3A0xd65ec564e83ab04b!2sR.%20Paschoal%20Bardaro%20-%20Jardim%20Iraj%C3%A1%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014020-340!5e0!3m2!1spt-BR!2sbr!4v1675897304638!5m2!1spt-BR!2sbr"
          width={width}
          height={height}
          loading="lazy"
        ></iframe>
      </Flex>
    </Flex>
  );
};
