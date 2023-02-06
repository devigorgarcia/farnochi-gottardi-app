import { Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import engImg from "../../assets/eng.jpg";
import archImg from "../../assets/header1.png";
import planImg from "../../assets/planejamento.jpg";
import "animate.css/animate.min.css";

export const Services = () => {
  return (
    <Container
      maxW={"4xl"}
      display="flex"
      flexDir={{ base: "column", lg: "column" }}
      gap="1.5rem"
      mt={{ base: "1rem" }}
    >
      <Flex flexDir={"column"} gap="0.5rem">
        <Heading textTransform={"uppercase"}>Soluções Criativas</Heading>
        <Divider />
        <Text>
          Construir com seriedade e respeito. Uma formação de experientes
          profissionais que oferecem ao mercado um singular valor:{" "}
          <strong> Resultado!</strong>
        </Text>
      </Flex>

      <Flex flexDir={{ base: "column" }} gap="1rem">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <ServiceCard img={engImg} title="Engenharia">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum
            nobis molestias consequuntur ipsam, odit exercitationem impedit
            dolore temporibus ratione quasi aspernatur illo omnis optio vero
            accusamus. Optio, iusto exercitationem.
          </ServiceCard>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <ServiceCard img={archImg} title="Arquitetura" highligth>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum
            nobis molestias consequuntur ipsam, odit exercitationem impedit
            dolore temporibus ratione quasi aspernatur illo omnis optio vero
            accusamus. Optio, iusto exercitationem.
          </ServiceCard>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <ServiceCard img={planImg} title="Adminstração de Obras">
            A Farnochi Gottardi gerencia obras com integridade e excelência,
            atendendo a contratos e metas. Focada em atender as necessidades dos
            clientes com eficiência e profissionalismo. Conheça mais sobre nossa
            gestão de obras.
          </ServiceCard>
        </AnimationOnScroll>
      </Flex>
    </Container>
  );
};
