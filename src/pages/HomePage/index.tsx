import { Flex } from "@chakra-ui/react";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
} from "react-scroll-motion";
import { Header } from "../../components/Header";
import { Services } from "../../components/Services";

export const HomePage = () => {
  return (
    <Flex flexDir={"column"}>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={(batch(Fade()), MoveOut(0, -200))}>
            <Header />
          </Animator>
        </ScrollPage>
        <ScrollPage style={{ height: "100%" }}>
          <Animator animation={batch(FadeIn())}>
            <Services />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Flex>
  );
};
