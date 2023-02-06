import { Box, Flex, Text } from "@chakra-ui/react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import header1 from "../../assets/header1.png";
import header2 from "../../assets/header2.png";
import header3 from "../../assets/header3.png";

import { NavBar } from "./NavBar";

import "swiper/css/effect-fade";
import "swiper/css";

export const Header = () => {
  return (
    <Box>
      <NavBar />
      <Flex h="100vh" w="100%" pos="relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={"fade"}
        >
          <SwiperSlide>
            <Flex
              h="99vh"
              w="100%"
              bgImage={`url(${header1})`}
              bgPos="center"
              bgSize="cover"
              align={"flex-end"}
              justify="flex-end"
            >
              <Flex
                flexDir={"column"}
                color="white"
                p="2rem"
                gap="2rem"
                w="60%"
                pos="absolute"
                bottom="20"
              >
                <Text
                  alignSelf={"flex-end"}
                  w="350px"
                  textAlign={"justify"}
                  fontFamily={"Inter"}
                  fontWeight="500"
                  bg="#0000007a"
                  p="1rem"
                  rounded="10px"
                >
                  Construir com seriedade e respeito. Uma formação de
                  experientes profissionais que oferecem ao mercado um singular
                  valor: <strong> Resultado!</strong>
                </Text>
              </Flex>
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
              pos="relative"
            >
              <Flex
                flexDir={"column"}
                color="white"
                p="2rem"
                gap="2rem"
                w="60%"
                pos="absolute"
                bottom="20"
                right="0"
              >
                <Text
                  alignSelf={"flex-end"}
                  w="350px"
                  textAlign={"justify"}
                  fontFamily={"Inter"}
                  fontWeight="500"
                  bg="#0000007a"
                  p="1rem"
                  rounded="10px"
                >
                  Construir com seriedade e respeito. Uma formação de
                  experientes profissionais que oferecem ao mercado um singular
                  valor: <strong> Resultado!</strong>
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              h="100vh"
              w="100%"
              bgImage={`url(${header3})`}
              bgPos="center"
              bgSize="cover"
              pos="relative"
            >
              <Flex
                flexDir={"column"}
                color="white"
                p="2rem"
                gap="2rem"
                w="60%"
              >
                <Text
                  alignSelf={"flex-end"}
                  w="350px"
                  justifySelf={"flex-end"}
                  textAlign={"justify"}
                  fontFamily={"Inter"}
                  fontWeight="500"
                  bg="#0000007a"
                  p="1rem"
                  rounded="10px"
                  pos="absolute"
                  bottom="40"
                  right="10"
                >
                  Construir com seriedade e respeito. Uma formação de
                  experientes profissionais que oferecem ao mercado um singular
                  valor: <strong> Resultado!</strong>
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  );
};
