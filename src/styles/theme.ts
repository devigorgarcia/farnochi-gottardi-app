import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  colors: {
    gray: {
      900: "#958E86",
    },
    purple: {
      900: "#312B4B",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          _hover: {
            bg: "#958E86",
          },
        },
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Open Sans",
  },
});
