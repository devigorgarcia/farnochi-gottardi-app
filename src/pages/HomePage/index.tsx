import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";
import { Services } from "../../components/Services";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const HomePage = () => {
  return (
    <Flex
      flexDir={"column"}
      gap="1rem"
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
      <Header />
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Services />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Projects />
      </AnimationOnScroll>
    </Flex>
  );
};
