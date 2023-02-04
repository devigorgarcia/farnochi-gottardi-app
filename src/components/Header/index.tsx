import { Box, Flex } from "@chakra-ui/react";
import { Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import header1 from "../../assets/header1.png";
import header2 from "../../assets/header2.png";
import header3 from "../../assets/header3.png";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <Box pos={"relative"}>
      <NavBar />
      <Flex h="100vh" w="100%">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={"fade"}
        >
          <SwiperSlide>
            <Flex
              align={"center"}
              justify="center"
              h="100vh"
              w="100%"
              bgImage={`url(${header1})`}
              bgPos="center"
              bgSize="cover"
            >
              ""
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              align={"center"}
              justify="center"
              h="100vh"
              w="100%"
              bgImage={`url(${header2})`}
              bgPos="center"
              bgSize="cover"
            ></Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              align={"center"}
              justify="center"
              h="100vh"
              w="100%"
              bgImage={`url(${header3})`}
              bgPos="center"
              bgSize="cover"
            ></Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  );
};
