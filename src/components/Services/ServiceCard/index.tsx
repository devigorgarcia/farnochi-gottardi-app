import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IServiceCardProps {
  title: string;
  children: ReactNode;
  img: string;
  highligth?: boolean;
}

export const ServiceCard = ({
  title,
  children,
  img,
  highligth,
}: IServiceCardProps) => {
  return (
    <Card
      direction={
        highligth
          ? { base: "column", sm: "row-reverse" }
          : { base: "column", sm: "row" }
      }
      overflow="hidden"
      variant="outline"
      bg={highligth ? "purple.900" : "white"}
      color={highligth ? "white" : "purple.900"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={img}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md" textTransform={"uppercase"}>
            {title}
          </Heading>

          <Text py="5">{children}</Text>
        </CardBody>

        <CardFooter
          display={"flex"}
          justify={highligth ? "flex-start" : "flex-end"}
        >
          <Button
            variant="solid"
            bg={highligth ? "white" : "purple.900"}
            color={highligth ? "purple.900" : "white"}
          >
            Saiba Mais
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
