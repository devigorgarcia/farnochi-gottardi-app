import { Container, Flex, Heading } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { Animator, ScrollPage, batch, MoveIn } from "react-scroll-motion";
import engImg from "../../assets/eng.jpg";
import archImg from "../../assets/header1.png";
import planImg from "../../assets/planejamento.jpg";

export const Services = () => {
  return (
    <Container
      maxW={"4xl"}
      display="flex"
      flexDir={{ base: "column", lg: "column" }}
      gap="1rem"
      mt={{ base: "1rem" }}
    >
      <Heading size={"2xl"}>Soluções Criativas</Heading>
      <ScrollPage style={{ height: "100%" }}>
        <Flex flexDir={{ base: "column" }} gap="1rem">
          <Animator animation={batch(MoveIn(-1000, 0))}>
            <ServiceCard img={engImg} title="Engenharia">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              harum nobis molestias consequuntur ipsam, odit exercitationem
              impedit dolore temporibus ratione quasi aspernatur illo omnis
              optio vero accusamus. Optio, iusto exercitationem.
            </ServiceCard>
          </Animator>
          <Animator animation={batch(MoveIn(1000, 0))}>
            <ServiceCard img={archImg} title="Arquitetura" highligth>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              harum nobis molestias consequuntur ipsam, odit exercitationem
              impedit dolore temporibus ratione quasi aspernatur illo omnis
              optio vero accusamus. Optio, iusto exercitationem.
            </ServiceCard>
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0))}>
            <ServiceCard img={planImg} title="Adminstração de Obras">
              A Farnochi Gottardi gerencia obras com integridade e excelência,
              atendendo a contratos e metas. Focada em atender as necessidades
              dos clientes com eficiência e profissionalismo. Conheça mais sobre
              nossa gestão de obras.
            </ServiceCard>
          </Animator>
        </Flex>
      </ScrollPage>
    </Container>
  );
};
