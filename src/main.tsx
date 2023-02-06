import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "./styles/theme";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={Theme}>
    <App />
  </ChakraProvider>
);
