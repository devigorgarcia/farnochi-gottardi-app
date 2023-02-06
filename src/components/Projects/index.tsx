import { Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import edificio from "../../assets/edificio.jpg";
import { ProjectCard } from "./ProjectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const projects = [
  {
    title: "Edificil",
    type: "Residencial",
    img: edificio,
  },
  {
    title: "Edificil",
    type: "Residencial",
    img: edificio,
  },
  {
    title: "Edificil",
    type: "Residencial",
    img: edificio,
  },
  {
    title: "Edificil",
    type: "Residencial",
    img: edificio,
  },
  {
    title: "Edificil",
    type: "Residencial",
    img: edificio,
  },
  {
    title: "Edificil",
    type: "Residencial",
    img: edificio,
  },
];

export const Projects = () => {
  return (
    <Box bg="#4E4E4E" color="white" p="3rem">
      <Container maxW={"6xl"}>
        <Flex flexDir={{ base: "column" }} gap="1rem">
          <Heading textTransform={"uppercase"} fontFamily={"Montserrat"}>
            Projetos
          </Heading>
          <Divider />
          <Text lineHeight={"32px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet
            illum quo sapiente asperiores voluptatibus explicabo officia
            officiis fugiat, natus modi. Aut incidunt quaerat laborum enim
            aspernatur eligendi porro suscipit.
          </Text>
        </Flex>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <Flex
            flexDir={{ base: "row", md: "row" }}
            wrap={{ base: "nowrap", md: "wrap" }}
            overflowX={{ base: "auto" }}
            gap="1rem"
            align={"center"}
            mt="1rem"
            justify={{ base: "", md: "center" }}
            w="100%"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "white",
                borderRadius: "10px",
              },
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                title={project.title}
                key={index}
                img={project.img}
                type={project.type}
              />
            ))}
            {/* <ProjectCard
              title="Edificio - Ribeirão Preto"
              type="Residencial"
              img={edificio}
            /> */}
          </Flex>
        </AnimationOnScroll>
      </Container>
    </Box>
  );
};
