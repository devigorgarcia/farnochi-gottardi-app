import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export interface IProjectCard {
  title: string;
  type: string;
  img: string;
}

export const ProjectCard = ({ title, type, img }: IProjectCard) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      _hover={{ color: "white", cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minW="280px"
      h="280px"
      pos="relative"
    >
      <Image
        src={img}
        w="100%"
        filter={isHovered ? "brightness(50%)" : "brightness(100%)"}
        transition="opacity 0.5s ease"
      />
      {isHovered && (
        <Box
          pos="absolute"
          top={"50%"}
          left="50%"
          transform={"translate(-50%, -50%)"}
        >
          <Heading
            fontFamily={"Montserrat"}
            textAlign={"center"}
            fontSize="21px"
            p="0.5rem 0"
          >
            {title}
          </Heading>
          <Text
            textTransform={"uppercase"}
            fontFamily={"Lato"}
            textAlign={"center"}
          >
            {type}
          </Text>
        </Box>
      )}
    </Flex>
  );
};
