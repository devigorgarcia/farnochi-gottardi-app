import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";
import { Services } from "../../components/Services";
import { NavBar } from "../../components/Header/NavBar";
import { Hero } from "../../components/Hero";
import { ParallaxBanner } from "react-scroll-parallax";
import "animate.css/animate.min.css";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Flex flexDir={"column"} gap="1rem">
        <Header />
        {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
        <Services />
        {/* </AnimationOnScroll> */}
        <ParallaxBanner
          style={{ aspectRatio: "2/1", height: "100vh" }}
          layers={[
            {
              image:
                "https://static.wixstatic.com/media/e306a5_371f3dc4440c4121bafc4f2520d303f7~mv2.png",
              speed: -20,
            },
            { children: <Hero /> },
          ]}
        />

        {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
        <Projects />
        {/* </AnimationOnScroll> */}
      </Flex>
    </>
  );
};
